import { ITikTokAccountRepository } from "../../../repository/contracts/account/tiktok";

type UpdateTikTokAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class UpdateTikTokAccountService {
  constructor(private repository: ITikTokAccountRepository) {}

  async execute(props: UpdateTikTokAccountServiceProps): Promise<void> {}
}
