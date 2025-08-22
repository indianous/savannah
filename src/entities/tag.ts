type TagProps = {
  content: string;
};
export class Tag {
  private content: string;
  constructor(props: TagProps) {
    this.content = props.content;
  }
}
