import { ITikTokAccountRepository } from "../../../repository/contracts/account/tiktok";

type DeleteTikTokAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class DeleteTikTokAccountService {
  constructor(private repository: ITikTokAccountRepository) {}

  async execute(props: DeleteTikTokAccountServiceProps): Promise<void> {}
}
