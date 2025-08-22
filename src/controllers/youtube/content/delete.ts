import { Request, Response } from "express";
import { DeleteYoutubeContentService } from "../../../services/youtube/content/delete";

export class DeleteYoutubeContentController {
  constructor(private service: DeleteYoutubeContentService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
