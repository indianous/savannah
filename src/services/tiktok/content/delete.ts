import { ITikTokContentRepository } from "../../../repository/contracts/contents/tiktok";

type DeleteTikTokContentServiceProps = {};

export class DeleteTikTokContentService {
  constructor(private repository: ITikTokContentRepository) {}

  async execute(props: DeleteTikTokContentServiceProps): Promise<void> {}
}
