import { IYoutubeContentRepository } from "../../../repository/contracts/contents/youtube";

type PostYoutubeContentServiceProps = {};

export class PostYoutubeContentService {
  constructor(private repository: IYoutubeContentRepository) {}

  async execute(props: PostYoutubeContentServiceProps): Promise<void> {}
}
