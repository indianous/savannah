import { ReelsContent } from "../../../entities/contents/reels";

export interface IReelsContentRepository {
  create(reelsContent: ReelsContent): void;
  read(id: string): ReelsContent;
  update(reelsContent: ReelsContent): void;
  delete(id: string): void;
}
