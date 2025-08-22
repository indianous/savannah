import { InstagramAccount } from "../../../entities/accounts/instagram";
import { IInstagramAccountRepository } from "../../../repository/contracts/account/instagram";

type CreateInstagramAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class CreateInstagramAccountService {
  constructor(private repository: IInstagramAccountRepository) {}

  async execute(props: CreateInstagramAccountServiceProps): Promise<void> {
    const { id, password, username } = props;
    const instagramAccount: InstagramAccount = new InstagramAccount({
      id,
      password,
      username,
    });
    await this.repository.create(instagramAccount);
  }
}
