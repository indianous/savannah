import { Request, Response } from "express";
import { UpdateYoutubeAccountService } from "../../../services/youtube/account/update";

export class UpdateYoutubeAccountController {
  constructor(private service: UpdateYoutubeAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
