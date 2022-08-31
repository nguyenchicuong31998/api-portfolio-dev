import { IRepository } from "../../../domain/repository.base";
// import models from "../../database/models/index.model";
interface UserEntity {
    [index: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserRepository extends IRepository<UserEntity> {}
