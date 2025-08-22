import { Image } from "../../entities/image";

export interface IImageRepository {
  create(image: Image): void;
  read(id: string): Image;
  update(image: Image): void;
  delete(id: string): void;
}
