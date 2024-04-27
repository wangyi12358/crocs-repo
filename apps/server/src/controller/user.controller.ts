import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Result } from '~/common/result';
import { ResultCode } from '~/common/resultCode';
import { CreateUserReq, UserPageReq } from '~/dto/user.dto';
import { AuthGuard } from '~/guard/auth.guard';
import { ManagerGuard } from '~/guard/manager.guard';
import { UserService } from '~/service/user.service';

@Controller('/api/user')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(ManagerGuard)
  @UseGuards(AuthGuard)
  @Get()
  async page(@Query() query: UserPageReq) {
    const data = await this.userService.page(query);
    return Result.ok(data);
  }

  @UseGuards(ManagerGuard)
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() body: CreateUserReq) {
    const isExist = await this.userService.findOneByUsername(body.username);
    if (isExist) {
      return Result.fail(ResultCode.USERNAME_EXISTS);
    }
    const user = await this.userService.create(body);
    return Result.ok(user);
  }
}
