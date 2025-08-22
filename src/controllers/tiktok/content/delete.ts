import { Request, Response } from "express";
import { DeleteTikTokContentService } from "../../../services/tiktok/content/delete";

export class DeleteTikTokContentController {
  constructor(private service: DeleteTikTokContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
