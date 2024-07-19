import express from "express";
import cors from "cors";

import { Request, Response, application } from "express";
import { PrismaClient as PrismaLBCBi } from '../../generated/clientLBCBi'
import { PrismaClient as PrismaSales } from '../../generated/clientSales'
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
const prismaLBCBi = new PrismaLBCBi()
const prismaSales = new PrismaSales()

class DataController {

    public async infoData(req: Request, res: Response) {
        try {

            const result = await prismaLBCBi.combustiveis.findMany()
            return res.status(200).json({ data: result })

        } catch (error) {

            return res.status(500).json({ message: `Não foi possível retornar os dados!` })

        }

    }
}



export default new DataController()
