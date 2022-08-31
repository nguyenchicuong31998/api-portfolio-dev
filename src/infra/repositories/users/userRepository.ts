import { IUserRepository } from "./IUserRepository";
import models from "../../database/models/index.model";

interface UserEntity {
    [index: string]: any;
}

export class UserRepository implements IUserRepository {
    async findAll(query: UserEntity): Promise<UserEntity[]> {
        const user = await models.User.findAll({
            // attributes: ["name", [models.sequelize.fn("COUNT", models.sequelize.col("id")), "totalCol"]],
            include: [
                {
                    model: models.Post,
                    as: "posts",
                    where: {
                        // id: 10,
                    },
                    offset: 0,
                    limit: 2,
                    include: [
                        {
                            model: models.Comment,
                            as: "comments",
                            limit: 2,
                        },
                    ],
                },
            ],
            // group: ["id"],
            // raw: true,
        });
        return user;
    }
    async findById(id: number): Promise<UserEntity> {
        const user = await models.User.findByPk(id);
        return user;
    }
    async save(user: UserEntity): Promise<UserEntity> {
        console.log("user", user);
        return user;
    }
}
