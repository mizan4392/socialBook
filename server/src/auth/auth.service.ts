import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  validatePassword(userPassword, hashedPassword): Promise<boolean> {
    return bcrypt.compare(userPassword, hashedPassword);
  }
}
