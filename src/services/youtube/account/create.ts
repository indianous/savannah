import { YoutubeAccount } from "../../../entities/accounts/youtube";
import { IYoutubeAccountRepository } from "../../../repository/contracts/account/youtube";

type CreateYoutubeAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class CreateYoutubeAccountService {
  constructor(private repository: IYoutubeAccountRepository) {}

  async execute(props: CreateYoutubeAccountServiceProps): Promise<void> {
    const { id, password, username } = props;
    const youtubeAccount: YoutubeAccount = new YoutubeAccount({
      id,
      password,
      username,
    });

    await this.repository.create(youtubeAccount);
  }
}
