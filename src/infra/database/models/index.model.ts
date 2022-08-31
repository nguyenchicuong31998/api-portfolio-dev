import config from "../config/config";
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
const sequelize = config.connection;
const models: any = {};

// turns base_user => BaseUser
function toCamelCase(str) {
    const _ = str.indexOf("_");
    if (~_) {
        return toCamelCase(
            str.substring(0, _) +
                str
                    .substring(_ + 1)
                    .substring(0, 1)
                    .toUpperCase() +
                str.substring(_ + 2),
        );
    } else {
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    }
}

const createModel = () => {
    const modelList = fs
        .readdirSync(path.join(__dirname, "../models"))
        .filter((t) => (~t.indexOf(".ts") || ~t.indexOf(".js")) && !~t.indexOf("index") && !~t.indexOf(".map"))
        .map((model) => {
            return require(path.join(__dirname, "/", model))(sequelize, Sequelize.DataTypes);
        });

    for (let index = 0; index < modelList.length; index++) {
        let modelName = toCamelCase(modelList[index].name).slice(0, -1);
        models[modelName] = modelList[index];
    }

    Object.keys(models).forEach((modelName) => {
        if (models[modelName].associate) {
            models[modelName].associate(models);
        }
    });

    models.User.findAll({})
        .then((r) => {
            console.log(r);
        })
        .catch((err) => {
            console.log(err);
        });

    models["sequelize"] = sequelize;
    models["Sequelize"] = Sequelize;
    return models;
};
export { createModel };

export default createModel();
