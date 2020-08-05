import { IsNotEmpty } from 'class-validator';
import { ValidateDate } from '../decorators/pastDates.pipe';

export class CreateEventDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  canceled: boolean;
  
  @IsNotEmpty()
  @ValidateDate({ message: 'Past dates are not permited' })
  date: Date;
}