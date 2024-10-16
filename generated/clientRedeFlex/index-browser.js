
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

exports.Prisma.Ibm_infoScalarFieldEnum = {
  ibm: 'ibm',
  nomefantasia: 'nomefantasia',
  cnpj: 'cnpj',
  razaosocial: 'razaosocial',
  cep: 'cep',
  lat: 'lat',
  long: 'long',
  id: 'id',
  endereco: 'endereco',
  regional: 'regional',
  ibm_margin_AL: 'ibm_margin_AL',
  ibm_margin_GC: 'ibm_margin_GC',
  ibm_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'ibm_margin_ETANOL_HIDRATADO_COMBUSTIVEL'
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
  use_level: 'use_level',
  use_whats_app: 'use_whats_app',
  use_mlt: 'use_mlt',
  use_tmc: 'use_tmc',
  use_tmf: 'use_tmf',
  use_tmp: 'use_tmp',
  use_tmvol: 'use_tmvol',
  use_lucro_bruto_operacional_galonagem: 'use_lucro_bruto_operacional_galonagem',
  use_lucro_bruto_operacional_produto: 'use_lucro_bruto_operacional_produto',
  use_lucro_bruto_operacional: 'use_lucro_bruto_operacional',
  use_ETANOL_COMUM_comb: 'use_ETANOL_COMUM_comb',
  use_GASOLINA_COMUM_comb: 'use_GASOLINA_COMUM_comb',
  use_OLEO_DIESEL_B_S10_COMUM_comb: 'use_OLEO_DIESEL_B_S10_COMUM_comb',
  use_OLEO_DIESEL_B_S500_COMUM_comb: 'use_OLEO_DIESEL_B_S500_COMUM_comb'
};

exports.Prisma.Gas_station_setvariablesScalarFieldEnum = {
  gas_station_uuid: 'gas_station_uuid',
  gas_station_marginGC: 'gas_station_marginGC',
  gas_station_marginAL: 'gas_station_marginAL',
  gas_station_type_marginGC: 'gas_station_type_marginGC',
  gas_station_type_marginAL: 'gas_station_type_marginAL',
  gas_station_whats_app: 'gas_station_whats_app',
  gas_station_created_at: 'gas_station_created_at',
  gas_station_updated_at: 'gas_station_updated_at',
  ibm_info_id: 'ibm_info_id',
  use_uuid: 'use_uuid',
  verification_msg_sent: 'verification_msg_sent',
  verification_hour_marginAL: 'verification_hour_marginAL',
  verification_hour_marginGC: 'verification_hour_marginGC',
  gas_station_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'gas_station_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  gas_station_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'gas_station_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  gas_station_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL: 'gas_station_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL',
  gas_station_sanado_hour_marginAL: 'gas_station_sanado_hour_marginAL',
  gas_station_sanado_hour_marginGC: 'gas_station_sanado_hour_marginGC',
  gas_station_sanado_marginAL: 'gas_station_sanado_marginAL',
  gas_station_sanado_marginGC: 'gas_station_sanado_marginGC',
  gas_station_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'gas_station_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  gas_station_margin_MLT: 'gas_station_margin_MLT',
  gas_station_margin_TMP: 'gas_station_margin_TMP',
  gas_station_LUCRO_BRUTO_GALONAGEM_modal: 'gas_station_LUCRO_BRUTO_GALONAGEM_modal',
  gas_station_LUCRO_BRUTO_OPERACIONAL_modal: 'gas_station_LUCRO_BRUTO_OPERACIONAL_modal',
  gas_station_LUCRO_BRUTO_PRODUTO_modal: 'gas_station_LUCRO_BRUTO_PRODUTO_modal',
  gas_station_MLT_modal: 'gas_station_MLT_modal',
  gas_station_TMC_modal: 'gas_station_TMC_modal',
  gas_station_TMF_modal: 'gas_station_TMF_modal',
  gas_station_TMP_modal: 'gas_station_TMP_modal',
  gas_station_TMVOL_modal: 'gas_station_TMVOL_modal',
  gas_station_ETANOL_COMUM_comb: 'gas_station_ETANOL_COMUM_comb',
  gas_station_GASOLINA_COMUM_comb: 'gas_station_GASOLINA_COMUM_comb',
  gas_station_OLEO_DIESEL_B_S10_COMUM_comb: 'gas_station_OLEO_DIESEL_B_S10_COMUM_comb',
  gas_station_OLEO_DIESEL_B_S500_COMUM_comb: 'gas_station_OLEO_DIESEL_B_S500_COMUM_comb'
};

exports.Prisma.Region_setvariablesScalarFieldEnum = {
  region_uuid: 'region_uuid',
  region_marginGC: 'region_marginGC',
  region_marginAL: 'region_marginAL',
  region_type_marginGC: 'region_type_marginGC',
  region_type_marginAL: 'region_type_marginAL',
  region_whats_app: 'region_whats_app',
  region_station_created_at: 'region_station_created_at',
  region_station_updated_at: 'region_station_updated_at',
  use_uuid: 'use_uuid',
  regions_uuid: 'regions_uuid',
  verification_msg_sent: 'verification_msg_sent',
  verification_hour_marginAL: 'verification_hour_marginAL',
  verification_hour_marginGC: 'verification_hour_marginGC',
  region_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'region_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  region_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'region_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  region_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL: 'region_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL',
  region_sanado_hour_marginAL: 'region_sanado_hour_marginAL',
  region_sanado_hour_marginGC: 'region_sanado_hour_marginGC',
  region_sanado_marginAL: 'region_sanado_marginAL',
  region_sanado_marginGC: 'region_sanado_marginGC',
  region_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'region_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  region_station_ETANOL_COMUM_comb: 'region_station_ETANOL_COMUM_comb',
  region_station_GASOLINA_COMUM_comb: 'region_station_GASOLINA_COMUM_comb',
  region_station_LUCRO_BRUTO_GALONAGEM_modal: 'region_station_LUCRO_BRUTO_GALONAGEM_modal',
  region_station_LUCRO_BRUTO_OPERACIONAL_modal: 'region_station_LUCRO_BRUTO_OPERACIONAL_modal',
  region_station_LUCRO_BRUTO_PRODUTO_modal: 'region_station_LUCRO_BRUTO_PRODUTO_modal',
  region_station_MLT_modal: 'region_station_MLT_modal',
  region_station_OLEO_DIESEL_B_S10_COMUM_comb: 'region_station_OLEO_DIESEL_B_S10_COMUM_comb',
  region_station_OLEO_DIESEL_B_S500_COMUM_comb: 'region_station_OLEO_DIESEL_B_S500_COMUM_comb',
  region_station_TMC_modal: 'region_station_TMC_modal',
  region_station_TMF_modal: 'region_station_TMF_modal',
  region_station_TMP_modal: 'region_station_TMP_modal',
  region_station_TMVOL_modal: 'region_station_TMVOL_modal'
};

exports.Prisma.RegionsScalarFieldEnum = {
  regions_uuid: 'regions_uuid',
  regions_name: 'regions_name',
  regions_types: 'regions_types',
  region_created_at: 'region_created_at',
  region_updated_at: 'region_updated_at',
  regions_margin_AL: 'regions_margin_AL',
  regions_margin_GC: 'regions_margin_GC',
  regions_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'regions_margin_ETANOL_HIDRATADO_COMBUSTIVEL'
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
  ibm_info: 'ibm_info',
  users: 'users',
  gas_station_setvariables: 'gas_station_setvariables',
  region_setvariables: 'region_setvariables',
  regions: 'regions'
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
