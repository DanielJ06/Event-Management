import { IsEmail, IsString, Matches, MinLength } from "class-validator";

export class AuthCredentialsDto {

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 
    { message: 'Password too week' }
  )
  password: string;
}