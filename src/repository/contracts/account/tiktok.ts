import { TikTokAccount } from "../../../entities/accounts/tiktok";

export interface ITikTokAccountRepository {
  create(tikTokAccount: TikTokAccount): void;
  read(id: string): TikTokAccount;
  update(tikTokAccount: TikTokAccount): void;
  delete(id: string): void;
}
