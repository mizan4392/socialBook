import {
  Injectable,
  CanActivate,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { User } from 'src/user/entities/user.entity';
import { getConnection, getRepository } from 'typeorm';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (token) {
      console.log('token', token);
      const parts = token.split(' ');

      if (parts?.length === 2) {
        const jwt = parts[1];
        console.log('jwt', jwt);
        const user = this.jwtService.decode(jwt);
        console.log('user', user);
        request.user = user;
        return true;
      }
    }

    return false;
  }
}

const CurrentUserDecorator = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as User;
    return user;
  },
);

export const CurrentUser = () => CurrentUserDecorator();
