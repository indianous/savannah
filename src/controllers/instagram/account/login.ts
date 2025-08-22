import { Request, Response } from "express";
import { LoginInstagramAccountService } from "../../../services/instagram/account/login";
import { sqliteInstagramAccountRepository } from "@/repository/sqlite/instagram-account";

class LoginInstagramAccountController {
  constructor(private service: LoginInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}

const service = new LoginInstagramAccountService(
  sqliteInstagramAccountRepository
);

export const loginInstagramAccountController =
  new LoginInstagramAccountController(service);
