import { Request, Response } from "express";
import { ReadInstagramAccountService } from "@/services/instagram/account/read";
import z from "zod";

const readInstagramAccountSchema = z.object({
  id: z.string(),
});

export class ReadInstagramAccountController {
  constructor(private service: ReadInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {
    try {
      const { id } = readInstagramAccountSchema.parse(request.params);
      const data = await this.service.execute({ id });
      response.status(200).json(data);
    } catch (error) {
      response.status(500);
    }
  }
}
