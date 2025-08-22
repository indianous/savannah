import { Request, Response } from "express";
import { DeleteInstagramAccountService } from "../../../../services/instagram/account/delete";

export class DeleteInstagramAccountController {
  constructor(private service: DeleteInstagramAccountService) {}

  async handler(request: Request, response: Response): Promise<void> {}
}
