import DataController from "../src/Controllers/DataController";
import { Router } from "express"

const dataRouter = Router()

dataRouter.get("/infodata", DataController.infoData)
dataRouter.get("/sum-fuel-literage", DataController.sumFuelLiterage)
dataRouter.post("/daily-graphic", DataController.dailyGraphic)
dataRouter.post("/daily-graphic-fuel", DataController.dailyGraphicFuel)
dataRouter.post("/daily-graphic-product", DataController.dailyGraphicProduct)
dataRouter.post("/regional-chart", DataController.regionalChart)
dataRouter.post("/regional-chart-fuel", DataController.regionalChartFuel)
dataRouter.post("/regional-chart-product", DataController.regionalChartProduct)
dataRouter.get("/map-data", DataController.mapData)
export default dataRouter
