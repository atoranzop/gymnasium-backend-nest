import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from '@nestjs/class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'myuser' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 'myemail@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'securePassword123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiProperty({ example: 'securePassword123', minLength: 6 })
  @IsString()
  @MinLength(6)
  confirmPassword!: string;
}
