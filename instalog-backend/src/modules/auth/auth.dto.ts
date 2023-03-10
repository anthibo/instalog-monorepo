import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterActorDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
