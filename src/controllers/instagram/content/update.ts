import { Request, Response } from "express";
import { CreateInstagramContentService } from "../../../services/instagram/content/create";

export class CreateInstagramContentController {
  constructor(private service: CreateInstagramContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
