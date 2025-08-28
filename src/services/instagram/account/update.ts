import { InstagramAccount } from "@/entities/accounts/instagram";
import { IInstagramAccountRepository } from "../../../repository/contracts/account/instagram";

type UpdateInstagramAccountServiceProps = {
  id: string;
  password: string;
  username: string;
};

export class UpdateInstagramAccountService {
  constructor(private repository: IInstagramAccountRepository) {}

  async execute(props: UpdateInstagramAccountServiceProps): Promise<void> {
    try {
      const { id, password, username } = props;
      const instagramAccount = new InstagramAccount({ password, username }, id);
      this.repository.update(instagramAccount);
    } catch (error) {
      throw error;
    }
  }
}
