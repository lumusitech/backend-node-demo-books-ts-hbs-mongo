import { Request, Response } from "express";

class IndexController {
    public index(req: Request, res: Response) {
        res.render('index', { title: 'Wellcome to Books app' })
    }
}

export default new IndexController()