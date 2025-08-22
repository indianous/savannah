import { Request, Response } from "express";
import { PostInstagramContentService } from "../../../../services/instagram/content/post/instagram";

export class PostInstagramContentController {
  constructor(private service: PostInstagramContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
