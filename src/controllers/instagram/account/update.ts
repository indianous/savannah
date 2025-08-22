import { Request, Response } from "express";
import { UpdateInstagramAccountService } from "../../../services/instagram/account/update";
import { sqliteInstagramAccountRepository } from "@/repository/sqlite/instagram-account";

export class UpdateInstagramAccountController {
  constructor(private service: UpdateInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}

const service = new UpdateInstagramAccountService(
  sqliteInstagramAccountRepository
);

export const updateInstagramAccountController =
  new UpdateInstagramAccountController(service);
