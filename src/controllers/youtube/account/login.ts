import { Request, Response } from "express";
import { LoginYoutubeAccountService } from "../../../services/youtube/account/login";

export class LoginYoutubeAccountController {
  constructor(private service: LoginYoutubeAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
