import { Router, Request, Response } from "express";
import { userService } from "../../infra/use-case";
const router: Router = Router();

router.get(`/`, async (req: Request, res: Response) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const query = { ...req.query };
        const users = await userService.getAll(query);
        res.status(200).json({
            data: users,
        });
    } catch (err) {
        throw err;
    }
});

router.get(`/:id`, async (req: Request, res: Response) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const { id } = req.params;
        const user = await userService.getById(parseInt(id));
        res.status(200).json({
            data: user,
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
