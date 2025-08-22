import { IInstagramContentRepository } from "../../../repository/contracts/contents/instagram";

type UpdateInstagramContentServiceProps = {};

export class UpdateInstagramContentService {
  constructor(private repository: IInstagramContentRepository) {}

  async execute(props: UpdateInstagramContentServiceProps): Promise<void> {}
}
