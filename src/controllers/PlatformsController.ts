import express from "express";

export default class PlatformsController {
  public index(req: express.Request, res: express.Response) {
    res.json("Implement index");
  }

  public show(req: express.Request, res: express.Response) {
    res.json("Implement show");
  }

  public create(req: express.Request, res: express.Response) {
    res.json("Implement create");
  }

  public update(req: express.Request, res: express.Response) {
    res.json("Implement update");
  }

  public destroy(req: express.Request, res: express.Response) {
    res.json("Implement destroy");
  }
}
