import { getRepository } from "typeorm";

import { Account } from "../entity/Account";
import config from "../config";

export default class AccountService {
  constructor() {
    // TODO
  }

  public static async findAll(
    startIdx: number,
    pageSize: number
  ): Promise<Account[]> {
    return getRepository(Account).find({
      skip: startIdx,
      take: pageSize,
    });
  }
}
