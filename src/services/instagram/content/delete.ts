import { IInstagramContentRepository } from "../../../repository/contracts/contents/instagram";

type DeleteInstagramContentServiceProps = {};

export class DeleteInstagramContentService {
  constructor(private repository: IInstagramContentRepository) {}

  async execute(props: DeleteInstagramContentServiceProps): Promise<void> {}
}
