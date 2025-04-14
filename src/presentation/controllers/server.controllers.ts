import { Request, Response } from "express";

export class ServerControllers {
  constructor() {}

  getRickAndMortyCharacters = (req: Request, res: Response) => {
    res.json({
      message: "gettin Characters",
    });
  };
}
