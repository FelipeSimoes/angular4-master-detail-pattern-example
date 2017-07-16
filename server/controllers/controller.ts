export abstract class DefaultController {
  protected model: any;
  protected unique: string = 'id';

  public path: string = '';

  getAll = (req: any, res: any) => {
    this.model.find({}, (err, set) => {
      if (err) { return res.sendStatus(500); }
      res.json(set);
    });
  }

  get = (req: any, res: any) => {
    this.model.findOne({ [this.unique]: req.body.unique }, (err, item) => {
      if (!item) { return res.sendStatus(404); }
      return res.json(item);
    });
  }

  create = (req: any, res: any) => {
    // a plain simple create just for this example to populate data.
    const row: any = new this.model(req.body);
    row.save((err, item) => {
      if (err && err.code === 11000) {
        return res.sendStatus(400);
      }
      if (err) {
        return res.sendStatus(500);
      }
      return res.status(200).json(item);
    });
  }
}
