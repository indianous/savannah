import { faker } from "@faker-js/faker";
import { env } from "../../utils/env";
import { DatabaseSync } from "node:sqlite";
import SqlBricks from "sql-bricks";

const database = new DatabaseSync(env.DATABASE_PATH);

const runSeed = (items: any[]) => {
  database.exec(`DROP TABLE IF EXISTS instagram_account`);

  database.exec(`CREATE TABLE instagram_account (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    ) STRICT
  `);
  insert("instagram_account", items);
};

const insert = async (table: string, items: any[]) => {
  const { text: sql, values } = SqlBricks.insertInto(table, items).toParams({
    placeholder: "?",
  });
  const insertState = database.prepare(sql);
  insertState.run(...values);

  console.log(
    `INSERT operation completed: inserted ${items.length} item(s) into ${table}`
  );
};

const select = async (
  table: string,
  columns: string[],
  column: string,
  value: any
) => {
  const {} = SqlBricks.select(columns).from(table).where(column, value);
};

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

export { insert };
