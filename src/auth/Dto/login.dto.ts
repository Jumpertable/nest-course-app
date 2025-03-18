import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Email Required' })
  @IsEmail({}, { message: 'Incorrect Format' })
  email: string;

  @IsNotEmpty({ message: 'Password Required' })
  password: string;
}
