import { Request, Response } from "express";
import { ReadTikTokContentService } from "../../../services/tiktok/content/read";

export class ReadTikTokContentController {
  constructor(private service: ReadTikTokContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
