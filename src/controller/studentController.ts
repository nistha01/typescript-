import { Request, Response } from "express";
import Student from "../model/student";


const addStudent = async(req: Request, res: Response) => {
    try {
        const { name, classs } = req.body;
        if (!name || !classs) {
            res.status(400).json({ message: "all fields are required" })
        }
        const createdStudent = await Student.create({ name, classs });
        res.status(200).json({ message: "Student created successfully", student: createdStudent });
    } catch (e) {
        res.status(500).json({ message: "Student not created successfully" });
    }
}


export default { addStudent }