import { InstagramAccount } from "@/entities/accounts/instagram";
import { IInstagramAccountRepository } from "../../../repository/contracts/account/instagram";

type ReadInstagramAccountServiceProps = {
  id?: string;
};

export class ReadInstagramAccountService {
  constructor(private repository: IInstagramAccountRepository) {}

  async execute(
    props: ReadInstagramAccountServiceProps
  ): Promise<InstagramAccount[]> {
    const { id } = props;
    const instagramAccount = this.repository.read(id);

    return instagramAccount;
  }
}
