import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import crypto from 'crypto';
import { CreateUserReq, UpdateUserReq, UserPageReq } from '~/dto/user.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  findOneByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username,
      },
    });
  }

  async page(query: UserPageReq) {
    const where: Partial<User> = {};
    if (query.username) where.username = query.username;
    const list = await this.prismaService.user.findMany({
      where,
      skip: query.pageSize,
      take: query.take,
    });
    const total = await this.prismaService.user.count({ where });
    return {
      list,
      total,
    };
  }

  create(req: CreateUserReq) {
    return this.prismaService.user.create({
      data: {
        username: req.username,
        password: this.passwordMd5(req.password),
      },
    });
  }

  update(id: number, req: UpdateUserReq) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: req,
    });
  }

  delete(id: number) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }

  login(username: string, password: string) {
    return this.prismaService.user.findFirst({
      where: {
        username,
        password: this.passwordMd5(password),
      },
    });
  }

  passwordMd5(password: string): string {
    return crypto.createHash('md5').update(password).digest('hex');
  }
}
