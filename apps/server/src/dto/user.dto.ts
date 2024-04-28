import { IsNotEmpty } from 'class-validator';
import { PageParams } from './base.dto';

export class UserPageReq extends PageParams {
  username: string;
}

export class CreateUserReq {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class UpdateUserReq {
  age: number;
  gender: number;
}
