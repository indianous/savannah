import { Request, Response } from "express";
import { CreateYoutubeAccountService } from "../../../services/youtube/account/create";

export class CreateYoutubeAccountController {
  constructor(private service: CreateYoutubeAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
