import express from "express";
import cors from "cors";
import dataRouter from "../routes/data";
import alertsRouter from "../routes/alerts";
// import wppRouter from "../routes/wpp";
const app = express();
const PORT = 3052;
const apiVersion = "v1";

const corsOptions = {
    origin: [/https:\/\/redeflexbi\.com\.br($|\/.*)/, "http://localhost:3000"]
};


app.use(cors(corsOptions));

app.get(`/${apiVersion}`, function (req, res) {
    res.send('Hello World!');
});


app.use(express.json());
app.use(`/${apiVersion}`, dataRouter);
app.listen(PORT, () =>
    console.log(`✨ Server started on ${PORT}`)
);
