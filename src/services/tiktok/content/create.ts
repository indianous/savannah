import { ITikTokContentRepository } from "../../../repository/contracts/contents/tiktok";

type CreateTikTokContentServiceProps = {};

export class CreateTikTokContentService {
  constructor(private repository: ITikTokContentRepository) {}

  async execute(props: CreateTikTokContentServiceProps): Promise<void> {}
}
