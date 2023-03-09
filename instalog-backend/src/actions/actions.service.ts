import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ActionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAction(name: string) {
    let action = await this.prismaService.action.findFirst({
      where: { name },
    });
    if (!action) {
      action = await this.prismaService.action.create({ data: { name } });
    }
    return action;
  }

  async getActionByName(name: string) {
    const action = await this.prismaService.action.findFirst({
      where: { name },
    });
    return action;
  }
}
