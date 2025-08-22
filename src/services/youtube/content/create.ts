import { IYoutubeContentRepository } from "../../../repository/contracts/contents/youtube";

type CreateYoutubeContentServiceProps = {};

export class CreateYoutubeContentService {
  constructor(private repository: IYoutubeContentRepository) {}

  async execute(props: CreateYoutubeContentServiceProps): Promise<void> {}
}
