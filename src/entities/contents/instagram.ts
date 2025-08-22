import { Image } from "../image";
import { Tag } from "../tag";
import { Content } from "./contracts/content";

type InstagramContentProps = {
  id: string;
  caption: string;
  images: Image[];
  tags: Tag[];
};

export class InstagramContent implements Content {
  private id: string;
  private caption: string;
  private images: Image[];
  private tags: Tag[];

  constructor(props: InstagramContentProps) {
    this.id = props.id;
    this.caption = props.caption;
    this.images = props.images;
    this.tags = props.tags;
  }
  post(): void {
    throw new Error("Method not implemented.");
  }
}
