import express from "express";
import cors from "cors";
import { Prisma } from "@prisma/client";
import { Request, Response, application } from "express";
import { PrismaClient } from "@prisma/client";
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
const uri: string | undefined = process.env.DATABASE_URL
let client: any
if (uri) {
    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

}
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("A c onexão com o MongoDB foi efetuada com sucesso!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
const prisma = new PrismaClient();
class DataController {

    public async registerData(req: Request, res: Response) {
        try {
            await client.connect();
            const database = client.db("Rede_flex");
            const collection = database.collection("company");

            const doc = {

                company_emp: 100,
                company_name: "Comapny_1",
                company_date: new Date(),
                company_week_day: "Monday",
                company_fuel: "Gasoline",
                company_volume: 300.0,
                company_cost: 200.0,
                company_sale: 7000.0,
                company_profit: 2000.0,
                company_created_at: new Date(),
                company_updated_at: new Date(),
            };

            const result = await collection.insertOne(doc);
            await client.db("admin").command({ ping: 1 });

            return res.status(200).json({ message: `O documento foi inserido com sucesso:${result.insertedId}` })
        } finally {
            await client.close();
        }
    }

    public async readData(req: Request, res: Response) {
        try {
            const result = await prisma.company.findMany({
            });
            return res.status(200).json({ data: result })
        }
        catch (error) {
            return res.status(500).json({ message: `Não foi possível retornar os dados!` })
        }

    }

}

export default new DataController()
