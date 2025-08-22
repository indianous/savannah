import { Request, Response } from "express";
import { ReadInstagramAccountService } from "@/services/instagram/account/read";
import { sqliteInstagramAccountRepository } from "@/repository/sqlite/instagram-account";
import z from "zod";

const readInstagramAccountSchema = z.object({
  id: z.string(),
});

class ReadInstagramAccountController {
  constructor(private service: ReadInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {
    try {
      const id = readInstagramAccountSchema.parse(request.params);
      const data = await this.service.execute(id);
      response.status(200).json(data);
    } catch (error) {
      response.status(500);
    }
  }
}

const service = new ReadInstagramAccountService(
  sqliteInstagramAccountRepository
);

export const readInstagramAccountController =
  new ReadInstagramAccountController(service);
