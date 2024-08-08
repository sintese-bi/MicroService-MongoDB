import DataController from "../src/Controllers/DataController";
import { Router } from "express"

const dataRouter = Router()

dataRouter.get("/infodata", DataController.infoData)
dataRouter.get("/sum-fuel-literage", DataController.sumFuelLiterage)
dataRouter.post("/daily-graphic", DataController.dailyGraphic)
dataRouter.post("/regional-chart", DataController.regionalChart)
dataRouter.get("/map-data", DataController.mapData)
export default dataRouter
