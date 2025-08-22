import { IYoutubeAccountRepository } from "../../../repository/contracts/account/youtube";

type LoginYoutubeAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class LoginYoutubeAccountService {
  constructor(private repository: IYoutubeAccountRepository) {}

  async execute(props: LoginYoutubeAccountServiceProps): Promise<void> {}
}
