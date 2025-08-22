import { IInstagramContentRepository } from "../../../repository/contracts/contents/instagram";

type CreateInstagramContentServiceProps = {};

export class CreateInstagramContentService {
  constructor(private repository: IInstagramContentRepository) {}

  async execute(props: CreateInstagramContentServiceProps): Promise<void> {}
}
