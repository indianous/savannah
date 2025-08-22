import { TikTokContent } from "../../../entities/contents/tiktok";

export interface ITikTokContentRepository {
  create(tikTokContent: TikTokContent): void;
  read(id: string): TikTokContent;
  update(tikTokContent: TikTokContent): void;
  delete(id: string): void;
}
