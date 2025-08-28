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
      const [account] = await this.service.execute({ id });
      response.status(200).json(account);
    } catch (error) {
      if (error instanceof z.ZodError) {
        response.status(400).json({
          message: "Invalid request parameters.",
          details: error.flatten(),
        });
        return;
      }
      if (error instanceof Error) {
        response.status(404).json({ message: error.message });
        return;
      }
      response.status(500).json({ message: "An unknown error occurred." });
    }
  }
}
