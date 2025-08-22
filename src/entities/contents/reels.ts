import { Tag } from "../tag";
import { Video } from "../video";
import { Content } from "./contracts/content";

type ReelsContentProps = {
  id: string;
  caption: string;
  video: Video;
  tags: Tag[];
};

export class ReelsContent implements Content {
  private id: string;
  private caption: string;
  private video: Video;
  private tags: Tag[];

  constructor(props: ReelsContentProps) {
    this.id = props.id;
    this.caption = props.caption;
    this.video = props.video;
    this.tags = props.tags;
  }
}
