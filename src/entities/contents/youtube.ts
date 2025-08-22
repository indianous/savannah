import { Image } from "../image";
import { Tag } from "../tag";
import { Video } from "../video";
import { Content } from "./contracts/content";

type YoutubeContentProps = {
  id: string;
  description: string;
  title: string;
  tags: Tag[];
  video: Video;
  thumbnail: Image;
};

export class YoutubeContent implements Content {
  private id: string;
  private description: string;
  private title: string;
  private tags: Tag[];
  private video: Video;
  private thumbnail: Image;

  constructor(props: YoutubeContentProps) {
    this.id = props.id;
    this.description = props.description;
    this.title = props.title;
    this.tags = props.tags;
    this.video = props.video;
    this.thumbnail = props.thumbnail;
  }
  post(): void {
    throw new Error("Method not implemented.");
  }
}
