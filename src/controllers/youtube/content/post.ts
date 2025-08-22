import { Request, Response } from "express";
import { PostYoutubeContentService } from "../../../services/youtube/content/post";

export class PostYoutubeContentController {
  constructor(private service: PostYoutubeContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
