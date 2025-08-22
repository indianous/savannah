import { ITikTokContentRepository } from "../../../repository/contracts/contents/tiktok";

type ReadTikTokContentServiceProps = {};

export class ReadTikTokContentService {
  constructor(private repository: ITikTokContentRepository) {}

  async execute(props: ReadTikTokContentServiceProps): Promise<void> {}
}
