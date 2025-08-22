import { DeleteInstagramAccountService } from "@/services/instagram/account/delete";
import { sqliteInstagramAccountRepository } from "@/repository/sqlite/instagram-account";
import { DeleteInstagramAccountController } from "./controller";

const service = new DeleteInstagramAccountService(
  sqliteInstagramAccountRepository
);

export const deleteInstagramAccountController =
  new DeleteInstagramAccountController(service);
