import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from '@nestjs/class-validator';

export class LoginDto {
  @ApiProperty({ example: 'myemail@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'SecurePassword123' })
  @IsString()
  @MinLength(6)
  password!: string;
}
