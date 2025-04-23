/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { RegisterDto } from './Dto/register.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { LoginDto } from './Dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthUser)
    private readonly authUserModel: typeof AuthUser,
    private jwtService: JwtService,
  ) {}

  // register
  async register(registerDto: RegisterDto) {
    // check email
    const authuser = await this.authUserModel.findOne({
      where: { email: registerDto.email },
    });
    if (authuser) {
      throw new BadRequestException(
        'This email already exists. Please try again.',
      );
    }
    // encrypt password (salt and hash)
    const salt = await genSalt(10);
    const hashPassword = await hash(registerDto.password, salt);
    // insert data into table
    const newUser = await this.authUserModel.create({
      username: registerDto.username,
      email: registerDto.email,
      password: hashPassword,
    });
    return newUser;
  }

  // login
  async login(loginDto: LoginDto) {
    try {
      // 1. Find the user by email
      const authuser = await this.authUserModel.findOne({
        where: { email: loginDto.email },
      });
      if (!authuser) {
        throw new UnauthorizedException(
          'This email does not exist. Please try again.',
        );
      }

      // 2. Validate the password
      const isValid = await compare(loginDto.password, authuser.password);
      if (!isValid) {
        throw new UnauthorizedException('Invalid password');
      }

      // 3. Create the JWT payload
      const payload = {
        user_id: authuser.id,
        email: authuser.email,
        username: authuser.username,
      };

      // 4. Log the JWT secret used (for debugging only — remove later!)
      console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);

      // 5. Sign the token using jwtService
      const token = await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET_KEY,
      });

      return { access_token: token };
    } catch (err) {
      console.error('🔥 Login Error:', err);
      throw new UnauthorizedException(
        'Login failed — check credentials or configuration',
      );
    }
  }

  async getUsertProfile(id: number) {
    return await this.authUserModel.findByPk(id, {
      attributes: ['id', 'username', 'email'],
    });
  }

  async getAllUsers() {
    return await this.authUserModel.findAll({
      attributes: ['id', 'username', 'email'], // expose only safe fields
      order: [['id', 'ASC']],
    });
  }
}
