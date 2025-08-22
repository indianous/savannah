import { YoutubeAccount } from "../../../entities/accounts/youtube";

export interface IYoutubeAccountRepository {
  create(youtubeAccount: YoutubeAccount): void;
  read(id: string): YoutubeAccount;
  update(youtubeAccount: YoutubeAccount): void;
  delete(id: string): void;
}
