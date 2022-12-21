import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { environment } from './environment/environment';

export interface SendEmailI {
  from?: string;
  to: string;
  subject: string;
  body: string;
  attachments?: string[];
}
@Injectable()
export class EmailService {
  constructor(private mail: MailerService) {}
  async sendEmail(config: SendEmailI) {
    const { from, to, subject, body, attachments } = config;
    console.log(from, to, subject, body);
    await this.mail
      .sendMail({
        to,
        from: from || environment.email.defaultSender,
        subject: subject,
        html: body,
      })
      .then((res) => console.log('res', res))
      .catch((err) => console.log('err', err));
  }
}
