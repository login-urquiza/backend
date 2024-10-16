import { createTransport } from "nodemailer";
import "dotenv/config";

export class Nodemailer {
  constructor(mailerService, mailerEmail, senderEmailPass) {
    this.transporter = createTransport({
      service: mailerService,
      auth: {
        user: mailerEmail,
        pass: senderEmailPass,
      },
    });
  }

  async sendEmail(options) {
    const { htmlBody, subject, to } = options;

    try {
      console.log({ to, subject, htmlBody });
      await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
      });
      console.lo;

      return true;
    } catch (error) {
      return false;
    }
  }
}