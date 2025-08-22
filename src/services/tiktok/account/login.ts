import { ITikTokAccountRepository } from "../../../repository/contracts/account/tiktok";

type LoginTikTokAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class LoginTikTokAccountService {
  constructor(private repository: ITikTokAccountRepository) {}

  async execute(props: LoginTikTokAccountServiceProps): Promise<void> {}
}
