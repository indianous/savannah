import { IInstagramContentRepository } from "../../../../repository/contracts/contents/instagram";

type PostInstagramContentServiceProps = {};

export class PostInstagramContentService {
  constructor(private repository: IInstagramContentRepository) {}

  async execute(props: PostInstagramContentServiceProps): Promise<void> {}
}
