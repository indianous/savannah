import { ITikTokAccountRepository } from "../../../repository/contracts/account/tiktok";

type ReadTikTokAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class ReadTikTokAccountService {
  constructor(private repository: ITikTokAccountRepository) {}

  async execute(props: ReadTikTokAccountServiceProps): Promise<void> {}
}
