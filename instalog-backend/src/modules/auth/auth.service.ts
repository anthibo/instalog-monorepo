import { BadRequestException, Injectable } from '@nestjs/common';
import { ActorsService } from '../actors/actors.service';
import { HashService } from '../utils/services/hash.service';
import { JwtService } from '@nestjs/jwt';
import { Actor } from '@prisma/client';
import { RegisterActorDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly actorService: ActorsService,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}
  async login(actor: Actor) {
    const payload = { email: actor.email, sub: actor.id };
    return {
      actor,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async registerActor(registerActorDto: RegisterActorDto) {
    const existingActor = await this.actorService.findOne({
      email: registerActorDto.email,
    });
    if (existingActor) {
      throw new BadRequestException({ message: 'this email is already used' });
    }
    const createdActor = await this.actorService.createActor(
      {
        name: registerActorDto.name,
        email: registerActorDto.email,
        hashed_password: await this.hashService.hash(registerActorDto.password),
      },
      { id: true, email: true, name: true },
    );

    const payload = { email: createdActor.email, sub: createdActor.id };
    return {
      actor: createdActor,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateActor(id: string) {
    const actor = await this.actorService.findOne(
      { id },
      {
        email: true,
        name: true,
        id: true,
      },
    );

    if (!actor) return null;

    return actor;
  }

  async validateActorCredentials(email: string, password: string) {
    const actor = await this.actorService.findOne({ email });

    if (!actor) return null;
    const isMatch = await this.hashService.isDataMatch(
      password,
      actor.hashed_password,
    );

    if (!isMatch) {
      return null;
    }

    delete actor['hashed_password'];

    return actor;
  }

  async generateSdkSecretKey(actorId: string) {
    const sdk_secret_key = await this.hashService.generateToken();
    await this.actorService.updateActor({ id: actorId }, { sdk_secret_key });
    return { sdk_secret_key };
  }
}
