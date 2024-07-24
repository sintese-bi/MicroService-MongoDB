import express from "express";
import cors from "cors";

import { Request, Response, application } from "express";
import { PrismaClient as PrismaLBCBi } from '../../generated/clientLBCBi'
import { PrismaClient as PrismaSales } from '../../generated/clientSales'
import { MongoClient, ServerApiVersion } from 'mongodb';
import moment from "moment";
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
const prismaLBCBi = new PrismaLBCBi()
const prismaSales = new PrismaSales()

class DataController {
    //Listagem dos nomes de tipos de combustível e produtos
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
    //Big numbers de valores de gasolina e produto
    public async sumFuelLiterage(req: Request, res: Response) {

        try {
            const actualdate = moment().format("YYYY-MM-DD")
            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {

                const fuelliterageSell = await prismaSales.vendas.findMany({
                    select: { items: true },
                    where: {
                        dtHr: {
                            gte: `${actualdate}T00:00:00.000Z`,
                            lte: `${actualdate}T23:59:59.999Z`
                        }
                    }

                })
                //Construção array de items
                const itemsArray = fuelliterageSell.flatMap(element => {

                    return element.items


                })

                //Soma combustíveis tipo combustivel
                const fuel = itemsArray
                    .map(element => {
                        if (element.iTip == "1") {
                            return parseFloat(element.tot);
                        }
                        return undefined;
                    })
                    .filter((item): item is number => item !== undefined)

                const sumFuel = fuel.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue || 0);
                }, 0);

                //Soma da litragem tipo combustível
                const literage = itemsArray.map(element => {
                    if (element.iTip == "1") { return parseFloat(element.qd) }
                    return undefined;

                }).filter((item): item is number => item !== undefined)


                const sumLiterage = literage.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue || 0);
                }, 0);

                //Soma combustíveis tipo produto
                const fuelProd = itemsArray.map(element => {
                    if (element.iTip == "0") { return parseFloat(element.tot) }
                    return undefined

                }).filter((item): item is number => item !== undefined)

                const sumFuelProd = fuelProd.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue || 0);
                }, 0);

                //Soma da litragem tipo produto
                const literageProd = itemsArray.map(element => {
                    if (element.iTip == "0") { return parseFloat(element.qd) }
                    return undefined

                }).filter((item): item is number => item !== undefined)

                const sumLiterageProd = literageProd.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue || 0);
                }, 0);


                return res.status(200).json({ data: { sumfuel: Math.round(sumFuel * 100) / 100, sumLiterage: Math.round(sumLiterage * 100) / 100, sumFuelProduct: Math.round(sumFuelProd * 100) / 100, sumLiterageProduct: Math.round(sumLiterageProd * 100) / 100 } })
            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }



        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }


    }
    //Primeiro dataframe
    public async dataFrameGallonage(req: Request, res: Response) {
        try {

            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }

            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {



                const vendas = await prismaSales.vendas.findMany({
                    orderBy: {
                        dtHr: 'asc',
                    },
                });

                // Extração de `ibm` únicos
                const ibmList = [...new Set(vendas.map(venda => venda.ibm))];

                // Listas auxiliares
                const listFinalPostos: string[] = [];

                const listFinalCombustivel: number[] = [];
                const listLitroFinalCombustivel: number[] = [];

                const listFinalProduto: number[] = [];
                const listLitroFinalProduto: number[] = [];

                const listFinalOutros: number[] = [];
                const listLitroFinalOutros: number[] = [];

                const registros: number[] = [];

                const listQtdComb: number[] = [];
                const listQtdProduto: number[] = [];
                const listQtdOutros: number[] = [];

                for (const posto of ibmList) {
                    let registroPosto = 0;
                    // Listas auxiliares
                    const valorCombustivel: number[] = [];
                    const litroCombustivel: number[] = [];
                    const valorProduto: number[] = [];
                    const litroProduto: number[] = [];
                    const valorOutros: number[] = [];
                    const litrosOutros: number[] = [];

                    listFinalPostos.push(posto);
                    const iTips: string[] = [];

                    // Consulta documentos filtrados por `ibm`
                    const docPosto = await prismaSales.vendas.findMany({
                        where: {
                            ibm: posto,
                        },
                        orderBy: {
                            dtHr: 'asc',
                        },
                    });

                    for (const doc of docPosto) {
                        registroPosto++;
                        const docItens = doc.items;

                        for (const item of docItens) {
                            iTips.push(item.iTip);
                            if (item.iTip === '1') {
                                valorCombustivel.push(parseFloat(item.tot));
                                litroCombustivel.push(parseFloat(item.qd));
                            } else if (item.iTip === '0') {
                                valorProduto.push(parseFloat(item.tot));
                                litroProduto.push(parseFloat(item.qd));
                            } else {
                                valorOutros.push(parseFloat(item.tot));
                                litrosOutros.push(parseFloat(item.qd));
                            }
                        }
                    }

                    listQtdComb.push(valorCombustivel.length);
                    listQtdProduto.push(valorProduto.length);
                    listQtdOutros.push(valorOutros.length);
                    registros.push(registroPosto);

                    listFinalCombustivel.push(Number(valorCombustivel.reduce((a, b) => a + b, 0).toFixed(2)));
                    listLitroFinalCombustivel.push(Number(litroCombustivel.reduce((a, b) => a + b, 0).toFixed(2)));

                    listFinalProduto.push(Number(valorProduto.reduce((a, b) => a + b, 0).toFixed(2)));
                    listLitroFinalProduto.push(Number(litroProduto.reduce((a, b) => a + b, 0).toFixed(2)));

                    listFinalOutros.push(Number(valorOutros.reduce((a, b) => a + b, 0).toFixed(2)));
                    listLitroFinalOutros.push(Number(litrosOutros.reduce((a, b) => a + b, 0).toFixed(2)));
                }

                const dicionario = {
                    Posto: listFinalPostos,
                    registrosNaBase: registros,
                    qtdAbastecimento: listQtdComb,
                    vendaCombustivel: listFinalCombustivel,
                    litroCombustivel: listLitroFinalCombustivel,
                    qtdProduto: listQtdProduto,
                    vendaProduto: listFinalProduto,
                    litroProduto: listLitroFinalProduto,
                    qtdOutrosProdutos: listQtdOutros,
                    vendasOutros: listFinalOutros,
                    litroOutros: listLitroFinalOutros,
                };

                return res.status(200).json({ data: dicionario })


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
