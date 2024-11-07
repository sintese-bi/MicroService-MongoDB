
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
  ibm_margin_GC: 'ibm_margin_GC',
  ibm_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'ibm_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  ibm_margin_GASOLINA_PODIUM: 'ibm_margin_GASOLINA_PODIUM',
  ibm_margin_GASOLINA_PREMIUM: 'ibm_margin_GASOLINA_PREMIUM',
  ibm_margin_DIESEL_GROUP: 'ibm_margin_DIESEL_GROUP'
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
  gas_station_type_marginGC: 'gas_station_type_marginGC',
  gas_station_whats_app: 'gas_station_whats_app',
  gas_station_created_at: 'gas_station_created_at',
  gas_station_updated_at: 'gas_station_updated_at',
  ibm_info_id: 'ibm_info_id',
  use_uuid: 'use_uuid',
  verification_msg_sent: 'verification_msg_sent',
  verification_hour_marginGC: 'verification_hour_marginGC',
  gas_station_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'gas_station_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  gas_station_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'gas_station_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  gas_station_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL: 'gas_station_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL',
  gas_station_sanado_hour_marginGC: 'gas_station_sanado_hour_marginGC',
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
  gas_station_OLEO_DIESEL_B_S500_COMUM_comb: 'gas_station_OLEO_DIESEL_B_S500_COMUM_comb',
  gas_station_margin_DIESEL_GROUP: 'gas_station_margin_DIESEL_GROUP',
  gas_station_sanado_hour_margin_DIESEL_GROUP: 'gas_station_sanado_hour_margin_DIESEL_GROUP',
  gas_station_sanado_margin_DIESEL_GROUP: 'gas_station_sanado_margin_DIESEL_GROUP',
  gas_station_type_margin_DIESEL_GROUP: 'gas_station_type_margin_DIESEL_GROUP',
  verification_hour_margin_DIESEL_GROUP: 'verification_hour_margin_DIESEL_GROUP',
  gas_station_margin_GASOLINA_PODIUM: 'gas_station_margin_GASOLINA_PODIUM',
  gas_station_sanado_hour_margin_GASOLINA_PODIUM: 'gas_station_sanado_hour_margin_GASOLINA_PODIUM',
  gas_station_sanado_margin_GASOLINA_PODIUM: 'gas_station_sanado_margin_GASOLINA_PODIUM',
  gas_station_type_margin_GASOLINA_PODIUM: 'gas_station_type_margin_GASOLINA_PODIUM',
  verification_hour_margin_GASOLINA_PODIUM: 'verification_hour_margin_GASOLINA_PODIUM',
  gas_station_margin_GASOLINA_PREMIUM: 'gas_station_margin_GASOLINA_PREMIUM',
  gas_station_sanado_hour_margin_GASOLINA_PREMIUM: 'gas_station_sanado_hour_margin_GASOLINA_PREMIUM',
  gas_station_sanado_margin_GASOLINA_PREMIUM: 'gas_station_sanado_margin_GASOLINA_PREMIUM',
  gas_station_type_margin_GASOLINA_PREMIUM: 'gas_station_type_margin_GASOLINA_PREMIUM',
  verification_hour_margin_GASOLINA_PREMIUM: 'verification_hour_margin_GASOLINA_PREMIUM'
};

exports.Prisma.Region_setvariablesScalarFieldEnum = {
  region_uuid: 'region_uuid',
  region_marginGC: 'region_marginGC',
  region_type_marginGC: 'region_type_marginGC',
  region_whats_app: 'region_whats_app',
  region_station_created_at: 'region_station_created_at',
  region_station_updated_at: 'region_station_updated_at',
  use_uuid: 'use_uuid',
  regions_uuid: 'regions_uuid',
  verification_msg_sent: 'verification_msg_sent',
  verification_hour_marginGC: 'verification_hour_marginGC',
  region_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'region_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  region_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'region_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  region_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL: 'region_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL',
  region_sanado_hour_marginGC: 'region_sanado_hour_marginGC',
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
  region_station_TMVOL_modal: 'region_station_TMVOL_modal',
  region_margin_DIESEL_GROUP: 'region_margin_DIESEL_GROUP',
  region_sanado_hour_margin_DIESEL_GROUP: 'region_sanado_hour_margin_DIESEL_GROUP',
  region_sanado_margin_DIESEL_GROUP: 'region_sanado_margin_DIESEL_GROUP',
  region_type_margin_DIESEL_GROUP: 'region_type_margin_DIESEL_GROUP',
  verification_hour_margin_DIESEL_GROUP: 'verification_hour_margin_DIESEL_GROUP',
  region_margin_GASOLINA_PODIUM: 'region_margin_GASOLINA_PODIUM',
  region_sanado_hour_GASOLINA_PODIUM: 'region_sanado_hour_GASOLINA_PODIUM',
  region_sanado_margin_GASOLINA_PODIUM: 'region_sanado_margin_GASOLINA_PODIUM',
  region_type_margin_GASOLINA_PODIUM: 'region_type_margin_GASOLINA_PODIUM',
  verification_hour_margin_GASOLINA_PODIUM: 'verification_hour_margin_GASOLINA_PODIUM',
  region_margin_GASOLINA_PREMIUM: 'region_margin_GASOLINA_PREMIUM',
  region_sanado_hour_margin_GASOLINA_PREMIUM: 'region_sanado_hour_margin_GASOLINA_PREMIUM',
  region_sanado_margin_GASOLINA_PREMIUM: 'region_sanado_margin_GASOLINA_PREMIUM',
  region_type_margin_GASOLINA_PREMIUM: 'region_type_margin_GASOLINA_PREMIUM',
  verification_hour_margin_GASOLINA_PREMIUM: 'verification_hour_margin_GASOLINA_PREMIUM',
  region_sanado_hour_GASOLINA_PREMIUM: 'region_sanado_hour_GASOLINA_PREMIUM'
};

exports.Prisma.RegionsScalarFieldEnum = {
  regions_uuid: 'regions_uuid',
  regions_name: 'regions_name',
  regions_types: 'regions_types',
  region_created_at: 'region_created_at',
  region_updated_at: 'region_updated_at',
  regions_margin_GC: 'regions_margin_GC',
  regions_margin_ETANOL_HIDRATADO_COMBUSTIVEL: 'regions_margin_ETANOL_HIDRATADO_COMBUSTIVEL',
  regions_margin_GASOLINA_PODIUM: 'regions_margin_GASOLINA_PODIUM',
  regions_margin_GASOLINA_PREMIUM: 'regions_margin_GASOLINA_PREMIUM',
  regions_margin_DIESEL_GROUP: 'regions_margin_DIESEL_GROUP'
};

exports.Prisma.Big_numbers_valuesScalarFieldEnum = {
  bignumbers_uuid: 'bignumbers_uuid',
  bignumbers_sumliterage: 'bignumbers_sumliterage',
  bignumbers_invoicing: 'bignumbers_invoicing',
  bignumbers_Supplies: 'bignumbers_Supplies',
  bignumbers_fuelSales: 'bignumbers_fuelSales',
  bignumbers_fuelProfit: 'bignumbers_fuelProfit',
  bignumbers_productSales: 'bignumbers_productSales',
  bignumbers_productProfit: 'bignumbers_productProfit',
  bignumbers_dailyProductProfit: 'bignumbers_dailyProductProfit'
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
  regions: 'regions',
  big_numbers_values: 'big_numbers_values'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Eloy\\Desktop\\Arquivos\\Projetos\\MicroService-MongoDB\\generated\\clientRedeFlex",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.15.1",
  "engineVersion": "5675a3182f972f1a8f31d16eee6abf4fd54910e3",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URLPOSTGRESQL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/clientRedeFlex\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URLPOSTGRESQL\")\n}\n\nmodel ibm_info {\n  ibm                                     String?                    @db.VarChar(255)\n  nomefantasia                            String?                    @db.VarChar(255)\n  cnpj                                    String?                    @db.VarChar(255)\n  razaosocial                             String?                    @db.VarChar(255)\n  cep                                     String?                    @db.VarChar(255)\n  lat                                     Float?\n  long                                    Float?\n  id                                      String                     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  endereco                                String?                    @db.VarChar(255)\n  regional                                String?                    @db.VarChar(255)\n  ibm_margin_GC                           Float[]\n  ibm_margin_ETANOL_HIDRATADO_COMBUSTIVEL Float[]\n  ibm_margin_GASOLINA_PODIUM              Float[]\n  ibm_margin_GASOLINA_PREMIUM             Float[]\n  ibm_margin_DIESEL_GROUP                 Float[]\n  gas_station_setvariables                gas_station_setvariables[]\n}\n\nmodel users {\n  use_uuid                              String                     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  use_name                              String?                    @db.VarChar(100)\n  use_email                             String?                    @db.VarChar(50)\n  use_password                          String?                    @db.VarChar(255)\n  use_created_at                        DateTime                   @default(now()) @db.Timestamp(6)\n  use_updated_at                        DateTime                   @default(now()) @db.Timestamp(6)\n  use_date_expire                       DateTime?\n  use_token                             String?                    @db.VarChar(255)\n  use_level                             String?                    @db.VarChar(20)\n  use_whats_app                         String[]                   @db.VarChar(255)\n  use_mlt                               Float?\n  use_tmc                               Float?\n  use_tmf                               Float?\n  use_tmp                               Float?\n  use_tmvol                             Float?\n  use_lucro_bruto_operacional_galonagem Float?\n  use_lucro_bruto_operacional_produto   Float?\n  use_lucro_bruto_operacional           Float?\n  use_ETANOL_COMUM_comb                 Float?\n  use_GASOLINA_COMUM_comb               Float?\n  use_OLEO_DIESEL_B_S10_COMUM_comb      Float?\n  use_OLEO_DIESEL_B_S500_COMUM_comb     Float?\n  gas_station_setvariables              gas_station_setvariables[]\n  region_setvariables                   region_setvariables[]\n}\n\nmodel gas_station_setvariables {\n  gas_station_uuid                                       String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  gas_station_marginGC                                   Float?\n  gas_station_type_marginGC                              Boolean?\n  gas_station_whats_app                                  String[]  @db.VarChar(255)\n  gas_station_created_at                                 DateTime  @default(now()) @db.Timestamp(6)\n  gas_station_updated_at                                 DateTime  @default(now()) @db.Timestamp(6)\n  ibm_info_id                                            String?   @db.Uuid\n  use_uuid                                               String?   @db.Uuid\n  verification_msg_sent                                  Boolean?  @default(false)\n  verification_hour_marginGC                             DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  gas_station_margin_ETANOL_HIDRATADO_COMBUSTIVEL        Float?\n  gas_station_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL   Boolean?\n  verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL  DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  gas_station_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL   DateTime?\n  gas_station_sanado_hour_marginGC                       DateTime?\n  gas_station_sanado_marginGC                            Boolean?\n  gas_station_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL Boolean?\n  gas_station_margin_MLT                                 Float?\n  gas_station_margin_TMP                                 Float?\n  gas_station_LUCRO_BRUTO_GALONAGEM_modal                Float?\n  gas_station_LUCRO_BRUTO_OPERACIONAL_modal              Float?\n  gas_station_LUCRO_BRUTO_PRODUTO_modal                  Float?\n  gas_station_MLT_modal                                  Float?\n  gas_station_TMC_modal                                  Float?\n  gas_station_TMF_modal                                  Float?\n  gas_station_TMP_modal                                  Float?\n  gas_station_TMVOL_modal                                Float?\n  gas_station_ETANOL_COMUM_comb                          Float?\n  gas_station_GASOLINA_COMUM_comb                        Float?\n  gas_station_OLEO_DIESEL_B_S10_COMUM_comb               Float?\n  gas_station_OLEO_DIESEL_B_S500_COMUM_comb              Float?\n  gas_station_margin_DIESEL_GROUP                        Float?\n  gas_station_sanado_hour_margin_DIESEL_GROUP            DateTime?\n  gas_station_sanado_margin_DIESEL_GROUP                 Boolean?\n  gas_station_type_margin_DIESEL_GROUP                   Boolean?\n  verification_hour_margin_DIESEL_GROUP                  DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  gas_station_margin_GASOLINA_PODIUM                     Float?\n  gas_station_sanado_hour_margin_GASOLINA_PODIUM         DateTime?\n  gas_station_sanado_margin_GASOLINA_PODIUM              Boolean?\n  gas_station_type_margin_GASOLINA_PODIUM                Boolean?\n  verification_hour_margin_GASOLINA_PODIUM               DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  gas_station_margin_GASOLINA_PREMIUM                    Float?\n  gas_station_sanado_hour_margin_GASOLINA_PREMIUM        DateTime?\n  gas_station_sanado_margin_GASOLINA_PREMIUM             Boolean?\n  gas_station_type_margin_GASOLINA_PREMIUM               Boolean?\n  verification_hour_margin_GASOLINA_PREMIUM              DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  ibm_info                                               ibm_info? @relation(fields: [ibm_info_id], references: [id])\n  users                                                  users?    @relation(fields: [use_uuid], references: [use_uuid])\n}\n\nmodel region_setvariables {\n  region_uuid                                           String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  region_marginGC                                       Float?\n  region_type_marginGC                                  Boolean?\n  region_whats_app                                      String[]  @db.VarChar(255)\n  region_station_created_at                             DateTime  @default(now()) @db.Timestamp(6)\n  region_station_updated_at                             DateTime  @default(now()) @db.Timestamp(6)\n  use_uuid                                              String?   @db.Uuid\n  regions_uuid                                          String?   @db.Uuid\n  verification_msg_sent                                 Boolean?  @default(false)\n  verification_hour_marginGC                            DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  region_margin_ETANOL_HIDRATADO_COMBUSTIVEL            Float?\n  region_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL       Boolean?\n  verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  region_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL       DateTime?\n  region_sanado_hour_marginGC                           DateTime?\n  region_sanado_marginGC                                Boolean?\n  region_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL     Boolean?\n  region_station_ETANOL_COMUM_comb                      Float?\n  region_station_GASOLINA_COMUM_comb                    Float?\n  region_station_LUCRO_BRUTO_GALONAGEM_modal            Float?\n  region_station_LUCRO_BRUTO_OPERACIONAL_modal          Float?\n  region_station_LUCRO_BRUTO_PRODUTO_modal              Float?\n  region_station_MLT_modal                              Float?\n  region_station_OLEO_DIESEL_B_S10_COMUM_comb           Float?\n  region_station_OLEO_DIESEL_B_S500_COMUM_comb          Float?\n  region_station_TMC_modal                              Float?\n  region_station_TMF_modal                              Float?\n  region_station_TMP_modal                              Float?\n  region_station_TMVOL_modal                            Float?\n  region_margin_DIESEL_GROUP                            Float?\n  region_sanado_hour_margin_DIESEL_GROUP                DateTime?\n  region_sanado_margin_DIESEL_GROUP                     Boolean?\n  region_type_margin_DIESEL_GROUP                       Boolean?\n  verification_hour_margin_DIESEL_GROUP                 DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  region_margin_GASOLINA_PODIUM                         Float?\n  region_sanado_hour_GASOLINA_PODIUM                    DateTime?\n  region_sanado_margin_GASOLINA_PODIUM                  Boolean?\n  region_type_margin_GASOLINA_PODIUM                    Boolean?\n  verification_hour_margin_GASOLINA_PODIUM              DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  region_margin_GASOLINA_PREMIUM                        Float?\n  region_sanado_hour_margin_GASOLINA_PREMIUM            DateTime?\n  region_sanado_margin_GASOLINA_PREMIUM                 Boolean?\n  region_type_margin_GASOLINA_PREMIUM                   Boolean?\n  verification_hour_margin_GASOLINA_PREMIUM             DateTime? @default(dbgenerated(\"'2023-01-01 00:00:00'::timestamp without time zone\"))\n  region_sanado_hour_GASOLINA_PREMIUM                   DateTime?\n  regions                                               regions?  @relation(fields: [regions_uuid], references: [regions_uuid])\n  users                                                 users?    @relation(fields: [use_uuid], references: [use_uuid])\n}\n\nmodel regions {\n  regions_uuid                                String                @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  regions_name                                String?               @db.VarChar(50)\n  regions_types                               String?               @db.VarChar(50)\n  region_created_at                           DateTime              @default(now()) @db.Timestamp(6)\n  region_updated_at                           DateTime              @default(now()) @db.Timestamp(6)\n  regions_margin_GC                           Float[]\n  regions_margin_ETANOL_HIDRATADO_COMBUSTIVEL Float[]\n  regions_margin_GASOLINA_PODIUM              Float[]\n  regions_margin_GASOLINA_PREMIUM             Float[]\n  regions_margin_DIESEL_GROUP                 Float[]\n  region_setvariables                         region_setvariables[]\n}\n\nmodel big_numbers_values {\n  bignumbers_uuid               String @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  bignumbers_sumliterage        Float?\n  bignumbers_invoicing          Float?\n  bignumbers_Supplies           Float?\n  bignumbers_fuelSales          Float?\n  bignumbers_fuelProfit         Float?\n  bignumbers_productSales       Float?\n  bignumbers_productProfit      Float?\n  bignumbers_dailyProductProfit Float?\n}\n",
  "inlineSchemaHash": "f03aa8642d1abebcd84a1b875f327ea3e7eff8dd5e762ea70db82363259caae0",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/clientRedeFlex",
    "clientRedeFlex",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"ibm_info\":{\"dbName\":null,\"fields\":[{\"name\":\"ibm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomefantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razaosocial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"long\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibm_margin_GC\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibm_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibm_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibm_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibm_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_setvariables\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gas_station_setvariables\",\"relationName\":\"gas_station_setvariablesToibm_info\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"use_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_date_expire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_whats_app\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_mlt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_tmc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_tmf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_tmp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_tmvol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_lucro_bruto_operacional_galonagem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_lucro_bruto_operacional_produto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_lucro_bruto_operacional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_ETANOL_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_GASOLINA_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_OLEO_DIESEL_B_S10_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_OLEO_DIESEL_B_S500_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_setvariables\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"gas_station_setvariables\",\"relationName\":\"gas_station_setvariablesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_setvariables\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"region_setvariables\",\"relationName\":\"region_setvariablesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"gas_station_setvariables\":{\"dbName\":null,\"fields\":[{\"name\":\"gas_station_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_type_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_whats_app\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibm_info_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_msg_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_hour_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_margin_MLT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_margin_TMP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_LUCRO_BRUTO_GALONAGEM_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_LUCRO_BRUTO_OPERACIONAL_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_LUCRO_BRUTO_PRODUTO_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_MLT_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_TMC_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_TMF_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_TMP_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_TMVOL_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_ETANOL_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_GASOLINA_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_OLEO_DIESEL_B_S10_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_OLEO_DIESEL_B_S500_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_hour_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_type_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_hour_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_type_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_hour_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_sanado_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gas_station_type_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibm_info\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ibm_info\",\"relationName\":\"gas_station_setvariablesToibm_info\",\"relationFromFields\":[\"ibm_info_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"gas_station_setvariablesTousers\",\"relationFromFields\":[\"use_uuid\"],\"relationToFields\":[\"use_uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"region_setvariables\":{\"dbName\":null,\"fields\":[{\"name\":\"region_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_type_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_whats_app\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"use_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_msg_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_type_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_hour_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_hour_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_marginGC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_ETANOL_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_GASOLINA_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_LUCRO_BRUTO_GALONAGEM_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_LUCRO_BRUTO_OPERACIONAL_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_LUCRO_BRUTO_PRODUTO_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_MLT_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_OLEO_DIESEL_B_S10_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_OLEO_DIESEL_B_S500_COMUM_comb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_TMC_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_TMF_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_TMP_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_station_TMVOL_modal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_hour_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_type_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_hour_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_type_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_hour_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_type_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_hour_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'2023-01-01 00:00:00'::timestamp without time zone\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_sanado_hour_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"regions\",\"relationName\":\"region_setvariablesToregions\",\"relationFromFields\":[\"regions_uuid\"],\"relationToFields\":[\"regions_uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"region_setvariablesTousers\",\"relationFromFields\":[\"use_uuid\"],\"relationToFields\":[\"use_uuid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"regions\":{\"dbName\":null,\"fields\":[{\"name\":\"regions_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_types\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_margin_GC\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_margin_ETANOL_HIDRATADO_COMBUSTIVEL\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_margin_GASOLINA_PODIUM\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_margin_GASOLINA_PREMIUM\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regions_margin_DIESEL_GROUP\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"region_setvariables\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"region_setvariables\",\"relationName\":\"region_setvariablesToregions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"big_numbers_values\":{\"dbName\":null,\"fields\":[{\"name\":\"bignumbers_uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_sumliterage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_invoicing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_Supplies\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_fuelSales\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_fuelProfit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_productSales\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_productProfit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bignumbers_dailyProductProfit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/clientRedeFlex/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/clientRedeFlex/schema.prisma")
