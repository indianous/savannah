import { IInstagramContentRepository } from "../../../repository/contracts/contents/instagram";

type ReadInstagramContentServiceProps = {};

export class ReadInstagramContentService {
  constructor(private repository: IInstagramContentRepository) {}

  async execute(props: ReadInstagramContentServiceProps): Promise<void> {}
}
