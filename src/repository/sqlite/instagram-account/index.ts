import { InstagramAccount } from "@/entities/accounts/instagram";
import { IInstagramAccountRepository } from "@/repository/contracts/account/instagram";
import { sqliteDatabase } from "@/repository/sqlite/database";
import z from "zod";

class SqliteInstagramAccountRepository implements IInstagramAccountRepository {
  private database;
  constructor() {
    this.database = sqliteDatabase;
  }

  async create(instagramAccount: InstagramAccount): Promise<void> {
    await this.database.insert({
      table: "instagram_account",
      items: [instagramAccount.json()],
    });
  }
  async read(id?: string): Promise<InstagramAccount[]> {
    try {
      const readInstagramAccountSchema = z.array(
        z.object({
          password: z.string(),
          username: z.string(),
          id: z.string(),
        })
      );
      const table = "instagram_account";
      const colums = ["password", "username", "id"];

      if (id) {
        const arr = await readInstagramAccountSchema.parse(
          this.database.read({ colums, table }, id)
        );

        const data = arr.map(
          ({ password, username, id }) =>
            new InstagramAccount({ password, username }, id)
        );

        return data;
      }
      const arr = await readInstagramAccountSchema.parse(
        this.database.read({ colums, table })
      );

      const data: InstagramAccount[] = arr.map(
        ({ password, username, id }) =>
          new InstagramAccount({ password, username }, id)
      );

      return data;
    } catch (error) {
      throw error;
    }
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
