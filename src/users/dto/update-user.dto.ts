import { IsString, IsInt, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name?: string;

  @IsOptional()
  @IsInt({ message: 'Age must be a number' })
  age?: number;

  @IsOptional()
  @IsString({ message: 'Home must be a string if provided' })
  home?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;
}
