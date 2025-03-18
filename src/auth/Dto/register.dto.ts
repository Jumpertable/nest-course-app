import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Username Required' })
  username: string;

  @IsNotEmpty({ message: 'Email Required' })
  @IsEmail({}, { message: 'Incorrect Format' })
  email: string;

  @IsNotEmpty({ message: 'Password Required' })
  password: string;
}
