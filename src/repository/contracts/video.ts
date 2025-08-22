import { Video } from "../../entities/video";

export interface IVideoRepository {
  create(video: Video): void;
  read(id: string): Video;
  update(video: Video): void;
  delete(id: string): void;
}
