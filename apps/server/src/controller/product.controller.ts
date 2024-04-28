import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Result } from '~/common/result';
import { AuthGuard } from '~/guard/auth.guard';
import { UserService } from '~/service/user.service';

@Controller('/api/product')
export class ProductController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async list(@Request() req) {
    return Result.ok(req.user);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Request() req) {
    return Result.ok(req.user);
  }

}
