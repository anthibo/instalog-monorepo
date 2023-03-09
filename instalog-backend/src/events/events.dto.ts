import { IsIP, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateEventDto {
  @IsUUID()
  @IsNotEmpty()
  actor_id: string;

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

  metadata: any;
}
