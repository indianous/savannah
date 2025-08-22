type ImageProps = {
  url: string;
  fileName: string;
};

export class Image {
  private url: string;
  private fileName: string;

  constructor(props: ImageProps) {
    this.url = props.url;
    this.fileName = props.fileName;
  }
}
