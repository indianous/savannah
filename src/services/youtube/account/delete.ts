import { IYoutubeAccountRepository } from "../../../repository/contracts/account/youtube";

type DeleteYoutubeAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class DeleteYoutubeAccountService {
  constructor(private repository: IYoutubeAccountRepository) {}

  async execute(props: DeleteYoutubeAccountServiceProps): Promise<void> {}
}
