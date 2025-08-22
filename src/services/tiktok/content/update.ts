import { ITikTokContentRepository } from "../../../repository/contracts/contents/tiktok";

type UpdateTikTokContentServiceProps = {};

export class UpdateTikTokContentService {
  constructor(private repository: ITikTokContentRepository) {}

  async execute(props: UpdateTikTokContentServiceProps): Promise<void> {}
}
