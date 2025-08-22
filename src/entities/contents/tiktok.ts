import { Tag } from "../tag";
import { Video } from "../video";
import { Content } from "./contracts/content";

type TikTokContentProps = {
  id: string;
  caption: string;
  tags: Tag[];
  video: Video;
};

export class TikTokContent implements Content {
  private id: string;
  private caption: string;
  private tags: Tag[];
  private video: Video;

  constructor(props: TikTokContentProps) {
    this.id = props.id;
    this.caption = props.caption;
    this.tags = props.tags;
    this.video = props.video;
  }
}
