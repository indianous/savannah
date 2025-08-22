import { Request, Response } from "express";
import { UpdateYoutubeContentService } from "../../../services/youtube/content/update";

export class UpdateYoutubeContentController {
  constructor(private service: UpdateYoutubeContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
