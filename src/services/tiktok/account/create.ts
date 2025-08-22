import { TikTokAccount } from "../../../entities/accounts/tiktok";
import { ITikTokAccountRepository } from "../../../repository/contracts/account/tiktok";

type CreateTikTokAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class CreateTikTokAccountService {
  constructor(private repository: ITikTokAccountRepository) {}

  async execute(props: CreateTikTokAccountServiceProps): Promise<void> {
    const { id, password, username } = props;
    const tikTokAccount: TikTokAccount = new TikTokAccount({
      id,
      password,
      username,
    });

    await this.repository.create(tikTokAccount);
  }
}
