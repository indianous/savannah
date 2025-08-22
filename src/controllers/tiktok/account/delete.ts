import { Request, Response } from "express";
import { DeleteTikTokAccountService } from "../../../services/tiktok/account/delete";

export class DeleteTikTokAccountController {
  constructor(private service: DeleteTikTokAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
