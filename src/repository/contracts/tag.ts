import { Tag } from "../../entities/tag";

export interface ITagRepository {
  create(tag: Tag): void;
  read(id: string): Tag;
  update(tag: Tag): void;
  delete(id: string): void;
}
