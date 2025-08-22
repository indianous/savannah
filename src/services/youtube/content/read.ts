import { IYoutubeContentRepository } from "../../../repository/contracts/contents/youtube";

type ReadYoutubeContentServiceProps = {};

export class ReadYoutubeContentService {
  constructor(private repository: IYoutubeContentRepository) {}

  async execute(props: ReadYoutubeContentServiceProps): Promise<void> {}
}
