import { Router, Request, Response } from "express";
const router: Router = Router();

router.get(`/`, async (req: Request, res: Response) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const query = { ...req.query };
        const data: any = {
            text: "ok nek",
        };
        router.post("https://hooks.slack.com/services/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", data);
        res.status(200).json({
            data: {
                name: "ok nek",
                hai: "ok",
            },
        });
    } catch (err) {
        throw err;
    }
});

router.get(`/:id`, async (req: Request, res: Response) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const { id } = req.params;
        res.status(200).json({
            data: id,
        });
    } catch (err) {
        throw err;
    }
});

router.post(`/`, async (req: Request, res: Response) => {
    try {
        const body = { ...req.body };
        console.log(body);
        res.status(200).json({
            data: body,
        });
    } catch (err) {
        throw err;
    }
});
export default router;
