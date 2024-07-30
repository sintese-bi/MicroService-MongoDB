import DataController from "../src/Controllers/DataController";
import { Router } from "express"

const dataRouter = Router()

dataRouter.get("/infodata", DataController.infoData)
dataRouter.get("/sum-fuel-literage", DataController.sumFuelLiterage)
dataRouter.get("/dataframe-gallonage", DataController.dataFrameGallonage)
dataRouter.get("/daily-graphic", DataController.dailyGraphic)
dataRouter.get("/dataframe-gallonage2", DataController.dataFrameGallonage2)
export default dataRouter
