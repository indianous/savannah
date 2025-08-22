import { InstagramAccount } from "../../../entities/accounts/instagram";

export interface IInstagramAccountRepository {
  create(instagramAccount: InstagramAccount): Promise<void>;
  read(id: string): Promise<InstagramAccount>;
  update(instagramAccount: InstagramAccount): Promise<void>;
  delete(id: string): Promise<void>;
}
