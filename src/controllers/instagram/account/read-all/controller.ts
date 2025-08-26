import { Request, Response } from "express";
import { ReadInstagramAccountService } from "@/services/instagram/account/read";

export class ReadAllInstagramAccountController {
  constructor(private service: ReadInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {
    try {
      const data = await this.service.execute({});
      response.status(200).json(data);
    } catch (error) {
      response.status(500);
    }
  }
}
