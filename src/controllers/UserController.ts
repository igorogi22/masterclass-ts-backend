import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "Igor Vinicius", email: "igor@email.com" },
  { name: "Danielle Correia", email: "danielle@email.com" },
  { name: "Luna Alves", email: "luna@email.com" },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: {
        name: "Igor Vinicius",
        email: "igor@email.com",
      },
      message: {
        subject: "Typescript",
        body: "São quase 00h e eu aqui estudando",
      },
    });

    return res.send();
  },
};
