import { InstagramAccount } from "../../../entities/accounts/instagram";
import { IInstagramAccountRepository } from "../../contracts/account/instagram";
import { insert } from "../database";

class SqliteInstagramAccountRepository implements IInstagramAccountRepository {
  constructor() {}

  async create(instagramAccount: InstagramAccount): Promise<void> {
    await insert("instagram_account", [instagramAccount.json()]);
  }
  async read(id: string): Promise<InstagramAccount> {
    throw new Error("Method not implemented.");
  }
  async update(instagramAccount: InstagramAccount): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

const sqliteInstagramAccountRepository = new SqliteInstagramAccountRepository();

export { sqliteInstagramAccountRepository };
