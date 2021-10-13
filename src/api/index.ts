import { Router } from "express";

import account from "./account";
import health from "./health";

export default () => {
  const app = Router();
  account(app);
  health(app);

  return app;
};
