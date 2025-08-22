import { Account } from "./contracts/account";

type YoutubeAccountProps = {
  id: string;
  username: string;
  password: string;
};

export class YoutubeAccount implements Account {
  private id: string;
  private username: string;
  private password: string;

  constructor(props: YoutubeAccountProps) {
    this.id = props.id;
    this.username = props.username;
    this.password = props.password;
  }
}
