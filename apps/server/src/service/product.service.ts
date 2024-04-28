import { PrismaService } from '~/service/prisma.service';
import { Injectable } from '@nestjs/common';
import { FindProductDto } from '~/dto/product.dto';
import { Product } from '@prisma/client';


@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async findList(query: FindProductDto) {
    const where: Partial<Product> = {};
    if (query.name) where.name = query.name;
    const total = await this.prismaService.product.count({ where });
    const list = await this.prismaService.product.findMany({
      where,
      skip: query.pageSize,
      take: query.take,
    });
    return { total, list };
  }
  async findOne(id: number) {
    // this.prismaService.;
  }
}

