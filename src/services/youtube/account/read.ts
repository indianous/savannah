import { IInstagramAccountRepository } from "../../../repository/contracts/account/instagram";

type ReadInstagramAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class ReadYoutubeAccountService {
  constructor(private repository: IInstagramAccountRepository) {}

  async execute(props: ReadInstagramAccountServiceProps): Promise<void> {}
}
