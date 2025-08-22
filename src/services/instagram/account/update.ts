import { IInstagramAccountRepository } from "../../../repository/contracts/account/instagram";

type UpdateInstagramAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class UpdateInstagramAccountService {
  constructor(private repository: IInstagramAccountRepository) {}

  async execute(props: UpdateInstagramAccountServiceProps): Promise<void> {}
}
