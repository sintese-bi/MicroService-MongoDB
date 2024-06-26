import DataController from "../src/Controllers/DataController";
import { Router } from "express"

const dataRouter = Router()

dataRouter.get("/registerdata", DataController.registerData)
dataRouter.get("/readdata", DataController.readData)
export default dataRouter