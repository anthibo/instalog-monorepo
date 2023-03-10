import { IsIP, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  group: string;

  @IsNotEmpty()
  action_name: string;

  @IsNotEmpty()
  target_id: string;

  @IsNotEmpty()
  target_name: string;

  @IsIP()
  @IsNotEmpty()
  location: string;

  metadata?: any;
}
