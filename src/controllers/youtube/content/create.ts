import { Request, Response } from "express";
import { CreateYoutubeContentService } from "../../../services/youtube/content/create";

export class CreateYoutubeContentController {
  constructor(private service: CreateYoutubeContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
