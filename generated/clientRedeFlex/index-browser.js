
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.1
 * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
 */
Prisma.prismaVersion = {
  client: "5.15.1",
  engine: "5675a3182f972f1a8f31d16eee6abf4fd54910e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BasedadosScalarFieldEnum = {
  company_uuid: 'company_uuid',
  company_emp: 'company_emp',
  company_name: 'company_name',
  company_date: 'company_date',
  company_week_day: 'company_week_day',
  company_fuel: 'company_fuel',
  company_volume: 'company_volume',
  company_cost: 'company_cost',
  company_sale: 'company_sale',
  company_profit: 'company_profit',
  company_created_at: 'company_created_at',
  company_updated_at: 'company_updated_at'
};

exports.Prisma.Dataframe_fuelScalarFieldEnum = {
  datafuel_uuid: 'datafuel_uuid',
  datafuel_qtdAbastecimento: 'datafuel_qtdAbastecimento',
  datafuel_vendaCombustivel: 'datafuel_vendaCombustivel',
  datafuel_litroCombustivel: 'datafuel_litroCombustivel',
  datafuel_qtdProduto: 'datafuel_qtdProduto',
  datafuel_vendaProduto: 'datafuel_vendaProduto',
  datafuel_litroProduto: 'datafuel_litroProduto',
  datafuel_qtdOutrosProdutos: 'datafuel_qtdOutrosProdutos',
  datafuel_vendasOutros: 'datafuel_vendasOutros',
  datafuel_litroOutros: 'datafuel_litroOutros',
  datafuel_custo: 'datafuel_custo',
  datafuel_lucro: 'datafuel_lucro',
  datafuel_dt_registro: 'datafuel_dt_registro',
  datafuel_updated: 'datafuel_updated'
};

exports.Prisma.Dataframe_productScalarFieldEnum = {
  dataproduct_uuid: 'dataproduct_uuid',
  dataproduct_posto: 'dataproduct_posto',
  dataproduct_venda_produto: 'dataproduct_venda_produto',
  dataproduct_valor_venda: 'dataproduct_valor_venda',
  dataproduct_qtd_produto_vendido: 'dataproduct_qtd_produto_vendido',
  dataproduct_dt_registro: 'dataproduct_dt_registro',
  dataproduct_updated: 'dataproduct_updated'
};

exports.Prisma.FuelScalarFieldEnum = {
  fuel_uuid: 'fuel_uuid',
  fuel_regular_gasoline: 'fuel_regular_gasoline',
  fuel_alcohol: 'fuel_alcohol',
  use_uuid: 'use_uuid',
  fuel_created_at: 'fuel_created_at',
  fuel_updated_at: 'fuel_updated_at'
};

exports.Prisma.Gas_stationScalarFieldEnum = {
  gas_uuid: 'gas_uuid',
  gas_fuel_type: 'gas_fuel_type',
  gas_value: 'gas_value',
  gas_created_at: 'gas_created_at',
  gas_updated_at: 'gas_updated_at',
  gas_ibm: 'gas_ibm',
  gas_identifier: 'gas_identifier'
};

exports.Prisma.Ibm_infoScalarFieldEnum = {
  ibm: 'ibm',
  nomefantasia: 'nomefantasia',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  cep: 'cep',
  lat: 'lat',
  long: 'long',
  id: 'id'
};

exports.Prisma.Posto_signalScalarFieldEnum = {
  table_id: 'table_id',
  posto_id: 'posto_id',
  vol_sold: 'vol_sold',
  vol_rate: 'vol_rate',
  vol_alert: 'vol_alert',
  invoicing: 'invoicing',
  invoice_rate: 'invoice_rate',
  invoice_alert: 'invoice_alert',
  created_at: 'created_at'
};

exports.Prisma.Rd_postoScalarFieldEnum = {
  posto_uuid: 'posto_uuid',
  posto_name: 'posto_name'
};

exports.Prisma.Set_variablesScalarFieldEnum = {
  set_uuid: 'set_uuid',
  set_regular_gasoline: 'set_regular_gasoline',
  set_alcohol: 'set_alcohol',
  use_uuid: 'use_uuid',
  set_created_at: 'set_created_at',
  set_updated_at: 'set_updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  use_uuid: 'use_uuid',
  use_name: 'use_name',
  use_email: 'use_email',
  use_password: 'use_password',
  use_created_at: 'use_created_at',
  use_updated_at: 'use_updated_at',
  use_date_expire: 'use_date_expire',
  use_token: 'use_token',
  use_volume_gc: 'use_volume_gc',
  use_volume_al: 'use_volume_al',
  use_volume_total: 'use_volume_total',
  use_volume_gc_min: 'use_volume_gc_min',
  use_volume_al_min: 'use_volume_al_min',
  use_volume_total_min: 'use_volume_total_min',
  use_level: 'use_level',
  use_whats_app: 'use_whats_app',
  use_margin_al: 'use_margin_al',
  use_margin_al_flag: 'use_margin_al_flag',
  use_margin_al_min: 'use_margin_al_min',
  use_margin_gc: 'use_margin_gc',
  use_margin_gc_flag: 'use_margin_gc_flag',
  use_margin_gc_min: 'use_margin_gc_min',
  use_margin_total: 'use_margin_total',
  use_margin_total_flag: 'use_margin_total_flag',
  use_margin_total_min: 'use_margin_total_min',
  use_volume_al_flag: 'use_volume_al_flag',
  use_volume_gc_flag: 'use_volume_gc_flag',
  use_volume_total_flag: 'use_volume_total_flag'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  basedados: 'basedados',
  dataframe_fuel: 'dataframe_fuel',
  dataframe_product: 'dataframe_product',
  fuel: 'fuel',
  gas_station: 'gas_station',
  ibm_info: 'ibm_info',
  posto_signal: 'posto_signal',
  rd_posto: 'rd_posto',
  set_variables: 'set_variables',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
