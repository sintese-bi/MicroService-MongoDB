import DataController from "../src/Controllers/DataController";
import { Router } from "express"

const dataRouter = Router()

dataRouter.get("/infodata", DataController.infoData)
dataRouter.get("/sum-fuel-literage", DataController.sumFuelLiterage)
dataRouter.get("/dataframe-gallonage", DataController.dataFrameGallonage)
export default dataRouter
