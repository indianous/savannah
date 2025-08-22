import { Account } from "./contracts/account";

type InstagramAccountProps = {
  id: string;
  username: string;
  password: string;
};

export class InstagramAccount implements Account {
  private id: string;
  private username: string;
  private password: string;

  constructor(props: InstagramAccountProps) {
    this.id = props.id;
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
