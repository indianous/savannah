import { Request, Response } from "express";
import { CreateTikTokAccountService } from "../../../services/tiktok/account/create";

export class CreateTikTokAccountController {
  constructor(private service: CreateTikTokAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
