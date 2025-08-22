import { IReelsContentRepository } from "../../../../repository/contracts/contents/reels";

type PostReelsContentServiceProps = {};

export class PostReelsContentService {
  constructor(private repository: IReelsContentRepository) {}

  async execute(props: PostReelsContentServiceProps): Promise<void> {}
}
