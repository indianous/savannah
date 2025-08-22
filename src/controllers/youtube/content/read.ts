import { Request, Response } from "express";
import { ReadYoutubeContentService } from "../../../services/youtube/content/read";

export class ReadYoutubeContentController {
  constructor(private service: ReadYoutubeContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
