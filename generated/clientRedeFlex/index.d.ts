
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model basedados
 * 
 */
export type basedados = $Result.DefaultSelection<Prisma.$basedadosPayload>
/**
 * Model dataframe_fuel
 * 
 */
export type dataframe_fuel = $Result.DefaultSelection<Prisma.$dataframe_fuelPayload>
/**
 * Model dataframe_product
 * 
 */
export type dataframe_product = $Result.DefaultSelection<Prisma.$dataframe_productPayload>
/**
 * Model fuel
 * 
 */
export type fuel = $Result.DefaultSelection<Prisma.$fuelPayload>
/**
 * Model gas_station
 * 
 */
export type gas_station = $Result.DefaultSelection<Prisma.$gas_stationPayload>
/**
 * Model ibm_info
 * 
 */
export type ibm_info = $Result.DefaultSelection<Prisma.$ibm_infoPayload>
/**
 * Model posto_signal
 * 
 */
export type posto_signal = $Result.DefaultSelection<Prisma.$posto_signalPayload>
/**
 * Model rd_posto
 * 
 */
export type rd_posto = $Result.DefaultSelection<Prisma.$rd_postoPayload>
/**
 * Model set_variables
 * 
 */
export type set_variables = $Result.DefaultSelection<Prisma.$set_variablesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Basedados
 * const basedados = await prisma.basedados.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Basedados
   * const basedados = await prisma.basedados.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.basedados`: Exposes CRUD operations for the **basedados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Basedados
    * const basedados = await prisma.basedados.findMany()
    * ```
    */
  get basedados(): Prisma.basedadosDelegate<ExtArgs>;

  /**
   * `prisma.dataframe_fuel`: Exposes CRUD operations for the **dataframe_fuel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dataframe_fuels
    * const dataframe_fuels = await prisma.dataframe_fuel.findMany()
    * ```
    */
  get dataframe_fuel(): Prisma.dataframe_fuelDelegate<ExtArgs>;

  /**
   * `prisma.dataframe_product`: Exposes CRUD operations for the **dataframe_product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dataframe_products
    * const dataframe_products = await prisma.dataframe_product.findMany()
    * ```
    */
  get dataframe_product(): Prisma.dataframe_productDelegate<ExtArgs>;

  /**
   * `prisma.fuel`: Exposes CRUD operations for the **fuel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fuels
    * const fuels = await prisma.fuel.findMany()
    * ```
    */
  get fuel(): Prisma.fuelDelegate<ExtArgs>;

  /**
   * `prisma.gas_station`: Exposes CRUD operations for the **gas_station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gas_stations
    * const gas_stations = await prisma.gas_station.findMany()
    * ```
    */
  get gas_station(): Prisma.gas_stationDelegate<ExtArgs>;

  /**
   * `prisma.ibm_info`: Exposes CRUD operations for the **ibm_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ibm_infos
    * const ibm_infos = await prisma.ibm_info.findMany()
    * ```
    */
  get ibm_info(): Prisma.ibm_infoDelegate<ExtArgs>;

  /**
   * `prisma.posto_signal`: Exposes CRUD operations for the **posto_signal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posto_signals
    * const posto_signals = await prisma.posto_signal.findMany()
    * ```
    */
  get posto_signal(): Prisma.posto_signalDelegate<ExtArgs>;

  /**
   * `prisma.rd_posto`: Exposes CRUD operations for the **rd_posto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rd_postos
    * const rd_postos = await prisma.rd_posto.findMany()
    * ```
    */
  get rd_posto(): Prisma.rd_postoDelegate<ExtArgs>;

  /**
   * `prisma.set_variables`: Exposes CRUD operations for the **set_variables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Set_variables
    * const set_variables = await prisma.set_variables.findMany()
    * ```
    */
  get set_variables(): Prisma.set_variablesDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'basedados' | 'dataframe_fuel' | 'dataframe_product' | 'fuel' | 'gas_station' | 'ibm_info' | 'posto_signal' | 'rd_posto' | 'set_variables' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      basedados: {
        payload: Prisma.$basedadosPayload<ExtArgs>
        fields: Prisma.basedadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.basedadosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.basedadosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>
          }
          findFirst: {
            args: Prisma.basedadosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.basedadosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>
          }
          findMany: {
            args: Prisma.basedadosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>[]
          }
          create: {
            args: Prisma.basedadosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>
          }
          createMany: {
            args: Prisma.basedadosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.basedadosCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>[]
          }
          delete: {
            args: Prisma.basedadosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>
          }
          update: {
            args: Prisma.basedadosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>
          }
          deleteMany: {
            args: Prisma.basedadosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.basedadosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.basedadosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$basedadosPayload>
          }
          aggregate: {
            args: Prisma.BasedadosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBasedados>
          }
          groupBy: {
            args: Prisma.basedadosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BasedadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.basedadosCountArgs<ExtArgs>,
            result: $Utils.Optional<BasedadosCountAggregateOutputType> | number
          }
        }
      }
      dataframe_fuel: {
        payload: Prisma.$dataframe_fuelPayload<ExtArgs>
        fields: Prisma.dataframe_fuelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dataframe_fuelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dataframe_fuelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>
          }
          findFirst: {
            args: Prisma.dataframe_fuelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dataframe_fuelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>
          }
          findMany: {
            args: Prisma.dataframe_fuelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>[]
          }
          create: {
            args: Prisma.dataframe_fuelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>
          }
          createMany: {
            args: Prisma.dataframe_fuelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dataframe_fuelCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>[]
          }
          delete: {
            args: Prisma.dataframe_fuelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>
          }
          update: {
            args: Prisma.dataframe_fuelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>
          }
          deleteMany: {
            args: Prisma.dataframe_fuelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.dataframe_fuelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.dataframe_fuelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_fuelPayload>
          }
          aggregate: {
            args: Prisma.Dataframe_fuelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDataframe_fuel>
          }
          groupBy: {
            args: Prisma.dataframe_fuelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Dataframe_fuelGroupByOutputType>[]
          }
          count: {
            args: Prisma.dataframe_fuelCountArgs<ExtArgs>,
            result: $Utils.Optional<Dataframe_fuelCountAggregateOutputType> | number
          }
        }
      }
      dataframe_product: {
        payload: Prisma.$dataframe_productPayload<ExtArgs>
        fields: Prisma.dataframe_productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dataframe_productFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dataframe_productFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>
          }
          findFirst: {
            args: Prisma.dataframe_productFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dataframe_productFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>
          }
          findMany: {
            args: Prisma.dataframe_productFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>[]
          }
          create: {
            args: Prisma.dataframe_productCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>
          }
          createMany: {
            args: Prisma.dataframe_productCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dataframe_productCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>[]
          }
          delete: {
            args: Prisma.dataframe_productDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>
          }
          update: {
            args: Prisma.dataframe_productUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>
          }
          deleteMany: {
            args: Prisma.dataframe_productDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.dataframe_productUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.dataframe_productUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$dataframe_productPayload>
          }
          aggregate: {
            args: Prisma.Dataframe_productAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDataframe_product>
          }
          groupBy: {
            args: Prisma.dataframe_productGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Dataframe_productGroupByOutputType>[]
          }
          count: {
            args: Prisma.dataframe_productCountArgs<ExtArgs>,
            result: $Utils.Optional<Dataframe_productCountAggregateOutputType> | number
          }
        }
      }
      fuel: {
        payload: Prisma.$fuelPayload<ExtArgs>
        fields: Prisma.fuelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fuelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fuelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>
          }
          findFirst: {
            args: Prisma.fuelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fuelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>
          }
          findMany: {
            args: Prisma.fuelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>[]
          }
          create: {
            args: Prisma.fuelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>
          }
          createMany: {
            args: Prisma.fuelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fuelCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>[]
          }
          delete: {
            args: Prisma.fuelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>
          }
          update: {
            args: Prisma.fuelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>
          }
          deleteMany: {
            args: Prisma.fuelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.fuelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.fuelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$fuelPayload>
          }
          aggregate: {
            args: Prisma.FuelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFuel>
          }
          groupBy: {
            args: Prisma.fuelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FuelGroupByOutputType>[]
          }
          count: {
            args: Prisma.fuelCountArgs<ExtArgs>,
            result: $Utils.Optional<FuelCountAggregateOutputType> | number
          }
        }
      }
      gas_station: {
        payload: Prisma.$gas_stationPayload<ExtArgs>
        fields: Prisma.gas_stationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gas_stationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gas_stationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>
          }
          findFirst: {
            args: Prisma.gas_stationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gas_stationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>
          }
          findMany: {
            args: Prisma.gas_stationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>[]
          }
          create: {
            args: Prisma.gas_stationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>
          }
          createMany: {
            args: Prisma.gas_stationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gas_stationCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>[]
          }
          delete: {
            args: Prisma.gas_stationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>
          }
          update: {
            args: Prisma.gas_stationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>
          }
          deleteMany: {
            args: Prisma.gas_stationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.gas_stationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.gas_stationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$gas_stationPayload>
          }
          aggregate: {
            args: Prisma.Gas_stationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGas_station>
          }
          groupBy: {
            args: Prisma.gas_stationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Gas_stationGroupByOutputType>[]
          }
          count: {
            args: Prisma.gas_stationCountArgs<ExtArgs>,
            result: $Utils.Optional<Gas_stationCountAggregateOutputType> | number
          }
        }
      }
      ibm_info: {
        payload: Prisma.$ibm_infoPayload<ExtArgs>
        fields: Prisma.ibm_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ibm_infoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ibm_infoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          findFirst: {
            args: Prisma.ibm_infoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ibm_infoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          findMany: {
            args: Prisma.ibm_infoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>[]
          }
          create: {
            args: Prisma.ibm_infoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          createMany: {
            args: Prisma.ibm_infoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ibm_infoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>[]
          }
          delete: {
            args: Prisma.ibm_infoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          update: {
            args: Prisma.ibm_infoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          deleteMany: {
            args: Prisma.ibm_infoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ibm_infoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ibm_infoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          aggregate: {
            args: Prisma.Ibm_infoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIbm_info>
          }
          groupBy: {
            args: Prisma.ibm_infoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ibm_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ibm_infoCountArgs<ExtArgs>,
            result: $Utils.Optional<Ibm_infoCountAggregateOutputType> | number
          }
        }
      }
      posto_signal: {
        payload: Prisma.$posto_signalPayload<ExtArgs>
        fields: Prisma.posto_signalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posto_signalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posto_signalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>
          }
          findFirst: {
            args: Prisma.posto_signalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posto_signalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>
          }
          findMany: {
            args: Prisma.posto_signalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>[]
          }
          create: {
            args: Prisma.posto_signalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>
          }
          createMany: {
            args: Prisma.posto_signalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.posto_signalCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>[]
          }
          delete: {
            args: Prisma.posto_signalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>
          }
          update: {
            args: Prisma.posto_signalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>
          }
          deleteMany: {
            args: Prisma.posto_signalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.posto_signalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.posto_signalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$posto_signalPayload>
          }
          aggregate: {
            args: Prisma.Posto_signalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosto_signal>
          }
          groupBy: {
            args: Prisma.posto_signalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Posto_signalGroupByOutputType>[]
          }
          count: {
            args: Prisma.posto_signalCountArgs<ExtArgs>,
            result: $Utils.Optional<Posto_signalCountAggregateOutputType> | number
          }
        }
      }
      rd_posto: {
        payload: Prisma.$rd_postoPayload<ExtArgs>
        fields: Prisma.rd_postoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rd_postoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rd_postoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>
          }
          findFirst: {
            args: Prisma.rd_postoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rd_postoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>
          }
          findMany: {
            args: Prisma.rd_postoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>[]
          }
          create: {
            args: Prisma.rd_postoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>
          }
          createMany: {
            args: Prisma.rd_postoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rd_postoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>[]
          }
          delete: {
            args: Prisma.rd_postoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>
          }
          update: {
            args: Prisma.rd_postoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>
          }
          deleteMany: {
            args: Prisma.rd_postoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rd_postoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rd_postoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rd_postoPayload>
          }
          aggregate: {
            args: Prisma.Rd_postoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRd_posto>
          }
          groupBy: {
            args: Prisma.rd_postoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Rd_postoGroupByOutputType>[]
          }
          count: {
            args: Prisma.rd_postoCountArgs<ExtArgs>,
            result: $Utils.Optional<Rd_postoCountAggregateOutputType> | number
          }
        }
      }
      set_variables: {
        payload: Prisma.$set_variablesPayload<ExtArgs>
        fields: Prisma.set_variablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.set_variablesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.set_variablesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>
          }
          findFirst: {
            args: Prisma.set_variablesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.set_variablesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>
          }
          findMany: {
            args: Prisma.set_variablesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>[]
          }
          create: {
            args: Prisma.set_variablesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>
          }
          createMany: {
            args: Prisma.set_variablesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.set_variablesCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>[]
          }
          delete: {
            args: Prisma.set_variablesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>
          }
          update: {
            args: Prisma.set_variablesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>
          }
          deleteMany: {
            args: Prisma.set_variablesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.set_variablesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.set_variablesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$set_variablesPayload>
          }
          aggregate: {
            args: Prisma.Set_variablesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSet_variables>
          }
          groupBy: {
            args: Prisma.set_variablesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Set_variablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.set_variablesCountArgs<ExtArgs>,
            result: $Utils.Optional<Set_variablesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Rd_postoCountOutputType
   */

  export type Rd_postoCountOutputType = {
    posto_signal: number
  }

  export type Rd_postoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posto_signal?: boolean | Rd_postoCountOutputTypeCountPosto_signalArgs
  }

  // Custom InputTypes
  /**
   * Rd_postoCountOutputType without action
   */
  export type Rd_postoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rd_postoCountOutputType
     */
    select?: Rd_postoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Rd_postoCountOutputType without action
   */
  export type Rd_postoCountOutputTypeCountPosto_signalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posto_signalWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    fuel: number
    set_variables: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fuel?: boolean | UsersCountOutputTypeCountFuelArgs
    set_variables?: boolean | UsersCountOutputTypeCountSet_variablesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFuelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fuelWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSet_variablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: set_variablesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model basedados
   */

  export type AggregateBasedados = {
    _count: BasedadosCountAggregateOutputType | null
    _avg: BasedadosAvgAggregateOutputType | null
    _sum: BasedadosSumAggregateOutputType | null
    _min: BasedadosMinAggregateOutputType | null
    _max: BasedadosMaxAggregateOutputType | null
  }

  export type BasedadosAvgAggregateOutputType = {
    company_emp: number | null
    company_volume: number | null
    company_cost: number | null
    company_sale: number | null
    company_profit: number | null
  }

  export type BasedadosSumAggregateOutputType = {
    company_emp: number | null
    company_volume: number | null
    company_cost: number | null
    company_sale: number | null
    company_profit: number | null
  }

  export type BasedadosMinAggregateOutputType = {
    company_uuid: string | null
    company_emp: number | null
    company_name: string | null
    company_date: Date | null
    company_week_day: string | null
    company_fuel: string | null
    company_volume: number | null
    company_cost: number | null
    company_sale: number | null
    company_profit: number | null
    company_created_at: Date | null
    company_updated_at: Date | null
  }

  export type BasedadosMaxAggregateOutputType = {
    company_uuid: string | null
    company_emp: number | null
    company_name: string | null
    company_date: Date | null
    company_week_day: string | null
    company_fuel: string | null
    company_volume: number | null
    company_cost: number | null
    company_sale: number | null
    company_profit: number | null
    company_created_at: Date | null
    company_updated_at: Date | null
  }

  export type BasedadosCountAggregateOutputType = {
    company_uuid: number
    company_emp: number
    company_name: number
    company_date: number
    company_week_day: number
    company_fuel: number
    company_volume: number
    company_cost: number
    company_sale: number
    company_profit: number
    company_created_at: number
    company_updated_at: number
    _all: number
  }


  export type BasedadosAvgAggregateInputType = {
    company_emp?: true
    company_volume?: true
    company_cost?: true
    company_sale?: true
    company_profit?: true
  }

  export type BasedadosSumAggregateInputType = {
    company_emp?: true
    company_volume?: true
    company_cost?: true
    company_sale?: true
    company_profit?: true
  }

  export type BasedadosMinAggregateInputType = {
    company_uuid?: true
    company_emp?: true
    company_name?: true
    company_date?: true
    company_week_day?: true
    company_fuel?: true
    company_volume?: true
    company_cost?: true
    company_sale?: true
    company_profit?: true
    company_created_at?: true
    company_updated_at?: true
  }

  export type BasedadosMaxAggregateInputType = {
    company_uuid?: true
    company_emp?: true
    company_name?: true
    company_date?: true
    company_week_day?: true
    company_fuel?: true
    company_volume?: true
    company_cost?: true
    company_sale?: true
    company_profit?: true
    company_created_at?: true
    company_updated_at?: true
  }

  export type BasedadosCountAggregateInputType = {
    company_uuid?: true
    company_emp?: true
    company_name?: true
    company_date?: true
    company_week_day?: true
    company_fuel?: true
    company_volume?: true
    company_cost?: true
    company_sale?: true
    company_profit?: true
    company_created_at?: true
    company_updated_at?: true
    _all?: true
  }

  export type BasedadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which basedados to aggregate.
     */
    where?: basedadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basedados to fetch.
     */
    orderBy?: basedadosOrderByWithRelationInput | basedadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: basedadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basedados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basedados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned basedados
    **/
    _count?: true | BasedadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BasedadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BasedadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BasedadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BasedadosMaxAggregateInputType
  }

  export type GetBasedadosAggregateType<T extends BasedadosAggregateArgs> = {
        [P in keyof T & keyof AggregateBasedados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasedados[P]>
      : GetScalarType<T[P], AggregateBasedados[P]>
  }




  export type basedadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: basedadosWhereInput
    orderBy?: basedadosOrderByWithAggregationInput | basedadosOrderByWithAggregationInput[]
    by: BasedadosScalarFieldEnum[] | BasedadosScalarFieldEnum
    having?: basedadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BasedadosCountAggregateInputType | true
    _avg?: BasedadosAvgAggregateInputType
    _sum?: BasedadosSumAggregateInputType
    _min?: BasedadosMinAggregateInputType
    _max?: BasedadosMaxAggregateInputType
  }

  export type BasedadosGroupByOutputType = {
    company_uuid: string
    company_emp: number | null
    company_name: string | null
    company_date: Date | null
    company_week_day: string | null
    company_fuel: string | null
    company_volume: number | null
    company_cost: number | null
    company_sale: number | null
    company_profit: number | null
    company_created_at: Date
    company_updated_at: Date
    _count: BasedadosCountAggregateOutputType | null
    _avg: BasedadosAvgAggregateOutputType | null
    _sum: BasedadosSumAggregateOutputType | null
    _min: BasedadosMinAggregateOutputType | null
    _max: BasedadosMaxAggregateOutputType | null
  }

  type GetBasedadosGroupByPayload<T extends basedadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BasedadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BasedadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BasedadosGroupByOutputType[P]>
            : GetScalarType<T[P], BasedadosGroupByOutputType[P]>
        }
      >
    >


  export type basedadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_uuid?: boolean
    company_emp?: boolean
    company_name?: boolean
    company_date?: boolean
    company_week_day?: boolean
    company_fuel?: boolean
    company_volume?: boolean
    company_cost?: boolean
    company_sale?: boolean
    company_profit?: boolean
    company_created_at?: boolean
    company_updated_at?: boolean
  }, ExtArgs["result"]["basedados"]>

  export type basedadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_uuid?: boolean
    company_emp?: boolean
    company_name?: boolean
    company_date?: boolean
    company_week_day?: boolean
    company_fuel?: boolean
    company_volume?: boolean
    company_cost?: boolean
    company_sale?: boolean
    company_profit?: boolean
    company_created_at?: boolean
    company_updated_at?: boolean
  }, ExtArgs["result"]["basedados"]>

  export type basedadosSelectScalar = {
    company_uuid?: boolean
    company_emp?: boolean
    company_name?: boolean
    company_date?: boolean
    company_week_day?: boolean
    company_fuel?: boolean
    company_volume?: boolean
    company_cost?: boolean
    company_sale?: boolean
    company_profit?: boolean
    company_created_at?: boolean
    company_updated_at?: boolean
  }


  export type $basedadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "basedados"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      company_uuid: string
      company_emp: number | null
      company_name: string | null
      company_date: Date | null
      company_week_day: string | null
      company_fuel: string | null
      company_volume: number | null
      company_cost: number | null
      company_sale: number | null
      company_profit: number | null
      company_created_at: Date
      company_updated_at: Date
    }, ExtArgs["result"]["basedados"]>
    composites: {}
  }

  type basedadosGetPayload<S extends boolean | null | undefined | basedadosDefaultArgs> = $Result.GetResult<Prisma.$basedadosPayload, S>

  type basedadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<basedadosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BasedadosCountAggregateInputType | true
    }

  export interface basedadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['basedados'], meta: { name: 'basedados' } }
    /**
     * Find zero or one Basedados that matches the filter.
     * @param {basedadosFindUniqueArgs} args - Arguments to find a Basedados
     * @example
     * // Get one Basedados
     * const basedados = await prisma.basedados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends basedadosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, basedadosFindUniqueArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Basedados that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {basedadosFindUniqueOrThrowArgs} args - Arguments to find a Basedados
     * @example
     * // Get one Basedados
     * const basedados = await prisma.basedados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends basedadosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, basedadosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Basedados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basedadosFindFirstArgs} args - Arguments to find a Basedados
     * @example
     * // Get one Basedados
     * const basedados = await prisma.basedados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends basedadosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, basedadosFindFirstArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Basedados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basedadosFindFirstOrThrowArgs} args - Arguments to find a Basedados
     * @example
     * // Get one Basedados
     * const basedados = await prisma.basedados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends basedadosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, basedadosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Basedados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basedadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Basedados
     * const basedados = await prisma.basedados.findMany()
     * 
     * // Get first 10 Basedados
     * const basedados = await prisma.basedados.findMany({ take: 10 })
     * 
     * // Only select the `company_uuid`
     * const basedadosWithCompany_uuidOnly = await prisma.basedados.findMany({ select: { company_uuid: true } })
     * 
    **/
    findMany<T extends basedadosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, basedadosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Basedados.
     * @param {basedadosCreateArgs} args - Arguments to create a Basedados.
     * @example
     * // Create one Basedados
     * const Basedados = await prisma.basedados.create({
     *   data: {
     *     // ... data to create a Basedados
     *   }
     * })
     * 
    **/
    create<T extends basedadosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, basedadosCreateArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Basedados.
     * @param {basedadosCreateManyArgs} args - Arguments to create many Basedados.
     * @example
     * // Create many Basedados
     * const basedados = await prisma.basedados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends basedadosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, basedadosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Basedados and returns the data saved in the database.
     * @param {basedadosCreateManyAndReturnArgs} args - Arguments to create many Basedados.
     * @example
     * // Create many Basedados
     * const basedados = await prisma.basedados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Basedados and only return the `company_uuid`
     * const basedadosWithCompany_uuidOnly = await prisma.basedados.createManyAndReturn({ 
     *   select: { company_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends basedadosCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, basedadosCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Basedados.
     * @param {basedadosDeleteArgs} args - Arguments to delete one Basedados.
     * @example
     * // Delete one Basedados
     * const Basedados = await prisma.basedados.delete({
     *   where: {
     *     // ... filter to delete one Basedados
     *   }
     * })
     * 
    **/
    delete<T extends basedadosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, basedadosDeleteArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Basedados.
     * @param {basedadosUpdateArgs} args - Arguments to update one Basedados.
     * @example
     * // Update one Basedados
     * const basedados = await prisma.basedados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends basedadosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, basedadosUpdateArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Basedados.
     * @param {basedadosDeleteManyArgs} args - Arguments to filter Basedados to delete.
     * @example
     * // Delete a few Basedados
     * const { count } = await prisma.basedados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends basedadosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, basedadosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Basedados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basedadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Basedados
     * const basedados = await prisma.basedados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends basedadosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, basedadosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Basedados.
     * @param {basedadosUpsertArgs} args - Arguments to update or create a Basedados.
     * @example
     * // Update or create a Basedados
     * const basedados = await prisma.basedados.upsert({
     *   create: {
     *     // ... data to create a Basedados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Basedados we want to update
     *   }
     * })
    **/
    upsert<T extends basedadosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, basedadosUpsertArgs<ExtArgs>>
    ): Prisma__basedadosClient<$Result.GetResult<Prisma.$basedadosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Basedados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basedadosCountArgs} args - Arguments to filter Basedados to count.
     * @example
     * // Count the number of Basedados
     * const count = await prisma.basedados.count({
     *   where: {
     *     // ... the filter for the Basedados we want to count
     *   }
     * })
    **/
    count<T extends basedadosCountArgs>(
      args?: Subset<T, basedadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BasedadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Basedados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BasedadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BasedadosAggregateArgs>(args: Subset<T, BasedadosAggregateArgs>): Prisma.PrismaPromise<GetBasedadosAggregateType<T>>

    /**
     * Group by Basedados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {basedadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends basedadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: basedadosGroupByArgs['orderBy'] }
        : { orderBy?: basedadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, basedadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasedadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the basedados model
   */
  readonly fields: basedadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for basedados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__basedadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the basedados model
   */ 
  interface basedadosFieldRefs {
    readonly company_uuid: FieldRef<"basedados", 'String'>
    readonly company_emp: FieldRef<"basedados", 'Int'>
    readonly company_name: FieldRef<"basedados", 'String'>
    readonly company_date: FieldRef<"basedados", 'DateTime'>
    readonly company_week_day: FieldRef<"basedados", 'String'>
    readonly company_fuel: FieldRef<"basedados", 'String'>
    readonly company_volume: FieldRef<"basedados", 'Float'>
    readonly company_cost: FieldRef<"basedados", 'Float'>
    readonly company_sale: FieldRef<"basedados", 'Float'>
    readonly company_profit: FieldRef<"basedados", 'Float'>
    readonly company_created_at: FieldRef<"basedados", 'DateTime'>
    readonly company_updated_at: FieldRef<"basedados", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * basedados findUnique
   */
  export type basedadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * Filter, which basedados to fetch.
     */
    where: basedadosWhereUniqueInput
  }

  /**
   * basedados findUniqueOrThrow
   */
  export type basedadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * Filter, which basedados to fetch.
     */
    where: basedadosWhereUniqueInput
  }

  /**
   * basedados findFirst
   */
  export type basedadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * Filter, which basedados to fetch.
     */
    where?: basedadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basedados to fetch.
     */
    orderBy?: basedadosOrderByWithRelationInput | basedadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for basedados.
     */
    cursor?: basedadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basedados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basedados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of basedados.
     */
    distinct?: BasedadosScalarFieldEnum | BasedadosScalarFieldEnum[]
  }

  /**
   * basedados findFirstOrThrow
   */
  export type basedadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * Filter, which basedados to fetch.
     */
    where?: basedadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basedados to fetch.
     */
    orderBy?: basedadosOrderByWithRelationInput | basedadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for basedados.
     */
    cursor?: basedadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basedados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basedados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of basedados.
     */
    distinct?: BasedadosScalarFieldEnum | BasedadosScalarFieldEnum[]
  }

  /**
   * basedados findMany
   */
  export type basedadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * Filter, which basedados to fetch.
     */
    where?: basedadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of basedados to fetch.
     */
    orderBy?: basedadosOrderByWithRelationInput | basedadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing basedados.
     */
    cursor?: basedadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` basedados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` basedados.
     */
    skip?: number
    distinct?: BasedadosScalarFieldEnum | BasedadosScalarFieldEnum[]
  }

  /**
   * basedados create
   */
  export type basedadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * The data needed to create a basedados.
     */
    data?: XOR<basedadosCreateInput, basedadosUncheckedCreateInput>
  }

  /**
   * basedados createMany
   */
  export type basedadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many basedados.
     */
    data: basedadosCreateManyInput | basedadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * basedados createManyAndReturn
   */
  export type basedadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many basedados.
     */
    data: basedadosCreateManyInput | basedadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * basedados update
   */
  export type basedadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * The data needed to update a basedados.
     */
    data: XOR<basedadosUpdateInput, basedadosUncheckedUpdateInput>
    /**
     * Choose, which basedados to update.
     */
    where: basedadosWhereUniqueInput
  }

  /**
   * basedados updateMany
   */
  export type basedadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update basedados.
     */
    data: XOR<basedadosUpdateManyMutationInput, basedadosUncheckedUpdateManyInput>
    /**
     * Filter which basedados to update
     */
    where?: basedadosWhereInput
  }

  /**
   * basedados upsert
   */
  export type basedadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * The filter to search for the basedados to update in case it exists.
     */
    where: basedadosWhereUniqueInput
    /**
     * In case the basedados found by the `where` argument doesn't exist, create a new basedados with this data.
     */
    create: XOR<basedadosCreateInput, basedadosUncheckedCreateInput>
    /**
     * In case the basedados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<basedadosUpdateInput, basedadosUncheckedUpdateInput>
  }

  /**
   * basedados delete
   */
  export type basedadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
    /**
     * Filter which basedados to delete.
     */
    where: basedadosWhereUniqueInput
  }

  /**
   * basedados deleteMany
   */
  export type basedadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which basedados to delete
     */
    where?: basedadosWhereInput
  }

  /**
   * basedados without action
   */
  export type basedadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the basedados
     */
    select?: basedadosSelect<ExtArgs> | null
  }


  /**
   * Model dataframe_fuel
   */

  export type AggregateDataframe_fuel = {
    _count: Dataframe_fuelCountAggregateOutputType | null
    _avg: Dataframe_fuelAvgAggregateOutputType | null
    _sum: Dataframe_fuelSumAggregateOutputType | null
    _min: Dataframe_fuelMinAggregateOutputType | null
    _max: Dataframe_fuelMaxAggregateOutputType | null
  }

  export type Dataframe_fuelAvgAggregateOutputType = {
    datafuel_qtdAbastecimento: number | null
    datafuel_vendaCombustivel: number | null
    datafuel_litroCombustivel: number | null
    datafuel_qtdProduto: number | null
    datafuel_vendaProduto: number | null
    datafuel_litroProduto: number | null
    datafuel_qtdOutrosProdutos: number | null
    datafuel_vendasOutros: number | null
    datafuel_litroOutros: number | null
    datafuel_custo: number | null
    datafuel_lucro: number | null
  }

  export type Dataframe_fuelSumAggregateOutputType = {
    datafuel_qtdAbastecimento: number | null
    datafuel_vendaCombustivel: number | null
    datafuel_litroCombustivel: number | null
    datafuel_qtdProduto: number | null
    datafuel_vendaProduto: number | null
    datafuel_litroProduto: number | null
    datafuel_qtdOutrosProdutos: number | null
    datafuel_vendasOutros: number | null
    datafuel_litroOutros: number | null
    datafuel_custo: number | null
    datafuel_lucro: number | null
  }

  export type Dataframe_fuelMinAggregateOutputType = {
    datafuel_uuid: string | null
    datafuel_qtdAbastecimento: number | null
    datafuel_vendaCombustivel: number | null
    datafuel_litroCombustivel: number | null
    datafuel_qtdProduto: number | null
    datafuel_vendaProduto: number | null
    datafuel_litroProduto: number | null
    datafuel_qtdOutrosProdutos: number | null
    datafuel_vendasOutros: number | null
    datafuel_litroOutros: number | null
    datafuel_custo: number | null
    datafuel_lucro: number | null
    datafuel_dt_registro: string | null
    datafuel_updated: string | null
  }

  export type Dataframe_fuelMaxAggregateOutputType = {
    datafuel_uuid: string | null
    datafuel_qtdAbastecimento: number | null
    datafuel_vendaCombustivel: number | null
    datafuel_litroCombustivel: number | null
    datafuel_qtdProduto: number | null
    datafuel_vendaProduto: number | null
    datafuel_litroProduto: number | null
    datafuel_qtdOutrosProdutos: number | null
    datafuel_vendasOutros: number | null
    datafuel_litroOutros: number | null
    datafuel_custo: number | null
    datafuel_lucro: number | null
    datafuel_dt_registro: string | null
    datafuel_updated: string | null
  }

  export type Dataframe_fuelCountAggregateOutputType = {
    datafuel_uuid: number
    datafuel_qtdAbastecimento: number
    datafuel_vendaCombustivel: number
    datafuel_litroCombustivel: number
    datafuel_qtdProduto: number
    datafuel_vendaProduto: number
    datafuel_litroProduto: number
    datafuel_qtdOutrosProdutos: number
    datafuel_vendasOutros: number
    datafuel_litroOutros: number
    datafuel_custo: number
    datafuel_lucro: number
    datafuel_dt_registro: number
    datafuel_updated: number
    _all: number
  }


  export type Dataframe_fuelAvgAggregateInputType = {
    datafuel_qtdAbastecimento?: true
    datafuel_vendaCombustivel?: true
    datafuel_litroCombustivel?: true
    datafuel_qtdProduto?: true
    datafuel_vendaProduto?: true
    datafuel_litroProduto?: true
    datafuel_qtdOutrosProdutos?: true
    datafuel_vendasOutros?: true
    datafuel_litroOutros?: true
    datafuel_custo?: true
    datafuel_lucro?: true
  }

  export type Dataframe_fuelSumAggregateInputType = {
    datafuel_qtdAbastecimento?: true
    datafuel_vendaCombustivel?: true
    datafuel_litroCombustivel?: true
    datafuel_qtdProduto?: true
    datafuel_vendaProduto?: true
    datafuel_litroProduto?: true
    datafuel_qtdOutrosProdutos?: true
    datafuel_vendasOutros?: true
    datafuel_litroOutros?: true
    datafuel_custo?: true
    datafuel_lucro?: true
  }

  export type Dataframe_fuelMinAggregateInputType = {
    datafuel_uuid?: true
    datafuel_qtdAbastecimento?: true
    datafuel_vendaCombustivel?: true
    datafuel_litroCombustivel?: true
    datafuel_qtdProduto?: true
    datafuel_vendaProduto?: true
    datafuel_litroProduto?: true
    datafuel_qtdOutrosProdutos?: true
    datafuel_vendasOutros?: true
    datafuel_litroOutros?: true
    datafuel_custo?: true
    datafuel_lucro?: true
    datafuel_dt_registro?: true
    datafuel_updated?: true
  }

  export type Dataframe_fuelMaxAggregateInputType = {
    datafuel_uuid?: true
    datafuel_qtdAbastecimento?: true
    datafuel_vendaCombustivel?: true
    datafuel_litroCombustivel?: true
    datafuel_qtdProduto?: true
    datafuel_vendaProduto?: true
    datafuel_litroProduto?: true
    datafuel_qtdOutrosProdutos?: true
    datafuel_vendasOutros?: true
    datafuel_litroOutros?: true
    datafuel_custo?: true
    datafuel_lucro?: true
    datafuel_dt_registro?: true
    datafuel_updated?: true
  }

  export type Dataframe_fuelCountAggregateInputType = {
    datafuel_uuid?: true
    datafuel_qtdAbastecimento?: true
    datafuel_vendaCombustivel?: true
    datafuel_litroCombustivel?: true
    datafuel_qtdProduto?: true
    datafuel_vendaProduto?: true
    datafuel_litroProduto?: true
    datafuel_qtdOutrosProdutos?: true
    datafuel_vendasOutros?: true
    datafuel_litroOutros?: true
    datafuel_custo?: true
    datafuel_lucro?: true
    datafuel_dt_registro?: true
    datafuel_updated?: true
    _all?: true
  }

  export type Dataframe_fuelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataframe_fuel to aggregate.
     */
    where?: dataframe_fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_fuels to fetch.
     */
    orderBy?: dataframe_fuelOrderByWithRelationInput | dataframe_fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataframe_fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataframe_fuels
    **/
    _count?: true | Dataframe_fuelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dataframe_fuelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dataframe_fuelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dataframe_fuelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dataframe_fuelMaxAggregateInputType
  }

  export type GetDataframe_fuelAggregateType<T extends Dataframe_fuelAggregateArgs> = {
        [P in keyof T & keyof AggregateDataframe_fuel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataframe_fuel[P]>
      : GetScalarType<T[P], AggregateDataframe_fuel[P]>
  }




  export type dataframe_fuelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataframe_fuelWhereInput
    orderBy?: dataframe_fuelOrderByWithAggregationInput | dataframe_fuelOrderByWithAggregationInput[]
    by: Dataframe_fuelScalarFieldEnum[] | Dataframe_fuelScalarFieldEnum
    having?: dataframe_fuelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dataframe_fuelCountAggregateInputType | true
    _avg?: Dataframe_fuelAvgAggregateInputType
    _sum?: Dataframe_fuelSumAggregateInputType
    _min?: Dataframe_fuelMinAggregateInputType
    _max?: Dataframe_fuelMaxAggregateInputType
  }

  export type Dataframe_fuelGroupByOutputType = {
    datafuel_uuid: string
    datafuel_qtdAbastecimento: number | null
    datafuel_vendaCombustivel: number | null
    datafuel_litroCombustivel: number | null
    datafuel_qtdProduto: number | null
    datafuel_vendaProduto: number | null
    datafuel_litroProduto: number | null
    datafuel_qtdOutrosProdutos: number | null
    datafuel_vendasOutros: number | null
    datafuel_litroOutros: number | null
    datafuel_custo: number | null
    datafuel_lucro: number | null
    datafuel_dt_registro: string | null
    datafuel_updated: string | null
    _count: Dataframe_fuelCountAggregateOutputType | null
    _avg: Dataframe_fuelAvgAggregateOutputType | null
    _sum: Dataframe_fuelSumAggregateOutputType | null
    _min: Dataframe_fuelMinAggregateOutputType | null
    _max: Dataframe_fuelMaxAggregateOutputType | null
  }

  type GetDataframe_fuelGroupByPayload<T extends dataframe_fuelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dataframe_fuelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dataframe_fuelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dataframe_fuelGroupByOutputType[P]>
            : GetScalarType<T[P], Dataframe_fuelGroupByOutputType[P]>
        }
      >
    >


  export type dataframe_fuelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datafuel_uuid?: boolean
    datafuel_qtdAbastecimento?: boolean
    datafuel_vendaCombustivel?: boolean
    datafuel_litroCombustivel?: boolean
    datafuel_qtdProduto?: boolean
    datafuel_vendaProduto?: boolean
    datafuel_litroProduto?: boolean
    datafuel_qtdOutrosProdutos?: boolean
    datafuel_vendasOutros?: boolean
    datafuel_litroOutros?: boolean
    datafuel_custo?: boolean
    datafuel_lucro?: boolean
    datafuel_dt_registro?: boolean
    datafuel_updated?: boolean
  }, ExtArgs["result"]["dataframe_fuel"]>

  export type dataframe_fuelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datafuel_uuid?: boolean
    datafuel_qtdAbastecimento?: boolean
    datafuel_vendaCombustivel?: boolean
    datafuel_litroCombustivel?: boolean
    datafuel_qtdProduto?: boolean
    datafuel_vendaProduto?: boolean
    datafuel_litroProduto?: boolean
    datafuel_qtdOutrosProdutos?: boolean
    datafuel_vendasOutros?: boolean
    datafuel_litroOutros?: boolean
    datafuel_custo?: boolean
    datafuel_lucro?: boolean
    datafuel_dt_registro?: boolean
    datafuel_updated?: boolean
  }, ExtArgs["result"]["dataframe_fuel"]>

  export type dataframe_fuelSelectScalar = {
    datafuel_uuid?: boolean
    datafuel_qtdAbastecimento?: boolean
    datafuel_vendaCombustivel?: boolean
    datafuel_litroCombustivel?: boolean
    datafuel_qtdProduto?: boolean
    datafuel_vendaProduto?: boolean
    datafuel_litroProduto?: boolean
    datafuel_qtdOutrosProdutos?: boolean
    datafuel_vendasOutros?: boolean
    datafuel_litroOutros?: boolean
    datafuel_custo?: boolean
    datafuel_lucro?: boolean
    datafuel_dt_registro?: boolean
    datafuel_updated?: boolean
  }


  export type $dataframe_fuelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dataframe_fuel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      datafuel_uuid: string
      datafuel_qtdAbastecimento: number | null
      datafuel_vendaCombustivel: number | null
      datafuel_litroCombustivel: number | null
      datafuel_qtdProduto: number | null
      datafuel_vendaProduto: number | null
      datafuel_litroProduto: number | null
      datafuel_qtdOutrosProdutos: number | null
      datafuel_vendasOutros: number | null
      datafuel_litroOutros: number | null
      datafuel_custo: number | null
      datafuel_lucro: number | null
      datafuel_dt_registro: string | null
      datafuel_updated: string | null
    }, ExtArgs["result"]["dataframe_fuel"]>
    composites: {}
  }

  type dataframe_fuelGetPayload<S extends boolean | null | undefined | dataframe_fuelDefaultArgs> = $Result.GetResult<Prisma.$dataframe_fuelPayload, S>

  type dataframe_fuelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dataframe_fuelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Dataframe_fuelCountAggregateInputType | true
    }

  export interface dataframe_fuelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dataframe_fuel'], meta: { name: 'dataframe_fuel' } }
    /**
     * Find zero or one Dataframe_fuel that matches the filter.
     * @param {dataframe_fuelFindUniqueArgs} args - Arguments to find a Dataframe_fuel
     * @example
     * // Get one Dataframe_fuel
     * const dataframe_fuel = await prisma.dataframe_fuel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataframe_fuelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_fuelFindUniqueArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dataframe_fuel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dataframe_fuelFindUniqueOrThrowArgs} args - Arguments to find a Dataframe_fuel
     * @example
     * // Get one Dataframe_fuel
     * const dataframe_fuel = await prisma.dataframe_fuel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataframe_fuelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_fuelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dataframe_fuel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_fuelFindFirstArgs} args - Arguments to find a Dataframe_fuel
     * @example
     * // Get one Dataframe_fuel
     * const dataframe_fuel = await prisma.dataframe_fuel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataframe_fuelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_fuelFindFirstArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dataframe_fuel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_fuelFindFirstOrThrowArgs} args - Arguments to find a Dataframe_fuel
     * @example
     * // Get one Dataframe_fuel
     * const dataframe_fuel = await prisma.dataframe_fuel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataframe_fuelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_fuelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dataframe_fuels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_fuelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dataframe_fuels
     * const dataframe_fuels = await prisma.dataframe_fuel.findMany()
     * 
     * // Get first 10 Dataframe_fuels
     * const dataframe_fuels = await prisma.dataframe_fuel.findMany({ take: 10 })
     * 
     * // Only select the `datafuel_uuid`
     * const dataframe_fuelWithDatafuel_uuidOnly = await prisma.dataframe_fuel.findMany({ select: { datafuel_uuid: true } })
     * 
    **/
    findMany<T extends dataframe_fuelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_fuelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dataframe_fuel.
     * @param {dataframe_fuelCreateArgs} args - Arguments to create a Dataframe_fuel.
     * @example
     * // Create one Dataframe_fuel
     * const Dataframe_fuel = await prisma.dataframe_fuel.create({
     *   data: {
     *     // ... data to create a Dataframe_fuel
     *   }
     * })
     * 
    **/
    create<T extends dataframe_fuelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_fuelCreateArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dataframe_fuels.
     * @param {dataframe_fuelCreateManyArgs} args - Arguments to create many Dataframe_fuels.
     * @example
     * // Create many Dataframe_fuels
     * const dataframe_fuel = await prisma.dataframe_fuel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends dataframe_fuelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_fuelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dataframe_fuels and returns the data saved in the database.
     * @param {dataframe_fuelCreateManyAndReturnArgs} args - Arguments to create many Dataframe_fuels.
     * @example
     * // Create many Dataframe_fuels
     * const dataframe_fuel = await prisma.dataframe_fuel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dataframe_fuels and only return the `datafuel_uuid`
     * const dataframe_fuelWithDatafuel_uuidOnly = await prisma.dataframe_fuel.createManyAndReturn({ 
     *   select: { datafuel_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends dataframe_fuelCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_fuelCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Dataframe_fuel.
     * @param {dataframe_fuelDeleteArgs} args - Arguments to delete one Dataframe_fuel.
     * @example
     * // Delete one Dataframe_fuel
     * const Dataframe_fuel = await prisma.dataframe_fuel.delete({
     *   where: {
     *     // ... filter to delete one Dataframe_fuel
     *   }
     * })
     * 
    **/
    delete<T extends dataframe_fuelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_fuelDeleteArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dataframe_fuel.
     * @param {dataframe_fuelUpdateArgs} args - Arguments to update one Dataframe_fuel.
     * @example
     * // Update one Dataframe_fuel
     * const dataframe_fuel = await prisma.dataframe_fuel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataframe_fuelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_fuelUpdateArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dataframe_fuels.
     * @param {dataframe_fuelDeleteManyArgs} args - Arguments to filter Dataframe_fuels to delete.
     * @example
     * // Delete a few Dataframe_fuels
     * const { count } = await prisma.dataframe_fuel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataframe_fuelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_fuelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dataframe_fuels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_fuelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dataframe_fuels
     * const dataframe_fuel = await prisma.dataframe_fuel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataframe_fuelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_fuelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dataframe_fuel.
     * @param {dataframe_fuelUpsertArgs} args - Arguments to update or create a Dataframe_fuel.
     * @example
     * // Update or create a Dataframe_fuel
     * const dataframe_fuel = await prisma.dataframe_fuel.upsert({
     *   create: {
     *     // ... data to create a Dataframe_fuel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataframe_fuel we want to update
     *   }
     * })
    **/
    upsert<T extends dataframe_fuelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_fuelUpsertArgs<ExtArgs>>
    ): Prisma__dataframe_fuelClient<$Result.GetResult<Prisma.$dataframe_fuelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dataframe_fuels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_fuelCountArgs} args - Arguments to filter Dataframe_fuels to count.
     * @example
     * // Count the number of Dataframe_fuels
     * const count = await prisma.dataframe_fuel.count({
     *   where: {
     *     // ... the filter for the Dataframe_fuels we want to count
     *   }
     * })
    **/
    count<T extends dataframe_fuelCountArgs>(
      args?: Subset<T, dataframe_fuelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dataframe_fuelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataframe_fuel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dataframe_fuelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Dataframe_fuelAggregateArgs>(args: Subset<T, Dataframe_fuelAggregateArgs>): Prisma.PrismaPromise<GetDataframe_fuelAggregateType<T>>

    /**
     * Group by Dataframe_fuel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_fuelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dataframe_fuelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dataframe_fuelGroupByArgs['orderBy'] }
        : { orderBy?: dataframe_fuelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dataframe_fuelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataframe_fuelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dataframe_fuel model
   */
  readonly fields: dataframe_fuelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dataframe_fuel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dataframe_fuelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the dataframe_fuel model
   */ 
  interface dataframe_fuelFieldRefs {
    readonly datafuel_uuid: FieldRef<"dataframe_fuel", 'String'>
    readonly datafuel_qtdAbastecimento: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_vendaCombustivel: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_litroCombustivel: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_qtdProduto: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_vendaProduto: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_litroProduto: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_qtdOutrosProdutos: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_vendasOutros: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_litroOutros: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_custo: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_lucro: FieldRef<"dataframe_fuel", 'Float'>
    readonly datafuel_dt_registro: FieldRef<"dataframe_fuel", 'String'>
    readonly datafuel_updated: FieldRef<"dataframe_fuel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dataframe_fuel findUnique
   */
  export type dataframe_fuelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_fuel to fetch.
     */
    where: dataframe_fuelWhereUniqueInput
  }

  /**
   * dataframe_fuel findUniqueOrThrow
   */
  export type dataframe_fuelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_fuel to fetch.
     */
    where: dataframe_fuelWhereUniqueInput
  }

  /**
   * dataframe_fuel findFirst
   */
  export type dataframe_fuelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_fuel to fetch.
     */
    where?: dataframe_fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_fuels to fetch.
     */
    orderBy?: dataframe_fuelOrderByWithRelationInput | dataframe_fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataframe_fuels.
     */
    cursor?: dataframe_fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataframe_fuels.
     */
    distinct?: Dataframe_fuelScalarFieldEnum | Dataframe_fuelScalarFieldEnum[]
  }

  /**
   * dataframe_fuel findFirstOrThrow
   */
  export type dataframe_fuelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_fuel to fetch.
     */
    where?: dataframe_fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_fuels to fetch.
     */
    orderBy?: dataframe_fuelOrderByWithRelationInput | dataframe_fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataframe_fuels.
     */
    cursor?: dataframe_fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataframe_fuels.
     */
    distinct?: Dataframe_fuelScalarFieldEnum | Dataframe_fuelScalarFieldEnum[]
  }

  /**
   * dataframe_fuel findMany
   */
  export type dataframe_fuelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_fuels to fetch.
     */
    where?: dataframe_fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_fuels to fetch.
     */
    orderBy?: dataframe_fuelOrderByWithRelationInput | dataframe_fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataframe_fuels.
     */
    cursor?: dataframe_fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_fuels.
     */
    skip?: number
    distinct?: Dataframe_fuelScalarFieldEnum | Dataframe_fuelScalarFieldEnum[]
  }

  /**
   * dataframe_fuel create
   */
  export type dataframe_fuelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * The data needed to create a dataframe_fuel.
     */
    data?: XOR<dataframe_fuelCreateInput, dataframe_fuelUncheckedCreateInput>
  }

  /**
   * dataframe_fuel createMany
   */
  export type dataframe_fuelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dataframe_fuels.
     */
    data: dataframe_fuelCreateManyInput | dataframe_fuelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dataframe_fuel createManyAndReturn
   */
  export type dataframe_fuelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many dataframe_fuels.
     */
    data: dataframe_fuelCreateManyInput | dataframe_fuelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dataframe_fuel update
   */
  export type dataframe_fuelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * The data needed to update a dataframe_fuel.
     */
    data: XOR<dataframe_fuelUpdateInput, dataframe_fuelUncheckedUpdateInput>
    /**
     * Choose, which dataframe_fuel to update.
     */
    where: dataframe_fuelWhereUniqueInput
  }

  /**
   * dataframe_fuel updateMany
   */
  export type dataframe_fuelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dataframe_fuels.
     */
    data: XOR<dataframe_fuelUpdateManyMutationInput, dataframe_fuelUncheckedUpdateManyInput>
    /**
     * Filter which dataframe_fuels to update
     */
    where?: dataframe_fuelWhereInput
  }

  /**
   * dataframe_fuel upsert
   */
  export type dataframe_fuelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * The filter to search for the dataframe_fuel to update in case it exists.
     */
    where: dataframe_fuelWhereUniqueInput
    /**
     * In case the dataframe_fuel found by the `where` argument doesn't exist, create a new dataframe_fuel with this data.
     */
    create: XOR<dataframe_fuelCreateInput, dataframe_fuelUncheckedCreateInput>
    /**
     * In case the dataframe_fuel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataframe_fuelUpdateInput, dataframe_fuelUncheckedUpdateInput>
  }

  /**
   * dataframe_fuel delete
   */
  export type dataframe_fuelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
    /**
     * Filter which dataframe_fuel to delete.
     */
    where: dataframe_fuelWhereUniqueInput
  }

  /**
   * dataframe_fuel deleteMany
   */
  export type dataframe_fuelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataframe_fuels to delete
     */
    where?: dataframe_fuelWhereInput
  }

  /**
   * dataframe_fuel without action
   */
  export type dataframe_fuelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_fuel
     */
    select?: dataframe_fuelSelect<ExtArgs> | null
  }


  /**
   * Model dataframe_product
   */

  export type AggregateDataframe_product = {
    _count: Dataframe_productCountAggregateOutputType | null
    _avg: Dataframe_productAvgAggregateOutputType | null
    _sum: Dataframe_productSumAggregateOutputType | null
    _min: Dataframe_productMinAggregateOutputType | null
    _max: Dataframe_productMaxAggregateOutputType | null
  }

  export type Dataframe_productAvgAggregateOutputType = {
    dataproduct_valor_venda: number | null
    dataproduct_qtd_produto_vendido: number | null
  }

  export type Dataframe_productSumAggregateOutputType = {
    dataproduct_valor_venda: number | null
    dataproduct_qtd_produto_vendido: number | null
  }

  export type Dataframe_productMinAggregateOutputType = {
    dataproduct_uuid: string | null
    dataproduct_posto: string | null
    dataproduct_venda_produto: string | null
    dataproduct_valor_venda: number | null
    dataproduct_qtd_produto_vendido: number | null
    dataproduct_dt_registro: string | null
    dataproduct_updated: string | null
  }

  export type Dataframe_productMaxAggregateOutputType = {
    dataproduct_uuid: string | null
    dataproduct_posto: string | null
    dataproduct_venda_produto: string | null
    dataproduct_valor_venda: number | null
    dataproduct_qtd_produto_vendido: number | null
    dataproduct_dt_registro: string | null
    dataproduct_updated: string | null
  }

  export type Dataframe_productCountAggregateOutputType = {
    dataproduct_uuid: number
    dataproduct_posto: number
    dataproduct_venda_produto: number
    dataproduct_valor_venda: number
    dataproduct_qtd_produto_vendido: number
    dataproduct_dt_registro: number
    dataproduct_updated: number
    _all: number
  }


  export type Dataframe_productAvgAggregateInputType = {
    dataproduct_valor_venda?: true
    dataproduct_qtd_produto_vendido?: true
  }

  export type Dataframe_productSumAggregateInputType = {
    dataproduct_valor_venda?: true
    dataproduct_qtd_produto_vendido?: true
  }

  export type Dataframe_productMinAggregateInputType = {
    dataproduct_uuid?: true
    dataproduct_posto?: true
    dataproduct_venda_produto?: true
    dataproduct_valor_venda?: true
    dataproduct_qtd_produto_vendido?: true
    dataproduct_dt_registro?: true
    dataproduct_updated?: true
  }

  export type Dataframe_productMaxAggregateInputType = {
    dataproduct_uuid?: true
    dataproduct_posto?: true
    dataproduct_venda_produto?: true
    dataproduct_valor_venda?: true
    dataproduct_qtd_produto_vendido?: true
    dataproduct_dt_registro?: true
    dataproduct_updated?: true
  }

  export type Dataframe_productCountAggregateInputType = {
    dataproduct_uuid?: true
    dataproduct_posto?: true
    dataproduct_venda_produto?: true
    dataproduct_valor_venda?: true
    dataproduct_qtd_produto_vendido?: true
    dataproduct_dt_registro?: true
    dataproduct_updated?: true
    _all?: true
  }

  export type Dataframe_productAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataframe_product to aggregate.
     */
    where?: dataframe_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_products to fetch.
     */
    orderBy?: dataframe_productOrderByWithRelationInput | dataframe_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataframe_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataframe_products
    **/
    _count?: true | Dataframe_productCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dataframe_productAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dataframe_productSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dataframe_productMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dataframe_productMaxAggregateInputType
  }

  export type GetDataframe_productAggregateType<T extends Dataframe_productAggregateArgs> = {
        [P in keyof T & keyof AggregateDataframe_product]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataframe_product[P]>
      : GetScalarType<T[P], AggregateDataframe_product[P]>
  }




  export type dataframe_productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataframe_productWhereInput
    orderBy?: dataframe_productOrderByWithAggregationInput | dataframe_productOrderByWithAggregationInput[]
    by: Dataframe_productScalarFieldEnum[] | Dataframe_productScalarFieldEnum
    having?: dataframe_productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dataframe_productCountAggregateInputType | true
    _avg?: Dataframe_productAvgAggregateInputType
    _sum?: Dataframe_productSumAggregateInputType
    _min?: Dataframe_productMinAggregateInputType
    _max?: Dataframe_productMaxAggregateInputType
  }

  export type Dataframe_productGroupByOutputType = {
    dataproduct_uuid: string
    dataproduct_posto: string | null
    dataproduct_venda_produto: string | null
    dataproduct_valor_venda: number | null
    dataproduct_qtd_produto_vendido: number | null
    dataproduct_dt_registro: string | null
    dataproduct_updated: string | null
    _count: Dataframe_productCountAggregateOutputType | null
    _avg: Dataframe_productAvgAggregateOutputType | null
    _sum: Dataframe_productSumAggregateOutputType | null
    _min: Dataframe_productMinAggregateOutputType | null
    _max: Dataframe_productMaxAggregateOutputType | null
  }

  type GetDataframe_productGroupByPayload<T extends dataframe_productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dataframe_productGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dataframe_productGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dataframe_productGroupByOutputType[P]>
            : GetScalarType<T[P], Dataframe_productGroupByOutputType[P]>
        }
      >
    >


  export type dataframe_productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dataproduct_uuid?: boolean
    dataproduct_posto?: boolean
    dataproduct_venda_produto?: boolean
    dataproduct_valor_venda?: boolean
    dataproduct_qtd_produto_vendido?: boolean
    dataproduct_dt_registro?: boolean
    dataproduct_updated?: boolean
  }, ExtArgs["result"]["dataframe_product"]>

  export type dataframe_productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dataproduct_uuid?: boolean
    dataproduct_posto?: boolean
    dataproduct_venda_produto?: boolean
    dataproduct_valor_venda?: boolean
    dataproduct_qtd_produto_vendido?: boolean
    dataproduct_dt_registro?: boolean
    dataproduct_updated?: boolean
  }, ExtArgs["result"]["dataframe_product"]>

  export type dataframe_productSelectScalar = {
    dataproduct_uuid?: boolean
    dataproduct_posto?: boolean
    dataproduct_venda_produto?: boolean
    dataproduct_valor_venda?: boolean
    dataproduct_qtd_produto_vendido?: boolean
    dataproduct_dt_registro?: boolean
    dataproduct_updated?: boolean
  }


  export type $dataframe_productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dataframe_product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      dataproduct_uuid: string
      dataproduct_posto: string | null
      dataproduct_venda_produto: string | null
      dataproduct_valor_venda: number | null
      dataproduct_qtd_produto_vendido: number | null
      dataproduct_dt_registro: string | null
      dataproduct_updated: string | null
    }, ExtArgs["result"]["dataframe_product"]>
    composites: {}
  }

  type dataframe_productGetPayload<S extends boolean | null | undefined | dataframe_productDefaultArgs> = $Result.GetResult<Prisma.$dataframe_productPayload, S>

  type dataframe_productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dataframe_productFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Dataframe_productCountAggregateInputType | true
    }

  export interface dataframe_productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dataframe_product'], meta: { name: 'dataframe_product' } }
    /**
     * Find zero or one Dataframe_product that matches the filter.
     * @param {dataframe_productFindUniqueArgs} args - Arguments to find a Dataframe_product
     * @example
     * // Get one Dataframe_product
     * const dataframe_product = await prisma.dataframe_product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends dataframe_productFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_productFindUniqueArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dataframe_product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dataframe_productFindUniqueOrThrowArgs} args - Arguments to find a Dataframe_product
     * @example
     * // Get one Dataframe_product
     * const dataframe_product = await prisma.dataframe_product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends dataframe_productFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_productFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dataframe_product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_productFindFirstArgs} args - Arguments to find a Dataframe_product
     * @example
     * // Get one Dataframe_product
     * const dataframe_product = await prisma.dataframe_product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends dataframe_productFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_productFindFirstArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dataframe_product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_productFindFirstOrThrowArgs} args - Arguments to find a Dataframe_product
     * @example
     * // Get one Dataframe_product
     * const dataframe_product = await prisma.dataframe_product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends dataframe_productFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_productFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dataframe_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dataframe_products
     * const dataframe_products = await prisma.dataframe_product.findMany()
     * 
     * // Get first 10 Dataframe_products
     * const dataframe_products = await prisma.dataframe_product.findMany({ take: 10 })
     * 
     * // Only select the `dataproduct_uuid`
     * const dataframe_productWithDataproduct_uuidOnly = await prisma.dataframe_product.findMany({ select: { dataproduct_uuid: true } })
     * 
    **/
    findMany<T extends dataframe_productFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_productFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dataframe_product.
     * @param {dataframe_productCreateArgs} args - Arguments to create a Dataframe_product.
     * @example
     * // Create one Dataframe_product
     * const Dataframe_product = await prisma.dataframe_product.create({
     *   data: {
     *     // ... data to create a Dataframe_product
     *   }
     * })
     * 
    **/
    create<T extends dataframe_productCreateArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_productCreateArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dataframe_products.
     * @param {dataframe_productCreateManyArgs} args - Arguments to create many Dataframe_products.
     * @example
     * // Create many Dataframe_products
     * const dataframe_product = await prisma.dataframe_product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends dataframe_productCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_productCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dataframe_products and returns the data saved in the database.
     * @param {dataframe_productCreateManyAndReturnArgs} args - Arguments to create many Dataframe_products.
     * @example
     * // Create many Dataframe_products
     * const dataframe_product = await prisma.dataframe_product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dataframe_products and only return the `dataproduct_uuid`
     * const dataframe_productWithDataproduct_uuidOnly = await prisma.dataframe_product.createManyAndReturn({ 
     *   select: { dataproduct_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends dataframe_productCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_productCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Dataframe_product.
     * @param {dataframe_productDeleteArgs} args - Arguments to delete one Dataframe_product.
     * @example
     * // Delete one Dataframe_product
     * const Dataframe_product = await prisma.dataframe_product.delete({
     *   where: {
     *     // ... filter to delete one Dataframe_product
     *   }
     * })
     * 
    **/
    delete<T extends dataframe_productDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_productDeleteArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dataframe_product.
     * @param {dataframe_productUpdateArgs} args - Arguments to update one Dataframe_product.
     * @example
     * // Update one Dataframe_product
     * const dataframe_product = await prisma.dataframe_product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends dataframe_productUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_productUpdateArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dataframe_products.
     * @param {dataframe_productDeleteManyArgs} args - Arguments to filter Dataframe_products to delete.
     * @example
     * // Delete a few Dataframe_products
     * const { count } = await prisma.dataframe_product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends dataframe_productDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, dataframe_productDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dataframe_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dataframe_products
     * const dataframe_product = await prisma.dataframe_product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends dataframe_productUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_productUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dataframe_product.
     * @param {dataframe_productUpsertArgs} args - Arguments to update or create a Dataframe_product.
     * @example
     * // Update or create a Dataframe_product
     * const dataframe_product = await prisma.dataframe_product.upsert({
     *   create: {
     *     // ... data to create a Dataframe_product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataframe_product we want to update
     *   }
     * })
    **/
    upsert<T extends dataframe_productUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, dataframe_productUpsertArgs<ExtArgs>>
    ): Prisma__dataframe_productClient<$Result.GetResult<Prisma.$dataframe_productPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dataframe_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_productCountArgs} args - Arguments to filter Dataframe_products to count.
     * @example
     * // Count the number of Dataframe_products
     * const count = await prisma.dataframe_product.count({
     *   where: {
     *     // ... the filter for the Dataframe_products we want to count
     *   }
     * })
    **/
    count<T extends dataframe_productCountArgs>(
      args?: Subset<T, dataframe_productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dataframe_productCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataframe_product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dataframe_productAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Dataframe_productAggregateArgs>(args: Subset<T, Dataframe_productAggregateArgs>): Prisma.PrismaPromise<GetDataframe_productAggregateType<T>>

    /**
     * Group by Dataframe_product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataframe_productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dataframe_productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dataframe_productGroupByArgs['orderBy'] }
        : { orderBy?: dataframe_productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dataframe_productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataframe_productGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dataframe_product model
   */
  readonly fields: dataframe_productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dataframe_product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dataframe_productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the dataframe_product model
   */ 
  interface dataframe_productFieldRefs {
    readonly dataproduct_uuid: FieldRef<"dataframe_product", 'String'>
    readonly dataproduct_posto: FieldRef<"dataframe_product", 'String'>
    readonly dataproduct_venda_produto: FieldRef<"dataframe_product", 'String'>
    readonly dataproduct_valor_venda: FieldRef<"dataframe_product", 'Float'>
    readonly dataproduct_qtd_produto_vendido: FieldRef<"dataframe_product", 'Float'>
    readonly dataproduct_dt_registro: FieldRef<"dataframe_product", 'String'>
    readonly dataproduct_updated: FieldRef<"dataframe_product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dataframe_product findUnique
   */
  export type dataframe_productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_product to fetch.
     */
    where: dataframe_productWhereUniqueInput
  }

  /**
   * dataframe_product findUniqueOrThrow
   */
  export type dataframe_productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_product to fetch.
     */
    where: dataframe_productWhereUniqueInput
  }

  /**
   * dataframe_product findFirst
   */
  export type dataframe_productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_product to fetch.
     */
    where?: dataframe_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_products to fetch.
     */
    orderBy?: dataframe_productOrderByWithRelationInput | dataframe_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataframe_products.
     */
    cursor?: dataframe_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataframe_products.
     */
    distinct?: Dataframe_productScalarFieldEnum | Dataframe_productScalarFieldEnum[]
  }

  /**
   * dataframe_product findFirstOrThrow
   */
  export type dataframe_productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_product to fetch.
     */
    where?: dataframe_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_products to fetch.
     */
    orderBy?: dataframe_productOrderByWithRelationInput | dataframe_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataframe_products.
     */
    cursor?: dataframe_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataframe_products.
     */
    distinct?: Dataframe_productScalarFieldEnum | Dataframe_productScalarFieldEnum[]
  }

  /**
   * dataframe_product findMany
   */
  export type dataframe_productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * Filter, which dataframe_products to fetch.
     */
    where?: dataframe_productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataframe_products to fetch.
     */
    orderBy?: dataframe_productOrderByWithRelationInput | dataframe_productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataframe_products.
     */
    cursor?: dataframe_productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataframe_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataframe_products.
     */
    skip?: number
    distinct?: Dataframe_productScalarFieldEnum | Dataframe_productScalarFieldEnum[]
  }

  /**
   * dataframe_product create
   */
  export type dataframe_productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * The data needed to create a dataframe_product.
     */
    data?: XOR<dataframe_productCreateInput, dataframe_productUncheckedCreateInput>
  }

  /**
   * dataframe_product createMany
   */
  export type dataframe_productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dataframe_products.
     */
    data: dataframe_productCreateManyInput | dataframe_productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dataframe_product createManyAndReturn
   */
  export type dataframe_productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many dataframe_products.
     */
    data: dataframe_productCreateManyInput | dataframe_productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dataframe_product update
   */
  export type dataframe_productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * The data needed to update a dataframe_product.
     */
    data: XOR<dataframe_productUpdateInput, dataframe_productUncheckedUpdateInput>
    /**
     * Choose, which dataframe_product to update.
     */
    where: dataframe_productWhereUniqueInput
  }

  /**
   * dataframe_product updateMany
   */
  export type dataframe_productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dataframe_products.
     */
    data: XOR<dataframe_productUpdateManyMutationInput, dataframe_productUncheckedUpdateManyInput>
    /**
     * Filter which dataframe_products to update
     */
    where?: dataframe_productWhereInput
  }

  /**
   * dataframe_product upsert
   */
  export type dataframe_productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * The filter to search for the dataframe_product to update in case it exists.
     */
    where: dataframe_productWhereUniqueInput
    /**
     * In case the dataframe_product found by the `where` argument doesn't exist, create a new dataframe_product with this data.
     */
    create: XOR<dataframe_productCreateInput, dataframe_productUncheckedCreateInput>
    /**
     * In case the dataframe_product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataframe_productUpdateInput, dataframe_productUncheckedUpdateInput>
  }

  /**
   * dataframe_product delete
   */
  export type dataframe_productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
    /**
     * Filter which dataframe_product to delete.
     */
    where: dataframe_productWhereUniqueInput
  }

  /**
   * dataframe_product deleteMany
   */
  export type dataframe_productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataframe_products to delete
     */
    where?: dataframe_productWhereInput
  }

  /**
   * dataframe_product without action
   */
  export type dataframe_productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataframe_product
     */
    select?: dataframe_productSelect<ExtArgs> | null
  }


  /**
   * Model fuel
   */

  export type AggregateFuel = {
    _count: FuelCountAggregateOutputType | null
    _avg: FuelAvgAggregateOutputType | null
    _sum: FuelSumAggregateOutputType | null
    _min: FuelMinAggregateOutputType | null
    _max: FuelMaxAggregateOutputType | null
  }

  export type FuelAvgAggregateOutputType = {
    fuel_regular_gasoline: number | null
    fuel_alcohol: number | null
  }

  export type FuelSumAggregateOutputType = {
    fuel_regular_gasoline: number | null
    fuel_alcohol: number | null
  }

  export type FuelMinAggregateOutputType = {
    fuel_uuid: string | null
    fuel_regular_gasoline: number | null
    fuel_alcohol: number | null
    use_uuid: string | null
    fuel_created_at: Date | null
    fuel_updated_at: Date | null
  }

  export type FuelMaxAggregateOutputType = {
    fuel_uuid: string | null
    fuel_regular_gasoline: number | null
    fuel_alcohol: number | null
    use_uuid: string | null
    fuel_created_at: Date | null
    fuel_updated_at: Date | null
  }

  export type FuelCountAggregateOutputType = {
    fuel_uuid: number
    fuel_regular_gasoline: number
    fuel_alcohol: number
    use_uuid: number
    fuel_created_at: number
    fuel_updated_at: number
    _all: number
  }


  export type FuelAvgAggregateInputType = {
    fuel_regular_gasoline?: true
    fuel_alcohol?: true
  }

  export type FuelSumAggregateInputType = {
    fuel_regular_gasoline?: true
    fuel_alcohol?: true
  }

  export type FuelMinAggregateInputType = {
    fuel_uuid?: true
    fuel_regular_gasoline?: true
    fuel_alcohol?: true
    use_uuid?: true
    fuel_created_at?: true
    fuel_updated_at?: true
  }

  export type FuelMaxAggregateInputType = {
    fuel_uuid?: true
    fuel_regular_gasoline?: true
    fuel_alcohol?: true
    use_uuid?: true
    fuel_created_at?: true
    fuel_updated_at?: true
  }

  export type FuelCountAggregateInputType = {
    fuel_uuid?: true
    fuel_regular_gasoline?: true
    fuel_alcohol?: true
    use_uuid?: true
    fuel_created_at?: true
    fuel_updated_at?: true
    _all?: true
  }

  export type FuelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fuel to aggregate.
     */
    where?: fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuels to fetch.
     */
    orderBy?: fuelOrderByWithRelationInput | fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fuels
    **/
    _count?: true | FuelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuelMaxAggregateInputType
  }

  export type GetFuelAggregateType<T extends FuelAggregateArgs> = {
        [P in keyof T & keyof AggregateFuel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuel[P]>
      : GetScalarType<T[P], AggregateFuel[P]>
  }




  export type fuelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fuelWhereInput
    orderBy?: fuelOrderByWithAggregationInput | fuelOrderByWithAggregationInput[]
    by: FuelScalarFieldEnum[] | FuelScalarFieldEnum
    having?: fuelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuelCountAggregateInputType | true
    _avg?: FuelAvgAggregateInputType
    _sum?: FuelSumAggregateInputType
    _min?: FuelMinAggregateInputType
    _max?: FuelMaxAggregateInputType
  }

  export type FuelGroupByOutputType = {
    fuel_uuid: string
    fuel_regular_gasoline: number | null
    fuel_alcohol: number | null
    use_uuid: string | null
    fuel_created_at: Date
    fuel_updated_at: Date
    _count: FuelCountAggregateOutputType | null
    _avg: FuelAvgAggregateOutputType | null
    _sum: FuelSumAggregateOutputType | null
    _min: FuelMinAggregateOutputType | null
    _max: FuelMaxAggregateOutputType | null
  }

  type GetFuelGroupByPayload<T extends fuelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuelGroupByOutputType[P]>
            : GetScalarType<T[P], FuelGroupByOutputType[P]>
        }
      >
    >


  export type fuelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fuel_uuid?: boolean
    fuel_regular_gasoline?: boolean
    fuel_alcohol?: boolean
    use_uuid?: boolean
    fuel_created_at?: boolean
    fuel_updated_at?: boolean
    users?: boolean | fuel$usersArgs<ExtArgs>
  }, ExtArgs["result"]["fuel"]>

  export type fuelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fuel_uuid?: boolean
    fuel_regular_gasoline?: boolean
    fuel_alcohol?: boolean
    use_uuid?: boolean
    fuel_created_at?: boolean
    fuel_updated_at?: boolean
    users?: boolean | fuel$usersArgs<ExtArgs>
  }, ExtArgs["result"]["fuel"]>

  export type fuelSelectScalar = {
    fuel_uuid?: boolean
    fuel_regular_gasoline?: boolean
    fuel_alcohol?: boolean
    use_uuid?: boolean
    fuel_created_at?: boolean
    fuel_updated_at?: boolean
  }

  export type fuelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | fuel$usersArgs<ExtArgs>
  }
  export type fuelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | fuel$usersArgs<ExtArgs>
  }

  export type $fuelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fuel"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      fuel_uuid: string
      fuel_regular_gasoline: number | null
      fuel_alcohol: number | null
      use_uuid: string | null
      fuel_created_at: Date
      fuel_updated_at: Date
    }, ExtArgs["result"]["fuel"]>
    composites: {}
  }

  type fuelGetPayload<S extends boolean | null | undefined | fuelDefaultArgs> = $Result.GetResult<Prisma.$fuelPayload, S>

  type fuelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<fuelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FuelCountAggregateInputType | true
    }

  export interface fuelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fuel'], meta: { name: 'fuel' } }
    /**
     * Find zero or one Fuel that matches the filter.
     * @param {fuelFindUniqueArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends fuelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, fuelFindUniqueArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fuel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {fuelFindUniqueOrThrowArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends fuelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fuelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fuel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelFindFirstArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends fuelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, fuelFindFirstArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fuel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelFindFirstOrThrowArgs} args - Arguments to find a Fuel
     * @example
     * // Get one Fuel
     * const fuel = await prisma.fuel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends fuelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, fuelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fuels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fuels
     * const fuels = await prisma.fuel.findMany()
     * 
     * // Get first 10 Fuels
     * const fuels = await prisma.fuel.findMany({ take: 10 })
     * 
     * // Only select the `fuel_uuid`
     * const fuelWithFuel_uuidOnly = await prisma.fuel.findMany({ select: { fuel_uuid: true } })
     * 
    **/
    findMany<T extends fuelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fuelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fuel.
     * @param {fuelCreateArgs} args - Arguments to create a Fuel.
     * @example
     * // Create one Fuel
     * const Fuel = await prisma.fuel.create({
     *   data: {
     *     // ... data to create a Fuel
     *   }
     * })
     * 
    **/
    create<T extends fuelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, fuelCreateArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fuels.
     * @param {fuelCreateManyArgs} args - Arguments to create many Fuels.
     * @example
     * // Create many Fuels
     * const fuel = await prisma.fuel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends fuelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fuelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fuels and returns the data saved in the database.
     * @param {fuelCreateManyAndReturnArgs} args - Arguments to create many Fuels.
     * @example
     * // Create many Fuels
     * const fuel = await prisma.fuel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fuels and only return the `fuel_uuid`
     * const fuelWithFuel_uuidOnly = await prisma.fuel.createManyAndReturn({ 
     *   select: { fuel_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends fuelCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, fuelCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Fuel.
     * @param {fuelDeleteArgs} args - Arguments to delete one Fuel.
     * @example
     * // Delete one Fuel
     * const Fuel = await prisma.fuel.delete({
     *   where: {
     *     // ... filter to delete one Fuel
     *   }
     * })
     * 
    **/
    delete<T extends fuelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, fuelDeleteArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fuel.
     * @param {fuelUpdateArgs} args - Arguments to update one Fuel.
     * @example
     * // Update one Fuel
     * const fuel = await prisma.fuel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends fuelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, fuelUpdateArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fuels.
     * @param {fuelDeleteManyArgs} args - Arguments to filter Fuels to delete.
     * @example
     * // Delete a few Fuels
     * const { count } = await prisma.fuel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends fuelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, fuelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fuels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fuels
     * const fuel = await prisma.fuel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends fuelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, fuelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fuel.
     * @param {fuelUpsertArgs} args - Arguments to update or create a Fuel.
     * @example
     * // Update or create a Fuel
     * const fuel = await prisma.fuel.upsert({
     *   create: {
     *     // ... data to create a Fuel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fuel we want to update
     *   }
     * })
    **/
    upsert<T extends fuelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, fuelUpsertArgs<ExtArgs>>
    ): Prisma__fuelClient<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fuels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelCountArgs} args - Arguments to filter Fuels to count.
     * @example
     * // Count the number of Fuels
     * const count = await prisma.fuel.count({
     *   where: {
     *     // ... the filter for the Fuels we want to count
     *   }
     * })
    **/
    count<T extends fuelCountArgs>(
      args?: Subset<T, fuelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fuel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuelAggregateArgs>(args: Subset<T, FuelAggregateArgs>): Prisma.PrismaPromise<GetFuelAggregateType<T>>

    /**
     * Group by Fuel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fuelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fuelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fuelGroupByArgs['orderBy'] }
        : { orderBy?: fuelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fuelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fuel model
   */
  readonly fields: fuelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fuel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fuelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends fuel$usersArgs<ExtArgs> = {}>(args?: Subset<T, fuel$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the fuel model
   */ 
  interface fuelFieldRefs {
    readonly fuel_uuid: FieldRef<"fuel", 'String'>
    readonly fuel_regular_gasoline: FieldRef<"fuel", 'Float'>
    readonly fuel_alcohol: FieldRef<"fuel", 'Float'>
    readonly use_uuid: FieldRef<"fuel", 'String'>
    readonly fuel_created_at: FieldRef<"fuel", 'DateTime'>
    readonly fuel_updated_at: FieldRef<"fuel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * fuel findUnique
   */
  export type fuelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * Filter, which fuel to fetch.
     */
    where: fuelWhereUniqueInput
  }

  /**
   * fuel findUniqueOrThrow
   */
  export type fuelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * Filter, which fuel to fetch.
     */
    where: fuelWhereUniqueInput
  }

  /**
   * fuel findFirst
   */
  export type fuelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * Filter, which fuel to fetch.
     */
    where?: fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuels to fetch.
     */
    orderBy?: fuelOrderByWithRelationInput | fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fuels.
     */
    cursor?: fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fuels.
     */
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * fuel findFirstOrThrow
   */
  export type fuelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * Filter, which fuel to fetch.
     */
    where?: fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuels to fetch.
     */
    orderBy?: fuelOrderByWithRelationInput | fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fuels.
     */
    cursor?: fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fuels.
     */
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * fuel findMany
   */
  export type fuelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * Filter, which fuels to fetch.
     */
    where?: fuelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fuels to fetch.
     */
    orderBy?: fuelOrderByWithRelationInput | fuelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fuels.
     */
    cursor?: fuelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fuels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fuels.
     */
    skip?: number
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * fuel create
   */
  export type fuelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * The data needed to create a fuel.
     */
    data?: XOR<fuelCreateInput, fuelUncheckedCreateInput>
  }

  /**
   * fuel createMany
   */
  export type fuelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fuels.
     */
    data: fuelCreateManyInput | fuelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fuel createManyAndReturn
   */
  export type fuelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many fuels.
     */
    data: fuelCreateManyInput | fuelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fuel update
   */
  export type fuelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * The data needed to update a fuel.
     */
    data: XOR<fuelUpdateInput, fuelUncheckedUpdateInput>
    /**
     * Choose, which fuel to update.
     */
    where: fuelWhereUniqueInput
  }

  /**
   * fuel updateMany
   */
  export type fuelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fuels.
     */
    data: XOR<fuelUpdateManyMutationInput, fuelUncheckedUpdateManyInput>
    /**
     * Filter which fuels to update
     */
    where?: fuelWhereInput
  }

  /**
   * fuel upsert
   */
  export type fuelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * The filter to search for the fuel to update in case it exists.
     */
    where: fuelWhereUniqueInput
    /**
     * In case the fuel found by the `where` argument doesn't exist, create a new fuel with this data.
     */
    create: XOR<fuelCreateInput, fuelUncheckedCreateInput>
    /**
     * In case the fuel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fuelUpdateInput, fuelUncheckedUpdateInput>
  }

  /**
   * fuel delete
   */
  export type fuelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    /**
     * Filter which fuel to delete.
     */
    where: fuelWhereUniqueInput
  }

  /**
   * fuel deleteMany
   */
  export type fuelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fuels to delete
     */
    where?: fuelWhereInput
  }

  /**
   * fuel.users
   */
  export type fuel$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * fuel without action
   */
  export type fuelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
  }


  /**
   * Model gas_station
   */

  export type AggregateGas_station = {
    _count: Gas_stationCountAggregateOutputType | null
    _avg: Gas_stationAvgAggregateOutputType | null
    _sum: Gas_stationSumAggregateOutputType | null
    _min: Gas_stationMinAggregateOutputType | null
    _max: Gas_stationMaxAggregateOutputType | null
  }

  export type Gas_stationAvgAggregateOutputType = {
    gas_value: number | null
  }

  export type Gas_stationSumAggregateOutputType = {
    gas_value: number | null
  }

  export type Gas_stationMinAggregateOutputType = {
    gas_uuid: string | null
    gas_fuel_type: string | null
    gas_value: number | null
    gas_created_at: Date | null
    gas_updated_at: Date | null
    gas_ibm: string | null
    gas_identifier: string | null
  }

  export type Gas_stationMaxAggregateOutputType = {
    gas_uuid: string | null
    gas_fuel_type: string | null
    gas_value: number | null
    gas_created_at: Date | null
    gas_updated_at: Date | null
    gas_ibm: string | null
    gas_identifier: string | null
  }

  export type Gas_stationCountAggregateOutputType = {
    gas_uuid: number
    gas_fuel_type: number
    gas_value: number
    gas_created_at: number
    gas_updated_at: number
    gas_ibm: number
    gas_identifier: number
    _all: number
  }


  export type Gas_stationAvgAggregateInputType = {
    gas_value?: true
  }

  export type Gas_stationSumAggregateInputType = {
    gas_value?: true
  }

  export type Gas_stationMinAggregateInputType = {
    gas_uuid?: true
    gas_fuel_type?: true
    gas_value?: true
    gas_created_at?: true
    gas_updated_at?: true
    gas_ibm?: true
    gas_identifier?: true
  }

  export type Gas_stationMaxAggregateInputType = {
    gas_uuid?: true
    gas_fuel_type?: true
    gas_value?: true
    gas_created_at?: true
    gas_updated_at?: true
    gas_ibm?: true
    gas_identifier?: true
  }

  export type Gas_stationCountAggregateInputType = {
    gas_uuid?: true
    gas_fuel_type?: true
    gas_value?: true
    gas_created_at?: true
    gas_updated_at?: true
    gas_ibm?: true
    gas_identifier?: true
    _all?: true
  }

  export type Gas_stationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gas_station to aggregate.
     */
    where?: gas_stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_stations to fetch.
     */
    orderBy?: gas_stationOrderByWithRelationInput | gas_stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gas_stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gas_stations
    **/
    _count?: true | Gas_stationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gas_stationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gas_stationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gas_stationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gas_stationMaxAggregateInputType
  }

  export type GetGas_stationAggregateType<T extends Gas_stationAggregateArgs> = {
        [P in keyof T & keyof AggregateGas_station]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGas_station[P]>
      : GetScalarType<T[P], AggregateGas_station[P]>
  }




  export type gas_stationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gas_stationWhereInput
    orderBy?: gas_stationOrderByWithAggregationInput | gas_stationOrderByWithAggregationInput[]
    by: Gas_stationScalarFieldEnum[] | Gas_stationScalarFieldEnum
    having?: gas_stationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gas_stationCountAggregateInputType | true
    _avg?: Gas_stationAvgAggregateInputType
    _sum?: Gas_stationSumAggregateInputType
    _min?: Gas_stationMinAggregateInputType
    _max?: Gas_stationMaxAggregateInputType
  }

  export type Gas_stationGroupByOutputType = {
    gas_uuid: string
    gas_fuel_type: string | null
    gas_value: number | null
    gas_created_at: Date
    gas_updated_at: Date
    gas_ibm: string | null
    gas_identifier: string | null
    _count: Gas_stationCountAggregateOutputType | null
    _avg: Gas_stationAvgAggregateOutputType | null
    _sum: Gas_stationSumAggregateOutputType | null
    _min: Gas_stationMinAggregateOutputType | null
    _max: Gas_stationMaxAggregateOutputType | null
  }

  type GetGas_stationGroupByPayload<T extends gas_stationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gas_stationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gas_stationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gas_stationGroupByOutputType[P]>
            : GetScalarType<T[P], Gas_stationGroupByOutputType[P]>
        }
      >
    >


  export type gas_stationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gas_uuid?: boolean
    gas_fuel_type?: boolean
    gas_value?: boolean
    gas_created_at?: boolean
    gas_updated_at?: boolean
    gas_ibm?: boolean
    gas_identifier?: boolean
  }, ExtArgs["result"]["gas_station"]>

  export type gas_stationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gas_uuid?: boolean
    gas_fuel_type?: boolean
    gas_value?: boolean
    gas_created_at?: boolean
    gas_updated_at?: boolean
    gas_ibm?: boolean
    gas_identifier?: boolean
  }, ExtArgs["result"]["gas_station"]>

  export type gas_stationSelectScalar = {
    gas_uuid?: boolean
    gas_fuel_type?: boolean
    gas_value?: boolean
    gas_created_at?: boolean
    gas_updated_at?: boolean
    gas_ibm?: boolean
    gas_identifier?: boolean
  }


  export type $gas_stationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gas_station"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      gas_uuid: string
      gas_fuel_type: string | null
      gas_value: number | null
      gas_created_at: Date
      gas_updated_at: Date
      gas_ibm: string | null
      gas_identifier: string | null
    }, ExtArgs["result"]["gas_station"]>
    composites: {}
  }

  type gas_stationGetPayload<S extends boolean | null | undefined | gas_stationDefaultArgs> = $Result.GetResult<Prisma.$gas_stationPayload, S>

  type gas_stationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gas_stationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Gas_stationCountAggregateInputType | true
    }

  export interface gas_stationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gas_station'], meta: { name: 'gas_station' } }
    /**
     * Find zero or one Gas_station that matches the filter.
     * @param {gas_stationFindUniqueArgs} args - Arguments to find a Gas_station
     * @example
     * // Get one Gas_station
     * const gas_station = await prisma.gas_station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends gas_stationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, gas_stationFindUniqueArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gas_station that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gas_stationFindUniqueOrThrowArgs} args - Arguments to find a Gas_station
     * @example
     * // Get one Gas_station
     * const gas_station = await prisma.gas_station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends gas_stationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gas_stationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gas_station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_stationFindFirstArgs} args - Arguments to find a Gas_station
     * @example
     * // Get one Gas_station
     * const gas_station = await prisma.gas_station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends gas_stationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, gas_stationFindFirstArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gas_station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_stationFindFirstOrThrowArgs} args - Arguments to find a Gas_station
     * @example
     * // Get one Gas_station
     * const gas_station = await prisma.gas_station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends gas_stationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gas_stationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Gas_stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_stationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gas_stations
     * const gas_stations = await prisma.gas_station.findMany()
     * 
     * // Get first 10 Gas_stations
     * const gas_stations = await prisma.gas_station.findMany({ take: 10 })
     * 
     * // Only select the `gas_uuid`
     * const gas_stationWithGas_uuidOnly = await prisma.gas_station.findMany({ select: { gas_uuid: true } })
     * 
    **/
    findMany<T extends gas_stationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gas_stationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gas_station.
     * @param {gas_stationCreateArgs} args - Arguments to create a Gas_station.
     * @example
     * // Create one Gas_station
     * const Gas_station = await prisma.gas_station.create({
     *   data: {
     *     // ... data to create a Gas_station
     *   }
     * })
     * 
    **/
    create<T extends gas_stationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gas_stationCreateArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Gas_stations.
     * @param {gas_stationCreateManyArgs} args - Arguments to create many Gas_stations.
     * @example
     * // Create many Gas_stations
     * const gas_station = await prisma.gas_station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends gas_stationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gas_stationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gas_stations and returns the data saved in the database.
     * @param {gas_stationCreateManyAndReturnArgs} args - Arguments to create many Gas_stations.
     * @example
     * // Create many Gas_stations
     * const gas_station = await prisma.gas_station.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gas_stations and only return the `gas_uuid`
     * const gas_stationWithGas_uuidOnly = await prisma.gas_station.createManyAndReturn({ 
     *   select: { gas_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends gas_stationCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, gas_stationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Gas_station.
     * @param {gas_stationDeleteArgs} args - Arguments to delete one Gas_station.
     * @example
     * // Delete one Gas_station
     * const Gas_station = await prisma.gas_station.delete({
     *   where: {
     *     // ... filter to delete one Gas_station
     *   }
     * })
     * 
    **/
    delete<T extends gas_stationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gas_stationDeleteArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gas_station.
     * @param {gas_stationUpdateArgs} args - Arguments to update one Gas_station.
     * @example
     * // Update one Gas_station
     * const gas_station = await prisma.gas_station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends gas_stationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gas_stationUpdateArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Gas_stations.
     * @param {gas_stationDeleteManyArgs} args - Arguments to filter Gas_stations to delete.
     * @example
     * // Delete a few Gas_stations
     * const { count } = await prisma.gas_station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends gas_stationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gas_stationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gas_stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_stationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gas_stations
     * const gas_station = await prisma.gas_station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends gas_stationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gas_stationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gas_station.
     * @param {gas_stationUpsertArgs} args - Arguments to update or create a Gas_station.
     * @example
     * // Update or create a Gas_station
     * const gas_station = await prisma.gas_station.upsert({
     *   create: {
     *     // ... data to create a Gas_station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gas_station we want to update
     *   }
     * })
    **/
    upsert<T extends gas_stationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gas_stationUpsertArgs<ExtArgs>>
    ): Prisma__gas_stationClient<$Result.GetResult<Prisma.$gas_stationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Gas_stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_stationCountArgs} args - Arguments to filter Gas_stations to count.
     * @example
     * // Count the number of Gas_stations
     * const count = await prisma.gas_station.count({
     *   where: {
     *     // ... the filter for the Gas_stations we want to count
     *   }
     * })
    **/
    count<T extends gas_stationCountArgs>(
      args?: Subset<T, gas_stationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gas_stationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gas_station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gas_stationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gas_stationAggregateArgs>(args: Subset<T, Gas_stationAggregateArgs>): Prisma.PrismaPromise<GetGas_stationAggregateType<T>>

    /**
     * Group by Gas_station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_stationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gas_stationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gas_stationGroupByArgs['orderBy'] }
        : { orderBy?: gas_stationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gas_stationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGas_stationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gas_station model
   */
  readonly fields: gas_stationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gas_station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gas_stationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the gas_station model
   */ 
  interface gas_stationFieldRefs {
    readonly gas_uuid: FieldRef<"gas_station", 'String'>
    readonly gas_fuel_type: FieldRef<"gas_station", 'String'>
    readonly gas_value: FieldRef<"gas_station", 'Float'>
    readonly gas_created_at: FieldRef<"gas_station", 'DateTime'>
    readonly gas_updated_at: FieldRef<"gas_station", 'DateTime'>
    readonly gas_ibm: FieldRef<"gas_station", 'String'>
    readonly gas_identifier: FieldRef<"gas_station", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gas_station findUnique
   */
  export type gas_stationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * Filter, which gas_station to fetch.
     */
    where: gas_stationWhereUniqueInput
  }

  /**
   * gas_station findUniqueOrThrow
   */
  export type gas_stationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * Filter, which gas_station to fetch.
     */
    where: gas_stationWhereUniqueInput
  }

  /**
   * gas_station findFirst
   */
  export type gas_stationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * Filter, which gas_station to fetch.
     */
    where?: gas_stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_stations to fetch.
     */
    orderBy?: gas_stationOrderByWithRelationInput | gas_stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gas_stations.
     */
    cursor?: gas_stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gas_stations.
     */
    distinct?: Gas_stationScalarFieldEnum | Gas_stationScalarFieldEnum[]
  }

  /**
   * gas_station findFirstOrThrow
   */
  export type gas_stationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * Filter, which gas_station to fetch.
     */
    where?: gas_stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_stations to fetch.
     */
    orderBy?: gas_stationOrderByWithRelationInput | gas_stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gas_stations.
     */
    cursor?: gas_stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gas_stations.
     */
    distinct?: Gas_stationScalarFieldEnum | Gas_stationScalarFieldEnum[]
  }

  /**
   * gas_station findMany
   */
  export type gas_stationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * Filter, which gas_stations to fetch.
     */
    where?: gas_stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_stations to fetch.
     */
    orderBy?: gas_stationOrderByWithRelationInput | gas_stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gas_stations.
     */
    cursor?: gas_stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_stations.
     */
    skip?: number
    distinct?: Gas_stationScalarFieldEnum | Gas_stationScalarFieldEnum[]
  }

  /**
   * gas_station create
   */
  export type gas_stationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * The data needed to create a gas_station.
     */
    data?: XOR<gas_stationCreateInput, gas_stationUncheckedCreateInput>
  }

  /**
   * gas_station createMany
   */
  export type gas_stationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gas_stations.
     */
    data: gas_stationCreateManyInput | gas_stationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gas_station createManyAndReturn
   */
  export type gas_stationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gas_stations.
     */
    data: gas_stationCreateManyInput | gas_stationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gas_station update
   */
  export type gas_stationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * The data needed to update a gas_station.
     */
    data: XOR<gas_stationUpdateInput, gas_stationUncheckedUpdateInput>
    /**
     * Choose, which gas_station to update.
     */
    where: gas_stationWhereUniqueInput
  }

  /**
   * gas_station updateMany
   */
  export type gas_stationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gas_stations.
     */
    data: XOR<gas_stationUpdateManyMutationInput, gas_stationUncheckedUpdateManyInput>
    /**
     * Filter which gas_stations to update
     */
    where?: gas_stationWhereInput
  }

  /**
   * gas_station upsert
   */
  export type gas_stationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * The filter to search for the gas_station to update in case it exists.
     */
    where: gas_stationWhereUniqueInput
    /**
     * In case the gas_station found by the `where` argument doesn't exist, create a new gas_station with this data.
     */
    create: XOR<gas_stationCreateInput, gas_stationUncheckedCreateInput>
    /**
     * In case the gas_station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gas_stationUpdateInput, gas_stationUncheckedUpdateInput>
  }

  /**
   * gas_station delete
   */
  export type gas_stationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
    /**
     * Filter which gas_station to delete.
     */
    where: gas_stationWhereUniqueInput
  }

  /**
   * gas_station deleteMany
   */
  export type gas_stationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gas_stations to delete
     */
    where?: gas_stationWhereInput
  }

  /**
   * gas_station without action
   */
  export type gas_stationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station
     */
    select?: gas_stationSelect<ExtArgs> | null
  }


  /**
   * Model ibm_info
   */

  export type AggregateIbm_info = {
    _count: Ibm_infoCountAggregateOutputType | null
    _avg: Ibm_infoAvgAggregateOutputType | null
    _sum: Ibm_infoSumAggregateOutputType | null
    _min: Ibm_infoMinAggregateOutputType | null
    _max: Ibm_infoMaxAggregateOutputType | null
  }

  export type Ibm_infoAvgAggregateOutputType = {
    lat: number | null
    long: number | null
  }

  export type Ibm_infoSumAggregateOutputType = {
    lat: number | null
    long: number | null
  }

  export type Ibm_infoMinAggregateOutputType = {
    ibm: string | null
    nomefantasia: string | null
    cnpj: string | null
    razaosocial: string | null
    cep: string | null
    lat: number | null
    long: number | null
    id: string | null
  }

  export type Ibm_infoMaxAggregateOutputType = {
    ibm: string | null
    nomefantasia: string | null
    cnpj: string | null
    razaosocial: string | null
    cep: string | null
    lat: number | null
    long: number | null
    id: string | null
  }

  export type Ibm_infoCountAggregateOutputType = {
    ibm: number
    nomefantasia: number
    cnpj: number
    razaosocial: number
    cep: number
    lat: number
    long: number
    id: number
    _all: number
  }


  export type Ibm_infoAvgAggregateInputType = {
    lat?: true
    long?: true
  }

  export type Ibm_infoSumAggregateInputType = {
    lat?: true
    long?: true
  }

  export type Ibm_infoMinAggregateInputType = {
    ibm?: true
    nomefantasia?: true
    cnpj?: true
    razaosocial?: true
    cep?: true
    lat?: true
    long?: true
    id?: true
  }

  export type Ibm_infoMaxAggregateInputType = {
    ibm?: true
    nomefantasia?: true
    cnpj?: true
    razaosocial?: true
    cep?: true
    lat?: true
    long?: true
    id?: true
  }

  export type Ibm_infoCountAggregateInputType = {
    ibm?: true
    nomefantasia?: true
    cnpj?: true
    razaosocial?: true
    cep?: true
    lat?: true
    long?: true
    id?: true
    _all?: true
  }

  export type Ibm_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ibm_info to aggregate.
     */
    where?: ibm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ibm_infos to fetch.
     */
    orderBy?: ibm_infoOrderByWithRelationInput | ibm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ibm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ibm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ibm_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ibm_infos
    **/
    _count?: true | Ibm_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ibm_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ibm_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ibm_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ibm_infoMaxAggregateInputType
  }

  export type GetIbm_infoAggregateType<T extends Ibm_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateIbm_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIbm_info[P]>
      : GetScalarType<T[P], AggregateIbm_info[P]>
  }




  export type ibm_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ibm_infoWhereInput
    orderBy?: ibm_infoOrderByWithAggregationInput | ibm_infoOrderByWithAggregationInput[]
    by: Ibm_infoScalarFieldEnum[] | Ibm_infoScalarFieldEnum
    having?: ibm_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ibm_infoCountAggregateInputType | true
    _avg?: Ibm_infoAvgAggregateInputType
    _sum?: Ibm_infoSumAggregateInputType
    _min?: Ibm_infoMinAggregateInputType
    _max?: Ibm_infoMaxAggregateInputType
  }

  export type Ibm_infoGroupByOutputType = {
    ibm: string | null
    nomefantasia: string | null
    cnpj: string | null
    razaosocial: string | null
    cep: string | null
    lat: number | null
    long: number | null
    id: string
    _count: Ibm_infoCountAggregateOutputType | null
    _avg: Ibm_infoAvgAggregateOutputType | null
    _sum: Ibm_infoSumAggregateOutputType | null
    _min: Ibm_infoMinAggregateOutputType | null
    _max: Ibm_infoMaxAggregateOutputType | null
  }

  type GetIbm_infoGroupByPayload<T extends ibm_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ibm_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ibm_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ibm_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Ibm_infoGroupByOutputType[P]>
        }
      >
    >


  export type ibm_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ibm?: boolean
    nomefantasia?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    cep?: boolean
    lat?: boolean
    long?: boolean
    id?: boolean
  }, ExtArgs["result"]["ibm_info"]>

  export type ibm_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ibm?: boolean
    nomefantasia?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    cep?: boolean
    lat?: boolean
    long?: boolean
    id?: boolean
  }, ExtArgs["result"]["ibm_info"]>

  export type ibm_infoSelectScalar = {
    ibm?: boolean
    nomefantasia?: boolean
    cnpj?: boolean
    razaosocial?: boolean
    cep?: boolean
    lat?: boolean
    long?: boolean
    id?: boolean
  }


  export type $ibm_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ibm_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ibm: string | null
      nomefantasia: string | null
      cnpj: string | null
      razaosocial: string | null
      cep: string | null
      lat: number | null
      long: number | null
      id: string
    }, ExtArgs["result"]["ibm_info"]>
    composites: {}
  }

  type ibm_infoGetPayload<S extends boolean | null | undefined | ibm_infoDefaultArgs> = $Result.GetResult<Prisma.$ibm_infoPayload, S>

  type ibm_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ibm_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ibm_infoCountAggregateInputType | true
    }

  export interface ibm_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ibm_info'], meta: { name: 'ibm_info' } }
    /**
     * Find zero or one Ibm_info that matches the filter.
     * @param {ibm_infoFindUniqueArgs} args - Arguments to find a Ibm_info
     * @example
     * // Get one Ibm_info
     * const ibm_info = await prisma.ibm_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ibm_infoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ibm_infoFindUniqueArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ibm_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ibm_infoFindUniqueOrThrowArgs} args - Arguments to find a Ibm_info
     * @example
     * // Get one Ibm_info
     * const ibm_info = await prisma.ibm_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ibm_infoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ibm_infoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ibm_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ibm_infoFindFirstArgs} args - Arguments to find a Ibm_info
     * @example
     * // Get one Ibm_info
     * const ibm_info = await prisma.ibm_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ibm_infoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ibm_infoFindFirstArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ibm_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ibm_infoFindFirstOrThrowArgs} args - Arguments to find a Ibm_info
     * @example
     * // Get one Ibm_info
     * const ibm_info = await prisma.ibm_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ibm_infoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ibm_infoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ibm_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ibm_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ibm_infos
     * const ibm_infos = await prisma.ibm_info.findMany()
     * 
     * // Get first 10 Ibm_infos
     * const ibm_infos = await prisma.ibm_info.findMany({ take: 10 })
     * 
     * // Only select the `ibm`
     * const ibm_infoWithIbmOnly = await prisma.ibm_info.findMany({ select: { ibm: true } })
     * 
    **/
    findMany<T extends ibm_infoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ibm_infoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ibm_info.
     * @param {ibm_infoCreateArgs} args - Arguments to create a Ibm_info.
     * @example
     * // Create one Ibm_info
     * const Ibm_info = await prisma.ibm_info.create({
     *   data: {
     *     // ... data to create a Ibm_info
     *   }
     * })
     * 
    **/
    create<T extends ibm_infoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ibm_infoCreateArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ibm_infos.
     * @param {ibm_infoCreateManyArgs} args - Arguments to create many Ibm_infos.
     * @example
     * // Create many Ibm_infos
     * const ibm_info = await prisma.ibm_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ibm_infoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ibm_infoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ibm_infos and returns the data saved in the database.
     * @param {ibm_infoCreateManyAndReturnArgs} args - Arguments to create many Ibm_infos.
     * @example
     * // Create many Ibm_infos
     * const ibm_info = await prisma.ibm_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ibm_infos and only return the `ibm`
     * const ibm_infoWithIbmOnly = await prisma.ibm_info.createManyAndReturn({ 
     *   select: { ibm: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ibm_infoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ibm_infoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Ibm_info.
     * @param {ibm_infoDeleteArgs} args - Arguments to delete one Ibm_info.
     * @example
     * // Delete one Ibm_info
     * const Ibm_info = await prisma.ibm_info.delete({
     *   where: {
     *     // ... filter to delete one Ibm_info
     *   }
     * })
     * 
    **/
    delete<T extends ibm_infoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ibm_infoDeleteArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ibm_info.
     * @param {ibm_infoUpdateArgs} args - Arguments to update one Ibm_info.
     * @example
     * // Update one Ibm_info
     * const ibm_info = await prisma.ibm_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ibm_infoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ibm_infoUpdateArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ibm_infos.
     * @param {ibm_infoDeleteManyArgs} args - Arguments to filter Ibm_infos to delete.
     * @example
     * // Delete a few Ibm_infos
     * const { count } = await prisma.ibm_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ibm_infoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ibm_infoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ibm_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ibm_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ibm_infos
     * const ibm_info = await prisma.ibm_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ibm_infoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ibm_infoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ibm_info.
     * @param {ibm_infoUpsertArgs} args - Arguments to update or create a Ibm_info.
     * @example
     * // Update or create a Ibm_info
     * const ibm_info = await prisma.ibm_info.upsert({
     *   create: {
     *     // ... data to create a Ibm_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ibm_info we want to update
     *   }
     * })
    **/
    upsert<T extends ibm_infoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ibm_infoUpsertArgs<ExtArgs>>
    ): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ibm_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ibm_infoCountArgs} args - Arguments to filter Ibm_infos to count.
     * @example
     * // Count the number of Ibm_infos
     * const count = await prisma.ibm_info.count({
     *   where: {
     *     // ... the filter for the Ibm_infos we want to count
     *   }
     * })
    **/
    count<T extends ibm_infoCountArgs>(
      args?: Subset<T, ibm_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ibm_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ibm_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ibm_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ibm_infoAggregateArgs>(args: Subset<T, Ibm_infoAggregateArgs>): Prisma.PrismaPromise<GetIbm_infoAggregateType<T>>

    /**
     * Group by Ibm_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ibm_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ibm_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ibm_infoGroupByArgs['orderBy'] }
        : { orderBy?: ibm_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ibm_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIbm_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ibm_info model
   */
  readonly fields: ibm_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ibm_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ibm_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ibm_info model
   */ 
  interface ibm_infoFieldRefs {
    readonly ibm: FieldRef<"ibm_info", 'String'>
    readonly nomefantasia: FieldRef<"ibm_info", 'String'>
    readonly cnpj: FieldRef<"ibm_info", 'String'>
    readonly razaosocial: FieldRef<"ibm_info", 'String'>
    readonly cep: FieldRef<"ibm_info", 'String'>
    readonly lat: FieldRef<"ibm_info", 'Float'>
    readonly long: FieldRef<"ibm_info", 'Float'>
    readonly id: FieldRef<"ibm_info", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ibm_info findUnique
   */
  export type ibm_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Filter, which ibm_info to fetch.
     */
    where: ibm_infoWhereUniqueInput
  }

  /**
   * ibm_info findUniqueOrThrow
   */
  export type ibm_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Filter, which ibm_info to fetch.
     */
    where: ibm_infoWhereUniqueInput
  }

  /**
   * ibm_info findFirst
   */
  export type ibm_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Filter, which ibm_info to fetch.
     */
    where?: ibm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ibm_infos to fetch.
     */
    orderBy?: ibm_infoOrderByWithRelationInput | ibm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ibm_infos.
     */
    cursor?: ibm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ibm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ibm_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ibm_infos.
     */
    distinct?: Ibm_infoScalarFieldEnum | Ibm_infoScalarFieldEnum[]
  }

  /**
   * ibm_info findFirstOrThrow
   */
  export type ibm_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Filter, which ibm_info to fetch.
     */
    where?: ibm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ibm_infos to fetch.
     */
    orderBy?: ibm_infoOrderByWithRelationInput | ibm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ibm_infos.
     */
    cursor?: ibm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ibm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ibm_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ibm_infos.
     */
    distinct?: Ibm_infoScalarFieldEnum | Ibm_infoScalarFieldEnum[]
  }

  /**
   * ibm_info findMany
   */
  export type ibm_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Filter, which ibm_infos to fetch.
     */
    where?: ibm_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ibm_infos to fetch.
     */
    orderBy?: ibm_infoOrderByWithRelationInput | ibm_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ibm_infos.
     */
    cursor?: ibm_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ibm_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ibm_infos.
     */
    skip?: number
    distinct?: Ibm_infoScalarFieldEnum | Ibm_infoScalarFieldEnum[]
  }

  /**
   * ibm_info create
   */
  export type ibm_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a ibm_info.
     */
    data?: XOR<ibm_infoCreateInput, ibm_infoUncheckedCreateInput>
  }

  /**
   * ibm_info createMany
   */
  export type ibm_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ibm_infos.
     */
    data: ibm_infoCreateManyInput | ibm_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ibm_info createManyAndReturn
   */
  export type ibm_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ibm_infos.
     */
    data: ibm_infoCreateManyInput | ibm_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ibm_info update
   */
  export type ibm_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a ibm_info.
     */
    data: XOR<ibm_infoUpdateInput, ibm_infoUncheckedUpdateInput>
    /**
     * Choose, which ibm_info to update.
     */
    where: ibm_infoWhereUniqueInput
  }

  /**
   * ibm_info updateMany
   */
  export type ibm_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ibm_infos.
     */
    data: XOR<ibm_infoUpdateManyMutationInput, ibm_infoUncheckedUpdateManyInput>
    /**
     * Filter which ibm_infos to update
     */
    where?: ibm_infoWhereInput
  }

  /**
   * ibm_info upsert
   */
  export type ibm_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the ibm_info to update in case it exists.
     */
    where: ibm_infoWhereUniqueInput
    /**
     * In case the ibm_info found by the `where` argument doesn't exist, create a new ibm_info with this data.
     */
    create: XOR<ibm_infoCreateInput, ibm_infoUncheckedCreateInput>
    /**
     * In case the ibm_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ibm_infoUpdateInput, ibm_infoUncheckedUpdateInput>
  }

  /**
   * ibm_info delete
   */
  export type ibm_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Filter which ibm_info to delete.
     */
    where: ibm_infoWhereUniqueInput
  }

  /**
   * ibm_info deleteMany
   */
  export type ibm_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ibm_infos to delete
     */
    where?: ibm_infoWhereInput
  }

  /**
   * ibm_info without action
   */
  export type ibm_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
  }


  /**
   * Model posto_signal
   */

  export type AggregatePosto_signal = {
    _count: Posto_signalCountAggregateOutputType | null
    _avg: Posto_signalAvgAggregateOutputType | null
    _sum: Posto_signalSumAggregateOutputType | null
    _min: Posto_signalMinAggregateOutputType | null
    _max: Posto_signalMaxAggregateOutputType | null
  }

  export type Posto_signalAvgAggregateOutputType = {
    vol_sold: number | null
    vol_rate: number | null
    invoicing: number | null
    invoice_rate: number | null
  }

  export type Posto_signalSumAggregateOutputType = {
    vol_sold: number | null
    vol_rate: number | null
    invoicing: number | null
    invoice_rate: number | null
  }

  export type Posto_signalMinAggregateOutputType = {
    table_id: string | null
    posto_id: string | null
    vol_sold: number | null
    vol_rate: number | null
    vol_alert: string | null
    invoicing: number | null
    invoice_rate: number | null
    invoice_alert: string | null
    created_at: Date | null
  }

  export type Posto_signalMaxAggregateOutputType = {
    table_id: string | null
    posto_id: string | null
    vol_sold: number | null
    vol_rate: number | null
    vol_alert: string | null
    invoicing: number | null
    invoice_rate: number | null
    invoice_alert: string | null
    created_at: Date | null
  }

  export type Posto_signalCountAggregateOutputType = {
    table_id: number
    posto_id: number
    vol_sold: number
    vol_rate: number
    vol_alert: number
    invoicing: number
    invoice_rate: number
    invoice_alert: number
    created_at: number
    _all: number
  }


  export type Posto_signalAvgAggregateInputType = {
    vol_sold?: true
    vol_rate?: true
    invoicing?: true
    invoice_rate?: true
  }

  export type Posto_signalSumAggregateInputType = {
    vol_sold?: true
    vol_rate?: true
    invoicing?: true
    invoice_rate?: true
  }

  export type Posto_signalMinAggregateInputType = {
    table_id?: true
    posto_id?: true
    vol_sold?: true
    vol_rate?: true
    vol_alert?: true
    invoicing?: true
    invoice_rate?: true
    invoice_alert?: true
    created_at?: true
  }

  export type Posto_signalMaxAggregateInputType = {
    table_id?: true
    posto_id?: true
    vol_sold?: true
    vol_rate?: true
    vol_alert?: true
    invoicing?: true
    invoice_rate?: true
    invoice_alert?: true
    created_at?: true
  }

  export type Posto_signalCountAggregateInputType = {
    table_id?: true
    posto_id?: true
    vol_sold?: true
    vol_rate?: true
    vol_alert?: true
    invoicing?: true
    invoice_rate?: true
    invoice_alert?: true
    created_at?: true
    _all?: true
  }

  export type Posto_signalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posto_signal to aggregate.
     */
    where?: posto_signalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posto_signals to fetch.
     */
    orderBy?: posto_signalOrderByWithRelationInput | posto_signalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posto_signalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posto_signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posto_signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posto_signals
    **/
    _count?: true | Posto_signalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Posto_signalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Posto_signalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Posto_signalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Posto_signalMaxAggregateInputType
  }

  export type GetPosto_signalAggregateType<T extends Posto_signalAggregateArgs> = {
        [P in keyof T & keyof AggregatePosto_signal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosto_signal[P]>
      : GetScalarType<T[P], AggregatePosto_signal[P]>
  }




  export type posto_signalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posto_signalWhereInput
    orderBy?: posto_signalOrderByWithAggregationInput | posto_signalOrderByWithAggregationInput[]
    by: Posto_signalScalarFieldEnum[] | Posto_signalScalarFieldEnum
    having?: posto_signalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Posto_signalCountAggregateInputType | true
    _avg?: Posto_signalAvgAggregateInputType
    _sum?: Posto_signalSumAggregateInputType
    _min?: Posto_signalMinAggregateInputType
    _max?: Posto_signalMaxAggregateInputType
  }

  export type Posto_signalGroupByOutputType = {
    table_id: string
    posto_id: string | null
    vol_sold: number | null
    vol_rate: number | null
    vol_alert: string | null
    invoicing: number | null
    invoice_rate: number | null
    invoice_alert: string | null
    created_at: Date
    _count: Posto_signalCountAggregateOutputType | null
    _avg: Posto_signalAvgAggregateOutputType | null
    _sum: Posto_signalSumAggregateOutputType | null
    _min: Posto_signalMinAggregateOutputType | null
    _max: Posto_signalMaxAggregateOutputType | null
  }

  type GetPosto_signalGroupByPayload<T extends posto_signalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Posto_signalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Posto_signalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Posto_signalGroupByOutputType[P]>
            : GetScalarType<T[P], Posto_signalGroupByOutputType[P]>
        }
      >
    >


  export type posto_signalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    table_id?: boolean
    posto_id?: boolean
    vol_sold?: boolean
    vol_rate?: boolean
    vol_alert?: boolean
    invoicing?: boolean
    invoice_rate?: boolean
    invoice_alert?: boolean
    created_at?: boolean
    rd_posto?: boolean | posto_signal$rd_postoArgs<ExtArgs>
  }, ExtArgs["result"]["posto_signal"]>

  export type posto_signalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    table_id?: boolean
    posto_id?: boolean
    vol_sold?: boolean
    vol_rate?: boolean
    vol_alert?: boolean
    invoicing?: boolean
    invoice_rate?: boolean
    invoice_alert?: boolean
    created_at?: boolean
    rd_posto?: boolean | posto_signal$rd_postoArgs<ExtArgs>
  }, ExtArgs["result"]["posto_signal"]>

  export type posto_signalSelectScalar = {
    table_id?: boolean
    posto_id?: boolean
    vol_sold?: boolean
    vol_rate?: boolean
    vol_alert?: boolean
    invoicing?: boolean
    invoice_rate?: boolean
    invoice_alert?: boolean
    created_at?: boolean
  }

  export type posto_signalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rd_posto?: boolean | posto_signal$rd_postoArgs<ExtArgs>
  }
  export type posto_signalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rd_posto?: boolean | posto_signal$rd_postoArgs<ExtArgs>
  }

  export type $posto_signalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posto_signal"
    objects: {
      rd_posto: Prisma.$rd_postoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      table_id: string
      posto_id: string | null
      vol_sold: number | null
      vol_rate: number | null
      vol_alert: string | null
      invoicing: number | null
      invoice_rate: number | null
      invoice_alert: string | null
      created_at: Date
    }, ExtArgs["result"]["posto_signal"]>
    composites: {}
  }

  type posto_signalGetPayload<S extends boolean | null | undefined | posto_signalDefaultArgs> = $Result.GetResult<Prisma.$posto_signalPayload, S>

  type posto_signalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<posto_signalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Posto_signalCountAggregateInputType | true
    }

  export interface posto_signalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posto_signal'], meta: { name: 'posto_signal' } }
    /**
     * Find zero or one Posto_signal that matches the filter.
     * @param {posto_signalFindUniqueArgs} args - Arguments to find a Posto_signal
     * @example
     * // Get one Posto_signal
     * const posto_signal = await prisma.posto_signal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends posto_signalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, posto_signalFindUniqueArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Posto_signal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {posto_signalFindUniqueOrThrowArgs} args - Arguments to find a Posto_signal
     * @example
     * // Get one Posto_signal
     * const posto_signal = await prisma.posto_signal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends posto_signalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, posto_signalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Posto_signal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posto_signalFindFirstArgs} args - Arguments to find a Posto_signal
     * @example
     * // Get one Posto_signal
     * const posto_signal = await prisma.posto_signal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends posto_signalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, posto_signalFindFirstArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Posto_signal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posto_signalFindFirstOrThrowArgs} args - Arguments to find a Posto_signal
     * @example
     * // Get one Posto_signal
     * const posto_signal = await prisma.posto_signal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends posto_signalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, posto_signalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posto_signals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posto_signalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posto_signals
     * const posto_signals = await prisma.posto_signal.findMany()
     * 
     * // Get first 10 Posto_signals
     * const posto_signals = await prisma.posto_signal.findMany({ take: 10 })
     * 
     * // Only select the `table_id`
     * const posto_signalWithTable_idOnly = await prisma.posto_signal.findMany({ select: { table_id: true } })
     * 
    **/
    findMany<T extends posto_signalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, posto_signalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Posto_signal.
     * @param {posto_signalCreateArgs} args - Arguments to create a Posto_signal.
     * @example
     * // Create one Posto_signal
     * const Posto_signal = await prisma.posto_signal.create({
     *   data: {
     *     // ... data to create a Posto_signal
     *   }
     * })
     * 
    **/
    create<T extends posto_signalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, posto_signalCreateArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posto_signals.
     * @param {posto_signalCreateManyArgs} args - Arguments to create many Posto_signals.
     * @example
     * // Create many Posto_signals
     * const posto_signal = await prisma.posto_signal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends posto_signalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, posto_signalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posto_signals and returns the data saved in the database.
     * @param {posto_signalCreateManyAndReturnArgs} args - Arguments to create many Posto_signals.
     * @example
     * // Create many Posto_signals
     * const posto_signal = await prisma.posto_signal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posto_signals and only return the `table_id`
     * const posto_signalWithTable_idOnly = await prisma.posto_signal.createManyAndReturn({ 
     *   select: { table_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends posto_signalCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, posto_signalCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Posto_signal.
     * @param {posto_signalDeleteArgs} args - Arguments to delete one Posto_signal.
     * @example
     * // Delete one Posto_signal
     * const Posto_signal = await prisma.posto_signal.delete({
     *   where: {
     *     // ... filter to delete one Posto_signal
     *   }
     * })
     * 
    **/
    delete<T extends posto_signalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, posto_signalDeleteArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Posto_signal.
     * @param {posto_signalUpdateArgs} args - Arguments to update one Posto_signal.
     * @example
     * // Update one Posto_signal
     * const posto_signal = await prisma.posto_signal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends posto_signalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, posto_signalUpdateArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posto_signals.
     * @param {posto_signalDeleteManyArgs} args - Arguments to filter Posto_signals to delete.
     * @example
     * // Delete a few Posto_signals
     * const { count } = await prisma.posto_signal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends posto_signalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, posto_signalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posto_signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posto_signalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posto_signals
     * const posto_signal = await prisma.posto_signal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends posto_signalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, posto_signalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posto_signal.
     * @param {posto_signalUpsertArgs} args - Arguments to update or create a Posto_signal.
     * @example
     * // Update or create a Posto_signal
     * const posto_signal = await prisma.posto_signal.upsert({
     *   create: {
     *     // ... data to create a Posto_signal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posto_signal we want to update
     *   }
     * })
    **/
    upsert<T extends posto_signalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, posto_signalUpsertArgs<ExtArgs>>
    ): Prisma__posto_signalClient<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posto_signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posto_signalCountArgs} args - Arguments to filter Posto_signals to count.
     * @example
     * // Count the number of Posto_signals
     * const count = await prisma.posto_signal.count({
     *   where: {
     *     // ... the filter for the Posto_signals we want to count
     *   }
     * })
    **/
    count<T extends posto_signalCountArgs>(
      args?: Subset<T, posto_signalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Posto_signalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posto_signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Posto_signalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Posto_signalAggregateArgs>(args: Subset<T, Posto_signalAggregateArgs>): Prisma.PrismaPromise<GetPosto_signalAggregateType<T>>

    /**
     * Group by Posto_signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posto_signalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends posto_signalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posto_signalGroupByArgs['orderBy'] }
        : { orderBy?: posto_signalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, posto_signalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosto_signalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posto_signal model
   */
  readonly fields: posto_signalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posto_signal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posto_signalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rd_posto<T extends posto_signal$rd_postoArgs<ExtArgs> = {}>(args?: Subset<T, posto_signal$rd_postoArgs<ExtArgs>>): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the posto_signal model
   */ 
  interface posto_signalFieldRefs {
    readonly table_id: FieldRef<"posto_signal", 'String'>
    readonly posto_id: FieldRef<"posto_signal", 'String'>
    readonly vol_sold: FieldRef<"posto_signal", 'Float'>
    readonly vol_rate: FieldRef<"posto_signal", 'Float'>
    readonly vol_alert: FieldRef<"posto_signal", 'String'>
    readonly invoicing: FieldRef<"posto_signal", 'Float'>
    readonly invoice_rate: FieldRef<"posto_signal", 'Float'>
    readonly invoice_alert: FieldRef<"posto_signal", 'String'>
    readonly created_at: FieldRef<"posto_signal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * posto_signal findUnique
   */
  export type posto_signalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * Filter, which posto_signal to fetch.
     */
    where: posto_signalWhereUniqueInput
  }

  /**
   * posto_signal findUniqueOrThrow
   */
  export type posto_signalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * Filter, which posto_signal to fetch.
     */
    where: posto_signalWhereUniqueInput
  }

  /**
   * posto_signal findFirst
   */
  export type posto_signalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * Filter, which posto_signal to fetch.
     */
    where?: posto_signalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posto_signals to fetch.
     */
    orderBy?: posto_signalOrderByWithRelationInput | posto_signalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posto_signals.
     */
    cursor?: posto_signalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posto_signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posto_signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posto_signals.
     */
    distinct?: Posto_signalScalarFieldEnum | Posto_signalScalarFieldEnum[]
  }

  /**
   * posto_signal findFirstOrThrow
   */
  export type posto_signalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * Filter, which posto_signal to fetch.
     */
    where?: posto_signalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posto_signals to fetch.
     */
    orderBy?: posto_signalOrderByWithRelationInput | posto_signalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posto_signals.
     */
    cursor?: posto_signalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posto_signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posto_signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posto_signals.
     */
    distinct?: Posto_signalScalarFieldEnum | Posto_signalScalarFieldEnum[]
  }

  /**
   * posto_signal findMany
   */
  export type posto_signalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * Filter, which posto_signals to fetch.
     */
    where?: posto_signalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posto_signals to fetch.
     */
    orderBy?: posto_signalOrderByWithRelationInput | posto_signalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posto_signals.
     */
    cursor?: posto_signalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posto_signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posto_signals.
     */
    skip?: number
    distinct?: Posto_signalScalarFieldEnum | Posto_signalScalarFieldEnum[]
  }

  /**
   * posto_signal create
   */
  export type posto_signalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * The data needed to create a posto_signal.
     */
    data?: XOR<posto_signalCreateInput, posto_signalUncheckedCreateInput>
  }

  /**
   * posto_signal createMany
   */
  export type posto_signalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posto_signals.
     */
    data: posto_signalCreateManyInput | posto_signalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posto_signal createManyAndReturn
   */
  export type posto_signalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many posto_signals.
     */
    data: posto_signalCreateManyInput | posto_signalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posto_signal update
   */
  export type posto_signalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * The data needed to update a posto_signal.
     */
    data: XOR<posto_signalUpdateInput, posto_signalUncheckedUpdateInput>
    /**
     * Choose, which posto_signal to update.
     */
    where: posto_signalWhereUniqueInput
  }

  /**
   * posto_signal updateMany
   */
  export type posto_signalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posto_signals.
     */
    data: XOR<posto_signalUpdateManyMutationInput, posto_signalUncheckedUpdateManyInput>
    /**
     * Filter which posto_signals to update
     */
    where?: posto_signalWhereInput
  }

  /**
   * posto_signal upsert
   */
  export type posto_signalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * The filter to search for the posto_signal to update in case it exists.
     */
    where: posto_signalWhereUniqueInput
    /**
     * In case the posto_signal found by the `where` argument doesn't exist, create a new posto_signal with this data.
     */
    create: XOR<posto_signalCreateInput, posto_signalUncheckedCreateInput>
    /**
     * In case the posto_signal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posto_signalUpdateInput, posto_signalUncheckedUpdateInput>
  }

  /**
   * posto_signal delete
   */
  export type posto_signalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    /**
     * Filter which posto_signal to delete.
     */
    where: posto_signalWhereUniqueInput
  }

  /**
   * posto_signal deleteMany
   */
  export type posto_signalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posto_signals to delete
     */
    where?: posto_signalWhereInput
  }

  /**
   * posto_signal.rd_posto
   */
  export type posto_signal$rd_postoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    where?: rd_postoWhereInput
  }

  /**
   * posto_signal without action
   */
  export type posto_signalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
  }


  /**
   * Model rd_posto
   */

  export type AggregateRd_posto = {
    _count: Rd_postoCountAggregateOutputType | null
    _min: Rd_postoMinAggregateOutputType | null
    _max: Rd_postoMaxAggregateOutputType | null
  }

  export type Rd_postoMinAggregateOutputType = {
    posto_uuid: string | null
    posto_name: string | null
  }

  export type Rd_postoMaxAggregateOutputType = {
    posto_uuid: string | null
    posto_name: string | null
  }

  export type Rd_postoCountAggregateOutputType = {
    posto_uuid: number
    posto_name: number
    _all: number
  }


  export type Rd_postoMinAggregateInputType = {
    posto_uuid?: true
    posto_name?: true
  }

  export type Rd_postoMaxAggregateInputType = {
    posto_uuid?: true
    posto_name?: true
  }

  export type Rd_postoCountAggregateInputType = {
    posto_uuid?: true
    posto_name?: true
    _all?: true
  }

  export type Rd_postoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rd_posto to aggregate.
     */
    where?: rd_postoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rd_postos to fetch.
     */
    orderBy?: rd_postoOrderByWithRelationInput | rd_postoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rd_postoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rd_postos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rd_postos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rd_postos
    **/
    _count?: true | Rd_postoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rd_postoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rd_postoMaxAggregateInputType
  }

  export type GetRd_postoAggregateType<T extends Rd_postoAggregateArgs> = {
        [P in keyof T & keyof AggregateRd_posto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRd_posto[P]>
      : GetScalarType<T[P], AggregateRd_posto[P]>
  }




  export type rd_postoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rd_postoWhereInput
    orderBy?: rd_postoOrderByWithAggregationInput | rd_postoOrderByWithAggregationInput[]
    by: Rd_postoScalarFieldEnum[] | Rd_postoScalarFieldEnum
    having?: rd_postoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rd_postoCountAggregateInputType | true
    _min?: Rd_postoMinAggregateInputType
    _max?: Rd_postoMaxAggregateInputType
  }

  export type Rd_postoGroupByOutputType = {
    posto_uuid: string
    posto_name: string | null
    _count: Rd_postoCountAggregateOutputType | null
    _min: Rd_postoMinAggregateOutputType | null
    _max: Rd_postoMaxAggregateOutputType | null
  }

  type GetRd_postoGroupByPayload<T extends rd_postoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rd_postoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rd_postoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rd_postoGroupByOutputType[P]>
            : GetScalarType<T[P], Rd_postoGroupByOutputType[P]>
        }
      >
    >


  export type rd_postoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    posto_uuid?: boolean
    posto_name?: boolean
    posto_signal?: boolean | rd_posto$posto_signalArgs<ExtArgs>
    _count?: boolean | Rd_postoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rd_posto"]>

  export type rd_postoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    posto_uuid?: boolean
    posto_name?: boolean
  }, ExtArgs["result"]["rd_posto"]>

  export type rd_postoSelectScalar = {
    posto_uuid?: boolean
    posto_name?: boolean
  }

  export type rd_postoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posto_signal?: boolean | rd_posto$posto_signalArgs<ExtArgs>
    _count?: boolean | Rd_postoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rd_postoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rd_postoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rd_posto"
    objects: {
      posto_signal: Prisma.$posto_signalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      posto_uuid: string
      posto_name: string | null
    }, ExtArgs["result"]["rd_posto"]>
    composites: {}
  }

  type rd_postoGetPayload<S extends boolean | null | undefined | rd_postoDefaultArgs> = $Result.GetResult<Prisma.$rd_postoPayload, S>

  type rd_postoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rd_postoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rd_postoCountAggregateInputType | true
    }

  export interface rd_postoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rd_posto'], meta: { name: 'rd_posto' } }
    /**
     * Find zero or one Rd_posto that matches the filter.
     * @param {rd_postoFindUniqueArgs} args - Arguments to find a Rd_posto
     * @example
     * // Get one Rd_posto
     * const rd_posto = await prisma.rd_posto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rd_postoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rd_postoFindUniqueArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rd_posto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rd_postoFindUniqueOrThrowArgs} args - Arguments to find a Rd_posto
     * @example
     * // Get one Rd_posto
     * const rd_posto = await prisma.rd_posto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rd_postoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rd_postoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rd_posto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rd_postoFindFirstArgs} args - Arguments to find a Rd_posto
     * @example
     * // Get one Rd_posto
     * const rd_posto = await prisma.rd_posto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rd_postoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rd_postoFindFirstArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rd_posto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rd_postoFindFirstOrThrowArgs} args - Arguments to find a Rd_posto
     * @example
     * // Get one Rd_posto
     * const rd_posto = await prisma.rd_posto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rd_postoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rd_postoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Rd_postos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rd_postoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rd_postos
     * const rd_postos = await prisma.rd_posto.findMany()
     * 
     * // Get first 10 Rd_postos
     * const rd_postos = await prisma.rd_posto.findMany({ take: 10 })
     * 
     * // Only select the `posto_uuid`
     * const rd_postoWithPosto_uuidOnly = await prisma.rd_posto.findMany({ select: { posto_uuid: true } })
     * 
    **/
    findMany<T extends rd_postoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rd_postoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rd_posto.
     * @param {rd_postoCreateArgs} args - Arguments to create a Rd_posto.
     * @example
     * // Create one Rd_posto
     * const Rd_posto = await prisma.rd_posto.create({
     *   data: {
     *     // ... data to create a Rd_posto
     *   }
     * })
     * 
    **/
    create<T extends rd_postoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rd_postoCreateArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Rd_postos.
     * @param {rd_postoCreateManyArgs} args - Arguments to create many Rd_postos.
     * @example
     * // Create many Rd_postos
     * const rd_posto = await prisma.rd_posto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends rd_postoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rd_postoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rd_postos and returns the data saved in the database.
     * @param {rd_postoCreateManyAndReturnArgs} args - Arguments to create many Rd_postos.
     * @example
     * // Create many Rd_postos
     * const rd_posto = await prisma.rd_posto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rd_postos and only return the `posto_uuid`
     * const rd_postoWithPosto_uuidOnly = await prisma.rd_posto.createManyAndReturn({ 
     *   select: { posto_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends rd_postoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, rd_postoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Rd_posto.
     * @param {rd_postoDeleteArgs} args - Arguments to delete one Rd_posto.
     * @example
     * // Delete one Rd_posto
     * const Rd_posto = await prisma.rd_posto.delete({
     *   where: {
     *     // ... filter to delete one Rd_posto
     *   }
     * })
     * 
    **/
    delete<T extends rd_postoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rd_postoDeleteArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rd_posto.
     * @param {rd_postoUpdateArgs} args - Arguments to update one Rd_posto.
     * @example
     * // Update one Rd_posto
     * const rd_posto = await prisma.rd_posto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rd_postoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rd_postoUpdateArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Rd_postos.
     * @param {rd_postoDeleteManyArgs} args - Arguments to filter Rd_postos to delete.
     * @example
     * // Delete a few Rd_postos
     * const { count } = await prisma.rd_posto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rd_postoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rd_postoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rd_postos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rd_postoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rd_postos
     * const rd_posto = await prisma.rd_posto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rd_postoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rd_postoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rd_posto.
     * @param {rd_postoUpsertArgs} args - Arguments to update or create a Rd_posto.
     * @example
     * // Update or create a Rd_posto
     * const rd_posto = await prisma.rd_posto.upsert({
     *   create: {
     *     // ... data to create a Rd_posto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rd_posto we want to update
     *   }
     * })
    **/
    upsert<T extends rd_postoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rd_postoUpsertArgs<ExtArgs>>
    ): Prisma__rd_postoClient<$Result.GetResult<Prisma.$rd_postoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Rd_postos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rd_postoCountArgs} args - Arguments to filter Rd_postos to count.
     * @example
     * // Count the number of Rd_postos
     * const count = await prisma.rd_posto.count({
     *   where: {
     *     // ... the filter for the Rd_postos we want to count
     *   }
     * })
    **/
    count<T extends rd_postoCountArgs>(
      args?: Subset<T, rd_postoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rd_postoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rd_posto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rd_postoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rd_postoAggregateArgs>(args: Subset<T, Rd_postoAggregateArgs>): Prisma.PrismaPromise<GetRd_postoAggregateType<T>>

    /**
     * Group by Rd_posto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rd_postoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rd_postoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rd_postoGroupByArgs['orderBy'] }
        : { orderBy?: rd_postoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rd_postoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRd_postoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rd_posto model
   */
  readonly fields: rd_postoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rd_posto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rd_postoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posto_signal<T extends rd_posto$posto_signalArgs<ExtArgs> = {}>(args?: Subset<T, rd_posto$posto_signalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posto_signalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the rd_posto model
   */ 
  interface rd_postoFieldRefs {
    readonly posto_uuid: FieldRef<"rd_posto", 'String'>
    readonly posto_name: FieldRef<"rd_posto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rd_posto findUnique
   */
  export type rd_postoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * Filter, which rd_posto to fetch.
     */
    where: rd_postoWhereUniqueInput
  }

  /**
   * rd_posto findUniqueOrThrow
   */
  export type rd_postoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * Filter, which rd_posto to fetch.
     */
    where: rd_postoWhereUniqueInput
  }

  /**
   * rd_posto findFirst
   */
  export type rd_postoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * Filter, which rd_posto to fetch.
     */
    where?: rd_postoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rd_postos to fetch.
     */
    orderBy?: rd_postoOrderByWithRelationInput | rd_postoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rd_postos.
     */
    cursor?: rd_postoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rd_postos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rd_postos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rd_postos.
     */
    distinct?: Rd_postoScalarFieldEnum | Rd_postoScalarFieldEnum[]
  }

  /**
   * rd_posto findFirstOrThrow
   */
  export type rd_postoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * Filter, which rd_posto to fetch.
     */
    where?: rd_postoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rd_postos to fetch.
     */
    orderBy?: rd_postoOrderByWithRelationInput | rd_postoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rd_postos.
     */
    cursor?: rd_postoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rd_postos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rd_postos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rd_postos.
     */
    distinct?: Rd_postoScalarFieldEnum | Rd_postoScalarFieldEnum[]
  }

  /**
   * rd_posto findMany
   */
  export type rd_postoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * Filter, which rd_postos to fetch.
     */
    where?: rd_postoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rd_postos to fetch.
     */
    orderBy?: rd_postoOrderByWithRelationInput | rd_postoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rd_postos.
     */
    cursor?: rd_postoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rd_postos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rd_postos.
     */
    skip?: number
    distinct?: Rd_postoScalarFieldEnum | Rd_postoScalarFieldEnum[]
  }

  /**
   * rd_posto create
   */
  export type rd_postoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * The data needed to create a rd_posto.
     */
    data?: XOR<rd_postoCreateInput, rd_postoUncheckedCreateInput>
  }

  /**
   * rd_posto createMany
   */
  export type rd_postoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rd_postos.
     */
    data: rd_postoCreateManyInput | rd_postoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rd_posto createManyAndReturn
   */
  export type rd_postoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many rd_postos.
     */
    data: rd_postoCreateManyInput | rd_postoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rd_posto update
   */
  export type rd_postoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * The data needed to update a rd_posto.
     */
    data: XOR<rd_postoUpdateInput, rd_postoUncheckedUpdateInput>
    /**
     * Choose, which rd_posto to update.
     */
    where: rd_postoWhereUniqueInput
  }

  /**
   * rd_posto updateMany
   */
  export type rd_postoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rd_postos.
     */
    data: XOR<rd_postoUpdateManyMutationInput, rd_postoUncheckedUpdateManyInput>
    /**
     * Filter which rd_postos to update
     */
    where?: rd_postoWhereInput
  }

  /**
   * rd_posto upsert
   */
  export type rd_postoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * The filter to search for the rd_posto to update in case it exists.
     */
    where: rd_postoWhereUniqueInput
    /**
     * In case the rd_posto found by the `where` argument doesn't exist, create a new rd_posto with this data.
     */
    create: XOR<rd_postoCreateInput, rd_postoUncheckedCreateInput>
    /**
     * In case the rd_posto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rd_postoUpdateInput, rd_postoUncheckedUpdateInput>
  }

  /**
   * rd_posto delete
   */
  export type rd_postoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
    /**
     * Filter which rd_posto to delete.
     */
    where: rd_postoWhereUniqueInput
  }

  /**
   * rd_posto deleteMany
   */
  export type rd_postoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rd_postos to delete
     */
    where?: rd_postoWhereInput
  }

  /**
   * rd_posto.posto_signal
   */
  export type rd_posto$posto_signalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posto_signal
     */
    select?: posto_signalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posto_signalInclude<ExtArgs> | null
    where?: posto_signalWhereInput
    orderBy?: posto_signalOrderByWithRelationInput | posto_signalOrderByWithRelationInput[]
    cursor?: posto_signalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Posto_signalScalarFieldEnum | Posto_signalScalarFieldEnum[]
  }

  /**
   * rd_posto without action
   */
  export type rd_postoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rd_posto
     */
    select?: rd_postoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rd_postoInclude<ExtArgs> | null
  }


  /**
   * Model set_variables
   */

  export type AggregateSet_variables = {
    _count: Set_variablesCountAggregateOutputType | null
    _avg: Set_variablesAvgAggregateOutputType | null
    _sum: Set_variablesSumAggregateOutputType | null
    _min: Set_variablesMinAggregateOutputType | null
    _max: Set_variablesMaxAggregateOutputType | null
  }

  export type Set_variablesAvgAggregateOutputType = {
    set_regular_gasoline: number | null
    set_alcohol: number | null
  }

  export type Set_variablesSumAggregateOutputType = {
    set_regular_gasoline: number | null
    set_alcohol: number | null
  }

  export type Set_variablesMinAggregateOutputType = {
    set_uuid: string | null
    set_regular_gasoline: number | null
    set_alcohol: number | null
    use_uuid: string | null
    set_created_at: Date | null
    set_updated_at: Date | null
  }

  export type Set_variablesMaxAggregateOutputType = {
    set_uuid: string | null
    set_regular_gasoline: number | null
    set_alcohol: number | null
    use_uuid: string | null
    set_created_at: Date | null
    set_updated_at: Date | null
  }

  export type Set_variablesCountAggregateOutputType = {
    set_uuid: number
    set_regular_gasoline: number
    set_alcohol: number
    use_uuid: number
    set_created_at: number
    set_updated_at: number
    _all: number
  }


  export type Set_variablesAvgAggregateInputType = {
    set_regular_gasoline?: true
    set_alcohol?: true
  }

  export type Set_variablesSumAggregateInputType = {
    set_regular_gasoline?: true
    set_alcohol?: true
  }

  export type Set_variablesMinAggregateInputType = {
    set_uuid?: true
    set_regular_gasoline?: true
    set_alcohol?: true
    use_uuid?: true
    set_created_at?: true
    set_updated_at?: true
  }

  export type Set_variablesMaxAggregateInputType = {
    set_uuid?: true
    set_regular_gasoline?: true
    set_alcohol?: true
    use_uuid?: true
    set_created_at?: true
    set_updated_at?: true
  }

  export type Set_variablesCountAggregateInputType = {
    set_uuid?: true
    set_regular_gasoline?: true
    set_alcohol?: true
    use_uuid?: true
    set_created_at?: true
    set_updated_at?: true
    _all?: true
  }

  export type Set_variablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which set_variables to aggregate.
     */
    where?: set_variablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of set_variables to fetch.
     */
    orderBy?: set_variablesOrderByWithRelationInput | set_variablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: set_variablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` set_variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` set_variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned set_variables
    **/
    _count?: true | Set_variablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Set_variablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Set_variablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Set_variablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Set_variablesMaxAggregateInputType
  }

  export type GetSet_variablesAggregateType<T extends Set_variablesAggregateArgs> = {
        [P in keyof T & keyof AggregateSet_variables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSet_variables[P]>
      : GetScalarType<T[P], AggregateSet_variables[P]>
  }




  export type set_variablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: set_variablesWhereInput
    orderBy?: set_variablesOrderByWithAggregationInput | set_variablesOrderByWithAggregationInput[]
    by: Set_variablesScalarFieldEnum[] | Set_variablesScalarFieldEnum
    having?: set_variablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Set_variablesCountAggregateInputType | true
    _avg?: Set_variablesAvgAggregateInputType
    _sum?: Set_variablesSumAggregateInputType
    _min?: Set_variablesMinAggregateInputType
    _max?: Set_variablesMaxAggregateInputType
  }

  export type Set_variablesGroupByOutputType = {
    set_uuid: string
    set_regular_gasoline: number | null
    set_alcohol: number | null
    use_uuid: string | null
    set_created_at: Date
    set_updated_at: Date
    _count: Set_variablesCountAggregateOutputType | null
    _avg: Set_variablesAvgAggregateOutputType | null
    _sum: Set_variablesSumAggregateOutputType | null
    _min: Set_variablesMinAggregateOutputType | null
    _max: Set_variablesMaxAggregateOutputType | null
  }

  type GetSet_variablesGroupByPayload<T extends set_variablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Set_variablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Set_variablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Set_variablesGroupByOutputType[P]>
            : GetScalarType<T[P], Set_variablesGroupByOutputType[P]>
        }
      >
    >


  export type set_variablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    set_uuid?: boolean
    set_regular_gasoline?: boolean
    set_alcohol?: boolean
    use_uuid?: boolean
    set_created_at?: boolean
    set_updated_at?: boolean
    users?: boolean | set_variables$usersArgs<ExtArgs>
  }, ExtArgs["result"]["set_variables"]>

  export type set_variablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    set_uuid?: boolean
    set_regular_gasoline?: boolean
    set_alcohol?: boolean
    use_uuid?: boolean
    set_created_at?: boolean
    set_updated_at?: boolean
    users?: boolean | set_variables$usersArgs<ExtArgs>
  }, ExtArgs["result"]["set_variables"]>

  export type set_variablesSelectScalar = {
    set_uuid?: boolean
    set_regular_gasoline?: boolean
    set_alcohol?: boolean
    use_uuid?: boolean
    set_created_at?: boolean
    set_updated_at?: boolean
  }

  export type set_variablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | set_variables$usersArgs<ExtArgs>
  }
  export type set_variablesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | set_variables$usersArgs<ExtArgs>
  }

  export type $set_variablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "set_variables"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      set_uuid: string
      set_regular_gasoline: number | null
      set_alcohol: number | null
      use_uuid: string | null
      set_created_at: Date
      set_updated_at: Date
    }, ExtArgs["result"]["set_variables"]>
    composites: {}
  }

  type set_variablesGetPayload<S extends boolean | null | undefined | set_variablesDefaultArgs> = $Result.GetResult<Prisma.$set_variablesPayload, S>

  type set_variablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<set_variablesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Set_variablesCountAggregateInputType | true
    }

  export interface set_variablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['set_variables'], meta: { name: 'set_variables' } }
    /**
     * Find zero or one Set_variables that matches the filter.
     * @param {set_variablesFindUniqueArgs} args - Arguments to find a Set_variables
     * @example
     * // Get one Set_variables
     * const set_variables = await prisma.set_variables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends set_variablesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, set_variablesFindUniqueArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Set_variables that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {set_variablesFindUniqueOrThrowArgs} args - Arguments to find a Set_variables
     * @example
     * // Get one Set_variables
     * const set_variables = await prisma.set_variables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends set_variablesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, set_variablesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Set_variables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {set_variablesFindFirstArgs} args - Arguments to find a Set_variables
     * @example
     * // Get one Set_variables
     * const set_variables = await prisma.set_variables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends set_variablesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, set_variablesFindFirstArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Set_variables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {set_variablesFindFirstOrThrowArgs} args - Arguments to find a Set_variables
     * @example
     * // Get one Set_variables
     * const set_variables = await prisma.set_variables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends set_variablesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, set_variablesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Set_variables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {set_variablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Set_variables
     * const set_variables = await prisma.set_variables.findMany()
     * 
     * // Get first 10 Set_variables
     * const set_variables = await prisma.set_variables.findMany({ take: 10 })
     * 
     * // Only select the `set_uuid`
     * const set_variablesWithSet_uuidOnly = await prisma.set_variables.findMany({ select: { set_uuid: true } })
     * 
    **/
    findMany<T extends set_variablesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, set_variablesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Set_variables.
     * @param {set_variablesCreateArgs} args - Arguments to create a Set_variables.
     * @example
     * // Create one Set_variables
     * const Set_variables = await prisma.set_variables.create({
     *   data: {
     *     // ... data to create a Set_variables
     *   }
     * })
     * 
    **/
    create<T extends set_variablesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, set_variablesCreateArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Set_variables.
     * @param {set_variablesCreateManyArgs} args - Arguments to create many Set_variables.
     * @example
     * // Create many Set_variables
     * const set_variables = await prisma.set_variables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends set_variablesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, set_variablesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Set_variables and returns the data saved in the database.
     * @param {set_variablesCreateManyAndReturnArgs} args - Arguments to create many Set_variables.
     * @example
     * // Create many Set_variables
     * const set_variables = await prisma.set_variables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Set_variables and only return the `set_uuid`
     * const set_variablesWithSet_uuidOnly = await prisma.set_variables.createManyAndReturn({ 
     *   select: { set_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends set_variablesCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, set_variablesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Set_variables.
     * @param {set_variablesDeleteArgs} args - Arguments to delete one Set_variables.
     * @example
     * // Delete one Set_variables
     * const Set_variables = await prisma.set_variables.delete({
     *   where: {
     *     // ... filter to delete one Set_variables
     *   }
     * })
     * 
    **/
    delete<T extends set_variablesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, set_variablesDeleteArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Set_variables.
     * @param {set_variablesUpdateArgs} args - Arguments to update one Set_variables.
     * @example
     * // Update one Set_variables
     * const set_variables = await prisma.set_variables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends set_variablesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, set_variablesUpdateArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Set_variables.
     * @param {set_variablesDeleteManyArgs} args - Arguments to filter Set_variables to delete.
     * @example
     * // Delete a few Set_variables
     * const { count } = await prisma.set_variables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends set_variablesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, set_variablesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Set_variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {set_variablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Set_variables
     * const set_variables = await prisma.set_variables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends set_variablesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, set_variablesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Set_variables.
     * @param {set_variablesUpsertArgs} args - Arguments to update or create a Set_variables.
     * @example
     * // Update or create a Set_variables
     * const set_variables = await prisma.set_variables.upsert({
     *   create: {
     *     // ... data to create a Set_variables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Set_variables we want to update
     *   }
     * })
    **/
    upsert<T extends set_variablesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, set_variablesUpsertArgs<ExtArgs>>
    ): Prisma__set_variablesClient<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Set_variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {set_variablesCountArgs} args - Arguments to filter Set_variables to count.
     * @example
     * // Count the number of Set_variables
     * const count = await prisma.set_variables.count({
     *   where: {
     *     // ... the filter for the Set_variables we want to count
     *   }
     * })
    **/
    count<T extends set_variablesCountArgs>(
      args?: Subset<T, set_variablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Set_variablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Set_variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Set_variablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Set_variablesAggregateArgs>(args: Subset<T, Set_variablesAggregateArgs>): Prisma.PrismaPromise<GetSet_variablesAggregateType<T>>

    /**
     * Group by Set_variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {set_variablesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends set_variablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: set_variablesGroupByArgs['orderBy'] }
        : { orderBy?: set_variablesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, set_variablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSet_variablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the set_variables model
   */
  readonly fields: set_variablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for set_variables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__set_variablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends set_variables$usersArgs<ExtArgs> = {}>(args?: Subset<T, set_variables$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the set_variables model
   */ 
  interface set_variablesFieldRefs {
    readonly set_uuid: FieldRef<"set_variables", 'String'>
    readonly set_regular_gasoline: FieldRef<"set_variables", 'Float'>
    readonly set_alcohol: FieldRef<"set_variables", 'Float'>
    readonly use_uuid: FieldRef<"set_variables", 'String'>
    readonly set_created_at: FieldRef<"set_variables", 'DateTime'>
    readonly set_updated_at: FieldRef<"set_variables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * set_variables findUnique
   */
  export type set_variablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * Filter, which set_variables to fetch.
     */
    where: set_variablesWhereUniqueInput
  }

  /**
   * set_variables findUniqueOrThrow
   */
  export type set_variablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * Filter, which set_variables to fetch.
     */
    where: set_variablesWhereUniqueInput
  }

  /**
   * set_variables findFirst
   */
  export type set_variablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * Filter, which set_variables to fetch.
     */
    where?: set_variablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of set_variables to fetch.
     */
    orderBy?: set_variablesOrderByWithRelationInput | set_variablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for set_variables.
     */
    cursor?: set_variablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` set_variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` set_variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of set_variables.
     */
    distinct?: Set_variablesScalarFieldEnum | Set_variablesScalarFieldEnum[]
  }

  /**
   * set_variables findFirstOrThrow
   */
  export type set_variablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * Filter, which set_variables to fetch.
     */
    where?: set_variablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of set_variables to fetch.
     */
    orderBy?: set_variablesOrderByWithRelationInput | set_variablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for set_variables.
     */
    cursor?: set_variablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` set_variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` set_variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of set_variables.
     */
    distinct?: Set_variablesScalarFieldEnum | Set_variablesScalarFieldEnum[]
  }

  /**
   * set_variables findMany
   */
  export type set_variablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * Filter, which set_variables to fetch.
     */
    where?: set_variablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of set_variables to fetch.
     */
    orderBy?: set_variablesOrderByWithRelationInput | set_variablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing set_variables.
     */
    cursor?: set_variablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` set_variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` set_variables.
     */
    skip?: number
    distinct?: Set_variablesScalarFieldEnum | Set_variablesScalarFieldEnum[]
  }

  /**
   * set_variables create
   */
  export type set_variablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * The data needed to create a set_variables.
     */
    data?: XOR<set_variablesCreateInput, set_variablesUncheckedCreateInput>
  }

  /**
   * set_variables createMany
   */
  export type set_variablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many set_variables.
     */
    data: set_variablesCreateManyInput | set_variablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * set_variables createManyAndReturn
   */
  export type set_variablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many set_variables.
     */
    data: set_variablesCreateManyInput | set_variablesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * set_variables update
   */
  export type set_variablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * The data needed to update a set_variables.
     */
    data: XOR<set_variablesUpdateInput, set_variablesUncheckedUpdateInput>
    /**
     * Choose, which set_variables to update.
     */
    where: set_variablesWhereUniqueInput
  }

  /**
   * set_variables updateMany
   */
  export type set_variablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update set_variables.
     */
    data: XOR<set_variablesUpdateManyMutationInput, set_variablesUncheckedUpdateManyInput>
    /**
     * Filter which set_variables to update
     */
    where?: set_variablesWhereInput
  }

  /**
   * set_variables upsert
   */
  export type set_variablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * The filter to search for the set_variables to update in case it exists.
     */
    where: set_variablesWhereUniqueInput
    /**
     * In case the set_variables found by the `where` argument doesn't exist, create a new set_variables with this data.
     */
    create: XOR<set_variablesCreateInput, set_variablesUncheckedCreateInput>
    /**
     * In case the set_variables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<set_variablesUpdateInput, set_variablesUncheckedUpdateInput>
  }

  /**
   * set_variables delete
   */
  export type set_variablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    /**
     * Filter which set_variables to delete.
     */
    where: set_variablesWhereUniqueInput
  }

  /**
   * set_variables deleteMany
   */
  export type set_variablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which set_variables to delete
     */
    where?: set_variablesWhereInput
  }

  /**
   * set_variables.users
   */
  export type set_variables$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * set_variables without action
   */
  export type set_variablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    use_volume_gc_min: number | null
    use_volume_al_min: number | null
    use_volume_total_min: number | null
    use_margin_al_min: number | null
    use_margin_gc_min: number | null
    use_margin_total_min: number | null
  }

  export type UsersSumAggregateOutputType = {
    use_volume_gc_min: number | null
    use_volume_al_min: number | null
    use_volume_total_min: number | null
    use_margin_al_min: number | null
    use_margin_gc_min: number | null
    use_margin_total_min: number | null
  }

  export type UsersMinAggregateOutputType = {
    use_uuid: string | null
    use_name: string | null
    use_email: string | null
    use_password: string | null
    use_created_at: Date | null
    use_updated_at: Date | null
    use_date_expire: Date | null
    use_token: string | null
    use_volume_gc: boolean | null
    use_volume_al: boolean | null
    use_volume_total: boolean | null
    use_volume_gc_min: number | null
    use_volume_al_min: number | null
    use_volume_total_min: number | null
    use_level: string | null
    use_margin_al: boolean | null
    use_margin_al_flag: string | null
    use_margin_al_min: number | null
    use_margin_gc: boolean | null
    use_margin_gc_flag: string | null
    use_margin_gc_min: number | null
    use_margin_total: boolean | null
    use_margin_total_flag: string | null
    use_margin_total_min: number | null
    use_volume_al_flag: string | null
    use_volume_gc_flag: string | null
    use_volume_total_flag: string | null
  }

  export type UsersMaxAggregateOutputType = {
    use_uuid: string | null
    use_name: string | null
    use_email: string | null
    use_password: string | null
    use_created_at: Date | null
    use_updated_at: Date | null
    use_date_expire: Date | null
    use_token: string | null
    use_volume_gc: boolean | null
    use_volume_al: boolean | null
    use_volume_total: boolean | null
    use_volume_gc_min: number | null
    use_volume_al_min: number | null
    use_volume_total_min: number | null
    use_level: string | null
    use_margin_al: boolean | null
    use_margin_al_flag: string | null
    use_margin_al_min: number | null
    use_margin_gc: boolean | null
    use_margin_gc_flag: string | null
    use_margin_gc_min: number | null
    use_margin_total: boolean | null
    use_margin_total_flag: string | null
    use_margin_total_min: number | null
    use_volume_al_flag: string | null
    use_volume_gc_flag: string | null
    use_volume_total_flag: string | null
  }

  export type UsersCountAggregateOutputType = {
    use_uuid: number
    use_name: number
    use_email: number
    use_password: number
    use_created_at: number
    use_updated_at: number
    use_date_expire: number
    use_token: number
    use_volume_gc: number
    use_volume_al: number
    use_volume_total: number
    use_volume_gc_min: number
    use_volume_al_min: number
    use_volume_total_min: number
    use_level: number
    use_whats_app: number
    use_margin_al: number
    use_margin_al_flag: number
    use_margin_al_min: number
    use_margin_gc: number
    use_margin_gc_flag: number
    use_margin_gc_min: number
    use_margin_total: number
    use_margin_total_flag: number
    use_margin_total_min: number
    use_volume_al_flag: number
    use_volume_gc_flag: number
    use_volume_total_flag: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    use_volume_gc_min?: true
    use_volume_al_min?: true
    use_volume_total_min?: true
    use_margin_al_min?: true
    use_margin_gc_min?: true
    use_margin_total_min?: true
  }

  export type UsersSumAggregateInputType = {
    use_volume_gc_min?: true
    use_volume_al_min?: true
    use_volume_total_min?: true
    use_margin_al_min?: true
    use_margin_gc_min?: true
    use_margin_total_min?: true
  }

  export type UsersMinAggregateInputType = {
    use_uuid?: true
    use_name?: true
    use_email?: true
    use_password?: true
    use_created_at?: true
    use_updated_at?: true
    use_date_expire?: true
    use_token?: true
    use_volume_gc?: true
    use_volume_al?: true
    use_volume_total?: true
    use_volume_gc_min?: true
    use_volume_al_min?: true
    use_volume_total_min?: true
    use_level?: true
    use_margin_al?: true
    use_margin_al_flag?: true
    use_margin_al_min?: true
    use_margin_gc?: true
    use_margin_gc_flag?: true
    use_margin_gc_min?: true
    use_margin_total?: true
    use_margin_total_flag?: true
    use_margin_total_min?: true
    use_volume_al_flag?: true
    use_volume_gc_flag?: true
    use_volume_total_flag?: true
  }

  export type UsersMaxAggregateInputType = {
    use_uuid?: true
    use_name?: true
    use_email?: true
    use_password?: true
    use_created_at?: true
    use_updated_at?: true
    use_date_expire?: true
    use_token?: true
    use_volume_gc?: true
    use_volume_al?: true
    use_volume_total?: true
    use_volume_gc_min?: true
    use_volume_al_min?: true
    use_volume_total_min?: true
    use_level?: true
    use_margin_al?: true
    use_margin_al_flag?: true
    use_margin_al_min?: true
    use_margin_gc?: true
    use_margin_gc_flag?: true
    use_margin_gc_min?: true
    use_margin_total?: true
    use_margin_total_flag?: true
    use_margin_total_min?: true
    use_volume_al_flag?: true
    use_volume_gc_flag?: true
    use_volume_total_flag?: true
  }

  export type UsersCountAggregateInputType = {
    use_uuid?: true
    use_name?: true
    use_email?: true
    use_password?: true
    use_created_at?: true
    use_updated_at?: true
    use_date_expire?: true
    use_token?: true
    use_volume_gc?: true
    use_volume_al?: true
    use_volume_total?: true
    use_volume_gc_min?: true
    use_volume_al_min?: true
    use_volume_total_min?: true
    use_level?: true
    use_whats_app?: true
    use_margin_al?: true
    use_margin_al_flag?: true
    use_margin_al_min?: true
    use_margin_gc?: true
    use_margin_gc_flag?: true
    use_margin_gc_min?: true
    use_margin_total?: true
    use_margin_total_flag?: true
    use_margin_total_min?: true
    use_volume_al_flag?: true
    use_volume_gc_flag?: true
    use_volume_total_flag?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    use_uuid: string
    use_name: string | null
    use_email: string | null
    use_password: string | null
    use_created_at: Date
    use_updated_at: Date
    use_date_expire: Date | null
    use_token: string | null
    use_volume_gc: boolean | null
    use_volume_al: boolean | null
    use_volume_total: boolean | null
    use_volume_gc_min: number | null
    use_volume_al_min: number | null
    use_volume_total_min: number | null
    use_level: string | null
    use_whats_app: string[]
    use_margin_al: boolean | null
    use_margin_al_flag: string | null
    use_margin_al_min: number | null
    use_margin_gc: boolean | null
    use_margin_gc_flag: string | null
    use_margin_gc_min: number | null
    use_margin_total: boolean | null
    use_margin_total_flag: string | null
    use_margin_total_min: number | null
    use_volume_al_flag: string | null
    use_volume_gc_flag: string | null
    use_volume_total_flag: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    use_uuid?: boolean
    use_name?: boolean
    use_email?: boolean
    use_password?: boolean
    use_created_at?: boolean
    use_updated_at?: boolean
    use_date_expire?: boolean
    use_token?: boolean
    use_volume_gc?: boolean
    use_volume_al?: boolean
    use_volume_total?: boolean
    use_volume_gc_min?: boolean
    use_volume_al_min?: boolean
    use_volume_total_min?: boolean
    use_level?: boolean
    use_whats_app?: boolean
    use_margin_al?: boolean
    use_margin_al_flag?: boolean
    use_margin_al_min?: boolean
    use_margin_gc?: boolean
    use_margin_gc_flag?: boolean
    use_margin_gc_min?: boolean
    use_margin_total?: boolean
    use_margin_total_flag?: boolean
    use_margin_total_min?: boolean
    use_volume_al_flag?: boolean
    use_volume_gc_flag?: boolean
    use_volume_total_flag?: boolean
    fuel?: boolean | users$fuelArgs<ExtArgs>
    set_variables?: boolean | users$set_variablesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    use_uuid?: boolean
    use_name?: boolean
    use_email?: boolean
    use_password?: boolean
    use_created_at?: boolean
    use_updated_at?: boolean
    use_date_expire?: boolean
    use_token?: boolean
    use_volume_gc?: boolean
    use_volume_al?: boolean
    use_volume_total?: boolean
    use_volume_gc_min?: boolean
    use_volume_al_min?: boolean
    use_volume_total_min?: boolean
    use_level?: boolean
    use_whats_app?: boolean
    use_margin_al?: boolean
    use_margin_al_flag?: boolean
    use_margin_al_min?: boolean
    use_margin_gc?: boolean
    use_margin_gc_flag?: boolean
    use_margin_gc_min?: boolean
    use_margin_total?: boolean
    use_margin_total_flag?: boolean
    use_margin_total_min?: boolean
    use_volume_al_flag?: boolean
    use_volume_gc_flag?: boolean
    use_volume_total_flag?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    use_uuid?: boolean
    use_name?: boolean
    use_email?: boolean
    use_password?: boolean
    use_created_at?: boolean
    use_updated_at?: boolean
    use_date_expire?: boolean
    use_token?: boolean
    use_volume_gc?: boolean
    use_volume_al?: boolean
    use_volume_total?: boolean
    use_volume_gc_min?: boolean
    use_volume_al_min?: boolean
    use_volume_total_min?: boolean
    use_level?: boolean
    use_whats_app?: boolean
    use_margin_al?: boolean
    use_margin_al_flag?: boolean
    use_margin_al_min?: boolean
    use_margin_gc?: boolean
    use_margin_gc_flag?: boolean
    use_margin_gc_min?: boolean
    use_margin_total?: boolean
    use_margin_total_flag?: boolean
    use_margin_total_min?: boolean
    use_volume_al_flag?: boolean
    use_volume_gc_flag?: boolean
    use_volume_total_flag?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fuel?: boolean | users$fuelArgs<ExtArgs>
    set_variables?: boolean | users$set_variablesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      fuel: Prisma.$fuelPayload<ExtArgs>[]
      set_variables: Prisma.$set_variablesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      use_uuid: string
      use_name: string | null
      use_email: string | null
      use_password: string | null
      use_created_at: Date
      use_updated_at: Date
      use_date_expire: Date | null
      use_token: string | null
      use_volume_gc: boolean | null
      use_volume_al: boolean | null
      use_volume_total: boolean | null
      use_volume_gc_min: number | null
      use_volume_al_min: number | null
      use_volume_total_min: number | null
      use_level: string | null
      use_whats_app: string[]
      use_margin_al: boolean | null
      use_margin_al_flag: string | null
      use_margin_al_min: number | null
      use_margin_gc: boolean | null
      use_margin_gc_flag: string | null
      use_margin_gc_min: number | null
      use_margin_total: boolean | null
      use_margin_total_flag: string | null
      use_margin_total_min: number | null
      use_volume_al_flag: string | null
      use_volume_gc_flag: string | null
      use_volume_total_flag: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `use_uuid`
     * const usersWithUse_uuidOnly = await prisma.users.findMany({ select: { use_uuid: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `use_uuid`
     * const usersWithUse_uuidOnly = await prisma.users.createManyAndReturn({ 
     *   select: { use_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends usersCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fuel<T extends users$fuelArgs<ExtArgs> = {}>(args?: Subset<T, users$fuelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fuelPayload<ExtArgs>, T, 'findMany'> | Null>;

    set_variables<T extends users$set_variablesArgs<ExtArgs> = {}>(args?: Subset<T, users$set_variablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$set_variablesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly use_uuid: FieldRef<"users", 'String'>
    readonly use_name: FieldRef<"users", 'String'>
    readonly use_email: FieldRef<"users", 'String'>
    readonly use_password: FieldRef<"users", 'String'>
    readonly use_created_at: FieldRef<"users", 'DateTime'>
    readonly use_updated_at: FieldRef<"users", 'DateTime'>
    readonly use_date_expire: FieldRef<"users", 'DateTime'>
    readonly use_token: FieldRef<"users", 'String'>
    readonly use_volume_gc: FieldRef<"users", 'Boolean'>
    readonly use_volume_al: FieldRef<"users", 'Boolean'>
    readonly use_volume_total: FieldRef<"users", 'Boolean'>
    readonly use_volume_gc_min: FieldRef<"users", 'Float'>
    readonly use_volume_al_min: FieldRef<"users", 'Float'>
    readonly use_volume_total_min: FieldRef<"users", 'Float'>
    readonly use_level: FieldRef<"users", 'String'>
    readonly use_whats_app: FieldRef<"users", 'String[]'>
    readonly use_margin_al: FieldRef<"users", 'Boolean'>
    readonly use_margin_al_flag: FieldRef<"users", 'String'>
    readonly use_margin_al_min: FieldRef<"users", 'Float'>
    readonly use_margin_gc: FieldRef<"users", 'Boolean'>
    readonly use_margin_gc_flag: FieldRef<"users", 'String'>
    readonly use_margin_gc_min: FieldRef<"users", 'Float'>
    readonly use_margin_total: FieldRef<"users", 'Boolean'>
    readonly use_margin_total_flag: FieldRef<"users", 'String'>
    readonly use_margin_total_min: FieldRef<"users", 'Float'>
    readonly use_volume_al_flag: FieldRef<"users", 'String'>
    readonly use_volume_gc_flag: FieldRef<"users", 'String'>
    readonly use_volume_total_flag: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.fuel
   */
  export type users$fuelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fuel
     */
    select?: fuelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fuelInclude<ExtArgs> | null
    where?: fuelWhereInput
    orderBy?: fuelOrderByWithRelationInput | fuelOrderByWithRelationInput[]
    cursor?: fuelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelScalarFieldEnum | FuelScalarFieldEnum[]
  }

  /**
   * users.set_variables
   */
  export type users$set_variablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the set_variables
     */
    select?: set_variablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: set_variablesInclude<ExtArgs> | null
    where?: set_variablesWhereInput
    orderBy?: set_variablesOrderByWithRelationInput | set_variablesOrderByWithRelationInput[]
    cursor?: set_variablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Set_variablesScalarFieldEnum | Set_variablesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BasedadosScalarFieldEnum: {
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

  export type BasedadosScalarFieldEnum = (typeof BasedadosScalarFieldEnum)[keyof typeof BasedadosScalarFieldEnum]


  export const Dataframe_fuelScalarFieldEnum: {
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

  export type Dataframe_fuelScalarFieldEnum = (typeof Dataframe_fuelScalarFieldEnum)[keyof typeof Dataframe_fuelScalarFieldEnum]


  export const Dataframe_productScalarFieldEnum: {
    dataproduct_uuid: 'dataproduct_uuid',
    dataproduct_posto: 'dataproduct_posto',
    dataproduct_venda_produto: 'dataproduct_venda_produto',
    dataproduct_valor_venda: 'dataproduct_valor_venda',
    dataproduct_qtd_produto_vendido: 'dataproduct_qtd_produto_vendido',
    dataproduct_dt_registro: 'dataproduct_dt_registro',
    dataproduct_updated: 'dataproduct_updated'
  };

  export type Dataframe_productScalarFieldEnum = (typeof Dataframe_productScalarFieldEnum)[keyof typeof Dataframe_productScalarFieldEnum]


  export const FuelScalarFieldEnum: {
    fuel_uuid: 'fuel_uuid',
    fuel_regular_gasoline: 'fuel_regular_gasoline',
    fuel_alcohol: 'fuel_alcohol',
    use_uuid: 'use_uuid',
    fuel_created_at: 'fuel_created_at',
    fuel_updated_at: 'fuel_updated_at'
  };

  export type FuelScalarFieldEnum = (typeof FuelScalarFieldEnum)[keyof typeof FuelScalarFieldEnum]


  export const Gas_stationScalarFieldEnum: {
    gas_uuid: 'gas_uuid',
    gas_fuel_type: 'gas_fuel_type',
    gas_value: 'gas_value',
    gas_created_at: 'gas_created_at',
    gas_updated_at: 'gas_updated_at',
    gas_ibm: 'gas_ibm',
    gas_identifier: 'gas_identifier'
  };

  export type Gas_stationScalarFieldEnum = (typeof Gas_stationScalarFieldEnum)[keyof typeof Gas_stationScalarFieldEnum]


  export const Ibm_infoScalarFieldEnum: {
    ibm: 'ibm',
    nomefantasia: 'nomefantasia',
    cnpj: 'cnpj',
    razaosocial: 'razaosocial',
    cep: 'cep',
    lat: 'lat',
    long: 'long',
    id: 'id'
  };

  export type Ibm_infoScalarFieldEnum = (typeof Ibm_infoScalarFieldEnum)[keyof typeof Ibm_infoScalarFieldEnum]


  export const Posto_signalScalarFieldEnum: {
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

  export type Posto_signalScalarFieldEnum = (typeof Posto_signalScalarFieldEnum)[keyof typeof Posto_signalScalarFieldEnum]


  export const Rd_postoScalarFieldEnum: {
    posto_uuid: 'posto_uuid',
    posto_name: 'posto_name'
  };

  export type Rd_postoScalarFieldEnum = (typeof Rd_postoScalarFieldEnum)[keyof typeof Rd_postoScalarFieldEnum]


  export const Set_variablesScalarFieldEnum: {
    set_uuid: 'set_uuid',
    set_regular_gasoline: 'set_regular_gasoline',
    set_alcohol: 'set_alcohol',
    use_uuid: 'use_uuid',
    set_created_at: 'set_created_at',
    set_updated_at: 'set_updated_at'
  };

  export type Set_variablesScalarFieldEnum = (typeof Set_variablesScalarFieldEnum)[keyof typeof Set_variablesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type basedadosWhereInput = {
    AND?: basedadosWhereInput | basedadosWhereInput[]
    OR?: basedadosWhereInput[]
    NOT?: basedadosWhereInput | basedadosWhereInput[]
    company_uuid?: UuidFilter<"basedados"> | string
    company_emp?: IntNullableFilter<"basedados"> | number | null
    company_name?: StringNullableFilter<"basedados"> | string | null
    company_date?: DateTimeNullableFilter<"basedados"> | Date | string | null
    company_week_day?: StringNullableFilter<"basedados"> | string | null
    company_fuel?: StringNullableFilter<"basedados"> | string | null
    company_volume?: FloatNullableFilter<"basedados"> | number | null
    company_cost?: FloatNullableFilter<"basedados"> | number | null
    company_sale?: FloatNullableFilter<"basedados"> | number | null
    company_profit?: FloatNullableFilter<"basedados"> | number | null
    company_created_at?: DateTimeFilter<"basedados"> | Date | string
    company_updated_at?: DateTimeFilter<"basedados"> | Date | string
  }

  export type basedadosOrderByWithRelationInput = {
    company_uuid?: SortOrder
    company_emp?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    company_date?: SortOrderInput | SortOrder
    company_week_day?: SortOrderInput | SortOrder
    company_fuel?: SortOrderInput | SortOrder
    company_volume?: SortOrderInput | SortOrder
    company_cost?: SortOrderInput | SortOrder
    company_sale?: SortOrderInput | SortOrder
    company_profit?: SortOrderInput | SortOrder
    company_created_at?: SortOrder
    company_updated_at?: SortOrder
  }

  export type basedadosWhereUniqueInput = Prisma.AtLeast<{
    company_uuid?: string
    AND?: basedadosWhereInput | basedadosWhereInput[]
    OR?: basedadosWhereInput[]
    NOT?: basedadosWhereInput | basedadosWhereInput[]
    company_emp?: IntNullableFilter<"basedados"> | number | null
    company_name?: StringNullableFilter<"basedados"> | string | null
    company_date?: DateTimeNullableFilter<"basedados"> | Date | string | null
    company_week_day?: StringNullableFilter<"basedados"> | string | null
    company_fuel?: StringNullableFilter<"basedados"> | string | null
    company_volume?: FloatNullableFilter<"basedados"> | number | null
    company_cost?: FloatNullableFilter<"basedados"> | number | null
    company_sale?: FloatNullableFilter<"basedados"> | number | null
    company_profit?: FloatNullableFilter<"basedados"> | number | null
    company_created_at?: DateTimeFilter<"basedados"> | Date | string
    company_updated_at?: DateTimeFilter<"basedados"> | Date | string
  }, "company_uuid">

  export type basedadosOrderByWithAggregationInput = {
    company_uuid?: SortOrder
    company_emp?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    company_date?: SortOrderInput | SortOrder
    company_week_day?: SortOrderInput | SortOrder
    company_fuel?: SortOrderInput | SortOrder
    company_volume?: SortOrderInput | SortOrder
    company_cost?: SortOrderInput | SortOrder
    company_sale?: SortOrderInput | SortOrder
    company_profit?: SortOrderInput | SortOrder
    company_created_at?: SortOrder
    company_updated_at?: SortOrder
    _count?: basedadosCountOrderByAggregateInput
    _avg?: basedadosAvgOrderByAggregateInput
    _max?: basedadosMaxOrderByAggregateInput
    _min?: basedadosMinOrderByAggregateInput
    _sum?: basedadosSumOrderByAggregateInput
  }

  export type basedadosScalarWhereWithAggregatesInput = {
    AND?: basedadosScalarWhereWithAggregatesInput | basedadosScalarWhereWithAggregatesInput[]
    OR?: basedadosScalarWhereWithAggregatesInput[]
    NOT?: basedadosScalarWhereWithAggregatesInput | basedadosScalarWhereWithAggregatesInput[]
    company_uuid?: UuidWithAggregatesFilter<"basedados"> | string
    company_emp?: IntNullableWithAggregatesFilter<"basedados"> | number | null
    company_name?: StringNullableWithAggregatesFilter<"basedados"> | string | null
    company_date?: DateTimeNullableWithAggregatesFilter<"basedados"> | Date | string | null
    company_week_day?: StringNullableWithAggregatesFilter<"basedados"> | string | null
    company_fuel?: StringNullableWithAggregatesFilter<"basedados"> | string | null
    company_volume?: FloatNullableWithAggregatesFilter<"basedados"> | number | null
    company_cost?: FloatNullableWithAggregatesFilter<"basedados"> | number | null
    company_sale?: FloatNullableWithAggregatesFilter<"basedados"> | number | null
    company_profit?: FloatNullableWithAggregatesFilter<"basedados"> | number | null
    company_created_at?: DateTimeWithAggregatesFilter<"basedados"> | Date | string
    company_updated_at?: DateTimeWithAggregatesFilter<"basedados"> | Date | string
  }

  export type dataframe_fuelWhereInput = {
    AND?: dataframe_fuelWhereInput | dataframe_fuelWhereInput[]
    OR?: dataframe_fuelWhereInput[]
    NOT?: dataframe_fuelWhereInput | dataframe_fuelWhereInput[]
    datafuel_uuid?: UuidFilter<"dataframe_fuel"> | string
    datafuel_qtdAbastecimento?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_vendaCombustivel?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_litroCombustivel?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_qtdProduto?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_vendaProduto?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_litroProduto?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_qtdOutrosProdutos?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_vendasOutros?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_litroOutros?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_custo?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_lucro?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_dt_registro?: StringNullableFilter<"dataframe_fuel"> | string | null
    datafuel_updated?: StringNullableFilter<"dataframe_fuel"> | string | null
  }

  export type dataframe_fuelOrderByWithRelationInput = {
    datafuel_uuid?: SortOrder
    datafuel_qtdAbastecimento?: SortOrderInput | SortOrder
    datafuel_vendaCombustivel?: SortOrderInput | SortOrder
    datafuel_litroCombustivel?: SortOrderInput | SortOrder
    datafuel_qtdProduto?: SortOrderInput | SortOrder
    datafuel_vendaProduto?: SortOrderInput | SortOrder
    datafuel_litroProduto?: SortOrderInput | SortOrder
    datafuel_qtdOutrosProdutos?: SortOrderInput | SortOrder
    datafuel_vendasOutros?: SortOrderInput | SortOrder
    datafuel_litroOutros?: SortOrderInput | SortOrder
    datafuel_custo?: SortOrderInput | SortOrder
    datafuel_lucro?: SortOrderInput | SortOrder
    datafuel_dt_registro?: SortOrderInput | SortOrder
    datafuel_updated?: SortOrderInput | SortOrder
  }

  export type dataframe_fuelWhereUniqueInput = Prisma.AtLeast<{
    datafuel_uuid?: string
    AND?: dataframe_fuelWhereInput | dataframe_fuelWhereInput[]
    OR?: dataframe_fuelWhereInput[]
    NOT?: dataframe_fuelWhereInput | dataframe_fuelWhereInput[]
    datafuel_qtdAbastecimento?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_vendaCombustivel?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_litroCombustivel?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_qtdProduto?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_vendaProduto?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_litroProduto?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_qtdOutrosProdutos?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_vendasOutros?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_litroOutros?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_custo?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_lucro?: FloatNullableFilter<"dataframe_fuel"> | number | null
    datafuel_dt_registro?: StringNullableFilter<"dataframe_fuel"> | string | null
    datafuel_updated?: StringNullableFilter<"dataframe_fuel"> | string | null
  }, "datafuel_uuid">

  export type dataframe_fuelOrderByWithAggregationInput = {
    datafuel_uuid?: SortOrder
    datafuel_qtdAbastecimento?: SortOrderInput | SortOrder
    datafuel_vendaCombustivel?: SortOrderInput | SortOrder
    datafuel_litroCombustivel?: SortOrderInput | SortOrder
    datafuel_qtdProduto?: SortOrderInput | SortOrder
    datafuel_vendaProduto?: SortOrderInput | SortOrder
    datafuel_litroProduto?: SortOrderInput | SortOrder
    datafuel_qtdOutrosProdutos?: SortOrderInput | SortOrder
    datafuel_vendasOutros?: SortOrderInput | SortOrder
    datafuel_litroOutros?: SortOrderInput | SortOrder
    datafuel_custo?: SortOrderInput | SortOrder
    datafuel_lucro?: SortOrderInput | SortOrder
    datafuel_dt_registro?: SortOrderInput | SortOrder
    datafuel_updated?: SortOrderInput | SortOrder
    _count?: dataframe_fuelCountOrderByAggregateInput
    _avg?: dataframe_fuelAvgOrderByAggregateInput
    _max?: dataframe_fuelMaxOrderByAggregateInput
    _min?: dataframe_fuelMinOrderByAggregateInput
    _sum?: dataframe_fuelSumOrderByAggregateInput
  }

  export type dataframe_fuelScalarWhereWithAggregatesInput = {
    AND?: dataframe_fuelScalarWhereWithAggregatesInput | dataframe_fuelScalarWhereWithAggregatesInput[]
    OR?: dataframe_fuelScalarWhereWithAggregatesInput[]
    NOT?: dataframe_fuelScalarWhereWithAggregatesInput | dataframe_fuelScalarWhereWithAggregatesInput[]
    datafuel_uuid?: UuidWithAggregatesFilter<"dataframe_fuel"> | string
    datafuel_qtdAbastecimento?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_vendaCombustivel?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_litroCombustivel?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_qtdProduto?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_vendaProduto?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_litroProduto?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_qtdOutrosProdutos?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_vendasOutros?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_litroOutros?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_custo?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_lucro?: FloatNullableWithAggregatesFilter<"dataframe_fuel"> | number | null
    datafuel_dt_registro?: StringNullableWithAggregatesFilter<"dataframe_fuel"> | string | null
    datafuel_updated?: StringNullableWithAggregatesFilter<"dataframe_fuel"> | string | null
  }

  export type dataframe_productWhereInput = {
    AND?: dataframe_productWhereInput | dataframe_productWhereInput[]
    OR?: dataframe_productWhereInput[]
    NOT?: dataframe_productWhereInput | dataframe_productWhereInput[]
    dataproduct_uuid?: UuidFilter<"dataframe_product"> | string
    dataproduct_posto?: StringNullableFilter<"dataframe_product"> | string | null
    dataproduct_venda_produto?: StringNullableFilter<"dataframe_product"> | string | null
    dataproduct_valor_venda?: FloatNullableFilter<"dataframe_product"> | number | null
    dataproduct_qtd_produto_vendido?: FloatNullableFilter<"dataframe_product"> | number | null
    dataproduct_dt_registro?: StringNullableFilter<"dataframe_product"> | string | null
    dataproduct_updated?: StringNullableFilter<"dataframe_product"> | string | null
  }

  export type dataframe_productOrderByWithRelationInput = {
    dataproduct_uuid?: SortOrder
    dataproduct_posto?: SortOrderInput | SortOrder
    dataproduct_venda_produto?: SortOrderInput | SortOrder
    dataproduct_valor_venda?: SortOrderInput | SortOrder
    dataproduct_qtd_produto_vendido?: SortOrderInput | SortOrder
    dataproduct_dt_registro?: SortOrderInput | SortOrder
    dataproduct_updated?: SortOrderInput | SortOrder
  }

  export type dataframe_productWhereUniqueInput = Prisma.AtLeast<{
    dataproduct_uuid?: string
    AND?: dataframe_productWhereInput | dataframe_productWhereInput[]
    OR?: dataframe_productWhereInput[]
    NOT?: dataframe_productWhereInput | dataframe_productWhereInput[]
    dataproduct_posto?: StringNullableFilter<"dataframe_product"> | string | null
    dataproduct_venda_produto?: StringNullableFilter<"dataframe_product"> | string | null
    dataproduct_valor_venda?: FloatNullableFilter<"dataframe_product"> | number | null
    dataproduct_qtd_produto_vendido?: FloatNullableFilter<"dataframe_product"> | number | null
    dataproduct_dt_registro?: StringNullableFilter<"dataframe_product"> | string | null
    dataproduct_updated?: StringNullableFilter<"dataframe_product"> | string | null
  }, "dataproduct_uuid">

  export type dataframe_productOrderByWithAggregationInput = {
    dataproduct_uuid?: SortOrder
    dataproduct_posto?: SortOrderInput | SortOrder
    dataproduct_venda_produto?: SortOrderInput | SortOrder
    dataproduct_valor_venda?: SortOrderInput | SortOrder
    dataproduct_qtd_produto_vendido?: SortOrderInput | SortOrder
    dataproduct_dt_registro?: SortOrderInput | SortOrder
    dataproduct_updated?: SortOrderInput | SortOrder
    _count?: dataframe_productCountOrderByAggregateInput
    _avg?: dataframe_productAvgOrderByAggregateInput
    _max?: dataframe_productMaxOrderByAggregateInput
    _min?: dataframe_productMinOrderByAggregateInput
    _sum?: dataframe_productSumOrderByAggregateInput
  }

  export type dataframe_productScalarWhereWithAggregatesInput = {
    AND?: dataframe_productScalarWhereWithAggregatesInput | dataframe_productScalarWhereWithAggregatesInput[]
    OR?: dataframe_productScalarWhereWithAggregatesInput[]
    NOT?: dataframe_productScalarWhereWithAggregatesInput | dataframe_productScalarWhereWithAggregatesInput[]
    dataproduct_uuid?: UuidWithAggregatesFilter<"dataframe_product"> | string
    dataproduct_posto?: StringNullableWithAggregatesFilter<"dataframe_product"> | string | null
    dataproduct_venda_produto?: StringNullableWithAggregatesFilter<"dataframe_product"> | string | null
    dataproduct_valor_venda?: FloatNullableWithAggregatesFilter<"dataframe_product"> | number | null
    dataproduct_qtd_produto_vendido?: FloatNullableWithAggregatesFilter<"dataframe_product"> | number | null
    dataproduct_dt_registro?: StringNullableWithAggregatesFilter<"dataframe_product"> | string | null
    dataproduct_updated?: StringNullableWithAggregatesFilter<"dataframe_product"> | string | null
  }

  export type fuelWhereInput = {
    AND?: fuelWhereInput | fuelWhereInput[]
    OR?: fuelWhereInput[]
    NOT?: fuelWhereInput | fuelWhereInput[]
    fuel_uuid?: UuidFilter<"fuel"> | string
    fuel_regular_gasoline?: FloatNullableFilter<"fuel"> | number | null
    fuel_alcohol?: FloatNullableFilter<"fuel"> | number | null
    use_uuid?: UuidNullableFilter<"fuel"> | string | null
    fuel_created_at?: DateTimeFilter<"fuel"> | Date | string
    fuel_updated_at?: DateTimeFilter<"fuel"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type fuelOrderByWithRelationInput = {
    fuel_uuid?: SortOrder
    fuel_regular_gasoline?: SortOrderInput | SortOrder
    fuel_alcohol?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    fuel_created_at?: SortOrder
    fuel_updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type fuelWhereUniqueInput = Prisma.AtLeast<{
    fuel_uuid?: string
    AND?: fuelWhereInput | fuelWhereInput[]
    OR?: fuelWhereInput[]
    NOT?: fuelWhereInput | fuelWhereInput[]
    fuel_regular_gasoline?: FloatNullableFilter<"fuel"> | number | null
    fuel_alcohol?: FloatNullableFilter<"fuel"> | number | null
    use_uuid?: UuidNullableFilter<"fuel"> | string | null
    fuel_created_at?: DateTimeFilter<"fuel"> | Date | string
    fuel_updated_at?: DateTimeFilter<"fuel"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "fuel_uuid">

  export type fuelOrderByWithAggregationInput = {
    fuel_uuid?: SortOrder
    fuel_regular_gasoline?: SortOrderInput | SortOrder
    fuel_alcohol?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    fuel_created_at?: SortOrder
    fuel_updated_at?: SortOrder
    _count?: fuelCountOrderByAggregateInput
    _avg?: fuelAvgOrderByAggregateInput
    _max?: fuelMaxOrderByAggregateInput
    _min?: fuelMinOrderByAggregateInput
    _sum?: fuelSumOrderByAggregateInput
  }

  export type fuelScalarWhereWithAggregatesInput = {
    AND?: fuelScalarWhereWithAggregatesInput | fuelScalarWhereWithAggregatesInput[]
    OR?: fuelScalarWhereWithAggregatesInput[]
    NOT?: fuelScalarWhereWithAggregatesInput | fuelScalarWhereWithAggregatesInput[]
    fuel_uuid?: UuidWithAggregatesFilter<"fuel"> | string
    fuel_regular_gasoline?: FloatNullableWithAggregatesFilter<"fuel"> | number | null
    fuel_alcohol?: FloatNullableWithAggregatesFilter<"fuel"> | number | null
    use_uuid?: UuidNullableWithAggregatesFilter<"fuel"> | string | null
    fuel_created_at?: DateTimeWithAggregatesFilter<"fuel"> | Date | string
    fuel_updated_at?: DateTimeWithAggregatesFilter<"fuel"> | Date | string
  }

  export type gas_stationWhereInput = {
    AND?: gas_stationWhereInput | gas_stationWhereInput[]
    OR?: gas_stationWhereInput[]
    NOT?: gas_stationWhereInput | gas_stationWhereInput[]
    gas_uuid?: UuidFilter<"gas_station"> | string
    gas_fuel_type?: StringNullableFilter<"gas_station"> | string | null
    gas_value?: FloatNullableFilter<"gas_station"> | number | null
    gas_created_at?: DateTimeFilter<"gas_station"> | Date | string
    gas_updated_at?: DateTimeFilter<"gas_station"> | Date | string
    gas_ibm?: StringNullableFilter<"gas_station"> | string | null
    gas_identifier?: StringNullableFilter<"gas_station"> | string | null
  }

  export type gas_stationOrderByWithRelationInput = {
    gas_uuid?: SortOrder
    gas_fuel_type?: SortOrderInput | SortOrder
    gas_value?: SortOrderInput | SortOrder
    gas_created_at?: SortOrder
    gas_updated_at?: SortOrder
    gas_ibm?: SortOrderInput | SortOrder
    gas_identifier?: SortOrderInput | SortOrder
  }

  export type gas_stationWhereUniqueInput = Prisma.AtLeast<{
    gas_uuid?: string
    AND?: gas_stationWhereInput | gas_stationWhereInput[]
    OR?: gas_stationWhereInput[]
    NOT?: gas_stationWhereInput | gas_stationWhereInput[]
    gas_fuel_type?: StringNullableFilter<"gas_station"> | string | null
    gas_value?: FloatNullableFilter<"gas_station"> | number | null
    gas_created_at?: DateTimeFilter<"gas_station"> | Date | string
    gas_updated_at?: DateTimeFilter<"gas_station"> | Date | string
    gas_ibm?: StringNullableFilter<"gas_station"> | string | null
    gas_identifier?: StringNullableFilter<"gas_station"> | string | null
  }, "gas_uuid">

  export type gas_stationOrderByWithAggregationInput = {
    gas_uuid?: SortOrder
    gas_fuel_type?: SortOrderInput | SortOrder
    gas_value?: SortOrderInput | SortOrder
    gas_created_at?: SortOrder
    gas_updated_at?: SortOrder
    gas_ibm?: SortOrderInput | SortOrder
    gas_identifier?: SortOrderInput | SortOrder
    _count?: gas_stationCountOrderByAggregateInput
    _avg?: gas_stationAvgOrderByAggregateInput
    _max?: gas_stationMaxOrderByAggregateInput
    _min?: gas_stationMinOrderByAggregateInput
    _sum?: gas_stationSumOrderByAggregateInput
  }

  export type gas_stationScalarWhereWithAggregatesInput = {
    AND?: gas_stationScalarWhereWithAggregatesInput | gas_stationScalarWhereWithAggregatesInput[]
    OR?: gas_stationScalarWhereWithAggregatesInput[]
    NOT?: gas_stationScalarWhereWithAggregatesInput | gas_stationScalarWhereWithAggregatesInput[]
    gas_uuid?: UuidWithAggregatesFilter<"gas_station"> | string
    gas_fuel_type?: StringNullableWithAggregatesFilter<"gas_station"> | string | null
    gas_value?: FloatNullableWithAggregatesFilter<"gas_station"> | number | null
    gas_created_at?: DateTimeWithAggregatesFilter<"gas_station"> | Date | string
    gas_updated_at?: DateTimeWithAggregatesFilter<"gas_station"> | Date | string
    gas_ibm?: StringNullableWithAggregatesFilter<"gas_station"> | string | null
    gas_identifier?: StringNullableWithAggregatesFilter<"gas_station"> | string | null
  }

  export type ibm_infoWhereInput = {
    AND?: ibm_infoWhereInput | ibm_infoWhereInput[]
    OR?: ibm_infoWhereInput[]
    NOT?: ibm_infoWhereInput | ibm_infoWhereInput[]
    ibm?: StringNullableFilter<"ibm_info"> | string | null
    nomefantasia?: StringNullableFilter<"ibm_info"> | string | null
    cnpj?: StringNullableFilter<"ibm_info"> | string | null
    razaosocial?: StringNullableFilter<"ibm_info"> | string | null
    cep?: StringNullableFilter<"ibm_info"> | string | null
    lat?: FloatNullableFilter<"ibm_info"> | number | null
    long?: FloatNullableFilter<"ibm_info"> | number | null
    id?: UuidFilter<"ibm_info"> | string
  }

  export type ibm_infoOrderByWithRelationInput = {
    ibm?: SortOrderInput | SortOrder
    nomefantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    razaosocial?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    long?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type ibm_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ibm_infoWhereInput | ibm_infoWhereInput[]
    OR?: ibm_infoWhereInput[]
    NOT?: ibm_infoWhereInput | ibm_infoWhereInput[]
    ibm?: StringNullableFilter<"ibm_info"> | string | null
    nomefantasia?: StringNullableFilter<"ibm_info"> | string | null
    cnpj?: StringNullableFilter<"ibm_info"> | string | null
    razaosocial?: StringNullableFilter<"ibm_info"> | string | null
    cep?: StringNullableFilter<"ibm_info"> | string | null
    lat?: FloatNullableFilter<"ibm_info"> | number | null
    long?: FloatNullableFilter<"ibm_info"> | number | null
  }, "id">

  export type ibm_infoOrderByWithAggregationInput = {
    ibm?: SortOrderInput | SortOrder
    nomefantasia?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    razaosocial?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    long?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: ibm_infoCountOrderByAggregateInput
    _avg?: ibm_infoAvgOrderByAggregateInput
    _max?: ibm_infoMaxOrderByAggregateInput
    _min?: ibm_infoMinOrderByAggregateInput
    _sum?: ibm_infoSumOrderByAggregateInput
  }

  export type ibm_infoScalarWhereWithAggregatesInput = {
    AND?: ibm_infoScalarWhereWithAggregatesInput | ibm_infoScalarWhereWithAggregatesInput[]
    OR?: ibm_infoScalarWhereWithAggregatesInput[]
    NOT?: ibm_infoScalarWhereWithAggregatesInput | ibm_infoScalarWhereWithAggregatesInput[]
    ibm?: StringNullableWithAggregatesFilter<"ibm_info"> | string | null
    nomefantasia?: StringNullableWithAggregatesFilter<"ibm_info"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"ibm_info"> | string | null
    razaosocial?: StringNullableWithAggregatesFilter<"ibm_info"> | string | null
    cep?: StringNullableWithAggregatesFilter<"ibm_info"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"ibm_info"> | number | null
    long?: FloatNullableWithAggregatesFilter<"ibm_info"> | number | null
    id?: UuidWithAggregatesFilter<"ibm_info"> | string
  }

  export type posto_signalWhereInput = {
    AND?: posto_signalWhereInput | posto_signalWhereInput[]
    OR?: posto_signalWhereInput[]
    NOT?: posto_signalWhereInput | posto_signalWhereInput[]
    table_id?: UuidFilter<"posto_signal"> | string
    posto_id?: UuidNullableFilter<"posto_signal"> | string | null
    vol_sold?: FloatNullableFilter<"posto_signal"> | number | null
    vol_rate?: FloatNullableFilter<"posto_signal"> | number | null
    vol_alert?: StringNullableFilter<"posto_signal"> | string | null
    invoicing?: FloatNullableFilter<"posto_signal"> | number | null
    invoice_rate?: FloatNullableFilter<"posto_signal"> | number | null
    invoice_alert?: StringNullableFilter<"posto_signal"> | string | null
    created_at?: DateTimeFilter<"posto_signal"> | Date | string
    rd_posto?: XOR<Rd_postoNullableRelationFilter, rd_postoWhereInput> | null
  }

  export type posto_signalOrderByWithRelationInput = {
    table_id?: SortOrder
    posto_id?: SortOrderInput | SortOrder
    vol_sold?: SortOrderInput | SortOrder
    vol_rate?: SortOrderInput | SortOrder
    vol_alert?: SortOrderInput | SortOrder
    invoicing?: SortOrderInput | SortOrder
    invoice_rate?: SortOrderInput | SortOrder
    invoice_alert?: SortOrderInput | SortOrder
    created_at?: SortOrder
    rd_posto?: rd_postoOrderByWithRelationInput
  }

  export type posto_signalWhereUniqueInput = Prisma.AtLeast<{
    table_id?: string
    AND?: posto_signalWhereInput | posto_signalWhereInput[]
    OR?: posto_signalWhereInput[]
    NOT?: posto_signalWhereInput | posto_signalWhereInput[]
    posto_id?: UuidNullableFilter<"posto_signal"> | string | null
    vol_sold?: FloatNullableFilter<"posto_signal"> | number | null
    vol_rate?: FloatNullableFilter<"posto_signal"> | number | null
    vol_alert?: StringNullableFilter<"posto_signal"> | string | null
    invoicing?: FloatNullableFilter<"posto_signal"> | number | null
    invoice_rate?: FloatNullableFilter<"posto_signal"> | number | null
    invoice_alert?: StringNullableFilter<"posto_signal"> | string | null
    created_at?: DateTimeFilter<"posto_signal"> | Date | string
    rd_posto?: XOR<Rd_postoNullableRelationFilter, rd_postoWhereInput> | null
  }, "table_id">

  export type posto_signalOrderByWithAggregationInput = {
    table_id?: SortOrder
    posto_id?: SortOrderInput | SortOrder
    vol_sold?: SortOrderInput | SortOrder
    vol_rate?: SortOrderInput | SortOrder
    vol_alert?: SortOrderInput | SortOrder
    invoicing?: SortOrderInput | SortOrder
    invoice_rate?: SortOrderInput | SortOrder
    invoice_alert?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: posto_signalCountOrderByAggregateInput
    _avg?: posto_signalAvgOrderByAggregateInput
    _max?: posto_signalMaxOrderByAggregateInput
    _min?: posto_signalMinOrderByAggregateInput
    _sum?: posto_signalSumOrderByAggregateInput
  }

  export type posto_signalScalarWhereWithAggregatesInput = {
    AND?: posto_signalScalarWhereWithAggregatesInput | posto_signalScalarWhereWithAggregatesInput[]
    OR?: posto_signalScalarWhereWithAggregatesInput[]
    NOT?: posto_signalScalarWhereWithAggregatesInput | posto_signalScalarWhereWithAggregatesInput[]
    table_id?: UuidWithAggregatesFilter<"posto_signal"> | string
    posto_id?: UuidNullableWithAggregatesFilter<"posto_signal"> | string | null
    vol_sold?: FloatNullableWithAggregatesFilter<"posto_signal"> | number | null
    vol_rate?: FloatNullableWithAggregatesFilter<"posto_signal"> | number | null
    vol_alert?: StringNullableWithAggregatesFilter<"posto_signal"> | string | null
    invoicing?: FloatNullableWithAggregatesFilter<"posto_signal"> | number | null
    invoice_rate?: FloatNullableWithAggregatesFilter<"posto_signal"> | number | null
    invoice_alert?: StringNullableWithAggregatesFilter<"posto_signal"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"posto_signal"> | Date | string
  }

  export type rd_postoWhereInput = {
    AND?: rd_postoWhereInput | rd_postoWhereInput[]
    OR?: rd_postoWhereInput[]
    NOT?: rd_postoWhereInput | rd_postoWhereInput[]
    posto_uuid?: UuidFilter<"rd_posto"> | string
    posto_name?: StringNullableFilter<"rd_posto"> | string | null
    posto_signal?: Posto_signalListRelationFilter
  }

  export type rd_postoOrderByWithRelationInput = {
    posto_uuid?: SortOrder
    posto_name?: SortOrderInput | SortOrder
    posto_signal?: posto_signalOrderByRelationAggregateInput
  }

  export type rd_postoWhereUniqueInput = Prisma.AtLeast<{
    posto_uuid?: string
    AND?: rd_postoWhereInput | rd_postoWhereInput[]
    OR?: rd_postoWhereInput[]
    NOT?: rd_postoWhereInput | rd_postoWhereInput[]
    posto_name?: StringNullableFilter<"rd_posto"> | string | null
    posto_signal?: Posto_signalListRelationFilter
  }, "posto_uuid">

  export type rd_postoOrderByWithAggregationInput = {
    posto_uuid?: SortOrder
    posto_name?: SortOrderInput | SortOrder
    _count?: rd_postoCountOrderByAggregateInput
    _max?: rd_postoMaxOrderByAggregateInput
    _min?: rd_postoMinOrderByAggregateInput
  }

  export type rd_postoScalarWhereWithAggregatesInput = {
    AND?: rd_postoScalarWhereWithAggregatesInput | rd_postoScalarWhereWithAggregatesInput[]
    OR?: rd_postoScalarWhereWithAggregatesInput[]
    NOT?: rd_postoScalarWhereWithAggregatesInput | rd_postoScalarWhereWithAggregatesInput[]
    posto_uuid?: UuidWithAggregatesFilter<"rd_posto"> | string
    posto_name?: StringNullableWithAggregatesFilter<"rd_posto"> | string | null
  }

  export type set_variablesWhereInput = {
    AND?: set_variablesWhereInput | set_variablesWhereInput[]
    OR?: set_variablesWhereInput[]
    NOT?: set_variablesWhereInput | set_variablesWhereInput[]
    set_uuid?: UuidFilter<"set_variables"> | string
    set_regular_gasoline?: FloatNullableFilter<"set_variables"> | number | null
    set_alcohol?: FloatNullableFilter<"set_variables"> | number | null
    use_uuid?: UuidNullableFilter<"set_variables"> | string | null
    set_created_at?: DateTimeFilter<"set_variables"> | Date | string
    set_updated_at?: DateTimeFilter<"set_variables"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type set_variablesOrderByWithRelationInput = {
    set_uuid?: SortOrder
    set_regular_gasoline?: SortOrderInput | SortOrder
    set_alcohol?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    set_created_at?: SortOrder
    set_updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type set_variablesWhereUniqueInput = Prisma.AtLeast<{
    set_uuid?: string
    AND?: set_variablesWhereInput | set_variablesWhereInput[]
    OR?: set_variablesWhereInput[]
    NOT?: set_variablesWhereInput | set_variablesWhereInput[]
    set_regular_gasoline?: FloatNullableFilter<"set_variables"> | number | null
    set_alcohol?: FloatNullableFilter<"set_variables"> | number | null
    use_uuid?: UuidNullableFilter<"set_variables"> | string | null
    set_created_at?: DateTimeFilter<"set_variables"> | Date | string
    set_updated_at?: DateTimeFilter<"set_variables"> | Date | string
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "set_uuid">

  export type set_variablesOrderByWithAggregationInput = {
    set_uuid?: SortOrder
    set_regular_gasoline?: SortOrderInput | SortOrder
    set_alcohol?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    set_created_at?: SortOrder
    set_updated_at?: SortOrder
    _count?: set_variablesCountOrderByAggregateInput
    _avg?: set_variablesAvgOrderByAggregateInput
    _max?: set_variablesMaxOrderByAggregateInput
    _min?: set_variablesMinOrderByAggregateInput
    _sum?: set_variablesSumOrderByAggregateInput
  }

  export type set_variablesScalarWhereWithAggregatesInput = {
    AND?: set_variablesScalarWhereWithAggregatesInput | set_variablesScalarWhereWithAggregatesInput[]
    OR?: set_variablesScalarWhereWithAggregatesInput[]
    NOT?: set_variablesScalarWhereWithAggregatesInput | set_variablesScalarWhereWithAggregatesInput[]
    set_uuid?: UuidWithAggregatesFilter<"set_variables"> | string
    set_regular_gasoline?: FloatNullableWithAggregatesFilter<"set_variables"> | number | null
    set_alcohol?: FloatNullableWithAggregatesFilter<"set_variables"> | number | null
    use_uuid?: UuidNullableWithAggregatesFilter<"set_variables"> | string | null
    set_created_at?: DateTimeWithAggregatesFilter<"set_variables"> | Date | string
    set_updated_at?: DateTimeWithAggregatesFilter<"set_variables"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    use_uuid?: UuidFilter<"users"> | string
    use_name?: StringNullableFilter<"users"> | string | null
    use_email?: StringNullableFilter<"users"> | string | null
    use_password?: StringNullableFilter<"users"> | string | null
    use_created_at?: DateTimeFilter<"users"> | Date | string
    use_updated_at?: DateTimeFilter<"users"> | Date | string
    use_date_expire?: DateTimeNullableFilter<"users"> | Date | string | null
    use_token?: StringNullableFilter<"users"> | string | null
    use_volume_gc?: BoolNullableFilter<"users"> | boolean | null
    use_volume_al?: BoolNullableFilter<"users"> | boolean | null
    use_volume_total?: BoolNullableFilter<"users"> | boolean | null
    use_volume_gc_min?: FloatNullableFilter<"users"> | number | null
    use_volume_al_min?: FloatNullableFilter<"users"> | number | null
    use_volume_total_min?: FloatNullableFilter<"users"> | number | null
    use_level?: StringNullableFilter<"users"> | string | null
    use_whats_app?: StringNullableListFilter<"users">
    use_margin_al?: BoolNullableFilter<"users"> | boolean | null
    use_margin_al_flag?: StringNullableFilter<"users"> | string | null
    use_margin_al_min?: FloatNullableFilter<"users"> | number | null
    use_margin_gc?: BoolNullableFilter<"users"> | boolean | null
    use_margin_gc_flag?: StringNullableFilter<"users"> | string | null
    use_margin_gc_min?: FloatNullableFilter<"users"> | number | null
    use_margin_total?: BoolNullableFilter<"users"> | boolean | null
    use_margin_total_flag?: StringNullableFilter<"users"> | string | null
    use_margin_total_min?: FloatNullableFilter<"users"> | number | null
    use_volume_al_flag?: StringNullableFilter<"users"> | string | null
    use_volume_gc_flag?: StringNullableFilter<"users"> | string | null
    use_volume_total_flag?: StringNullableFilter<"users"> | string | null
    fuel?: FuelListRelationFilter
    set_variables?: Set_variablesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    use_uuid?: SortOrder
    use_name?: SortOrderInput | SortOrder
    use_email?: SortOrderInput | SortOrder
    use_password?: SortOrderInput | SortOrder
    use_created_at?: SortOrder
    use_updated_at?: SortOrder
    use_date_expire?: SortOrderInput | SortOrder
    use_token?: SortOrderInput | SortOrder
    use_volume_gc?: SortOrderInput | SortOrder
    use_volume_al?: SortOrderInput | SortOrder
    use_volume_total?: SortOrderInput | SortOrder
    use_volume_gc_min?: SortOrderInput | SortOrder
    use_volume_al_min?: SortOrderInput | SortOrder
    use_volume_total_min?: SortOrderInput | SortOrder
    use_level?: SortOrderInput | SortOrder
    use_whats_app?: SortOrder
    use_margin_al?: SortOrderInput | SortOrder
    use_margin_al_flag?: SortOrderInput | SortOrder
    use_margin_al_min?: SortOrderInput | SortOrder
    use_margin_gc?: SortOrderInput | SortOrder
    use_margin_gc_flag?: SortOrderInput | SortOrder
    use_margin_gc_min?: SortOrderInput | SortOrder
    use_margin_total?: SortOrderInput | SortOrder
    use_margin_total_flag?: SortOrderInput | SortOrder
    use_margin_total_min?: SortOrderInput | SortOrder
    use_volume_al_flag?: SortOrderInput | SortOrder
    use_volume_gc_flag?: SortOrderInput | SortOrder
    use_volume_total_flag?: SortOrderInput | SortOrder
    fuel?: fuelOrderByRelationAggregateInput
    set_variables?: set_variablesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    use_uuid?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    use_name?: StringNullableFilter<"users"> | string | null
    use_email?: StringNullableFilter<"users"> | string | null
    use_password?: StringNullableFilter<"users"> | string | null
    use_created_at?: DateTimeFilter<"users"> | Date | string
    use_updated_at?: DateTimeFilter<"users"> | Date | string
    use_date_expire?: DateTimeNullableFilter<"users"> | Date | string | null
    use_token?: StringNullableFilter<"users"> | string | null
    use_volume_gc?: BoolNullableFilter<"users"> | boolean | null
    use_volume_al?: BoolNullableFilter<"users"> | boolean | null
    use_volume_total?: BoolNullableFilter<"users"> | boolean | null
    use_volume_gc_min?: FloatNullableFilter<"users"> | number | null
    use_volume_al_min?: FloatNullableFilter<"users"> | number | null
    use_volume_total_min?: FloatNullableFilter<"users"> | number | null
    use_level?: StringNullableFilter<"users"> | string | null
    use_whats_app?: StringNullableListFilter<"users">
    use_margin_al?: BoolNullableFilter<"users"> | boolean | null
    use_margin_al_flag?: StringNullableFilter<"users"> | string | null
    use_margin_al_min?: FloatNullableFilter<"users"> | number | null
    use_margin_gc?: BoolNullableFilter<"users"> | boolean | null
    use_margin_gc_flag?: StringNullableFilter<"users"> | string | null
    use_margin_gc_min?: FloatNullableFilter<"users"> | number | null
    use_margin_total?: BoolNullableFilter<"users"> | boolean | null
    use_margin_total_flag?: StringNullableFilter<"users"> | string | null
    use_margin_total_min?: FloatNullableFilter<"users"> | number | null
    use_volume_al_flag?: StringNullableFilter<"users"> | string | null
    use_volume_gc_flag?: StringNullableFilter<"users"> | string | null
    use_volume_total_flag?: StringNullableFilter<"users"> | string | null
    fuel?: FuelListRelationFilter
    set_variables?: Set_variablesListRelationFilter
  }, "use_uuid">

  export type usersOrderByWithAggregationInput = {
    use_uuid?: SortOrder
    use_name?: SortOrderInput | SortOrder
    use_email?: SortOrderInput | SortOrder
    use_password?: SortOrderInput | SortOrder
    use_created_at?: SortOrder
    use_updated_at?: SortOrder
    use_date_expire?: SortOrderInput | SortOrder
    use_token?: SortOrderInput | SortOrder
    use_volume_gc?: SortOrderInput | SortOrder
    use_volume_al?: SortOrderInput | SortOrder
    use_volume_total?: SortOrderInput | SortOrder
    use_volume_gc_min?: SortOrderInput | SortOrder
    use_volume_al_min?: SortOrderInput | SortOrder
    use_volume_total_min?: SortOrderInput | SortOrder
    use_level?: SortOrderInput | SortOrder
    use_whats_app?: SortOrder
    use_margin_al?: SortOrderInput | SortOrder
    use_margin_al_flag?: SortOrderInput | SortOrder
    use_margin_al_min?: SortOrderInput | SortOrder
    use_margin_gc?: SortOrderInput | SortOrder
    use_margin_gc_flag?: SortOrderInput | SortOrder
    use_margin_gc_min?: SortOrderInput | SortOrder
    use_margin_total?: SortOrderInput | SortOrder
    use_margin_total_flag?: SortOrderInput | SortOrder
    use_margin_total_min?: SortOrderInput | SortOrder
    use_volume_al_flag?: SortOrderInput | SortOrder
    use_volume_gc_flag?: SortOrderInput | SortOrder
    use_volume_total_flag?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    use_uuid?: UuidWithAggregatesFilter<"users"> | string
    use_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_email?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_password?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    use_updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    use_date_expire?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    use_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_volume_gc?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    use_volume_al?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    use_volume_total?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    use_volume_gc_min?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_volume_al_min?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_volume_total_min?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_level?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_whats_app?: StringNullableListFilter<"users">
    use_margin_al?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    use_margin_al_flag?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_margin_al_min?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_margin_gc?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    use_margin_gc_flag?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_margin_gc_min?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_margin_total?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    use_margin_total_flag?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_margin_total_min?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_volume_al_flag?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_volume_gc_flag?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_volume_total_flag?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type basedadosCreateInput = {
    company_uuid?: string
    company_emp?: number | null
    company_name?: string | null
    company_date?: Date | string | null
    company_week_day?: string | null
    company_fuel?: string | null
    company_volume?: number | null
    company_cost?: number | null
    company_sale?: number | null
    company_profit?: number | null
    company_created_at?: Date | string
    company_updated_at?: Date | string
  }

  export type basedadosUncheckedCreateInput = {
    company_uuid?: string
    company_emp?: number | null
    company_name?: string | null
    company_date?: Date | string | null
    company_week_day?: string | null
    company_fuel?: string | null
    company_volume?: number | null
    company_cost?: number | null
    company_sale?: number | null
    company_profit?: number | null
    company_created_at?: Date | string
    company_updated_at?: Date | string
  }

  export type basedadosUpdateInput = {
    company_uuid?: StringFieldUpdateOperationsInput | string
    company_emp?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_week_day?: NullableStringFieldUpdateOperationsInput | string | null
    company_fuel?: NullableStringFieldUpdateOperationsInput | string | null
    company_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    company_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    company_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    company_profit?: NullableFloatFieldUpdateOperationsInput | number | null
    company_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type basedadosUncheckedUpdateInput = {
    company_uuid?: StringFieldUpdateOperationsInput | string
    company_emp?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_week_day?: NullableStringFieldUpdateOperationsInput | string | null
    company_fuel?: NullableStringFieldUpdateOperationsInput | string | null
    company_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    company_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    company_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    company_profit?: NullableFloatFieldUpdateOperationsInput | number | null
    company_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type basedadosCreateManyInput = {
    company_uuid?: string
    company_emp?: number | null
    company_name?: string | null
    company_date?: Date | string | null
    company_week_day?: string | null
    company_fuel?: string | null
    company_volume?: number | null
    company_cost?: number | null
    company_sale?: number | null
    company_profit?: number | null
    company_created_at?: Date | string
    company_updated_at?: Date | string
  }

  export type basedadosUpdateManyMutationInput = {
    company_uuid?: StringFieldUpdateOperationsInput | string
    company_emp?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_week_day?: NullableStringFieldUpdateOperationsInput | string | null
    company_fuel?: NullableStringFieldUpdateOperationsInput | string | null
    company_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    company_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    company_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    company_profit?: NullableFloatFieldUpdateOperationsInput | number | null
    company_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type basedadosUncheckedUpdateManyInput = {
    company_uuid?: StringFieldUpdateOperationsInput | string
    company_emp?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_week_day?: NullableStringFieldUpdateOperationsInput | string | null
    company_fuel?: NullableStringFieldUpdateOperationsInput | string | null
    company_volume?: NullableFloatFieldUpdateOperationsInput | number | null
    company_cost?: NullableFloatFieldUpdateOperationsInput | number | null
    company_sale?: NullableFloatFieldUpdateOperationsInput | number | null
    company_profit?: NullableFloatFieldUpdateOperationsInput | number | null
    company_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dataframe_fuelCreateInput = {
    datafuel_uuid?: string
    datafuel_qtdAbastecimento?: number | null
    datafuel_vendaCombustivel?: number | null
    datafuel_litroCombustivel?: number | null
    datafuel_qtdProduto?: number | null
    datafuel_vendaProduto?: number | null
    datafuel_litroProduto?: number | null
    datafuel_qtdOutrosProdutos?: number | null
    datafuel_vendasOutros?: number | null
    datafuel_litroOutros?: number | null
    datafuel_custo?: number | null
    datafuel_lucro?: number | null
    datafuel_dt_registro?: string | null
    datafuel_updated?: string | null
  }

  export type dataframe_fuelUncheckedCreateInput = {
    datafuel_uuid?: string
    datafuel_qtdAbastecimento?: number | null
    datafuel_vendaCombustivel?: number | null
    datafuel_litroCombustivel?: number | null
    datafuel_qtdProduto?: number | null
    datafuel_vendaProduto?: number | null
    datafuel_litroProduto?: number | null
    datafuel_qtdOutrosProdutos?: number | null
    datafuel_vendasOutros?: number | null
    datafuel_litroOutros?: number | null
    datafuel_custo?: number | null
    datafuel_lucro?: number | null
    datafuel_dt_registro?: string | null
    datafuel_updated?: string | null
  }

  export type dataframe_fuelUpdateInput = {
    datafuel_uuid?: StringFieldUpdateOperationsInput | string
    datafuel_qtdAbastecimento?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdOutrosProdutos?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendasOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_custo?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_lucro?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    datafuel_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataframe_fuelUncheckedUpdateInput = {
    datafuel_uuid?: StringFieldUpdateOperationsInput | string
    datafuel_qtdAbastecimento?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdOutrosProdutos?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendasOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_custo?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_lucro?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    datafuel_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataframe_fuelCreateManyInput = {
    datafuel_uuid?: string
    datafuel_qtdAbastecimento?: number | null
    datafuel_vendaCombustivel?: number | null
    datafuel_litroCombustivel?: number | null
    datafuel_qtdProduto?: number | null
    datafuel_vendaProduto?: number | null
    datafuel_litroProduto?: number | null
    datafuel_qtdOutrosProdutos?: number | null
    datafuel_vendasOutros?: number | null
    datafuel_litroOutros?: number | null
    datafuel_custo?: number | null
    datafuel_lucro?: number | null
    datafuel_dt_registro?: string | null
    datafuel_updated?: string | null
  }

  export type dataframe_fuelUpdateManyMutationInput = {
    datafuel_uuid?: StringFieldUpdateOperationsInput | string
    datafuel_qtdAbastecimento?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdOutrosProdutos?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendasOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_custo?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_lucro?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    datafuel_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataframe_fuelUncheckedUpdateManyInput = {
    datafuel_uuid?: StringFieldUpdateOperationsInput | string
    datafuel_qtdAbastecimento?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroCombustivel?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendaProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroProduto?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_qtdOutrosProdutos?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_vendasOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_litroOutros?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_custo?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_lucro?: NullableFloatFieldUpdateOperationsInput | number | null
    datafuel_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    datafuel_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataframe_productCreateInput = {
    dataproduct_uuid?: string
    dataproduct_posto?: string | null
    dataproduct_venda_produto?: string | null
    dataproduct_valor_venda?: number | null
    dataproduct_qtd_produto_vendido?: number | null
    dataproduct_dt_registro?: string | null
    dataproduct_updated?: string | null
  }

  export type dataframe_productUncheckedCreateInput = {
    dataproduct_uuid?: string
    dataproduct_posto?: string | null
    dataproduct_venda_produto?: string | null
    dataproduct_valor_venda?: number | null
    dataproduct_qtd_produto_vendido?: number | null
    dataproduct_dt_registro?: string | null
    dataproduct_updated?: string | null
  }

  export type dataframe_productUpdateInput = {
    dataproduct_uuid?: StringFieldUpdateOperationsInput | string
    dataproduct_posto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_venda_produto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_valor_venda?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_qtd_produto_vendido?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataframe_productUncheckedUpdateInput = {
    dataproduct_uuid?: StringFieldUpdateOperationsInput | string
    dataproduct_posto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_venda_produto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_valor_venda?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_qtd_produto_vendido?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataframe_productCreateManyInput = {
    dataproduct_uuid?: string
    dataproduct_posto?: string | null
    dataproduct_venda_produto?: string | null
    dataproduct_valor_venda?: number | null
    dataproduct_qtd_produto_vendido?: number | null
    dataproduct_dt_registro?: string | null
    dataproduct_updated?: string | null
  }

  export type dataframe_productUpdateManyMutationInput = {
    dataproduct_uuid?: StringFieldUpdateOperationsInput | string
    dataproduct_posto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_venda_produto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_valor_venda?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_qtd_produto_vendido?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataframe_productUncheckedUpdateManyInput = {
    dataproduct_uuid?: StringFieldUpdateOperationsInput | string
    dataproduct_posto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_venda_produto?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_valor_venda?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_qtd_produto_vendido?: NullableFloatFieldUpdateOperationsInput | number | null
    dataproduct_dt_registro?: NullableStringFieldUpdateOperationsInput | string | null
    dataproduct_updated?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fuelCreateInput = {
    fuel_uuid?: string
    fuel_regular_gasoline?: number | null
    fuel_alcohol?: number | null
    fuel_created_at?: Date | string
    fuel_updated_at?: Date | string
    users?: usersCreateNestedOneWithoutFuelInput
  }

  export type fuelUncheckedCreateInput = {
    fuel_uuid?: string
    fuel_regular_gasoline?: number | null
    fuel_alcohol?: number | null
    use_uuid?: string | null
    fuel_created_at?: Date | string
    fuel_updated_at?: Date | string
  }

  export type fuelUpdateInput = {
    fuel_uuid?: StringFieldUpdateOperationsInput | string
    fuel_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fuel_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutFuelNestedInput
  }

  export type fuelUncheckedUpdateInput = {
    fuel_uuid?: StringFieldUpdateOperationsInput | string
    fuel_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fuel_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelCreateManyInput = {
    fuel_uuid?: string
    fuel_regular_gasoline?: number | null
    fuel_alcohol?: number | null
    use_uuid?: string | null
    fuel_created_at?: Date | string
    fuel_updated_at?: Date | string
  }

  export type fuelUpdateManyMutationInput = {
    fuel_uuid?: StringFieldUpdateOperationsInput | string
    fuel_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fuel_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelUncheckedUpdateManyInput = {
    fuel_uuid?: StringFieldUpdateOperationsInput | string
    fuel_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    fuel_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fuel_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gas_stationCreateInput = {
    gas_uuid?: string
    gas_fuel_type?: string | null
    gas_value?: number | null
    gas_created_at?: Date | string
    gas_updated_at?: Date | string
    gas_ibm?: string | null
    gas_identifier?: string | null
  }

  export type gas_stationUncheckedCreateInput = {
    gas_uuid?: string
    gas_fuel_type?: string | null
    gas_value?: number | null
    gas_created_at?: Date | string
    gas_updated_at?: Date | string
    gas_ibm?: string | null
    gas_identifier?: string | null
  }

  export type gas_stationUpdateInput = {
    gas_uuid?: StringFieldUpdateOperationsInput | string
    gas_fuel_type?: NullableStringFieldUpdateOperationsInput | string | null
    gas_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_ibm?: NullableStringFieldUpdateOperationsInput | string | null
    gas_identifier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gas_stationUncheckedUpdateInput = {
    gas_uuid?: StringFieldUpdateOperationsInput | string
    gas_fuel_type?: NullableStringFieldUpdateOperationsInput | string | null
    gas_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_ibm?: NullableStringFieldUpdateOperationsInput | string | null
    gas_identifier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gas_stationCreateManyInput = {
    gas_uuid?: string
    gas_fuel_type?: string | null
    gas_value?: number | null
    gas_created_at?: Date | string
    gas_updated_at?: Date | string
    gas_ibm?: string | null
    gas_identifier?: string | null
  }

  export type gas_stationUpdateManyMutationInput = {
    gas_uuid?: StringFieldUpdateOperationsInput | string
    gas_fuel_type?: NullableStringFieldUpdateOperationsInput | string | null
    gas_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_ibm?: NullableStringFieldUpdateOperationsInput | string | null
    gas_identifier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gas_stationUncheckedUpdateManyInput = {
    gas_uuid?: StringFieldUpdateOperationsInput | string
    gas_fuel_type?: NullableStringFieldUpdateOperationsInput | string | null
    gas_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_ibm?: NullableStringFieldUpdateOperationsInput | string | null
    gas_identifier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ibm_infoCreateInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
  }

  export type ibm_infoUncheckedCreateInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
  }

  export type ibm_infoUpdateInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ibm_infoUncheckedUpdateInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ibm_infoCreateManyInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
  }

  export type ibm_infoUpdateManyMutationInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ibm_infoUncheckedUpdateManyInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
  }

  export type posto_signalCreateInput = {
    table_id?: string
    vol_sold?: number | null
    vol_rate?: number | null
    vol_alert?: string | null
    invoicing?: number | null
    invoice_rate?: number | null
    invoice_alert?: string | null
    created_at?: Date | string
    rd_posto?: rd_postoCreateNestedOneWithoutPosto_signalInput
  }

  export type posto_signalUncheckedCreateInput = {
    table_id?: string
    posto_id?: string | null
    vol_sold?: number | null
    vol_rate?: number | null
    vol_alert?: string | null
    invoicing?: number | null
    invoice_rate?: number | null
    invoice_alert?: string | null
    created_at?: Date | string
  }

  export type posto_signalUpdateInput = {
    table_id?: StringFieldUpdateOperationsInput | string
    vol_sold?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_alert?: NullableStringFieldUpdateOperationsInput | string | null
    invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_alert?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rd_posto?: rd_postoUpdateOneWithoutPosto_signalNestedInput
  }

  export type posto_signalUncheckedUpdateInput = {
    table_id?: StringFieldUpdateOperationsInput | string
    posto_id?: NullableStringFieldUpdateOperationsInput | string | null
    vol_sold?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_alert?: NullableStringFieldUpdateOperationsInput | string | null
    invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_alert?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posto_signalCreateManyInput = {
    table_id?: string
    posto_id?: string | null
    vol_sold?: number | null
    vol_rate?: number | null
    vol_alert?: string | null
    invoicing?: number | null
    invoice_rate?: number | null
    invoice_alert?: string | null
    created_at?: Date | string
  }

  export type posto_signalUpdateManyMutationInput = {
    table_id?: StringFieldUpdateOperationsInput | string
    vol_sold?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_alert?: NullableStringFieldUpdateOperationsInput | string | null
    invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_alert?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posto_signalUncheckedUpdateManyInput = {
    table_id?: StringFieldUpdateOperationsInput | string
    posto_id?: NullableStringFieldUpdateOperationsInput | string | null
    vol_sold?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_alert?: NullableStringFieldUpdateOperationsInput | string | null
    invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_alert?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rd_postoCreateInput = {
    posto_uuid?: string
    posto_name?: string | null
    posto_signal?: posto_signalCreateNestedManyWithoutRd_postoInput
  }

  export type rd_postoUncheckedCreateInput = {
    posto_uuid?: string
    posto_name?: string | null
    posto_signal?: posto_signalUncheckedCreateNestedManyWithoutRd_postoInput
  }

  export type rd_postoUpdateInput = {
    posto_uuid?: StringFieldUpdateOperationsInput | string
    posto_name?: NullableStringFieldUpdateOperationsInput | string | null
    posto_signal?: posto_signalUpdateManyWithoutRd_postoNestedInput
  }

  export type rd_postoUncheckedUpdateInput = {
    posto_uuid?: StringFieldUpdateOperationsInput | string
    posto_name?: NullableStringFieldUpdateOperationsInput | string | null
    posto_signal?: posto_signalUncheckedUpdateManyWithoutRd_postoNestedInput
  }

  export type rd_postoCreateManyInput = {
    posto_uuid?: string
    posto_name?: string | null
  }

  export type rd_postoUpdateManyMutationInput = {
    posto_uuid?: StringFieldUpdateOperationsInput | string
    posto_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rd_postoUncheckedUpdateManyInput = {
    posto_uuid?: StringFieldUpdateOperationsInput | string
    posto_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type set_variablesCreateInput = {
    set_uuid?: string
    set_regular_gasoline?: number | null
    set_alcohol?: number | null
    set_created_at?: Date | string
    set_updated_at?: Date | string
    users?: usersCreateNestedOneWithoutSet_variablesInput
  }

  export type set_variablesUncheckedCreateInput = {
    set_uuid?: string
    set_regular_gasoline?: number | null
    set_alcohol?: number | null
    use_uuid?: string | null
    set_created_at?: Date | string
    set_updated_at?: Date | string
  }

  export type set_variablesUpdateInput = {
    set_uuid?: StringFieldUpdateOperationsInput | string
    set_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    set_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    set_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    set_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutSet_variablesNestedInput
  }

  export type set_variablesUncheckedUpdateInput = {
    set_uuid?: StringFieldUpdateOperationsInput | string
    set_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    set_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    set_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    set_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type set_variablesCreateManyInput = {
    set_uuid?: string
    set_regular_gasoline?: number | null
    set_alcohol?: number | null
    use_uuid?: string | null
    set_created_at?: Date | string
    set_updated_at?: Date | string
  }

  export type set_variablesUpdateManyMutationInput = {
    set_uuid?: StringFieldUpdateOperationsInput | string
    set_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    set_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    set_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    set_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type set_variablesUncheckedUpdateManyInput = {
    set_uuid?: StringFieldUpdateOperationsInput | string
    set_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    set_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    set_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    set_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_volume_gc?: boolean | null
    use_volume_al?: boolean | null
    use_volume_total?: boolean | null
    use_volume_gc_min?: number | null
    use_volume_al_min?: number | null
    use_volume_total_min?: number | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_margin_al?: boolean | null
    use_margin_al_flag?: string | null
    use_margin_al_min?: number | null
    use_margin_gc?: boolean | null
    use_margin_gc_flag?: string | null
    use_margin_gc_min?: number | null
    use_margin_total?: boolean | null
    use_margin_total_flag?: string | null
    use_margin_total_min?: number | null
    use_volume_al_flag?: string | null
    use_volume_gc_flag?: string | null
    use_volume_total_flag?: string | null
    fuel?: fuelCreateNestedManyWithoutUsersInput
    set_variables?: set_variablesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_volume_gc?: boolean | null
    use_volume_al?: boolean | null
    use_volume_total?: boolean | null
    use_volume_gc_min?: number | null
    use_volume_al_min?: number | null
    use_volume_total_min?: number | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_margin_al?: boolean | null
    use_margin_al_flag?: string | null
    use_margin_al_min?: number | null
    use_margin_gc?: boolean | null
    use_margin_gc_flag?: string | null
    use_margin_gc_min?: number | null
    use_margin_total?: boolean | null
    use_margin_total_flag?: string | null
    use_margin_total_min?: number | null
    use_volume_al_flag?: string | null
    use_volume_gc_flag?: string | null
    use_volume_total_flag?: string | null
    fuel?: fuelUncheckedCreateNestedManyWithoutUsersInput
    set_variables?: set_variablesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: fuelUpdateManyWithoutUsersNestedInput
    set_variables?: set_variablesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: fuelUncheckedUpdateManyWithoutUsersNestedInput
    set_variables?: set_variablesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_volume_gc?: boolean | null
    use_volume_al?: boolean | null
    use_volume_total?: boolean | null
    use_volume_gc_min?: number | null
    use_volume_al_min?: number | null
    use_volume_total_min?: number | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_margin_al?: boolean | null
    use_margin_al_flag?: string | null
    use_margin_al_min?: number | null
    use_margin_gc?: boolean | null
    use_margin_gc_flag?: string | null
    use_margin_gc_min?: number | null
    use_margin_total?: boolean | null
    use_margin_total_flag?: string | null
    use_margin_total_min?: number | null
    use_volume_al_flag?: string | null
    use_volume_gc_flag?: string | null
    use_volume_total_flag?: string | null
  }

  export type usersUpdateManyMutationInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type basedadosCountOrderByAggregateInput = {
    company_uuid?: SortOrder
    company_emp?: SortOrder
    company_name?: SortOrder
    company_date?: SortOrder
    company_week_day?: SortOrder
    company_fuel?: SortOrder
    company_volume?: SortOrder
    company_cost?: SortOrder
    company_sale?: SortOrder
    company_profit?: SortOrder
    company_created_at?: SortOrder
    company_updated_at?: SortOrder
  }

  export type basedadosAvgOrderByAggregateInput = {
    company_emp?: SortOrder
    company_volume?: SortOrder
    company_cost?: SortOrder
    company_sale?: SortOrder
    company_profit?: SortOrder
  }

  export type basedadosMaxOrderByAggregateInput = {
    company_uuid?: SortOrder
    company_emp?: SortOrder
    company_name?: SortOrder
    company_date?: SortOrder
    company_week_day?: SortOrder
    company_fuel?: SortOrder
    company_volume?: SortOrder
    company_cost?: SortOrder
    company_sale?: SortOrder
    company_profit?: SortOrder
    company_created_at?: SortOrder
    company_updated_at?: SortOrder
  }

  export type basedadosMinOrderByAggregateInput = {
    company_uuid?: SortOrder
    company_emp?: SortOrder
    company_name?: SortOrder
    company_date?: SortOrder
    company_week_day?: SortOrder
    company_fuel?: SortOrder
    company_volume?: SortOrder
    company_cost?: SortOrder
    company_sale?: SortOrder
    company_profit?: SortOrder
    company_created_at?: SortOrder
    company_updated_at?: SortOrder
  }

  export type basedadosSumOrderByAggregateInput = {
    company_emp?: SortOrder
    company_volume?: SortOrder
    company_cost?: SortOrder
    company_sale?: SortOrder
    company_profit?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type dataframe_fuelCountOrderByAggregateInput = {
    datafuel_uuid?: SortOrder
    datafuel_qtdAbastecimento?: SortOrder
    datafuel_vendaCombustivel?: SortOrder
    datafuel_litroCombustivel?: SortOrder
    datafuel_qtdProduto?: SortOrder
    datafuel_vendaProduto?: SortOrder
    datafuel_litroProduto?: SortOrder
    datafuel_qtdOutrosProdutos?: SortOrder
    datafuel_vendasOutros?: SortOrder
    datafuel_litroOutros?: SortOrder
    datafuel_custo?: SortOrder
    datafuel_lucro?: SortOrder
    datafuel_dt_registro?: SortOrder
    datafuel_updated?: SortOrder
  }

  export type dataframe_fuelAvgOrderByAggregateInput = {
    datafuel_qtdAbastecimento?: SortOrder
    datafuel_vendaCombustivel?: SortOrder
    datafuel_litroCombustivel?: SortOrder
    datafuel_qtdProduto?: SortOrder
    datafuel_vendaProduto?: SortOrder
    datafuel_litroProduto?: SortOrder
    datafuel_qtdOutrosProdutos?: SortOrder
    datafuel_vendasOutros?: SortOrder
    datafuel_litroOutros?: SortOrder
    datafuel_custo?: SortOrder
    datafuel_lucro?: SortOrder
  }

  export type dataframe_fuelMaxOrderByAggregateInput = {
    datafuel_uuid?: SortOrder
    datafuel_qtdAbastecimento?: SortOrder
    datafuel_vendaCombustivel?: SortOrder
    datafuel_litroCombustivel?: SortOrder
    datafuel_qtdProduto?: SortOrder
    datafuel_vendaProduto?: SortOrder
    datafuel_litroProduto?: SortOrder
    datafuel_qtdOutrosProdutos?: SortOrder
    datafuel_vendasOutros?: SortOrder
    datafuel_litroOutros?: SortOrder
    datafuel_custo?: SortOrder
    datafuel_lucro?: SortOrder
    datafuel_dt_registro?: SortOrder
    datafuel_updated?: SortOrder
  }

  export type dataframe_fuelMinOrderByAggregateInput = {
    datafuel_uuid?: SortOrder
    datafuel_qtdAbastecimento?: SortOrder
    datafuel_vendaCombustivel?: SortOrder
    datafuel_litroCombustivel?: SortOrder
    datafuel_qtdProduto?: SortOrder
    datafuel_vendaProduto?: SortOrder
    datafuel_litroProduto?: SortOrder
    datafuel_qtdOutrosProdutos?: SortOrder
    datafuel_vendasOutros?: SortOrder
    datafuel_litroOutros?: SortOrder
    datafuel_custo?: SortOrder
    datafuel_lucro?: SortOrder
    datafuel_dt_registro?: SortOrder
    datafuel_updated?: SortOrder
  }

  export type dataframe_fuelSumOrderByAggregateInput = {
    datafuel_qtdAbastecimento?: SortOrder
    datafuel_vendaCombustivel?: SortOrder
    datafuel_litroCombustivel?: SortOrder
    datafuel_qtdProduto?: SortOrder
    datafuel_vendaProduto?: SortOrder
    datafuel_litroProduto?: SortOrder
    datafuel_qtdOutrosProdutos?: SortOrder
    datafuel_vendasOutros?: SortOrder
    datafuel_litroOutros?: SortOrder
    datafuel_custo?: SortOrder
    datafuel_lucro?: SortOrder
  }

  export type dataframe_productCountOrderByAggregateInput = {
    dataproduct_uuid?: SortOrder
    dataproduct_posto?: SortOrder
    dataproduct_venda_produto?: SortOrder
    dataproduct_valor_venda?: SortOrder
    dataproduct_qtd_produto_vendido?: SortOrder
    dataproduct_dt_registro?: SortOrder
    dataproduct_updated?: SortOrder
  }

  export type dataframe_productAvgOrderByAggregateInput = {
    dataproduct_valor_venda?: SortOrder
    dataproduct_qtd_produto_vendido?: SortOrder
  }

  export type dataframe_productMaxOrderByAggregateInput = {
    dataproduct_uuid?: SortOrder
    dataproduct_posto?: SortOrder
    dataproduct_venda_produto?: SortOrder
    dataproduct_valor_venda?: SortOrder
    dataproduct_qtd_produto_vendido?: SortOrder
    dataproduct_dt_registro?: SortOrder
    dataproduct_updated?: SortOrder
  }

  export type dataframe_productMinOrderByAggregateInput = {
    dataproduct_uuid?: SortOrder
    dataproduct_posto?: SortOrder
    dataproduct_venda_produto?: SortOrder
    dataproduct_valor_venda?: SortOrder
    dataproduct_qtd_produto_vendido?: SortOrder
    dataproduct_dt_registro?: SortOrder
    dataproduct_updated?: SortOrder
  }

  export type dataframe_productSumOrderByAggregateInput = {
    dataproduct_valor_venda?: SortOrder
    dataproduct_qtd_produto_vendido?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type fuelCountOrderByAggregateInput = {
    fuel_uuid?: SortOrder
    fuel_regular_gasoline?: SortOrder
    fuel_alcohol?: SortOrder
    use_uuid?: SortOrder
    fuel_created_at?: SortOrder
    fuel_updated_at?: SortOrder
  }

  export type fuelAvgOrderByAggregateInput = {
    fuel_regular_gasoline?: SortOrder
    fuel_alcohol?: SortOrder
  }

  export type fuelMaxOrderByAggregateInput = {
    fuel_uuid?: SortOrder
    fuel_regular_gasoline?: SortOrder
    fuel_alcohol?: SortOrder
    use_uuid?: SortOrder
    fuel_created_at?: SortOrder
    fuel_updated_at?: SortOrder
  }

  export type fuelMinOrderByAggregateInput = {
    fuel_uuid?: SortOrder
    fuel_regular_gasoline?: SortOrder
    fuel_alcohol?: SortOrder
    use_uuid?: SortOrder
    fuel_created_at?: SortOrder
    fuel_updated_at?: SortOrder
  }

  export type fuelSumOrderByAggregateInput = {
    fuel_regular_gasoline?: SortOrder
    fuel_alcohol?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type gas_stationCountOrderByAggregateInput = {
    gas_uuid?: SortOrder
    gas_fuel_type?: SortOrder
    gas_value?: SortOrder
    gas_created_at?: SortOrder
    gas_updated_at?: SortOrder
    gas_ibm?: SortOrder
    gas_identifier?: SortOrder
  }

  export type gas_stationAvgOrderByAggregateInput = {
    gas_value?: SortOrder
  }

  export type gas_stationMaxOrderByAggregateInput = {
    gas_uuid?: SortOrder
    gas_fuel_type?: SortOrder
    gas_value?: SortOrder
    gas_created_at?: SortOrder
    gas_updated_at?: SortOrder
    gas_ibm?: SortOrder
    gas_identifier?: SortOrder
  }

  export type gas_stationMinOrderByAggregateInput = {
    gas_uuid?: SortOrder
    gas_fuel_type?: SortOrder
    gas_value?: SortOrder
    gas_created_at?: SortOrder
    gas_updated_at?: SortOrder
    gas_ibm?: SortOrder
    gas_identifier?: SortOrder
  }

  export type gas_stationSumOrderByAggregateInput = {
    gas_value?: SortOrder
  }

  export type ibm_infoCountOrderByAggregateInput = {
    ibm?: SortOrder
    nomefantasia?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    cep?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    id?: SortOrder
  }

  export type ibm_infoAvgOrderByAggregateInput = {
    lat?: SortOrder
    long?: SortOrder
  }

  export type ibm_infoMaxOrderByAggregateInput = {
    ibm?: SortOrder
    nomefantasia?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    cep?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    id?: SortOrder
  }

  export type ibm_infoMinOrderByAggregateInput = {
    ibm?: SortOrder
    nomefantasia?: SortOrder
    cnpj?: SortOrder
    razaosocial?: SortOrder
    cep?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    id?: SortOrder
  }

  export type ibm_infoSumOrderByAggregateInput = {
    lat?: SortOrder
    long?: SortOrder
  }

  export type Rd_postoNullableRelationFilter = {
    is?: rd_postoWhereInput | null
    isNot?: rd_postoWhereInput | null
  }

  export type posto_signalCountOrderByAggregateInput = {
    table_id?: SortOrder
    posto_id?: SortOrder
    vol_sold?: SortOrder
    vol_rate?: SortOrder
    vol_alert?: SortOrder
    invoicing?: SortOrder
    invoice_rate?: SortOrder
    invoice_alert?: SortOrder
    created_at?: SortOrder
  }

  export type posto_signalAvgOrderByAggregateInput = {
    vol_sold?: SortOrder
    vol_rate?: SortOrder
    invoicing?: SortOrder
    invoice_rate?: SortOrder
  }

  export type posto_signalMaxOrderByAggregateInput = {
    table_id?: SortOrder
    posto_id?: SortOrder
    vol_sold?: SortOrder
    vol_rate?: SortOrder
    vol_alert?: SortOrder
    invoicing?: SortOrder
    invoice_rate?: SortOrder
    invoice_alert?: SortOrder
    created_at?: SortOrder
  }

  export type posto_signalMinOrderByAggregateInput = {
    table_id?: SortOrder
    posto_id?: SortOrder
    vol_sold?: SortOrder
    vol_rate?: SortOrder
    vol_alert?: SortOrder
    invoicing?: SortOrder
    invoice_rate?: SortOrder
    invoice_alert?: SortOrder
    created_at?: SortOrder
  }

  export type posto_signalSumOrderByAggregateInput = {
    vol_sold?: SortOrder
    vol_rate?: SortOrder
    invoicing?: SortOrder
    invoice_rate?: SortOrder
  }

  export type Posto_signalListRelationFilter = {
    every?: posto_signalWhereInput
    some?: posto_signalWhereInput
    none?: posto_signalWhereInput
  }

  export type posto_signalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rd_postoCountOrderByAggregateInput = {
    posto_uuid?: SortOrder
    posto_name?: SortOrder
  }

  export type rd_postoMaxOrderByAggregateInput = {
    posto_uuid?: SortOrder
    posto_name?: SortOrder
  }

  export type rd_postoMinOrderByAggregateInput = {
    posto_uuid?: SortOrder
    posto_name?: SortOrder
  }

  export type set_variablesCountOrderByAggregateInput = {
    set_uuid?: SortOrder
    set_regular_gasoline?: SortOrder
    set_alcohol?: SortOrder
    use_uuid?: SortOrder
    set_created_at?: SortOrder
    set_updated_at?: SortOrder
  }

  export type set_variablesAvgOrderByAggregateInput = {
    set_regular_gasoline?: SortOrder
    set_alcohol?: SortOrder
  }

  export type set_variablesMaxOrderByAggregateInput = {
    set_uuid?: SortOrder
    set_regular_gasoline?: SortOrder
    set_alcohol?: SortOrder
    use_uuid?: SortOrder
    set_created_at?: SortOrder
    set_updated_at?: SortOrder
  }

  export type set_variablesMinOrderByAggregateInput = {
    set_uuid?: SortOrder
    set_regular_gasoline?: SortOrder
    set_alcohol?: SortOrder
    use_uuid?: SortOrder
    set_created_at?: SortOrder
    set_updated_at?: SortOrder
  }

  export type set_variablesSumOrderByAggregateInput = {
    set_regular_gasoline?: SortOrder
    set_alcohol?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FuelListRelationFilter = {
    every?: fuelWhereInput
    some?: fuelWhereInput
    none?: fuelWhereInput
  }

  export type Set_variablesListRelationFilter = {
    every?: set_variablesWhereInput
    some?: set_variablesWhereInput
    none?: set_variablesWhereInput
  }

  export type fuelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type set_variablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    use_uuid?: SortOrder
    use_name?: SortOrder
    use_email?: SortOrder
    use_password?: SortOrder
    use_created_at?: SortOrder
    use_updated_at?: SortOrder
    use_date_expire?: SortOrder
    use_token?: SortOrder
    use_volume_gc?: SortOrder
    use_volume_al?: SortOrder
    use_volume_total?: SortOrder
    use_volume_gc_min?: SortOrder
    use_volume_al_min?: SortOrder
    use_volume_total_min?: SortOrder
    use_level?: SortOrder
    use_whats_app?: SortOrder
    use_margin_al?: SortOrder
    use_margin_al_flag?: SortOrder
    use_margin_al_min?: SortOrder
    use_margin_gc?: SortOrder
    use_margin_gc_flag?: SortOrder
    use_margin_gc_min?: SortOrder
    use_margin_total?: SortOrder
    use_margin_total_flag?: SortOrder
    use_margin_total_min?: SortOrder
    use_volume_al_flag?: SortOrder
    use_volume_gc_flag?: SortOrder
    use_volume_total_flag?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    use_volume_gc_min?: SortOrder
    use_volume_al_min?: SortOrder
    use_volume_total_min?: SortOrder
    use_margin_al_min?: SortOrder
    use_margin_gc_min?: SortOrder
    use_margin_total_min?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    use_uuid?: SortOrder
    use_name?: SortOrder
    use_email?: SortOrder
    use_password?: SortOrder
    use_created_at?: SortOrder
    use_updated_at?: SortOrder
    use_date_expire?: SortOrder
    use_token?: SortOrder
    use_volume_gc?: SortOrder
    use_volume_al?: SortOrder
    use_volume_total?: SortOrder
    use_volume_gc_min?: SortOrder
    use_volume_al_min?: SortOrder
    use_volume_total_min?: SortOrder
    use_level?: SortOrder
    use_margin_al?: SortOrder
    use_margin_al_flag?: SortOrder
    use_margin_al_min?: SortOrder
    use_margin_gc?: SortOrder
    use_margin_gc_flag?: SortOrder
    use_margin_gc_min?: SortOrder
    use_margin_total?: SortOrder
    use_margin_total_flag?: SortOrder
    use_margin_total_min?: SortOrder
    use_volume_al_flag?: SortOrder
    use_volume_gc_flag?: SortOrder
    use_volume_total_flag?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    use_uuid?: SortOrder
    use_name?: SortOrder
    use_email?: SortOrder
    use_password?: SortOrder
    use_created_at?: SortOrder
    use_updated_at?: SortOrder
    use_date_expire?: SortOrder
    use_token?: SortOrder
    use_volume_gc?: SortOrder
    use_volume_al?: SortOrder
    use_volume_total?: SortOrder
    use_volume_gc_min?: SortOrder
    use_volume_al_min?: SortOrder
    use_volume_total_min?: SortOrder
    use_level?: SortOrder
    use_margin_al?: SortOrder
    use_margin_al_flag?: SortOrder
    use_margin_al_min?: SortOrder
    use_margin_gc?: SortOrder
    use_margin_gc_flag?: SortOrder
    use_margin_gc_min?: SortOrder
    use_margin_total?: SortOrder
    use_margin_total_flag?: SortOrder
    use_margin_total_min?: SortOrder
    use_volume_al_flag?: SortOrder
    use_volume_gc_flag?: SortOrder
    use_volume_total_flag?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    use_volume_gc_min?: SortOrder
    use_volume_al_min?: SortOrder
    use_volume_total_min?: SortOrder
    use_margin_al_min?: SortOrder
    use_margin_gc_min?: SortOrder
    use_margin_total_min?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersCreateNestedOneWithoutFuelInput = {
    create?: XOR<usersCreateWithoutFuelInput, usersUncheckedCreateWithoutFuelInput>
    connectOrCreate?: usersCreateOrConnectWithoutFuelInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutFuelNestedInput = {
    create?: XOR<usersCreateWithoutFuelInput, usersUncheckedCreateWithoutFuelInput>
    connectOrCreate?: usersCreateOrConnectWithoutFuelInput
    upsert?: usersUpsertWithoutFuelInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFuelInput, usersUpdateWithoutFuelInput>, usersUncheckedUpdateWithoutFuelInput>
  }

  export type rd_postoCreateNestedOneWithoutPosto_signalInput = {
    create?: XOR<rd_postoCreateWithoutPosto_signalInput, rd_postoUncheckedCreateWithoutPosto_signalInput>
    connectOrCreate?: rd_postoCreateOrConnectWithoutPosto_signalInput
    connect?: rd_postoWhereUniqueInput
  }

  export type rd_postoUpdateOneWithoutPosto_signalNestedInput = {
    create?: XOR<rd_postoCreateWithoutPosto_signalInput, rd_postoUncheckedCreateWithoutPosto_signalInput>
    connectOrCreate?: rd_postoCreateOrConnectWithoutPosto_signalInput
    upsert?: rd_postoUpsertWithoutPosto_signalInput
    disconnect?: rd_postoWhereInput | boolean
    delete?: rd_postoWhereInput | boolean
    connect?: rd_postoWhereUniqueInput
    update?: XOR<XOR<rd_postoUpdateToOneWithWhereWithoutPosto_signalInput, rd_postoUpdateWithoutPosto_signalInput>, rd_postoUncheckedUpdateWithoutPosto_signalInput>
  }

  export type posto_signalCreateNestedManyWithoutRd_postoInput = {
    create?: XOR<posto_signalCreateWithoutRd_postoInput, posto_signalUncheckedCreateWithoutRd_postoInput> | posto_signalCreateWithoutRd_postoInput[] | posto_signalUncheckedCreateWithoutRd_postoInput[]
    connectOrCreate?: posto_signalCreateOrConnectWithoutRd_postoInput | posto_signalCreateOrConnectWithoutRd_postoInput[]
    createMany?: posto_signalCreateManyRd_postoInputEnvelope
    connect?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
  }

  export type posto_signalUncheckedCreateNestedManyWithoutRd_postoInput = {
    create?: XOR<posto_signalCreateWithoutRd_postoInput, posto_signalUncheckedCreateWithoutRd_postoInput> | posto_signalCreateWithoutRd_postoInput[] | posto_signalUncheckedCreateWithoutRd_postoInput[]
    connectOrCreate?: posto_signalCreateOrConnectWithoutRd_postoInput | posto_signalCreateOrConnectWithoutRd_postoInput[]
    createMany?: posto_signalCreateManyRd_postoInputEnvelope
    connect?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
  }

  export type posto_signalUpdateManyWithoutRd_postoNestedInput = {
    create?: XOR<posto_signalCreateWithoutRd_postoInput, posto_signalUncheckedCreateWithoutRd_postoInput> | posto_signalCreateWithoutRd_postoInput[] | posto_signalUncheckedCreateWithoutRd_postoInput[]
    connectOrCreate?: posto_signalCreateOrConnectWithoutRd_postoInput | posto_signalCreateOrConnectWithoutRd_postoInput[]
    upsert?: posto_signalUpsertWithWhereUniqueWithoutRd_postoInput | posto_signalUpsertWithWhereUniqueWithoutRd_postoInput[]
    createMany?: posto_signalCreateManyRd_postoInputEnvelope
    set?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    disconnect?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    delete?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    connect?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    update?: posto_signalUpdateWithWhereUniqueWithoutRd_postoInput | posto_signalUpdateWithWhereUniqueWithoutRd_postoInput[]
    updateMany?: posto_signalUpdateManyWithWhereWithoutRd_postoInput | posto_signalUpdateManyWithWhereWithoutRd_postoInput[]
    deleteMany?: posto_signalScalarWhereInput | posto_signalScalarWhereInput[]
  }

  export type posto_signalUncheckedUpdateManyWithoutRd_postoNestedInput = {
    create?: XOR<posto_signalCreateWithoutRd_postoInput, posto_signalUncheckedCreateWithoutRd_postoInput> | posto_signalCreateWithoutRd_postoInput[] | posto_signalUncheckedCreateWithoutRd_postoInput[]
    connectOrCreate?: posto_signalCreateOrConnectWithoutRd_postoInput | posto_signalCreateOrConnectWithoutRd_postoInput[]
    upsert?: posto_signalUpsertWithWhereUniqueWithoutRd_postoInput | posto_signalUpsertWithWhereUniqueWithoutRd_postoInput[]
    createMany?: posto_signalCreateManyRd_postoInputEnvelope
    set?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    disconnect?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    delete?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    connect?: posto_signalWhereUniqueInput | posto_signalWhereUniqueInput[]
    update?: posto_signalUpdateWithWhereUniqueWithoutRd_postoInput | posto_signalUpdateWithWhereUniqueWithoutRd_postoInput[]
    updateMany?: posto_signalUpdateManyWithWhereWithoutRd_postoInput | posto_signalUpdateManyWithWhereWithoutRd_postoInput[]
    deleteMany?: posto_signalScalarWhereInput | posto_signalScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSet_variablesInput = {
    create?: XOR<usersCreateWithoutSet_variablesInput, usersUncheckedCreateWithoutSet_variablesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSet_variablesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutSet_variablesNestedInput = {
    create?: XOR<usersCreateWithoutSet_variablesInput, usersUncheckedCreateWithoutSet_variablesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSet_variablesInput
    upsert?: usersUpsertWithoutSet_variablesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSet_variablesInput, usersUpdateWithoutSet_variablesInput>, usersUncheckedUpdateWithoutSet_variablesInput>
  }

  export type usersCreateuse_whats_appInput = {
    set: string[]
  }

  export type fuelCreateNestedManyWithoutUsersInput = {
    create?: XOR<fuelCreateWithoutUsersInput, fuelUncheckedCreateWithoutUsersInput> | fuelCreateWithoutUsersInput[] | fuelUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: fuelCreateOrConnectWithoutUsersInput | fuelCreateOrConnectWithoutUsersInput[]
    createMany?: fuelCreateManyUsersInputEnvelope
    connect?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
  }

  export type set_variablesCreateNestedManyWithoutUsersInput = {
    create?: XOR<set_variablesCreateWithoutUsersInput, set_variablesUncheckedCreateWithoutUsersInput> | set_variablesCreateWithoutUsersInput[] | set_variablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: set_variablesCreateOrConnectWithoutUsersInput | set_variablesCreateOrConnectWithoutUsersInput[]
    createMany?: set_variablesCreateManyUsersInputEnvelope
    connect?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
  }

  export type fuelUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<fuelCreateWithoutUsersInput, fuelUncheckedCreateWithoutUsersInput> | fuelCreateWithoutUsersInput[] | fuelUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: fuelCreateOrConnectWithoutUsersInput | fuelCreateOrConnectWithoutUsersInput[]
    createMany?: fuelCreateManyUsersInputEnvelope
    connect?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
  }

  export type set_variablesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<set_variablesCreateWithoutUsersInput, set_variablesUncheckedCreateWithoutUsersInput> | set_variablesCreateWithoutUsersInput[] | set_variablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: set_variablesCreateOrConnectWithoutUsersInput | set_variablesCreateOrConnectWithoutUsersInput[]
    createMany?: set_variablesCreateManyUsersInputEnvelope
    connect?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateuse_whats_appInput = {
    set?: string[]
    push?: string | string[]
  }

  export type fuelUpdateManyWithoutUsersNestedInput = {
    create?: XOR<fuelCreateWithoutUsersInput, fuelUncheckedCreateWithoutUsersInput> | fuelCreateWithoutUsersInput[] | fuelUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: fuelCreateOrConnectWithoutUsersInput | fuelCreateOrConnectWithoutUsersInput[]
    upsert?: fuelUpsertWithWhereUniqueWithoutUsersInput | fuelUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: fuelCreateManyUsersInputEnvelope
    set?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    disconnect?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    delete?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    connect?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    update?: fuelUpdateWithWhereUniqueWithoutUsersInput | fuelUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: fuelUpdateManyWithWhereWithoutUsersInput | fuelUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: fuelScalarWhereInput | fuelScalarWhereInput[]
  }

  export type set_variablesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<set_variablesCreateWithoutUsersInput, set_variablesUncheckedCreateWithoutUsersInput> | set_variablesCreateWithoutUsersInput[] | set_variablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: set_variablesCreateOrConnectWithoutUsersInput | set_variablesCreateOrConnectWithoutUsersInput[]
    upsert?: set_variablesUpsertWithWhereUniqueWithoutUsersInput | set_variablesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: set_variablesCreateManyUsersInputEnvelope
    set?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    disconnect?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    delete?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    connect?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    update?: set_variablesUpdateWithWhereUniqueWithoutUsersInput | set_variablesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: set_variablesUpdateManyWithWhereWithoutUsersInput | set_variablesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: set_variablesScalarWhereInput | set_variablesScalarWhereInput[]
  }

  export type fuelUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<fuelCreateWithoutUsersInput, fuelUncheckedCreateWithoutUsersInput> | fuelCreateWithoutUsersInput[] | fuelUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: fuelCreateOrConnectWithoutUsersInput | fuelCreateOrConnectWithoutUsersInput[]
    upsert?: fuelUpsertWithWhereUniqueWithoutUsersInput | fuelUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: fuelCreateManyUsersInputEnvelope
    set?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    disconnect?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    delete?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    connect?: fuelWhereUniqueInput | fuelWhereUniqueInput[]
    update?: fuelUpdateWithWhereUniqueWithoutUsersInput | fuelUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: fuelUpdateManyWithWhereWithoutUsersInput | fuelUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: fuelScalarWhereInput | fuelScalarWhereInput[]
  }

  export type set_variablesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<set_variablesCreateWithoutUsersInput, set_variablesUncheckedCreateWithoutUsersInput> | set_variablesCreateWithoutUsersInput[] | set_variablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: set_variablesCreateOrConnectWithoutUsersInput | set_variablesCreateOrConnectWithoutUsersInput[]
    upsert?: set_variablesUpsertWithWhereUniqueWithoutUsersInput | set_variablesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: set_variablesCreateManyUsersInputEnvelope
    set?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    disconnect?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    delete?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    connect?: set_variablesWhereUniqueInput | set_variablesWhereUniqueInput[]
    update?: set_variablesUpdateWithWhereUniqueWithoutUsersInput | set_variablesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: set_variablesUpdateManyWithWhereWithoutUsersInput | set_variablesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: set_variablesScalarWhereInput | set_variablesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutFuelInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_volume_gc?: boolean | null
    use_volume_al?: boolean | null
    use_volume_total?: boolean | null
    use_volume_gc_min?: number | null
    use_volume_al_min?: number | null
    use_volume_total_min?: number | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_margin_al?: boolean | null
    use_margin_al_flag?: string | null
    use_margin_al_min?: number | null
    use_margin_gc?: boolean | null
    use_margin_gc_flag?: string | null
    use_margin_gc_min?: number | null
    use_margin_total?: boolean | null
    use_margin_total_flag?: string | null
    use_margin_total_min?: number | null
    use_volume_al_flag?: string | null
    use_volume_gc_flag?: string | null
    use_volume_total_flag?: string | null
    set_variables?: set_variablesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFuelInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_volume_gc?: boolean | null
    use_volume_al?: boolean | null
    use_volume_total?: boolean | null
    use_volume_gc_min?: number | null
    use_volume_al_min?: number | null
    use_volume_total_min?: number | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_margin_al?: boolean | null
    use_margin_al_flag?: string | null
    use_margin_al_min?: number | null
    use_margin_gc?: boolean | null
    use_margin_gc_flag?: string | null
    use_margin_gc_min?: number | null
    use_margin_total?: boolean | null
    use_margin_total_flag?: string | null
    use_margin_total_min?: number | null
    use_volume_al_flag?: string | null
    use_volume_gc_flag?: string | null
    use_volume_total_flag?: string | null
    set_variables?: set_variablesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFuelInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFuelInput, usersUncheckedCreateWithoutFuelInput>
  }

  export type usersUpsertWithoutFuelInput = {
    update: XOR<usersUpdateWithoutFuelInput, usersUncheckedUpdateWithoutFuelInput>
    create: XOR<usersCreateWithoutFuelInput, usersUncheckedCreateWithoutFuelInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFuelInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFuelInput, usersUncheckedUpdateWithoutFuelInput>
  }

  export type usersUpdateWithoutFuelInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    set_variables?: set_variablesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFuelInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    set_variables?: set_variablesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type rd_postoCreateWithoutPosto_signalInput = {
    posto_uuid?: string
    posto_name?: string | null
  }

  export type rd_postoUncheckedCreateWithoutPosto_signalInput = {
    posto_uuid?: string
    posto_name?: string | null
  }

  export type rd_postoCreateOrConnectWithoutPosto_signalInput = {
    where: rd_postoWhereUniqueInput
    create: XOR<rd_postoCreateWithoutPosto_signalInput, rd_postoUncheckedCreateWithoutPosto_signalInput>
  }

  export type rd_postoUpsertWithoutPosto_signalInput = {
    update: XOR<rd_postoUpdateWithoutPosto_signalInput, rd_postoUncheckedUpdateWithoutPosto_signalInput>
    create: XOR<rd_postoCreateWithoutPosto_signalInput, rd_postoUncheckedCreateWithoutPosto_signalInput>
    where?: rd_postoWhereInput
  }

  export type rd_postoUpdateToOneWithWhereWithoutPosto_signalInput = {
    where?: rd_postoWhereInput
    data: XOR<rd_postoUpdateWithoutPosto_signalInput, rd_postoUncheckedUpdateWithoutPosto_signalInput>
  }

  export type rd_postoUpdateWithoutPosto_signalInput = {
    posto_uuid?: StringFieldUpdateOperationsInput | string
    posto_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rd_postoUncheckedUpdateWithoutPosto_signalInput = {
    posto_uuid?: StringFieldUpdateOperationsInput | string
    posto_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posto_signalCreateWithoutRd_postoInput = {
    table_id?: string
    vol_sold?: number | null
    vol_rate?: number | null
    vol_alert?: string | null
    invoicing?: number | null
    invoice_rate?: number | null
    invoice_alert?: string | null
    created_at?: Date | string
  }

  export type posto_signalUncheckedCreateWithoutRd_postoInput = {
    table_id?: string
    vol_sold?: number | null
    vol_rate?: number | null
    vol_alert?: string | null
    invoicing?: number | null
    invoice_rate?: number | null
    invoice_alert?: string | null
    created_at?: Date | string
  }

  export type posto_signalCreateOrConnectWithoutRd_postoInput = {
    where: posto_signalWhereUniqueInput
    create: XOR<posto_signalCreateWithoutRd_postoInput, posto_signalUncheckedCreateWithoutRd_postoInput>
  }

  export type posto_signalCreateManyRd_postoInputEnvelope = {
    data: posto_signalCreateManyRd_postoInput | posto_signalCreateManyRd_postoInput[]
    skipDuplicates?: boolean
  }

  export type posto_signalUpsertWithWhereUniqueWithoutRd_postoInput = {
    where: posto_signalWhereUniqueInput
    update: XOR<posto_signalUpdateWithoutRd_postoInput, posto_signalUncheckedUpdateWithoutRd_postoInput>
    create: XOR<posto_signalCreateWithoutRd_postoInput, posto_signalUncheckedCreateWithoutRd_postoInput>
  }

  export type posto_signalUpdateWithWhereUniqueWithoutRd_postoInput = {
    where: posto_signalWhereUniqueInput
    data: XOR<posto_signalUpdateWithoutRd_postoInput, posto_signalUncheckedUpdateWithoutRd_postoInput>
  }

  export type posto_signalUpdateManyWithWhereWithoutRd_postoInput = {
    where: posto_signalScalarWhereInput
    data: XOR<posto_signalUpdateManyMutationInput, posto_signalUncheckedUpdateManyWithoutRd_postoInput>
  }

  export type posto_signalScalarWhereInput = {
    AND?: posto_signalScalarWhereInput | posto_signalScalarWhereInput[]
    OR?: posto_signalScalarWhereInput[]
    NOT?: posto_signalScalarWhereInput | posto_signalScalarWhereInput[]
    table_id?: UuidFilter<"posto_signal"> | string
    posto_id?: UuidNullableFilter<"posto_signal"> | string | null
    vol_sold?: FloatNullableFilter<"posto_signal"> | number | null
    vol_rate?: FloatNullableFilter<"posto_signal"> | number | null
    vol_alert?: StringNullableFilter<"posto_signal"> | string | null
    invoicing?: FloatNullableFilter<"posto_signal"> | number | null
    invoice_rate?: FloatNullableFilter<"posto_signal"> | number | null
    invoice_alert?: StringNullableFilter<"posto_signal"> | string | null
    created_at?: DateTimeFilter<"posto_signal"> | Date | string
  }

  export type usersCreateWithoutSet_variablesInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_volume_gc?: boolean | null
    use_volume_al?: boolean | null
    use_volume_total?: boolean | null
    use_volume_gc_min?: number | null
    use_volume_al_min?: number | null
    use_volume_total_min?: number | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_margin_al?: boolean | null
    use_margin_al_flag?: string | null
    use_margin_al_min?: number | null
    use_margin_gc?: boolean | null
    use_margin_gc_flag?: string | null
    use_margin_gc_min?: number | null
    use_margin_total?: boolean | null
    use_margin_total_flag?: string | null
    use_margin_total_min?: number | null
    use_volume_al_flag?: string | null
    use_volume_gc_flag?: string | null
    use_volume_total_flag?: string | null
    fuel?: fuelCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSet_variablesInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_volume_gc?: boolean | null
    use_volume_al?: boolean | null
    use_volume_total?: boolean | null
    use_volume_gc_min?: number | null
    use_volume_al_min?: number | null
    use_volume_total_min?: number | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_margin_al?: boolean | null
    use_margin_al_flag?: string | null
    use_margin_al_min?: number | null
    use_margin_gc?: boolean | null
    use_margin_gc_flag?: string | null
    use_margin_gc_min?: number | null
    use_margin_total?: boolean | null
    use_margin_total_flag?: string | null
    use_margin_total_min?: number | null
    use_volume_al_flag?: string | null
    use_volume_gc_flag?: string | null
    use_volume_total_flag?: string | null
    fuel?: fuelUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSet_variablesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSet_variablesInput, usersUncheckedCreateWithoutSet_variablesInput>
  }

  export type usersUpsertWithoutSet_variablesInput = {
    update: XOR<usersUpdateWithoutSet_variablesInput, usersUncheckedUpdateWithoutSet_variablesInput>
    create: XOR<usersCreateWithoutSet_variablesInput, usersUncheckedCreateWithoutSet_variablesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSet_variablesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSet_variablesInput, usersUncheckedUpdateWithoutSet_variablesInput>
  }

  export type usersUpdateWithoutSet_variablesInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: fuelUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSet_variablesInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_volume_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_margin_al?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_al_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_gc?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_gc_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_margin_total?: NullableBoolFieldUpdateOperationsInput | boolean | null
    use_margin_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_margin_total_min?: NullableFloatFieldUpdateOperationsInput | number | null
    use_volume_al_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_gc_flag?: NullableStringFieldUpdateOperationsInput | string | null
    use_volume_total_flag?: NullableStringFieldUpdateOperationsInput | string | null
    fuel?: fuelUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type fuelCreateWithoutUsersInput = {
    fuel_uuid?: string
    fuel_regular_gasoline?: number | null
    fuel_alcohol?: number | null
    fuel_created_at?: Date | string
    fuel_updated_at?: Date | string
  }

  export type fuelUncheckedCreateWithoutUsersInput = {
    fuel_uuid?: string
    fuel_regular_gasoline?: number | null
    fuel_alcohol?: number | null
    fuel_created_at?: Date | string
    fuel_updated_at?: Date | string
  }

  export type fuelCreateOrConnectWithoutUsersInput = {
    where: fuelWhereUniqueInput
    create: XOR<fuelCreateWithoutUsersInput, fuelUncheckedCreateWithoutUsersInput>
  }

  export type fuelCreateManyUsersInputEnvelope = {
    data: fuelCreateManyUsersInput | fuelCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type set_variablesCreateWithoutUsersInput = {
    set_uuid?: string
    set_regular_gasoline?: number | null
    set_alcohol?: number | null
    set_created_at?: Date | string
    set_updated_at?: Date | string
  }

  export type set_variablesUncheckedCreateWithoutUsersInput = {
    set_uuid?: string
    set_regular_gasoline?: number | null
    set_alcohol?: number | null
    set_created_at?: Date | string
    set_updated_at?: Date | string
  }

  export type set_variablesCreateOrConnectWithoutUsersInput = {
    where: set_variablesWhereUniqueInput
    create: XOR<set_variablesCreateWithoutUsersInput, set_variablesUncheckedCreateWithoutUsersInput>
  }

  export type set_variablesCreateManyUsersInputEnvelope = {
    data: set_variablesCreateManyUsersInput | set_variablesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type fuelUpsertWithWhereUniqueWithoutUsersInput = {
    where: fuelWhereUniqueInput
    update: XOR<fuelUpdateWithoutUsersInput, fuelUncheckedUpdateWithoutUsersInput>
    create: XOR<fuelCreateWithoutUsersInput, fuelUncheckedCreateWithoutUsersInput>
  }

  export type fuelUpdateWithWhereUniqueWithoutUsersInput = {
    where: fuelWhereUniqueInput
    data: XOR<fuelUpdateWithoutUsersInput, fuelUncheckedUpdateWithoutUsersInput>
  }

  export type fuelUpdateManyWithWhereWithoutUsersInput = {
    where: fuelScalarWhereInput
    data: XOR<fuelUpdateManyMutationInput, fuelUncheckedUpdateManyWithoutUsersInput>
  }

  export type fuelScalarWhereInput = {
    AND?: fuelScalarWhereInput | fuelScalarWhereInput[]
    OR?: fuelScalarWhereInput[]
    NOT?: fuelScalarWhereInput | fuelScalarWhereInput[]
    fuel_uuid?: UuidFilter<"fuel"> | string
    fuel_regular_gasoline?: FloatNullableFilter<"fuel"> | number | null
    fuel_alcohol?: FloatNullableFilter<"fuel"> | number | null
    use_uuid?: UuidNullableFilter<"fuel"> | string | null
    fuel_created_at?: DateTimeFilter<"fuel"> | Date | string
    fuel_updated_at?: DateTimeFilter<"fuel"> | Date | string
  }

  export type set_variablesUpsertWithWhereUniqueWithoutUsersInput = {
    where: set_variablesWhereUniqueInput
    update: XOR<set_variablesUpdateWithoutUsersInput, set_variablesUncheckedUpdateWithoutUsersInput>
    create: XOR<set_variablesCreateWithoutUsersInput, set_variablesUncheckedCreateWithoutUsersInput>
  }

  export type set_variablesUpdateWithWhereUniqueWithoutUsersInput = {
    where: set_variablesWhereUniqueInput
    data: XOR<set_variablesUpdateWithoutUsersInput, set_variablesUncheckedUpdateWithoutUsersInput>
  }

  export type set_variablesUpdateManyWithWhereWithoutUsersInput = {
    where: set_variablesScalarWhereInput
    data: XOR<set_variablesUpdateManyMutationInput, set_variablesUncheckedUpdateManyWithoutUsersInput>
  }

  export type set_variablesScalarWhereInput = {
    AND?: set_variablesScalarWhereInput | set_variablesScalarWhereInput[]
    OR?: set_variablesScalarWhereInput[]
    NOT?: set_variablesScalarWhereInput | set_variablesScalarWhereInput[]
    set_uuid?: UuidFilter<"set_variables"> | string
    set_regular_gasoline?: FloatNullableFilter<"set_variables"> | number | null
    set_alcohol?: FloatNullableFilter<"set_variables"> | number | null
    use_uuid?: UuidNullableFilter<"set_variables"> | string | null
    set_created_at?: DateTimeFilter<"set_variables"> | Date | string
    set_updated_at?: DateTimeFilter<"set_variables"> | Date | string
  }

  export type posto_signalCreateManyRd_postoInput = {
    table_id?: string
    vol_sold?: number | null
    vol_rate?: number | null
    vol_alert?: string | null
    invoicing?: number | null
    invoice_rate?: number | null
    invoice_alert?: string | null
    created_at?: Date | string
  }

  export type posto_signalUpdateWithoutRd_postoInput = {
    table_id?: StringFieldUpdateOperationsInput | string
    vol_sold?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_alert?: NullableStringFieldUpdateOperationsInput | string | null
    invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_alert?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posto_signalUncheckedUpdateWithoutRd_postoInput = {
    table_id?: StringFieldUpdateOperationsInput | string
    vol_sold?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_alert?: NullableStringFieldUpdateOperationsInput | string | null
    invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_alert?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type posto_signalUncheckedUpdateManyWithoutRd_postoInput = {
    table_id?: StringFieldUpdateOperationsInput | string
    vol_sold?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_alert?: NullableStringFieldUpdateOperationsInput | string | null
    invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_rate?: NullableFloatFieldUpdateOperationsInput | number | null
    invoice_alert?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelCreateManyUsersInput = {
    fuel_uuid?: string
    fuel_regular_gasoline?: number | null
    fuel_alcohol?: number | null
    fuel_created_at?: Date | string
    fuel_updated_at?: Date | string
  }

  export type set_variablesCreateManyUsersInput = {
    set_uuid?: string
    set_regular_gasoline?: number | null
    set_alcohol?: number | null
    set_created_at?: Date | string
    set_updated_at?: Date | string
  }

  export type fuelUpdateWithoutUsersInput = {
    fuel_uuid?: StringFieldUpdateOperationsInput | string
    fuel_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fuel_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelUncheckedUpdateWithoutUsersInput = {
    fuel_uuid?: StringFieldUpdateOperationsInput | string
    fuel_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fuel_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fuelUncheckedUpdateManyWithoutUsersInput = {
    fuel_uuid?: StringFieldUpdateOperationsInput | string
    fuel_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    fuel_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fuel_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type set_variablesUpdateWithoutUsersInput = {
    set_uuid?: StringFieldUpdateOperationsInput | string
    set_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    set_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    set_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    set_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type set_variablesUncheckedUpdateWithoutUsersInput = {
    set_uuid?: StringFieldUpdateOperationsInput | string
    set_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    set_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    set_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    set_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type set_variablesUncheckedUpdateManyWithoutUsersInput = {
    set_uuid?: StringFieldUpdateOperationsInput | string
    set_regular_gasoline?: NullableFloatFieldUpdateOperationsInput | number | null
    set_alcohol?: NullableFloatFieldUpdateOperationsInput | number | null
    set_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    set_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Rd_postoCountOutputTypeDefaultArgs instead
     */
    export type Rd_postoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Rd_postoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use basedadosDefaultArgs instead
     */
    export type basedadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = basedadosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dataframe_fuelDefaultArgs instead
     */
    export type dataframe_fuelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dataframe_fuelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dataframe_productDefaultArgs instead
     */
    export type dataframe_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dataframe_productDefaultArgs<ExtArgs>
    /**
     * @deprecated Use fuelDefaultArgs instead
     */
    export type fuelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = fuelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gas_stationDefaultArgs instead
     */
    export type gas_stationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gas_stationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ibm_infoDefaultArgs instead
     */
    export type ibm_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ibm_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use posto_signalDefaultArgs instead
     */
    export type posto_signalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = posto_signalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rd_postoDefaultArgs instead
     */
    export type rd_postoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rd_postoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use set_variablesDefaultArgs instead
     */
    export type set_variablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = set_variablesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}