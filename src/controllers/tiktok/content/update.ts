import { Request, Response } from "express";
import { UpdateTikTokContentService } from "../../../services/tiktok/content/update";

export class UpdateTikTokContentController {
  constructor(private service: UpdateTikTokContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
