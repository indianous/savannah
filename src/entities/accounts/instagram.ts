import { randomUUID } from "node:crypto";
import { Account } from "./contracts/account";

type InstagramAccountProps = {
  username: string;
  password: string;
};

export class InstagramAccount implements Account {
  private id: string;
  private username: string;
  private password: string;

  constructor(props: InstagramAccountProps, id?: string) {
    this.id = id ? id : randomUUID();
    this.username = props.username;
    this.password = props.password;
  }

  login(): void {
    throw new Error("Method not implemented.");
  }

  json = () => ({
    id: this.id,
    username: this.username,
    password: this.password,
  });
}
