import { IsString, IsInt, Min, Max, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsInt({ message: 'Age must be an integer' })
  @Min(0, { message: 'Age must be at least 0' })
  @Max(120, { message: 'Age must be less than 120' })
  age: number;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsOptional()
  @IsString({ message: 'Home must be a string' })
  home?: string;
}