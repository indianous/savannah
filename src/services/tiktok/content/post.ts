import { ITikTokContentRepository } from "../../../repository/contracts/contents/tiktok";

type PostTikTokContentServiceProps = {};

export class PostTikTokContentService {
  constructor(private repository: ITikTokContentRepository) {}

  async execute(props: PostTikTokContentServiceProps): Promise<void> {}
}
