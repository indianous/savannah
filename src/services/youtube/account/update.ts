import { IYoutubeAccountRepository } from "../../../repository/contracts/account/youtube";

type UpdateYoutubeAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class UpdateYoutubeAccountService {
  constructor(private repository: IYoutubeAccountRepository) {}

  async execute(props: UpdateYoutubeAccountServiceProps): Promise<void> {}
}
