import { IsString, IsInt, IsOptional, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsInt({ message: 'Age must be a number' })
  age: number;

  @IsOptional()
  @IsString({ message: 'Home must be a string if provided' })
  home?: string;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;
}

