import { sqliteInstagramAccountRepository } from "@/repository/sqlite/instagram-account";
import { ReadInstagramAccountService } from "@/services/instagram/account/read";
import { ReadAllInstagramAccountController } from "./controller";

const repository = sqliteInstagramAccountRepository;

const readInstagramAccountService = new ReadInstagramAccountService(repository);

export const readAllInstagramAccountController =
  new ReadAllInstagramAccountController(readInstagramAccountService);
