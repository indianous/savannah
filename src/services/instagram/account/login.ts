import { InstagramAccount } from "../../../entities/accounts/instagram";
import { IInstagramAccountRepository } from "../../../repository/contracts/account/instagram";

type LoginInstagramAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class LoginInstagramAccountService {
  constructor(private repository: IInstagramAccountRepository) {}

  async execute(props: LoginInstagramAccountServiceProps): Promise<void> {}
}
