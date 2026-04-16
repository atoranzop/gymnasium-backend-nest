import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from '@nestjs/class-validator';

export class ChangePasswordDto {
  @ApiProperty({ example: 'securePassword123' })
  @IsString()
  @MinLength(6)
  oldPassword!: string;

  @ApiProperty({ example: 'changedSecurePassword123' })
  @IsString()
  @MinLength(6)
  newPassword!: string;

  @ApiProperty({ example: 'changedSecurePassword123' })
  @IsString()
  @MinLength(6)
  confirmNewPassword!: string;
}
