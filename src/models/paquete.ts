import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Paquete extends Model {
    public id!: number;
    public estado!: string;
    public descripcion!: string;
    public precio!: number;
    public destino!: string;
}

Paquete.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    estado: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    destino: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'Paquete',
});

export default Paquete;