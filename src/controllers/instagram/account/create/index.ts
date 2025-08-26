import { sqliteInstagramAccountRepository } from "@/repository/sqlite/instagram-account";
import { CreateInstagramAccountService } from "../../../../services/instagram/account/create";
import { CreateInstagramAccountController } from "./controller";

const repository = sqliteInstagramAccountRepository;

const createInstagramAccountService = new CreateInstagramAccountService(
  repository
);

const createInstagramAccountController = new CreateInstagramAccountController(
  createInstagramAccountService
);

export { createInstagramAccountController };
