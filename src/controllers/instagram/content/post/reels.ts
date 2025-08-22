import { Request, Response } from "express";
import { PostReelsContentService } from "../../../../services/instagram/content/post/reels";

export class PostReelsContentController {
  constructor(private service: PostReelsContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
