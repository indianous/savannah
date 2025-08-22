import { IYoutubeContentRepository } from "../../../repository/contracts/contents/youtube";

type DeleteYoutubeContentServiceProps = {};

export class DeleteYoutubeContentService {
  constructor(private repository: IYoutubeContentRepository) {}

  async execute(props: DeleteYoutubeContentServiceProps): Promise<void> {}
}
