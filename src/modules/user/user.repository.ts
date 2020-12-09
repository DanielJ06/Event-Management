import { InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import { LoginCredentialsDto } from "./dto/login-credentials.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { email, password, name } = authCredentialsDto;
    const exists = await this.findOne({ email });

    if (exists) {
      throw new UnauthorizedException('Email already exists');
    }

    const hashedPassword = await this.hashPassword(password);
    const user = { name, email, password: hashedPassword }

    return this.save(user);
  }

  async validatePassword(loginCredentialsDto: LoginCredentialsDto): Promise<string> {
    const { email, password } = loginCredentialsDto;

    const user = await this.findOne({ email });

    if (!user) {
      throw new InternalServerErrorException('Invalid crendentials');
    }

    const hash = await bcrypt.compare(password, user.password);

    if (!hash) {
      throw new InternalServerErrorException('Invalid crendentials');
    }

    return email;
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 8);
  }
}