import { Request, Response } from "express";
import { ReadYoutubeAccountService } from "../../../services/youtube/account/read";

export class ReadYoutubeAccountController {
  constructor(private service: ReadYoutubeAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
