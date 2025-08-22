import { Request, Response } from "express";
import { CreateTikTokContentService } from "../../../services/tiktok/content/create";

export class CreateTikTokContentController {
  constructor(private service: CreateTikTokContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
