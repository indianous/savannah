import { Request, Response } from "express";
import { CreateInstagramAccountService } from "../../../../services/instagram/account/create";
import { z } from "zod";
import { randomUUID } from "node:crypto";

const createAccountBodySchema = z.object({
  username: z.string(),
  password: z.string().min(6),
});

export class CreateInstagramAccountController {
  constructor(private service: CreateInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {
    try {
      const { username, password } = createAccountBodySchema.parse(
        request.body
      );

      await this.service.execute({ id: randomUUID(), username, password });

      response.status(201).json({ message: "Account created successfully." });
    } catch (error) {
      response
        .status(400)
        .json({ error: "Failed to create account", details: error });
    }
  }
}
