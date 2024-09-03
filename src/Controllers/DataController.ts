import express from "express";
import cors from "cors";
import 'moment-timezone';
import { Request, Response, application } from "express";
import { PrismaClient as PrismaLBCBi } from '../../generated/clientLBCBi'
import { PrismaClient as PrismaSales } from '../../generated/clientSales'
import { MongoClient, ServerApiVersion } from 'mongodb';
import moment from "moment";
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';
const prismaLBCBi = new PrismaLBCBi()
const prismaSales = new PrismaSales()
import regionStation from '../utils/regionsstation.json';
// import regionstation from "../utils/region";
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
            const actualdate = moment().tz("America/Sao_Paulo").format("YYYY-MM-DD");

            const clientToken = req.headers.authorization;

            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {

                const fuelliterageSell = await prismaSales.vendas.findMany({
                    select: { items: true, ibm: true },
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
                //Quantas vezes foi abastecido combustível nos postos
                const supplyQuantity = itemsArray.flatMap(element => {
                    return element

                })
                //Quantas vezes entraram carros e compraram no posto
                const quantTotal = itemsArray.length
                const quantSupply = supplyQuantity.length

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
                //Faturamento total combustível+produto
                const fuelTotal = itemsArray
                    .map(element => {

                        return parseFloat(element.tot);

                    })
                    .filter((item): item is number => item !== undefined)

                const sumFuelTotal = fuelTotal.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue || 0);
                }, 0);




                //Soma da litragem tipo combustível
                const literage = itemsArray.map(element => {
                    if (element.iTip == "1") { return parseFloat(element.qd) }
                    return undefined;

                }).filter((item): item is number => item !== undefined)

                //Carros que entraram no posto
                const supply = itemsArray.map(element => {
                    return parseFloat(element.qd)

                }, 0)
                const sumSupply = supply.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue || 0);
                })
                const sumLiterage = literage.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue || 0);
                }, 0);
                //Soma do preço de custo do combustível
                const cost_price = itemsArray
                    .map(element => {
                        if (element.iTip === "1") {
                            return { pc: parseFloat(element.pC), qd: parseFloat(element.qd) };
                        }
                        return undefined;
                    })
                    .filter((item): item is { pc: number; qd: number } => item !== undefined);


                const sumCostPrice = cost_price.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue.qd * currentValue.pc || 0);
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
                //Soma do preço de custo do produto
                const product_price = itemsArray
                    .map(element => {
                        if (element.iTip === "0") {
                            return { pc: parseFloat(element.pC), qd: parseFloat(element.qd) };
                        }
                        return undefined;
                    })
                    .filter((item): item is { pc: number; qd: number } => item !== undefined);


                const sumProductPrice = product_price.reduce((accumulator, currentValue) => {
                    return (accumulator || 0) + (currentValue.pc * currentValue.qd || 0);
                }, 0);
                //Diferença faturamento de combustível pelo custo que é o lucro
                const fuelProfit = Math.round(((sumFuel - sumCostPrice)) * 100) / 100
                //Diferença faturamento de produto pelo custo que é o lucro
                const productProfit = Math.round(((sumFuelProd - sumProductPrice)) * 100) / 100
                return res.status(200).json({
                    data: [{ label: "Galonagem", value: Math.round(sumLiterage * 100) / 100, secondary_label: "TM VOL", secondary_value: Math.round((sumLiterage / quantSupply) * 100) / 100 },
                    { label: "Faturamento", value: Math.round(sumFuelTotal * 100) / 100, secondary_label: "TMF", secondary_value: Math.round((sumFuelTotal / quantSupply) * 100) / 100 },
                    { label: "Abastecimentos", value: Math.round(quantSupply * 100) / 100 },
                    { label: "Venda Galonagem", value: Math.round(sumCostPrice * 100) / 100, secondary_label: "TMC", secondary_value: Math.round((sumCostPrice / quantSupply) * 100) / 100 },
                    { label: "Lucro Galonagem", value: fuelProfit },
                    { label: "M/LT", value: Math.round(fuelProfit / sumLiterage * 100) },
                    { label: "Venda de Produto", value: Math.round(sumProductPrice * 100) / 100, secondary_label: "TMP", secondary_value: Math.round((sumProductPrice / quantSupply) * 100) / 100 },
                    { label: "Lucro Produto", value: productProfit },
                    { label: "Lucro Bruto Operacional", value: Math.round((productProfit + fuelProfit) / sumFuelTotal * 100) },
                    ]
                })
            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }



        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }


    }

    //Dados do Gráfico diário
    public async dailyGraphic(req: Request, res: Response) {
        try {
            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const { week_day, variable_type }: { week_day: string, variable_type: string } = req.body
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {
                //Fuso Horário
                const timezone = "America/Sao_Paulo"

                //Data atual com ano e mês
                const actualdate = moment().tz(timezone).format("YYYY-MM");
                const actualYear = parseInt(actualdate.split('-')[0]);
                const actualMonth = parseInt(actualdate.split('-')[1]);

                //Primeiro e último dia do mês
                const firstDayweek = moment.tz(timezone).startOf('month');
                const lastDayweek = moment.tz(timezone).endOf('month');

                // Agregar os dias da semana
                const daysOfWeek: { [key: string]: string[] } = {};
                let currentDay = firstDayweek.clone();

                while (currentDay.isBefore(lastDayweek) || currentDay.isSame(lastDayweek)) {
                    const dayOfWeek = currentDay.format('dddd');
                    const formattedDate = currentDay.format('YYYY-MM-DD');

                    if (!daysOfWeek[dayOfWeek]) {
                        daysOfWeek[dayOfWeek] = [];
                    }

                    daysOfWeek[dayOfWeek].push(formattedDate);
                    currentDay.add(1, 'day');
                }
                let dateRanges
                for (let week in daysOfWeek) {

                    if (week_day == week) {
                        dateRanges = daysOfWeek[week]
                    }

                }

                const multiplesInterval: any = dateRanges?.map(element => {
                    return {
                        dtHr: {
                            gte: `${element}T00:00:00.000Z`,
                            lte: `${element}T23:59:59.999Z`,
                        }
                    }
                })

                const fuelliterageSell = await prismaSales.vendas.findMany({
                    select: { items: true, dtHr: true },
                    where: {
                        OR: multiplesInterval
                    }
                });

                let dateSeparation: any = {}
                dateRanges?.forEach(element => {

                    dateSeparation[element] = []

                })
                fuelliterageSell.forEach(element => {
                    const date = new Date(element.dtHr).toISOString().split('T')[0];
                    dateSeparation[date].push(...element.items);
                });
                interface DateSum {
                    date: string;
                    sum: number;
                }
                let sumArray: DateSum[] = []

                for (const date in dateSeparation) {
                    if (dateSeparation.hasOwnProperty(date)) {

                        const itemsArray = dateSeparation[date];

                        if (itemsArray.length == 0) {
                            sumArray.push({ date: date, sum: 0 })
                            continue;
                        }
                        let total = 0;
                        let quantity = 0;

                        const sum = itemsArray.reduce((accumulate: any, initialValue: any) => {
                            if (initialValue.iTip == "1") {
                                const value = parseFloat(initialValue.tot);
                                const quantityValue = parseFloat(initialValue.qd);
                                const cost = parseFloat(initialValue.pC);

                                if (variable_type == "invoicing") {
                                    return accumulate + value
                                } else if (variable_type == "volume_sold") {
                                    return accumulate + quantityValue;
                                } else if (variable_type == "cost") {
                                    return accumulate + cost
                                } else if (variable_type == "fuel_margin") {
                                    total += value;
                                    quantity += quantityValue;
                                    return total / quantity
                                }
                            }
                            return Math.round(accumulate * 100) / 100;
                        }, 0);

                        sumArray.push({ date: date, sum: sum });

                    }
                }
                sumArray.forEach(element => {
                    const [year, month, day] = element.date.split('-')
                    element.date = `${day}-${month}-${year}`
                })

                return res.status(200).json({ data: sumArray })

            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }


        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }

    }
    public async dailyGraphicFuel(req: Request, res: Response) {
        try {
            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const { week_day, variable_type }: { week_day: string, variable_type: string } = req.body
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {
                //Fuso Horário
                const timezone = "America/Sao_Paulo"

                //Data atual com ano e mês
                const actualdate = moment().tz(timezone).format("YYYY-MM");
                const actualYear = parseInt(actualdate.split('-')[0]);
                const actualMonth = parseInt(actualdate.split('-')[1]);

                //Primeiro e último dia do mês
                const firstDayweek = moment.tz(timezone).startOf('month');
                const lastDayweek = moment.tz(timezone).endOf('month');

                // Agregar os dias da semana
                const daysOfWeek: { [key: string]: string[] } = {};
                let currentDay = firstDayweek.clone();

                while (currentDay.isBefore(lastDayweek) || currentDay.isSame(lastDayweek)) {
                    const dayOfWeek = currentDay.format('dddd');
                    const formattedDate = currentDay.format('YYYY-MM-DD');

                    if (!daysOfWeek[dayOfWeek]) {
                        daysOfWeek[dayOfWeek] = [];
                    }

                    daysOfWeek[dayOfWeek].push(formattedDate);
                    currentDay.add(1, 'day');
                }
                let dateRanges
                for (let week in daysOfWeek) {

                    if (week_day == week) {
                        dateRanges = daysOfWeek[week]
                    }

                }

                const multiplesInterval: any = dateRanges?.map(element => {
                    return {
                        dtHr: {
                            gte: `${element}T00:00:00.000Z`,
                            lte: `${element}T23:59:59.999Z`,
                        }
                    }
                })

                const fuelliterageSell = await prismaSales.vendas.findMany({
                    select: { items: true, dtHr: true },
                    where: {
                        OR: multiplesInterval
                    }
                });

                let dateSeparation: any = {}
                dateRanges?.forEach(element => {

                    dateSeparation[element] = []

                })
                fuelliterageSell.forEach(element => {
                    const date = new Date(element.dtHr).toISOString().split('T')[0];
                    dateSeparation[date].push(...element.items);
                });
                interface DateSum {
                    date: string;
                    sum: number;
                }
                let sumArray: DateSum[] = []

                for (const date in dateSeparation) {
                    if (dateSeparation.hasOwnProperty(date)) {

                        const itemsArray = dateSeparation[date];

                        if (itemsArray.length == 0) {
                            sumArray.push({ date: date, sum: 0 })
                            continue;
                        }
                        let total = 0;
                        let quantity = 0;

                        const sum = itemsArray.reduce((accumulate: any, initialValue: any) => {
                            if (initialValue.iTip == "1") {
                                const value = parseFloat(initialValue.tot);
                                const quantityValue = parseFloat(initialValue.qd);
                                const cost = parseFloat(initialValue.pC);

                                if (variable_type == "invoicing") {
                                    return Math.round((accumulate + value) * 100) / 100;
                                } else if (variable_type == "volume_sold") {
                                    return Math.round((accumulate + quantityValue) * 100) / 100;
                                } else if (variable_type == "cost") {
                                    return Math.round((accumulate + quantityValue * cost) * 100) / 100;
                                } else if (variable_type == "fuel_margin") {
                                    total += value;
                                    quantity += quantityValue;
                                    return Math.round((total / quantity) * 100) / 100;
                                }
                            }
                            return accumulate;
                        }, 0);
                        sumArray.push({ date: date, sum: sum });

                    }
                }
                sumArray.forEach(element => {
                    const [year, month, day] = element.date.split('-')
                    element.date = `${day}-${month}-${year}`
                })

                return res.status(200).json({ data: sumArray })

            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }


        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }


    }
    public async dailyGraphicProduct(req: Request, res: Response) {
        try {
            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const { week_day, variable_type }: { week_day: string, variable_type: string } = req.body
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {
                //Fuso Horário
                const timezone = "America/Sao_Paulo"

                //Data atual com ano e mês
                const actualdate = moment().tz(timezone).format("YYYY-MM");
                const actualYear = parseInt(actualdate.split('-')[0]);
                const actualMonth = parseInt(actualdate.split('-')[1]);

                //Primeiro e último dia do mês
                const firstDayweek = moment.tz(timezone).startOf('month');
                const lastDayweek = moment.tz(timezone).endOf('month');

                // Agregar os dias da semana
                const daysOfWeek: { [key: string]: string[] } = {};
                let currentDay = firstDayweek.clone();

                while (currentDay.isBefore(lastDayweek) || currentDay.isSame(lastDayweek)) {
                    const dayOfWeek = currentDay.format('dddd');
                    const formattedDate = currentDay.format('YYYY-MM-DD');

                    if (!daysOfWeek[dayOfWeek]) {
                        daysOfWeek[dayOfWeek] = [];
                    }

                    daysOfWeek[dayOfWeek].push(formattedDate);
                    currentDay.add(1, 'day');
                }
                let dateRanges
                for (let week in daysOfWeek) {

                    if (week_day == week) {
                        dateRanges = daysOfWeek[week]
                    }

                }

                const multiplesInterval: any = dateRanges?.map(element => {
                    return {
                        dtHr: {
                            gte: `${element}T00:00:00.000Z`,
                            lte: `${element}T23:59:59.999Z`,
                        }
                    }
                })

                const fuelliterageSell = await prismaSales.vendas.findMany({
                    select: { items: true, dtHr: true },
                    where: {
                        OR: multiplesInterval
                    }
                });

                let dateSeparation: any = {}
                dateRanges?.forEach(element => {

                    dateSeparation[element] = []

                })
                fuelliterageSell.forEach(element => {
                    const date = new Date(element.dtHr).toISOString().split('T')[0];
                    dateSeparation[date].push(...element.items);
                });
                interface DateSum {
                    date: string;
                    sum: number;
                }
                let sumArray: DateSum[] = []

                for (const date in dateSeparation) {
                    if (dateSeparation.hasOwnProperty(date)) {

                        const itemsArray = dateSeparation[date];

                        if (itemsArray.length == 0) {
                            sumArray.push({ date: date, sum: 0 })
                            continue;
                        }
                        let total = 0;
                        let quantity = 0;

                        const sum = itemsArray.reduce((accumulate: any, initialValue: any) => {
                            if (initialValue.iTip == "0") {
                                const value = parseFloat(initialValue.tot);
                                const quantityValue = parseFloat(initialValue.qd);
                                const cost = parseFloat(initialValue.pC);

                                if (variable_type == "invoicing") {
                                    return Math.round((accumulate + value) * 100) / 100;
                                } else if (variable_type == "volume_sold") {
                                    return Math.round((accumulate + quantityValue) * 100) / 100;
                                } else if (variable_type == "cost") {
                                    return Math.round((accumulate + quantityValue * cost) * 100) / 100;
                                } else if (variable_type == "fuel_margin") {
                                    total += value;
                                    quantity += quantityValue;
                                    return Math.round((total / quantity) * 100) / 100;
                                }
                            }
                            return accumulate;
                        }, 0);

                        sumArray.push({ date: date, sum: sum });

                    }
                }
                sumArray.forEach(element => {
                    const [year, month, day] = element.date.split('-')
                    element.date = `${day}-${month}-${year}`
                })

                return res.status(200).json({ data: sumArray })

            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }


        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }


    }
    public async regionalChart(req: Request, res: Response) {
        try {
            const clientToken = req.headers.authorization;
            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }

            const { variable_type }: { variable_type: string } = req.body;
            const expectedToken = process.env.TOKEN;
            if (clientToken !== `Bearer ${expectedToken}`) {
                return res.status(401).json({ message: "Falha na autenticação: Token inválido." });
            }

            const timezone = 'America/Sao_Paulo';
            const firstDay = moment.tz(timezone).startOf('month').toDate();
            const lastDay = moment.tz(timezone).endOf('month').toDate();
            const today = moment.tz(timezone).format('YYYY-MM-DD')
            // Pré-processar o mapeamento regional
            const ibmToRegionMap: { [key: string]: string } = {};
            for (const [region, ibms] of Object.entries(regionStation)) {
                for (const ibm of ibms) {
                    ibmToRegionMap[ibm] = region;
                }
            }

            const result = await prismaSales.vendas.findMany({
                select: {
                    items: true,
                    ibm: true
                },
                where: {
                    dtHr: {
                        gte: `${today}T00:00:00.000Z`,
                        lte: `${today}T23:59:59.999Z`,
                    }
                }
            });

            type RegionalTotals = {
                [key: string]: number;
            };

            const regionalTotals: RegionalTotals = {};
            const regionalQuantities: RegionalTotals = {};

            for (const entry of result) {
                const regionalName = ibmToRegionMap[entry.ibm];
                if (regionalName) {
                    if (!regionalTotals[regionalName]) {
                        regionalTotals[regionalName] = 0;
                        regionalQuantities[regionalName] = 0;
                    }

                    for (const item of entry.items) {
                        if (item.iTip === '1') {
                            const tot = parseFloat(item.tot) || 0;
                            const qd = parseFloat(item.qd) || 0;
                            const pC = parseFloat(item.pC) || 0;

                            switch (variable_type) {
                                case 'invoicing':
                                    regionalTotals[regionalName] += tot;
                                    break;
                                case 'volume_sold':
                                    regionalTotals[regionalName] += qd;
                                    break;
                                case 'cost':
                                    regionalTotals[regionalName] += pC;
                                    break;
                                case 'fuel_margin':
                                    regionalTotals[regionalName] += tot;
                                    regionalQuantities[regionalName] += qd;
                                    break;
                            }
                        }
                    }
                }
            }

            if (variable_type === 'fuel_margin') {
                for (const region in regionalTotals) {
                    if (regionalQuantities[region] > 0) {
                        regionalTotals[region] = regionalTotals[region] / regionalQuantities[region];
                    } else {
                        regionalTotals[region] = 0;
                    }
                }
            }

            const finalRegionalTotals: { [key: string]: number } = {};
            for (const region in regionalTotals) {
                finalRegionalTotals[region] = Math.round(regionalTotals[region] * 100) / 100;
            }

            const orderRegional = {
                "Regional 1": finalRegionalTotals["REGIONAL1"],
                "Regional 2": finalRegionalTotals["REGIONAL2"],
                "Regional 3": finalRegionalTotals["REGIONAL3"],
                "Regional 4": finalRegionalTotals["REGIONAL4"],
                "Regional 5": finalRegionalTotals["REGIONAL5"],
                "Regional Itaúna": finalRegionalTotals["REGIONALITAUNA"]
            };

            return res.json(orderRegional);

        } catch (error) {
            return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` });
        }
    }
    public async mapData(req: Request, res: Response) {
        try {
            const clientToken = req.headers.authorization;

            if (!clientToken) {
                return res.status(401).json({ message: "Token não fornecido." });
            }
            const expectedToken = process.env.TOKEN;
            if (clientToken == `Bearer ${expectedToken}`) {
                const today = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD')

                const result = await prismaSales.vendas.findMany({
                    select: { ibm: true, items: true },
                    where: {
                        dtHr: {
                            gte: `${today}T00:00:00.000Z`,
                            lte: `${today}T23:59:59.999Z`,
                        }
                    }
                })
                //Agregando por IBM
                let station: { [key: string]: Object[] } = {}
                result.forEach(element => {

                    if (!station[element.ibm]) {
                        station[element.ibm] = []

                    }
                    station[element.ibm].push(...element.items);

                })
                let ibmvalues = []
                for (let ibm in station) {
                    let itemsArray = station[ibm];

                    const sumfuel = itemsArray.reduce((accumulate: number, initialValue: any) => {
                        if (initialValue.iTip == "1") {
                            const value = parseFloat(initialValue.tot);
                            return accumulate + value;
                        }
                        return accumulate;
                    }, 0);
                    const literage = itemsArray.reduce((accumulate: number, initialValue: any) => {
                        if (initialValue.iTip == "1") {
                            const value = parseFloat(initialValue.qd);
                            return accumulate + value;
                        }
                        return accumulate;
                    }, 0);
                    const sumproduct = itemsArray.reduce((accumulate: number, initialValue: any) => {
                        if (initialValue.iTip == "0") {
                            const value = parseFloat(initialValue.tot);
                            return accumulate + value;
                        }
                        return accumulate;
                    }, 0);
                    const cost_price = itemsArray.reduce((accumulate: number, initialValue: any) => {
                        if (initialValue.iTip == "1") {
                            const value = parseFloat(initialValue.pC);
                            return accumulate + value;
                        }
                        return accumulate;
                    }, 0);

                    const roundedSum = Math.round(sumfuel * 100) / 100;
                    const roundedProduct = Math.round(sumproduct * 100) / 100;
                    const roundedLiterage = Math.round(literage * 100) / 100;



                    ibmvalues.push({ ibm: ibm, "Venda de Combustível": roundedSum, "Produtos vendidos": roundedProduct, "Galonagem": roundedLiterage });
                }

                return res.status(200).json({ data: ibmvalues })
            } else {
                return res
                    .status(401)
                    .json({ message: "Falha na autenticação: Token inválido." });
            }
        } catch (error) { return res.status(500).json({ message: `Erro ao retornar os dados: ${error}` }); }
    }



}



export default new DataController()
