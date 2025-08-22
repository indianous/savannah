type VideoProps = {
  url: string;
  fileName: string;
};

export class Video {
  private url: string;
  private fileName: string;

  constructor(props: VideoProps) {
    this.url = props.url;
    this.fileName = props.fileName;
  }
}
