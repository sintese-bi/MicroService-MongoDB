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

            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {

                const fuel = await prismaLBCBi.combustiveis.findMany({ where: { del: "F" } })

                const products = await prismaLBCBi.produtos.findMany()


                const fuelNames = fuel.map(element => {
                    return element.des

                })

                const productsNames = products.map(element => {
                    return element.des

                })
                const uniqueFuelNames = [...new Set(fuelNames)];
                const uniqueProductNames = [...new Set(productsNames)];

                return res.status(200).json({ data: { fuelMargin: uniqueFuelNames, productMargin: uniqueProductNames } })

            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }
        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }

    }

    public async sumFuelLiterage(req: Request, res: Response) {

        try {

            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {

                const fuelliterageSell = await prismaSales.vendas.findMany({
                    select: { id: true, tot: true, items: true },
                    where: { dtHr: { gte: "2024-07-22T13:35:00.000+00:00", lte: "2024-07-22T18:35:00.000+00:00" } }

                })
                //Soma da venda de combustíveis
                const arraySellfuel = fuelliterageSell.map(element => {
                    return parseFloat(element.tot)

                })
                const sumFuel = Math.round(arraySellfuel.reduce((acumulador, valorAtual) => {
                    return acumulador + valorAtual;
                }, 0) * 100) / 100;

                //Soma da litragem  

                const arrayLiterage = fuelliterageSell.map(element => {



                })



                return res.status(200).json({ data: { sumfuelsales: sumFuel } })
            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }



        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }


    }





}



export default new DataController()
