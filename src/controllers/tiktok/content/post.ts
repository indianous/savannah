import { Request, Response } from "express";
import { PostTikTokContentService } from "../../../services/tiktok/content/post";

export class PostTikTokContentController {
  constructor(private service: PostTikTokContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
