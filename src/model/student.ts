import { DataTypes, Model } from 'sequelize';
import db from '../utils/dbConnection'; 

class Student extends Model {
  public id!: number;
  public name!: string;
  public classs!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Student',
    tableName: 'students', 
    timestamps: true, 
  }
);

export default Student;
