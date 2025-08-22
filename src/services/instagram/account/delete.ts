import { IInstagramAccountRepository } from "../../../repository/contracts/account/instagram";

type DeleteInstagramAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class DeleteInstagramAccountService {
  constructor(private repository: IInstagramAccountRepository) {}

  async execute(props: DeleteInstagramAccountServiceProps): Promise<void> {}
}
