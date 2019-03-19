import express from "express";

export default class GamesController {
  public index(req: express.Request, res: express.Response) {
    res.json("Implement index");
  }

  public show(req: express.Request, res: express.Response) {
    res.json("Implement show");
  }
}
