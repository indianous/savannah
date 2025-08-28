import { Request, Response } from "express";
import { UpdateInstagramAccountService } from "../../../services/instagram/account/update";
import { sqliteInstagramAccountRepository } from "@/repository/sqlite/instagram-account";
import z from "zod";

const paramsSchema = z.object({
  id: z.string(),
});

const bodySchema = z.object({
  password: z.string(),
  username: z.string(),
});

export class UpdateInstagramAccountController {
  constructor(private service: UpdateInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {
    try {
      const { id } = paramsSchema.parse(request.params);
      const { password, username } = bodySchema.parse(request.body);
      this.service.execute({ id, password, username });
      response.status(200).json({});
    } catch (error) {
      response.status(500).json({});
    }
  }
}

const service = new UpdateInstagramAccountService(
  sqliteInstagramAccountRepository
);

export const updateInstagramAccountController =
  new UpdateInstagramAccountController(service);
