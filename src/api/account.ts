import { Router, Request, Response } from "express";
import { AccountService } from "../serivce";

const route = Router();

export default (app: Router) => {
  app.use("/accounts", route);

  route.get("/", async (req: Request, res: Response) => {
    // this is example for pagination
    try {
      let page: number = 1;
      if (req.query.page) page = +req.query.page;
      const pageSize = 10;
      const startIdx = (page - 1) * pageSize;
      const targets = await AccountService.findAll(startIdx, pageSize);
      return res.send({
        state: "success",
        data: targets,
      });
    } catch (e) {
      console.log("/api/accounts failed", e);
      return res.send({
        state: "error",
        error: e,
      });
    }
  });
};
