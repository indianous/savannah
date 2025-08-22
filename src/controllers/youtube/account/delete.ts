import { Request, Response } from "express";
import { DeleteYoutubeAccountService } from "../../../services/youtube/account/delete";

export class DeleteYoutubeAccountController {
  constructor(private service: DeleteYoutubeAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
