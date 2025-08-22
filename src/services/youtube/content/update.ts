import { IYoutubeContentRepository } from "../../../repository/contracts/contents/youtube";

type UpdateYoutubeContentServiceProps = {};

export class UpdateYoutubeContentService {
  constructor(private repository: IYoutubeContentRepository) {}

  async execute(props: UpdateYoutubeContentServiceProps): Promise<void> {}
}
