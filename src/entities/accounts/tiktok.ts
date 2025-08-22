import { Account } from "./contracts/account";

type TikTokAccountProps = {
  id: string;
  username: string;
  password: string;
};

export class TikTokAccount implements Account {
  private id: string;
  private username: string;
  private password: string;

  constructor(props: TikTokAccountProps) {
    this.id = props.id;
    this.username = props.username;
    this.password = props.password;
  }
}
