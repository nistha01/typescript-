import  express  from "express";
import studentController from "../controller/studentController";

const router = express.Router();

router.post('/addStudent',studentController.addStudent);



export default router;