import { InstagramContent } from "../../../entities/contents/instagram";

export interface IInstagramContentRepository {
  create(instagramContent: InstagramContent): void;
  read(id: string): InstagramContent;
  update(instagramContent: InstagramContent): void;
  delete(id: string): void;
}
