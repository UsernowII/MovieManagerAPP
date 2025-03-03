import { DataTypes } from "sequelize";
import { sequelize } from "../../db/sequelize.js";
import { Document } from "../one-to-one/document.model.js";

export const Person = sequelize.define('person', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photoURL: {
        type: DataTypes.STRING,
        defaultValue: false,
    }
});

Person.hasOne(Document, {
    foreignKey: 'personId',
    sourceKey: 'id',
});

Document.belongsTo(Person, {
    foreignKey: 'personId',
    targetKey: 'id',
});
