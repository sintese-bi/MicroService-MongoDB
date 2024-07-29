
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

exports.Prisma.CombustiveisScalarFieldEnum = {
  id: 'id',
  anp: 'anp',
  bicm: 'bicm',
  cBar: 'cBar',
  cTo: 'cTo',
  capT: 'capT',
  cof: 'cof',
  cus: 'cus',
  dLmc: 'dLmc',
  del: 'del',
  des: 'des',
  dtHr: 'dtHr',
  eTo: 'eTo',
  ibm: 'ibm',
  icm: 'icm',
  id_: 'id_',
  ncm: 'ncm',
  pis: 'pis',
  sig: 'sig',
  st: 'st',
  stDtI: 'stDtI',
  tCom: 'tCom',
  vda: 'vda'
};

exports.Prisma.FormasPgScalarFieldEnum = {
  id: 'id',
  ban: 'ban',
  cVd: 'cVd',
  des: 'des',
  dtHr: 'dtHr',
  ibm: 'ibm',
  id_: 'id_',
  tip: 'tip'
};

exports.Prisma.LojasScalarFieldEnum = {
  id: 'id',
  cnpj: 'cnpj',
  dtHr: 'dtHr',
  ibm: 'ibm',
  nomeFantasia: 'nomeFantasia',
  razaoSocial: 'razaoSocial',
  rede: 'rede'
};

exports.Prisma.ProdutosScalarFieldEnum = {
  id: 'id',
  St: 'St',
  cBar: 'cBar',
  cNcm: 'cNcm',
  cus: 'cus',
  des: 'des',
  dtHr: 'dtHr',
  eDe: 'eDe',
  eMa: 'eMa',
  eMi: 'eMi',
  eOl: 'eOl',
  ePi: 'ePi',
  eTo: 'eTo',
  gr: 'gr',
  ibm: 'ibm',
  icm: 'icm',
  id_: 'id_',
  sgr: 'sgr',
  st: 'st',
  uCx: 'uCx',
  unM: 'unM',
  vda: 'vda'
};

exports.Prisma.Produtos_GruposScalarFieldEnum = {
  id: 'id',
  des: 'des',
  dtHr: 'dtHr',
  ibm: 'ibm',
  id_: 'id_'
};

exports.Prisma.TurnosScalarFieldEnum = {
  id: 'id',
  des: 'des',
  dtHr: 'dtHr',
  ibm: 'ibm',
  id_: 'id_'
};

exports.Prisma.UsuariosScalarFieldEnum = {
  id: 'id',
  cel: 'cel',
  cod: 'cod',
  cpf: 'cpf',
  dtHr: 'dtHr',
  ibm: 'ibm',
  id_: 'id_',
  nom: 'nom',
  sex: 'sex'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Combustiveis: 'Combustiveis',
  FormasPg: 'FormasPg',
  Lojas: 'Lojas',
  Produtos: 'Produtos',
  Produtos_Grupos: 'Produtos_Grupos',
  Turnos: 'Turnos',
  Usuarios: 'Usuarios'
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
