import { YoutubeContent } from "../../../entities/contents/youtube";

export interface IYoutubeContentRepository {
  create(youtubeContent: YoutubeContent): void;
  read(id: string): YoutubeContent;
  update(youtubeContent: YoutubeContent): void;
  delete(id: string): void;
}
