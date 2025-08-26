import { faker } from "@faker-js/faker";
import { env } from "@/utils/env";
import { DatabaseSync } from "node:sqlite";
import SqlBricks from "sql-bricks";

type InsertProps = { table: string; items: any[] };
type UpdateProps = { table: string; items: any[]; id: string };
type ReadProps = { colums: string[]; table: string };

const database = new DatabaseSync(env.DATABASE_PATH);

const runSeed = (items: any[]) => {
  database.exec(`DROP TABLE IF EXISTS instagram_account`);

  database.exec(`CREATE TABLE instagram_account (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    ) STRICT
  `);
  sqliteDatabase.insert({ table: "instagram_account", items });

  const data = sqliteDatabase.read({
    colums: ["id"],
    table: "instagram_account",
  });
  data.forEach((i) => console.log("Id: ", i.id));
};

class SqliteDatabase {
  constructor() {}

  insert(props: InsertProps) {
    try {
      const { items, table } = props;
      const { text: sql, values } = SqlBricks.insertInto(table, items).toParams(
        {
          placeholder: "?",
        }
      );
      const insertState = database.prepare(sql);
      insertState.run(...values);

      console.log(
        `INSERT operation completed: inserted ${items.length} item(s) into ${table}`
      );
    } catch (error) {}
  }

  read(props: ReadProps, id?: string) {
    try {
      const { colums, table } = props;
      if (id) {
        const query = SqlBricks.select(colums.join(", "))
          .where("id", id)
          .from(table)
          .toString();
        const data = database.prepare(query).all();
        console.log("SELECT operation completed:  ", data);
        return data;
      }

      const query = SqlBricks.select(colums.join(", ")).from(table).toString();
      const data = database.prepare(query).all();
      console.log("SELECT operation completed:  ", data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  update(props: UpdateProps) {
    try {
      const { id, items, table } = props;
      const { text: sql, values } = SqlBricks.update(table, items).toParams({
        placeholder: "?",
      });
      const updateState = database.prepare(sql);
      updateState.run(...values);

      console.log(
        `UPDATE operation completed: updated ${items.length} item(s) into ${table}`
      );
    } catch (error) {}
  }
}

const sqliteDatabase = new SqliteDatabase();

runSeed(
  faker.helpers.multiple(
    () => ({
      id: faker.string.uuid(),
      username: faker.internet.username(),
      password: faker.string.uuid(),
    }),
    { count: 3 }
  )
);

export { sqliteDatabase };
