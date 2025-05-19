import { IsString, IsInt, IsOptional, Min, Max } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string' })
  name?: string;

  @IsOptional()
  @IsInt({ message: 'Age must be an integer' })
  @Min(0, { message: 'Age must be at least 0' })
  @Max(120, { message: 'Age must be less than 120' })
  age?: number;

  @IsOptional()
  @IsString({ message: 'Home must be a string' })
  home?: string;
}
