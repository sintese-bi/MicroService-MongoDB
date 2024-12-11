
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
 * Model ibm_info
 * 
 */
export type ibm_info = $Result.DefaultSelection<Prisma.$ibm_infoPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model gas_station_setvariables
 * 
 */
export type gas_station_setvariables = $Result.DefaultSelection<Prisma.$gas_station_setvariablesPayload>
/**
 * Model region_setvariables
 * 
 */
export type region_setvariables = $Result.DefaultSelection<Prisma.$region_setvariablesPayload>
/**
 * Model regions
 * 
 */
export type regions = $Result.DefaultSelection<Prisma.$regionsPayload>
/**
 * Model big_numbers_values
 * 
 */
export type big_numbers_values = $Result.DefaultSelection<Prisma.$big_numbers_valuesPayload>
/**
 * Model gallon_gross_history
 * 
 */
export type gallon_gross_history = $Result.DefaultSelection<Prisma.$gallon_gross_historyPayload>
/**
 * Model product_gross_history
 * 
 */
export type product_gross_history = $Result.DefaultSelection<Prisma.$product_gross_historyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ibm_infos
 * const ibm_infos = await prisma.ibm_info.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Ibm_infos
   * const ibm_infos = await prisma.ibm_info.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.gas_station_setvariables`: Exposes CRUD operations for the **gas_station_setvariables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gas_station_setvariables
    * const gas_station_setvariables = await prisma.gas_station_setvariables.findMany()
    * ```
    */
  get gas_station_setvariables(): Prisma.gas_station_setvariablesDelegate<ExtArgs>;

  /**
   * `prisma.region_setvariables`: Exposes CRUD operations for the **region_setvariables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Region_setvariables
    * const region_setvariables = await prisma.region_setvariables.findMany()
    * ```
    */
  get region_setvariables(): Prisma.region_setvariablesDelegate<ExtArgs>;

  /**
   * `prisma.regions`: Exposes CRUD operations for the **regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.regions.findMany()
    * ```
    */
  get regions(): Prisma.regionsDelegate<ExtArgs>;

  /**
   * `prisma.big_numbers_values`: Exposes CRUD operations for the **big_numbers_values** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Big_numbers_values
    * const big_numbers_values = await prisma.big_numbers_values.findMany()
    * ```
    */
  get big_numbers_values(): Prisma.big_numbers_valuesDelegate<ExtArgs>;

  /**
   * `prisma.gallon_gross_history`: Exposes CRUD operations for the **gallon_gross_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gallon_gross_histories
    * const gallon_gross_histories = await prisma.gallon_gross_history.findMany()
    * ```
    */
  get gallon_gross_history(): Prisma.gallon_gross_historyDelegate<ExtArgs>;

  /**
   * `prisma.product_gross_history`: Exposes CRUD operations for the **product_gross_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_gross_histories
    * const product_gross_histories = await prisma.product_gross_history.findMany()
    * ```
    */
  get product_gross_history(): Prisma.product_gross_historyDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    ibm_info: 'ibm_info',
    users: 'users',
    gas_station_setvariables: 'gas_station_setvariables',
    region_setvariables: 'region_setvariables',
    regions: 'regions',
    big_numbers_values: 'big_numbers_values',
    gallon_gross_history: 'gallon_gross_history',
    product_gross_history: 'product_gross_history'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "ibm_info" | "users" | "gas_station_setvariables" | "region_setvariables" | "regions" | "big_numbers_values" | "gallon_gross_history" | "product_gross_history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ibm_info: {
        payload: Prisma.$ibm_infoPayload<ExtArgs>
        fields: Prisma.ibm_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ibm_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ibm_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          findFirst: {
            args: Prisma.ibm_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ibm_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          findMany: {
            args: Prisma.ibm_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>[]
          }
          create: {
            args: Prisma.ibm_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          createMany: {
            args: Prisma.ibm_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ibm_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>[]
          }
          delete: {
            args: Prisma.ibm_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          update: {
            args: Prisma.ibm_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          deleteMany: {
            args: Prisma.ibm_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ibm_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ibm_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ibm_infoPayload>
          }
          aggregate: {
            args: Prisma.Ibm_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIbm_info>
          }
          groupBy: {
            args: Prisma.ibm_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ibm_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ibm_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Ibm_infoCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      gas_station_setvariables: {
        payload: Prisma.$gas_station_setvariablesPayload<ExtArgs>
        fields: Prisma.gas_station_setvariablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gas_station_setvariablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gas_station_setvariablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>
          }
          findFirst: {
            args: Prisma.gas_station_setvariablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gas_station_setvariablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>
          }
          findMany: {
            args: Prisma.gas_station_setvariablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>[]
          }
          create: {
            args: Prisma.gas_station_setvariablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>
          }
          createMany: {
            args: Prisma.gas_station_setvariablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gas_station_setvariablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>[]
          }
          delete: {
            args: Prisma.gas_station_setvariablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>
          }
          update: {
            args: Prisma.gas_station_setvariablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>
          }
          deleteMany: {
            args: Prisma.gas_station_setvariablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gas_station_setvariablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gas_station_setvariablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gas_station_setvariablesPayload>
          }
          aggregate: {
            args: Prisma.Gas_station_setvariablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGas_station_setvariables>
          }
          groupBy: {
            args: Prisma.gas_station_setvariablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gas_station_setvariablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.gas_station_setvariablesCountArgs<ExtArgs>
            result: $Utils.Optional<Gas_station_setvariablesCountAggregateOutputType> | number
          }
        }
      }
      region_setvariables: {
        payload: Prisma.$region_setvariablesPayload<ExtArgs>
        fields: Prisma.region_setvariablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.region_setvariablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.region_setvariablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>
          }
          findFirst: {
            args: Prisma.region_setvariablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.region_setvariablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>
          }
          findMany: {
            args: Prisma.region_setvariablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>[]
          }
          create: {
            args: Prisma.region_setvariablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>
          }
          createMany: {
            args: Prisma.region_setvariablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.region_setvariablesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>[]
          }
          delete: {
            args: Prisma.region_setvariablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>
          }
          update: {
            args: Prisma.region_setvariablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>
          }
          deleteMany: {
            args: Prisma.region_setvariablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.region_setvariablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.region_setvariablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_setvariablesPayload>
          }
          aggregate: {
            args: Prisma.Region_setvariablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion_setvariables>
          }
          groupBy: {
            args: Prisma.region_setvariablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Region_setvariablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.region_setvariablesCountArgs<ExtArgs>
            result: $Utils.Optional<Region_setvariablesCountAggregateOutputType> | number
          }
        }
      }
      regions: {
        payload: Prisma.$regionsPayload<ExtArgs>
        fields: Prisma.regionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.regionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.regionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          findFirst: {
            args: Prisma.regionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.regionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          findMany: {
            args: Prisma.regionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          create: {
            args: Prisma.regionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          createMany: {
            args: Prisma.regionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.regionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          delete: {
            args: Prisma.regionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          update: {
            args: Prisma.regionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          deleteMany: {
            args: Prisma.regionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.regionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.regionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          aggregate: {
            args: Prisma.RegionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegions>
          }
          groupBy: {
            args: Prisma.regionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.regionsCountArgs<ExtArgs>
            result: $Utils.Optional<RegionsCountAggregateOutputType> | number
          }
        }
      }
      big_numbers_values: {
        payload: Prisma.$big_numbers_valuesPayload<ExtArgs>
        fields: Prisma.big_numbers_valuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.big_numbers_valuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.big_numbers_valuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>
          }
          findFirst: {
            args: Prisma.big_numbers_valuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.big_numbers_valuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>
          }
          findMany: {
            args: Prisma.big_numbers_valuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>[]
          }
          create: {
            args: Prisma.big_numbers_valuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>
          }
          createMany: {
            args: Prisma.big_numbers_valuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.big_numbers_valuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>[]
          }
          delete: {
            args: Prisma.big_numbers_valuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>
          }
          update: {
            args: Prisma.big_numbers_valuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>
          }
          deleteMany: {
            args: Prisma.big_numbers_valuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.big_numbers_valuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.big_numbers_valuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$big_numbers_valuesPayload>
          }
          aggregate: {
            args: Prisma.Big_numbers_valuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBig_numbers_values>
          }
          groupBy: {
            args: Prisma.big_numbers_valuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Big_numbers_valuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.big_numbers_valuesCountArgs<ExtArgs>
            result: $Utils.Optional<Big_numbers_valuesCountAggregateOutputType> | number
          }
        }
      }
      gallon_gross_history: {
        payload: Prisma.$gallon_gross_historyPayload<ExtArgs>
        fields: Prisma.gallon_gross_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gallon_gross_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gallon_gross_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>
          }
          findFirst: {
            args: Prisma.gallon_gross_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gallon_gross_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>
          }
          findMany: {
            args: Prisma.gallon_gross_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>[]
          }
          create: {
            args: Prisma.gallon_gross_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>
          }
          createMany: {
            args: Prisma.gallon_gross_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gallon_gross_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>[]
          }
          delete: {
            args: Prisma.gallon_gross_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>
          }
          update: {
            args: Prisma.gallon_gross_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>
          }
          deleteMany: {
            args: Prisma.gallon_gross_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gallon_gross_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gallon_gross_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gallon_gross_historyPayload>
          }
          aggregate: {
            args: Prisma.Gallon_gross_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallon_gross_history>
          }
          groupBy: {
            args: Prisma.gallon_gross_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gallon_gross_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.gallon_gross_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Gallon_gross_historyCountAggregateOutputType> | number
          }
        }
      }
      product_gross_history: {
        payload: Prisma.$product_gross_historyPayload<ExtArgs>
        fields: Prisma.product_gross_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_gross_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_gross_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>
          }
          findFirst: {
            args: Prisma.product_gross_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_gross_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>
          }
          findMany: {
            args: Prisma.product_gross_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>[]
          }
          create: {
            args: Prisma.product_gross_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>
          }
          createMany: {
            args: Prisma.product_gross_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_gross_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>[]
          }
          delete: {
            args: Prisma.product_gross_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>
          }
          update: {
            args: Prisma.product_gross_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>
          }
          deleteMany: {
            args: Prisma.product_gross_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_gross_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_gross_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_gross_historyPayload>
          }
          aggregate: {
            args: Prisma.Product_gross_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_gross_history>
          }
          groupBy: {
            args: Prisma.product_gross_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_gross_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_gross_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Product_gross_historyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type Ibm_infoCountOutputType
   */

  export type Ibm_infoCountOutputType = {
    gallon_gross_history: number
    gas_station_setvariables: number
    product_gross_history: number
  }

  export type Ibm_infoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallon_gross_history?: boolean | Ibm_infoCountOutputTypeCountGallon_gross_historyArgs
    gas_station_setvariables?: boolean | Ibm_infoCountOutputTypeCountGas_station_setvariablesArgs
    product_gross_history?: boolean | Ibm_infoCountOutputTypeCountProduct_gross_historyArgs
  }

  // Custom InputTypes
  /**
   * Ibm_infoCountOutputType without action
   */
  export type Ibm_infoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ibm_infoCountOutputType
     */
    select?: Ibm_infoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ibm_infoCountOutputType without action
   */
  export type Ibm_infoCountOutputTypeCountGallon_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gallon_gross_historyWhereInput
  }

  /**
   * Ibm_infoCountOutputType without action
   */
  export type Ibm_infoCountOutputTypeCountGas_station_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gas_station_setvariablesWhereInput
  }

  /**
   * Ibm_infoCountOutputType without action
   */
  export type Ibm_infoCountOutputTypeCountProduct_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_gross_historyWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    gallon_gross_history: number
    gas_station_setvariables: number
    product_gross_history: number
    region_setvariables: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallon_gross_history?: boolean | UsersCountOutputTypeCountGallon_gross_historyArgs
    gas_station_setvariables?: boolean | UsersCountOutputTypeCountGas_station_setvariablesArgs
    product_gross_history?: boolean | UsersCountOutputTypeCountProduct_gross_historyArgs
    region_setvariables?: boolean | UsersCountOutputTypeCountRegion_setvariablesArgs
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
  export type UsersCountOutputTypeCountGallon_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gallon_gross_historyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGas_station_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gas_station_setvariablesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProduct_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_gross_historyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRegion_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: region_setvariablesWhereInput
  }


  /**
   * Count Type RegionsCountOutputType
   */

  export type RegionsCountOutputType = {
    region_setvariables: number
  }

  export type RegionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region_setvariables?: boolean | RegionsCountOutputTypeCountRegion_setvariablesArgs
  }

  // Custom InputTypes
  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     */
    select?: RegionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountRegion_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: region_setvariablesWhereInput
  }


  /**
   * Models
   */

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
    ibm_margin_GC: number | null
    ibm_margin_GASOLINA_PODIUM: number | null
    ibm_margin_GASOLINA_PREMIUM: number | null
    ibm_margin_DIESEL_GROUP: number | null
    ibm_margin_DIESEL_GROUP_S500: number | null
    ibm_margin_ETANOL_COMUM: number | null
    ibm_margin_TOTAL_PRODUCT: number | null
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number | null
    ibm_margin_FILTROS_AR_PRODUCT: number | null
  }

  export type Ibm_infoSumAggregateOutputType = {
    lat: number | null
    long: number | null
    ibm_margin_GC: number[]
    ibm_margin_GASOLINA_PODIUM: number[]
    ibm_margin_GASOLINA_PREMIUM: number[]
    ibm_margin_DIESEL_GROUP: number[]
    ibm_margin_DIESEL_GROUP_S500: number[]
    ibm_margin_ETANOL_COMUM: number[]
    ibm_margin_TOTAL_PRODUCT: number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number[]
    ibm_margin_FILTROS_AR_PRODUCT: number[]
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
    endereco: string | null
    regional: string | null
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
    endereco: string | null
    regional: string | null
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
    endereco: number
    regional: number
    ibm_margin_GC: number
    ibm_margin_GASOLINA_PODIUM: number
    ibm_margin_GASOLINA_PREMIUM: number
    ibm_margin_DIESEL_GROUP: number
    ibm_margin_DIESEL_GROUP_S500: number
    ibm_margin_ETANOL_COMUM: number
    ibm_margin_TOTAL_PRODUCT: number
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number
    ibm_margin_FILTROS_AR_PRODUCT: number
    _all: number
  }


  export type Ibm_infoAvgAggregateInputType = {
    lat?: true
    long?: true
    ibm_margin_GC?: true
    ibm_margin_GASOLINA_PODIUM?: true
    ibm_margin_GASOLINA_PREMIUM?: true
    ibm_margin_DIESEL_GROUP?: true
    ibm_margin_DIESEL_GROUP_S500?: true
    ibm_margin_ETANOL_COMUM?: true
    ibm_margin_TOTAL_PRODUCT?: true
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    ibm_margin_FILTROS_AR_PRODUCT?: true
  }

  export type Ibm_infoSumAggregateInputType = {
    lat?: true
    long?: true
    ibm_margin_GC?: true
    ibm_margin_GASOLINA_PODIUM?: true
    ibm_margin_GASOLINA_PREMIUM?: true
    ibm_margin_DIESEL_GROUP?: true
    ibm_margin_DIESEL_GROUP_S500?: true
    ibm_margin_ETANOL_COMUM?: true
    ibm_margin_TOTAL_PRODUCT?: true
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    ibm_margin_FILTROS_AR_PRODUCT?: true
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
    endereco?: true
    regional?: true
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
    endereco?: true
    regional?: true
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
    endereco?: true
    regional?: true
    ibm_margin_GC?: true
    ibm_margin_GASOLINA_PODIUM?: true
    ibm_margin_GASOLINA_PREMIUM?: true
    ibm_margin_DIESEL_GROUP?: true
    ibm_margin_DIESEL_GROUP_S500?: true
    ibm_margin_ETANOL_COMUM?: true
    ibm_margin_TOTAL_PRODUCT?: true
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    ibm_margin_FILTROS_AR_PRODUCT?: true
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
    endereco: string | null
    regional: string | null
    ibm_margin_GC: number[]
    ibm_margin_GASOLINA_PODIUM: number[]
    ibm_margin_GASOLINA_PREMIUM: number[]
    ibm_margin_DIESEL_GROUP: number[]
    ibm_margin_DIESEL_GROUP_S500: number[]
    ibm_margin_ETANOL_COMUM: number[]
    ibm_margin_TOTAL_PRODUCT: number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number[]
    ibm_margin_FILTROS_AR_PRODUCT: number[]
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
    endereco?: boolean
    regional?: boolean
    ibm_margin_GC?: boolean
    ibm_margin_GASOLINA_PODIUM?: boolean
    ibm_margin_GASOLINA_PREMIUM?: boolean
    ibm_margin_DIESEL_GROUP?: boolean
    ibm_margin_DIESEL_GROUP_S500?: boolean
    ibm_margin_ETANOL_COMUM?: boolean
    ibm_margin_TOTAL_PRODUCT?: boolean
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    ibm_margin_FILTROS_AR_PRODUCT?: boolean
    gallon_gross_history?: boolean | ibm_info$gallon_gross_historyArgs<ExtArgs>
    gas_station_setvariables?: boolean | ibm_info$gas_station_setvariablesArgs<ExtArgs>
    product_gross_history?: boolean | ibm_info$product_gross_historyArgs<ExtArgs>
    _count?: boolean | Ibm_infoCountOutputTypeDefaultArgs<ExtArgs>
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
    endereco?: boolean
    regional?: boolean
    ibm_margin_GC?: boolean
    ibm_margin_GASOLINA_PODIUM?: boolean
    ibm_margin_GASOLINA_PREMIUM?: boolean
    ibm_margin_DIESEL_GROUP?: boolean
    ibm_margin_DIESEL_GROUP_S500?: boolean
    ibm_margin_ETANOL_COMUM?: boolean
    ibm_margin_TOTAL_PRODUCT?: boolean
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    ibm_margin_FILTROS_AR_PRODUCT?: boolean
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
    endereco?: boolean
    regional?: boolean
    ibm_margin_GC?: boolean
    ibm_margin_GASOLINA_PODIUM?: boolean
    ibm_margin_GASOLINA_PREMIUM?: boolean
    ibm_margin_DIESEL_GROUP?: boolean
    ibm_margin_DIESEL_GROUP_S500?: boolean
    ibm_margin_ETANOL_COMUM?: boolean
    ibm_margin_TOTAL_PRODUCT?: boolean
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    ibm_margin_FILTROS_AR_PRODUCT?: boolean
  }

  export type ibm_infoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallon_gross_history?: boolean | ibm_info$gallon_gross_historyArgs<ExtArgs>
    gas_station_setvariables?: boolean | ibm_info$gas_station_setvariablesArgs<ExtArgs>
    product_gross_history?: boolean | ibm_info$product_gross_historyArgs<ExtArgs>
    _count?: boolean | Ibm_infoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ibm_infoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ibm_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ibm_info"
    objects: {
      gallon_gross_history: Prisma.$gallon_gross_historyPayload<ExtArgs>[]
      gas_station_setvariables: Prisma.$gas_station_setvariablesPayload<ExtArgs>[]
      product_gross_history: Prisma.$product_gross_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ibm: string | null
      nomefantasia: string | null
      cnpj: string | null
      razaosocial: string | null
      cep: string | null
      lat: number | null
      long: number | null
      id: string
      endereco: string | null
      regional: string | null
      ibm_margin_GC: number[]
      ibm_margin_GASOLINA_PODIUM: number[]
      ibm_margin_GASOLINA_PREMIUM: number[]
      ibm_margin_DIESEL_GROUP: number[]
      ibm_margin_DIESEL_GROUP_S500: number[]
      ibm_margin_ETANOL_COMUM: number[]
      ibm_margin_TOTAL_PRODUCT: number[]
      ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number[]
      ibm_margin_FILTROS_AR_PRODUCT: number[]
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
     */
    findUnique<T extends ibm_infoFindUniqueArgs>(args: SelectSubset<T, ibm_infoFindUniqueArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
     */
    findUniqueOrThrow<T extends ibm_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, ibm_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends ibm_infoFindFirstArgs>(args?: SelectSubset<T, ibm_infoFindFirstArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends ibm_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, ibm_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     */
    findMany<T extends ibm_infoFindManyArgs>(args?: SelectSubset<T, ibm_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends ibm_infoCreateArgs>(args: SelectSubset<T, ibm_infoCreateArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     */
    createMany<T extends ibm_infoCreateManyArgs>(args?: SelectSubset<T, ibm_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    createManyAndReturn<T extends ibm_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, ibm_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends ibm_infoDeleteArgs>(args: SelectSubset<T, ibm_infoDeleteArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends ibm_infoUpdateArgs>(args: SelectSubset<T, ibm_infoUpdateArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends ibm_infoDeleteManyArgs>(args?: SelectSubset<T, ibm_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends ibm_infoUpdateManyArgs>(args: SelectSubset<T, ibm_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends ibm_infoUpsertArgs>(args: SelectSubset<T, ibm_infoUpsertArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gallon_gross_history<T extends ibm_info$gallon_gross_historyArgs<ExtArgs> = {}>(args?: Subset<T, ibm_info$gallon_gross_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "findMany"> | Null>
    gas_station_setvariables<T extends ibm_info$gas_station_setvariablesArgs<ExtArgs> = {}>(args?: Subset<T, ibm_info$gas_station_setvariablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "findMany"> | Null>
    product_gross_history<T extends ibm_info$product_gross_historyArgs<ExtArgs> = {}>(args?: Subset<T, ibm_info$product_gross_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
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
    readonly endereco: FieldRef<"ibm_info", 'String'>
    readonly regional: FieldRef<"ibm_info", 'String'>
    readonly ibm_margin_GC: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_GASOLINA_PODIUM: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_GASOLINA_PREMIUM: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_DIESEL_GROUP: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_DIESEL_GROUP_S500: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_ETANOL_COMUM: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_TOTAL_PRODUCT: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: FieldRef<"ibm_info", 'Float[]'>
    readonly ibm_margin_FILTROS_AR_PRODUCT: FieldRef<"ibm_info", 'Float[]'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
   * ibm_info.gallon_gross_history
   */
  export type ibm_info$gallon_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    where?: gallon_gross_historyWhereInput
    orderBy?: gallon_gross_historyOrderByWithRelationInput | gallon_gross_historyOrderByWithRelationInput[]
    cursor?: gallon_gross_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gallon_gross_historyScalarFieldEnum | Gallon_gross_historyScalarFieldEnum[]
  }

  /**
   * ibm_info.gas_station_setvariables
   */
  export type ibm_info$gas_station_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    where?: gas_station_setvariablesWhereInput
    orderBy?: gas_station_setvariablesOrderByWithRelationInput | gas_station_setvariablesOrderByWithRelationInput[]
    cursor?: gas_station_setvariablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gas_station_setvariablesScalarFieldEnum | Gas_station_setvariablesScalarFieldEnum[]
  }

  /**
   * ibm_info.product_gross_history
   */
  export type ibm_info$product_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    where?: product_gross_historyWhereInput
    orderBy?: product_gross_historyOrderByWithRelationInput | product_gross_historyOrderByWithRelationInput[]
    cursor?: product_gross_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_gross_historyScalarFieldEnum | Product_gross_historyScalarFieldEnum[]
  }

  /**
   * ibm_info without action
   */
  export type ibm_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
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
    use_mlt: number | null
    use_tmc: number | null
    use_tmf: number | null
    use_tmp: number | null
    use_tmvol: number | null
    use_lucro_bruto_operacional_galonagem: number | null
    use_lucro_bruto_operacional_produto: number | null
    use_lucro_bruto_operacional: number | null
    use_ETANOL_COMUM_comb: number | null
    use_GASOLINA_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb: number | null
  }

  export type UsersSumAggregateOutputType = {
    use_mlt: number | null
    use_tmc: number | null
    use_tmf: number | null
    use_tmp: number | null
    use_tmvol: number | null
    use_lucro_bruto_operacional_galonagem: number | null
    use_lucro_bruto_operacional_produto: number | null
    use_lucro_bruto_operacional: number | null
    use_ETANOL_COMUM_comb: number | null
    use_GASOLINA_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb: number | null
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
    use_level: string | null
    use_mlt: number | null
    use_tmc: number | null
    use_tmf: number | null
    use_tmp: number | null
    use_tmvol: number | null
    use_lucro_bruto_operacional_galonagem: number | null
    use_lucro_bruto_operacional_produto: number | null
    use_lucro_bruto_operacional: number | null
    use_ETANOL_COMUM_comb: number | null
    use_GASOLINA_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb: number | null
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
    use_level: string | null
    use_mlt: number | null
    use_tmc: number | null
    use_tmf: number | null
    use_tmp: number | null
    use_tmvol: number | null
    use_lucro_bruto_operacional_galonagem: number | null
    use_lucro_bruto_operacional_produto: number | null
    use_lucro_bruto_operacional: number | null
    use_ETANOL_COMUM_comb: number | null
    use_GASOLINA_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb: number | null
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
    use_level: number
    use_whats_app: number
    use_mlt: number
    use_tmc: number
    use_tmf: number
    use_tmp: number
    use_tmvol: number
    use_lucro_bruto_operacional_galonagem: number
    use_lucro_bruto_operacional_produto: number
    use_lucro_bruto_operacional: number
    use_ETANOL_COMUM_comb: number
    use_GASOLINA_COMUM_comb: number
    use_OLEO_DIESEL_B_S10_COMUM_comb: number
    use_OLEO_DIESEL_B_S500_COMUM_comb: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    use_mlt?: true
    use_tmc?: true
    use_tmf?: true
    use_tmp?: true
    use_tmvol?: true
    use_lucro_bruto_operacional_galonagem?: true
    use_lucro_bruto_operacional_produto?: true
    use_lucro_bruto_operacional?: true
    use_ETANOL_COMUM_comb?: true
    use_GASOLINA_COMUM_comb?: true
    use_OLEO_DIESEL_B_S10_COMUM_comb?: true
    use_OLEO_DIESEL_B_S500_COMUM_comb?: true
  }

  export type UsersSumAggregateInputType = {
    use_mlt?: true
    use_tmc?: true
    use_tmf?: true
    use_tmp?: true
    use_tmvol?: true
    use_lucro_bruto_operacional_galonagem?: true
    use_lucro_bruto_operacional_produto?: true
    use_lucro_bruto_operacional?: true
    use_ETANOL_COMUM_comb?: true
    use_GASOLINA_COMUM_comb?: true
    use_OLEO_DIESEL_B_S10_COMUM_comb?: true
    use_OLEO_DIESEL_B_S500_COMUM_comb?: true
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
    use_level?: true
    use_mlt?: true
    use_tmc?: true
    use_tmf?: true
    use_tmp?: true
    use_tmvol?: true
    use_lucro_bruto_operacional_galonagem?: true
    use_lucro_bruto_operacional_produto?: true
    use_lucro_bruto_operacional?: true
    use_ETANOL_COMUM_comb?: true
    use_GASOLINA_COMUM_comb?: true
    use_OLEO_DIESEL_B_S10_COMUM_comb?: true
    use_OLEO_DIESEL_B_S500_COMUM_comb?: true
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
    use_level?: true
    use_mlt?: true
    use_tmc?: true
    use_tmf?: true
    use_tmp?: true
    use_tmvol?: true
    use_lucro_bruto_operacional_galonagem?: true
    use_lucro_bruto_operacional_produto?: true
    use_lucro_bruto_operacional?: true
    use_ETANOL_COMUM_comb?: true
    use_GASOLINA_COMUM_comb?: true
    use_OLEO_DIESEL_B_S10_COMUM_comb?: true
    use_OLEO_DIESEL_B_S500_COMUM_comb?: true
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
    use_level?: true
    use_whats_app?: true
    use_mlt?: true
    use_tmc?: true
    use_tmf?: true
    use_tmp?: true
    use_tmvol?: true
    use_lucro_bruto_operacional_galonagem?: true
    use_lucro_bruto_operacional_produto?: true
    use_lucro_bruto_operacional?: true
    use_ETANOL_COMUM_comb?: true
    use_GASOLINA_COMUM_comb?: true
    use_OLEO_DIESEL_B_S10_COMUM_comb?: true
    use_OLEO_DIESEL_B_S500_COMUM_comb?: true
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
    use_level: string | null
    use_whats_app: string[]
    use_mlt: number | null
    use_tmc: number | null
    use_tmf: number | null
    use_tmp: number | null
    use_tmvol: number | null
    use_lucro_bruto_operacional_galonagem: number | null
    use_lucro_bruto_operacional_produto: number | null
    use_lucro_bruto_operacional: number | null
    use_ETANOL_COMUM_comb: number | null
    use_GASOLINA_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb: number | null
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
    use_level?: boolean
    use_whats_app?: boolean
    use_mlt?: boolean
    use_tmc?: boolean
    use_tmf?: boolean
    use_tmp?: boolean
    use_tmvol?: boolean
    use_lucro_bruto_operacional_galonagem?: boolean
    use_lucro_bruto_operacional_produto?: boolean
    use_lucro_bruto_operacional?: boolean
    use_ETANOL_COMUM_comb?: boolean
    use_GASOLINA_COMUM_comb?: boolean
    use_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    use_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
    gallon_gross_history?: boolean | users$gallon_gross_historyArgs<ExtArgs>
    gas_station_setvariables?: boolean | users$gas_station_setvariablesArgs<ExtArgs>
    product_gross_history?: boolean | users$product_gross_historyArgs<ExtArgs>
    region_setvariables?: boolean | users$region_setvariablesArgs<ExtArgs>
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
    use_level?: boolean
    use_whats_app?: boolean
    use_mlt?: boolean
    use_tmc?: boolean
    use_tmf?: boolean
    use_tmp?: boolean
    use_tmvol?: boolean
    use_lucro_bruto_operacional_galonagem?: boolean
    use_lucro_bruto_operacional_produto?: boolean
    use_lucro_bruto_operacional?: boolean
    use_ETANOL_COMUM_comb?: boolean
    use_GASOLINA_COMUM_comb?: boolean
    use_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    use_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
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
    use_level?: boolean
    use_whats_app?: boolean
    use_mlt?: boolean
    use_tmc?: boolean
    use_tmf?: boolean
    use_tmp?: boolean
    use_tmvol?: boolean
    use_lucro_bruto_operacional_galonagem?: boolean
    use_lucro_bruto_operacional_produto?: boolean
    use_lucro_bruto_operacional?: boolean
    use_ETANOL_COMUM_comb?: boolean
    use_GASOLINA_COMUM_comb?: boolean
    use_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    use_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallon_gross_history?: boolean | users$gallon_gross_historyArgs<ExtArgs>
    gas_station_setvariables?: boolean | users$gas_station_setvariablesArgs<ExtArgs>
    product_gross_history?: boolean | users$product_gross_historyArgs<ExtArgs>
    region_setvariables?: boolean | users$region_setvariablesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      gallon_gross_history: Prisma.$gallon_gross_historyPayload<ExtArgs>[]
      gas_station_setvariables: Prisma.$gas_station_setvariablesPayload<ExtArgs>[]
      product_gross_history: Prisma.$product_gross_historyPayload<ExtArgs>[]
      region_setvariables: Prisma.$region_setvariablesPayload<ExtArgs>[]
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
      use_level: string | null
      use_whats_app: string[]
      use_mlt: number | null
      use_tmc: number | null
      use_tmf: number | null
      use_tmp: number | null
      use_tmvol: number | null
      use_lucro_bruto_operacional_galonagem: number | null
      use_lucro_bruto_operacional_produto: number | null
      use_lucro_bruto_operacional: number | null
      use_ETANOL_COMUM_comb: number | null
      use_GASOLINA_COMUM_comb: number | null
      use_OLEO_DIESEL_B_S10_COMUM_comb: number | null
      use_OLEO_DIESEL_B_S500_COMUM_comb: number | null
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
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gallon_gross_history<T extends users$gallon_gross_historyArgs<ExtArgs> = {}>(args?: Subset<T, users$gallon_gross_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "findMany"> | Null>
    gas_station_setvariables<T extends users$gas_station_setvariablesArgs<ExtArgs> = {}>(args?: Subset<T, users$gas_station_setvariablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "findMany"> | Null>
    product_gross_history<T extends users$product_gross_historyArgs<ExtArgs> = {}>(args?: Subset<T, users$product_gross_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "findMany"> | Null>
    region_setvariables<T extends users$region_setvariablesArgs<ExtArgs> = {}>(args?: Subset<T, users$region_setvariablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
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
    readonly use_level: FieldRef<"users", 'String'>
    readonly use_whats_app: FieldRef<"users", 'String[]'>
    readonly use_mlt: FieldRef<"users", 'Float'>
    readonly use_tmc: FieldRef<"users", 'Float'>
    readonly use_tmf: FieldRef<"users", 'Float'>
    readonly use_tmp: FieldRef<"users", 'Float'>
    readonly use_tmvol: FieldRef<"users", 'Float'>
    readonly use_lucro_bruto_operacional_galonagem: FieldRef<"users", 'Float'>
    readonly use_lucro_bruto_operacional_produto: FieldRef<"users", 'Float'>
    readonly use_lucro_bruto_operacional: FieldRef<"users", 'Float'>
    readonly use_ETANOL_COMUM_comb: FieldRef<"users", 'Float'>
    readonly use_GASOLINA_COMUM_comb: FieldRef<"users", 'Float'>
    readonly use_OLEO_DIESEL_B_S10_COMUM_comb: FieldRef<"users", 'Float'>
    readonly use_OLEO_DIESEL_B_S500_COMUM_comb: FieldRef<"users", 'Float'>
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
   * users.gallon_gross_history
   */
  export type users$gallon_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    where?: gallon_gross_historyWhereInput
    orderBy?: gallon_gross_historyOrderByWithRelationInput | gallon_gross_historyOrderByWithRelationInput[]
    cursor?: gallon_gross_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gallon_gross_historyScalarFieldEnum | Gallon_gross_historyScalarFieldEnum[]
  }

  /**
   * users.gas_station_setvariables
   */
  export type users$gas_station_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    where?: gas_station_setvariablesWhereInput
    orderBy?: gas_station_setvariablesOrderByWithRelationInput | gas_station_setvariablesOrderByWithRelationInput[]
    cursor?: gas_station_setvariablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gas_station_setvariablesScalarFieldEnum | Gas_station_setvariablesScalarFieldEnum[]
  }

  /**
   * users.product_gross_history
   */
  export type users$product_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    where?: product_gross_historyWhereInput
    orderBy?: product_gross_historyOrderByWithRelationInput | product_gross_historyOrderByWithRelationInput[]
    cursor?: product_gross_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_gross_historyScalarFieldEnum | Product_gross_historyScalarFieldEnum[]
  }

  /**
   * users.region_setvariables
   */
  export type users$region_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    where?: region_setvariablesWhereInput
    orderBy?: region_setvariablesOrderByWithRelationInput | region_setvariablesOrderByWithRelationInput[]
    cursor?: region_setvariablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Region_setvariablesScalarFieldEnum | Region_setvariablesScalarFieldEnum[]
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
   * Model gas_station_setvariables
   */

  export type AggregateGas_station_setvariables = {
    _count: Gas_station_setvariablesCountAggregateOutputType | null
    _avg: Gas_station_setvariablesAvgAggregateOutputType | null
    _sum: Gas_station_setvariablesSumAggregateOutputType | null
    _min: Gas_station_setvariablesMinAggregateOutputType | null
    _max: Gas_station_setvariablesMaxAggregateOutputType | null
  }

  export type Gas_station_setvariablesAvgAggregateOutputType = {
    gas_station_marginGC: number | null
    gas_station_margin_MLT: number | null
    gas_station_margin_TMP: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    gas_station_MLT_modal: number | null
    gas_station_TMC_modal: number | null
    gas_station_TMF_modal: number | null
    gas_station_TMP_modal: number | null
    gas_station_TMVOL_modal: number | null
    gas_station_ETANOL_COMUM_comb: number | null
    gas_station_GASOLINA_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    gas_station_margin_DIESEL_GROUP: number | null
    gas_station_margin_GASOLINA_PODIUM: number | null
    gas_station_margin_GASOLINA_PREMIUM: number | null
    gas_station_margin_DIESEL_GROUP_S500: number | null
    gas_station_margin_ETANOL_COMUM: number | null
    gas_station_invoice_comb: number | null
    gas_station_invoice_prod: number | null
    gas_station_invoice_comb_daily: number | null
    gas_station_invoice_prod_daily: number | null
    gas_station_margin_TOTAL_PRODUCT: number | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number | null
    gas_station_freight_value: number | null
    gas_station_gross_result_literage: number | null
    gas_station_gross_result_product: number | null
    gas_station_margin_FILTROS_AR_PRODUCT: number | null
  }

  export type Gas_station_setvariablesSumAggregateOutputType = {
    gas_station_marginGC: number | null
    gas_station_margin_MLT: number | null
    gas_station_margin_TMP: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    gas_station_MLT_modal: number | null
    gas_station_TMC_modal: number | null
    gas_station_TMF_modal: number | null
    gas_station_TMP_modal: number | null
    gas_station_TMVOL_modal: number | null
    gas_station_ETANOL_COMUM_comb: number | null
    gas_station_GASOLINA_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    gas_station_margin_DIESEL_GROUP: number | null
    gas_station_margin_GASOLINA_PODIUM: number | null
    gas_station_margin_GASOLINA_PREMIUM: number | null
    gas_station_margin_DIESEL_GROUP_S500: number | null
    gas_station_margin_ETANOL_COMUM: number | null
    gas_station_invoice_comb: number | null
    gas_station_invoice_prod: number | null
    gas_station_invoice_comb_daily: number | null
    gas_station_invoice_prod_daily: number | null
    gas_station_margin_TOTAL_PRODUCT: number | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number | null
    gas_station_freight_value: number | null
    gas_station_gross_result_literage: number | null
    gas_station_gross_result_product: number | null
    gas_station_margin_FILTROS_AR_PRODUCT: number | null
  }

  export type Gas_station_setvariablesMinAggregateOutputType = {
    gas_station_uuid: string | null
    gas_station_marginGC: number | null
    gas_station_type_marginGC: boolean | null
    gas_station_created_at: Date | null
    gas_station_updated_at: Date | null
    ibm_info_id: string | null
    use_uuid: string | null
    verification_msg_sent: boolean | null
    verification_hour_marginGC: Date | null
    gas_station_sanado_hour_marginGC: Date | null
    gas_station_sanado_marginGC: boolean | null
    gas_station_margin_MLT: number | null
    gas_station_margin_TMP: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    gas_station_MLT_modal: number | null
    gas_station_TMC_modal: number | null
    gas_station_TMF_modal: number | null
    gas_station_TMP_modal: number | null
    gas_station_TMVOL_modal: number | null
    gas_station_ETANOL_COMUM_comb: number | null
    gas_station_GASOLINA_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    gas_station_margin_DIESEL_GROUP: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP: Date | null
    gas_station_sanado_margin_DIESEL_GROUP: boolean | null
    gas_station_type_margin_DIESEL_GROUP: boolean | null
    verification_hour_margin_DIESEL_GROUP: Date | null
    gas_station_margin_GASOLINA_PODIUM: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM: Date | null
    gas_station_sanado_margin_GASOLINA_PODIUM: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM: boolean | null
    verification_hour_margin_GASOLINA_PODIUM: Date | null
    gas_station_margin_GASOLINA_PREMIUM: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
    gas_station_sanado_margin_GASOLINA_PREMIUM: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM: Date | null
    gas_station_margin_DIESEL_GROUP_S500: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
    gas_station_sanado_margin_DIESEL_GROUP_S500: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500: Date | null
    gas_station_margin_ETANOL_COMUM: number | null
    gas_station_sanado_hour_ETANOL_COMUM: Date | null
    gas_station_sanado_margin_ETANOL_COMUM: boolean | null
    gas_station_type_margin_ETANOL_COMUM: boolean | null
    verification_hour_margin_ETANOL_COMUM: Date | null
    gas_station_invoice_comb: number | null
    gas_station_invoice_prod: number | null
    gas_station_invoice_comb_daily: number | null
    gas_station_invoice_prod_daily: number | null
    gas_station_margin_TOTAL_PRODUCT: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT: Date | null
    gas_station_sanado_margin_TOTAL_PRODUCT: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT: boolean | null
    verification_hour_margin_TOTAL_PRODUCT: Date | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
    gas_station_freight_value: number | null
    gas_station_gross_result_literage: number | null
    gas_station_gross_result_product: number | null
    gas_station_margin_FILTROS_AR_PRODUCT: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT: Date | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT: Date | null
  }

  export type Gas_station_setvariablesMaxAggregateOutputType = {
    gas_station_uuid: string | null
    gas_station_marginGC: number | null
    gas_station_type_marginGC: boolean | null
    gas_station_created_at: Date | null
    gas_station_updated_at: Date | null
    ibm_info_id: string | null
    use_uuid: string | null
    verification_msg_sent: boolean | null
    verification_hour_marginGC: Date | null
    gas_station_sanado_hour_marginGC: Date | null
    gas_station_sanado_marginGC: boolean | null
    gas_station_margin_MLT: number | null
    gas_station_margin_TMP: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    gas_station_MLT_modal: number | null
    gas_station_TMC_modal: number | null
    gas_station_TMF_modal: number | null
    gas_station_TMP_modal: number | null
    gas_station_TMVOL_modal: number | null
    gas_station_ETANOL_COMUM_comb: number | null
    gas_station_GASOLINA_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    gas_station_margin_DIESEL_GROUP: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP: Date | null
    gas_station_sanado_margin_DIESEL_GROUP: boolean | null
    gas_station_type_margin_DIESEL_GROUP: boolean | null
    verification_hour_margin_DIESEL_GROUP: Date | null
    gas_station_margin_GASOLINA_PODIUM: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM: Date | null
    gas_station_sanado_margin_GASOLINA_PODIUM: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM: boolean | null
    verification_hour_margin_GASOLINA_PODIUM: Date | null
    gas_station_margin_GASOLINA_PREMIUM: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
    gas_station_sanado_margin_GASOLINA_PREMIUM: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM: Date | null
    gas_station_margin_DIESEL_GROUP_S500: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
    gas_station_sanado_margin_DIESEL_GROUP_S500: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500: Date | null
    gas_station_margin_ETANOL_COMUM: number | null
    gas_station_sanado_hour_ETANOL_COMUM: Date | null
    gas_station_sanado_margin_ETANOL_COMUM: boolean | null
    gas_station_type_margin_ETANOL_COMUM: boolean | null
    verification_hour_margin_ETANOL_COMUM: Date | null
    gas_station_invoice_comb: number | null
    gas_station_invoice_prod: number | null
    gas_station_invoice_comb_daily: number | null
    gas_station_invoice_prod_daily: number | null
    gas_station_margin_TOTAL_PRODUCT: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT: Date | null
    gas_station_sanado_margin_TOTAL_PRODUCT: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT: boolean | null
    verification_hour_margin_TOTAL_PRODUCT: Date | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
    gas_station_freight_value: number | null
    gas_station_gross_result_literage: number | null
    gas_station_gross_result_product: number | null
    gas_station_margin_FILTROS_AR_PRODUCT: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT: Date | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT: Date | null
  }

  export type Gas_station_setvariablesCountAggregateOutputType = {
    gas_station_uuid: number
    gas_station_marginGC: number
    gas_station_type_marginGC: number
    gas_station_whats_app: number
    gas_station_created_at: number
    gas_station_updated_at: number
    ibm_info_id: number
    use_uuid: number
    verification_msg_sent: number
    verification_hour_marginGC: number
    gas_station_sanado_hour_marginGC: number
    gas_station_sanado_marginGC: number
    gas_station_margin_MLT: number
    gas_station_margin_TMP: number
    gas_station_LUCRO_BRUTO_GALONAGEM_modal: number
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal: number
    gas_station_LUCRO_BRUTO_PRODUTO_modal: number
    gas_station_MLT_modal: number
    gas_station_TMC_modal: number
    gas_station_TMF_modal: number
    gas_station_TMP_modal: number
    gas_station_TMVOL_modal: number
    gas_station_ETANOL_COMUM_comb: number
    gas_station_GASOLINA_COMUM_comb: number
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb: number
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb: number
    gas_station_margin_DIESEL_GROUP: number
    gas_station_sanado_hour_margin_DIESEL_GROUP: number
    gas_station_sanado_margin_DIESEL_GROUP: number
    gas_station_type_margin_DIESEL_GROUP: number
    verification_hour_margin_DIESEL_GROUP: number
    gas_station_margin_GASOLINA_PODIUM: number
    gas_station_sanado_hour_margin_GASOLINA_PODIUM: number
    gas_station_sanado_margin_GASOLINA_PODIUM: number
    gas_station_type_margin_GASOLINA_PODIUM: number
    verification_hour_margin_GASOLINA_PODIUM: number
    gas_station_margin_GASOLINA_PREMIUM: number
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM: number
    gas_station_sanado_margin_GASOLINA_PREMIUM: number
    gas_station_type_margin_GASOLINA_PREMIUM: number
    verification_hour_margin_GASOLINA_PREMIUM: number
    gas_station_margin_DIESEL_GROUP_S500: number
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500: number
    gas_station_sanado_margin_DIESEL_GROUP_S500: number
    gas_station_type_margin_DIESEL_GROUP_S500: number
    verification_hour_margin_DIESEL_GROUP_S500: number
    gas_station_margin_ETANOL_COMUM: number
    gas_station_sanado_hour_ETANOL_COMUM: number
    gas_station_sanado_margin_ETANOL_COMUM: number
    gas_station_type_margin_ETANOL_COMUM: number
    verification_hour_margin_ETANOL_COMUM: number
    gas_station_invoice_comb: number
    gas_station_invoice_prod: number
    gas_station_invoice_comb_daily: number
    gas_station_invoice_prod_daily: number
    gas_station_margin_TOTAL_PRODUCT: number
    gas_station_sanado_hour_margin_TOTAL_PRODUCT: number
    gas_station_sanado_margin_TOTAL_PRODUCT: number
    gas_station_type_margin_TOTAL_PRODUCT: number
    verification_hour_margin_TOTAL_PRODUCT: number
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number
    gas_station_freight_value: number
    gas_station_gross_result_literage: number
    gas_station_gross_result_product: number
    gas_station_margin_FILTROS_AR_PRODUCT: number
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT: number
    gas_station_sanado_margin_FILTROS_AR_PRODUCT: number
    gas_station_type_margin_FILTROS_AR_PRODUCT: number
    verification_hour_margin_FILTROS_AR_PRODUCT: number
    _all: number
  }


  export type Gas_station_setvariablesAvgAggregateInputType = {
    gas_station_marginGC?: true
    gas_station_margin_MLT?: true
    gas_station_margin_TMP?: true
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: true
    gas_station_MLT_modal?: true
    gas_station_TMC_modal?: true
    gas_station_TMF_modal?: true
    gas_station_TMP_modal?: true
    gas_station_TMVOL_modal?: true
    gas_station_ETANOL_COMUM_comb?: true
    gas_station_GASOLINA_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    gas_station_margin_DIESEL_GROUP?: true
    gas_station_margin_GASOLINA_PODIUM?: true
    gas_station_margin_GASOLINA_PREMIUM?: true
    gas_station_margin_DIESEL_GROUP_S500?: true
    gas_station_margin_ETANOL_COMUM?: true
    gas_station_invoice_comb?: true
    gas_station_invoice_prod?: true
    gas_station_invoice_comb_daily?: true
    gas_station_invoice_prod_daily?: true
    gas_station_margin_TOTAL_PRODUCT?: true
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_freight_value?: true
    gas_station_gross_result_literage?: true
    gas_station_gross_result_product?: true
    gas_station_margin_FILTROS_AR_PRODUCT?: true
  }

  export type Gas_station_setvariablesSumAggregateInputType = {
    gas_station_marginGC?: true
    gas_station_margin_MLT?: true
    gas_station_margin_TMP?: true
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: true
    gas_station_MLT_modal?: true
    gas_station_TMC_modal?: true
    gas_station_TMF_modal?: true
    gas_station_TMP_modal?: true
    gas_station_TMVOL_modal?: true
    gas_station_ETANOL_COMUM_comb?: true
    gas_station_GASOLINA_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    gas_station_margin_DIESEL_GROUP?: true
    gas_station_margin_GASOLINA_PODIUM?: true
    gas_station_margin_GASOLINA_PREMIUM?: true
    gas_station_margin_DIESEL_GROUP_S500?: true
    gas_station_margin_ETANOL_COMUM?: true
    gas_station_invoice_comb?: true
    gas_station_invoice_prod?: true
    gas_station_invoice_comb_daily?: true
    gas_station_invoice_prod_daily?: true
    gas_station_margin_TOTAL_PRODUCT?: true
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_freight_value?: true
    gas_station_gross_result_literage?: true
    gas_station_gross_result_product?: true
    gas_station_margin_FILTROS_AR_PRODUCT?: true
  }

  export type Gas_station_setvariablesMinAggregateInputType = {
    gas_station_uuid?: true
    gas_station_marginGC?: true
    gas_station_type_marginGC?: true
    gas_station_created_at?: true
    gas_station_updated_at?: true
    ibm_info_id?: true
    use_uuid?: true
    verification_msg_sent?: true
    verification_hour_marginGC?: true
    gas_station_sanado_hour_marginGC?: true
    gas_station_sanado_marginGC?: true
    gas_station_margin_MLT?: true
    gas_station_margin_TMP?: true
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: true
    gas_station_MLT_modal?: true
    gas_station_TMC_modal?: true
    gas_station_TMF_modal?: true
    gas_station_TMP_modal?: true
    gas_station_TMVOL_modal?: true
    gas_station_ETANOL_COMUM_comb?: true
    gas_station_GASOLINA_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    gas_station_margin_DIESEL_GROUP?: true
    gas_station_sanado_hour_margin_DIESEL_GROUP?: true
    gas_station_sanado_margin_DIESEL_GROUP?: true
    gas_station_type_margin_DIESEL_GROUP?: true
    verification_hour_margin_DIESEL_GROUP?: true
    gas_station_margin_GASOLINA_PODIUM?: true
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: true
    gas_station_sanado_margin_GASOLINA_PODIUM?: true
    gas_station_type_margin_GASOLINA_PODIUM?: true
    verification_hour_margin_GASOLINA_PODIUM?: true
    gas_station_margin_GASOLINA_PREMIUM?: true
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: true
    gas_station_sanado_margin_GASOLINA_PREMIUM?: true
    gas_station_type_margin_GASOLINA_PREMIUM?: true
    verification_hour_margin_GASOLINA_PREMIUM?: true
    gas_station_margin_DIESEL_GROUP_S500?: true
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: true
    gas_station_sanado_margin_DIESEL_GROUP_S500?: true
    gas_station_type_margin_DIESEL_GROUP_S500?: true
    verification_hour_margin_DIESEL_GROUP_S500?: true
    gas_station_margin_ETANOL_COMUM?: true
    gas_station_sanado_hour_ETANOL_COMUM?: true
    gas_station_sanado_margin_ETANOL_COMUM?: true
    gas_station_type_margin_ETANOL_COMUM?: true
    verification_hour_margin_ETANOL_COMUM?: true
    gas_station_invoice_comb?: true
    gas_station_invoice_prod?: true
    gas_station_invoice_comb_daily?: true
    gas_station_invoice_prod_daily?: true
    gas_station_margin_TOTAL_PRODUCT?: true
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: true
    gas_station_sanado_margin_TOTAL_PRODUCT?: true
    gas_station_type_margin_TOTAL_PRODUCT?: true
    verification_hour_margin_TOTAL_PRODUCT?: true
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_freight_value?: true
    gas_station_gross_result_literage?: true
    gas_station_gross_result_product?: true
    gas_station_margin_FILTROS_AR_PRODUCT?: true
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: true
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: true
    gas_station_type_margin_FILTROS_AR_PRODUCT?: true
    verification_hour_margin_FILTROS_AR_PRODUCT?: true
  }

  export type Gas_station_setvariablesMaxAggregateInputType = {
    gas_station_uuid?: true
    gas_station_marginGC?: true
    gas_station_type_marginGC?: true
    gas_station_created_at?: true
    gas_station_updated_at?: true
    ibm_info_id?: true
    use_uuid?: true
    verification_msg_sent?: true
    verification_hour_marginGC?: true
    gas_station_sanado_hour_marginGC?: true
    gas_station_sanado_marginGC?: true
    gas_station_margin_MLT?: true
    gas_station_margin_TMP?: true
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: true
    gas_station_MLT_modal?: true
    gas_station_TMC_modal?: true
    gas_station_TMF_modal?: true
    gas_station_TMP_modal?: true
    gas_station_TMVOL_modal?: true
    gas_station_ETANOL_COMUM_comb?: true
    gas_station_GASOLINA_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    gas_station_margin_DIESEL_GROUP?: true
    gas_station_sanado_hour_margin_DIESEL_GROUP?: true
    gas_station_sanado_margin_DIESEL_GROUP?: true
    gas_station_type_margin_DIESEL_GROUP?: true
    verification_hour_margin_DIESEL_GROUP?: true
    gas_station_margin_GASOLINA_PODIUM?: true
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: true
    gas_station_sanado_margin_GASOLINA_PODIUM?: true
    gas_station_type_margin_GASOLINA_PODIUM?: true
    verification_hour_margin_GASOLINA_PODIUM?: true
    gas_station_margin_GASOLINA_PREMIUM?: true
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: true
    gas_station_sanado_margin_GASOLINA_PREMIUM?: true
    gas_station_type_margin_GASOLINA_PREMIUM?: true
    verification_hour_margin_GASOLINA_PREMIUM?: true
    gas_station_margin_DIESEL_GROUP_S500?: true
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: true
    gas_station_sanado_margin_DIESEL_GROUP_S500?: true
    gas_station_type_margin_DIESEL_GROUP_S500?: true
    verification_hour_margin_DIESEL_GROUP_S500?: true
    gas_station_margin_ETANOL_COMUM?: true
    gas_station_sanado_hour_ETANOL_COMUM?: true
    gas_station_sanado_margin_ETANOL_COMUM?: true
    gas_station_type_margin_ETANOL_COMUM?: true
    verification_hour_margin_ETANOL_COMUM?: true
    gas_station_invoice_comb?: true
    gas_station_invoice_prod?: true
    gas_station_invoice_comb_daily?: true
    gas_station_invoice_prod_daily?: true
    gas_station_margin_TOTAL_PRODUCT?: true
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: true
    gas_station_sanado_margin_TOTAL_PRODUCT?: true
    gas_station_type_margin_TOTAL_PRODUCT?: true
    verification_hour_margin_TOTAL_PRODUCT?: true
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_freight_value?: true
    gas_station_gross_result_literage?: true
    gas_station_gross_result_product?: true
    gas_station_margin_FILTROS_AR_PRODUCT?: true
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: true
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: true
    gas_station_type_margin_FILTROS_AR_PRODUCT?: true
    verification_hour_margin_FILTROS_AR_PRODUCT?: true
  }

  export type Gas_station_setvariablesCountAggregateInputType = {
    gas_station_uuid?: true
    gas_station_marginGC?: true
    gas_station_type_marginGC?: true
    gas_station_whats_app?: true
    gas_station_created_at?: true
    gas_station_updated_at?: true
    ibm_info_id?: true
    use_uuid?: true
    verification_msg_sent?: true
    verification_hour_marginGC?: true
    gas_station_sanado_hour_marginGC?: true
    gas_station_sanado_marginGC?: true
    gas_station_margin_MLT?: true
    gas_station_margin_TMP?: true
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: true
    gas_station_MLT_modal?: true
    gas_station_TMC_modal?: true
    gas_station_TMF_modal?: true
    gas_station_TMP_modal?: true
    gas_station_TMVOL_modal?: true
    gas_station_ETANOL_COMUM_comb?: true
    gas_station_GASOLINA_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    gas_station_margin_DIESEL_GROUP?: true
    gas_station_sanado_hour_margin_DIESEL_GROUP?: true
    gas_station_sanado_margin_DIESEL_GROUP?: true
    gas_station_type_margin_DIESEL_GROUP?: true
    verification_hour_margin_DIESEL_GROUP?: true
    gas_station_margin_GASOLINA_PODIUM?: true
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: true
    gas_station_sanado_margin_GASOLINA_PODIUM?: true
    gas_station_type_margin_GASOLINA_PODIUM?: true
    verification_hour_margin_GASOLINA_PODIUM?: true
    gas_station_margin_GASOLINA_PREMIUM?: true
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: true
    gas_station_sanado_margin_GASOLINA_PREMIUM?: true
    gas_station_type_margin_GASOLINA_PREMIUM?: true
    verification_hour_margin_GASOLINA_PREMIUM?: true
    gas_station_margin_DIESEL_GROUP_S500?: true
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: true
    gas_station_sanado_margin_DIESEL_GROUP_S500?: true
    gas_station_type_margin_DIESEL_GROUP_S500?: true
    verification_hour_margin_DIESEL_GROUP_S500?: true
    gas_station_margin_ETANOL_COMUM?: true
    gas_station_sanado_hour_ETANOL_COMUM?: true
    gas_station_sanado_margin_ETANOL_COMUM?: true
    gas_station_type_margin_ETANOL_COMUM?: true
    verification_hour_margin_ETANOL_COMUM?: true
    gas_station_invoice_comb?: true
    gas_station_invoice_prod?: true
    gas_station_invoice_comb_daily?: true
    gas_station_invoice_prod_daily?: true
    gas_station_margin_TOTAL_PRODUCT?: true
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: true
    gas_station_sanado_margin_TOTAL_PRODUCT?: true
    gas_station_type_margin_TOTAL_PRODUCT?: true
    verification_hour_margin_TOTAL_PRODUCT?: true
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: true
    gas_station_freight_value?: true
    gas_station_gross_result_literage?: true
    gas_station_gross_result_product?: true
    gas_station_margin_FILTROS_AR_PRODUCT?: true
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: true
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: true
    gas_station_type_margin_FILTROS_AR_PRODUCT?: true
    verification_hour_margin_FILTROS_AR_PRODUCT?: true
    _all?: true
  }

  export type Gas_station_setvariablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gas_station_setvariables to aggregate.
     */
    where?: gas_station_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_station_setvariables to fetch.
     */
    orderBy?: gas_station_setvariablesOrderByWithRelationInput | gas_station_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gas_station_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_station_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_station_setvariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gas_station_setvariables
    **/
    _count?: true | Gas_station_setvariablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gas_station_setvariablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gas_station_setvariablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gas_station_setvariablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gas_station_setvariablesMaxAggregateInputType
  }

  export type GetGas_station_setvariablesAggregateType<T extends Gas_station_setvariablesAggregateArgs> = {
        [P in keyof T & keyof AggregateGas_station_setvariables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGas_station_setvariables[P]>
      : GetScalarType<T[P], AggregateGas_station_setvariables[P]>
  }




  export type gas_station_setvariablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gas_station_setvariablesWhereInput
    orderBy?: gas_station_setvariablesOrderByWithAggregationInput | gas_station_setvariablesOrderByWithAggregationInput[]
    by: Gas_station_setvariablesScalarFieldEnum[] | Gas_station_setvariablesScalarFieldEnum
    having?: gas_station_setvariablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gas_station_setvariablesCountAggregateInputType | true
    _avg?: Gas_station_setvariablesAvgAggregateInputType
    _sum?: Gas_station_setvariablesSumAggregateInputType
    _min?: Gas_station_setvariablesMinAggregateInputType
    _max?: Gas_station_setvariablesMaxAggregateInputType
  }

  export type Gas_station_setvariablesGroupByOutputType = {
    gas_station_uuid: string
    gas_station_marginGC: number | null
    gas_station_type_marginGC: boolean | null
    gas_station_whats_app: string[]
    gas_station_created_at: Date
    gas_station_updated_at: Date
    ibm_info_id: string | null
    use_uuid: string | null
    verification_msg_sent: boolean | null
    verification_hour_marginGC: Date | null
    gas_station_sanado_hour_marginGC: Date | null
    gas_station_sanado_marginGC: boolean | null
    gas_station_margin_MLT: number | null
    gas_station_margin_TMP: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    gas_station_MLT_modal: number | null
    gas_station_TMC_modal: number | null
    gas_station_TMF_modal: number | null
    gas_station_TMP_modal: number | null
    gas_station_TMVOL_modal: number | null
    gas_station_ETANOL_COMUM_comb: number | null
    gas_station_GASOLINA_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    gas_station_margin_DIESEL_GROUP: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP: Date | null
    gas_station_sanado_margin_DIESEL_GROUP: boolean | null
    gas_station_type_margin_DIESEL_GROUP: boolean | null
    verification_hour_margin_DIESEL_GROUP: Date | null
    gas_station_margin_GASOLINA_PODIUM: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM: Date | null
    gas_station_sanado_margin_GASOLINA_PODIUM: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM: boolean | null
    verification_hour_margin_GASOLINA_PODIUM: Date | null
    gas_station_margin_GASOLINA_PREMIUM: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
    gas_station_sanado_margin_GASOLINA_PREMIUM: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM: Date | null
    gas_station_margin_DIESEL_GROUP_S500: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
    gas_station_sanado_margin_DIESEL_GROUP_S500: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500: Date | null
    gas_station_margin_ETANOL_COMUM: number | null
    gas_station_sanado_hour_ETANOL_COMUM: Date | null
    gas_station_sanado_margin_ETANOL_COMUM: boolean | null
    gas_station_type_margin_ETANOL_COMUM: boolean | null
    verification_hour_margin_ETANOL_COMUM: Date | null
    gas_station_invoice_comb: number | null
    gas_station_invoice_prod: number | null
    gas_station_invoice_comb_daily: number | null
    gas_station_invoice_prod_daily: number | null
    gas_station_margin_TOTAL_PRODUCT: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT: Date | null
    gas_station_sanado_margin_TOTAL_PRODUCT: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT: boolean | null
    verification_hour_margin_TOTAL_PRODUCT: Date | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
    gas_station_freight_value: number | null
    gas_station_gross_result_literage: number | null
    gas_station_gross_result_product: number | null
    gas_station_margin_FILTROS_AR_PRODUCT: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT: Date | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT: Date | null
    _count: Gas_station_setvariablesCountAggregateOutputType | null
    _avg: Gas_station_setvariablesAvgAggregateOutputType | null
    _sum: Gas_station_setvariablesSumAggregateOutputType | null
    _min: Gas_station_setvariablesMinAggregateOutputType | null
    _max: Gas_station_setvariablesMaxAggregateOutputType | null
  }

  type GetGas_station_setvariablesGroupByPayload<T extends gas_station_setvariablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gas_station_setvariablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gas_station_setvariablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gas_station_setvariablesGroupByOutputType[P]>
            : GetScalarType<T[P], Gas_station_setvariablesGroupByOutputType[P]>
        }
      >
    >


  export type gas_station_setvariablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gas_station_uuid?: boolean
    gas_station_marginGC?: boolean
    gas_station_type_marginGC?: boolean
    gas_station_whats_app?: boolean
    gas_station_created_at?: boolean
    gas_station_updated_at?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    verification_msg_sent?: boolean
    verification_hour_marginGC?: boolean
    gas_station_sanado_hour_marginGC?: boolean
    gas_station_sanado_marginGC?: boolean
    gas_station_margin_MLT?: boolean
    gas_station_margin_TMP?: boolean
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: boolean
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: boolean
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: boolean
    gas_station_MLT_modal?: boolean
    gas_station_TMC_modal?: boolean
    gas_station_TMF_modal?: boolean
    gas_station_TMP_modal?: boolean
    gas_station_TMVOL_modal?: boolean
    gas_station_ETANOL_COMUM_comb?: boolean
    gas_station_GASOLINA_COMUM_comb?: boolean
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
    gas_station_margin_DIESEL_GROUP?: boolean
    gas_station_sanado_hour_margin_DIESEL_GROUP?: boolean
    gas_station_sanado_margin_DIESEL_GROUP?: boolean
    gas_station_type_margin_DIESEL_GROUP?: boolean
    verification_hour_margin_DIESEL_GROUP?: boolean
    gas_station_margin_GASOLINA_PODIUM?: boolean
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: boolean
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean
    gas_station_type_margin_GASOLINA_PODIUM?: boolean
    verification_hour_margin_GASOLINA_PODIUM?: boolean
    gas_station_margin_GASOLINA_PREMIUM?: boolean
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: boolean
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean
    verification_hour_margin_GASOLINA_PREMIUM?: boolean
    gas_station_margin_DIESEL_GROUP_S500?: boolean
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: boolean
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean
    verification_hour_margin_DIESEL_GROUP_S500?: boolean
    gas_station_margin_ETANOL_COMUM?: boolean
    gas_station_sanado_hour_ETANOL_COMUM?: boolean
    gas_station_sanado_margin_ETANOL_COMUM?: boolean
    gas_station_type_margin_ETANOL_COMUM?: boolean
    verification_hour_margin_ETANOL_COMUM?: boolean
    gas_station_invoice_comb?: boolean
    gas_station_invoice_prod?: boolean
    gas_station_invoice_comb_daily?: boolean
    gas_station_invoice_prod_daily?: boolean
    gas_station_margin_TOTAL_PRODUCT?: boolean
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: boolean
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean
    gas_station_type_margin_TOTAL_PRODUCT?: boolean
    verification_hour_margin_TOTAL_PRODUCT?: boolean
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_freight_value?: boolean
    gas_station_gross_result_literage?: boolean
    gas_station_gross_result_product?: boolean
    gas_station_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean
    verification_hour_margin_FILTROS_AR_PRODUCT?: boolean
    ibm_info?: boolean | gas_station_setvariables$ibm_infoArgs<ExtArgs>
    users?: boolean | gas_station_setvariables$usersArgs<ExtArgs>
  }, ExtArgs["result"]["gas_station_setvariables"]>

  export type gas_station_setvariablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gas_station_uuid?: boolean
    gas_station_marginGC?: boolean
    gas_station_type_marginGC?: boolean
    gas_station_whats_app?: boolean
    gas_station_created_at?: boolean
    gas_station_updated_at?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    verification_msg_sent?: boolean
    verification_hour_marginGC?: boolean
    gas_station_sanado_hour_marginGC?: boolean
    gas_station_sanado_marginGC?: boolean
    gas_station_margin_MLT?: boolean
    gas_station_margin_TMP?: boolean
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: boolean
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: boolean
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: boolean
    gas_station_MLT_modal?: boolean
    gas_station_TMC_modal?: boolean
    gas_station_TMF_modal?: boolean
    gas_station_TMP_modal?: boolean
    gas_station_TMVOL_modal?: boolean
    gas_station_ETANOL_COMUM_comb?: boolean
    gas_station_GASOLINA_COMUM_comb?: boolean
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
    gas_station_margin_DIESEL_GROUP?: boolean
    gas_station_sanado_hour_margin_DIESEL_GROUP?: boolean
    gas_station_sanado_margin_DIESEL_GROUP?: boolean
    gas_station_type_margin_DIESEL_GROUP?: boolean
    verification_hour_margin_DIESEL_GROUP?: boolean
    gas_station_margin_GASOLINA_PODIUM?: boolean
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: boolean
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean
    gas_station_type_margin_GASOLINA_PODIUM?: boolean
    verification_hour_margin_GASOLINA_PODIUM?: boolean
    gas_station_margin_GASOLINA_PREMIUM?: boolean
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: boolean
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean
    verification_hour_margin_GASOLINA_PREMIUM?: boolean
    gas_station_margin_DIESEL_GROUP_S500?: boolean
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: boolean
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean
    verification_hour_margin_DIESEL_GROUP_S500?: boolean
    gas_station_margin_ETANOL_COMUM?: boolean
    gas_station_sanado_hour_ETANOL_COMUM?: boolean
    gas_station_sanado_margin_ETANOL_COMUM?: boolean
    gas_station_type_margin_ETANOL_COMUM?: boolean
    verification_hour_margin_ETANOL_COMUM?: boolean
    gas_station_invoice_comb?: boolean
    gas_station_invoice_prod?: boolean
    gas_station_invoice_comb_daily?: boolean
    gas_station_invoice_prod_daily?: boolean
    gas_station_margin_TOTAL_PRODUCT?: boolean
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: boolean
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean
    gas_station_type_margin_TOTAL_PRODUCT?: boolean
    verification_hour_margin_TOTAL_PRODUCT?: boolean
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_freight_value?: boolean
    gas_station_gross_result_literage?: boolean
    gas_station_gross_result_product?: boolean
    gas_station_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean
    verification_hour_margin_FILTROS_AR_PRODUCT?: boolean
    ibm_info?: boolean | gas_station_setvariables$ibm_infoArgs<ExtArgs>
    users?: boolean | gas_station_setvariables$usersArgs<ExtArgs>
  }, ExtArgs["result"]["gas_station_setvariables"]>

  export type gas_station_setvariablesSelectScalar = {
    gas_station_uuid?: boolean
    gas_station_marginGC?: boolean
    gas_station_type_marginGC?: boolean
    gas_station_whats_app?: boolean
    gas_station_created_at?: boolean
    gas_station_updated_at?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    verification_msg_sent?: boolean
    verification_hour_marginGC?: boolean
    gas_station_sanado_hour_marginGC?: boolean
    gas_station_sanado_marginGC?: boolean
    gas_station_margin_MLT?: boolean
    gas_station_margin_TMP?: boolean
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: boolean
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: boolean
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: boolean
    gas_station_MLT_modal?: boolean
    gas_station_TMC_modal?: boolean
    gas_station_TMF_modal?: boolean
    gas_station_TMP_modal?: boolean
    gas_station_TMVOL_modal?: boolean
    gas_station_ETANOL_COMUM_comb?: boolean
    gas_station_GASOLINA_COMUM_comb?: boolean
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
    gas_station_margin_DIESEL_GROUP?: boolean
    gas_station_sanado_hour_margin_DIESEL_GROUP?: boolean
    gas_station_sanado_margin_DIESEL_GROUP?: boolean
    gas_station_type_margin_DIESEL_GROUP?: boolean
    verification_hour_margin_DIESEL_GROUP?: boolean
    gas_station_margin_GASOLINA_PODIUM?: boolean
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: boolean
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean
    gas_station_type_margin_GASOLINA_PODIUM?: boolean
    verification_hour_margin_GASOLINA_PODIUM?: boolean
    gas_station_margin_GASOLINA_PREMIUM?: boolean
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: boolean
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean
    verification_hour_margin_GASOLINA_PREMIUM?: boolean
    gas_station_margin_DIESEL_GROUP_S500?: boolean
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: boolean
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean
    verification_hour_margin_DIESEL_GROUP_S500?: boolean
    gas_station_margin_ETANOL_COMUM?: boolean
    gas_station_sanado_hour_ETANOL_COMUM?: boolean
    gas_station_sanado_margin_ETANOL_COMUM?: boolean
    gas_station_type_margin_ETANOL_COMUM?: boolean
    verification_hour_margin_ETANOL_COMUM?: boolean
    gas_station_invoice_comb?: boolean
    gas_station_invoice_prod?: boolean
    gas_station_invoice_comb_daily?: boolean
    gas_station_invoice_prod_daily?: boolean
    gas_station_margin_TOTAL_PRODUCT?: boolean
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: boolean
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean
    gas_station_type_margin_TOTAL_PRODUCT?: boolean
    verification_hour_margin_TOTAL_PRODUCT?: boolean
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean
    gas_station_freight_value?: boolean
    gas_station_gross_result_literage?: boolean
    gas_station_gross_result_product?: boolean
    gas_station_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean
    verification_hour_margin_FILTROS_AR_PRODUCT?: boolean
  }

  export type gas_station_setvariablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ibm_info?: boolean | gas_station_setvariables$ibm_infoArgs<ExtArgs>
    users?: boolean | gas_station_setvariables$usersArgs<ExtArgs>
  }
  export type gas_station_setvariablesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ibm_info?: boolean | gas_station_setvariables$ibm_infoArgs<ExtArgs>
    users?: boolean | gas_station_setvariables$usersArgs<ExtArgs>
  }

  export type $gas_station_setvariablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gas_station_setvariables"
    objects: {
      ibm_info: Prisma.$ibm_infoPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      gas_station_uuid: string
      gas_station_marginGC: number | null
      gas_station_type_marginGC: boolean | null
      gas_station_whats_app: string[]
      gas_station_created_at: Date
      gas_station_updated_at: Date
      ibm_info_id: string | null
      use_uuid: string | null
      verification_msg_sent: boolean | null
      verification_hour_marginGC: Date | null
      gas_station_sanado_hour_marginGC: Date | null
      gas_station_sanado_marginGC: boolean | null
      gas_station_margin_MLT: number | null
      gas_station_margin_TMP: number | null
      gas_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
      gas_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
      gas_station_LUCRO_BRUTO_PRODUTO_modal: number | null
      gas_station_MLT_modal: number | null
      gas_station_TMC_modal: number | null
      gas_station_TMF_modal: number | null
      gas_station_TMP_modal: number | null
      gas_station_TMVOL_modal: number | null
      gas_station_ETANOL_COMUM_comb: number | null
      gas_station_GASOLINA_COMUM_comb: number | null
      gas_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
      gas_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
      gas_station_margin_DIESEL_GROUP: number | null
      gas_station_sanado_hour_margin_DIESEL_GROUP: Date | null
      gas_station_sanado_margin_DIESEL_GROUP: boolean | null
      gas_station_type_margin_DIESEL_GROUP: boolean | null
      verification_hour_margin_DIESEL_GROUP: Date | null
      gas_station_margin_GASOLINA_PODIUM: number | null
      gas_station_sanado_hour_margin_GASOLINA_PODIUM: Date | null
      gas_station_sanado_margin_GASOLINA_PODIUM: boolean | null
      gas_station_type_margin_GASOLINA_PODIUM: boolean | null
      verification_hour_margin_GASOLINA_PODIUM: Date | null
      gas_station_margin_GASOLINA_PREMIUM: number | null
      gas_station_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
      gas_station_sanado_margin_GASOLINA_PREMIUM: boolean | null
      gas_station_type_margin_GASOLINA_PREMIUM: boolean | null
      verification_hour_margin_GASOLINA_PREMIUM: Date | null
      gas_station_margin_DIESEL_GROUP_S500: number | null
      gas_station_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
      gas_station_sanado_margin_DIESEL_GROUP_S500: boolean | null
      gas_station_type_margin_DIESEL_GROUP_S500: boolean | null
      verification_hour_margin_DIESEL_GROUP_S500: Date | null
      gas_station_margin_ETANOL_COMUM: number | null
      gas_station_sanado_hour_ETANOL_COMUM: Date | null
      gas_station_sanado_margin_ETANOL_COMUM: boolean | null
      gas_station_type_margin_ETANOL_COMUM: boolean | null
      verification_hour_margin_ETANOL_COMUM: Date | null
      gas_station_invoice_comb: number | null
      gas_station_invoice_prod: number | null
      gas_station_invoice_comb_daily: number | null
      gas_station_invoice_prod_daily: number | null
      gas_station_margin_TOTAL_PRODUCT: number | null
      gas_station_sanado_hour_margin_TOTAL_PRODUCT: Date | null
      gas_station_sanado_margin_TOTAL_PRODUCT: boolean | null
      gas_station_type_margin_TOTAL_PRODUCT: boolean | null
      verification_hour_margin_TOTAL_PRODUCT: Date | null
      gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: number | null
      gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
      gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
      gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: boolean | null
      verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: Date | null
      gas_station_freight_value: number | null
      gas_station_gross_result_literage: number | null
      gas_station_gross_result_product: number | null
      gas_station_margin_FILTROS_AR_PRODUCT: number | null
      gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT: Date | null
      gas_station_sanado_margin_FILTROS_AR_PRODUCT: boolean | null
      gas_station_type_margin_FILTROS_AR_PRODUCT: boolean | null
      verification_hour_margin_FILTROS_AR_PRODUCT: Date | null
    }, ExtArgs["result"]["gas_station_setvariables"]>
    composites: {}
  }

  type gas_station_setvariablesGetPayload<S extends boolean | null | undefined | gas_station_setvariablesDefaultArgs> = $Result.GetResult<Prisma.$gas_station_setvariablesPayload, S>

  type gas_station_setvariablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gas_station_setvariablesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Gas_station_setvariablesCountAggregateInputType | true
    }

  export interface gas_station_setvariablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gas_station_setvariables'], meta: { name: 'gas_station_setvariables' } }
    /**
     * Find zero or one Gas_station_setvariables that matches the filter.
     * @param {gas_station_setvariablesFindUniqueArgs} args - Arguments to find a Gas_station_setvariables
     * @example
     * // Get one Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gas_station_setvariablesFindUniqueArgs>(args: SelectSubset<T, gas_station_setvariablesFindUniqueArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gas_station_setvariables that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gas_station_setvariablesFindUniqueOrThrowArgs} args - Arguments to find a Gas_station_setvariables
     * @example
     * // Get one Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gas_station_setvariablesFindUniqueOrThrowArgs>(args: SelectSubset<T, gas_station_setvariablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gas_station_setvariables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_station_setvariablesFindFirstArgs} args - Arguments to find a Gas_station_setvariables
     * @example
     * // Get one Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gas_station_setvariablesFindFirstArgs>(args?: SelectSubset<T, gas_station_setvariablesFindFirstArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gas_station_setvariables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_station_setvariablesFindFirstOrThrowArgs} args - Arguments to find a Gas_station_setvariables
     * @example
     * // Get one Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gas_station_setvariablesFindFirstOrThrowArgs>(args?: SelectSubset<T, gas_station_setvariablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gas_station_setvariables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_station_setvariablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.findMany()
     * 
     * // Get first 10 Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.findMany({ take: 10 })
     * 
     * // Only select the `gas_station_uuid`
     * const gas_station_setvariablesWithGas_station_uuidOnly = await prisma.gas_station_setvariables.findMany({ select: { gas_station_uuid: true } })
     * 
     */
    findMany<T extends gas_station_setvariablesFindManyArgs>(args?: SelectSubset<T, gas_station_setvariablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gas_station_setvariables.
     * @param {gas_station_setvariablesCreateArgs} args - Arguments to create a Gas_station_setvariables.
     * @example
     * // Create one Gas_station_setvariables
     * const Gas_station_setvariables = await prisma.gas_station_setvariables.create({
     *   data: {
     *     // ... data to create a Gas_station_setvariables
     *   }
     * })
     * 
     */
    create<T extends gas_station_setvariablesCreateArgs>(args: SelectSubset<T, gas_station_setvariablesCreateArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gas_station_setvariables.
     * @param {gas_station_setvariablesCreateManyArgs} args - Arguments to create many Gas_station_setvariables.
     * @example
     * // Create many Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gas_station_setvariablesCreateManyArgs>(args?: SelectSubset<T, gas_station_setvariablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gas_station_setvariables and returns the data saved in the database.
     * @param {gas_station_setvariablesCreateManyAndReturnArgs} args - Arguments to create many Gas_station_setvariables.
     * @example
     * // Create many Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gas_station_setvariables and only return the `gas_station_uuid`
     * const gas_station_setvariablesWithGas_station_uuidOnly = await prisma.gas_station_setvariables.createManyAndReturn({ 
     *   select: { gas_station_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gas_station_setvariablesCreateManyAndReturnArgs>(args?: SelectSubset<T, gas_station_setvariablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gas_station_setvariables.
     * @param {gas_station_setvariablesDeleteArgs} args - Arguments to delete one Gas_station_setvariables.
     * @example
     * // Delete one Gas_station_setvariables
     * const Gas_station_setvariables = await prisma.gas_station_setvariables.delete({
     *   where: {
     *     // ... filter to delete one Gas_station_setvariables
     *   }
     * })
     * 
     */
    delete<T extends gas_station_setvariablesDeleteArgs>(args: SelectSubset<T, gas_station_setvariablesDeleteArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gas_station_setvariables.
     * @param {gas_station_setvariablesUpdateArgs} args - Arguments to update one Gas_station_setvariables.
     * @example
     * // Update one Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gas_station_setvariablesUpdateArgs>(args: SelectSubset<T, gas_station_setvariablesUpdateArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gas_station_setvariables.
     * @param {gas_station_setvariablesDeleteManyArgs} args - Arguments to filter Gas_station_setvariables to delete.
     * @example
     * // Delete a few Gas_station_setvariables
     * const { count } = await prisma.gas_station_setvariables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gas_station_setvariablesDeleteManyArgs>(args?: SelectSubset<T, gas_station_setvariablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gas_station_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_station_setvariablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gas_station_setvariablesUpdateManyArgs>(args: SelectSubset<T, gas_station_setvariablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gas_station_setvariables.
     * @param {gas_station_setvariablesUpsertArgs} args - Arguments to update or create a Gas_station_setvariables.
     * @example
     * // Update or create a Gas_station_setvariables
     * const gas_station_setvariables = await prisma.gas_station_setvariables.upsert({
     *   create: {
     *     // ... data to create a Gas_station_setvariables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gas_station_setvariables we want to update
     *   }
     * })
     */
    upsert<T extends gas_station_setvariablesUpsertArgs>(args: SelectSubset<T, gas_station_setvariablesUpsertArgs<ExtArgs>>): Prisma__gas_station_setvariablesClient<$Result.GetResult<Prisma.$gas_station_setvariablesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gas_station_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_station_setvariablesCountArgs} args - Arguments to filter Gas_station_setvariables to count.
     * @example
     * // Count the number of Gas_station_setvariables
     * const count = await prisma.gas_station_setvariables.count({
     *   where: {
     *     // ... the filter for the Gas_station_setvariables we want to count
     *   }
     * })
    **/
    count<T extends gas_station_setvariablesCountArgs>(
      args?: Subset<T, gas_station_setvariablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gas_station_setvariablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gas_station_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gas_station_setvariablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gas_station_setvariablesAggregateArgs>(args: Subset<T, Gas_station_setvariablesAggregateArgs>): Prisma.PrismaPromise<GetGas_station_setvariablesAggregateType<T>>

    /**
     * Group by Gas_station_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gas_station_setvariablesGroupByArgs} args - Group by arguments.
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
      T extends gas_station_setvariablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gas_station_setvariablesGroupByArgs['orderBy'] }
        : { orderBy?: gas_station_setvariablesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gas_station_setvariablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGas_station_setvariablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gas_station_setvariables model
   */
  readonly fields: gas_station_setvariablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gas_station_setvariables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gas_station_setvariablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ibm_info<T extends gas_station_setvariables$ibm_infoArgs<ExtArgs> = {}>(args?: Subset<T, gas_station_setvariables$ibm_infoArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    users<T extends gas_station_setvariables$usersArgs<ExtArgs> = {}>(args?: Subset<T, gas_station_setvariables$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gas_station_setvariables model
   */ 
  interface gas_station_setvariablesFieldRefs {
    readonly gas_station_uuid: FieldRef<"gas_station_setvariables", 'String'>
    readonly gas_station_marginGC: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_type_marginGC: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_whats_app: FieldRef<"gas_station_setvariables", 'String[]'>
    readonly gas_station_created_at: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_updated_at: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly ibm_info_id: FieldRef<"gas_station_setvariables", 'String'>
    readonly use_uuid: FieldRef<"gas_station_setvariables", 'String'>
    readonly verification_msg_sent: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_marginGC: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_hour_marginGC: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_marginGC: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_margin_MLT: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_margin_TMP: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_LUCRO_BRUTO_GALONAGEM_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_LUCRO_BRUTO_OPERACIONAL_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_LUCRO_BRUTO_PRODUTO_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_MLT_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_TMC_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_TMF_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_TMP_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_TMVOL_modal: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_ETANOL_COMUM_comb: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_GASOLINA_COMUM_comb: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_OLEO_DIESEL_B_S10_COMUM_comb: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_OLEO_DIESEL_B_S500_COMUM_comb: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_margin_DIESEL_GROUP: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_margin_DIESEL_GROUP: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_DIESEL_GROUP: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_DIESEL_GROUP: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_DIESEL_GROUP: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_margin_GASOLINA_PODIUM: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_margin_GASOLINA_PODIUM: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_GASOLINA_PODIUM: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_GASOLINA_PODIUM: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_GASOLINA_PODIUM: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_margin_GASOLINA_PREMIUM: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_margin_GASOLINA_PREMIUM: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_GASOLINA_PREMIUM: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_GASOLINA_PREMIUM: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_GASOLINA_PREMIUM: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_margin_DIESEL_GROUP_S500: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_margin_DIESEL_GROUP_S500: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_DIESEL_GROUP_S500: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_DIESEL_GROUP_S500: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_DIESEL_GROUP_S500: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_margin_ETANOL_COMUM: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_ETANOL_COMUM: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_ETANOL_COMUM: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_ETANOL_COMUM: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_ETANOL_COMUM: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_invoice_comb: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_invoice_prod: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_invoice_comb_daily: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_invoice_prod_daily: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_margin_TOTAL_PRODUCT: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_margin_TOTAL_PRODUCT: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_TOTAL_PRODUCT: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_TOTAL_PRODUCT: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_TOTAL_PRODUCT: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_freight_value: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_gross_result_literage: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_gross_result_product: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_margin_FILTROS_AR_PRODUCT: FieldRef<"gas_station_setvariables", 'Float'>
    readonly gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT: FieldRef<"gas_station_setvariables", 'DateTime'>
    readonly gas_station_sanado_margin_FILTROS_AR_PRODUCT: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly gas_station_type_margin_FILTROS_AR_PRODUCT: FieldRef<"gas_station_setvariables", 'Boolean'>
    readonly verification_hour_margin_FILTROS_AR_PRODUCT: FieldRef<"gas_station_setvariables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gas_station_setvariables findUnique
   */
  export type gas_station_setvariablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which gas_station_setvariables to fetch.
     */
    where: gas_station_setvariablesWhereUniqueInput
  }

  /**
   * gas_station_setvariables findUniqueOrThrow
   */
  export type gas_station_setvariablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which gas_station_setvariables to fetch.
     */
    where: gas_station_setvariablesWhereUniqueInput
  }

  /**
   * gas_station_setvariables findFirst
   */
  export type gas_station_setvariablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which gas_station_setvariables to fetch.
     */
    where?: gas_station_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_station_setvariables to fetch.
     */
    orderBy?: gas_station_setvariablesOrderByWithRelationInput | gas_station_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gas_station_setvariables.
     */
    cursor?: gas_station_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_station_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_station_setvariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gas_station_setvariables.
     */
    distinct?: Gas_station_setvariablesScalarFieldEnum | Gas_station_setvariablesScalarFieldEnum[]
  }

  /**
   * gas_station_setvariables findFirstOrThrow
   */
  export type gas_station_setvariablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which gas_station_setvariables to fetch.
     */
    where?: gas_station_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_station_setvariables to fetch.
     */
    orderBy?: gas_station_setvariablesOrderByWithRelationInput | gas_station_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gas_station_setvariables.
     */
    cursor?: gas_station_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_station_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_station_setvariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gas_station_setvariables.
     */
    distinct?: Gas_station_setvariablesScalarFieldEnum | Gas_station_setvariablesScalarFieldEnum[]
  }

  /**
   * gas_station_setvariables findMany
   */
  export type gas_station_setvariablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which gas_station_setvariables to fetch.
     */
    where?: gas_station_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gas_station_setvariables to fetch.
     */
    orderBy?: gas_station_setvariablesOrderByWithRelationInput | gas_station_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gas_station_setvariables.
     */
    cursor?: gas_station_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gas_station_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gas_station_setvariables.
     */
    skip?: number
    distinct?: Gas_station_setvariablesScalarFieldEnum | Gas_station_setvariablesScalarFieldEnum[]
  }

  /**
   * gas_station_setvariables create
   */
  export type gas_station_setvariablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * The data needed to create a gas_station_setvariables.
     */
    data?: XOR<gas_station_setvariablesCreateInput, gas_station_setvariablesUncheckedCreateInput>
  }

  /**
   * gas_station_setvariables createMany
   */
  export type gas_station_setvariablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gas_station_setvariables.
     */
    data: gas_station_setvariablesCreateManyInput | gas_station_setvariablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gas_station_setvariables createManyAndReturn
   */
  export type gas_station_setvariablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gas_station_setvariables.
     */
    data: gas_station_setvariablesCreateManyInput | gas_station_setvariablesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * gas_station_setvariables update
   */
  export type gas_station_setvariablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * The data needed to update a gas_station_setvariables.
     */
    data: XOR<gas_station_setvariablesUpdateInput, gas_station_setvariablesUncheckedUpdateInput>
    /**
     * Choose, which gas_station_setvariables to update.
     */
    where: gas_station_setvariablesWhereUniqueInput
  }

  /**
   * gas_station_setvariables updateMany
   */
  export type gas_station_setvariablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gas_station_setvariables.
     */
    data: XOR<gas_station_setvariablesUpdateManyMutationInput, gas_station_setvariablesUncheckedUpdateManyInput>
    /**
     * Filter which gas_station_setvariables to update
     */
    where?: gas_station_setvariablesWhereInput
  }

  /**
   * gas_station_setvariables upsert
   */
  export type gas_station_setvariablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * The filter to search for the gas_station_setvariables to update in case it exists.
     */
    where: gas_station_setvariablesWhereUniqueInput
    /**
     * In case the gas_station_setvariables found by the `where` argument doesn't exist, create a new gas_station_setvariables with this data.
     */
    create: XOR<gas_station_setvariablesCreateInput, gas_station_setvariablesUncheckedCreateInput>
    /**
     * In case the gas_station_setvariables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gas_station_setvariablesUpdateInput, gas_station_setvariablesUncheckedUpdateInput>
  }

  /**
   * gas_station_setvariables delete
   */
  export type gas_station_setvariablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
    /**
     * Filter which gas_station_setvariables to delete.
     */
    where: gas_station_setvariablesWhereUniqueInput
  }

  /**
   * gas_station_setvariables deleteMany
   */
  export type gas_station_setvariablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gas_station_setvariables to delete
     */
    where?: gas_station_setvariablesWhereInput
  }

  /**
   * gas_station_setvariables.ibm_info
   */
  export type gas_station_setvariables$ibm_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
    where?: ibm_infoWhereInput
  }

  /**
   * gas_station_setvariables.users
   */
  export type gas_station_setvariables$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * gas_station_setvariables without action
   */
  export type gas_station_setvariablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gas_station_setvariables
     */
    select?: gas_station_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gas_station_setvariablesInclude<ExtArgs> | null
  }


  /**
   * Model region_setvariables
   */

  export type AggregateRegion_setvariables = {
    _count: Region_setvariablesCountAggregateOutputType | null
    _avg: Region_setvariablesAvgAggregateOutputType | null
    _sum: Region_setvariablesSumAggregateOutputType | null
    _min: Region_setvariablesMinAggregateOutputType | null
    _max: Region_setvariablesMaxAggregateOutputType | null
  }

  export type Region_setvariablesAvgAggregateOutputType = {
    region_marginGC: number | null
    region_station_ETANOL_COMUM_comb: number | null
    region_station_GASOLINA_COMUM_comb: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    region_station_MLT_modal: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    region_station_TMC_modal: number | null
    region_station_TMF_modal: number | null
    region_station_TMP_modal: number | null
    region_station_TMVOL_modal: number | null
    region_margin_DIESEL_GROUP: number | null
    region_margin_GASOLINA_PODIUM: number | null
    region_margin_GASOLINA_PREMIUM: number | null
    region_margin_DIESEL_GROUP_S500: number | null
    region_margin_ETANOL_COMUM: number | null
  }

  export type Region_setvariablesSumAggregateOutputType = {
    region_marginGC: number | null
    region_station_ETANOL_COMUM_comb: number | null
    region_station_GASOLINA_COMUM_comb: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    region_station_MLT_modal: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    region_station_TMC_modal: number | null
    region_station_TMF_modal: number | null
    region_station_TMP_modal: number | null
    region_station_TMVOL_modal: number | null
    region_margin_DIESEL_GROUP: number | null
    region_margin_GASOLINA_PODIUM: number | null
    region_margin_GASOLINA_PREMIUM: number | null
    region_margin_DIESEL_GROUP_S500: number | null
    region_margin_ETANOL_COMUM: number | null
  }

  export type Region_setvariablesMinAggregateOutputType = {
    region_uuid: string | null
    region_marginGC: number | null
    region_type_marginGC: boolean | null
    region_station_created_at: Date | null
    region_station_updated_at: Date | null
    use_uuid: string | null
    regions_uuid: string | null
    verification_msg_sent: boolean | null
    verification_hour_marginGC: Date | null
    region_sanado_hour_marginGC: Date | null
    region_sanado_marginGC: boolean | null
    region_station_ETANOL_COMUM_comb: number | null
    region_station_GASOLINA_COMUM_comb: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    region_station_MLT_modal: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    region_station_TMC_modal: number | null
    region_station_TMF_modal: number | null
    region_station_TMP_modal: number | null
    region_station_TMVOL_modal: number | null
    region_margin_DIESEL_GROUP: number | null
    region_sanado_hour_margin_DIESEL_GROUP: Date | null
    region_sanado_margin_DIESEL_GROUP: boolean | null
    region_type_margin_DIESEL_GROUP: boolean | null
    verification_hour_margin_DIESEL_GROUP: Date | null
    region_margin_GASOLINA_PODIUM: number | null
    region_sanado_hour_GASOLINA_PODIUM: Date | null
    region_sanado_margin_GASOLINA_PODIUM: boolean | null
    region_type_margin_GASOLINA_PODIUM: boolean | null
    verification_hour_margin_GASOLINA_PODIUM: Date | null
    region_margin_GASOLINA_PREMIUM: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
    region_sanado_margin_GASOLINA_PREMIUM: boolean | null
    region_type_margin_GASOLINA_PREMIUM: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM: Date | null
    region_sanado_hour_GASOLINA_PREMIUM: Date | null
    region_margin_DIESEL_GROUP_S500: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
    region_sanado_margin_DIESEL_GROUP_S500: boolean | null
    region_type_margin_DIESEL_GROUP_S500: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500: Date | null
    region_margin_ETANOL_COMUM: number | null
    region_sanado_hour_ETANOL_COMUM: Date | null
    region_sanado_margin_ETANOL_COMUM: boolean | null
    region_type_margin_ETANOL_COMUM: boolean | null
    verification_hour_margin_ETANOL_COMUM: Date | null
  }

  export type Region_setvariablesMaxAggregateOutputType = {
    region_uuid: string | null
    region_marginGC: number | null
    region_type_marginGC: boolean | null
    region_station_created_at: Date | null
    region_station_updated_at: Date | null
    use_uuid: string | null
    regions_uuid: string | null
    verification_msg_sent: boolean | null
    verification_hour_marginGC: Date | null
    region_sanado_hour_marginGC: Date | null
    region_sanado_marginGC: boolean | null
    region_station_ETANOL_COMUM_comb: number | null
    region_station_GASOLINA_COMUM_comb: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    region_station_MLT_modal: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    region_station_TMC_modal: number | null
    region_station_TMF_modal: number | null
    region_station_TMP_modal: number | null
    region_station_TMVOL_modal: number | null
    region_margin_DIESEL_GROUP: number | null
    region_sanado_hour_margin_DIESEL_GROUP: Date | null
    region_sanado_margin_DIESEL_GROUP: boolean | null
    region_type_margin_DIESEL_GROUP: boolean | null
    verification_hour_margin_DIESEL_GROUP: Date | null
    region_margin_GASOLINA_PODIUM: number | null
    region_sanado_hour_GASOLINA_PODIUM: Date | null
    region_sanado_margin_GASOLINA_PODIUM: boolean | null
    region_type_margin_GASOLINA_PODIUM: boolean | null
    verification_hour_margin_GASOLINA_PODIUM: Date | null
    region_margin_GASOLINA_PREMIUM: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
    region_sanado_margin_GASOLINA_PREMIUM: boolean | null
    region_type_margin_GASOLINA_PREMIUM: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM: Date | null
    region_sanado_hour_GASOLINA_PREMIUM: Date | null
    region_margin_DIESEL_GROUP_S500: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
    region_sanado_margin_DIESEL_GROUP_S500: boolean | null
    region_type_margin_DIESEL_GROUP_S500: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500: Date | null
    region_margin_ETANOL_COMUM: number | null
    region_sanado_hour_ETANOL_COMUM: Date | null
    region_sanado_margin_ETANOL_COMUM: boolean | null
    region_type_margin_ETANOL_COMUM: boolean | null
    verification_hour_margin_ETANOL_COMUM: Date | null
  }

  export type Region_setvariablesCountAggregateOutputType = {
    region_uuid: number
    region_marginGC: number
    region_type_marginGC: number
    region_whats_app: number
    region_station_created_at: number
    region_station_updated_at: number
    use_uuid: number
    regions_uuid: number
    verification_msg_sent: number
    verification_hour_marginGC: number
    region_sanado_hour_marginGC: number
    region_sanado_marginGC: number
    region_station_ETANOL_COMUM_comb: number
    region_station_GASOLINA_COMUM_comb: number
    region_station_LUCRO_BRUTO_GALONAGEM_modal: number
    region_station_LUCRO_BRUTO_OPERACIONAL_modal: number
    region_station_LUCRO_BRUTO_PRODUTO_modal: number
    region_station_MLT_modal: number
    region_station_OLEO_DIESEL_B_S10_COMUM_comb: number
    region_station_OLEO_DIESEL_B_S500_COMUM_comb: number
    region_station_TMC_modal: number
    region_station_TMF_modal: number
    region_station_TMP_modal: number
    region_station_TMVOL_modal: number
    region_margin_DIESEL_GROUP: number
    region_sanado_hour_margin_DIESEL_GROUP: number
    region_sanado_margin_DIESEL_GROUP: number
    region_type_margin_DIESEL_GROUP: number
    verification_hour_margin_DIESEL_GROUP: number
    region_margin_GASOLINA_PODIUM: number
    region_sanado_hour_GASOLINA_PODIUM: number
    region_sanado_margin_GASOLINA_PODIUM: number
    region_type_margin_GASOLINA_PODIUM: number
    verification_hour_margin_GASOLINA_PODIUM: number
    region_margin_GASOLINA_PREMIUM: number
    region_sanado_hour_margin_GASOLINA_PREMIUM: number
    region_sanado_margin_GASOLINA_PREMIUM: number
    region_type_margin_GASOLINA_PREMIUM: number
    verification_hour_margin_GASOLINA_PREMIUM: number
    region_sanado_hour_GASOLINA_PREMIUM: number
    region_margin_DIESEL_GROUP_S500: number
    region_sanado_hour_margin_DIESEL_GROUP_S500: number
    region_sanado_margin_DIESEL_GROUP_S500: number
    region_type_margin_DIESEL_GROUP_S500: number
    verification_hour_margin_DIESEL_GROUP_S500: number
    region_margin_ETANOL_COMUM: number
    region_sanado_hour_ETANOL_COMUM: number
    region_sanado_margin_ETANOL_COMUM: number
    region_type_margin_ETANOL_COMUM: number
    verification_hour_margin_ETANOL_COMUM: number
    _all: number
  }


  export type Region_setvariablesAvgAggregateInputType = {
    region_marginGC?: true
    region_station_ETANOL_COMUM_comb?: true
    region_station_GASOLINA_COMUM_comb?: true
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    region_station_LUCRO_BRUTO_PRODUTO_modal?: true
    region_station_MLT_modal?: true
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    region_station_TMC_modal?: true
    region_station_TMF_modal?: true
    region_station_TMP_modal?: true
    region_station_TMVOL_modal?: true
    region_margin_DIESEL_GROUP?: true
    region_margin_GASOLINA_PODIUM?: true
    region_margin_GASOLINA_PREMIUM?: true
    region_margin_DIESEL_GROUP_S500?: true
    region_margin_ETANOL_COMUM?: true
  }

  export type Region_setvariablesSumAggregateInputType = {
    region_marginGC?: true
    region_station_ETANOL_COMUM_comb?: true
    region_station_GASOLINA_COMUM_comb?: true
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    region_station_LUCRO_BRUTO_PRODUTO_modal?: true
    region_station_MLT_modal?: true
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    region_station_TMC_modal?: true
    region_station_TMF_modal?: true
    region_station_TMP_modal?: true
    region_station_TMVOL_modal?: true
    region_margin_DIESEL_GROUP?: true
    region_margin_GASOLINA_PODIUM?: true
    region_margin_GASOLINA_PREMIUM?: true
    region_margin_DIESEL_GROUP_S500?: true
    region_margin_ETANOL_COMUM?: true
  }

  export type Region_setvariablesMinAggregateInputType = {
    region_uuid?: true
    region_marginGC?: true
    region_type_marginGC?: true
    region_station_created_at?: true
    region_station_updated_at?: true
    use_uuid?: true
    regions_uuid?: true
    verification_msg_sent?: true
    verification_hour_marginGC?: true
    region_sanado_hour_marginGC?: true
    region_sanado_marginGC?: true
    region_station_ETANOL_COMUM_comb?: true
    region_station_GASOLINA_COMUM_comb?: true
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    region_station_LUCRO_BRUTO_PRODUTO_modal?: true
    region_station_MLT_modal?: true
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    region_station_TMC_modal?: true
    region_station_TMF_modal?: true
    region_station_TMP_modal?: true
    region_station_TMVOL_modal?: true
    region_margin_DIESEL_GROUP?: true
    region_sanado_hour_margin_DIESEL_GROUP?: true
    region_sanado_margin_DIESEL_GROUP?: true
    region_type_margin_DIESEL_GROUP?: true
    verification_hour_margin_DIESEL_GROUP?: true
    region_margin_GASOLINA_PODIUM?: true
    region_sanado_hour_GASOLINA_PODIUM?: true
    region_sanado_margin_GASOLINA_PODIUM?: true
    region_type_margin_GASOLINA_PODIUM?: true
    verification_hour_margin_GASOLINA_PODIUM?: true
    region_margin_GASOLINA_PREMIUM?: true
    region_sanado_hour_margin_GASOLINA_PREMIUM?: true
    region_sanado_margin_GASOLINA_PREMIUM?: true
    region_type_margin_GASOLINA_PREMIUM?: true
    verification_hour_margin_GASOLINA_PREMIUM?: true
    region_sanado_hour_GASOLINA_PREMIUM?: true
    region_margin_DIESEL_GROUP_S500?: true
    region_sanado_hour_margin_DIESEL_GROUP_S500?: true
    region_sanado_margin_DIESEL_GROUP_S500?: true
    region_type_margin_DIESEL_GROUP_S500?: true
    verification_hour_margin_DIESEL_GROUP_S500?: true
    region_margin_ETANOL_COMUM?: true
    region_sanado_hour_ETANOL_COMUM?: true
    region_sanado_margin_ETANOL_COMUM?: true
    region_type_margin_ETANOL_COMUM?: true
    verification_hour_margin_ETANOL_COMUM?: true
  }

  export type Region_setvariablesMaxAggregateInputType = {
    region_uuid?: true
    region_marginGC?: true
    region_type_marginGC?: true
    region_station_created_at?: true
    region_station_updated_at?: true
    use_uuid?: true
    regions_uuid?: true
    verification_msg_sent?: true
    verification_hour_marginGC?: true
    region_sanado_hour_marginGC?: true
    region_sanado_marginGC?: true
    region_station_ETANOL_COMUM_comb?: true
    region_station_GASOLINA_COMUM_comb?: true
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    region_station_LUCRO_BRUTO_PRODUTO_modal?: true
    region_station_MLT_modal?: true
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    region_station_TMC_modal?: true
    region_station_TMF_modal?: true
    region_station_TMP_modal?: true
    region_station_TMVOL_modal?: true
    region_margin_DIESEL_GROUP?: true
    region_sanado_hour_margin_DIESEL_GROUP?: true
    region_sanado_margin_DIESEL_GROUP?: true
    region_type_margin_DIESEL_GROUP?: true
    verification_hour_margin_DIESEL_GROUP?: true
    region_margin_GASOLINA_PODIUM?: true
    region_sanado_hour_GASOLINA_PODIUM?: true
    region_sanado_margin_GASOLINA_PODIUM?: true
    region_type_margin_GASOLINA_PODIUM?: true
    verification_hour_margin_GASOLINA_PODIUM?: true
    region_margin_GASOLINA_PREMIUM?: true
    region_sanado_hour_margin_GASOLINA_PREMIUM?: true
    region_sanado_margin_GASOLINA_PREMIUM?: true
    region_type_margin_GASOLINA_PREMIUM?: true
    verification_hour_margin_GASOLINA_PREMIUM?: true
    region_sanado_hour_GASOLINA_PREMIUM?: true
    region_margin_DIESEL_GROUP_S500?: true
    region_sanado_hour_margin_DIESEL_GROUP_S500?: true
    region_sanado_margin_DIESEL_GROUP_S500?: true
    region_type_margin_DIESEL_GROUP_S500?: true
    verification_hour_margin_DIESEL_GROUP_S500?: true
    region_margin_ETANOL_COMUM?: true
    region_sanado_hour_ETANOL_COMUM?: true
    region_sanado_margin_ETANOL_COMUM?: true
    region_type_margin_ETANOL_COMUM?: true
    verification_hour_margin_ETANOL_COMUM?: true
  }

  export type Region_setvariablesCountAggregateInputType = {
    region_uuid?: true
    region_marginGC?: true
    region_type_marginGC?: true
    region_whats_app?: true
    region_station_created_at?: true
    region_station_updated_at?: true
    use_uuid?: true
    regions_uuid?: true
    verification_msg_sent?: true
    verification_hour_marginGC?: true
    region_sanado_hour_marginGC?: true
    region_sanado_marginGC?: true
    region_station_ETANOL_COMUM_comb?: true
    region_station_GASOLINA_COMUM_comb?: true
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: true
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: true
    region_station_LUCRO_BRUTO_PRODUTO_modal?: true
    region_station_MLT_modal?: true
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: true
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: true
    region_station_TMC_modal?: true
    region_station_TMF_modal?: true
    region_station_TMP_modal?: true
    region_station_TMVOL_modal?: true
    region_margin_DIESEL_GROUP?: true
    region_sanado_hour_margin_DIESEL_GROUP?: true
    region_sanado_margin_DIESEL_GROUP?: true
    region_type_margin_DIESEL_GROUP?: true
    verification_hour_margin_DIESEL_GROUP?: true
    region_margin_GASOLINA_PODIUM?: true
    region_sanado_hour_GASOLINA_PODIUM?: true
    region_sanado_margin_GASOLINA_PODIUM?: true
    region_type_margin_GASOLINA_PODIUM?: true
    verification_hour_margin_GASOLINA_PODIUM?: true
    region_margin_GASOLINA_PREMIUM?: true
    region_sanado_hour_margin_GASOLINA_PREMIUM?: true
    region_sanado_margin_GASOLINA_PREMIUM?: true
    region_type_margin_GASOLINA_PREMIUM?: true
    verification_hour_margin_GASOLINA_PREMIUM?: true
    region_sanado_hour_GASOLINA_PREMIUM?: true
    region_margin_DIESEL_GROUP_S500?: true
    region_sanado_hour_margin_DIESEL_GROUP_S500?: true
    region_sanado_margin_DIESEL_GROUP_S500?: true
    region_type_margin_DIESEL_GROUP_S500?: true
    verification_hour_margin_DIESEL_GROUP_S500?: true
    region_margin_ETANOL_COMUM?: true
    region_sanado_hour_ETANOL_COMUM?: true
    region_sanado_margin_ETANOL_COMUM?: true
    region_type_margin_ETANOL_COMUM?: true
    verification_hour_margin_ETANOL_COMUM?: true
    _all?: true
  }

  export type Region_setvariablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which region_setvariables to aggregate.
     */
    where?: region_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_setvariables to fetch.
     */
    orderBy?: region_setvariablesOrderByWithRelationInput | region_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: region_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_setvariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned region_setvariables
    **/
    _count?: true | Region_setvariablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Region_setvariablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Region_setvariablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Region_setvariablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Region_setvariablesMaxAggregateInputType
  }

  export type GetRegion_setvariablesAggregateType<T extends Region_setvariablesAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion_setvariables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion_setvariables[P]>
      : GetScalarType<T[P], AggregateRegion_setvariables[P]>
  }




  export type region_setvariablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: region_setvariablesWhereInput
    orderBy?: region_setvariablesOrderByWithAggregationInput | region_setvariablesOrderByWithAggregationInput[]
    by: Region_setvariablesScalarFieldEnum[] | Region_setvariablesScalarFieldEnum
    having?: region_setvariablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Region_setvariablesCountAggregateInputType | true
    _avg?: Region_setvariablesAvgAggregateInputType
    _sum?: Region_setvariablesSumAggregateInputType
    _min?: Region_setvariablesMinAggregateInputType
    _max?: Region_setvariablesMaxAggregateInputType
  }

  export type Region_setvariablesGroupByOutputType = {
    region_uuid: string
    region_marginGC: number | null
    region_type_marginGC: boolean | null
    region_whats_app: string[]
    region_station_created_at: Date
    region_station_updated_at: Date
    use_uuid: string | null
    regions_uuid: string | null
    verification_msg_sent: boolean | null
    verification_hour_marginGC: Date | null
    region_sanado_hour_marginGC: Date | null
    region_sanado_marginGC: boolean | null
    region_station_ETANOL_COMUM_comb: number | null
    region_station_GASOLINA_COMUM_comb: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal: number | null
    region_station_MLT_modal: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
    region_station_TMC_modal: number | null
    region_station_TMF_modal: number | null
    region_station_TMP_modal: number | null
    region_station_TMVOL_modal: number | null
    region_margin_DIESEL_GROUP: number | null
    region_sanado_hour_margin_DIESEL_GROUP: Date | null
    region_sanado_margin_DIESEL_GROUP: boolean | null
    region_type_margin_DIESEL_GROUP: boolean | null
    verification_hour_margin_DIESEL_GROUP: Date | null
    region_margin_GASOLINA_PODIUM: number | null
    region_sanado_hour_GASOLINA_PODIUM: Date | null
    region_sanado_margin_GASOLINA_PODIUM: boolean | null
    region_type_margin_GASOLINA_PODIUM: boolean | null
    verification_hour_margin_GASOLINA_PODIUM: Date | null
    region_margin_GASOLINA_PREMIUM: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
    region_sanado_margin_GASOLINA_PREMIUM: boolean | null
    region_type_margin_GASOLINA_PREMIUM: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM: Date | null
    region_sanado_hour_GASOLINA_PREMIUM: Date | null
    region_margin_DIESEL_GROUP_S500: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
    region_sanado_margin_DIESEL_GROUP_S500: boolean | null
    region_type_margin_DIESEL_GROUP_S500: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500: Date | null
    region_margin_ETANOL_COMUM: number | null
    region_sanado_hour_ETANOL_COMUM: Date | null
    region_sanado_margin_ETANOL_COMUM: boolean | null
    region_type_margin_ETANOL_COMUM: boolean | null
    verification_hour_margin_ETANOL_COMUM: Date | null
    _count: Region_setvariablesCountAggregateOutputType | null
    _avg: Region_setvariablesAvgAggregateOutputType | null
    _sum: Region_setvariablesSumAggregateOutputType | null
    _min: Region_setvariablesMinAggregateOutputType | null
    _max: Region_setvariablesMaxAggregateOutputType | null
  }

  type GetRegion_setvariablesGroupByPayload<T extends region_setvariablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Region_setvariablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Region_setvariablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Region_setvariablesGroupByOutputType[P]>
            : GetScalarType<T[P], Region_setvariablesGroupByOutputType[P]>
        }
      >
    >


  export type region_setvariablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    region_uuid?: boolean
    region_marginGC?: boolean
    region_type_marginGC?: boolean
    region_whats_app?: boolean
    region_station_created_at?: boolean
    region_station_updated_at?: boolean
    use_uuid?: boolean
    regions_uuid?: boolean
    verification_msg_sent?: boolean
    verification_hour_marginGC?: boolean
    region_sanado_hour_marginGC?: boolean
    region_sanado_marginGC?: boolean
    region_station_ETANOL_COMUM_comb?: boolean
    region_station_GASOLINA_COMUM_comb?: boolean
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: boolean
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: boolean
    region_station_LUCRO_BRUTO_PRODUTO_modal?: boolean
    region_station_MLT_modal?: boolean
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
    region_station_TMC_modal?: boolean
    region_station_TMF_modal?: boolean
    region_station_TMP_modal?: boolean
    region_station_TMVOL_modal?: boolean
    region_margin_DIESEL_GROUP?: boolean
    region_sanado_hour_margin_DIESEL_GROUP?: boolean
    region_sanado_margin_DIESEL_GROUP?: boolean
    region_type_margin_DIESEL_GROUP?: boolean
    verification_hour_margin_DIESEL_GROUP?: boolean
    region_margin_GASOLINA_PODIUM?: boolean
    region_sanado_hour_GASOLINA_PODIUM?: boolean
    region_sanado_margin_GASOLINA_PODIUM?: boolean
    region_type_margin_GASOLINA_PODIUM?: boolean
    verification_hour_margin_GASOLINA_PODIUM?: boolean
    region_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_hour_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_margin_GASOLINA_PREMIUM?: boolean
    region_type_margin_GASOLINA_PREMIUM?: boolean
    verification_hour_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_hour_GASOLINA_PREMIUM?: boolean
    region_margin_DIESEL_GROUP_S500?: boolean
    region_sanado_hour_margin_DIESEL_GROUP_S500?: boolean
    region_sanado_margin_DIESEL_GROUP_S500?: boolean
    region_type_margin_DIESEL_GROUP_S500?: boolean
    verification_hour_margin_DIESEL_GROUP_S500?: boolean
    region_margin_ETANOL_COMUM?: boolean
    region_sanado_hour_ETANOL_COMUM?: boolean
    region_sanado_margin_ETANOL_COMUM?: boolean
    region_type_margin_ETANOL_COMUM?: boolean
    verification_hour_margin_ETANOL_COMUM?: boolean
    regions?: boolean | region_setvariables$regionsArgs<ExtArgs>
    users?: boolean | region_setvariables$usersArgs<ExtArgs>
  }, ExtArgs["result"]["region_setvariables"]>

  export type region_setvariablesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    region_uuid?: boolean
    region_marginGC?: boolean
    region_type_marginGC?: boolean
    region_whats_app?: boolean
    region_station_created_at?: boolean
    region_station_updated_at?: boolean
    use_uuid?: boolean
    regions_uuid?: boolean
    verification_msg_sent?: boolean
    verification_hour_marginGC?: boolean
    region_sanado_hour_marginGC?: boolean
    region_sanado_marginGC?: boolean
    region_station_ETANOL_COMUM_comb?: boolean
    region_station_GASOLINA_COMUM_comb?: boolean
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: boolean
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: boolean
    region_station_LUCRO_BRUTO_PRODUTO_modal?: boolean
    region_station_MLT_modal?: boolean
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
    region_station_TMC_modal?: boolean
    region_station_TMF_modal?: boolean
    region_station_TMP_modal?: boolean
    region_station_TMVOL_modal?: boolean
    region_margin_DIESEL_GROUP?: boolean
    region_sanado_hour_margin_DIESEL_GROUP?: boolean
    region_sanado_margin_DIESEL_GROUP?: boolean
    region_type_margin_DIESEL_GROUP?: boolean
    verification_hour_margin_DIESEL_GROUP?: boolean
    region_margin_GASOLINA_PODIUM?: boolean
    region_sanado_hour_GASOLINA_PODIUM?: boolean
    region_sanado_margin_GASOLINA_PODIUM?: boolean
    region_type_margin_GASOLINA_PODIUM?: boolean
    verification_hour_margin_GASOLINA_PODIUM?: boolean
    region_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_hour_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_margin_GASOLINA_PREMIUM?: boolean
    region_type_margin_GASOLINA_PREMIUM?: boolean
    verification_hour_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_hour_GASOLINA_PREMIUM?: boolean
    region_margin_DIESEL_GROUP_S500?: boolean
    region_sanado_hour_margin_DIESEL_GROUP_S500?: boolean
    region_sanado_margin_DIESEL_GROUP_S500?: boolean
    region_type_margin_DIESEL_GROUP_S500?: boolean
    verification_hour_margin_DIESEL_GROUP_S500?: boolean
    region_margin_ETANOL_COMUM?: boolean
    region_sanado_hour_ETANOL_COMUM?: boolean
    region_sanado_margin_ETANOL_COMUM?: boolean
    region_type_margin_ETANOL_COMUM?: boolean
    verification_hour_margin_ETANOL_COMUM?: boolean
    regions?: boolean | region_setvariables$regionsArgs<ExtArgs>
    users?: boolean | region_setvariables$usersArgs<ExtArgs>
  }, ExtArgs["result"]["region_setvariables"]>

  export type region_setvariablesSelectScalar = {
    region_uuid?: boolean
    region_marginGC?: boolean
    region_type_marginGC?: boolean
    region_whats_app?: boolean
    region_station_created_at?: boolean
    region_station_updated_at?: boolean
    use_uuid?: boolean
    regions_uuid?: boolean
    verification_msg_sent?: boolean
    verification_hour_marginGC?: boolean
    region_sanado_hour_marginGC?: boolean
    region_sanado_marginGC?: boolean
    region_station_ETANOL_COMUM_comb?: boolean
    region_station_GASOLINA_COMUM_comb?: boolean
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: boolean
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: boolean
    region_station_LUCRO_BRUTO_PRODUTO_modal?: boolean
    region_station_MLT_modal?: boolean
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: boolean
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: boolean
    region_station_TMC_modal?: boolean
    region_station_TMF_modal?: boolean
    region_station_TMP_modal?: boolean
    region_station_TMVOL_modal?: boolean
    region_margin_DIESEL_GROUP?: boolean
    region_sanado_hour_margin_DIESEL_GROUP?: boolean
    region_sanado_margin_DIESEL_GROUP?: boolean
    region_type_margin_DIESEL_GROUP?: boolean
    verification_hour_margin_DIESEL_GROUP?: boolean
    region_margin_GASOLINA_PODIUM?: boolean
    region_sanado_hour_GASOLINA_PODIUM?: boolean
    region_sanado_margin_GASOLINA_PODIUM?: boolean
    region_type_margin_GASOLINA_PODIUM?: boolean
    verification_hour_margin_GASOLINA_PODIUM?: boolean
    region_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_hour_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_margin_GASOLINA_PREMIUM?: boolean
    region_type_margin_GASOLINA_PREMIUM?: boolean
    verification_hour_margin_GASOLINA_PREMIUM?: boolean
    region_sanado_hour_GASOLINA_PREMIUM?: boolean
    region_margin_DIESEL_GROUP_S500?: boolean
    region_sanado_hour_margin_DIESEL_GROUP_S500?: boolean
    region_sanado_margin_DIESEL_GROUP_S500?: boolean
    region_type_margin_DIESEL_GROUP_S500?: boolean
    verification_hour_margin_DIESEL_GROUP_S500?: boolean
    region_margin_ETANOL_COMUM?: boolean
    region_sanado_hour_ETANOL_COMUM?: boolean
    region_sanado_margin_ETANOL_COMUM?: boolean
    region_type_margin_ETANOL_COMUM?: boolean
    verification_hour_margin_ETANOL_COMUM?: boolean
  }

  export type region_setvariablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | region_setvariables$regionsArgs<ExtArgs>
    users?: boolean | region_setvariables$usersArgs<ExtArgs>
  }
  export type region_setvariablesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | region_setvariables$regionsArgs<ExtArgs>
    users?: boolean | region_setvariables$usersArgs<ExtArgs>
  }

  export type $region_setvariablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "region_setvariables"
    objects: {
      regions: Prisma.$regionsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      region_uuid: string
      region_marginGC: number | null
      region_type_marginGC: boolean | null
      region_whats_app: string[]
      region_station_created_at: Date
      region_station_updated_at: Date
      use_uuid: string | null
      regions_uuid: string | null
      verification_msg_sent: boolean | null
      verification_hour_marginGC: Date | null
      region_sanado_hour_marginGC: Date | null
      region_sanado_marginGC: boolean | null
      region_station_ETANOL_COMUM_comb: number | null
      region_station_GASOLINA_COMUM_comb: number | null
      region_station_LUCRO_BRUTO_GALONAGEM_modal: number | null
      region_station_LUCRO_BRUTO_OPERACIONAL_modal: number | null
      region_station_LUCRO_BRUTO_PRODUTO_modal: number | null
      region_station_MLT_modal: number | null
      region_station_OLEO_DIESEL_B_S10_COMUM_comb: number | null
      region_station_OLEO_DIESEL_B_S500_COMUM_comb: number | null
      region_station_TMC_modal: number | null
      region_station_TMF_modal: number | null
      region_station_TMP_modal: number | null
      region_station_TMVOL_modal: number | null
      region_margin_DIESEL_GROUP: number | null
      region_sanado_hour_margin_DIESEL_GROUP: Date | null
      region_sanado_margin_DIESEL_GROUP: boolean | null
      region_type_margin_DIESEL_GROUP: boolean | null
      verification_hour_margin_DIESEL_GROUP: Date | null
      region_margin_GASOLINA_PODIUM: number | null
      region_sanado_hour_GASOLINA_PODIUM: Date | null
      region_sanado_margin_GASOLINA_PODIUM: boolean | null
      region_type_margin_GASOLINA_PODIUM: boolean | null
      verification_hour_margin_GASOLINA_PODIUM: Date | null
      region_margin_GASOLINA_PREMIUM: number | null
      region_sanado_hour_margin_GASOLINA_PREMIUM: Date | null
      region_sanado_margin_GASOLINA_PREMIUM: boolean | null
      region_type_margin_GASOLINA_PREMIUM: boolean | null
      verification_hour_margin_GASOLINA_PREMIUM: Date | null
      region_sanado_hour_GASOLINA_PREMIUM: Date | null
      region_margin_DIESEL_GROUP_S500: number | null
      region_sanado_hour_margin_DIESEL_GROUP_S500: Date | null
      region_sanado_margin_DIESEL_GROUP_S500: boolean | null
      region_type_margin_DIESEL_GROUP_S500: boolean | null
      verification_hour_margin_DIESEL_GROUP_S500: Date | null
      region_margin_ETANOL_COMUM: number | null
      region_sanado_hour_ETANOL_COMUM: Date | null
      region_sanado_margin_ETANOL_COMUM: boolean | null
      region_type_margin_ETANOL_COMUM: boolean | null
      verification_hour_margin_ETANOL_COMUM: Date | null
    }, ExtArgs["result"]["region_setvariables"]>
    composites: {}
  }

  type region_setvariablesGetPayload<S extends boolean | null | undefined | region_setvariablesDefaultArgs> = $Result.GetResult<Prisma.$region_setvariablesPayload, S>

  type region_setvariablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<region_setvariablesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Region_setvariablesCountAggregateInputType | true
    }

  export interface region_setvariablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['region_setvariables'], meta: { name: 'region_setvariables' } }
    /**
     * Find zero or one Region_setvariables that matches the filter.
     * @param {region_setvariablesFindUniqueArgs} args - Arguments to find a Region_setvariables
     * @example
     * // Get one Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends region_setvariablesFindUniqueArgs>(args: SelectSubset<T, region_setvariablesFindUniqueArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Region_setvariables that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {region_setvariablesFindUniqueOrThrowArgs} args - Arguments to find a Region_setvariables
     * @example
     * // Get one Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends region_setvariablesFindUniqueOrThrowArgs>(args: SelectSubset<T, region_setvariablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Region_setvariables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_setvariablesFindFirstArgs} args - Arguments to find a Region_setvariables
     * @example
     * // Get one Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends region_setvariablesFindFirstArgs>(args?: SelectSubset<T, region_setvariablesFindFirstArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Region_setvariables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_setvariablesFindFirstOrThrowArgs} args - Arguments to find a Region_setvariables
     * @example
     * // Get one Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends region_setvariablesFindFirstOrThrowArgs>(args?: SelectSubset<T, region_setvariablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Region_setvariables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_setvariablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.findMany()
     * 
     * // Get first 10 Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.findMany({ take: 10 })
     * 
     * // Only select the `region_uuid`
     * const region_setvariablesWithRegion_uuidOnly = await prisma.region_setvariables.findMany({ select: { region_uuid: true } })
     * 
     */
    findMany<T extends region_setvariablesFindManyArgs>(args?: SelectSubset<T, region_setvariablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Region_setvariables.
     * @param {region_setvariablesCreateArgs} args - Arguments to create a Region_setvariables.
     * @example
     * // Create one Region_setvariables
     * const Region_setvariables = await prisma.region_setvariables.create({
     *   data: {
     *     // ... data to create a Region_setvariables
     *   }
     * })
     * 
     */
    create<T extends region_setvariablesCreateArgs>(args: SelectSubset<T, region_setvariablesCreateArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Region_setvariables.
     * @param {region_setvariablesCreateManyArgs} args - Arguments to create many Region_setvariables.
     * @example
     * // Create many Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends region_setvariablesCreateManyArgs>(args?: SelectSubset<T, region_setvariablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Region_setvariables and returns the data saved in the database.
     * @param {region_setvariablesCreateManyAndReturnArgs} args - Arguments to create many Region_setvariables.
     * @example
     * // Create many Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Region_setvariables and only return the `region_uuid`
     * const region_setvariablesWithRegion_uuidOnly = await prisma.region_setvariables.createManyAndReturn({ 
     *   select: { region_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends region_setvariablesCreateManyAndReturnArgs>(args?: SelectSubset<T, region_setvariablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Region_setvariables.
     * @param {region_setvariablesDeleteArgs} args - Arguments to delete one Region_setvariables.
     * @example
     * // Delete one Region_setvariables
     * const Region_setvariables = await prisma.region_setvariables.delete({
     *   where: {
     *     // ... filter to delete one Region_setvariables
     *   }
     * })
     * 
     */
    delete<T extends region_setvariablesDeleteArgs>(args: SelectSubset<T, region_setvariablesDeleteArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Region_setvariables.
     * @param {region_setvariablesUpdateArgs} args - Arguments to update one Region_setvariables.
     * @example
     * // Update one Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends region_setvariablesUpdateArgs>(args: SelectSubset<T, region_setvariablesUpdateArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Region_setvariables.
     * @param {region_setvariablesDeleteManyArgs} args - Arguments to filter Region_setvariables to delete.
     * @example
     * // Delete a few Region_setvariables
     * const { count } = await prisma.region_setvariables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends region_setvariablesDeleteManyArgs>(args?: SelectSubset<T, region_setvariablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Region_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_setvariablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends region_setvariablesUpdateManyArgs>(args: SelectSubset<T, region_setvariablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region_setvariables.
     * @param {region_setvariablesUpsertArgs} args - Arguments to update or create a Region_setvariables.
     * @example
     * // Update or create a Region_setvariables
     * const region_setvariables = await prisma.region_setvariables.upsert({
     *   create: {
     *     // ... data to create a Region_setvariables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region_setvariables we want to update
     *   }
     * })
     */
    upsert<T extends region_setvariablesUpsertArgs>(args: SelectSubset<T, region_setvariablesUpsertArgs<ExtArgs>>): Prisma__region_setvariablesClient<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Region_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_setvariablesCountArgs} args - Arguments to filter Region_setvariables to count.
     * @example
     * // Count the number of Region_setvariables
     * const count = await prisma.region_setvariables.count({
     *   where: {
     *     // ... the filter for the Region_setvariables we want to count
     *   }
     * })
    **/
    count<T extends region_setvariablesCountArgs>(
      args?: Subset<T, region_setvariablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Region_setvariablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Region_setvariablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Region_setvariablesAggregateArgs>(args: Subset<T, Region_setvariablesAggregateArgs>): Prisma.PrismaPromise<GetRegion_setvariablesAggregateType<T>>

    /**
     * Group by Region_setvariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_setvariablesGroupByArgs} args - Group by arguments.
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
      T extends region_setvariablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: region_setvariablesGroupByArgs['orderBy'] }
        : { orderBy?: region_setvariablesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, region_setvariablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegion_setvariablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the region_setvariables model
   */
  readonly fields: region_setvariablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for region_setvariables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__region_setvariablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regions<T extends region_setvariables$regionsArgs<ExtArgs> = {}>(args?: Subset<T, region_setvariables$regionsArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    users<T extends region_setvariables$usersArgs<ExtArgs> = {}>(args?: Subset<T, region_setvariables$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the region_setvariables model
   */ 
  interface region_setvariablesFieldRefs {
    readonly region_uuid: FieldRef<"region_setvariables", 'String'>
    readonly region_marginGC: FieldRef<"region_setvariables", 'Float'>
    readonly region_type_marginGC: FieldRef<"region_setvariables", 'Boolean'>
    readonly region_whats_app: FieldRef<"region_setvariables", 'String[]'>
    readonly region_station_created_at: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_station_updated_at: FieldRef<"region_setvariables", 'DateTime'>
    readonly use_uuid: FieldRef<"region_setvariables", 'String'>
    readonly regions_uuid: FieldRef<"region_setvariables", 'String'>
    readonly verification_msg_sent: FieldRef<"region_setvariables", 'Boolean'>
    readonly verification_hour_marginGC: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_hour_marginGC: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_marginGC: FieldRef<"region_setvariables", 'Boolean'>
    readonly region_station_ETANOL_COMUM_comb: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_GASOLINA_COMUM_comb: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_LUCRO_BRUTO_GALONAGEM_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_LUCRO_BRUTO_OPERACIONAL_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_LUCRO_BRUTO_PRODUTO_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_MLT_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_OLEO_DIESEL_B_S10_COMUM_comb: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_OLEO_DIESEL_B_S500_COMUM_comb: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_TMC_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_TMF_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_TMP_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_station_TMVOL_modal: FieldRef<"region_setvariables", 'Float'>
    readonly region_margin_DIESEL_GROUP: FieldRef<"region_setvariables", 'Float'>
    readonly region_sanado_hour_margin_DIESEL_GROUP: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_margin_DIESEL_GROUP: FieldRef<"region_setvariables", 'Boolean'>
    readonly region_type_margin_DIESEL_GROUP: FieldRef<"region_setvariables", 'Boolean'>
    readonly verification_hour_margin_DIESEL_GROUP: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_margin_GASOLINA_PODIUM: FieldRef<"region_setvariables", 'Float'>
    readonly region_sanado_hour_GASOLINA_PODIUM: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_margin_GASOLINA_PODIUM: FieldRef<"region_setvariables", 'Boolean'>
    readonly region_type_margin_GASOLINA_PODIUM: FieldRef<"region_setvariables", 'Boolean'>
    readonly verification_hour_margin_GASOLINA_PODIUM: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_margin_GASOLINA_PREMIUM: FieldRef<"region_setvariables", 'Float'>
    readonly region_sanado_hour_margin_GASOLINA_PREMIUM: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_margin_GASOLINA_PREMIUM: FieldRef<"region_setvariables", 'Boolean'>
    readonly region_type_margin_GASOLINA_PREMIUM: FieldRef<"region_setvariables", 'Boolean'>
    readonly verification_hour_margin_GASOLINA_PREMIUM: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_hour_GASOLINA_PREMIUM: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_margin_DIESEL_GROUP_S500: FieldRef<"region_setvariables", 'Float'>
    readonly region_sanado_hour_margin_DIESEL_GROUP_S500: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_margin_DIESEL_GROUP_S500: FieldRef<"region_setvariables", 'Boolean'>
    readonly region_type_margin_DIESEL_GROUP_S500: FieldRef<"region_setvariables", 'Boolean'>
    readonly verification_hour_margin_DIESEL_GROUP_S500: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_margin_ETANOL_COMUM: FieldRef<"region_setvariables", 'Float'>
    readonly region_sanado_hour_ETANOL_COMUM: FieldRef<"region_setvariables", 'DateTime'>
    readonly region_sanado_margin_ETANOL_COMUM: FieldRef<"region_setvariables", 'Boolean'>
    readonly region_type_margin_ETANOL_COMUM: FieldRef<"region_setvariables", 'Boolean'>
    readonly verification_hour_margin_ETANOL_COMUM: FieldRef<"region_setvariables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * region_setvariables findUnique
   */
  export type region_setvariablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which region_setvariables to fetch.
     */
    where: region_setvariablesWhereUniqueInput
  }

  /**
   * region_setvariables findUniqueOrThrow
   */
  export type region_setvariablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which region_setvariables to fetch.
     */
    where: region_setvariablesWhereUniqueInput
  }

  /**
   * region_setvariables findFirst
   */
  export type region_setvariablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which region_setvariables to fetch.
     */
    where?: region_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_setvariables to fetch.
     */
    orderBy?: region_setvariablesOrderByWithRelationInput | region_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for region_setvariables.
     */
    cursor?: region_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_setvariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of region_setvariables.
     */
    distinct?: Region_setvariablesScalarFieldEnum | Region_setvariablesScalarFieldEnum[]
  }

  /**
   * region_setvariables findFirstOrThrow
   */
  export type region_setvariablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which region_setvariables to fetch.
     */
    where?: region_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_setvariables to fetch.
     */
    orderBy?: region_setvariablesOrderByWithRelationInput | region_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for region_setvariables.
     */
    cursor?: region_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_setvariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of region_setvariables.
     */
    distinct?: Region_setvariablesScalarFieldEnum | Region_setvariablesScalarFieldEnum[]
  }

  /**
   * region_setvariables findMany
   */
  export type region_setvariablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * Filter, which region_setvariables to fetch.
     */
    where?: region_setvariablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_setvariables to fetch.
     */
    orderBy?: region_setvariablesOrderByWithRelationInput | region_setvariablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing region_setvariables.
     */
    cursor?: region_setvariablesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_setvariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_setvariables.
     */
    skip?: number
    distinct?: Region_setvariablesScalarFieldEnum | Region_setvariablesScalarFieldEnum[]
  }

  /**
   * region_setvariables create
   */
  export type region_setvariablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * The data needed to create a region_setvariables.
     */
    data?: XOR<region_setvariablesCreateInput, region_setvariablesUncheckedCreateInput>
  }

  /**
   * region_setvariables createMany
   */
  export type region_setvariablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many region_setvariables.
     */
    data: region_setvariablesCreateManyInput | region_setvariablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * region_setvariables createManyAndReturn
   */
  export type region_setvariablesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many region_setvariables.
     */
    data: region_setvariablesCreateManyInput | region_setvariablesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * region_setvariables update
   */
  export type region_setvariablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * The data needed to update a region_setvariables.
     */
    data: XOR<region_setvariablesUpdateInput, region_setvariablesUncheckedUpdateInput>
    /**
     * Choose, which region_setvariables to update.
     */
    where: region_setvariablesWhereUniqueInput
  }

  /**
   * region_setvariables updateMany
   */
  export type region_setvariablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update region_setvariables.
     */
    data: XOR<region_setvariablesUpdateManyMutationInput, region_setvariablesUncheckedUpdateManyInput>
    /**
     * Filter which region_setvariables to update
     */
    where?: region_setvariablesWhereInput
  }

  /**
   * region_setvariables upsert
   */
  export type region_setvariablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * The filter to search for the region_setvariables to update in case it exists.
     */
    where: region_setvariablesWhereUniqueInput
    /**
     * In case the region_setvariables found by the `where` argument doesn't exist, create a new region_setvariables with this data.
     */
    create: XOR<region_setvariablesCreateInput, region_setvariablesUncheckedCreateInput>
    /**
     * In case the region_setvariables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<region_setvariablesUpdateInput, region_setvariablesUncheckedUpdateInput>
  }

  /**
   * region_setvariables delete
   */
  export type region_setvariablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    /**
     * Filter which region_setvariables to delete.
     */
    where: region_setvariablesWhereUniqueInput
  }

  /**
   * region_setvariables deleteMany
   */
  export type region_setvariablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which region_setvariables to delete
     */
    where?: region_setvariablesWhereInput
  }

  /**
   * region_setvariables.regions
   */
  export type region_setvariables$regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    where?: regionsWhereInput
  }

  /**
   * region_setvariables.users
   */
  export type region_setvariables$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * region_setvariables without action
   */
  export type region_setvariablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
  }


  /**
   * Model regions
   */

  export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  export type RegionsAvgAggregateOutputType = {
    regions_margin_GC: number | null
    regions_margin_GASOLINA_PODIUM: number | null
    regions_margin_GASOLINA_PREMIUM: number | null
    regions_margin_DIESEL_GROUP: number | null
    regions_margin_DIESEL_GROUP_S500: number | null
    regions_margin_ETANOL_COMUM: number | null
  }

  export type RegionsSumAggregateOutputType = {
    regions_margin_GC: number[]
    regions_margin_GASOLINA_PODIUM: number[]
    regions_margin_GASOLINA_PREMIUM: number[]
    regions_margin_DIESEL_GROUP: number[]
    regions_margin_DIESEL_GROUP_S500: number[]
    regions_margin_ETANOL_COMUM: number[]
  }

  export type RegionsMinAggregateOutputType = {
    regions_uuid: string | null
    regions_name: string | null
    regions_types: string | null
    region_created_at: Date | null
    region_updated_at: Date | null
  }

  export type RegionsMaxAggregateOutputType = {
    regions_uuid: string | null
    regions_name: string | null
    regions_types: string | null
    region_created_at: Date | null
    region_updated_at: Date | null
  }

  export type RegionsCountAggregateOutputType = {
    regions_uuid: number
    regions_name: number
    regions_types: number
    region_created_at: number
    region_updated_at: number
    regions_margin_GC: number
    regions_margin_GASOLINA_PODIUM: number
    regions_margin_GASOLINA_PREMIUM: number
    regions_margin_DIESEL_GROUP: number
    regions_margin_DIESEL_GROUP_S500: number
    regions_margin_ETANOL_COMUM: number
    _all: number
  }


  export type RegionsAvgAggregateInputType = {
    regions_margin_GC?: true
    regions_margin_GASOLINA_PODIUM?: true
    regions_margin_GASOLINA_PREMIUM?: true
    regions_margin_DIESEL_GROUP?: true
    regions_margin_DIESEL_GROUP_S500?: true
    regions_margin_ETANOL_COMUM?: true
  }

  export type RegionsSumAggregateInputType = {
    regions_margin_GC?: true
    regions_margin_GASOLINA_PODIUM?: true
    regions_margin_GASOLINA_PREMIUM?: true
    regions_margin_DIESEL_GROUP?: true
    regions_margin_DIESEL_GROUP_S500?: true
    regions_margin_ETANOL_COMUM?: true
  }

  export type RegionsMinAggregateInputType = {
    regions_uuid?: true
    regions_name?: true
    regions_types?: true
    region_created_at?: true
    region_updated_at?: true
  }

  export type RegionsMaxAggregateInputType = {
    regions_uuid?: true
    regions_name?: true
    regions_types?: true
    region_created_at?: true
    region_updated_at?: true
  }

  export type RegionsCountAggregateInputType = {
    regions_uuid?: true
    regions_name?: true
    regions_types?: true
    region_created_at?: true
    region_updated_at?: true
    regions_margin_GC?: true
    regions_margin_GASOLINA_PODIUM?: true
    regions_margin_GASOLINA_PREMIUM?: true
    regions_margin_DIESEL_GROUP?: true
    regions_margin_DIESEL_GROUP_S500?: true
    regions_margin_ETANOL_COMUM?: true
    _all?: true
  }

  export type RegionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regions to aggregate.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regions
    **/
    _count?: true | RegionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType
  }

  export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegions[P]>
      : GetScalarType<T[P], AggregateRegions[P]>
  }




  export type regionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regionsWhereInput
    orderBy?: regionsOrderByWithAggregationInput | regionsOrderByWithAggregationInput[]
    by: RegionsScalarFieldEnum[] | RegionsScalarFieldEnum
    having?: regionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionsCountAggregateInputType | true
    _avg?: RegionsAvgAggregateInputType
    _sum?: RegionsSumAggregateInputType
    _min?: RegionsMinAggregateInputType
    _max?: RegionsMaxAggregateInputType
  }

  export type RegionsGroupByOutputType = {
    regions_uuid: string
    regions_name: string | null
    regions_types: string | null
    region_created_at: Date
    region_updated_at: Date
    regions_margin_GC: number[]
    regions_margin_GASOLINA_PODIUM: number[]
    regions_margin_GASOLINA_PREMIUM: number[]
    regions_margin_DIESEL_GROUP: number[]
    regions_margin_DIESEL_GROUP_S500: number[]
    regions_margin_ETANOL_COMUM: number[]
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  type GetRegionsGroupByPayload<T extends regionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionsGroupByOutputType[P]>
            : GetScalarType<T[P], RegionsGroupByOutputType[P]>
        }
      >
    >


  export type regionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    regions_uuid?: boolean
    regions_name?: boolean
    regions_types?: boolean
    region_created_at?: boolean
    region_updated_at?: boolean
    regions_margin_GC?: boolean
    regions_margin_GASOLINA_PODIUM?: boolean
    regions_margin_GASOLINA_PREMIUM?: boolean
    regions_margin_DIESEL_GROUP?: boolean
    regions_margin_DIESEL_GROUP_S500?: boolean
    regions_margin_ETANOL_COMUM?: boolean
    region_setvariables?: boolean | regions$region_setvariablesArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    regions_uuid?: boolean
    regions_name?: boolean
    regions_types?: boolean
    region_created_at?: boolean
    region_updated_at?: boolean
    regions_margin_GC?: boolean
    regions_margin_GASOLINA_PODIUM?: boolean
    regions_margin_GASOLINA_PREMIUM?: boolean
    regions_margin_DIESEL_GROUP?: boolean
    regions_margin_DIESEL_GROUP_S500?: boolean
    regions_margin_ETANOL_COMUM?: boolean
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectScalar = {
    regions_uuid?: boolean
    regions_name?: boolean
    regions_types?: boolean
    region_created_at?: boolean
    region_updated_at?: boolean
    regions_margin_GC?: boolean
    regions_margin_GASOLINA_PODIUM?: boolean
    regions_margin_GASOLINA_PREMIUM?: boolean
    regions_margin_DIESEL_GROUP?: boolean
    regions_margin_DIESEL_GROUP_S500?: boolean
    regions_margin_ETANOL_COMUM?: boolean
  }

  export type regionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region_setvariables?: boolean | regions$region_setvariablesArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type regionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $regionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "regions"
    objects: {
      region_setvariables: Prisma.$region_setvariablesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      regions_uuid: string
      regions_name: string | null
      regions_types: string | null
      region_created_at: Date
      region_updated_at: Date
      regions_margin_GC: number[]
      regions_margin_GASOLINA_PODIUM: number[]
      regions_margin_GASOLINA_PREMIUM: number[]
      regions_margin_DIESEL_GROUP: number[]
      regions_margin_DIESEL_GROUP_S500: number[]
      regions_margin_ETANOL_COMUM: number[]
    }, ExtArgs["result"]["regions"]>
    composites: {}
  }

  type regionsGetPayload<S extends boolean | null | undefined | regionsDefaultArgs> = $Result.GetResult<Prisma.$regionsPayload, S>

  type regionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<regionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegionsCountAggregateInputType | true
    }

  export interface regionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['regions'], meta: { name: 'regions' } }
    /**
     * Find zero or one Regions that matches the filter.
     * @param {regionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends regionsFindUniqueArgs>(args: SelectSubset<T, regionsFindUniqueArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Regions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {regionsFindUniqueOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends regionsFindUniqueOrThrowArgs>(args: SelectSubset<T, regionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends regionsFindFirstArgs>(args?: SelectSubset<T, regionsFindFirstArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindFirstOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends regionsFindFirstOrThrowArgs>(args?: SelectSubset<T, regionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     * 
     * // Only select the `regions_uuid`
     * const regionsWithRegions_uuidOnly = await prisma.regions.findMany({ select: { regions_uuid: true } })
     * 
     */
    findMany<T extends regionsFindManyArgs>(args?: SelectSubset<T, regionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Regions.
     * @param {regionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     * 
     */
    create<T extends regionsCreateArgs>(args: SelectSubset<T, regionsCreateArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Regions.
     * @param {regionsCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends regionsCreateManyArgs>(args?: SelectSubset<T, regionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {regionsCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `regions_uuid`
     * const regionsWithRegions_uuidOnly = await prisma.regions.createManyAndReturn({ 
     *   select: { regions_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends regionsCreateManyAndReturnArgs>(args?: SelectSubset<T, regionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Regions.
     * @param {regionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     * 
     */
    delete<T extends regionsDeleteArgs>(args: SelectSubset<T, regionsDeleteArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Regions.
     * @param {regionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends regionsUpdateArgs>(args: SelectSubset<T, regionsUpdateArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Regions.
     * @param {regionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends regionsDeleteManyArgs>(args?: SelectSubset<T, regionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends regionsUpdateManyArgs>(args: SelectSubset<T, regionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regions.
     * @param {regionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
     */
    upsert<T extends regionsUpsertArgs>(args: SelectSubset<T, regionsUpsertArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends regionsCountArgs>(
      args?: Subset<T, regionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionsAggregateArgs>(args: Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>

    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsGroupByArgs} args - Group by arguments.
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
      T extends regionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: regionsGroupByArgs['orderBy'] }
        : { orderBy?: regionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, regionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the regions model
   */
  readonly fields: regionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__regionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region_setvariables<T extends regions$region_setvariablesArgs<ExtArgs> = {}>(args?: Subset<T, regions$region_setvariablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$region_setvariablesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the regions model
   */ 
  interface regionsFieldRefs {
    readonly regions_uuid: FieldRef<"regions", 'String'>
    readonly regions_name: FieldRef<"regions", 'String'>
    readonly regions_types: FieldRef<"regions", 'String'>
    readonly region_created_at: FieldRef<"regions", 'DateTime'>
    readonly region_updated_at: FieldRef<"regions", 'DateTime'>
    readonly regions_margin_GC: FieldRef<"regions", 'Float[]'>
    readonly regions_margin_GASOLINA_PODIUM: FieldRef<"regions", 'Float[]'>
    readonly regions_margin_GASOLINA_PREMIUM: FieldRef<"regions", 'Float[]'>
    readonly regions_margin_DIESEL_GROUP: FieldRef<"regions", 'Float[]'>
    readonly regions_margin_DIESEL_GROUP_S500: FieldRef<"regions", 'Float[]'>
    readonly regions_margin_ETANOL_COMUM: FieldRef<"regions", 'Float[]'>
  }
    

  // Custom InputTypes
  /**
   * regions findUnique
   */
  export type regionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions findUniqueOrThrow
   */
  export type regionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions findFirst
   */
  export type regionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions findFirstOrThrow
   */
  export type regionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions findMany
   */
  export type regionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions create
   */
  export type regionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The data needed to create a regions.
     */
    data?: XOR<regionsCreateInput, regionsUncheckedCreateInput>
  }

  /**
   * regions createMany
   */
  export type regionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many regions.
     */
    data: regionsCreateManyInput | regionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regions createManyAndReturn
   */
  export type regionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many regions.
     */
    data: regionsCreateManyInput | regionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regions update
   */
  export type regionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The data needed to update a regions.
     */
    data: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
    /**
     * Choose, which regions to update.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions updateMany
   */
  export type regionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update regions.
     */
    data: XOR<regionsUpdateManyMutationInput, regionsUncheckedUpdateManyInput>
    /**
     * Filter which regions to update
     */
    where?: regionsWhereInput
  }

  /**
   * regions upsert
   */
  export type regionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The filter to search for the regions to update in case it exists.
     */
    where: regionsWhereUniqueInput
    /**
     * In case the regions found by the `where` argument doesn't exist, create a new regions with this data.
     */
    create: XOR<regionsCreateInput, regionsUncheckedCreateInput>
    /**
     * In case the regions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
  }

  /**
   * regions delete
   */
  export type regionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter which regions to delete.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions deleteMany
   */
  export type regionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regions to delete
     */
    where?: regionsWhereInput
  }

  /**
   * regions.region_setvariables
   */
  export type regions$region_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_setvariables
     */
    select?: region_setvariablesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_setvariablesInclude<ExtArgs> | null
    where?: region_setvariablesWhereInput
    orderBy?: region_setvariablesOrderByWithRelationInput | region_setvariablesOrderByWithRelationInput[]
    cursor?: region_setvariablesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Region_setvariablesScalarFieldEnum | Region_setvariablesScalarFieldEnum[]
  }

  /**
   * regions without action
   */
  export type regionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
  }


  /**
   * Model big_numbers_values
   */

  export type AggregateBig_numbers_values = {
    _count: Big_numbers_valuesCountAggregateOutputType | null
    _avg: Big_numbers_valuesAvgAggregateOutputType | null
    _sum: Big_numbers_valuesSumAggregateOutputType | null
    _min: Big_numbers_valuesMinAggregateOutputType | null
    _max: Big_numbers_valuesMaxAggregateOutputType | null
  }

  export type Big_numbers_valuesAvgAggregateOutputType = {
    bignumbers_sumliterage: number | null
    bignumbers_invoicing: number | null
    bignumbers_Supplies: number | null
    bignumbers_fuelSales: number | null
    bignumbers_fuelProfit: number | null
    bignumbers_productSales: number | null
    bignumbers_productProfit: number | null
    bignumbers_dailyProductProfit: number | null
    bignumbers_dailyLiterageProfit: number | null
  }

  export type Big_numbers_valuesSumAggregateOutputType = {
    bignumbers_sumliterage: number | null
    bignumbers_invoicing: number | null
    bignumbers_Supplies: number | null
    bignumbers_fuelSales: number | null
    bignumbers_fuelProfit: number | null
    bignumbers_productSales: number | null
    bignumbers_productProfit: number | null
    bignumbers_dailyProductProfit: number | null
    bignumbers_dailyLiterageProfit: number | null
  }

  export type Big_numbers_valuesMinAggregateOutputType = {
    bignumbers_uuid: string | null
    bignumbers_sumliterage: number | null
    bignumbers_invoicing: number | null
    bignumbers_Supplies: number | null
    bignumbers_fuelSales: number | null
    bignumbers_fuelProfit: number | null
    bignumbers_productSales: number | null
    bignumbers_productProfit: number | null
    bignumbers_dailyProductProfit: number | null
    bignumbers_dailyLiterageProfit: number | null
  }

  export type Big_numbers_valuesMaxAggregateOutputType = {
    bignumbers_uuid: string | null
    bignumbers_sumliterage: number | null
    bignumbers_invoicing: number | null
    bignumbers_Supplies: number | null
    bignumbers_fuelSales: number | null
    bignumbers_fuelProfit: number | null
    bignumbers_productSales: number | null
    bignumbers_productProfit: number | null
    bignumbers_dailyProductProfit: number | null
    bignumbers_dailyLiterageProfit: number | null
  }

  export type Big_numbers_valuesCountAggregateOutputType = {
    bignumbers_uuid: number
    bignumbers_sumliterage: number
    bignumbers_invoicing: number
    bignumbers_Supplies: number
    bignumbers_fuelSales: number
    bignumbers_fuelProfit: number
    bignumbers_productSales: number
    bignumbers_productProfit: number
    bignumbers_dailyProductProfit: number
    bignumbers_dailyLiterageProfit: number
    _all: number
  }


  export type Big_numbers_valuesAvgAggregateInputType = {
    bignumbers_sumliterage?: true
    bignumbers_invoicing?: true
    bignumbers_Supplies?: true
    bignumbers_fuelSales?: true
    bignumbers_fuelProfit?: true
    bignumbers_productSales?: true
    bignumbers_productProfit?: true
    bignumbers_dailyProductProfit?: true
    bignumbers_dailyLiterageProfit?: true
  }

  export type Big_numbers_valuesSumAggregateInputType = {
    bignumbers_sumliterage?: true
    bignumbers_invoicing?: true
    bignumbers_Supplies?: true
    bignumbers_fuelSales?: true
    bignumbers_fuelProfit?: true
    bignumbers_productSales?: true
    bignumbers_productProfit?: true
    bignumbers_dailyProductProfit?: true
    bignumbers_dailyLiterageProfit?: true
  }

  export type Big_numbers_valuesMinAggregateInputType = {
    bignumbers_uuid?: true
    bignumbers_sumliterage?: true
    bignumbers_invoicing?: true
    bignumbers_Supplies?: true
    bignumbers_fuelSales?: true
    bignumbers_fuelProfit?: true
    bignumbers_productSales?: true
    bignumbers_productProfit?: true
    bignumbers_dailyProductProfit?: true
    bignumbers_dailyLiterageProfit?: true
  }

  export type Big_numbers_valuesMaxAggregateInputType = {
    bignumbers_uuid?: true
    bignumbers_sumliterage?: true
    bignumbers_invoicing?: true
    bignumbers_Supplies?: true
    bignumbers_fuelSales?: true
    bignumbers_fuelProfit?: true
    bignumbers_productSales?: true
    bignumbers_productProfit?: true
    bignumbers_dailyProductProfit?: true
    bignumbers_dailyLiterageProfit?: true
  }

  export type Big_numbers_valuesCountAggregateInputType = {
    bignumbers_uuid?: true
    bignumbers_sumliterage?: true
    bignumbers_invoicing?: true
    bignumbers_Supplies?: true
    bignumbers_fuelSales?: true
    bignumbers_fuelProfit?: true
    bignumbers_productSales?: true
    bignumbers_productProfit?: true
    bignumbers_dailyProductProfit?: true
    bignumbers_dailyLiterageProfit?: true
    _all?: true
  }

  export type Big_numbers_valuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which big_numbers_values to aggregate.
     */
    where?: big_numbers_valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of big_numbers_values to fetch.
     */
    orderBy?: big_numbers_valuesOrderByWithRelationInput | big_numbers_valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: big_numbers_valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` big_numbers_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` big_numbers_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned big_numbers_values
    **/
    _count?: true | Big_numbers_valuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Big_numbers_valuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Big_numbers_valuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Big_numbers_valuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Big_numbers_valuesMaxAggregateInputType
  }

  export type GetBig_numbers_valuesAggregateType<T extends Big_numbers_valuesAggregateArgs> = {
        [P in keyof T & keyof AggregateBig_numbers_values]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBig_numbers_values[P]>
      : GetScalarType<T[P], AggregateBig_numbers_values[P]>
  }




  export type big_numbers_valuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: big_numbers_valuesWhereInput
    orderBy?: big_numbers_valuesOrderByWithAggregationInput | big_numbers_valuesOrderByWithAggregationInput[]
    by: Big_numbers_valuesScalarFieldEnum[] | Big_numbers_valuesScalarFieldEnum
    having?: big_numbers_valuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Big_numbers_valuesCountAggregateInputType | true
    _avg?: Big_numbers_valuesAvgAggregateInputType
    _sum?: Big_numbers_valuesSumAggregateInputType
    _min?: Big_numbers_valuesMinAggregateInputType
    _max?: Big_numbers_valuesMaxAggregateInputType
  }

  export type Big_numbers_valuesGroupByOutputType = {
    bignumbers_uuid: string
    bignumbers_sumliterage: number | null
    bignumbers_invoicing: number | null
    bignumbers_Supplies: number | null
    bignumbers_fuelSales: number | null
    bignumbers_fuelProfit: number | null
    bignumbers_productSales: number | null
    bignumbers_productProfit: number | null
    bignumbers_dailyProductProfit: number | null
    bignumbers_dailyLiterageProfit: number | null
    _count: Big_numbers_valuesCountAggregateOutputType | null
    _avg: Big_numbers_valuesAvgAggregateOutputType | null
    _sum: Big_numbers_valuesSumAggregateOutputType | null
    _min: Big_numbers_valuesMinAggregateOutputType | null
    _max: Big_numbers_valuesMaxAggregateOutputType | null
  }

  type GetBig_numbers_valuesGroupByPayload<T extends big_numbers_valuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Big_numbers_valuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Big_numbers_valuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Big_numbers_valuesGroupByOutputType[P]>
            : GetScalarType<T[P], Big_numbers_valuesGroupByOutputType[P]>
        }
      >
    >


  export type big_numbers_valuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bignumbers_uuid?: boolean
    bignumbers_sumliterage?: boolean
    bignumbers_invoicing?: boolean
    bignumbers_Supplies?: boolean
    bignumbers_fuelSales?: boolean
    bignumbers_fuelProfit?: boolean
    bignumbers_productSales?: boolean
    bignumbers_productProfit?: boolean
    bignumbers_dailyProductProfit?: boolean
    bignumbers_dailyLiterageProfit?: boolean
  }, ExtArgs["result"]["big_numbers_values"]>

  export type big_numbers_valuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bignumbers_uuid?: boolean
    bignumbers_sumliterage?: boolean
    bignumbers_invoicing?: boolean
    bignumbers_Supplies?: boolean
    bignumbers_fuelSales?: boolean
    bignumbers_fuelProfit?: boolean
    bignumbers_productSales?: boolean
    bignumbers_productProfit?: boolean
    bignumbers_dailyProductProfit?: boolean
    bignumbers_dailyLiterageProfit?: boolean
  }, ExtArgs["result"]["big_numbers_values"]>

  export type big_numbers_valuesSelectScalar = {
    bignumbers_uuid?: boolean
    bignumbers_sumliterage?: boolean
    bignumbers_invoicing?: boolean
    bignumbers_Supplies?: boolean
    bignumbers_fuelSales?: boolean
    bignumbers_fuelProfit?: boolean
    bignumbers_productSales?: boolean
    bignumbers_productProfit?: boolean
    bignumbers_dailyProductProfit?: boolean
    bignumbers_dailyLiterageProfit?: boolean
  }


  export type $big_numbers_valuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "big_numbers_values"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      bignumbers_uuid: string
      bignumbers_sumliterage: number | null
      bignumbers_invoicing: number | null
      bignumbers_Supplies: number | null
      bignumbers_fuelSales: number | null
      bignumbers_fuelProfit: number | null
      bignumbers_productSales: number | null
      bignumbers_productProfit: number | null
      bignumbers_dailyProductProfit: number | null
      bignumbers_dailyLiterageProfit: number | null
    }, ExtArgs["result"]["big_numbers_values"]>
    composites: {}
  }

  type big_numbers_valuesGetPayload<S extends boolean | null | undefined | big_numbers_valuesDefaultArgs> = $Result.GetResult<Prisma.$big_numbers_valuesPayload, S>

  type big_numbers_valuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<big_numbers_valuesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Big_numbers_valuesCountAggregateInputType | true
    }

  export interface big_numbers_valuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['big_numbers_values'], meta: { name: 'big_numbers_values' } }
    /**
     * Find zero or one Big_numbers_values that matches the filter.
     * @param {big_numbers_valuesFindUniqueArgs} args - Arguments to find a Big_numbers_values
     * @example
     * // Get one Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends big_numbers_valuesFindUniqueArgs>(args: SelectSubset<T, big_numbers_valuesFindUniqueArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Big_numbers_values that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {big_numbers_valuesFindUniqueOrThrowArgs} args - Arguments to find a Big_numbers_values
     * @example
     * // Get one Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends big_numbers_valuesFindUniqueOrThrowArgs>(args: SelectSubset<T, big_numbers_valuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Big_numbers_values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {big_numbers_valuesFindFirstArgs} args - Arguments to find a Big_numbers_values
     * @example
     * // Get one Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends big_numbers_valuesFindFirstArgs>(args?: SelectSubset<T, big_numbers_valuesFindFirstArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Big_numbers_values that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {big_numbers_valuesFindFirstOrThrowArgs} args - Arguments to find a Big_numbers_values
     * @example
     * // Get one Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends big_numbers_valuesFindFirstOrThrowArgs>(args?: SelectSubset<T, big_numbers_valuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Big_numbers_values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {big_numbers_valuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.findMany()
     * 
     * // Get first 10 Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.findMany({ take: 10 })
     * 
     * // Only select the `bignumbers_uuid`
     * const big_numbers_valuesWithBignumbers_uuidOnly = await prisma.big_numbers_values.findMany({ select: { bignumbers_uuid: true } })
     * 
     */
    findMany<T extends big_numbers_valuesFindManyArgs>(args?: SelectSubset<T, big_numbers_valuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Big_numbers_values.
     * @param {big_numbers_valuesCreateArgs} args - Arguments to create a Big_numbers_values.
     * @example
     * // Create one Big_numbers_values
     * const Big_numbers_values = await prisma.big_numbers_values.create({
     *   data: {
     *     // ... data to create a Big_numbers_values
     *   }
     * })
     * 
     */
    create<T extends big_numbers_valuesCreateArgs>(args: SelectSubset<T, big_numbers_valuesCreateArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Big_numbers_values.
     * @param {big_numbers_valuesCreateManyArgs} args - Arguments to create many Big_numbers_values.
     * @example
     * // Create many Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends big_numbers_valuesCreateManyArgs>(args?: SelectSubset<T, big_numbers_valuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Big_numbers_values and returns the data saved in the database.
     * @param {big_numbers_valuesCreateManyAndReturnArgs} args - Arguments to create many Big_numbers_values.
     * @example
     * // Create many Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Big_numbers_values and only return the `bignumbers_uuid`
     * const big_numbers_valuesWithBignumbers_uuidOnly = await prisma.big_numbers_values.createManyAndReturn({ 
     *   select: { bignumbers_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends big_numbers_valuesCreateManyAndReturnArgs>(args?: SelectSubset<T, big_numbers_valuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Big_numbers_values.
     * @param {big_numbers_valuesDeleteArgs} args - Arguments to delete one Big_numbers_values.
     * @example
     * // Delete one Big_numbers_values
     * const Big_numbers_values = await prisma.big_numbers_values.delete({
     *   where: {
     *     // ... filter to delete one Big_numbers_values
     *   }
     * })
     * 
     */
    delete<T extends big_numbers_valuesDeleteArgs>(args: SelectSubset<T, big_numbers_valuesDeleteArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Big_numbers_values.
     * @param {big_numbers_valuesUpdateArgs} args - Arguments to update one Big_numbers_values.
     * @example
     * // Update one Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends big_numbers_valuesUpdateArgs>(args: SelectSubset<T, big_numbers_valuesUpdateArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Big_numbers_values.
     * @param {big_numbers_valuesDeleteManyArgs} args - Arguments to filter Big_numbers_values to delete.
     * @example
     * // Delete a few Big_numbers_values
     * const { count } = await prisma.big_numbers_values.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends big_numbers_valuesDeleteManyArgs>(args?: SelectSubset<T, big_numbers_valuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Big_numbers_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {big_numbers_valuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends big_numbers_valuesUpdateManyArgs>(args: SelectSubset<T, big_numbers_valuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Big_numbers_values.
     * @param {big_numbers_valuesUpsertArgs} args - Arguments to update or create a Big_numbers_values.
     * @example
     * // Update or create a Big_numbers_values
     * const big_numbers_values = await prisma.big_numbers_values.upsert({
     *   create: {
     *     // ... data to create a Big_numbers_values
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Big_numbers_values we want to update
     *   }
     * })
     */
    upsert<T extends big_numbers_valuesUpsertArgs>(args: SelectSubset<T, big_numbers_valuesUpsertArgs<ExtArgs>>): Prisma__big_numbers_valuesClient<$Result.GetResult<Prisma.$big_numbers_valuesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Big_numbers_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {big_numbers_valuesCountArgs} args - Arguments to filter Big_numbers_values to count.
     * @example
     * // Count the number of Big_numbers_values
     * const count = await prisma.big_numbers_values.count({
     *   where: {
     *     // ... the filter for the Big_numbers_values we want to count
     *   }
     * })
    **/
    count<T extends big_numbers_valuesCountArgs>(
      args?: Subset<T, big_numbers_valuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Big_numbers_valuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Big_numbers_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Big_numbers_valuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Big_numbers_valuesAggregateArgs>(args: Subset<T, Big_numbers_valuesAggregateArgs>): Prisma.PrismaPromise<GetBig_numbers_valuesAggregateType<T>>

    /**
     * Group by Big_numbers_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {big_numbers_valuesGroupByArgs} args - Group by arguments.
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
      T extends big_numbers_valuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: big_numbers_valuesGroupByArgs['orderBy'] }
        : { orderBy?: big_numbers_valuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, big_numbers_valuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBig_numbers_valuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the big_numbers_values model
   */
  readonly fields: big_numbers_valuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for big_numbers_values.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__big_numbers_valuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the big_numbers_values model
   */ 
  interface big_numbers_valuesFieldRefs {
    readonly bignumbers_uuid: FieldRef<"big_numbers_values", 'String'>
    readonly bignumbers_sumliterage: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_invoicing: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_Supplies: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_fuelSales: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_fuelProfit: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_productSales: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_productProfit: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_dailyProductProfit: FieldRef<"big_numbers_values", 'Float'>
    readonly bignumbers_dailyLiterageProfit: FieldRef<"big_numbers_values", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * big_numbers_values findUnique
   */
  export type big_numbers_valuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * Filter, which big_numbers_values to fetch.
     */
    where: big_numbers_valuesWhereUniqueInput
  }

  /**
   * big_numbers_values findUniqueOrThrow
   */
  export type big_numbers_valuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * Filter, which big_numbers_values to fetch.
     */
    where: big_numbers_valuesWhereUniqueInput
  }

  /**
   * big_numbers_values findFirst
   */
  export type big_numbers_valuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * Filter, which big_numbers_values to fetch.
     */
    where?: big_numbers_valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of big_numbers_values to fetch.
     */
    orderBy?: big_numbers_valuesOrderByWithRelationInput | big_numbers_valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for big_numbers_values.
     */
    cursor?: big_numbers_valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` big_numbers_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` big_numbers_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of big_numbers_values.
     */
    distinct?: Big_numbers_valuesScalarFieldEnum | Big_numbers_valuesScalarFieldEnum[]
  }

  /**
   * big_numbers_values findFirstOrThrow
   */
  export type big_numbers_valuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * Filter, which big_numbers_values to fetch.
     */
    where?: big_numbers_valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of big_numbers_values to fetch.
     */
    orderBy?: big_numbers_valuesOrderByWithRelationInput | big_numbers_valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for big_numbers_values.
     */
    cursor?: big_numbers_valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` big_numbers_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` big_numbers_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of big_numbers_values.
     */
    distinct?: Big_numbers_valuesScalarFieldEnum | Big_numbers_valuesScalarFieldEnum[]
  }

  /**
   * big_numbers_values findMany
   */
  export type big_numbers_valuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * Filter, which big_numbers_values to fetch.
     */
    where?: big_numbers_valuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of big_numbers_values to fetch.
     */
    orderBy?: big_numbers_valuesOrderByWithRelationInput | big_numbers_valuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing big_numbers_values.
     */
    cursor?: big_numbers_valuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` big_numbers_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` big_numbers_values.
     */
    skip?: number
    distinct?: Big_numbers_valuesScalarFieldEnum | Big_numbers_valuesScalarFieldEnum[]
  }

  /**
   * big_numbers_values create
   */
  export type big_numbers_valuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * The data needed to create a big_numbers_values.
     */
    data?: XOR<big_numbers_valuesCreateInput, big_numbers_valuesUncheckedCreateInput>
  }

  /**
   * big_numbers_values createMany
   */
  export type big_numbers_valuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many big_numbers_values.
     */
    data: big_numbers_valuesCreateManyInput | big_numbers_valuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * big_numbers_values createManyAndReturn
   */
  export type big_numbers_valuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many big_numbers_values.
     */
    data: big_numbers_valuesCreateManyInput | big_numbers_valuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * big_numbers_values update
   */
  export type big_numbers_valuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * The data needed to update a big_numbers_values.
     */
    data: XOR<big_numbers_valuesUpdateInput, big_numbers_valuesUncheckedUpdateInput>
    /**
     * Choose, which big_numbers_values to update.
     */
    where: big_numbers_valuesWhereUniqueInput
  }

  /**
   * big_numbers_values updateMany
   */
  export type big_numbers_valuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update big_numbers_values.
     */
    data: XOR<big_numbers_valuesUpdateManyMutationInput, big_numbers_valuesUncheckedUpdateManyInput>
    /**
     * Filter which big_numbers_values to update
     */
    where?: big_numbers_valuesWhereInput
  }

  /**
   * big_numbers_values upsert
   */
  export type big_numbers_valuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * The filter to search for the big_numbers_values to update in case it exists.
     */
    where: big_numbers_valuesWhereUniqueInput
    /**
     * In case the big_numbers_values found by the `where` argument doesn't exist, create a new big_numbers_values with this data.
     */
    create: XOR<big_numbers_valuesCreateInput, big_numbers_valuesUncheckedCreateInput>
    /**
     * In case the big_numbers_values was found with the provided `where` argument, update it with this data.
     */
    update: XOR<big_numbers_valuesUpdateInput, big_numbers_valuesUncheckedUpdateInput>
  }

  /**
   * big_numbers_values delete
   */
  export type big_numbers_valuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
    /**
     * Filter which big_numbers_values to delete.
     */
    where: big_numbers_valuesWhereUniqueInput
  }

  /**
   * big_numbers_values deleteMany
   */
  export type big_numbers_valuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which big_numbers_values to delete
     */
    where?: big_numbers_valuesWhereInput
  }

  /**
   * big_numbers_values without action
   */
  export type big_numbers_valuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the big_numbers_values
     */
    select?: big_numbers_valuesSelect<ExtArgs> | null
  }


  /**
   * Model gallon_gross_history
   */

  export type AggregateGallon_gross_history = {
    _count: Gallon_gross_historyCountAggregateOutputType | null
    _avg: Gallon_gross_historyAvgAggregateOutputType | null
    _sum: Gallon_gross_historySumAggregateOutputType | null
    _min: Gallon_gross_historyMinAggregateOutputType | null
    _max: Gallon_gross_historyMaxAggregateOutputType | null
  }

  export type Gallon_gross_historyAvgAggregateOutputType = {
    gallon_history_gross: number | null
  }

  export type Gallon_gross_historySumAggregateOutputType = {
    gallon_history_gross: number | null
  }

  export type Gallon_gross_historyMinAggregateOutputType = {
    gallon_history_uuid: string | null
    ibm_info_id: string | null
    use_uuid: string | null
    gallon_history_gross: number | null
    gallon_history_date: Date | null
    gallon_history_created_at: Date | null
    gallon_history_updated_at: Date | null
  }

  export type Gallon_gross_historyMaxAggregateOutputType = {
    gallon_history_uuid: string | null
    ibm_info_id: string | null
    use_uuid: string | null
    gallon_history_gross: number | null
    gallon_history_date: Date | null
    gallon_history_created_at: Date | null
    gallon_history_updated_at: Date | null
  }

  export type Gallon_gross_historyCountAggregateOutputType = {
    gallon_history_uuid: number
    ibm_info_id: number
    use_uuid: number
    gallon_history_gross: number
    gallon_history_date: number
    gallon_history_created_at: number
    gallon_history_updated_at: number
    _all: number
  }


  export type Gallon_gross_historyAvgAggregateInputType = {
    gallon_history_gross?: true
  }

  export type Gallon_gross_historySumAggregateInputType = {
    gallon_history_gross?: true
  }

  export type Gallon_gross_historyMinAggregateInputType = {
    gallon_history_uuid?: true
    ibm_info_id?: true
    use_uuid?: true
    gallon_history_gross?: true
    gallon_history_date?: true
    gallon_history_created_at?: true
    gallon_history_updated_at?: true
  }

  export type Gallon_gross_historyMaxAggregateInputType = {
    gallon_history_uuid?: true
    ibm_info_id?: true
    use_uuid?: true
    gallon_history_gross?: true
    gallon_history_date?: true
    gallon_history_created_at?: true
    gallon_history_updated_at?: true
  }

  export type Gallon_gross_historyCountAggregateInputType = {
    gallon_history_uuid?: true
    ibm_info_id?: true
    use_uuid?: true
    gallon_history_gross?: true
    gallon_history_date?: true
    gallon_history_created_at?: true
    gallon_history_updated_at?: true
    _all?: true
  }

  export type Gallon_gross_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallon_gross_history to aggregate.
     */
    where?: gallon_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallon_gross_histories to fetch.
     */
    orderBy?: gallon_gross_historyOrderByWithRelationInput | gallon_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gallon_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallon_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallon_gross_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gallon_gross_histories
    **/
    _count?: true | Gallon_gross_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gallon_gross_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gallon_gross_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gallon_gross_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gallon_gross_historyMaxAggregateInputType
  }

  export type GetGallon_gross_historyAggregateType<T extends Gallon_gross_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateGallon_gross_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallon_gross_history[P]>
      : GetScalarType<T[P], AggregateGallon_gross_history[P]>
  }




  export type gallon_gross_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gallon_gross_historyWhereInput
    orderBy?: gallon_gross_historyOrderByWithAggregationInput | gallon_gross_historyOrderByWithAggregationInput[]
    by: Gallon_gross_historyScalarFieldEnum[] | Gallon_gross_historyScalarFieldEnum
    having?: gallon_gross_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gallon_gross_historyCountAggregateInputType | true
    _avg?: Gallon_gross_historyAvgAggregateInputType
    _sum?: Gallon_gross_historySumAggregateInputType
    _min?: Gallon_gross_historyMinAggregateInputType
    _max?: Gallon_gross_historyMaxAggregateInputType
  }

  export type Gallon_gross_historyGroupByOutputType = {
    gallon_history_uuid: string
    ibm_info_id: string | null
    use_uuid: string | null
    gallon_history_gross: number | null
    gallon_history_date: Date | null
    gallon_history_created_at: Date
    gallon_history_updated_at: Date
    _count: Gallon_gross_historyCountAggregateOutputType | null
    _avg: Gallon_gross_historyAvgAggregateOutputType | null
    _sum: Gallon_gross_historySumAggregateOutputType | null
    _min: Gallon_gross_historyMinAggregateOutputType | null
    _max: Gallon_gross_historyMaxAggregateOutputType | null
  }

  type GetGallon_gross_historyGroupByPayload<T extends gallon_gross_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gallon_gross_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gallon_gross_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gallon_gross_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Gallon_gross_historyGroupByOutputType[P]>
        }
      >
    >


  export type gallon_gross_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallon_history_uuid?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    gallon_history_gross?: boolean
    gallon_history_date?: boolean
    gallon_history_created_at?: boolean
    gallon_history_updated_at?: boolean
    ibm_info?: boolean | gallon_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | gallon_gross_history$usersArgs<ExtArgs>
  }, ExtArgs["result"]["gallon_gross_history"]>

  export type gallon_gross_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallon_history_uuid?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    gallon_history_gross?: boolean
    gallon_history_date?: boolean
    gallon_history_created_at?: boolean
    gallon_history_updated_at?: boolean
    ibm_info?: boolean | gallon_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | gallon_gross_history$usersArgs<ExtArgs>
  }, ExtArgs["result"]["gallon_gross_history"]>

  export type gallon_gross_historySelectScalar = {
    gallon_history_uuid?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    gallon_history_gross?: boolean
    gallon_history_date?: boolean
    gallon_history_created_at?: boolean
    gallon_history_updated_at?: boolean
  }

  export type gallon_gross_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ibm_info?: boolean | gallon_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | gallon_gross_history$usersArgs<ExtArgs>
  }
  export type gallon_gross_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ibm_info?: boolean | gallon_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | gallon_gross_history$usersArgs<ExtArgs>
  }

  export type $gallon_gross_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gallon_gross_history"
    objects: {
      ibm_info: Prisma.$ibm_infoPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      gallon_history_uuid: string
      ibm_info_id: string | null
      use_uuid: string | null
      gallon_history_gross: number | null
      gallon_history_date: Date | null
      gallon_history_created_at: Date
      gallon_history_updated_at: Date
    }, ExtArgs["result"]["gallon_gross_history"]>
    composites: {}
  }

  type gallon_gross_historyGetPayload<S extends boolean | null | undefined | gallon_gross_historyDefaultArgs> = $Result.GetResult<Prisma.$gallon_gross_historyPayload, S>

  type gallon_gross_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gallon_gross_historyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Gallon_gross_historyCountAggregateInputType | true
    }

  export interface gallon_gross_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gallon_gross_history'], meta: { name: 'gallon_gross_history' } }
    /**
     * Find zero or one Gallon_gross_history that matches the filter.
     * @param {gallon_gross_historyFindUniqueArgs} args - Arguments to find a Gallon_gross_history
     * @example
     * // Get one Gallon_gross_history
     * const gallon_gross_history = await prisma.gallon_gross_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gallon_gross_historyFindUniqueArgs>(args: SelectSubset<T, gallon_gross_historyFindUniqueArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gallon_gross_history that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gallon_gross_historyFindUniqueOrThrowArgs} args - Arguments to find a Gallon_gross_history
     * @example
     * // Get one Gallon_gross_history
     * const gallon_gross_history = await prisma.gallon_gross_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gallon_gross_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, gallon_gross_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gallon_gross_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallon_gross_historyFindFirstArgs} args - Arguments to find a Gallon_gross_history
     * @example
     * // Get one Gallon_gross_history
     * const gallon_gross_history = await prisma.gallon_gross_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gallon_gross_historyFindFirstArgs>(args?: SelectSubset<T, gallon_gross_historyFindFirstArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gallon_gross_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallon_gross_historyFindFirstOrThrowArgs} args - Arguments to find a Gallon_gross_history
     * @example
     * // Get one Gallon_gross_history
     * const gallon_gross_history = await prisma.gallon_gross_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gallon_gross_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, gallon_gross_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gallon_gross_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallon_gross_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gallon_gross_histories
     * const gallon_gross_histories = await prisma.gallon_gross_history.findMany()
     * 
     * // Get first 10 Gallon_gross_histories
     * const gallon_gross_histories = await prisma.gallon_gross_history.findMany({ take: 10 })
     * 
     * // Only select the `gallon_history_uuid`
     * const gallon_gross_historyWithGallon_history_uuidOnly = await prisma.gallon_gross_history.findMany({ select: { gallon_history_uuid: true } })
     * 
     */
    findMany<T extends gallon_gross_historyFindManyArgs>(args?: SelectSubset<T, gallon_gross_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gallon_gross_history.
     * @param {gallon_gross_historyCreateArgs} args - Arguments to create a Gallon_gross_history.
     * @example
     * // Create one Gallon_gross_history
     * const Gallon_gross_history = await prisma.gallon_gross_history.create({
     *   data: {
     *     // ... data to create a Gallon_gross_history
     *   }
     * })
     * 
     */
    create<T extends gallon_gross_historyCreateArgs>(args: SelectSubset<T, gallon_gross_historyCreateArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gallon_gross_histories.
     * @param {gallon_gross_historyCreateManyArgs} args - Arguments to create many Gallon_gross_histories.
     * @example
     * // Create many Gallon_gross_histories
     * const gallon_gross_history = await prisma.gallon_gross_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gallon_gross_historyCreateManyArgs>(args?: SelectSubset<T, gallon_gross_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gallon_gross_histories and returns the data saved in the database.
     * @param {gallon_gross_historyCreateManyAndReturnArgs} args - Arguments to create many Gallon_gross_histories.
     * @example
     * // Create many Gallon_gross_histories
     * const gallon_gross_history = await prisma.gallon_gross_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gallon_gross_histories and only return the `gallon_history_uuid`
     * const gallon_gross_historyWithGallon_history_uuidOnly = await prisma.gallon_gross_history.createManyAndReturn({ 
     *   select: { gallon_history_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gallon_gross_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, gallon_gross_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gallon_gross_history.
     * @param {gallon_gross_historyDeleteArgs} args - Arguments to delete one Gallon_gross_history.
     * @example
     * // Delete one Gallon_gross_history
     * const Gallon_gross_history = await prisma.gallon_gross_history.delete({
     *   where: {
     *     // ... filter to delete one Gallon_gross_history
     *   }
     * })
     * 
     */
    delete<T extends gallon_gross_historyDeleteArgs>(args: SelectSubset<T, gallon_gross_historyDeleteArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gallon_gross_history.
     * @param {gallon_gross_historyUpdateArgs} args - Arguments to update one Gallon_gross_history.
     * @example
     * // Update one Gallon_gross_history
     * const gallon_gross_history = await prisma.gallon_gross_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gallon_gross_historyUpdateArgs>(args: SelectSubset<T, gallon_gross_historyUpdateArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gallon_gross_histories.
     * @param {gallon_gross_historyDeleteManyArgs} args - Arguments to filter Gallon_gross_histories to delete.
     * @example
     * // Delete a few Gallon_gross_histories
     * const { count } = await prisma.gallon_gross_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gallon_gross_historyDeleteManyArgs>(args?: SelectSubset<T, gallon_gross_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gallon_gross_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallon_gross_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gallon_gross_histories
     * const gallon_gross_history = await prisma.gallon_gross_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gallon_gross_historyUpdateManyArgs>(args: SelectSubset<T, gallon_gross_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gallon_gross_history.
     * @param {gallon_gross_historyUpsertArgs} args - Arguments to update or create a Gallon_gross_history.
     * @example
     * // Update or create a Gallon_gross_history
     * const gallon_gross_history = await prisma.gallon_gross_history.upsert({
     *   create: {
     *     // ... data to create a Gallon_gross_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallon_gross_history we want to update
     *   }
     * })
     */
    upsert<T extends gallon_gross_historyUpsertArgs>(args: SelectSubset<T, gallon_gross_historyUpsertArgs<ExtArgs>>): Prisma__gallon_gross_historyClient<$Result.GetResult<Prisma.$gallon_gross_historyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gallon_gross_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallon_gross_historyCountArgs} args - Arguments to filter Gallon_gross_histories to count.
     * @example
     * // Count the number of Gallon_gross_histories
     * const count = await prisma.gallon_gross_history.count({
     *   where: {
     *     // ... the filter for the Gallon_gross_histories we want to count
     *   }
     * })
    **/
    count<T extends gallon_gross_historyCountArgs>(
      args?: Subset<T, gallon_gross_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gallon_gross_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallon_gross_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gallon_gross_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gallon_gross_historyAggregateArgs>(args: Subset<T, Gallon_gross_historyAggregateArgs>): Prisma.PrismaPromise<GetGallon_gross_historyAggregateType<T>>

    /**
     * Group by Gallon_gross_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gallon_gross_historyGroupByArgs} args - Group by arguments.
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
      T extends gallon_gross_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gallon_gross_historyGroupByArgs['orderBy'] }
        : { orderBy?: gallon_gross_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gallon_gross_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGallon_gross_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gallon_gross_history model
   */
  readonly fields: gallon_gross_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gallon_gross_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gallon_gross_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ibm_info<T extends gallon_gross_history$ibm_infoArgs<ExtArgs> = {}>(args?: Subset<T, gallon_gross_history$ibm_infoArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    users<T extends gallon_gross_history$usersArgs<ExtArgs> = {}>(args?: Subset<T, gallon_gross_history$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gallon_gross_history model
   */ 
  interface gallon_gross_historyFieldRefs {
    readonly gallon_history_uuid: FieldRef<"gallon_gross_history", 'String'>
    readonly ibm_info_id: FieldRef<"gallon_gross_history", 'String'>
    readonly use_uuid: FieldRef<"gallon_gross_history", 'String'>
    readonly gallon_history_gross: FieldRef<"gallon_gross_history", 'Float'>
    readonly gallon_history_date: FieldRef<"gallon_gross_history", 'DateTime'>
    readonly gallon_history_created_at: FieldRef<"gallon_gross_history", 'DateTime'>
    readonly gallon_history_updated_at: FieldRef<"gallon_gross_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gallon_gross_history findUnique
   */
  export type gallon_gross_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which gallon_gross_history to fetch.
     */
    where: gallon_gross_historyWhereUniqueInput
  }

  /**
   * gallon_gross_history findUniqueOrThrow
   */
  export type gallon_gross_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which gallon_gross_history to fetch.
     */
    where: gallon_gross_historyWhereUniqueInput
  }

  /**
   * gallon_gross_history findFirst
   */
  export type gallon_gross_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which gallon_gross_history to fetch.
     */
    where?: gallon_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallon_gross_histories to fetch.
     */
    orderBy?: gallon_gross_historyOrderByWithRelationInput | gallon_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gallon_gross_histories.
     */
    cursor?: gallon_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallon_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallon_gross_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gallon_gross_histories.
     */
    distinct?: Gallon_gross_historyScalarFieldEnum | Gallon_gross_historyScalarFieldEnum[]
  }

  /**
   * gallon_gross_history findFirstOrThrow
   */
  export type gallon_gross_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which gallon_gross_history to fetch.
     */
    where?: gallon_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallon_gross_histories to fetch.
     */
    orderBy?: gallon_gross_historyOrderByWithRelationInput | gallon_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gallon_gross_histories.
     */
    cursor?: gallon_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallon_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallon_gross_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gallon_gross_histories.
     */
    distinct?: Gallon_gross_historyScalarFieldEnum | Gallon_gross_historyScalarFieldEnum[]
  }

  /**
   * gallon_gross_history findMany
   */
  export type gallon_gross_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which gallon_gross_histories to fetch.
     */
    where?: gallon_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gallon_gross_histories to fetch.
     */
    orderBy?: gallon_gross_historyOrderByWithRelationInput | gallon_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gallon_gross_histories.
     */
    cursor?: gallon_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gallon_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gallon_gross_histories.
     */
    skip?: number
    distinct?: Gallon_gross_historyScalarFieldEnum | Gallon_gross_historyScalarFieldEnum[]
  }

  /**
   * gallon_gross_history create
   */
  export type gallon_gross_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a gallon_gross_history.
     */
    data?: XOR<gallon_gross_historyCreateInput, gallon_gross_historyUncheckedCreateInput>
  }

  /**
   * gallon_gross_history createMany
   */
  export type gallon_gross_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gallon_gross_histories.
     */
    data: gallon_gross_historyCreateManyInput | gallon_gross_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gallon_gross_history createManyAndReturn
   */
  export type gallon_gross_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gallon_gross_histories.
     */
    data: gallon_gross_historyCreateManyInput | gallon_gross_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * gallon_gross_history update
   */
  export type gallon_gross_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a gallon_gross_history.
     */
    data: XOR<gallon_gross_historyUpdateInput, gallon_gross_historyUncheckedUpdateInput>
    /**
     * Choose, which gallon_gross_history to update.
     */
    where: gallon_gross_historyWhereUniqueInput
  }

  /**
   * gallon_gross_history updateMany
   */
  export type gallon_gross_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gallon_gross_histories.
     */
    data: XOR<gallon_gross_historyUpdateManyMutationInput, gallon_gross_historyUncheckedUpdateManyInput>
    /**
     * Filter which gallon_gross_histories to update
     */
    where?: gallon_gross_historyWhereInput
  }

  /**
   * gallon_gross_history upsert
   */
  export type gallon_gross_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the gallon_gross_history to update in case it exists.
     */
    where: gallon_gross_historyWhereUniqueInput
    /**
     * In case the gallon_gross_history found by the `where` argument doesn't exist, create a new gallon_gross_history with this data.
     */
    create: XOR<gallon_gross_historyCreateInput, gallon_gross_historyUncheckedCreateInput>
    /**
     * In case the gallon_gross_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gallon_gross_historyUpdateInput, gallon_gross_historyUncheckedUpdateInput>
  }

  /**
   * gallon_gross_history delete
   */
  export type gallon_gross_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
    /**
     * Filter which gallon_gross_history to delete.
     */
    where: gallon_gross_historyWhereUniqueInput
  }

  /**
   * gallon_gross_history deleteMany
   */
  export type gallon_gross_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gallon_gross_histories to delete
     */
    where?: gallon_gross_historyWhereInput
  }

  /**
   * gallon_gross_history.ibm_info
   */
  export type gallon_gross_history$ibm_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
    where?: ibm_infoWhereInput
  }

  /**
   * gallon_gross_history.users
   */
  export type gallon_gross_history$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * gallon_gross_history without action
   */
  export type gallon_gross_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gallon_gross_history
     */
    select?: gallon_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gallon_gross_historyInclude<ExtArgs> | null
  }


  /**
   * Model product_gross_history
   */

  export type AggregateProduct_gross_history = {
    _count: Product_gross_historyCountAggregateOutputType | null
    _avg: Product_gross_historyAvgAggregateOutputType | null
    _sum: Product_gross_historySumAggregateOutputType | null
    _min: Product_gross_historyMinAggregateOutputType | null
    _max: Product_gross_historyMaxAggregateOutputType | null
  }

  export type Product_gross_historyAvgAggregateOutputType = {
    product_history_gross: number | null
  }

  export type Product_gross_historySumAggregateOutputType = {
    product_history_gross: number | null
  }

  export type Product_gross_historyMinAggregateOutputType = {
    product_history_uuid: string | null
    ibm_info_id: string | null
    use_uuid: string | null
    product_history_gross: number | null
    product_history_date: Date | null
    product_history_created_at: Date | null
    product_history_updated_at: Date | null
  }

  export type Product_gross_historyMaxAggregateOutputType = {
    product_history_uuid: string | null
    ibm_info_id: string | null
    use_uuid: string | null
    product_history_gross: number | null
    product_history_date: Date | null
    product_history_created_at: Date | null
    product_history_updated_at: Date | null
  }

  export type Product_gross_historyCountAggregateOutputType = {
    product_history_uuid: number
    ibm_info_id: number
    use_uuid: number
    product_history_gross: number
    product_history_date: number
    product_history_created_at: number
    product_history_updated_at: number
    _all: number
  }


  export type Product_gross_historyAvgAggregateInputType = {
    product_history_gross?: true
  }

  export type Product_gross_historySumAggregateInputType = {
    product_history_gross?: true
  }

  export type Product_gross_historyMinAggregateInputType = {
    product_history_uuid?: true
    ibm_info_id?: true
    use_uuid?: true
    product_history_gross?: true
    product_history_date?: true
    product_history_created_at?: true
    product_history_updated_at?: true
  }

  export type Product_gross_historyMaxAggregateInputType = {
    product_history_uuid?: true
    ibm_info_id?: true
    use_uuid?: true
    product_history_gross?: true
    product_history_date?: true
    product_history_created_at?: true
    product_history_updated_at?: true
  }

  export type Product_gross_historyCountAggregateInputType = {
    product_history_uuid?: true
    ibm_info_id?: true
    use_uuid?: true
    product_history_gross?: true
    product_history_date?: true
    product_history_created_at?: true
    product_history_updated_at?: true
    _all?: true
  }

  export type Product_gross_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_gross_history to aggregate.
     */
    where?: product_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_gross_histories to fetch.
     */
    orderBy?: product_gross_historyOrderByWithRelationInput | product_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_gross_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_gross_histories
    **/
    _count?: true | Product_gross_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_gross_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_gross_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_gross_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_gross_historyMaxAggregateInputType
  }

  export type GetProduct_gross_historyAggregateType<T extends Product_gross_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_gross_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_gross_history[P]>
      : GetScalarType<T[P], AggregateProduct_gross_history[P]>
  }




  export type product_gross_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_gross_historyWhereInput
    orderBy?: product_gross_historyOrderByWithAggregationInput | product_gross_historyOrderByWithAggregationInput[]
    by: Product_gross_historyScalarFieldEnum[] | Product_gross_historyScalarFieldEnum
    having?: product_gross_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_gross_historyCountAggregateInputType | true
    _avg?: Product_gross_historyAvgAggregateInputType
    _sum?: Product_gross_historySumAggregateInputType
    _min?: Product_gross_historyMinAggregateInputType
    _max?: Product_gross_historyMaxAggregateInputType
  }

  export type Product_gross_historyGroupByOutputType = {
    product_history_uuid: string
    ibm_info_id: string | null
    use_uuid: string | null
    product_history_gross: number | null
    product_history_date: Date | null
    product_history_created_at: Date
    product_history_updated_at: Date
    _count: Product_gross_historyCountAggregateOutputType | null
    _avg: Product_gross_historyAvgAggregateOutputType | null
    _sum: Product_gross_historySumAggregateOutputType | null
    _min: Product_gross_historyMinAggregateOutputType | null
    _max: Product_gross_historyMaxAggregateOutputType | null
  }

  type GetProduct_gross_historyGroupByPayload<T extends product_gross_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_gross_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_gross_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_gross_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Product_gross_historyGroupByOutputType[P]>
        }
      >
    >


  export type product_gross_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_history_uuid?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    product_history_gross?: boolean
    product_history_date?: boolean
    product_history_created_at?: boolean
    product_history_updated_at?: boolean
    ibm_info?: boolean | product_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | product_gross_history$usersArgs<ExtArgs>
  }, ExtArgs["result"]["product_gross_history"]>

  export type product_gross_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_history_uuid?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    product_history_gross?: boolean
    product_history_date?: boolean
    product_history_created_at?: boolean
    product_history_updated_at?: boolean
    ibm_info?: boolean | product_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | product_gross_history$usersArgs<ExtArgs>
  }, ExtArgs["result"]["product_gross_history"]>

  export type product_gross_historySelectScalar = {
    product_history_uuid?: boolean
    ibm_info_id?: boolean
    use_uuid?: boolean
    product_history_gross?: boolean
    product_history_date?: boolean
    product_history_created_at?: boolean
    product_history_updated_at?: boolean
  }

  export type product_gross_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ibm_info?: boolean | product_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | product_gross_history$usersArgs<ExtArgs>
  }
  export type product_gross_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ibm_info?: boolean | product_gross_history$ibm_infoArgs<ExtArgs>
    users?: boolean | product_gross_history$usersArgs<ExtArgs>
  }

  export type $product_gross_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_gross_history"
    objects: {
      ibm_info: Prisma.$ibm_infoPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      product_history_uuid: string
      ibm_info_id: string | null
      use_uuid: string | null
      product_history_gross: number | null
      product_history_date: Date | null
      product_history_created_at: Date
      product_history_updated_at: Date
    }, ExtArgs["result"]["product_gross_history"]>
    composites: {}
  }

  type product_gross_historyGetPayload<S extends boolean | null | undefined | product_gross_historyDefaultArgs> = $Result.GetResult<Prisma.$product_gross_historyPayload, S>

  type product_gross_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<product_gross_historyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Product_gross_historyCountAggregateInputType | true
    }

  export interface product_gross_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_gross_history'], meta: { name: 'product_gross_history' } }
    /**
     * Find zero or one Product_gross_history that matches the filter.
     * @param {product_gross_historyFindUniqueArgs} args - Arguments to find a Product_gross_history
     * @example
     * // Get one Product_gross_history
     * const product_gross_history = await prisma.product_gross_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_gross_historyFindUniqueArgs>(args: SelectSubset<T, product_gross_historyFindUniqueArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product_gross_history that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {product_gross_historyFindUniqueOrThrowArgs} args - Arguments to find a Product_gross_history
     * @example
     * // Get one Product_gross_history
     * const product_gross_history = await prisma.product_gross_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_gross_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, product_gross_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product_gross_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_gross_historyFindFirstArgs} args - Arguments to find a Product_gross_history
     * @example
     * // Get one Product_gross_history
     * const product_gross_history = await prisma.product_gross_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_gross_historyFindFirstArgs>(args?: SelectSubset<T, product_gross_historyFindFirstArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product_gross_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_gross_historyFindFirstOrThrowArgs} args - Arguments to find a Product_gross_history
     * @example
     * // Get one Product_gross_history
     * const product_gross_history = await prisma.product_gross_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_gross_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, product_gross_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Product_gross_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_gross_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_gross_histories
     * const product_gross_histories = await prisma.product_gross_history.findMany()
     * 
     * // Get first 10 Product_gross_histories
     * const product_gross_histories = await prisma.product_gross_history.findMany({ take: 10 })
     * 
     * // Only select the `product_history_uuid`
     * const product_gross_historyWithProduct_history_uuidOnly = await prisma.product_gross_history.findMany({ select: { product_history_uuid: true } })
     * 
     */
    findMany<T extends product_gross_historyFindManyArgs>(args?: SelectSubset<T, product_gross_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product_gross_history.
     * @param {product_gross_historyCreateArgs} args - Arguments to create a Product_gross_history.
     * @example
     * // Create one Product_gross_history
     * const Product_gross_history = await prisma.product_gross_history.create({
     *   data: {
     *     // ... data to create a Product_gross_history
     *   }
     * })
     * 
     */
    create<T extends product_gross_historyCreateArgs>(args: SelectSubset<T, product_gross_historyCreateArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Product_gross_histories.
     * @param {product_gross_historyCreateManyArgs} args - Arguments to create many Product_gross_histories.
     * @example
     * // Create many Product_gross_histories
     * const product_gross_history = await prisma.product_gross_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_gross_historyCreateManyArgs>(args?: SelectSubset<T, product_gross_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_gross_histories and returns the data saved in the database.
     * @param {product_gross_historyCreateManyAndReturnArgs} args - Arguments to create many Product_gross_histories.
     * @example
     * // Create many Product_gross_histories
     * const product_gross_history = await prisma.product_gross_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_gross_histories and only return the `product_history_uuid`
     * const product_gross_historyWithProduct_history_uuidOnly = await prisma.product_gross_history.createManyAndReturn({ 
     *   select: { product_history_uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_gross_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, product_gross_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product_gross_history.
     * @param {product_gross_historyDeleteArgs} args - Arguments to delete one Product_gross_history.
     * @example
     * // Delete one Product_gross_history
     * const Product_gross_history = await prisma.product_gross_history.delete({
     *   where: {
     *     // ... filter to delete one Product_gross_history
     *   }
     * })
     * 
     */
    delete<T extends product_gross_historyDeleteArgs>(args: SelectSubset<T, product_gross_historyDeleteArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product_gross_history.
     * @param {product_gross_historyUpdateArgs} args - Arguments to update one Product_gross_history.
     * @example
     * // Update one Product_gross_history
     * const product_gross_history = await prisma.product_gross_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_gross_historyUpdateArgs>(args: SelectSubset<T, product_gross_historyUpdateArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Product_gross_histories.
     * @param {product_gross_historyDeleteManyArgs} args - Arguments to filter Product_gross_histories to delete.
     * @example
     * // Delete a few Product_gross_histories
     * const { count } = await prisma.product_gross_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_gross_historyDeleteManyArgs>(args?: SelectSubset<T, product_gross_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_gross_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_gross_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_gross_histories
     * const product_gross_history = await prisma.product_gross_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_gross_historyUpdateManyArgs>(args: SelectSubset<T, product_gross_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_gross_history.
     * @param {product_gross_historyUpsertArgs} args - Arguments to update or create a Product_gross_history.
     * @example
     * // Update or create a Product_gross_history
     * const product_gross_history = await prisma.product_gross_history.upsert({
     *   create: {
     *     // ... data to create a Product_gross_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_gross_history we want to update
     *   }
     * })
     */
    upsert<T extends product_gross_historyUpsertArgs>(args: SelectSubset<T, product_gross_historyUpsertArgs<ExtArgs>>): Prisma__product_gross_historyClient<$Result.GetResult<Prisma.$product_gross_historyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Product_gross_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_gross_historyCountArgs} args - Arguments to filter Product_gross_histories to count.
     * @example
     * // Count the number of Product_gross_histories
     * const count = await prisma.product_gross_history.count({
     *   where: {
     *     // ... the filter for the Product_gross_histories we want to count
     *   }
     * })
    **/
    count<T extends product_gross_historyCountArgs>(
      args?: Subset<T, product_gross_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_gross_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_gross_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_gross_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_gross_historyAggregateArgs>(args: Subset<T, Product_gross_historyAggregateArgs>): Prisma.PrismaPromise<GetProduct_gross_historyAggregateType<T>>

    /**
     * Group by Product_gross_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_gross_historyGroupByArgs} args - Group by arguments.
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
      T extends product_gross_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_gross_historyGroupByArgs['orderBy'] }
        : { orderBy?: product_gross_historyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_gross_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_gross_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_gross_history model
   */
  readonly fields: product_gross_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_gross_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_gross_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ibm_info<T extends product_gross_history$ibm_infoArgs<ExtArgs> = {}>(args?: Subset<T, product_gross_history$ibm_infoArgs<ExtArgs>>): Prisma__ibm_infoClient<$Result.GetResult<Prisma.$ibm_infoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    users<T extends product_gross_history$usersArgs<ExtArgs> = {}>(args?: Subset<T, product_gross_history$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_gross_history model
   */ 
  interface product_gross_historyFieldRefs {
    readonly product_history_uuid: FieldRef<"product_gross_history", 'String'>
    readonly ibm_info_id: FieldRef<"product_gross_history", 'String'>
    readonly use_uuid: FieldRef<"product_gross_history", 'String'>
    readonly product_history_gross: FieldRef<"product_gross_history", 'Float'>
    readonly product_history_date: FieldRef<"product_gross_history", 'DateTime'>
    readonly product_history_created_at: FieldRef<"product_gross_history", 'DateTime'>
    readonly product_history_updated_at: FieldRef<"product_gross_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_gross_history findUnique
   */
  export type product_gross_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_gross_history to fetch.
     */
    where: product_gross_historyWhereUniqueInput
  }

  /**
   * product_gross_history findUniqueOrThrow
   */
  export type product_gross_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_gross_history to fetch.
     */
    where: product_gross_historyWhereUniqueInput
  }

  /**
   * product_gross_history findFirst
   */
  export type product_gross_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_gross_history to fetch.
     */
    where?: product_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_gross_histories to fetch.
     */
    orderBy?: product_gross_historyOrderByWithRelationInput | product_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_gross_histories.
     */
    cursor?: product_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_gross_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_gross_histories.
     */
    distinct?: Product_gross_historyScalarFieldEnum | Product_gross_historyScalarFieldEnum[]
  }

  /**
   * product_gross_history findFirstOrThrow
   */
  export type product_gross_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_gross_history to fetch.
     */
    where?: product_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_gross_histories to fetch.
     */
    orderBy?: product_gross_historyOrderByWithRelationInput | product_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_gross_histories.
     */
    cursor?: product_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_gross_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_gross_histories.
     */
    distinct?: Product_gross_historyScalarFieldEnum | Product_gross_historyScalarFieldEnum[]
  }

  /**
   * product_gross_history findMany
   */
  export type product_gross_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * Filter, which product_gross_histories to fetch.
     */
    where?: product_gross_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_gross_histories to fetch.
     */
    orderBy?: product_gross_historyOrderByWithRelationInput | product_gross_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_gross_histories.
     */
    cursor?: product_gross_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_gross_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_gross_histories.
     */
    skip?: number
    distinct?: Product_gross_historyScalarFieldEnum | Product_gross_historyScalarFieldEnum[]
  }

  /**
   * product_gross_history create
   */
  export type product_gross_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a product_gross_history.
     */
    data?: XOR<product_gross_historyCreateInput, product_gross_historyUncheckedCreateInput>
  }

  /**
   * product_gross_history createMany
   */
  export type product_gross_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_gross_histories.
     */
    data: product_gross_historyCreateManyInput | product_gross_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_gross_history createManyAndReturn
   */
  export type product_gross_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many product_gross_histories.
     */
    data: product_gross_historyCreateManyInput | product_gross_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_gross_history update
   */
  export type product_gross_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a product_gross_history.
     */
    data: XOR<product_gross_historyUpdateInput, product_gross_historyUncheckedUpdateInput>
    /**
     * Choose, which product_gross_history to update.
     */
    where: product_gross_historyWhereUniqueInput
  }

  /**
   * product_gross_history updateMany
   */
  export type product_gross_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_gross_histories.
     */
    data: XOR<product_gross_historyUpdateManyMutationInput, product_gross_historyUncheckedUpdateManyInput>
    /**
     * Filter which product_gross_histories to update
     */
    where?: product_gross_historyWhereInput
  }

  /**
   * product_gross_history upsert
   */
  export type product_gross_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the product_gross_history to update in case it exists.
     */
    where: product_gross_historyWhereUniqueInput
    /**
     * In case the product_gross_history found by the `where` argument doesn't exist, create a new product_gross_history with this data.
     */
    create: XOR<product_gross_historyCreateInput, product_gross_historyUncheckedCreateInput>
    /**
     * In case the product_gross_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_gross_historyUpdateInput, product_gross_historyUncheckedUpdateInput>
  }

  /**
   * product_gross_history delete
   */
  export type product_gross_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
    /**
     * Filter which product_gross_history to delete.
     */
    where: product_gross_historyWhereUniqueInput
  }

  /**
   * product_gross_history deleteMany
   */
  export type product_gross_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_gross_histories to delete
     */
    where?: product_gross_historyWhereInput
  }

  /**
   * product_gross_history.ibm_info
   */
  export type product_gross_history$ibm_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ibm_info
     */
    select?: ibm_infoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ibm_infoInclude<ExtArgs> | null
    where?: ibm_infoWhereInput
  }

  /**
   * product_gross_history.users
   */
  export type product_gross_history$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * product_gross_history without action
   */
  export type product_gross_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_gross_history
     */
    select?: product_gross_historySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_gross_historyInclude<ExtArgs> | null
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


  export const Ibm_infoScalarFieldEnum: {
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
    ibm_margin_GASOLINA_PODIUM: 'ibm_margin_GASOLINA_PODIUM',
    ibm_margin_GASOLINA_PREMIUM: 'ibm_margin_GASOLINA_PREMIUM',
    ibm_margin_DIESEL_GROUP: 'ibm_margin_DIESEL_GROUP',
    ibm_margin_DIESEL_GROUP_S500: 'ibm_margin_DIESEL_GROUP_S500',
    ibm_margin_ETANOL_COMUM: 'ibm_margin_ETANOL_COMUM',
    ibm_margin_TOTAL_PRODUCT: 'ibm_margin_TOTAL_PRODUCT',
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: 'ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT',
    ibm_margin_FILTROS_AR_PRODUCT: 'ibm_margin_FILTROS_AR_PRODUCT'
  };

  export type Ibm_infoScalarFieldEnum = (typeof Ibm_infoScalarFieldEnum)[keyof typeof Ibm_infoScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Gas_station_setvariablesScalarFieldEnum: {
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
    gas_station_sanado_hour_marginGC: 'gas_station_sanado_hour_marginGC',
    gas_station_sanado_marginGC: 'gas_station_sanado_marginGC',
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
    verification_hour_margin_GASOLINA_PREMIUM: 'verification_hour_margin_GASOLINA_PREMIUM',
    gas_station_margin_DIESEL_GROUP_S500: 'gas_station_margin_DIESEL_GROUP_S500',
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500: 'gas_station_sanado_hour_margin_DIESEL_GROUP_S500',
    gas_station_sanado_margin_DIESEL_GROUP_S500: 'gas_station_sanado_margin_DIESEL_GROUP_S500',
    gas_station_type_margin_DIESEL_GROUP_S500: 'gas_station_type_margin_DIESEL_GROUP_S500',
    verification_hour_margin_DIESEL_GROUP_S500: 'verification_hour_margin_DIESEL_GROUP_S500',
    gas_station_margin_ETANOL_COMUM: 'gas_station_margin_ETANOL_COMUM',
    gas_station_sanado_hour_ETANOL_COMUM: 'gas_station_sanado_hour_ETANOL_COMUM',
    gas_station_sanado_margin_ETANOL_COMUM: 'gas_station_sanado_margin_ETANOL_COMUM',
    gas_station_type_margin_ETANOL_COMUM: 'gas_station_type_margin_ETANOL_COMUM',
    verification_hour_margin_ETANOL_COMUM: 'verification_hour_margin_ETANOL_COMUM',
    gas_station_invoice_comb: 'gas_station_invoice_comb',
    gas_station_invoice_prod: 'gas_station_invoice_prod',
    gas_station_invoice_comb_daily: 'gas_station_invoice_comb_daily',
    gas_station_invoice_prod_daily: 'gas_station_invoice_prod_daily',
    gas_station_margin_TOTAL_PRODUCT: 'gas_station_margin_TOTAL_PRODUCT',
    gas_station_sanado_hour_margin_TOTAL_PRODUCT: 'gas_station_sanado_hour_margin_TOTAL_PRODUCT',
    gas_station_sanado_margin_TOTAL_PRODUCT: 'gas_station_sanado_margin_TOTAL_PRODUCT',
    gas_station_type_margin_TOTAL_PRODUCT: 'gas_station_type_margin_TOTAL_PRODUCT',
    verification_hour_margin_TOTAL_PRODUCT: 'verification_hour_margin_TOTAL_PRODUCT',
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: 'gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT',
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: 'gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT',
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: 'gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT',
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: 'gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT',
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT: 'verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT',
    gas_station_freight_value: 'gas_station_freight_value',
    gas_station_gross_result_literage: 'gas_station_gross_result_literage',
    gas_station_gross_result_product: 'gas_station_gross_result_product',
    gas_station_margin_FILTROS_AR_PRODUCT: 'gas_station_margin_FILTROS_AR_PRODUCT',
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT: 'gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT',
    gas_station_sanado_margin_FILTROS_AR_PRODUCT: 'gas_station_sanado_margin_FILTROS_AR_PRODUCT',
    gas_station_type_margin_FILTROS_AR_PRODUCT: 'gas_station_type_margin_FILTROS_AR_PRODUCT',
    verification_hour_margin_FILTROS_AR_PRODUCT: 'verification_hour_margin_FILTROS_AR_PRODUCT'
  };

  export type Gas_station_setvariablesScalarFieldEnum = (typeof Gas_station_setvariablesScalarFieldEnum)[keyof typeof Gas_station_setvariablesScalarFieldEnum]


  export const Region_setvariablesScalarFieldEnum: {
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
    region_sanado_hour_marginGC: 'region_sanado_hour_marginGC',
    region_sanado_marginGC: 'region_sanado_marginGC',
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
    region_sanado_hour_GASOLINA_PREMIUM: 'region_sanado_hour_GASOLINA_PREMIUM',
    region_margin_DIESEL_GROUP_S500: 'region_margin_DIESEL_GROUP_S500',
    region_sanado_hour_margin_DIESEL_GROUP_S500: 'region_sanado_hour_margin_DIESEL_GROUP_S500',
    region_sanado_margin_DIESEL_GROUP_S500: 'region_sanado_margin_DIESEL_GROUP_S500',
    region_type_margin_DIESEL_GROUP_S500: 'region_type_margin_DIESEL_GROUP_S500',
    verification_hour_margin_DIESEL_GROUP_S500: 'verification_hour_margin_DIESEL_GROUP_S500',
    region_margin_ETANOL_COMUM: 'region_margin_ETANOL_COMUM',
    region_sanado_hour_ETANOL_COMUM: 'region_sanado_hour_ETANOL_COMUM',
    region_sanado_margin_ETANOL_COMUM: 'region_sanado_margin_ETANOL_COMUM',
    region_type_margin_ETANOL_COMUM: 'region_type_margin_ETANOL_COMUM',
    verification_hour_margin_ETANOL_COMUM: 'verification_hour_margin_ETANOL_COMUM'
  };

  export type Region_setvariablesScalarFieldEnum = (typeof Region_setvariablesScalarFieldEnum)[keyof typeof Region_setvariablesScalarFieldEnum]


  export const RegionsScalarFieldEnum: {
    regions_uuid: 'regions_uuid',
    regions_name: 'regions_name',
    regions_types: 'regions_types',
    region_created_at: 'region_created_at',
    region_updated_at: 'region_updated_at',
    regions_margin_GC: 'regions_margin_GC',
    regions_margin_GASOLINA_PODIUM: 'regions_margin_GASOLINA_PODIUM',
    regions_margin_GASOLINA_PREMIUM: 'regions_margin_GASOLINA_PREMIUM',
    regions_margin_DIESEL_GROUP: 'regions_margin_DIESEL_GROUP',
    regions_margin_DIESEL_GROUP_S500: 'regions_margin_DIESEL_GROUP_S500',
    regions_margin_ETANOL_COMUM: 'regions_margin_ETANOL_COMUM'
  };

  export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum]


  export const Big_numbers_valuesScalarFieldEnum: {
    bignumbers_uuid: 'bignumbers_uuid',
    bignumbers_sumliterage: 'bignumbers_sumliterage',
    bignumbers_invoicing: 'bignumbers_invoicing',
    bignumbers_Supplies: 'bignumbers_Supplies',
    bignumbers_fuelSales: 'bignumbers_fuelSales',
    bignumbers_fuelProfit: 'bignumbers_fuelProfit',
    bignumbers_productSales: 'bignumbers_productSales',
    bignumbers_productProfit: 'bignumbers_productProfit',
    bignumbers_dailyProductProfit: 'bignumbers_dailyProductProfit',
    bignumbers_dailyLiterageProfit: 'bignumbers_dailyLiterageProfit'
  };

  export type Big_numbers_valuesScalarFieldEnum = (typeof Big_numbers_valuesScalarFieldEnum)[keyof typeof Big_numbers_valuesScalarFieldEnum]


  export const Gallon_gross_historyScalarFieldEnum: {
    gallon_history_uuid: 'gallon_history_uuid',
    ibm_info_id: 'ibm_info_id',
    use_uuid: 'use_uuid',
    gallon_history_gross: 'gallon_history_gross',
    gallon_history_date: 'gallon_history_date',
    gallon_history_created_at: 'gallon_history_created_at',
    gallon_history_updated_at: 'gallon_history_updated_at'
  };

  export type Gallon_gross_historyScalarFieldEnum = (typeof Gallon_gross_historyScalarFieldEnum)[keyof typeof Gallon_gross_historyScalarFieldEnum]


  export const Product_gross_historyScalarFieldEnum: {
    product_history_uuid: 'product_history_uuid',
    ibm_info_id: 'ibm_info_id',
    use_uuid: 'use_uuid',
    product_history_gross: 'product_history_gross',
    product_history_date: 'product_history_date',
    product_history_created_at: 'product_history_created_at',
    product_history_updated_at: 'product_history_updated_at'
  };

  export type Product_gross_historyScalarFieldEnum = (typeof Product_gross_historyScalarFieldEnum)[keyof typeof Product_gross_historyScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


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
    endereco?: StringNullableFilter<"ibm_info"> | string | null
    regional?: StringNullableFilter<"ibm_info"> | string | null
    ibm_margin_GC?: FloatNullableListFilter<"ibm_info">
    ibm_margin_GASOLINA_PODIUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_GASOLINA_PREMIUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_DIESEL_GROUP?: FloatNullableListFilter<"ibm_info">
    ibm_margin_DIESEL_GROUP_S500?: FloatNullableListFilter<"ibm_info">
    ibm_margin_ETANOL_COMUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_TOTAL_PRODUCT?: FloatNullableListFilter<"ibm_info">
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: FloatNullableListFilter<"ibm_info">
    ibm_margin_FILTROS_AR_PRODUCT?: FloatNullableListFilter<"ibm_info">
    gallon_gross_history?: Gallon_gross_historyListRelationFilter
    gas_station_setvariables?: Gas_station_setvariablesListRelationFilter
    product_gross_history?: Product_gross_historyListRelationFilter
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
    endereco?: SortOrderInput | SortOrder
    regional?: SortOrderInput | SortOrder
    ibm_margin_GC?: SortOrder
    ibm_margin_GASOLINA_PODIUM?: SortOrder
    ibm_margin_GASOLINA_PREMIUM?: SortOrder
    ibm_margin_DIESEL_GROUP?: SortOrder
    ibm_margin_DIESEL_GROUP_S500?: SortOrder
    ibm_margin_ETANOL_COMUM?: SortOrder
    ibm_margin_TOTAL_PRODUCT?: SortOrder
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    ibm_margin_FILTROS_AR_PRODUCT?: SortOrder
    gallon_gross_history?: gallon_gross_historyOrderByRelationAggregateInput
    gas_station_setvariables?: gas_station_setvariablesOrderByRelationAggregateInput
    product_gross_history?: product_gross_historyOrderByRelationAggregateInput
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
    endereco?: StringNullableFilter<"ibm_info"> | string | null
    regional?: StringNullableFilter<"ibm_info"> | string | null
    ibm_margin_GC?: FloatNullableListFilter<"ibm_info">
    ibm_margin_GASOLINA_PODIUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_GASOLINA_PREMIUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_DIESEL_GROUP?: FloatNullableListFilter<"ibm_info">
    ibm_margin_DIESEL_GROUP_S500?: FloatNullableListFilter<"ibm_info">
    ibm_margin_ETANOL_COMUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_TOTAL_PRODUCT?: FloatNullableListFilter<"ibm_info">
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: FloatNullableListFilter<"ibm_info">
    ibm_margin_FILTROS_AR_PRODUCT?: FloatNullableListFilter<"ibm_info">
    gallon_gross_history?: Gallon_gross_historyListRelationFilter
    gas_station_setvariables?: Gas_station_setvariablesListRelationFilter
    product_gross_history?: Product_gross_historyListRelationFilter
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
    endereco?: SortOrderInput | SortOrder
    regional?: SortOrderInput | SortOrder
    ibm_margin_GC?: SortOrder
    ibm_margin_GASOLINA_PODIUM?: SortOrder
    ibm_margin_GASOLINA_PREMIUM?: SortOrder
    ibm_margin_DIESEL_GROUP?: SortOrder
    ibm_margin_DIESEL_GROUP_S500?: SortOrder
    ibm_margin_ETANOL_COMUM?: SortOrder
    ibm_margin_TOTAL_PRODUCT?: SortOrder
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    ibm_margin_FILTROS_AR_PRODUCT?: SortOrder
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
    endereco?: StringNullableWithAggregatesFilter<"ibm_info"> | string | null
    regional?: StringNullableWithAggregatesFilter<"ibm_info"> | string | null
    ibm_margin_GC?: FloatNullableListFilter<"ibm_info">
    ibm_margin_GASOLINA_PODIUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_GASOLINA_PREMIUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_DIESEL_GROUP?: FloatNullableListFilter<"ibm_info">
    ibm_margin_DIESEL_GROUP_S500?: FloatNullableListFilter<"ibm_info">
    ibm_margin_ETANOL_COMUM?: FloatNullableListFilter<"ibm_info">
    ibm_margin_TOTAL_PRODUCT?: FloatNullableListFilter<"ibm_info">
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: FloatNullableListFilter<"ibm_info">
    ibm_margin_FILTROS_AR_PRODUCT?: FloatNullableListFilter<"ibm_info">
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
    use_level?: StringNullableFilter<"users"> | string | null
    use_whats_app?: StringNullableListFilter<"users">
    use_mlt?: FloatNullableFilter<"users"> | number | null
    use_tmc?: FloatNullableFilter<"users"> | number | null
    use_tmf?: FloatNullableFilter<"users"> | number | null
    use_tmp?: FloatNullableFilter<"users"> | number | null
    use_tmvol?: FloatNullableFilter<"users"> | number | null
    use_lucro_bruto_operacional_galonagem?: FloatNullableFilter<"users"> | number | null
    use_lucro_bruto_operacional_produto?: FloatNullableFilter<"users"> | number | null
    use_lucro_bruto_operacional?: FloatNullableFilter<"users"> | number | null
    use_ETANOL_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    use_GASOLINA_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    gallon_gross_history?: Gallon_gross_historyListRelationFilter
    gas_station_setvariables?: Gas_station_setvariablesListRelationFilter
    product_gross_history?: Product_gross_historyListRelationFilter
    region_setvariables?: Region_setvariablesListRelationFilter
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
    use_level?: SortOrderInput | SortOrder
    use_whats_app?: SortOrder
    use_mlt?: SortOrderInput | SortOrder
    use_tmc?: SortOrderInput | SortOrder
    use_tmf?: SortOrderInput | SortOrder
    use_tmp?: SortOrderInput | SortOrder
    use_tmvol?: SortOrderInput | SortOrder
    use_lucro_bruto_operacional_galonagem?: SortOrderInput | SortOrder
    use_lucro_bruto_operacional_produto?: SortOrderInput | SortOrder
    use_lucro_bruto_operacional?: SortOrderInput | SortOrder
    use_ETANOL_COMUM_comb?: SortOrderInput | SortOrder
    use_GASOLINA_COMUM_comb?: SortOrderInput | SortOrder
    use_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrderInput | SortOrder
    use_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrderInput | SortOrder
    gallon_gross_history?: gallon_gross_historyOrderByRelationAggregateInput
    gas_station_setvariables?: gas_station_setvariablesOrderByRelationAggregateInput
    product_gross_history?: product_gross_historyOrderByRelationAggregateInput
    region_setvariables?: region_setvariablesOrderByRelationAggregateInput
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
    use_level?: StringNullableFilter<"users"> | string | null
    use_whats_app?: StringNullableListFilter<"users">
    use_mlt?: FloatNullableFilter<"users"> | number | null
    use_tmc?: FloatNullableFilter<"users"> | number | null
    use_tmf?: FloatNullableFilter<"users"> | number | null
    use_tmp?: FloatNullableFilter<"users"> | number | null
    use_tmvol?: FloatNullableFilter<"users"> | number | null
    use_lucro_bruto_operacional_galonagem?: FloatNullableFilter<"users"> | number | null
    use_lucro_bruto_operacional_produto?: FloatNullableFilter<"users"> | number | null
    use_lucro_bruto_operacional?: FloatNullableFilter<"users"> | number | null
    use_ETANOL_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    use_GASOLINA_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"users"> | number | null
    gallon_gross_history?: Gallon_gross_historyListRelationFilter
    gas_station_setvariables?: Gas_station_setvariablesListRelationFilter
    product_gross_history?: Product_gross_historyListRelationFilter
    region_setvariables?: Region_setvariablesListRelationFilter
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
    use_level?: SortOrderInput | SortOrder
    use_whats_app?: SortOrder
    use_mlt?: SortOrderInput | SortOrder
    use_tmc?: SortOrderInput | SortOrder
    use_tmf?: SortOrderInput | SortOrder
    use_tmp?: SortOrderInput | SortOrder
    use_tmvol?: SortOrderInput | SortOrder
    use_lucro_bruto_operacional_galonagem?: SortOrderInput | SortOrder
    use_lucro_bruto_operacional_produto?: SortOrderInput | SortOrder
    use_lucro_bruto_operacional?: SortOrderInput | SortOrder
    use_ETANOL_COMUM_comb?: SortOrderInput | SortOrder
    use_GASOLINA_COMUM_comb?: SortOrderInput | SortOrder
    use_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrderInput | SortOrder
    use_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrderInput | SortOrder
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
    use_level?: StringNullableWithAggregatesFilter<"users"> | string | null
    use_whats_app?: StringNullableListFilter<"users">
    use_mlt?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_tmc?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_tmf?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_tmp?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_tmvol?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_lucro_bruto_operacional_galonagem?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_lucro_bruto_operacional_produto?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_lucro_bruto_operacional?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_ETANOL_COMUM_comb?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_GASOLINA_COMUM_comb?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableWithAggregatesFilter<"users"> | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableWithAggregatesFilter<"users"> | number | null
  }

  export type gas_station_setvariablesWhereInput = {
    AND?: gas_station_setvariablesWhereInput | gas_station_setvariablesWhereInput[]
    OR?: gas_station_setvariablesWhereInput[]
    NOT?: gas_station_setvariablesWhereInput | gas_station_setvariablesWhereInput[]
    gas_station_uuid?: UuidFilter<"gas_station_setvariables"> | string
    gas_station_marginGC?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_type_marginGC?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_whats_app?: StringNullableListFilter<"gas_station_setvariables">
    gas_station_created_at?: DateTimeFilter<"gas_station_setvariables"> | Date | string
    gas_station_updated_at?: DateTimeFilter<"gas_station_setvariables"> | Date | string
    ibm_info_id?: UuidNullableFilter<"gas_station_setvariables"> | string | null
    use_uuid?: UuidNullableFilter<"gas_station_setvariables"> | string | null
    verification_msg_sent?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_hour_marginGC?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_marginGC?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_margin_MLT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TMP?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_MLT_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMC_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMF_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMP_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMVOL_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_ETANOL_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_GASOLINA_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_DIESEL_GROUP?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ETANOL_COMUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_invoice_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_comb_daily?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod_daily?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TOTAL_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_freight_value?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_literage?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_product?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    ibm_info?: XOR<Ibm_infoNullableRelationFilter, ibm_infoWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type gas_station_setvariablesOrderByWithRelationInput = {
    gas_station_uuid?: SortOrder
    gas_station_marginGC?: SortOrderInput | SortOrder
    gas_station_type_marginGC?: SortOrderInput | SortOrder
    gas_station_whats_app?: SortOrder
    gas_station_created_at?: SortOrder
    gas_station_updated_at?: SortOrder
    ibm_info_id?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    verification_msg_sent?: SortOrderInput | SortOrder
    verification_hour_marginGC?: SortOrderInput | SortOrder
    gas_station_sanado_hour_marginGC?: SortOrderInput | SortOrder
    gas_station_sanado_marginGC?: SortOrderInput | SortOrder
    gas_station_margin_MLT?: SortOrderInput | SortOrder
    gas_station_margin_TMP?: SortOrderInput | SortOrder
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrderInput | SortOrder
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrderInput | SortOrder
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrderInput | SortOrder
    gas_station_MLT_modal?: SortOrderInput | SortOrder
    gas_station_TMC_modal?: SortOrderInput | SortOrder
    gas_station_TMF_modal?: SortOrderInput | SortOrder
    gas_station_TMP_modal?: SortOrderInput | SortOrder
    gas_station_TMVOL_modal?: SortOrderInput | SortOrder
    gas_station_ETANOL_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_GASOLINA_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_sanado_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_type_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_sanado_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_type_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_sanado_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_type_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_sanado_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_type_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_sanado_hour_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_sanado_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_type_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_invoice_comb?: SortOrderInput | SortOrder
    gas_station_invoice_prod?: SortOrderInput | SortOrder
    gas_station_invoice_comb_daily?: SortOrderInput | SortOrder
    gas_station_invoice_prod_daily?: SortOrderInput | SortOrder
    gas_station_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_type_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    verification_hour_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_freight_value?: SortOrderInput | SortOrder
    gas_station_gross_result_literage?: SortOrderInput | SortOrder
    gas_station_gross_result_product?: SortOrderInput | SortOrder
    gas_station_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    gas_station_type_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    verification_hour_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    ibm_info?: ibm_infoOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type gas_station_setvariablesWhereUniqueInput = Prisma.AtLeast<{
    gas_station_uuid?: string
    AND?: gas_station_setvariablesWhereInput | gas_station_setvariablesWhereInput[]
    OR?: gas_station_setvariablesWhereInput[]
    NOT?: gas_station_setvariablesWhereInput | gas_station_setvariablesWhereInput[]
    gas_station_marginGC?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_type_marginGC?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_whats_app?: StringNullableListFilter<"gas_station_setvariables">
    gas_station_created_at?: DateTimeFilter<"gas_station_setvariables"> | Date | string
    gas_station_updated_at?: DateTimeFilter<"gas_station_setvariables"> | Date | string
    ibm_info_id?: UuidNullableFilter<"gas_station_setvariables"> | string | null
    use_uuid?: UuidNullableFilter<"gas_station_setvariables"> | string | null
    verification_msg_sent?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_hour_marginGC?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_marginGC?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_margin_MLT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TMP?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_MLT_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMC_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMF_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMP_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMVOL_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_ETANOL_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_GASOLINA_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_DIESEL_GROUP?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ETANOL_COMUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_invoice_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_comb_daily?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod_daily?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TOTAL_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_freight_value?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_literage?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_product?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    ibm_info?: XOR<Ibm_infoNullableRelationFilter, ibm_infoWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "gas_station_uuid">

  export type gas_station_setvariablesOrderByWithAggregationInput = {
    gas_station_uuid?: SortOrder
    gas_station_marginGC?: SortOrderInput | SortOrder
    gas_station_type_marginGC?: SortOrderInput | SortOrder
    gas_station_whats_app?: SortOrder
    gas_station_created_at?: SortOrder
    gas_station_updated_at?: SortOrder
    ibm_info_id?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    verification_msg_sent?: SortOrderInput | SortOrder
    verification_hour_marginGC?: SortOrderInput | SortOrder
    gas_station_sanado_hour_marginGC?: SortOrderInput | SortOrder
    gas_station_sanado_marginGC?: SortOrderInput | SortOrder
    gas_station_margin_MLT?: SortOrderInput | SortOrder
    gas_station_margin_TMP?: SortOrderInput | SortOrder
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrderInput | SortOrder
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrderInput | SortOrder
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrderInput | SortOrder
    gas_station_MLT_modal?: SortOrderInput | SortOrder
    gas_station_TMC_modal?: SortOrderInput | SortOrder
    gas_station_TMF_modal?: SortOrderInput | SortOrder
    gas_station_TMP_modal?: SortOrderInput | SortOrder
    gas_station_TMVOL_modal?: SortOrderInput | SortOrder
    gas_station_ETANOL_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_GASOLINA_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrderInput | SortOrder
    gas_station_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_sanado_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_type_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    gas_station_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_sanado_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_type_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    gas_station_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_sanado_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_type_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    gas_station_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_sanado_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_type_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    gas_station_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_sanado_hour_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_sanado_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_type_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    gas_station_invoice_comb?: SortOrderInput | SortOrder
    gas_station_invoice_prod?: SortOrderInput | SortOrder
    gas_station_invoice_comb_daily?: SortOrderInput | SortOrder
    gas_station_invoice_prod_daily?: SortOrderInput | SortOrder
    gas_station_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_type_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    verification_hour_margin_TOTAL_PRODUCT?: SortOrderInput | SortOrder
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrderInput | SortOrder
    gas_station_freight_value?: SortOrderInput | SortOrder
    gas_station_gross_result_literage?: SortOrderInput | SortOrder
    gas_station_gross_result_product?: SortOrderInput | SortOrder
    gas_station_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    gas_station_type_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    verification_hour_margin_FILTROS_AR_PRODUCT?: SortOrderInput | SortOrder
    _count?: gas_station_setvariablesCountOrderByAggregateInput
    _avg?: gas_station_setvariablesAvgOrderByAggregateInput
    _max?: gas_station_setvariablesMaxOrderByAggregateInput
    _min?: gas_station_setvariablesMinOrderByAggregateInput
    _sum?: gas_station_setvariablesSumOrderByAggregateInput
  }

  export type gas_station_setvariablesScalarWhereWithAggregatesInput = {
    AND?: gas_station_setvariablesScalarWhereWithAggregatesInput | gas_station_setvariablesScalarWhereWithAggregatesInput[]
    OR?: gas_station_setvariablesScalarWhereWithAggregatesInput[]
    NOT?: gas_station_setvariablesScalarWhereWithAggregatesInput | gas_station_setvariablesScalarWhereWithAggregatesInput[]
    gas_station_uuid?: UuidWithAggregatesFilter<"gas_station_setvariables"> | string
    gas_station_marginGC?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_type_marginGC?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_whats_app?: StringNullableListFilter<"gas_station_setvariables">
    gas_station_created_at?: DateTimeWithAggregatesFilter<"gas_station_setvariables"> | Date | string
    gas_station_updated_at?: DateTimeWithAggregatesFilter<"gas_station_setvariables"> | Date | string
    ibm_info_id?: UuidNullableWithAggregatesFilter<"gas_station_setvariables"> | string | null
    use_uuid?: UuidNullableWithAggregatesFilter<"gas_station_setvariables"> | string | null
    verification_msg_sent?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_hour_marginGC?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_marginGC?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_margin_MLT?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TMP?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_MLT_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_TMC_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_TMF_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_TMP_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_TMVOL_modal?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_ETANOL_COMUM_comb?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_GASOLINA_COMUM_comb?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_DIESEL_GROUP?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ETANOL_COMUM?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_invoice_comb?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_comb_daily?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod_daily?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TOTAL_PRODUCT?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_freight_value?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_literage?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_product?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: FloatNullableWithAggregatesFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: BoolNullableWithAggregatesFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableWithAggregatesFilter<"gas_station_setvariables"> | Date | string | null
  }

  export type region_setvariablesWhereInput = {
    AND?: region_setvariablesWhereInput | region_setvariablesWhereInput[]
    OR?: region_setvariablesWhereInput[]
    NOT?: region_setvariablesWhereInput | region_setvariablesWhereInput[]
    region_uuid?: UuidFilter<"region_setvariables"> | string
    region_marginGC?: FloatNullableFilter<"region_setvariables"> | number | null
    region_type_marginGC?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_whats_app?: StringNullableListFilter<"region_setvariables">
    region_station_created_at?: DateTimeFilter<"region_setvariables"> | Date | string
    region_station_updated_at?: DateTimeFilter<"region_setvariables"> | Date | string
    use_uuid?: UuidNullableFilter<"region_setvariables"> | string | null
    regions_uuid?: UuidNullableFilter<"region_setvariables"> | string | null
    verification_msg_sent?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_marginGC?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_marginGC?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_station_ETANOL_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_GASOLINA_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_MLT_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMC_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMF_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMP_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMVOL_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_margin_DIESEL_GROUP?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PODIUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_GASOLINA_PODIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PODIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PREMIUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_DIESEL_GROUP_S500?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_ETANOL_COMUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_ETANOL_COMUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_ETANOL_COMUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    regions?: XOR<RegionsNullableRelationFilter, regionsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type region_setvariablesOrderByWithRelationInput = {
    region_uuid?: SortOrder
    region_marginGC?: SortOrderInput | SortOrder
    region_type_marginGC?: SortOrderInput | SortOrder
    region_whats_app?: SortOrder
    region_station_created_at?: SortOrder
    region_station_updated_at?: SortOrder
    use_uuid?: SortOrderInput | SortOrder
    regions_uuid?: SortOrderInput | SortOrder
    verification_msg_sent?: SortOrderInput | SortOrder
    verification_hour_marginGC?: SortOrderInput | SortOrder
    region_sanado_hour_marginGC?: SortOrderInput | SortOrder
    region_sanado_marginGC?: SortOrderInput | SortOrder
    region_station_ETANOL_COMUM_comb?: SortOrderInput | SortOrder
    region_station_GASOLINA_COMUM_comb?: SortOrderInput | SortOrder
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrderInput | SortOrder
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrderInput | SortOrder
    region_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrderInput | SortOrder
    region_station_MLT_modal?: SortOrderInput | SortOrder
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrderInput | SortOrder
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrderInput | SortOrder
    region_station_TMC_modal?: SortOrderInput | SortOrder
    region_station_TMF_modal?: SortOrderInput | SortOrder
    region_station_TMP_modal?: SortOrderInput | SortOrder
    region_station_TMVOL_modal?: SortOrderInput | SortOrder
    region_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_sanado_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_sanado_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_type_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_sanado_hour_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_sanado_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_type_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_sanado_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_type_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_sanado_hour_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_sanado_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_type_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    region_sanado_hour_ETANOL_COMUM?: SortOrderInput | SortOrder
    region_sanado_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    region_type_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    regions?: regionsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type region_setvariablesWhereUniqueInput = Prisma.AtLeast<{
    region_uuid?: string
    AND?: region_setvariablesWhereInput | region_setvariablesWhereInput[]
    OR?: region_setvariablesWhereInput[]
    NOT?: region_setvariablesWhereInput | region_setvariablesWhereInput[]
    region_marginGC?: FloatNullableFilter<"region_setvariables"> | number | null
    region_type_marginGC?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_whats_app?: StringNullableListFilter<"region_setvariables">
    region_station_created_at?: DateTimeFilter<"region_setvariables"> | Date | string
    region_station_updated_at?: DateTimeFilter<"region_setvariables"> | Date | string
    use_uuid?: UuidNullableFilter<"region_setvariables"> | string | null
    regions_uuid?: UuidNullableFilter<"region_setvariables"> | string | null
    verification_msg_sent?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_marginGC?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_marginGC?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_station_ETANOL_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_GASOLINA_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_MLT_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMC_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMF_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMP_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMVOL_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_margin_DIESEL_GROUP?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PODIUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_GASOLINA_PODIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PODIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PREMIUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_DIESEL_GROUP_S500?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_ETANOL_COMUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_ETANOL_COMUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_ETANOL_COMUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    regions?: XOR<RegionsNullableRelationFilter, regionsWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "region_uuid">

  export type region_setvariablesOrderByWithAggregationInput = {
    region_uuid?: SortOrder
    region_marginGC?: SortOrderInput | SortOrder
    region_type_marginGC?: SortOrderInput | SortOrder
    region_whats_app?: SortOrder
    region_station_created_at?: SortOrder
    region_station_updated_at?: SortOrder
    use_uuid?: SortOrderInput | SortOrder
    regions_uuid?: SortOrderInput | SortOrder
    verification_msg_sent?: SortOrderInput | SortOrder
    verification_hour_marginGC?: SortOrderInput | SortOrder
    region_sanado_hour_marginGC?: SortOrderInput | SortOrder
    region_sanado_marginGC?: SortOrderInput | SortOrder
    region_station_ETANOL_COMUM_comb?: SortOrderInput | SortOrder
    region_station_GASOLINA_COMUM_comb?: SortOrderInput | SortOrder
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrderInput | SortOrder
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrderInput | SortOrder
    region_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrderInput | SortOrder
    region_station_MLT_modal?: SortOrderInput | SortOrder
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrderInput | SortOrder
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrderInput | SortOrder
    region_station_TMC_modal?: SortOrderInput | SortOrder
    region_station_TMF_modal?: SortOrderInput | SortOrder
    region_station_TMP_modal?: SortOrderInput | SortOrder
    region_station_TMVOL_modal?: SortOrderInput | SortOrder
    region_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_sanado_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_sanado_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_type_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrderInput | SortOrder
    region_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_sanado_hour_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_sanado_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_type_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrderInput | SortOrder
    region_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_sanado_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_type_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_sanado_hour_GASOLINA_PREMIUM?: SortOrderInput | SortOrder
    region_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_sanado_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_type_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrderInput | SortOrder
    region_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    region_sanado_hour_ETANOL_COMUM?: SortOrderInput | SortOrder
    region_sanado_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    region_type_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrderInput | SortOrder
    _count?: region_setvariablesCountOrderByAggregateInput
    _avg?: region_setvariablesAvgOrderByAggregateInput
    _max?: region_setvariablesMaxOrderByAggregateInput
    _min?: region_setvariablesMinOrderByAggregateInput
    _sum?: region_setvariablesSumOrderByAggregateInput
  }

  export type region_setvariablesScalarWhereWithAggregatesInput = {
    AND?: region_setvariablesScalarWhereWithAggregatesInput | region_setvariablesScalarWhereWithAggregatesInput[]
    OR?: region_setvariablesScalarWhereWithAggregatesInput[]
    NOT?: region_setvariablesScalarWhereWithAggregatesInput | region_setvariablesScalarWhereWithAggregatesInput[]
    region_uuid?: UuidWithAggregatesFilter<"region_setvariables"> | string
    region_marginGC?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_type_marginGC?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    region_whats_app?: StringNullableListFilter<"region_setvariables">
    region_station_created_at?: DateTimeWithAggregatesFilter<"region_setvariables"> | Date | string
    region_station_updated_at?: DateTimeWithAggregatesFilter<"region_setvariables"> | Date | string
    use_uuid?: UuidNullableWithAggregatesFilter<"region_setvariables"> | string | null
    regions_uuid?: UuidNullableWithAggregatesFilter<"region_setvariables"> | string | null
    verification_msg_sent?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_marginGC?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_marginGC?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    region_station_ETANOL_COMUM_comb?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_GASOLINA_COMUM_comb?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_MLT_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_TMC_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_TMF_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_TMP_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_station_TMVOL_modal?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_margin_DIESEL_GROUP?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PODIUM?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_sanado_hour_GASOLINA_PODIUM?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PODIUM?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PREMIUM?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_margin_DIESEL_GROUP_S500?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_margin_ETANOL_COMUM?: FloatNullableWithAggregatesFilter<"region_setvariables"> | number | null
    region_sanado_hour_ETANOL_COMUM?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    region_type_margin_ETANOL_COMUM?: BoolNullableWithAggregatesFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableWithAggregatesFilter<"region_setvariables"> | Date | string | null
  }

  export type regionsWhereInput = {
    AND?: regionsWhereInput | regionsWhereInput[]
    OR?: regionsWhereInput[]
    NOT?: regionsWhereInput | regionsWhereInput[]
    regions_uuid?: UuidFilter<"regions"> | string
    regions_name?: StringNullableFilter<"regions"> | string | null
    regions_types?: StringNullableFilter<"regions"> | string | null
    region_created_at?: DateTimeFilter<"regions"> | Date | string
    region_updated_at?: DateTimeFilter<"regions"> | Date | string
    regions_margin_GC?: FloatNullableListFilter<"regions">
    regions_margin_GASOLINA_PODIUM?: FloatNullableListFilter<"regions">
    regions_margin_GASOLINA_PREMIUM?: FloatNullableListFilter<"regions">
    regions_margin_DIESEL_GROUP?: FloatNullableListFilter<"regions">
    regions_margin_DIESEL_GROUP_S500?: FloatNullableListFilter<"regions">
    regions_margin_ETANOL_COMUM?: FloatNullableListFilter<"regions">
    region_setvariables?: Region_setvariablesListRelationFilter
  }

  export type regionsOrderByWithRelationInput = {
    regions_uuid?: SortOrder
    regions_name?: SortOrderInput | SortOrder
    regions_types?: SortOrderInput | SortOrder
    region_created_at?: SortOrder
    region_updated_at?: SortOrder
    regions_margin_GC?: SortOrder
    regions_margin_GASOLINA_PODIUM?: SortOrder
    regions_margin_GASOLINA_PREMIUM?: SortOrder
    regions_margin_DIESEL_GROUP?: SortOrder
    regions_margin_DIESEL_GROUP_S500?: SortOrder
    regions_margin_ETANOL_COMUM?: SortOrder
    region_setvariables?: region_setvariablesOrderByRelationAggregateInput
  }

  export type regionsWhereUniqueInput = Prisma.AtLeast<{
    regions_uuid?: string
    AND?: regionsWhereInput | regionsWhereInput[]
    OR?: regionsWhereInput[]
    NOT?: regionsWhereInput | regionsWhereInput[]
    regions_name?: StringNullableFilter<"regions"> | string | null
    regions_types?: StringNullableFilter<"regions"> | string | null
    region_created_at?: DateTimeFilter<"regions"> | Date | string
    region_updated_at?: DateTimeFilter<"regions"> | Date | string
    regions_margin_GC?: FloatNullableListFilter<"regions">
    regions_margin_GASOLINA_PODIUM?: FloatNullableListFilter<"regions">
    regions_margin_GASOLINA_PREMIUM?: FloatNullableListFilter<"regions">
    regions_margin_DIESEL_GROUP?: FloatNullableListFilter<"regions">
    regions_margin_DIESEL_GROUP_S500?: FloatNullableListFilter<"regions">
    regions_margin_ETANOL_COMUM?: FloatNullableListFilter<"regions">
    region_setvariables?: Region_setvariablesListRelationFilter
  }, "regions_uuid">

  export type regionsOrderByWithAggregationInput = {
    regions_uuid?: SortOrder
    regions_name?: SortOrderInput | SortOrder
    regions_types?: SortOrderInput | SortOrder
    region_created_at?: SortOrder
    region_updated_at?: SortOrder
    regions_margin_GC?: SortOrder
    regions_margin_GASOLINA_PODIUM?: SortOrder
    regions_margin_GASOLINA_PREMIUM?: SortOrder
    regions_margin_DIESEL_GROUP?: SortOrder
    regions_margin_DIESEL_GROUP_S500?: SortOrder
    regions_margin_ETANOL_COMUM?: SortOrder
    _count?: regionsCountOrderByAggregateInput
    _avg?: regionsAvgOrderByAggregateInput
    _max?: regionsMaxOrderByAggregateInput
    _min?: regionsMinOrderByAggregateInput
    _sum?: regionsSumOrderByAggregateInput
  }

  export type regionsScalarWhereWithAggregatesInput = {
    AND?: regionsScalarWhereWithAggregatesInput | regionsScalarWhereWithAggregatesInput[]
    OR?: regionsScalarWhereWithAggregatesInput[]
    NOT?: regionsScalarWhereWithAggregatesInput | regionsScalarWhereWithAggregatesInput[]
    regions_uuid?: UuidWithAggregatesFilter<"regions"> | string
    regions_name?: StringNullableWithAggregatesFilter<"regions"> | string | null
    regions_types?: StringNullableWithAggregatesFilter<"regions"> | string | null
    region_created_at?: DateTimeWithAggregatesFilter<"regions"> | Date | string
    region_updated_at?: DateTimeWithAggregatesFilter<"regions"> | Date | string
    regions_margin_GC?: FloatNullableListFilter<"regions">
    regions_margin_GASOLINA_PODIUM?: FloatNullableListFilter<"regions">
    regions_margin_GASOLINA_PREMIUM?: FloatNullableListFilter<"regions">
    regions_margin_DIESEL_GROUP?: FloatNullableListFilter<"regions">
    regions_margin_DIESEL_GROUP_S500?: FloatNullableListFilter<"regions">
    regions_margin_ETANOL_COMUM?: FloatNullableListFilter<"regions">
  }

  export type big_numbers_valuesWhereInput = {
    AND?: big_numbers_valuesWhereInput | big_numbers_valuesWhereInput[]
    OR?: big_numbers_valuesWhereInput[]
    NOT?: big_numbers_valuesWhereInput | big_numbers_valuesWhereInput[]
    bignumbers_uuid?: UuidFilter<"big_numbers_values"> | string
    bignumbers_sumliterage?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_invoicing?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_Supplies?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_fuelSales?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_fuelProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_productSales?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_productProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_dailyProductProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_dailyLiterageProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
  }

  export type big_numbers_valuesOrderByWithRelationInput = {
    bignumbers_uuid?: SortOrder
    bignumbers_sumliterage?: SortOrderInput | SortOrder
    bignumbers_invoicing?: SortOrderInput | SortOrder
    bignumbers_Supplies?: SortOrderInput | SortOrder
    bignumbers_fuelSales?: SortOrderInput | SortOrder
    bignumbers_fuelProfit?: SortOrderInput | SortOrder
    bignumbers_productSales?: SortOrderInput | SortOrder
    bignumbers_productProfit?: SortOrderInput | SortOrder
    bignumbers_dailyProductProfit?: SortOrderInput | SortOrder
    bignumbers_dailyLiterageProfit?: SortOrderInput | SortOrder
  }

  export type big_numbers_valuesWhereUniqueInput = Prisma.AtLeast<{
    bignumbers_uuid?: string
    AND?: big_numbers_valuesWhereInput | big_numbers_valuesWhereInput[]
    OR?: big_numbers_valuesWhereInput[]
    NOT?: big_numbers_valuesWhereInput | big_numbers_valuesWhereInput[]
    bignumbers_sumliterage?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_invoicing?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_Supplies?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_fuelSales?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_fuelProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_productSales?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_productProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_dailyProductProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
    bignumbers_dailyLiterageProfit?: FloatNullableFilter<"big_numbers_values"> | number | null
  }, "bignumbers_uuid">

  export type big_numbers_valuesOrderByWithAggregationInput = {
    bignumbers_uuid?: SortOrder
    bignumbers_sumliterage?: SortOrderInput | SortOrder
    bignumbers_invoicing?: SortOrderInput | SortOrder
    bignumbers_Supplies?: SortOrderInput | SortOrder
    bignumbers_fuelSales?: SortOrderInput | SortOrder
    bignumbers_fuelProfit?: SortOrderInput | SortOrder
    bignumbers_productSales?: SortOrderInput | SortOrder
    bignumbers_productProfit?: SortOrderInput | SortOrder
    bignumbers_dailyProductProfit?: SortOrderInput | SortOrder
    bignumbers_dailyLiterageProfit?: SortOrderInput | SortOrder
    _count?: big_numbers_valuesCountOrderByAggregateInput
    _avg?: big_numbers_valuesAvgOrderByAggregateInput
    _max?: big_numbers_valuesMaxOrderByAggregateInput
    _min?: big_numbers_valuesMinOrderByAggregateInput
    _sum?: big_numbers_valuesSumOrderByAggregateInput
  }

  export type big_numbers_valuesScalarWhereWithAggregatesInput = {
    AND?: big_numbers_valuesScalarWhereWithAggregatesInput | big_numbers_valuesScalarWhereWithAggregatesInput[]
    OR?: big_numbers_valuesScalarWhereWithAggregatesInput[]
    NOT?: big_numbers_valuesScalarWhereWithAggregatesInput | big_numbers_valuesScalarWhereWithAggregatesInput[]
    bignumbers_uuid?: UuidWithAggregatesFilter<"big_numbers_values"> | string
    bignumbers_sumliterage?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_invoicing?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_Supplies?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_fuelSales?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_fuelProfit?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_productSales?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_productProfit?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_dailyProductProfit?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
    bignumbers_dailyLiterageProfit?: FloatNullableWithAggregatesFilter<"big_numbers_values"> | number | null
  }

  export type gallon_gross_historyWhereInput = {
    AND?: gallon_gross_historyWhereInput | gallon_gross_historyWhereInput[]
    OR?: gallon_gross_historyWhereInput[]
    NOT?: gallon_gross_historyWhereInput | gallon_gross_historyWhereInput[]
    gallon_history_uuid?: UuidFilter<"gallon_gross_history"> | string
    ibm_info_id?: UuidNullableFilter<"gallon_gross_history"> | string | null
    use_uuid?: UuidNullableFilter<"gallon_gross_history"> | string | null
    gallon_history_gross?: FloatNullableFilter<"gallon_gross_history"> | number | null
    gallon_history_date?: DateTimeNullableFilter<"gallon_gross_history"> | Date | string | null
    gallon_history_created_at?: DateTimeFilter<"gallon_gross_history"> | Date | string
    gallon_history_updated_at?: DateTimeFilter<"gallon_gross_history"> | Date | string
    ibm_info?: XOR<Ibm_infoNullableRelationFilter, ibm_infoWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type gallon_gross_historyOrderByWithRelationInput = {
    gallon_history_uuid?: SortOrder
    ibm_info_id?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    gallon_history_gross?: SortOrderInput | SortOrder
    gallon_history_date?: SortOrderInput | SortOrder
    gallon_history_created_at?: SortOrder
    gallon_history_updated_at?: SortOrder
    ibm_info?: ibm_infoOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type gallon_gross_historyWhereUniqueInput = Prisma.AtLeast<{
    gallon_history_uuid?: string
    AND?: gallon_gross_historyWhereInput | gallon_gross_historyWhereInput[]
    OR?: gallon_gross_historyWhereInput[]
    NOT?: gallon_gross_historyWhereInput | gallon_gross_historyWhereInput[]
    ibm_info_id?: UuidNullableFilter<"gallon_gross_history"> | string | null
    use_uuid?: UuidNullableFilter<"gallon_gross_history"> | string | null
    gallon_history_gross?: FloatNullableFilter<"gallon_gross_history"> | number | null
    gallon_history_date?: DateTimeNullableFilter<"gallon_gross_history"> | Date | string | null
    gallon_history_created_at?: DateTimeFilter<"gallon_gross_history"> | Date | string
    gallon_history_updated_at?: DateTimeFilter<"gallon_gross_history"> | Date | string
    ibm_info?: XOR<Ibm_infoNullableRelationFilter, ibm_infoWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "gallon_history_uuid">

  export type gallon_gross_historyOrderByWithAggregationInput = {
    gallon_history_uuid?: SortOrder
    ibm_info_id?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    gallon_history_gross?: SortOrderInput | SortOrder
    gallon_history_date?: SortOrderInput | SortOrder
    gallon_history_created_at?: SortOrder
    gallon_history_updated_at?: SortOrder
    _count?: gallon_gross_historyCountOrderByAggregateInput
    _avg?: gallon_gross_historyAvgOrderByAggregateInput
    _max?: gallon_gross_historyMaxOrderByAggregateInput
    _min?: gallon_gross_historyMinOrderByAggregateInput
    _sum?: gallon_gross_historySumOrderByAggregateInput
  }

  export type gallon_gross_historyScalarWhereWithAggregatesInput = {
    AND?: gallon_gross_historyScalarWhereWithAggregatesInput | gallon_gross_historyScalarWhereWithAggregatesInput[]
    OR?: gallon_gross_historyScalarWhereWithAggregatesInput[]
    NOT?: gallon_gross_historyScalarWhereWithAggregatesInput | gallon_gross_historyScalarWhereWithAggregatesInput[]
    gallon_history_uuid?: UuidWithAggregatesFilter<"gallon_gross_history"> | string
    ibm_info_id?: UuidNullableWithAggregatesFilter<"gallon_gross_history"> | string | null
    use_uuid?: UuidNullableWithAggregatesFilter<"gallon_gross_history"> | string | null
    gallon_history_gross?: FloatNullableWithAggregatesFilter<"gallon_gross_history"> | number | null
    gallon_history_date?: DateTimeNullableWithAggregatesFilter<"gallon_gross_history"> | Date | string | null
    gallon_history_created_at?: DateTimeWithAggregatesFilter<"gallon_gross_history"> | Date | string
    gallon_history_updated_at?: DateTimeWithAggregatesFilter<"gallon_gross_history"> | Date | string
  }

  export type product_gross_historyWhereInput = {
    AND?: product_gross_historyWhereInput | product_gross_historyWhereInput[]
    OR?: product_gross_historyWhereInput[]
    NOT?: product_gross_historyWhereInput | product_gross_historyWhereInput[]
    product_history_uuid?: UuidFilter<"product_gross_history"> | string
    ibm_info_id?: UuidNullableFilter<"product_gross_history"> | string | null
    use_uuid?: UuidNullableFilter<"product_gross_history"> | string | null
    product_history_gross?: FloatNullableFilter<"product_gross_history"> | number | null
    product_history_date?: DateTimeNullableFilter<"product_gross_history"> | Date | string | null
    product_history_created_at?: DateTimeFilter<"product_gross_history"> | Date | string
    product_history_updated_at?: DateTimeFilter<"product_gross_history"> | Date | string
    ibm_info?: XOR<Ibm_infoNullableRelationFilter, ibm_infoWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type product_gross_historyOrderByWithRelationInput = {
    product_history_uuid?: SortOrder
    ibm_info_id?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    product_history_gross?: SortOrderInput | SortOrder
    product_history_date?: SortOrderInput | SortOrder
    product_history_created_at?: SortOrder
    product_history_updated_at?: SortOrder
    ibm_info?: ibm_infoOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type product_gross_historyWhereUniqueInput = Prisma.AtLeast<{
    product_history_uuid?: string
    AND?: product_gross_historyWhereInput | product_gross_historyWhereInput[]
    OR?: product_gross_historyWhereInput[]
    NOT?: product_gross_historyWhereInput | product_gross_historyWhereInput[]
    ibm_info_id?: UuidNullableFilter<"product_gross_history"> | string | null
    use_uuid?: UuidNullableFilter<"product_gross_history"> | string | null
    product_history_gross?: FloatNullableFilter<"product_gross_history"> | number | null
    product_history_date?: DateTimeNullableFilter<"product_gross_history"> | Date | string | null
    product_history_created_at?: DateTimeFilter<"product_gross_history"> | Date | string
    product_history_updated_at?: DateTimeFilter<"product_gross_history"> | Date | string
    ibm_info?: XOR<Ibm_infoNullableRelationFilter, ibm_infoWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "product_history_uuid">

  export type product_gross_historyOrderByWithAggregationInput = {
    product_history_uuid?: SortOrder
    ibm_info_id?: SortOrderInput | SortOrder
    use_uuid?: SortOrderInput | SortOrder
    product_history_gross?: SortOrderInput | SortOrder
    product_history_date?: SortOrderInput | SortOrder
    product_history_created_at?: SortOrder
    product_history_updated_at?: SortOrder
    _count?: product_gross_historyCountOrderByAggregateInput
    _avg?: product_gross_historyAvgOrderByAggregateInput
    _max?: product_gross_historyMaxOrderByAggregateInput
    _min?: product_gross_historyMinOrderByAggregateInput
    _sum?: product_gross_historySumOrderByAggregateInput
  }

  export type product_gross_historyScalarWhereWithAggregatesInput = {
    AND?: product_gross_historyScalarWhereWithAggregatesInput | product_gross_historyScalarWhereWithAggregatesInput[]
    OR?: product_gross_historyScalarWhereWithAggregatesInput[]
    NOT?: product_gross_historyScalarWhereWithAggregatesInput | product_gross_historyScalarWhereWithAggregatesInput[]
    product_history_uuid?: UuidWithAggregatesFilter<"product_gross_history"> | string
    ibm_info_id?: UuidNullableWithAggregatesFilter<"product_gross_history"> | string | null
    use_uuid?: UuidNullableWithAggregatesFilter<"product_gross_history"> | string | null
    product_history_gross?: FloatNullableWithAggregatesFilter<"product_gross_history"> | number | null
    product_history_date?: DateTimeNullableWithAggregatesFilter<"product_gross_history"> | Date | string | null
    product_history_created_at?: DateTimeWithAggregatesFilter<"product_gross_history"> | Date | string
    product_history_updated_at?: DateTimeWithAggregatesFilter<"product_gross_history"> | Date | string
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
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyCreateNestedManyWithoutIbm_infoInput
    gas_station_setvariables?: gas_station_setvariablesCreateNestedManyWithoutIbm_infoInput
    product_gross_history?: product_gross_historyCreateNestedManyWithoutIbm_infoInput
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
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedCreateNestedManyWithoutIbm_infoInput
    product_gross_history?: product_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput
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
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUpdateManyWithoutIbm_infoNestedInput
    gas_station_setvariables?: gas_station_setvariablesUpdateManyWithoutIbm_infoNestedInput
    product_gross_history?: product_gross_historyUpdateManyWithoutIbm_infoNestedInput
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
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedUpdateManyWithoutIbm_infoNestedInput
    product_gross_history?: product_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput
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
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
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
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
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
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
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
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyCreateNestedManyWithoutUsersInput
    gas_station_setvariables?: gas_station_setvariablesCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesCreateNestedManyWithoutUsersInput
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
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyUncheckedCreateNestedManyWithoutUsersInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyUncheckedCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesUncheckedCreateNestedManyWithoutUsersInput
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
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUpdateManyWithoutUsersNestedInput
    gas_station_setvariables?: gas_station_setvariablesUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUpdateManyWithoutUsersNestedInput
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
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
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
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
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
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
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
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type gas_station_setvariablesCreateInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    ibm_info?: ibm_infoCreateNestedOneWithoutGas_station_setvariablesInput
    users?: usersCreateNestedOneWithoutGas_station_setvariablesInput
  }

  export type gas_station_setvariablesUncheckedCreateInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    ibm_info_id?: string | null
    use_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
  }

  export type gas_station_setvariablesUpdateInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ibm_info?: ibm_infoUpdateOneWithoutGas_station_setvariablesNestedInput
    users?: usersUpdateOneWithoutGas_station_setvariablesNestedInput
  }

  export type gas_station_setvariablesUncheckedUpdateInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gas_station_setvariablesCreateManyInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    ibm_info_id?: string | null
    use_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
  }

  export type gas_station_setvariablesUpdateManyMutationInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gas_station_setvariablesUncheckedUpdateManyInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type region_setvariablesCreateInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    regions?: regionsCreateNestedOneWithoutRegion_setvariablesInput
    users?: usersCreateNestedOneWithoutRegion_setvariablesInput
  }

  export type region_setvariablesUncheckedCreateInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    use_uuid?: string | null
    regions_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
  }

  export type region_setvariablesUpdateInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regions?: regionsUpdateOneWithoutRegion_setvariablesNestedInput
    users?: usersUpdateOneWithoutRegion_setvariablesNestedInput
  }

  export type region_setvariablesUncheckedUpdateInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    regions_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type region_setvariablesCreateManyInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    use_uuid?: string | null
    regions_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
  }

  export type region_setvariablesUpdateManyMutationInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type region_setvariablesUncheckedUpdateManyInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    regions_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type regionsCreateInput = {
    regions_uuid?: string
    regions_name?: string | null
    regions_types?: string | null
    region_created_at?: Date | string
    region_updated_at?: Date | string
    regions_margin_GC?: regionsCreateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsCreateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsCreateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsCreateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsCreateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsCreateregions_margin_ETANOL_COMUMInput | number[]
    region_setvariables?: region_setvariablesCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateInput = {
    regions_uuid?: string
    regions_name?: string | null
    regions_types?: string | null
    region_created_at?: Date | string
    region_updated_at?: Date | string
    regions_margin_GC?: regionsCreateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsCreateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsCreateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsCreateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsCreateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsCreateregions_margin_ETANOL_COMUMInput | number[]
    region_setvariables?: region_setvariablesUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsUpdateInput = {
    regions_uuid?: StringFieldUpdateOperationsInput | string
    regions_name?: NullableStringFieldUpdateOperationsInput | string | null
    regions_types?: NullableStringFieldUpdateOperationsInput | string | null
    region_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_margin_GC?: regionsUpdateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsUpdateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsUpdateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsUpdateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsUpdateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsUpdateregions_margin_ETANOL_COMUMInput | number[]
    region_setvariables?: region_setvariablesUpdateManyWithoutRegionsNestedInput
  }

  export type regionsUncheckedUpdateInput = {
    regions_uuid?: StringFieldUpdateOperationsInput | string
    regions_name?: NullableStringFieldUpdateOperationsInput | string | null
    regions_types?: NullableStringFieldUpdateOperationsInput | string | null
    region_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_margin_GC?: regionsUpdateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsUpdateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsUpdateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsUpdateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsUpdateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsUpdateregions_margin_ETANOL_COMUMInput | number[]
    region_setvariables?: region_setvariablesUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type regionsCreateManyInput = {
    regions_uuid?: string
    regions_name?: string | null
    regions_types?: string | null
    region_created_at?: Date | string
    region_updated_at?: Date | string
    regions_margin_GC?: regionsCreateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsCreateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsCreateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsCreateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsCreateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsCreateregions_margin_ETANOL_COMUMInput | number[]
  }

  export type regionsUpdateManyMutationInput = {
    regions_uuid?: StringFieldUpdateOperationsInput | string
    regions_name?: NullableStringFieldUpdateOperationsInput | string | null
    regions_types?: NullableStringFieldUpdateOperationsInput | string | null
    region_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_margin_GC?: regionsUpdateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsUpdateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsUpdateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsUpdateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsUpdateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsUpdateregions_margin_ETANOL_COMUMInput | number[]
  }

  export type regionsUncheckedUpdateManyInput = {
    regions_uuid?: StringFieldUpdateOperationsInput | string
    regions_name?: NullableStringFieldUpdateOperationsInput | string | null
    regions_types?: NullableStringFieldUpdateOperationsInput | string | null
    region_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_margin_GC?: regionsUpdateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsUpdateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsUpdateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsUpdateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsUpdateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsUpdateregions_margin_ETANOL_COMUMInput | number[]
  }

  export type big_numbers_valuesCreateInput = {
    bignumbers_uuid?: string
    bignumbers_sumliterage?: number | null
    bignumbers_invoicing?: number | null
    bignumbers_Supplies?: number | null
    bignumbers_fuelSales?: number | null
    bignumbers_fuelProfit?: number | null
    bignumbers_productSales?: number | null
    bignumbers_productProfit?: number | null
    bignumbers_dailyProductProfit?: number | null
    bignumbers_dailyLiterageProfit?: number | null
  }

  export type big_numbers_valuesUncheckedCreateInput = {
    bignumbers_uuid?: string
    bignumbers_sumliterage?: number | null
    bignumbers_invoicing?: number | null
    bignumbers_Supplies?: number | null
    bignumbers_fuelSales?: number | null
    bignumbers_fuelProfit?: number | null
    bignumbers_productSales?: number | null
    bignumbers_productProfit?: number | null
    bignumbers_dailyProductProfit?: number | null
    bignumbers_dailyLiterageProfit?: number | null
  }

  export type big_numbers_valuesUpdateInput = {
    bignumbers_uuid?: StringFieldUpdateOperationsInput | string
    bignumbers_sumliterage?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_Supplies?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyProductProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyLiterageProfit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type big_numbers_valuesUncheckedUpdateInput = {
    bignumbers_uuid?: StringFieldUpdateOperationsInput | string
    bignumbers_sumliterage?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_Supplies?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyProductProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyLiterageProfit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type big_numbers_valuesCreateManyInput = {
    bignumbers_uuid?: string
    bignumbers_sumliterage?: number | null
    bignumbers_invoicing?: number | null
    bignumbers_Supplies?: number | null
    bignumbers_fuelSales?: number | null
    bignumbers_fuelProfit?: number | null
    bignumbers_productSales?: number | null
    bignumbers_productProfit?: number | null
    bignumbers_dailyProductProfit?: number | null
    bignumbers_dailyLiterageProfit?: number | null
  }

  export type big_numbers_valuesUpdateManyMutationInput = {
    bignumbers_uuid?: StringFieldUpdateOperationsInput | string
    bignumbers_sumliterage?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_Supplies?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyProductProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyLiterageProfit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type big_numbers_valuesUncheckedUpdateManyInput = {
    bignumbers_uuid?: StringFieldUpdateOperationsInput | string
    bignumbers_sumliterage?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_invoicing?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_Supplies?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_fuelProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productSales?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_productProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyProductProfit?: NullableFloatFieldUpdateOperationsInput | number | null
    bignumbers_dailyLiterageProfit?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type gallon_gross_historyCreateInput = {
    gallon_history_uuid?: string
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
    ibm_info?: ibm_infoCreateNestedOneWithoutGallon_gross_historyInput
    users?: usersCreateNestedOneWithoutGallon_gross_historyInput
  }

  export type gallon_gross_historyUncheckedCreateInput = {
    gallon_history_uuid?: string
    ibm_info_id?: string | null
    use_uuid?: string | null
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
  }

  export type gallon_gross_historyUpdateInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info?: ibm_infoUpdateOneWithoutGallon_gross_historyNestedInput
    users?: usersUpdateOneWithoutGallon_gross_historyNestedInput
  }

  export type gallon_gross_historyUncheckedUpdateInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gallon_gross_historyCreateManyInput = {
    gallon_history_uuid?: string
    ibm_info_id?: string | null
    use_uuid?: string | null
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
  }

  export type gallon_gross_historyUpdateManyMutationInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gallon_gross_historyUncheckedUpdateManyInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_gross_historyCreateInput = {
    product_history_uuid?: string
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
    ibm_info?: ibm_infoCreateNestedOneWithoutProduct_gross_historyInput
    users?: usersCreateNestedOneWithoutProduct_gross_historyInput
  }

  export type product_gross_historyUncheckedCreateInput = {
    product_history_uuid?: string
    ibm_info_id?: string | null
    use_uuid?: string | null
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
  }

  export type product_gross_historyUpdateInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info?: ibm_infoUpdateOneWithoutProduct_gross_historyNestedInput
    users?: usersUpdateOneWithoutProduct_gross_historyNestedInput
  }

  export type product_gross_historyUncheckedUpdateInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_gross_historyCreateManyInput = {
    product_history_uuid?: string
    ibm_info_id?: string | null
    use_uuid?: string | null
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
  }

  export type product_gross_historyUpdateManyMutationInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_gross_historyUncheckedUpdateManyInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Gallon_gross_historyListRelationFilter = {
    every?: gallon_gross_historyWhereInput
    some?: gallon_gross_historyWhereInput
    none?: gallon_gross_historyWhereInput
  }

  export type Gas_station_setvariablesListRelationFilter = {
    every?: gas_station_setvariablesWhereInput
    some?: gas_station_setvariablesWhereInput
    none?: gas_station_setvariablesWhereInput
  }

  export type Product_gross_historyListRelationFilter = {
    every?: product_gross_historyWhereInput
    some?: product_gross_historyWhereInput
    none?: product_gross_historyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type gallon_gross_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gas_station_setvariablesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_gross_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    endereco?: SortOrder
    regional?: SortOrder
    ibm_margin_GC?: SortOrder
    ibm_margin_GASOLINA_PODIUM?: SortOrder
    ibm_margin_GASOLINA_PREMIUM?: SortOrder
    ibm_margin_DIESEL_GROUP?: SortOrder
    ibm_margin_DIESEL_GROUP_S500?: SortOrder
    ibm_margin_ETANOL_COMUM?: SortOrder
    ibm_margin_TOTAL_PRODUCT?: SortOrder
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    ibm_margin_FILTROS_AR_PRODUCT?: SortOrder
  }

  export type ibm_infoAvgOrderByAggregateInput = {
    lat?: SortOrder
    long?: SortOrder
    ibm_margin_GC?: SortOrder
    ibm_margin_GASOLINA_PODIUM?: SortOrder
    ibm_margin_GASOLINA_PREMIUM?: SortOrder
    ibm_margin_DIESEL_GROUP?: SortOrder
    ibm_margin_DIESEL_GROUP_S500?: SortOrder
    ibm_margin_ETANOL_COMUM?: SortOrder
    ibm_margin_TOTAL_PRODUCT?: SortOrder
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    ibm_margin_FILTROS_AR_PRODUCT?: SortOrder
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
    endereco?: SortOrder
    regional?: SortOrder
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
    endereco?: SortOrder
    regional?: SortOrder
  }

  export type ibm_infoSumOrderByAggregateInput = {
    lat?: SortOrder
    long?: SortOrder
    ibm_margin_GC?: SortOrder
    ibm_margin_GASOLINA_PODIUM?: SortOrder
    ibm_margin_GASOLINA_PREMIUM?: SortOrder
    ibm_margin_DIESEL_GROUP?: SortOrder
    ibm_margin_DIESEL_GROUP_S500?: SortOrder
    ibm_margin_ETANOL_COMUM?: SortOrder
    ibm_margin_TOTAL_PRODUCT?: SortOrder
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    ibm_margin_FILTROS_AR_PRODUCT?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Region_setvariablesListRelationFilter = {
    every?: region_setvariablesWhereInput
    some?: region_setvariablesWhereInput
    none?: region_setvariablesWhereInput
  }

  export type region_setvariablesOrderByRelationAggregateInput = {
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
    use_level?: SortOrder
    use_whats_app?: SortOrder
    use_mlt?: SortOrder
    use_tmc?: SortOrder
    use_tmf?: SortOrder
    use_tmp?: SortOrder
    use_tmvol?: SortOrder
    use_lucro_bruto_operacional_galonagem?: SortOrder
    use_lucro_bruto_operacional_produto?: SortOrder
    use_lucro_bruto_operacional?: SortOrder
    use_ETANOL_COMUM_comb?: SortOrder
    use_GASOLINA_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    use_mlt?: SortOrder
    use_tmc?: SortOrder
    use_tmf?: SortOrder
    use_tmp?: SortOrder
    use_tmvol?: SortOrder
    use_lucro_bruto_operacional_galonagem?: SortOrder
    use_lucro_bruto_operacional_produto?: SortOrder
    use_lucro_bruto_operacional?: SortOrder
    use_ETANOL_COMUM_comb?: SortOrder
    use_GASOLINA_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
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
    use_level?: SortOrder
    use_mlt?: SortOrder
    use_tmc?: SortOrder
    use_tmf?: SortOrder
    use_tmp?: SortOrder
    use_tmvol?: SortOrder
    use_lucro_bruto_operacional_galonagem?: SortOrder
    use_lucro_bruto_operacional_produto?: SortOrder
    use_lucro_bruto_operacional?: SortOrder
    use_ETANOL_COMUM_comb?: SortOrder
    use_GASOLINA_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
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
    use_level?: SortOrder
    use_mlt?: SortOrder
    use_tmc?: SortOrder
    use_tmf?: SortOrder
    use_tmp?: SortOrder
    use_tmvol?: SortOrder
    use_lucro_bruto_operacional_galonagem?: SortOrder
    use_lucro_bruto_operacional_produto?: SortOrder
    use_lucro_bruto_operacional?: SortOrder
    use_ETANOL_COMUM_comb?: SortOrder
    use_GASOLINA_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    use_mlt?: SortOrder
    use_tmc?: SortOrder
    use_tmf?: SortOrder
    use_tmp?: SortOrder
    use_tmvol?: SortOrder
    use_lucro_bruto_operacional_galonagem?: SortOrder
    use_lucro_bruto_operacional_produto?: SortOrder
    use_lucro_bruto_operacional?: SortOrder
    use_ETANOL_COMUM_comb?: SortOrder
    use_GASOLINA_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    use_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type Ibm_infoNullableRelationFilter = {
    is?: ibm_infoWhereInput | null
    isNot?: ibm_infoWhereInput | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type gas_station_setvariablesCountOrderByAggregateInput = {
    gas_station_uuid?: SortOrder
    gas_station_marginGC?: SortOrder
    gas_station_type_marginGC?: SortOrder
    gas_station_whats_app?: SortOrder
    gas_station_created_at?: SortOrder
    gas_station_updated_at?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    verification_msg_sent?: SortOrder
    verification_hour_marginGC?: SortOrder
    gas_station_sanado_hour_marginGC?: SortOrder
    gas_station_sanado_marginGC?: SortOrder
    gas_station_margin_MLT?: SortOrder
    gas_station_margin_TMP?: SortOrder
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    gas_station_MLT_modal?: SortOrder
    gas_station_TMC_modal?: SortOrder
    gas_station_TMF_modal?: SortOrder
    gas_station_TMP_modal?: SortOrder
    gas_station_TMVOL_modal?: SortOrder
    gas_station_ETANOL_COMUM_comb?: SortOrder
    gas_station_GASOLINA_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    gas_station_margin_DIESEL_GROUP?: SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP?: SortOrder
    gas_station_sanado_margin_DIESEL_GROUP?: SortOrder
    gas_station_type_margin_DIESEL_GROUP?: SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrder
    gas_station_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_sanado_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_type_margin_GASOLINA_PODIUM?: SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_sanado_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_type_margin_GASOLINA_PREMIUM?: SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_sanado_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_type_margin_DIESEL_GROUP_S500?: SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_margin_ETANOL_COMUM?: SortOrder
    gas_station_sanado_hour_ETANOL_COMUM?: SortOrder
    gas_station_sanado_margin_ETANOL_COMUM?: SortOrder
    gas_station_type_margin_ETANOL_COMUM?: SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrder
    gas_station_invoice_comb?: SortOrder
    gas_station_invoice_prod?: SortOrder
    gas_station_invoice_comb_daily?: SortOrder
    gas_station_invoice_prod_daily?: SortOrder
    gas_station_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_sanado_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_type_margin_TOTAL_PRODUCT?: SortOrder
    verification_hour_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_freight_value?: SortOrder
    gas_station_gross_result_literage?: SortOrder
    gas_station_gross_result_product?: SortOrder
    gas_station_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_type_margin_FILTROS_AR_PRODUCT?: SortOrder
    verification_hour_margin_FILTROS_AR_PRODUCT?: SortOrder
  }

  export type gas_station_setvariablesAvgOrderByAggregateInput = {
    gas_station_marginGC?: SortOrder
    gas_station_margin_MLT?: SortOrder
    gas_station_margin_TMP?: SortOrder
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    gas_station_MLT_modal?: SortOrder
    gas_station_TMC_modal?: SortOrder
    gas_station_TMF_modal?: SortOrder
    gas_station_TMP_modal?: SortOrder
    gas_station_TMVOL_modal?: SortOrder
    gas_station_ETANOL_COMUM_comb?: SortOrder
    gas_station_GASOLINA_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    gas_station_margin_DIESEL_GROUP?: SortOrder
    gas_station_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_margin_ETANOL_COMUM?: SortOrder
    gas_station_invoice_comb?: SortOrder
    gas_station_invoice_prod?: SortOrder
    gas_station_invoice_comb_daily?: SortOrder
    gas_station_invoice_prod_daily?: SortOrder
    gas_station_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_freight_value?: SortOrder
    gas_station_gross_result_literage?: SortOrder
    gas_station_gross_result_product?: SortOrder
    gas_station_margin_FILTROS_AR_PRODUCT?: SortOrder
  }

  export type gas_station_setvariablesMaxOrderByAggregateInput = {
    gas_station_uuid?: SortOrder
    gas_station_marginGC?: SortOrder
    gas_station_type_marginGC?: SortOrder
    gas_station_created_at?: SortOrder
    gas_station_updated_at?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    verification_msg_sent?: SortOrder
    verification_hour_marginGC?: SortOrder
    gas_station_sanado_hour_marginGC?: SortOrder
    gas_station_sanado_marginGC?: SortOrder
    gas_station_margin_MLT?: SortOrder
    gas_station_margin_TMP?: SortOrder
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    gas_station_MLT_modal?: SortOrder
    gas_station_TMC_modal?: SortOrder
    gas_station_TMF_modal?: SortOrder
    gas_station_TMP_modal?: SortOrder
    gas_station_TMVOL_modal?: SortOrder
    gas_station_ETANOL_COMUM_comb?: SortOrder
    gas_station_GASOLINA_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    gas_station_margin_DIESEL_GROUP?: SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP?: SortOrder
    gas_station_sanado_margin_DIESEL_GROUP?: SortOrder
    gas_station_type_margin_DIESEL_GROUP?: SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrder
    gas_station_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_sanado_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_type_margin_GASOLINA_PODIUM?: SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_sanado_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_type_margin_GASOLINA_PREMIUM?: SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_sanado_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_type_margin_DIESEL_GROUP_S500?: SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_margin_ETANOL_COMUM?: SortOrder
    gas_station_sanado_hour_ETANOL_COMUM?: SortOrder
    gas_station_sanado_margin_ETANOL_COMUM?: SortOrder
    gas_station_type_margin_ETANOL_COMUM?: SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrder
    gas_station_invoice_comb?: SortOrder
    gas_station_invoice_prod?: SortOrder
    gas_station_invoice_comb_daily?: SortOrder
    gas_station_invoice_prod_daily?: SortOrder
    gas_station_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_sanado_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_type_margin_TOTAL_PRODUCT?: SortOrder
    verification_hour_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_freight_value?: SortOrder
    gas_station_gross_result_literage?: SortOrder
    gas_station_gross_result_product?: SortOrder
    gas_station_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_type_margin_FILTROS_AR_PRODUCT?: SortOrder
    verification_hour_margin_FILTROS_AR_PRODUCT?: SortOrder
  }

  export type gas_station_setvariablesMinOrderByAggregateInput = {
    gas_station_uuid?: SortOrder
    gas_station_marginGC?: SortOrder
    gas_station_type_marginGC?: SortOrder
    gas_station_created_at?: SortOrder
    gas_station_updated_at?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    verification_msg_sent?: SortOrder
    verification_hour_marginGC?: SortOrder
    gas_station_sanado_hour_marginGC?: SortOrder
    gas_station_sanado_marginGC?: SortOrder
    gas_station_margin_MLT?: SortOrder
    gas_station_margin_TMP?: SortOrder
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    gas_station_MLT_modal?: SortOrder
    gas_station_TMC_modal?: SortOrder
    gas_station_TMF_modal?: SortOrder
    gas_station_TMP_modal?: SortOrder
    gas_station_TMVOL_modal?: SortOrder
    gas_station_ETANOL_COMUM_comb?: SortOrder
    gas_station_GASOLINA_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    gas_station_margin_DIESEL_GROUP?: SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP?: SortOrder
    gas_station_sanado_margin_DIESEL_GROUP?: SortOrder
    gas_station_type_margin_DIESEL_GROUP?: SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrder
    gas_station_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_sanado_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_type_margin_GASOLINA_PODIUM?: SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_sanado_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_type_margin_GASOLINA_PREMIUM?: SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_sanado_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_type_margin_DIESEL_GROUP_S500?: SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_margin_ETANOL_COMUM?: SortOrder
    gas_station_sanado_hour_ETANOL_COMUM?: SortOrder
    gas_station_sanado_margin_ETANOL_COMUM?: SortOrder
    gas_station_type_margin_ETANOL_COMUM?: SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrder
    gas_station_invoice_comb?: SortOrder
    gas_station_invoice_prod?: SortOrder
    gas_station_invoice_comb_daily?: SortOrder
    gas_station_invoice_prod_daily?: SortOrder
    gas_station_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_sanado_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_type_margin_TOTAL_PRODUCT?: SortOrder
    verification_hour_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_freight_value?: SortOrder
    gas_station_gross_result_literage?: SortOrder
    gas_station_gross_result_product?: SortOrder
    gas_station_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: SortOrder
    gas_station_type_margin_FILTROS_AR_PRODUCT?: SortOrder
    verification_hour_margin_FILTROS_AR_PRODUCT?: SortOrder
  }

  export type gas_station_setvariablesSumOrderByAggregateInput = {
    gas_station_marginGC?: SortOrder
    gas_station_margin_MLT?: SortOrder
    gas_station_margin_TMP?: SortOrder
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    gas_station_MLT_modal?: SortOrder
    gas_station_TMC_modal?: SortOrder
    gas_station_TMF_modal?: SortOrder
    gas_station_TMP_modal?: SortOrder
    gas_station_TMVOL_modal?: SortOrder
    gas_station_ETANOL_COMUM_comb?: SortOrder
    gas_station_GASOLINA_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    gas_station_margin_DIESEL_GROUP?: SortOrder
    gas_station_margin_GASOLINA_PODIUM?: SortOrder
    gas_station_margin_GASOLINA_PREMIUM?: SortOrder
    gas_station_margin_DIESEL_GROUP_S500?: SortOrder
    gas_station_margin_ETANOL_COMUM?: SortOrder
    gas_station_invoice_comb?: SortOrder
    gas_station_invoice_prod?: SortOrder
    gas_station_invoice_comb_daily?: SortOrder
    gas_station_invoice_prod_daily?: SortOrder
    gas_station_margin_TOTAL_PRODUCT?: SortOrder
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: SortOrder
    gas_station_freight_value?: SortOrder
    gas_station_gross_result_literage?: SortOrder
    gas_station_gross_result_product?: SortOrder
    gas_station_margin_FILTROS_AR_PRODUCT?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type RegionsNullableRelationFilter = {
    is?: regionsWhereInput | null
    isNot?: regionsWhereInput | null
  }

  export type region_setvariablesCountOrderByAggregateInput = {
    region_uuid?: SortOrder
    region_marginGC?: SortOrder
    region_type_marginGC?: SortOrder
    region_whats_app?: SortOrder
    region_station_created_at?: SortOrder
    region_station_updated_at?: SortOrder
    use_uuid?: SortOrder
    regions_uuid?: SortOrder
    verification_msg_sent?: SortOrder
    verification_hour_marginGC?: SortOrder
    region_sanado_hour_marginGC?: SortOrder
    region_sanado_marginGC?: SortOrder
    region_station_ETANOL_COMUM_comb?: SortOrder
    region_station_GASOLINA_COMUM_comb?: SortOrder
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    region_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    region_station_MLT_modal?: SortOrder
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    region_station_TMC_modal?: SortOrder
    region_station_TMF_modal?: SortOrder
    region_station_TMP_modal?: SortOrder
    region_station_TMVOL_modal?: SortOrder
    region_margin_DIESEL_GROUP?: SortOrder
    region_sanado_hour_margin_DIESEL_GROUP?: SortOrder
    region_sanado_margin_DIESEL_GROUP?: SortOrder
    region_type_margin_DIESEL_GROUP?: SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrder
    region_margin_GASOLINA_PODIUM?: SortOrder
    region_sanado_hour_GASOLINA_PODIUM?: SortOrder
    region_sanado_margin_GASOLINA_PODIUM?: SortOrder
    region_type_margin_GASOLINA_PODIUM?: SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrder
    region_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_margin_GASOLINA_PREMIUM?: SortOrder
    region_type_margin_GASOLINA_PREMIUM?: SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_hour_GASOLINA_PREMIUM?: SortOrder
    region_margin_DIESEL_GROUP_S500?: SortOrder
    region_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrder
    region_sanado_margin_DIESEL_GROUP_S500?: SortOrder
    region_type_margin_DIESEL_GROUP_S500?: SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrder
    region_margin_ETANOL_COMUM?: SortOrder
    region_sanado_hour_ETANOL_COMUM?: SortOrder
    region_sanado_margin_ETANOL_COMUM?: SortOrder
    region_type_margin_ETANOL_COMUM?: SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrder
  }

  export type region_setvariablesAvgOrderByAggregateInput = {
    region_marginGC?: SortOrder
    region_station_ETANOL_COMUM_comb?: SortOrder
    region_station_GASOLINA_COMUM_comb?: SortOrder
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    region_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    region_station_MLT_modal?: SortOrder
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    region_station_TMC_modal?: SortOrder
    region_station_TMF_modal?: SortOrder
    region_station_TMP_modal?: SortOrder
    region_station_TMVOL_modal?: SortOrder
    region_margin_DIESEL_GROUP?: SortOrder
    region_margin_GASOLINA_PODIUM?: SortOrder
    region_margin_GASOLINA_PREMIUM?: SortOrder
    region_margin_DIESEL_GROUP_S500?: SortOrder
    region_margin_ETANOL_COMUM?: SortOrder
  }

  export type region_setvariablesMaxOrderByAggregateInput = {
    region_uuid?: SortOrder
    region_marginGC?: SortOrder
    region_type_marginGC?: SortOrder
    region_station_created_at?: SortOrder
    region_station_updated_at?: SortOrder
    use_uuid?: SortOrder
    regions_uuid?: SortOrder
    verification_msg_sent?: SortOrder
    verification_hour_marginGC?: SortOrder
    region_sanado_hour_marginGC?: SortOrder
    region_sanado_marginGC?: SortOrder
    region_station_ETANOL_COMUM_comb?: SortOrder
    region_station_GASOLINA_COMUM_comb?: SortOrder
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    region_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    region_station_MLT_modal?: SortOrder
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    region_station_TMC_modal?: SortOrder
    region_station_TMF_modal?: SortOrder
    region_station_TMP_modal?: SortOrder
    region_station_TMVOL_modal?: SortOrder
    region_margin_DIESEL_GROUP?: SortOrder
    region_sanado_hour_margin_DIESEL_GROUP?: SortOrder
    region_sanado_margin_DIESEL_GROUP?: SortOrder
    region_type_margin_DIESEL_GROUP?: SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrder
    region_margin_GASOLINA_PODIUM?: SortOrder
    region_sanado_hour_GASOLINA_PODIUM?: SortOrder
    region_sanado_margin_GASOLINA_PODIUM?: SortOrder
    region_type_margin_GASOLINA_PODIUM?: SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrder
    region_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_margin_GASOLINA_PREMIUM?: SortOrder
    region_type_margin_GASOLINA_PREMIUM?: SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_hour_GASOLINA_PREMIUM?: SortOrder
    region_margin_DIESEL_GROUP_S500?: SortOrder
    region_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrder
    region_sanado_margin_DIESEL_GROUP_S500?: SortOrder
    region_type_margin_DIESEL_GROUP_S500?: SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrder
    region_margin_ETANOL_COMUM?: SortOrder
    region_sanado_hour_ETANOL_COMUM?: SortOrder
    region_sanado_margin_ETANOL_COMUM?: SortOrder
    region_type_margin_ETANOL_COMUM?: SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrder
  }

  export type region_setvariablesMinOrderByAggregateInput = {
    region_uuid?: SortOrder
    region_marginGC?: SortOrder
    region_type_marginGC?: SortOrder
    region_station_created_at?: SortOrder
    region_station_updated_at?: SortOrder
    use_uuid?: SortOrder
    regions_uuid?: SortOrder
    verification_msg_sent?: SortOrder
    verification_hour_marginGC?: SortOrder
    region_sanado_hour_marginGC?: SortOrder
    region_sanado_marginGC?: SortOrder
    region_station_ETANOL_COMUM_comb?: SortOrder
    region_station_GASOLINA_COMUM_comb?: SortOrder
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    region_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    region_station_MLT_modal?: SortOrder
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    region_station_TMC_modal?: SortOrder
    region_station_TMF_modal?: SortOrder
    region_station_TMP_modal?: SortOrder
    region_station_TMVOL_modal?: SortOrder
    region_margin_DIESEL_GROUP?: SortOrder
    region_sanado_hour_margin_DIESEL_GROUP?: SortOrder
    region_sanado_margin_DIESEL_GROUP?: SortOrder
    region_type_margin_DIESEL_GROUP?: SortOrder
    verification_hour_margin_DIESEL_GROUP?: SortOrder
    region_margin_GASOLINA_PODIUM?: SortOrder
    region_sanado_hour_GASOLINA_PODIUM?: SortOrder
    region_sanado_margin_GASOLINA_PODIUM?: SortOrder
    region_type_margin_GASOLINA_PODIUM?: SortOrder
    verification_hour_margin_GASOLINA_PODIUM?: SortOrder
    region_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_hour_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_margin_GASOLINA_PREMIUM?: SortOrder
    region_type_margin_GASOLINA_PREMIUM?: SortOrder
    verification_hour_margin_GASOLINA_PREMIUM?: SortOrder
    region_sanado_hour_GASOLINA_PREMIUM?: SortOrder
    region_margin_DIESEL_GROUP_S500?: SortOrder
    region_sanado_hour_margin_DIESEL_GROUP_S500?: SortOrder
    region_sanado_margin_DIESEL_GROUP_S500?: SortOrder
    region_type_margin_DIESEL_GROUP_S500?: SortOrder
    verification_hour_margin_DIESEL_GROUP_S500?: SortOrder
    region_margin_ETANOL_COMUM?: SortOrder
    region_sanado_hour_ETANOL_COMUM?: SortOrder
    region_sanado_margin_ETANOL_COMUM?: SortOrder
    region_type_margin_ETANOL_COMUM?: SortOrder
    verification_hour_margin_ETANOL_COMUM?: SortOrder
  }

  export type region_setvariablesSumOrderByAggregateInput = {
    region_marginGC?: SortOrder
    region_station_ETANOL_COMUM_comb?: SortOrder
    region_station_GASOLINA_COMUM_comb?: SortOrder
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: SortOrder
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: SortOrder
    region_station_LUCRO_BRUTO_PRODUTO_modal?: SortOrder
    region_station_MLT_modal?: SortOrder
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: SortOrder
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: SortOrder
    region_station_TMC_modal?: SortOrder
    region_station_TMF_modal?: SortOrder
    region_station_TMP_modal?: SortOrder
    region_station_TMVOL_modal?: SortOrder
    region_margin_DIESEL_GROUP?: SortOrder
    region_margin_GASOLINA_PODIUM?: SortOrder
    region_margin_GASOLINA_PREMIUM?: SortOrder
    region_margin_DIESEL_GROUP_S500?: SortOrder
    region_margin_ETANOL_COMUM?: SortOrder
  }

  export type regionsCountOrderByAggregateInput = {
    regions_uuid?: SortOrder
    regions_name?: SortOrder
    regions_types?: SortOrder
    region_created_at?: SortOrder
    region_updated_at?: SortOrder
    regions_margin_GC?: SortOrder
    regions_margin_GASOLINA_PODIUM?: SortOrder
    regions_margin_GASOLINA_PREMIUM?: SortOrder
    regions_margin_DIESEL_GROUP?: SortOrder
    regions_margin_DIESEL_GROUP_S500?: SortOrder
    regions_margin_ETANOL_COMUM?: SortOrder
  }

  export type regionsAvgOrderByAggregateInput = {
    regions_margin_GC?: SortOrder
    regions_margin_GASOLINA_PODIUM?: SortOrder
    regions_margin_GASOLINA_PREMIUM?: SortOrder
    regions_margin_DIESEL_GROUP?: SortOrder
    regions_margin_DIESEL_GROUP_S500?: SortOrder
    regions_margin_ETANOL_COMUM?: SortOrder
  }

  export type regionsMaxOrderByAggregateInput = {
    regions_uuid?: SortOrder
    regions_name?: SortOrder
    regions_types?: SortOrder
    region_created_at?: SortOrder
    region_updated_at?: SortOrder
  }

  export type regionsMinOrderByAggregateInput = {
    regions_uuid?: SortOrder
    regions_name?: SortOrder
    regions_types?: SortOrder
    region_created_at?: SortOrder
    region_updated_at?: SortOrder
  }

  export type regionsSumOrderByAggregateInput = {
    regions_margin_GC?: SortOrder
    regions_margin_GASOLINA_PODIUM?: SortOrder
    regions_margin_GASOLINA_PREMIUM?: SortOrder
    regions_margin_DIESEL_GROUP?: SortOrder
    regions_margin_DIESEL_GROUP_S500?: SortOrder
    regions_margin_ETANOL_COMUM?: SortOrder
  }

  export type big_numbers_valuesCountOrderByAggregateInput = {
    bignumbers_uuid?: SortOrder
    bignumbers_sumliterage?: SortOrder
    bignumbers_invoicing?: SortOrder
    bignumbers_Supplies?: SortOrder
    bignumbers_fuelSales?: SortOrder
    bignumbers_fuelProfit?: SortOrder
    bignumbers_productSales?: SortOrder
    bignumbers_productProfit?: SortOrder
    bignumbers_dailyProductProfit?: SortOrder
    bignumbers_dailyLiterageProfit?: SortOrder
  }

  export type big_numbers_valuesAvgOrderByAggregateInput = {
    bignumbers_sumliterage?: SortOrder
    bignumbers_invoicing?: SortOrder
    bignumbers_Supplies?: SortOrder
    bignumbers_fuelSales?: SortOrder
    bignumbers_fuelProfit?: SortOrder
    bignumbers_productSales?: SortOrder
    bignumbers_productProfit?: SortOrder
    bignumbers_dailyProductProfit?: SortOrder
    bignumbers_dailyLiterageProfit?: SortOrder
  }

  export type big_numbers_valuesMaxOrderByAggregateInput = {
    bignumbers_uuid?: SortOrder
    bignumbers_sumliterage?: SortOrder
    bignumbers_invoicing?: SortOrder
    bignumbers_Supplies?: SortOrder
    bignumbers_fuelSales?: SortOrder
    bignumbers_fuelProfit?: SortOrder
    bignumbers_productSales?: SortOrder
    bignumbers_productProfit?: SortOrder
    bignumbers_dailyProductProfit?: SortOrder
    bignumbers_dailyLiterageProfit?: SortOrder
  }

  export type big_numbers_valuesMinOrderByAggregateInput = {
    bignumbers_uuid?: SortOrder
    bignumbers_sumliterage?: SortOrder
    bignumbers_invoicing?: SortOrder
    bignumbers_Supplies?: SortOrder
    bignumbers_fuelSales?: SortOrder
    bignumbers_fuelProfit?: SortOrder
    bignumbers_productSales?: SortOrder
    bignumbers_productProfit?: SortOrder
    bignumbers_dailyProductProfit?: SortOrder
    bignumbers_dailyLiterageProfit?: SortOrder
  }

  export type big_numbers_valuesSumOrderByAggregateInput = {
    bignumbers_sumliterage?: SortOrder
    bignumbers_invoicing?: SortOrder
    bignumbers_Supplies?: SortOrder
    bignumbers_fuelSales?: SortOrder
    bignumbers_fuelProfit?: SortOrder
    bignumbers_productSales?: SortOrder
    bignumbers_productProfit?: SortOrder
    bignumbers_dailyProductProfit?: SortOrder
    bignumbers_dailyLiterageProfit?: SortOrder
  }

  export type gallon_gross_historyCountOrderByAggregateInput = {
    gallon_history_uuid?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    gallon_history_gross?: SortOrder
    gallon_history_date?: SortOrder
    gallon_history_created_at?: SortOrder
    gallon_history_updated_at?: SortOrder
  }

  export type gallon_gross_historyAvgOrderByAggregateInput = {
    gallon_history_gross?: SortOrder
  }

  export type gallon_gross_historyMaxOrderByAggregateInput = {
    gallon_history_uuid?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    gallon_history_gross?: SortOrder
    gallon_history_date?: SortOrder
    gallon_history_created_at?: SortOrder
    gallon_history_updated_at?: SortOrder
  }

  export type gallon_gross_historyMinOrderByAggregateInput = {
    gallon_history_uuid?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    gallon_history_gross?: SortOrder
    gallon_history_date?: SortOrder
    gallon_history_created_at?: SortOrder
    gallon_history_updated_at?: SortOrder
  }

  export type gallon_gross_historySumOrderByAggregateInput = {
    gallon_history_gross?: SortOrder
  }

  export type product_gross_historyCountOrderByAggregateInput = {
    product_history_uuid?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    product_history_gross?: SortOrder
    product_history_date?: SortOrder
    product_history_created_at?: SortOrder
    product_history_updated_at?: SortOrder
  }

  export type product_gross_historyAvgOrderByAggregateInput = {
    product_history_gross?: SortOrder
  }

  export type product_gross_historyMaxOrderByAggregateInput = {
    product_history_uuid?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    product_history_gross?: SortOrder
    product_history_date?: SortOrder
    product_history_created_at?: SortOrder
    product_history_updated_at?: SortOrder
  }

  export type product_gross_historyMinOrderByAggregateInput = {
    product_history_uuid?: SortOrder
    ibm_info_id?: SortOrder
    use_uuid?: SortOrder
    product_history_gross?: SortOrder
    product_history_date?: SortOrder
    product_history_created_at?: SortOrder
    product_history_updated_at?: SortOrder
  }

  export type product_gross_historySumOrderByAggregateInput = {
    product_history_gross?: SortOrder
  }

  export type ibm_infoCreateibm_margin_GCInput = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_GASOLINA_PODIUMInput = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_DIESEL_GROUPInput = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_ETANOL_COMUMInput = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_TOTAL_PRODUCTInput = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput = {
    set: number[]
  }

  export type ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput = {
    set: number[]
  }

  export type gallon_gross_historyCreateNestedManyWithoutIbm_infoInput = {
    create?: XOR<gallon_gross_historyCreateWithoutIbm_infoInput, gallon_gross_historyUncheckedCreateWithoutIbm_infoInput> | gallon_gross_historyCreateWithoutIbm_infoInput[] | gallon_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutIbm_infoInput | gallon_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    createMany?: gallon_gross_historyCreateManyIbm_infoInputEnvelope
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
  }

  export type gas_station_setvariablesCreateNestedManyWithoutIbm_infoInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutIbm_infoInput, gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput> | gas_station_setvariablesCreateWithoutIbm_infoInput[] | gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput | gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput[]
    createMany?: gas_station_setvariablesCreateManyIbm_infoInputEnvelope
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
  }

  export type product_gross_historyCreateNestedManyWithoutIbm_infoInput = {
    create?: XOR<product_gross_historyCreateWithoutIbm_infoInput, product_gross_historyUncheckedCreateWithoutIbm_infoInput> | product_gross_historyCreateWithoutIbm_infoInput[] | product_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutIbm_infoInput | product_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    createMany?: product_gross_historyCreateManyIbm_infoInputEnvelope
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
  }

  export type gallon_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput = {
    create?: XOR<gallon_gross_historyCreateWithoutIbm_infoInput, gallon_gross_historyUncheckedCreateWithoutIbm_infoInput> | gallon_gross_historyCreateWithoutIbm_infoInput[] | gallon_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutIbm_infoInput | gallon_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    createMany?: gallon_gross_historyCreateManyIbm_infoInputEnvelope
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
  }

  export type gas_station_setvariablesUncheckedCreateNestedManyWithoutIbm_infoInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutIbm_infoInput, gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput> | gas_station_setvariablesCreateWithoutIbm_infoInput[] | gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput | gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput[]
    createMany?: gas_station_setvariablesCreateManyIbm_infoInputEnvelope
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
  }

  export type product_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput = {
    create?: XOR<product_gross_historyCreateWithoutIbm_infoInput, product_gross_historyUncheckedCreateWithoutIbm_infoInput> | product_gross_historyCreateWithoutIbm_infoInput[] | product_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutIbm_infoInput | product_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    createMany?: product_gross_historyCreateManyIbm_infoInputEnvelope
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ibm_infoUpdateibm_margin_GCInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_DIESEL_GROUPInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_ETANOL_COMUMInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput = {
    set?: number[]
    push?: number | number[]
  }

  export type gallon_gross_historyUpdateManyWithoutIbm_infoNestedInput = {
    create?: XOR<gallon_gross_historyCreateWithoutIbm_infoInput, gallon_gross_historyUncheckedCreateWithoutIbm_infoInput> | gallon_gross_historyCreateWithoutIbm_infoInput[] | gallon_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutIbm_infoInput | gallon_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    upsert?: gallon_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput | gallon_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput[]
    createMany?: gallon_gross_historyCreateManyIbm_infoInputEnvelope
    set?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    disconnect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    delete?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    update?: gallon_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput | gallon_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput[]
    updateMany?: gallon_gross_historyUpdateManyWithWhereWithoutIbm_infoInput | gallon_gross_historyUpdateManyWithWhereWithoutIbm_infoInput[]
    deleteMany?: gallon_gross_historyScalarWhereInput | gallon_gross_historyScalarWhereInput[]
  }

  export type gas_station_setvariablesUpdateManyWithoutIbm_infoNestedInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutIbm_infoInput, gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput> | gas_station_setvariablesCreateWithoutIbm_infoInput[] | gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput | gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput[]
    upsert?: gas_station_setvariablesUpsertWithWhereUniqueWithoutIbm_infoInput | gas_station_setvariablesUpsertWithWhereUniqueWithoutIbm_infoInput[]
    createMany?: gas_station_setvariablesCreateManyIbm_infoInputEnvelope
    set?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    disconnect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    delete?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    update?: gas_station_setvariablesUpdateWithWhereUniqueWithoutIbm_infoInput | gas_station_setvariablesUpdateWithWhereUniqueWithoutIbm_infoInput[]
    updateMany?: gas_station_setvariablesUpdateManyWithWhereWithoutIbm_infoInput | gas_station_setvariablesUpdateManyWithWhereWithoutIbm_infoInput[]
    deleteMany?: gas_station_setvariablesScalarWhereInput | gas_station_setvariablesScalarWhereInput[]
  }

  export type product_gross_historyUpdateManyWithoutIbm_infoNestedInput = {
    create?: XOR<product_gross_historyCreateWithoutIbm_infoInput, product_gross_historyUncheckedCreateWithoutIbm_infoInput> | product_gross_historyCreateWithoutIbm_infoInput[] | product_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutIbm_infoInput | product_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    upsert?: product_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput | product_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput[]
    createMany?: product_gross_historyCreateManyIbm_infoInputEnvelope
    set?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    disconnect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    delete?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    update?: product_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput | product_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput[]
    updateMany?: product_gross_historyUpdateManyWithWhereWithoutIbm_infoInput | product_gross_historyUpdateManyWithWhereWithoutIbm_infoInput[]
    deleteMany?: product_gross_historyScalarWhereInput | product_gross_historyScalarWhereInput[]
  }

  export type gallon_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput = {
    create?: XOR<gallon_gross_historyCreateWithoutIbm_infoInput, gallon_gross_historyUncheckedCreateWithoutIbm_infoInput> | gallon_gross_historyCreateWithoutIbm_infoInput[] | gallon_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutIbm_infoInput | gallon_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    upsert?: gallon_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput | gallon_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput[]
    createMany?: gallon_gross_historyCreateManyIbm_infoInputEnvelope
    set?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    disconnect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    delete?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    update?: gallon_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput | gallon_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput[]
    updateMany?: gallon_gross_historyUpdateManyWithWhereWithoutIbm_infoInput | gallon_gross_historyUpdateManyWithWhereWithoutIbm_infoInput[]
    deleteMany?: gallon_gross_historyScalarWhereInput | gallon_gross_historyScalarWhereInput[]
  }

  export type gas_station_setvariablesUncheckedUpdateManyWithoutIbm_infoNestedInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutIbm_infoInput, gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput> | gas_station_setvariablesCreateWithoutIbm_infoInput[] | gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput | gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput[]
    upsert?: gas_station_setvariablesUpsertWithWhereUniqueWithoutIbm_infoInput | gas_station_setvariablesUpsertWithWhereUniqueWithoutIbm_infoInput[]
    createMany?: gas_station_setvariablesCreateManyIbm_infoInputEnvelope
    set?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    disconnect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    delete?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    update?: gas_station_setvariablesUpdateWithWhereUniqueWithoutIbm_infoInput | gas_station_setvariablesUpdateWithWhereUniqueWithoutIbm_infoInput[]
    updateMany?: gas_station_setvariablesUpdateManyWithWhereWithoutIbm_infoInput | gas_station_setvariablesUpdateManyWithWhereWithoutIbm_infoInput[]
    deleteMany?: gas_station_setvariablesScalarWhereInput | gas_station_setvariablesScalarWhereInput[]
  }

  export type product_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput = {
    create?: XOR<product_gross_historyCreateWithoutIbm_infoInput, product_gross_historyUncheckedCreateWithoutIbm_infoInput> | product_gross_historyCreateWithoutIbm_infoInput[] | product_gross_historyUncheckedCreateWithoutIbm_infoInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutIbm_infoInput | product_gross_historyCreateOrConnectWithoutIbm_infoInput[]
    upsert?: product_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput | product_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput[]
    createMany?: product_gross_historyCreateManyIbm_infoInputEnvelope
    set?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    disconnect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    delete?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    update?: product_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput | product_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput[]
    updateMany?: product_gross_historyUpdateManyWithWhereWithoutIbm_infoInput | product_gross_historyUpdateManyWithWhereWithoutIbm_infoInput[]
    deleteMany?: product_gross_historyScalarWhereInput | product_gross_historyScalarWhereInput[]
  }

  export type usersCreateuse_whats_appInput = {
    set: string[]
  }

  export type gallon_gross_historyCreateNestedManyWithoutUsersInput = {
    create?: XOR<gallon_gross_historyCreateWithoutUsersInput, gallon_gross_historyUncheckedCreateWithoutUsersInput> | gallon_gross_historyCreateWithoutUsersInput[] | gallon_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutUsersInput | gallon_gross_historyCreateOrConnectWithoutUsersInput[]
    createMany?: gallon_gross_historyCreateManyUsersInputEnvelope
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
  }

  export type gas_station_setvariablesCreateNestedManyWithoutUsersInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutUsersInput, gas_station_setvariablesUncheckedCreateWithoutUsersInput> | gas_station_setvariablesCreateWithoutUsersInput[] | gas_station_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutUsersInput | gas_station_setvariablesCreateOrConnectWithoutUsersInput[]
    createMany?: gas_station_setvariablesCreateManyUsersInputEnvelope
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
  }

  export type product_gross_historyCreateNestedManyWithoutUsersInput = {
    create?: XOR<product_gross_historyCreateWithoutUsersInput, product_gross_historyUncheckedCreateWithoutUsersInput> | product_gross_historyCreateWithoutUsersInput[] | product_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutUsersInput | product_gross_historyCreateOrConnectWithoutUsersInput[]
    createMany?: product_gross_historyCreateManyUsersInputEnvelope
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
  }

  export type region_setvariablesCreateNestedManyWithoutUsersInput = {
    create?: XOR<region_setvariablesCreateWithoutUsersInput, region_setvariablesUncheckedCreateWithoutUsersInput> | region_setvariablesCreateWithoutUsersInput[] | region_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutUsersInput | region_setvariablesCreateOrConnectWithoutUsersInput[]
    createMany?: region_setvariablesCreateManyUsersInputEnvelope
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
  }

  export type gallon_gross_historyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<gallon_gross_historyCreateWithoutUsersInput, gallon_gross_historyUncheckedCreateWithoutUsersInput> | gallon_gross_historyCreateWithoutUsersInput[] | gallon_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutUsersInput | gallon_gross_historyCreateOrConnectWithoutUsersInput[]
    createMany?: gallon_gross_historyCreateManyUsersInputEnvelope
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
  }

  export type gas_station_setvariablesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutUsersInput, gas_station_setvariablesUncheckedCreateWithoutUsersInput> | gas_station_setvariablesCreateWithoutUsersInput[] | gas_station_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutUsersInput | gas_station_setvariablesCreateOrConnectWithoutUsersInput[]
    createMany?: gas_station_setvariablesCreateManyUsersInputEnvelope
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
  }

  export type product_gross_historyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<product_gross_historyCreateWithoutUsersInput, product_gross_historyUncheckedCreateWithoutUsersInput> | product_gross_historyCreateWithoutUsersInput[] | product_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutUsersInput | product_gross_historyCreateOrConnectWithoutUsersInput[]
    createMany?: product_gross_historyCreateManyUsersInputEnvelope
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
  }

  export type region_setvariablesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<region_setvariablesCreateWithoutUsersInput, region_setvariablesUncheckedCreateWithoutUsersInput> | region_setvariablesCreateWithoutUsersInput[] | region_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutUsersInput | region_setvariablesCreateOrConnectWithoutUsersInput[]
    createMany?: region_setvariablesCreateManyUsersInputEnvelope
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateuse_whats_appInput = {
    set?: string[]
    push?: string | string[]
  }

  export type gallon_gross_historyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<gallon_gross_historyCreateWithoutUsersInput, gallon_gross_historyUncheckedCreateWithoutUsersInput> | gallon_gross_historyCreateWithoutUsersInput[] | gallon_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutUsersInput | gallon_gross_historyCreateOrConnectWithoutUsersInput[]
    upsert?: gallon_gross_historyUpsertWithWhereUniqueWithoutUsersInput | gallon_gross_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: gallon_gross_historyCreateManyUsersInputEnvelope
    set?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    disconnect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    delete?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    update?: gallon_gross_historyUpdateWithWhereUniqueWithoutUsersInput | gallon_gross_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: gallon_gross_historyUpdateManyWithWhereWithoutUsersInput | gallon_gross_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: gallon_gross_historyScalarWhereInput | gallon_gross_historyScalarWhereInput[]
  }

  export type gas_station_setvariablesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutUsersInput, gas_station_setvariablesUncheckedCreateWithoutUsersInput> | gas_station_setvariablesCreateWithoutUsersInput[] | gas_station_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutUsersInput | gas_station_setvariablesCreateOrConnectWithoutUsersInput[]
    upsert?: gas_station_setvariablesUpsertWithWhereUniqueWithoutUsersInput | gas_station_setvariablesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: gas_station_setvariablesCreateManyUsersInputEnvelope
    set?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    disconnect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    delete?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    update?: gas_station_setvariablesUpdateWithWhereUniqueWithoutUsersInput | gas_station_setvariablesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: gas_station_setvariablesUpdateManyWithWhereWithoutUsersInput | gas_station_setvariablesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: gas_station_setvariablesScalarWhereInput | gas_station_setvariablesScalarWhereInput[]
  }

  export type product_gross_historyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<product_gross_historyCreateWithoutUsersInput, product_gross_historyUncheckedCreateWithoutUsersInput> | product_gross_historyCreateWithoutUsersInput[] | product_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutUsersInput | product_gross_historyCreateOrConnectWithoutUsersInput[]
    upsert?: product_gross_historyUpsertWithWhereUniqueWithoutUsersInput | product_gross_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: product_gross_historyCreateManyUsersInputEnvelope
    set?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    disconnect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    delete?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    update?: product_gross_historyUpdateWithWhereUniqueWithoutUsersInput | product_gross_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: product_gross_historyUpdateManyWithWhereWithoutUsersInput | product_gross_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: product_gross_historyScalarWhereInput | product_gross_historyScalarWhereInput[]
  }

  export type region_setvariablesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<region_setvariablesCreateWithoutUsersInput, region_setvariablesUncheckedCreateWithoutUsersInput> | region_setvariablesCreateWithoutUsersInput[] | region_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutUsersInput | region_setvariablesCreateOrConnectWithoutUsersInput[]
    upsert?: region_setvariablesUpsertWithWhereUniqueWithoutUsersInput | region_setvariablesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: region_setvariablesCreateManyUsersInputEnvelope
    set?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    disconnect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    delete?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    update?: region_setvariablesUpdateWithWhereUniqueWithoutUsersInput | region_setvariablesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: region_setvariablesUpdateManyWithWhereWithoutUsersInput | region_setvariablesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: region_setvariablesScalarWhereInput | region_setvariablesScalarWhereInput[]
  }

  export type gallon_gross_historyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<gallon_gross_historyCreateWithoutUsersInput, gallon_gross_historyUncheckedCreateWithoutUsersInput> | gallon_gross_historyCreateWithoutUsersInput[] | gallon_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gallon_gross_historyCreateOrConnectWithoutUsersInput | gallon_gross_historyCreateOrConnectWithoutUsersInput[]
    upsert?: gallon_gross_historyUpsertWithWhereUniqueWithoutUsersInput | gallon_gross_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: gallon_gross_historyCreateManyUsersInputEnvelope
    set?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    disconnect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    delete?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    connect?: gallon_gross_historyWhereUniqueInput | gallon_gross_historyWhereUniqueInput[]
    update?: gallon_gross_historyUpdateWithWhereUniqueWithoutUsersInput | gallon_gross_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: gallon_gross_historyUpdateManyWithWhereWithoutUsersInput | gallon_gross_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: gallon_gross_historyScalarWhereInput | gallon_gross_historyScalarWhereInput[]
  }

  export type gas_station_setvariablesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<gas_station_setvariablesCreateWithoutUsersInput, gas_station_setvariablesUncheckedCreateWithoutUsersInput> | gas_station_setvariablesCreateWithoutUsersInput[] | gas_station_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: gas_station_setvariablesCreateOrConnectWithoutUsersInput | gas_station_setvariablesCreateOrConnectWithoutUsersInput[]
    upsert?: gas_station_setvariablesUpsertWithWhereUniqueWithoutUsersInput | gas_station_setvariablesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: gas_station_setvariablesCreateManyUsersInputEnvelope
    set?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    disconnect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    delete?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    connect?: gas_station_setvariablesWhereUniqueInput | gas_station_setvariablesWhereUniqueInput[]
    update?: gas_station_setvariablesUpdateWithWhereUniqueWithoutUsersInput | gas_station_setvariablesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: gas_station_setvariablesUpdateManyWithWhereWithoutUsersInput | gas_station_setvariablesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: gas_station_setvariablesScalarWhereInput | gas_station_setvariablesScalarWhereInput[]
  }

  export type product_gross_historyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<product_gross_historyCreateWithoutUsersInput, product_gross_historyUncheckedCreateWithoutUsersInput> | product_gross_historyCreateWithoutUsersInput[] | product_gross_historyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_gross_historyCreateOrConnectWithoutUsersInput | product_gross_historyCreateOrConnectWithoutUsersInput[]
    upsert?: product_gross_historyUpsertWithWhereUniqueWithoutUsersInput | product_gross_historyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: product_gross_historyCreateManyUsersInputEnvelope
    set?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    disconnect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    delete?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    connect?: product_gross_historyWhereUniqueInput | product_gross_historyWhereUniqueInput[]
    update?: product_gross_historyUpdateWithWhereUniqueWithoutUsersInput | product_gross_historyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: product_gross_historyUpdateManyWithWhereWithoutUsersInput | product_gross_historyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: product_gross_historyScalarWhereInput | product_gross_historyScalarWhereInput[]
  }

  export type region_setvariablesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<region_setvariablesCreateWithoutUsersInput, region_setvariablesUncheckedCreateWithoutUsersInput> | region_setvariablesCreateWithoutUsersInput[] | region_setvariablesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutUsersInput | region_setvariablesCreateOrConnectWithoutUsersInput[]
    upsert?: region_setvariablesUpsertWithWhereUniqueWithoutUsersInput | region_setvariablesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: region_setvariablesCreateManyUsersInputEnvelope
    set?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    disconnect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    delete?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    update?: region_setvariablesUpdateWithWhereUniqueWithoutUsersInput | region_setvariablesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: region_setvariablesUpdateManyWithWhereWithoutUsersInput | region_setvariablesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: region_setvariablesScalarWhereInput | region_setvariablesScalarWhereInput[]
  }

  export type gas_station_setvariablesCreategas_station_whats_appInput = {
    set: string[]
  }

  export type ibm_infoCreateNestedOneWithoutGas_station_setvariablesInput = {
    create?: XOR<ibm_infoCreateWithoutGas_station_setvariablesInput, ibm_infoUncheckedCreateWithoutGas_station_setvariablesInput>
    connectOrCreate?: ibm_infoCreateOrConnectWithoutGas_station_setvariablesInput
    connect?: ibm_infoWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutGas_station_setvariablesInput = {
    create?: XOR<usersCreateWithoutGas_station_setvariablesInput, usersUncheckedCreateWithoutGas_station_setvariablesInput>
    connectOrCreate?: usersCreateOrConnectWithoutGas_station_setvariablesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type gas_station_setvariablesUpdategas_station_whats_appInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ibm_infoUpdateOneWithoutGas_station_setvariablesNestedInput = {
    create?: XOR<ibm_infoCreateWithoutGas_station_setvariablesInput, ibm_infoUncheckedCreateWithoutGas_station_setvariablesInput>
    connectOrCreate?: ibm_infoCreateOrConnectWithoutGas_station_setvariablesInput
    upsert?: ibm_infoUpsertWithoutGas_station_setvariablesInput
    disconnect?: ibm_infoWhereInput | boolean
    delete?: ibm_infoWhereInput | boolean
    connect?: ibm_infoWhereUniqueInput
    update?: XOR<XOR<ibm_infoUpdateToOneWithWhereWithoutGas_station_setvariablesInput, ibm_infoUpdateWithoutGas_station_setvariablesInput>, ibm_infoUncheckedUpdateWithoutGas_station_setvariablesInput>
  }

  export type usersUpdateOneWithoutGas_station_setvariablesNestedInput = {
    create?: XOR<usersCreateWithoutGas_station_setvariablesInput, usersUncheckedCreateWithoutGas_station_setvariablesInput>
    connectOrCreate?: usersCreateOrConnectWithoutGas_station_setvariablesInput
    upsert?: usersUpsertWithoutGas_station_setvariablesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGas_station_setvariablesInput, usersUpdateWithoutGas_station_setvariablesInput>, usersUncheckedUpdateWithoutGas_station_setvariablesInput>
  }

  export type region_setvariablesCreateregion_whats_appInput = {
    set: string[]
  }

  export type regionsCreateNestedOneWithoutRegion_setvariablesInput = {
    create?: XOR<regionsCreateWithoutRegion_setvariablesInput, regionsUncheckedCreateWithoutRegion_setvariablesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_setvariablesInput
    connect?: regionsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRegion_setvariablesInput = {
    create?: XOR<usersCreateWithoutRegion_setvariablesInput, usersUncheckedCreateWithoutRegion_setvariablesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRegion_setvariablesInput
    connect?: usersWhereUniqueInput
  }

  export type region_setvariablesUpdateregion_whats_appInput = {
    set?: string[]
    push?: string | string[]
  }

  export type regionsUpdateOneWithoutRegion_setvariablesNestedInput = {
    create?: XOR<regionsCreateWithoutRegion_setvariablesInput, regionsUncheckedCreateWithoutRegion_setvariablesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_setvariablesInput
    upsert?: regionsUpsertWithoutRegion_setvariablesInput
    disconnect?: regionsWhereInput | boolean
    delete?: regionsWhereInput | boolean
    connect?: regionsWhereUniqueInput
    update?: XOR<XOR<regionsUpdateToOneWithWhereWithoutRegion_setvariablesInput, regionsUpdateWithoutRegion_setvariablesInput>, regionsUncheckedUpdateWithoutRegion_setvariablesInput>
  }

  export type usersUpdateOneWithoutRegion_setvariablesNestedInput = {
    create?: XOR<usersCreateWithoutRegion_setvariablesInput, usersUncheckedCreateWithoutRegion_setvariablesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRegion_setvariablesInput
    upsert?: usersUpsertWithoutRegion_setvariablesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRegion_setvariablesInput, usersUpdateWithoutRegion_setvariablesInput>, usersUncheckedUpdateWithoutRegion_setvariablesInput>
  }

  export type regionsCreateregions_margin_GCInput = {
    set: number[]
  }

  export type regionsCreateregions_margin_GASOLINA_PODIUMInput = {
    set: number[]
  }

  export type regionsCreateregions_margin_GASOLINA_PREMIUMInput = {
    set: number[]
  }

  export type regionsCreateregions_margin_DIESEL_GROUPInput = {
    set: number[]
  }

  export type regionsCreateregions_margin_DIESEL_GROUP_S500Input = {
    set: number[]
  }

  export type regionsCreateregions_margin_ETANOL_COMUMInput = {
    set: number[]
  }

  export type region_setvariablesCreateNestedManyWithoutRegionsInput = {
    create?: XOR<region_setvariablesCreateWithoutRegionsInput, region_setvariablesUncheckedCreateWithoutRegionsInput> | region_setvariablesCreateWithoutRegionsInput[] | region_setvariablesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutRegionsInput | region_setvariablesCreateOrConnectWithoutRegionsInput[]
    createMany?: region_setvariablesCreateManyRegionsInputEnvelope
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
  }

  export type region_setvariablesUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<region_setvariablesCreateWithoutRegionsInput, region_setvariablesUncheckedCreateWithoutRegionsInput> | region_setvariablesCreateWithoutRegionsInput[] | region_setvariablesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutRegionsInput | region_setvariablesCreateOrConnectWithoutRegionsInput[]
    createMany?: region_setvariablesCreateManyRegionsInputEnvelope
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
  }

  export type regionsUpdateregions_margin_GCInput = {
    set?: number[]
    push?: number | number[]
  }

  export type regionsUpdateregions_margin_GASOLINA_PODIUMInput = {
    set?: number[]
    push?: number | number[]
  }

  export type regionsUpdateregions_margin_GASOLINA_PREMIUMInput = {
    set?: number[]
    push?: number | number[]
  }

  export type regionsUpdateregions_margin_DIESEL_GROUPInput = {
    set?: number[]
    push?: number | number[]
  }

  export type regionsUpdateregions_margin_DIESEL_GROUP_S500Input = {
    set?: number[]
    push?: number | number[]
  }

  export type regionsUpdateregions_margin_ETANOL_COMUMInput = {
    set?: number[]
    push?: number | number[]
  }

  export type region_setvariablesUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<region_setvariablesCreateWithoutRegionsInput, region_setvariablesUncheckedCreateWithoutRegionsInput> | region_setvariablesCreateWithoutRegionsInput[] | region_setvariablesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutRegionsInput | region_setvariablesCreateOrConnectWithoutRegionsInput[]
    upsert?: region_setvariablesUpsertWithWhereUniqueWithoutRegionsInput | region_setvariablesUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: region_setvariablesCreateManyRegionsInputEnvelope
    set?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    disconnect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    delete?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    update?: region_setvariablesUpdateWithWhereUniqueWithoutRegionsInput | region_setvariablesUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: region_setvariablesUpdateManyWithWhereWithoutRegionsInput | region_setvariablesUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: region_setvariablesScalarWhereInput | region_setvariablesScalarWhereInput[]
  }

  export type region_setvariablesUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<region_setvariablesCreateWithoutRegionsInput, region_setvariablesUncheckedCreateWithoutRegionsInput> | region_setvariablesCreateWithoutRegionsInput[] | region_setvariablesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: region_setvariablesCreateOrConnectWithoutRegionsInput | region_setvariablesCreateOrConnectWithoutRegionsInput[]
    upsert?: region_setvariablesUpsertWithWhereUniqueWithoutRegionsInput | region_setvariablesUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: region_setvariablesCreateManyRegionsInputEnvelope
    set?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    disconnect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    delete?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    connect?: region_setvariablesWhereUniqueInput | region_setvariablesWhereUniqueInput[]
    update?: region_setvariablesUpdateWithWhereUniqueWithoutRegionsInput | region_setvariablesUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: region_setvariablesUpdateManyWithWhereWithoutRegionsInput | region_setvariablesUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: region_setvariablesScalarWhereInput | region_setvariablesScalarWhereInput[]
  }

  export type ibm_infoCreateNestedOneWithoutGallon_gross_historyInput = {
    create?: XOR<ibm_infoCreateWithoutGallon_gross_historyInput, ibm_infoUncheckedCreateWithoutGallon_gross_historyInput>
    connectOrCreate?: ibm_infoCreateOrConnectWithoutGallon_gross_historyInput
    connect?: ibm_infoWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutGallon_gross_historyInput = {
    create?: XOR<usersCreateWithoutGallon_gross_historyInput, usersUncheckedCreateWithoutGallon_gross_historyInput>
    connectOrCreate?: usersCreateOrConnectWithoutGallon_gross_historyInput
    connect?: usersWhereUniqueInput
  }

  export type ibm_infoUpdateOneWithoutGallon_gross_historyNestedInput = {
    create?: XOR<ibm_infoCreateWithoutGallon_gross_historyInput, ibm_infoUncheckedCreateWithoutGallon_gross_historyInput>
    connectOrCreate?: ibm_infoCreateOrConnectWithoutGallon_gross_historyInput
    upsert?: ibm_infoUpsertWithoutGallon_gross_historyInput
    disconnect?: ibm_infoWhereInput | boolean
    delete?: ibm_infoWhereInput | boolean
    connect?: ibm_infoWhereUniqueInput
    update?: XOR<XOR<ibm_infoUpdateToOneWithWhereWithoutGallon_gross_historyInput, ibm_infoUpdateWithoutGallon_gross_historyInput>, ibm_infoUncheckedUpdateWithoutGallon_gross_historyInput>
  }

  export type usersUpdateOneWithoutGallon_gross_historyNestedInput = {
    create?: XOR<usersCreateWithoutGallon_gross_historyInput, usersUncheckedCreateWithoutGallon_gross_historyInput>
    connectOrCreate?: usersCreateOrConnectWithoutGallon_gross_historyInput
    upsert?: usersUpsertWithoutGallon_gross_historyInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGallon_gross_historyInput, usersUpdateWithoutGallon_gross_historyInput>, usersUncheckedUpdateWithoutGallon_gross_historyInput>
  }

  export type ibm_infoCreateNestedOneWithoutProduct_gross_historyInput = {
    create?: XOR<ibm_infoCreateWithoutProduct_gross_historyInput, ibm_infoUncheckedCreateWithoutProduct_gross_historyInput>
    connectOrCreate?: ibm_infoCreateOrConnectWithoutProduct_gross_historyInput
    connect?: ibm_infoWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProduct_gross_historyInput = {
    create?: XOR<usersCreateWithoutProduct_gross_historyInput, usersUncheckedCreateWithoutProduct_gross_historyInput>
    connectOrCreate?: usersCreateOrConnectWithoutProduct_gross_historyInput
    connect?: usersWhereUniqueInput
  }

  export type ibm_infoUpdateOneWithoutProduct_gross_historyNestedInput = {
    create?: XOR<ibm_infoCreateWithoutProduct_gross_historyInput, ibm_infoUncheckedCreateWithoutProduct_gross_historyInput>
    connectOrCreate?: ibm_infoCreateOrConnectWithoutProduct_gross_historyInput
    upsert?: ibm_infoUpsertWithoutProduct_gross_historyInput
    disconnect?: ibm_infoWhereInput | boolean
    delete?: ibm_infoWhereInput | boolean
    connect?: ibm_infoWhereUniqueInput
    update?: XOR<XOR<ibm_infoUpdateToOneWithWhereWithoutProduct_gross_historyInput, ibm_infoUpdateWithoutProduct_gross_historyInput>, ibm_infoUncheckedUpdateWithoutProduct_gross_historyInput>
  }

  export type usersUpdateOneWithoutProduct_gross_historyNestedInput = {
    create?: XOR<usersCreateWithoutProduct_gross_historyInput, usersUncheckedCreateWithoutProduct_gross_historyInput>
    connectOrCreate?: usersCreateOrConnectWithoutProduct_gross_historyInput
    upsert?: usersUpsertWithoutProduct_gross_historyInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProduct_gross_historyInput, usersUpdateWithoutProduct_gross_historyInput>, usersUncheckedUpdateWithoutProduct_gross_historyInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type gallon_gross_historyCreateWithoutIbm_infoInput = {
    gallon_history_uuid?: string
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
    users?: usersCreateNestedOneWithoutGallon_gross_historyInput
  }

  export type gallon_gross_historyUncheckedCreateWithoutIbm_infoInput = {
    gallon_history_uuid?: string
    use_uuid?: string | null
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
  }

  export type gallon_gross_historyCreateOrConnectWithoutIbm_infoInput = {
    where: gallon_gross_historyWhereUniqueInput
    create: XOR<gallon_gross_historyCreateWithoutIbm_infoInput, gallon_gross_historyUncheckedCreateWithoutIbm_infoInput>
  }

  export type gallon_gross_historyCreateManyIbm_infoInputEnvelope = {
    data: gallon_gross_historyCreateManyIbm_infoInput | gallon_gross_historyCreateManyIbm_infoInput[]
    skipDuplicates?: boolean
  }

  export type gas_station_setvariablesCreateWithoutIbm_infoInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    users?: usersCreateNestedOneWithoutGas_station_setvariablesInput
  }

  export type gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    use_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
  }

  export type gas_station_setvariablesCreateOrConnectWithoutIbm_infoInput = {
    where: gas_station_setvariablesWhereUniqueInput
    create: XOR<gas_station_setvariablesCreateWithoutIbm_infoInput, gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput>
  }

  export type gas_station_setvariablesCreateManyIbm_infoInputEnvelope = {
    data: gas_station_setvariablesCreateManyIbm_infoInput | gas_station_setvariablesCreateManyIbm_infoInput[]
    skipDuplicates?: boolean
  }

  export type product_gross_historyCreateWithoutIbm_infoInput = {
    product_history_uuid?: string
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
    users?: usersCreateNestedOneWithoutProduct_gross_historyInput
  }

  export type product_gross_historyUncheckedCreateWithoutIbm_infoInput = {
    product_history_uuid?: string
    use_uuid?: string | null
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
  }

  export type product_gross_historyCreateOrConnectWithoutIbm_infoInput = {
    where: product_gross_historyWhereUniqueInput
    create: XOR<product_gross_historyCreateWithoutIbm_infoInput, product_gross_historyUncheckedCreateWithoutIbm_infoInput>
  }

  export type product_gross_historyCreateManyIbm_infoInputEnvelope = {
    data: product_gross_historyCreateManyIbm_infoInput | product_gross_historyCreateManyIbm_infoInput[]
    skipDuplicates?: boolean
  }

  export type gallon_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput = {
    where: gallon_gross_historyWhereUniqueInput
    update: XOR<gallon_gross_historyUpdateWithoutIbm_infoInput, gallon_gross_historyUncheckedUpdateWithoutIbm_infoInput>
    create: XOR<gallon_gross_historyCreateWithoutIbm_infoInput, gallon_gross_historyUncheckedCreateWithoutIbm_infoInput>
  }

  export type gallon_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput = {
    where: gallon_gross_historyWhereUniqueInput
    data: XOR<gallon_gross_historyUpdateWithoutIbm_infoInput, gallon_gross_historyUncheckedUpdateWithoutIbm_infoInput>
  }

  export type gallon_gross_historyUpdateManyWithWhereWithoutIbm_infoInput = {
    where: gallon_gross_historyScalarWhereInput
    data: XOR<gallon_gross_historyUpdateManyMutationInput, gallon_gross_historyUncheckedUpdateManyWithoutIbm_infoInput>
  }

  export type gallon_gross_historyScalarWhereInput = {
    AND?: gallon_gross_historyScalarWhereInput | gallon_gross_historyScalarWhereInput[]
    OR?: gallon_gross_historyScalarWhereInput[]
    NOT?: gallon_gross_historyScalarWhereInput | gallon_gross_historyScalarWhereInput[]
    gallon_history_uuid?: UuidFilter<"gallon_gross_history"> | string
    ibm_info_id?: UuidNullableFilter<"gallon_gross_history"> | string | null
    use_uuid?: UuidNullableFilter<"gallon_gross_history"> | string | null
    gallon_history_gross?: FloatNullableFilter<"gallon_gross_history"> | number | null
    gallon_history_date?: DateTimeNullableFilter<"gallon_gross_history"> | Date | string | null
    gallon_history_created_at?: DateTimeFilter<"gallon_gross_history"> | Date | string
    gallon_history_updated_at?: DateTimeFilter<"gallon_gross_history"> | Date | string
  }

  export type gas_station_setvariablesUpsertWithWhereUniqueWithoutIbm_infoInput = {
    where: gas_station_setvariablesWhereUniqueInput
    update: XOR<gas_station_setvariablesUpdateWithoutIbm_infoInput, gas_station_setvariablesUncheckedUpdateWithoutIbm_infoInput>
    create: XOR<gas_station_setvariablesCreateWithoutIbm_infoInput, gas_station_setvariablesUncheckedCreateWithoutIbm_infoInput>
  }

  export type gas_station_setvariablesUpdateWithWhereUniqueWithoutIbm_infoInput = {
    where: gas_station_setvariablesWhereUniqueInput
    data: XOR<gas_station_setvariablesUpdateWithoutIbm_infoInput, gas_station_setvariablesUncheckedUpdateWithoutIbm_infoInput>
  }

  export type gas_station_setvariablesUpdateManyWithWhereWithoutIbm_infoInput = {
    where: gas_station_setvariablesScalarWhereInput
    data: XOR<gas_station_setvariablesUpdateManyMutationInput, gas_station_setvariablesUncheckedUpdateManyWithoutIbm_infoInput>
  }

  export type gas_station_setvariablesScalarWhereInput = {
    AND?: gas_station_setvariablesScalarWhereInput | gas_station_setvariablesScalarWhereInput[]
    OR?: gas_station_setvariablesScalarWhereInput[]
    NOT?: gas_station_setvariablesScalarWhereInput | gas_station_setvariablesScalarWhereInput[]
    gas_station_uuid?: UuidFilter<"gas_station_setvariables"> | string
    gas_station_marginGC?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_type_marginGC?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_whats_app?: StringNullableListFilter<"gas_station_setvariables">
    gas_station_created_at?: DateTimeFilter<"gas_station_setvariables"> | Date | string
    gas_station_updated_at?: DateTimeFilter<"gas_station_setvariables"> | Date | string
    ibm_info_id?: UuidNullableFilter<"gas_station_setvariables"> | string | null
    use_uuid?: UuidNullableFilter<"gas_station_setvariables"> | string | null
    verification_msg_sent?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_hour_marginGC?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_marginGC?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_margin_MLT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TMP?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_MLT_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMC_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMF_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMP_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_TMVOL_modal?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_ETANOL_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_GASOLINA_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_DIESEL_GROUP?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ETANOL_COMUM?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_invoice_comb?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_comb_daily?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_invoice_prod_daily?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_TOTAL_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_freight_value?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_literage?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_gross_result_product?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: FloatNullableFilter<"gas_station_setvariables"> | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: BoolNullableFilter<"gas_station_setvariables"> | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: DateTimeNullableFilter<"gas_station_setvariables"> | Date | string | null
  }

  export type product_gross_historyUpsertWithWhereUniqueWithoutIbm_infoInput = {
    where: product_gross_historyWhereUniqueInput
    update: XOR<product_gross_historyUpdateWithoutIbm_infoInput, product_gross_historyUncheckedUpdateWithoutIbm_infoInput>
    create: XOR<product_gross_historyCreateWithoutIbm_infoInput, product_gross_historyUncheckedCreateWithoutIbm_infoInput>
  }

  export type product_gross_historyUpdateWithWhereUniqueWithoutIbm_infoInput = {
    where: product_gross_historyWhereUniqueInput
    data: XOR<product_gross_historyUpdateWithoutIbm_infoInput, product_gross_historyUncheckedUpdateWithoutIbm_infoInput>
  }

  export type product_gross_historyUpdateManyWithWhereWithoutIbm_infoInput = {
    where: product_gross_historyScalarWhereInput
    data: XOR<product_gross_historyUpdateManyMutationInput, product_gross_historyUncheckedUpdateManyWithoutIbm_infoInput>
  }

  export type product_gross_historyScalarWhereInput = {
    AND?: product_gross_historyScalarWhereInput | product_gross_historyScalarWhereInput[]
    OR?: product_gross_historyScalarWhereInput[]
    NOT?: product_gross_historyScalarWhereInput | product_gross_historyScalarWhereInput[]
    product_history_uuid?: UuidFilter<"product_gross_history"> | string
    ibm_info_id?: UuidNullableFilter<"product_gross_history"> | string | null
    use_uuid?: UuidNullableFilter<"product_gross_history"> | string | null
    product_history_gross?: FloatNullableFilter<"product_gross_history"> | number | null
    product_history_date?: DateTimeNullableFilter<"product_gross_history"> | Date | string | null
    product_history_created_at?: DateTimeFilter<"product_gross_history"> | Date | string
    product_history_updated_at?: DateTimeFilter<"product_gross_history"> | Date | string
  }

  export type gallon_gross_historyCreateWithoutUsersInput = {
    gallon_history_uuid?: string
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
    ibm_info?: ibm_infoCreateNestedOneWithoutGallon_gross_historyInput
  }

  export type gallon_gross_historyUncheckedCreateWithoutUsersInput = {
    gallon_history_uuid?: string
    ibm_info_id?: string | null
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
  }

  export type gallon_gross_historyCreateOrConnectWithoutUsersInput = {
    where: gallon_gross_historyWhereUniqueInput
    create: XOR<gallon_gross_historyCreateWithoutUsersInput, gallon_gross_historyUncheckedCreateWithoutUsersInput>
  }

  export type gallon_gross_historyCreateManyUsersInputEnvelope = {
    data: gallon_gross_historyCreateManyUsersInput | gallon_gross_historyCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type gas_station_setvariablesCreateWithoutUsersInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    ibm_info?: ibm_infoCreateNestedOneWithoutGas_station_setvariablesInput
  }

  export type gas_station_setvariablesUncheckedCreateWithoutUsersInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    ibm_info_id?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
  }

  export type gas_station_setvariablesCreateOrConnectWithoutUsersInput = {
    where: gas_station_setvariablesWhereUniqueInput
    create: XOR<gas_station_setvariablesCreateWithoutUsersInput, gas_station_setvariablesUncheckedCreateWithoutUsersInput>
  }

  export type gas_station_setvariablesCreateManyUsersInputEnvelope = {
    data: gas_station_setvariablesCreateManyUsersInput | gas_station_setvariablesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type product_gross_historyCreateWithoutUsersInput = {
    product_history_uuid?: string
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
    ibm_info?: ibm_infoCreateNestedOneWithoutProduct_gross_historyInput
  }

  export type product_gross_historyUncheckedCreateWithoutUsersInput = {
    product_history_uuid?: string
    ibm_info_id?: string | null
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
  }

  export type product_gross_historyCreateOrConnectWithoutUsersInput = {
    where: product_gross_historyWhereUniqueInput
    create: XOR<product_gross_historyCreateWithoutUsersInput, product_gross_historyUncheckedCreateWithoutUsersInput>
  }

  export type product_gross_historyCreateManyUsersInputEnvelope = {
    data: product_gross_historyCreateManyUsersInput | product_gross_historyCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type region_setvariablesCreateWithoutUsersInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    regions?: regionsCreateNestedOneWithoutRegion_setvariablesInput
  }

  export type region_setvariablesUncheckedCreateWithoutUsersInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    regions_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
  }

  export type region_setvariablesCreateOrConnectWithoutUsersInput = {
    where: region_setvariablesWhereUniqueInput
    create: XOR<region_setvariablesCreateWithoutUsersInput, region_setvariablesUncheckedCreateWithoutUsersInput>
  }

  export type region_setvariablesCreateManyUsersInputEnvelope = {
    data: region_setvariablesCreateManyUsersInput | region_setvariablesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type gallon_gross_historyUpsertWithWhereUniqueWithoutUsersInput = {
    where: gallon_gross_historyWhereUniqueInput
    update: XOR<gallon_gross_historyUpdateWithoutUsersInput, gallon_gross_historyUncheckedUpdateWithoutUsersInput>
    create: XOR<gallon_gross_historyCreateWithoutUsersInput, gallon_gross_historyUncheckedCreateWithoutUsersInput>
  }

  export type gallon_gross_historyUpdateWithWhereUniqueWithoutUsersInput = {
    where: gallon_gross_historyWhereUniqueInput
    data: XOR<gallon_gross_historyUpdateWithoutUsersInput, gallon_gross_historyUncheckedUpdateWithoutUsersInput>
  }

  export type gallon_gross_historyUpdateManyWithWhereWithoutUsersInput = {
    where: gallon_gross_historyScalarWhereInput
    data: XOR<gallon_gross_historyUpdateManyMutationInput, gallon_gross_historyUncheckedUpdateManyWithoutUsersInput>
  }

  export type gas_station_setvariablesUpsertWithWhereUniqueWithoutUsersInput = {
    where: gas_station_setvariablesWhereUniqueInput
    update: XOR<gas_station_setvariablesUpdateWithoutUsersInput, gas_station_setvariablesUncheckedUpdateWithoutUsersInput>
    create: XOR<gas_station_setvariablesCreateWithoutUsersInput, gas_station_setvariablesUncheckedCreateWithoutUsersInput>
  }

  export type gas_station_setvariablesUpdateWithWhereUniqueWithoutUsersInput = {
    where: gas_station_setvariablesWhereUniqueInput
    data: XOR<gas_station_setvariablesUpdateWithoutUsersInput, gas_station_setvariablesUncheckedUpdateWithoutUsersInput>
  }

  export type gas_station_setvariablesUpdateManyWithWhereWithoutUsersInput = {
    where: gas_station_setvariablesScalarWhereInput
    data: XOR<gas_station_setvariablesUpdateManyMutationInput, gas_station_setvariablesUncheckedUpdateManyWithoutUsersInput>
  }

  export type product_gross_historyUpsertWithWhereUniqueWithoutUsersInput = {
    where: product_gross_historyWhereUniqueInput
    update: XOR<product_gross_historyUpdateWithoutUsersInput, product_gross_historyUncheckedUpdateWithoutUsersInput>
    create: XOR<product_gross_historyCreateWithoutUsersInput, product_gross_historyUncheckedCreateWithoutUsersInput>
  }

  export type product_gross_historyUpdateWithWhereUniqueWithoutUsersInput = {
    where: product_gross_historyWhereUniqueInput
    data: XOR<product_gross_historyUpdateWithoutUsersInput, product_gross_historyUncheckedUpdateWithoutUsersInput>
  }

  export type product_gross_historyUpdateManyWithWhereWithoutUsersInput = {
    where: product_gross_historyScalarWhereInput
    data: XOR<product_gross_historyUpdateManyMutationInput, product_gross_historyUncheckedUpdateManyWithoutUsersInput>
  }

  export type region_setvariablesUpsertWithWhereUniqueWithoutUsersInput = {
    where: region_setvariablesWhereUniqueInput
    update: XOR<region_setvariablesUpdateWithoutUsersInput, region_setvariablesUncheckedUpdateWithoutUsersInput>
    create: XOR<region_setvariablesCreateWithoutUsersInput, region_setvariablesUncheckedCreateWithoutUsersInput>
  }

  export type region_setvariablesUpdateWithWhereUniqueWithoutUsersInput = {
    where: region_setvariablesWhereUniqueInput
    data: XOR<region_setvariablesUpdateWithoutUsersInput, region_setvariablesUncheckedUpdateWithoutUsersInput>
  }

  export type region_setvariablesUpdateManyWithWhereWithoutUsersInput = {
    where: region_setvariablesScalarWhereInput
    data: XOR<region_setvariablesUpdateManyMutationInput, region_setvariablesUncheckedUpdateManyWithoutUsersInput>
  }

  export type region_setvariablesScalarWhereInput = {
    AND?: region_setvariablesScalarWhereInput | region_setvariablesScalarWhereInput[]
    OR?: region_setvariablesScalarWhereInput[]
    NOT?: region_setvariablesScalarWhereInput | region_setvariablesScalarWhereInput[]
    region_uuid?: UuidFilter<"region_setvariables"> | string
    region_marginGC?: FloatNullableFilter<"region_setvariables"> | number | null
    region_type_marginGC?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_whats_app?: StringNullableListFilter<"region_setvariables">
    region_station_created_at?: DateTimeFilter<"region_setvariables"> | Date | string
    region_station_updated_at?: DateTimeFilter<"region_setvariables"> | Date | string
    use_uuid?: UuidNullableFilter<"region_setvariables"> | string | null
    regions_uuid?: UuidNullableFilter<"region_setvariables"> | string | null
    verification_msg_sent?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_marginGC?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_marginGC?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_marginGC?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_station_ETANOL_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_GASOLINA_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_MLT_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMC_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMF_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMP_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_station_TMVOL_modal?: FloatNullableFilter<"region_setvariables"> | number | null
    region_margin_DIESEL_GROUP?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PODIUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_GASOLINA_PODIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PODIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_GASOLINA_PREMIUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_DIESEL_GROUP_S500?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_margin_ETANOL_COMUM?: FloatNullableFilter<"region_setvariables"> | number | null
    region_sanado_hour_ETANOL_COMUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    region_type_margin_ETANOL_COMUM?: BoolNullableFilter<"region_setvariables"> | boolean | null
    verification_hour_margin_ETANOL_COMUM?: DateTimeNullableFilter<"region_setvariables"> | Date | string | null
  }

  export type ibm_infoCreateWithoutGas_station_setvariablesInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyCreateNestedManyWithoutIbm_infoInput
    product_gross_history?: product_gross_historyCreateNestedManyWithoutIbm_infoInput
  }

  export type ibm_infoUncheckedCreateWithoutGas_station_setvariablesInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput
    product_gross_history?: product_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput
  }

  export type ibm_infoCreateOrConnectWithoutGas_station_setvariablesInput = {
    where: ibm_infoWhereUniqueInput
    create: XOR<ibm_infoCreateWithoutGas_station_setvariablesInput, ibm_infoUncheckedCreateWithoutGas_station_setvariablesInput>
  }

  export type usersCreateWithoutGas_station_setvariablesInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutGas_station_setvariablesInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyUncheckedCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyUncheckedCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutGas_station_setvariablesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGas_station_setvariablesInput, usersUncheckedCreateWithoutGas_station_setvariablesInput>
  }

  export type ibm_infoUpsertWithoutGas_station_setvariablesInput = {
    update: XOR<ibm_infoUpdateWithoutGas_station_setvariablesInput, ibm_infoUncheckedUpdateWithoutGas_station_setvariablesInput>
    create: XOR<ibm_infoCreateWithoutGas_station_setvariablesInput, ibm_infoUncheckedCreateWithoutGas_station_setvariablesInput>
    where?: ibm_infoWhereInput
  }

  export type ibm_infoUpdateToOneWithWhereWithoutGas_station_setvariablesInput = {
    where?: ibm_infoWhereInput
    data: XOR<ibm_infoUpdateWithoutGas_station_setvariablesInput, ibm_infoUncheckedUpdateWithoutGas_station_setvariablesInput>
  }

  export type ibm_infoUpdateWithoutGas_station_setvariablesInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUpdateManyWithoutIbm_infoNestedInput
    product_gross_history?: product_gross_historyUpdateManyWithoutIbm_infoNestedInput
  }

  export type ibm_infoUncheckedUpdateWithoutGas_station_setvariablesInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput
    product_gross_history?: product_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput
  }

  export type usersUpsertWithoutGas_station_setvariablesInput = {
    update: XOR<usersUpdateWithoutGas_station_setvariablesInput, usersUncheckedUpdateWithoutGas_station_setvariablesInput>
    create: XOR<usersCreateWithoutGas_station_setvariablesInput, usersUncheckedCreateWithoutGas_station_setvariablesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGas_station_setvariablesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGas_station_setvariablesInput, usersUncheckedUpdateWithoutGas_station_setvariablesInput>
  }

  export type usersUpdateWithoutGas_station_setvariablesInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutGas_station_setvariablesInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type regionsCreateWithoutRegion_setvariablesInput = {
    regions_uuid?: string
    regions_name?: string | null
    regions_types?: string | null
    region_created_at?: Date | string
    region_updated_at?: Date | string
    regions_margin_GC?: regionsCreateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsCreateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsCreateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsCreateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsCreateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsCreateregions_margin_ETANOL_COMUMInput | number[]
  }

  export type regionsUncheckedCreateWithoutRegion_setvariablesInput = {
    regions_uuid?: string
    regions_name?: string | null
    regions_types?: string | null
    region_created_at?: Date | string
    region_updated_at?: Date | string
    regions_margin_GC?: regionsCreateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsCreateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsCreateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsCreateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsCreateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsCreateregions_margin_ETANOL_COMUMInput | number[]
  }

  export type regionsCreateOrConnectWithoutRegion_setvariablesInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutRegion_setvariablesInput, regionsUncheckedCreateWithoutRegion_setvariablesInput>
  }

  export type usersCreateWithoutRegion_setvariablesInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyCreateNestedManyWithoutUsersInput
    gas_station_setvariables?: gas_station_setvariablesCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRegion_setvariablesInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyUncheckedCreateNestedManyWithoutUsersInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRegion_setvariablesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRegion_setvariablesInput, usersUncheckedCreateWithoutRegion_setvariablesInput>
  }

  export type regionsUpsertWithoutRegion_setvariablesInput = {
    update: XOR<regionsUpdateWithoutRegion_setvariablesInput, regionsUncheckedUpdateWithoutRegion_setvariablesInput>
    create: XOR<regionsCreateWithoutRegion_setvariablesInput, regionsUncheckedCreateWithoutRegion_setvariablesInput>
    where?: regionsWhereInput
  }

  export type regionsUpdateToOneWithWhereWithoutRegion_setvariablesInput = {
    where?: regionsWhereInput
    data: XOR<regionsUpdateWithoutRegion_setvariablesInput, regionsUncheckedUpdateWithoutRegion_setvariablesInput>
  }

  export type regionsUpdateWithoutRegion_setvariablesInput = {
    regions_uuid?: StringFieldUpdateOperationsInput | string
    regions_name?: NullableStringFieldUpdateOperationsInput | string | null
    regions_types?: NullableStringFieldUpdateOperationsInput | string | null
    region_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_margin_GC?: regionsUpdateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsUpdateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsUpdateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsUpdateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsUpdateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsUpdateregions_margin_ETANOL_COMUMInput | number[]
  }

  export type regionsUncheckedUpdateWithoutRegion_setvariablesInput = {
    regions_uuid?: StringFieldUpdateOperationsInput | string
    regions_name?: NullableStringFieldUpdateOperationsInput | string | null
    regions_types?: NullableStringFieldUpdateOperationsInput | string | null
    region_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_margin_GC?: regionsUpdateregions_margin_GCInput | number[]
    regions_margin_GASOLINA_PODIUM?: regionsUpdateregions_margin_GASOLINA_PODIUMInput | number[]
    regions_margin_GASOLINA_PREMIUM?: regionsUpdateregions_margin_GASOLINA_PREMIUMInput | number[]
    regions_margin_DIESEL_GROUP?: regionsUpdateregions_margin_DIESEL_GROUPInput | number[]
    regions_margin_DIESEL_GROUP_S500?: regionsUpdateregions_margin_DIESEL_GROUP_S500Input | number[]
    regions_margin_ETANOL_COMUM?: regionsUpdateregions_margin_ETANOL_COMUMInput | number[]
  }

  export type usersUpsertWithoutRegion_setvariablesInput = {
    update: XOR<usersUpdateWithoutRegion_setvariablesInput, usersUncheckedUpdateWithoutRegion_setvariablesInput>
    create: XOR<usersCreateWithoutRegion_setvariablesInput, usersUncheckedCreateWithoutRegion_setvariablesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRegion_setvariablesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRegion_setvariablesInput, usersUncheckedUpdateWithoutRegion_setvariablesInput>
  }

  export type usersUpdateWithoutRegion_setvariablesInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUpdateManyWithoutUsersNestedInput
    gas_station_setvariables?: gas_station_setvariablesUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRegion_setvariablesInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type region_setvariablesCreateWithoutRegionsInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    users?: usersCreateNestedOneWithoutRegion_setvariablesInput
  }

  export type region_setvariablesUncheckedCreateWithoutRegionsInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    use_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
  }

  export type region_setvariablesCreateOrConnectWithoutRegionsInput = {
    where: region_setvariablesWhereUniqueInput
    create: XOR<region_setvariablesCreateWithoutRegionsInput, region_setvariablesUncheckedCreateWithoutRegionsInput>
  }

  export type region_setvariablesCreateManyRegionsInputEnvelope = {
    data: region_setvariablesCreateManyRegionsInput | region_setvariablesCreateManyRegionsInput[]
    skipDuplicates?: boolean
  }

  export type region_setvariablesUpsertWithWhereUniqueWithoutRegionsInput = {
    where: region_setvariablesWhereUniqueInput
    update: XOR<region_setvariablesUpdateWithoutRegionsInput, region_setvariablesUncheckedUpdateWithoutRegionsInput>
    create: XOR<region_setvariablesCreateWithoutRegionsInput, region_setvariablesUncheckedCreateWithoutRegionsInput>
  }

  export type region_setvariablesUpdateWithWhereUniqueWithoutRegionsInput = {
    where: region_setvariablesWhereUniqueInput
    data: XOR<region_setvariablesUpdateWithoutRegionsInput, region_setvariablesUncheckedUpdateWithoutRegionsInput>
  }

  export type region_setvariablesUpdateManyWithWhereWithoutRegionsInput = {
    where: region_setvariablesScalarWhereInput
    data: XOR<region_setvariablesUpdateManyMutationInput, region_setvariablesUncheckedUpdateManyWithoutRegionsInput>
  }

  export type ibm_infoCreateWithoutGallon_gross_historyInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gas_station_setvariables?: gas_station_setvariablesCreateNestedManyWithoutIbm_infoInput
    product_gross_history?: product_gross_historyCreateNestedManyWithoutIbm_infoInput
  }

  export type ibm_infoUncheckedCreateWithoutGallon_gross_historyInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gas_station_setvariables?: gas_station_setvariablesUncheckedCreateNestedManyWithoutIbm_infoInput
    product_gross_history?: product_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput
  }

  export type ibm_infoCreateOrConnectWithoutGallon_gross_historyInput = {
    where: ibm_infoWhereUniqueInput
    create: XOR<ibm_infoCreateWithoutGallon_gross_historyInput, ibm_infoUncheckedCreateWithoutGallon_gross_historyInput>
  }

  export type usersCreateWithoutGallon_gross_historyInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_setvariables?: gas_station_setvariablesCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutGallon_gross_historyInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_setvariables?: gas_station_setvariablesUncheckedCreateNestedManyWithoutUsersInput
    product_gross_history?: product_gross_historyUncheckedCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutGallon_gross_historyInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGallon_gross_historyInput, usersUncheckedCreateWithoutGallon_gross_historyInput>
  }

  export type ibm_infoUpsertWithoutGallon_gross_historyInput = {
    update: XOR<ibm_infoUpdateWithoutGallon_gross_historyInput, ibm_infoUncheckedUpdateWithoutGallon_gross_historyInput>
    create: XOR<ibm_infoCreateWithoutGallon_gross_historyInput, ibm_infoUncheckedCreateWithoutGallon_gross_historyInput>
    where?: ibm_infoWhereInput
  }

  export type ibm_infoUpdateToOneWithWhereWithoutGallon_gross_historyInput = {
    where?: ibm_infoWhereInput
    data: XOR<ibm_infoUpdateWithoutGallon_gross_historyInput, ibm_infoUncheckedUpdateWithoutGallon_gross_historyInput>
  }

  export type ibm_infoUpdateWithoutGallon_gross_historyInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gas_station_setvariables?: gas_station_setvariablesUpdateManyWithoutIbm_infoNestedInput
    product_gross_history?: product_gross_historyUpdateManyWithoutIbm_infoNestedInput
  }

  export type ibm_infoUncheckedUpdateWithoutGallon_gross_historyInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gas_station_setvariables?: gas_station_setvariablesUncheckedUpdateManyWithoutIbm_infoNestedInput
    product_gross_history?: product_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput
  }

  export type usersUpsertWithoutGallon_gross_historyInput = {
    update: XOR<usersUpdateWithoutGallon_gross_historyInput, usersUncheckedUpdateWithoutGallon_gross_historyInput>
    create: XOR<usersCreateWithoutGallon_gross_historyInput, usersUncheckedCreateWithoutGallon_gross_historyInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGallon_gross_historyInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGallon_gross_historyInput, usersUncheckedUpdateWithoutGallon_gross_historyInput>
  }

  export type usersUpdateWithoutGallon_gross_historyInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_setvariables?: gas_station_setvariablesUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutGallon_gross_historyInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_setvariables?: gas_station_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
    product_gross_history?: product_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ibm_infoCreateWithoutProduct_gross_historyInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyCreateNestedManyWithoutIbm_infoInput
    gas_station_setvariables?: gas_station_setvariablesCreateNestedManyWithoutIbm_infoInput
  }

  export type ibm_infoUncheckedCreateWithoutProduct_gross_historyInput = {
    ibm?: string | null
    nomefantasia?: string | null
    cnpj?: string | null
    razaosocial?: string | null
    cep?: string | null
    lat?: number | null
    long?: number | null
    id?: string
    endereco?: string | null
    regional?: string | null
    ibm_margin_GC?: ibm_infoCreateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoCreateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoCreateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoCreateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoCreateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoCreateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoCreateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoCreateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoCreateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUncheckedCreateNestedManyWithoutIbm_infoInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedCreateNestedManyWithoutIbm_infoInput
  }

  export type ibm_infoCreateOrConnectWithoutProduct_gross_historyInput = {
    where: ibm_infoWhereUniqueInput
    create: XOR<ibm_infoCreateWithoutProduct_gross_historyInput, ibm_infoUncheckedCreateWithoutProduct_gross_historyInput>
  }

  export type usersCreateWithoutProduct_gross_historyInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyCreateNestedManyWithoutUsersInput
    gas_station_setvariables?: gas_station_setvariablesCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProduct_gross_historyInput = {
    use_uuid?: string
    use_name?: string | null
    use_email?: string | null
    use_password?: string | null
    use_created_at?: Date | string
    use_updated_at?: Date | string
    use_date_expire?: Date | string | null
    use_token?: string | null
    use_level?: string | null
    use_whats_app?: usersCreateuse_whats_appInput | string[]
    use_mlt?: number | null
    use_tmc?: number | null
    use_tmf?: number | null
    use_tmp?: number | null
    use_tmvol?: number | null
    use_lucro_bruto_operacional_galonagem?: number | null
    use_lucro_bruto_operacional_produto?: number | null
    use_lucro_bruto_operacional?: number | null
    use_ETANOL_COMUM_comb?: number | null
    use_GASOLINA_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gallon_gross_history?: gallon_gross_historyUncheckedCreateNestedManyWithoutUsersInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedCreateNestedManyWithoutUsersInput
    region_setvariables?: region_setvariablesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProduct_gross_historyInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProduct_gross_historyInput, usersUncheckedCreateWithoutProduct_gross_historyInput>
  }

  export type ibm_infoUpsertWithoutProduct_gross_historyInput = {
    update: XOR<ibm_infoUpdateWithoutProduct_gross_historyInput, ibm_infoUncheckedUpdateWithoutProduct_gross_historyInput>
    create: XOR<ibm_infoCreateWithoutProduct_gross_historyInput, ibm_infoUncheckedCreateWithoutProduct_gross_historyInput>
    where?: ibm_infoWhereInput
  }

  export type ibm_infoUpdateToOneWithWhereWithoutProduct_gross_historyInput = {
    where?: ibm_infoWhereInput
    data: XOR<ibm_infoUpdateWithoutProduct_gross_historyInput, ibm_infoUncheckedUpdateWithoutProduct_gross_historyInput>
  }

  export type ibm_infoUpdateWithoutProduct_gross_historyInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUpdateManyWithoutIbm_infoNestedInput
    gas_station_setvariables?: gas_station_setvariablesUpdateManyWithoutIbm_infoNestedInput
  }

  export type ibm_infoUncheckedUpdateWithoutProduct_gross_historyInput = {
    ibm?: NullableStringFieldUpdateOperationsInput | string | null
    nomefantasia?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    razaosocial?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    long?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    regional?: NullableStringFieldUpdateOperationsInput | string | null
    ibm_margin_GC?: ibm_infoUpdateibm_margin_GCInput | number[]
    ibm_margin_GASOLINA_PODIUM?: ibm_infoUpdateibm_margin_GASOLINA_PODIUMInput | number[]
    ibm_margin_GASOLINA_PREMIUM?: ibm_infoUpdateibm_margin_GASOLINA_PREMIUMInput | number[]
    ibm_margin_DIESEL_GROUP?: ibm_infoUpdateibm_margin_DIESEL_GROUPInput | number[]
    ibm_margin_DIESEL_GROUP_S500?: ibm_infoUpdateibm_margin_DIESEL_GROUP_S500Input | number[]
    ibm_margin_ETANOL_COMUM?: ibm_infoUpdateibm_margin_ETANOL_COMUMInput | number[]
    ibm_margin_TOTAL_PRODUCT?: ibm_infoUpdateibm_margin_TOTAL_PRODUCTInput | number[]
    ibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: ibm_infoUpdateibm_margin_ADITIVOS_AUTOMOVEIS_PRODUCTInput | number[]
    ibm_margin_FILTROS_AR_PRODUCT?: ibm_infoUpdateibm_margin_FILTROS_AR_PRODUCTInput | number[]
    gallon_gross_history?: gallon_gross_historyUncheckedUpdateManyWithoutIbm_infoNestedInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedUpdateManyWithoutIbm_infoNestedInput
  }

  export type usersUpsertWithoutProduct_gross_historyInput = {
    update: XOR<usersUpdateWithoutProduct_gross_historyInput, usersUncheckedUpdateWithoutProduct_gross_historyInput>
    create: XOR<usersCreateWithoutProduct_gross_historyInput, usersUncheckedCreateWithoutProduct_gross_historyInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProduct_gross_historyInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProduct_gross_historyInput, usersUncheckedUpdateWithoutProduct_gross_historyInput>
  }

  export type usersUpdateWithoutProduct_gross_historyInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUpdateManyWithoutUsersNestedInput
    gas_station_setvariables?: gas_station_setvariablesUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProduct_gross_historyInput = {
    use_uuid?: StringFieldUpdateOperationsInput | string
    use_name?: NullableStringFieldUpdateOperationsInput | string | null
    use_email?: NullableStringFieldUpdateOperationsInput | string | null
    use_password?: NullableStringFieldUpdateOperationsInput | string | null
    use_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_date_expire?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    use_token?: NullableStringFieldUpdateOperationsInput | string | null
    use_level?: NullableStringFieldUpdateOperationsInput | string | null
    use_whats_app?: usersUpdateuse_whats_appInput | string[]
    use_mlt?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmc?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmf?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmp?: NullableFloatFieldUpdateOperationsInput | number | null
    use_tmvol?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_galonagem?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional_produto?: NullableFloatFieldUpdateOperationsInput | number | null
    use_lucro_bruto_operacional?: NullableFloatFieldUpdateOperationsInput | number | null
    use_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    use_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_gross_history?: gallon_gross_historyUncheckedUpdateManyWithoutUsersNestedInput
    gas_station_setvariables?: gas_station_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
    region_setvariables?: region_setvariablesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type gallon_gross_historyCreateManyIbm_infoInput = {
    gallon_history_uuid?: string
    use_uuid?: string | null
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
  }

  export type gas_station_setvariablesCreateManyIbm_infoInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    use_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
  }

  export type product_gross_historyCreateManyIbm_infoInput = {
    product_history_uuid?: string
    use_uuid?: string | null
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
  }

  export type gallon_gross_historyUpdateWithoutIbm_infoInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutGallon_gross_historyNestedInput
  }

  export type gallon_gross_historyUncheckedUpdateWithoutIbm_infoInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gallon_gross_historyUncheckedUpdateManyWithoutIbm_infoInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gas_station_setvariablesUpdateWithoutIbm_infoInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutGas_station_setvariablesNestedInput
  }

  export type gas_station_setvariablesUncheckedUpdateWithoutIbm_infoInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gas_station_setvariablesUncheckedUpdateManyWithoutIbm_infoInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_gross_historyUpdateWithoutIbm_infoInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutProduct_gross_historyNestedInput
  }

  export type product_gross_historyUncheckedUpdateWithoutIbm_infoInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_gross_historyUncheckedUpdateManyWithoutIbm_infoInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gallon_gross_historyCreateManyUsersInput = {
    gallon_history_uuid?: string
    ibm_info_id?: string | null
    gallon_history_gross?: number | null
    gallon_history_date?: Date | string | null
    gallon_history_created_at?: Date | string
    gallon_history_updated_at?: Date | string
  }

  export type gas_station_setvariablesCreateManyUsersInput = {
    gas_station_uuid?: string
    gas_station_marginGC?: number | null
    gas_station_type_marginGC?: boolean | null
    gas_station_whats_app?: gas_station_setvariablesCreategas_station_whats_appInput | string[]
    gas_station_created_at?: Date | string
    gas_station_updated_at?: Date | string
    ibm_info_id?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    gas_station_sanado_hour_marginGC?: Date | string | null
    gas_station_sanado_marginGC?: boolean | null
    gas_station_margin_MLT?: number | null
    gas_station_margin_TMP?: number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    gas_station_MLT_modal?: number | null
    gas_station_TMC_modal?: number | null
    gas_station_TMF_modal?: number | null
    gas_station_TMP_modal?: number | null
    gas_station_TMVOL_modal?: number | null
    gas_station_ETANOL_COMUM_comb?: number | null
    gas_station_GASOLINA_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    gas_station_margin_DIESEL_GROUP?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: boolean | null
    gas_station_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    gas_station_margin_ETANOL_COMUM?: number | null
    gas_station_sanado_hour_ETANOL_COMUM?: Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: boolean | null
    gas_station_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
    gas_station_invoice_comb?: number | null
    gas_station_invoice_prod?: number | null
    gas_station_invoice_comb_daily?: number | null
    gas_station_invoice_prod_daily?: number | null
    gas_station_margin_TOTAL_PRODUCT?: number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: Date | string | null
    gas_station_freight_value?: number | null
    gas_station_gross_result_literage?: number | null
    gas_station_gross_result_product?: number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: Date | string | null
  }

  export type product_gross_historyCreateManyUsersInput = {
    product_history_uuid?: string
    ibm_info_id?: string | null
    product_history_gross?: number | null
    product_history_date?: Date | string | null
    product_history_created_at?: Date | string
    product_history_updated_at?: Date | string
  }

  export type region_setvariablesCreateManyUsersInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    regions_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
  }

  export type gallon_gross_historyUpdateWithoutUsersInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info?: ibm_infoUpdateOneWithoutGallon_gross_historyNestedInput
  }

  export type gallon_gross_historyUncheckedUpdateWithoutUsersInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gallon_gross_historyUncheckedUpdateManyWithoutUsersInput = {
    gallon_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    gallon_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    gallon_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallon_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gallon_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gas_station_setvariablesUpdateWithoutUsersInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ibm_info?: ibm_infoUpdateOneWithoutGas_station_setvariablesNestedInput
  }

  export type gas_station_setvariablesUncheckedUpdateWithoutUsersInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gas_station_setvariablesUncheckedUpdateManyWithoutUsersInput = {
    gas_station_uuid?: StringFieldUpdateOperationsInput | string
    gas_station_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_whats_app?: gas_station_setvariablesUpdategas_station_whats_appInput | string[]
    gas_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gas_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_margin_MLT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TMP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_invoice_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_comb_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_invoice_prod_daily?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_TOTAL_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_TOTAL_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_TOTAL_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ADITIVOS_AUTOMOVEIS_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_freight_value?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_literage?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_gross_result_product?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_margin_FILTROS_AR_PRODUCT?: NullableFloatFieldUpdateOperationsInput | number | null
    gas_station_sanado_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gas_station_sanado_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gas_station_type_margin_FILTROS_AR_PRODUCT?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_FILTROS_AR_PRODUCT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_gross_historyUpdateWithoutUsersInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm_info?: ibm_infoUpdateOneWithoutProduct_gross_historyNestedInput
  }

  export type product_gross_historyUncheckedUpdateWithoutUsersInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_gross_historyUncheckedUpdateManyWithoutUsersInput = {
    product_history_uuid?: StringFieldUpdateOperationsInput | string
    ibm_info_id?: NullableStringFieldUpdateOperationsInput | string | null
    product_history_gross?: NullableFloatFieldUpdateOperationsInput | number | null
    product_history_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product_history_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product_history_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type region_setvariablesUpdateWithoutUsersInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regions?: regionsUpdateOneWithoutRegion_setvariablesNestedInput
  }

  export type region_setvariablesUncheckedUpdateWithoutUsersInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type region_setvariablesUncheckedUpdateManyWithoutUsersInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    regions_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type region_setvariablesCreateManyRegionsInput = {
    region_uuid?: string
    region_marginGC?: number | null
    region_type_marginGC?: boolean | null
    region_whats_app?: region_setvariablesCreateregion_whats_appInput | string[]
    region_station_created_at?: Date | string
    region_station_updated_at?: Date | string
    use_uuid?: string | null
    verification_msg_sent?: boolean | null
    verification_hour_marginGC?: Date | string | null
    region_sanado_hour_marginGC?: Date | string | null
    region_sanado_marginGC?: boolean | null
    region_station_ETANOL_COMUM_comb?: number | null
    region_station_GASOLINA_COMUM_comb?: number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: number | null
    region_station_MLT_modal?: number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: number | null
    region_station_TMC_modal?: number | null
    region_station_TMF_modal?: number | null
    region_station_TMP_modal?: number | null
    region_station_TMVOL_modal?: number | null
    region_margin_DIESEL_GROUP?: number | null
    region_sanado_hour_margin_DIESEL_GROUP?: Date | string | null
    region_sanado_margin_DIESEL_GROUP?: boolean | null
    region_type_margin_DIESEL_GROUP?: boolean | null
    verification_hour_margin_DIESEL_GROUP?: Date | string | null
    region_margin_GASOLINA_PODIUM?: number | null
    region_sanado_hour_GASOLINA_PODIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: boolean | null
    region_type_margin_GASOLINA_PODIUM?: boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: Date | string | null
    region_margin_GASOLINA_PREMIUM?: number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: boolean | null
    region_type_margin_GASOLINA_PREMIUM?: boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: Date | string | null
    region_margin_DIESEL_GROUP_S500?: number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: boolean | null
    region_type_margin_DIESEL_GROUP_S500?: boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: Date | string | null
    region_margin_ETANOL_COMUM?: number | null
    region_sanado_hour_ETANOL_COMUM?: Date | string | null
    region_sanado_margin_ETANOL_COMUM?: boolean | null
    region_type_margin_ETANOL_COMUM?: boolean | null
    verification_hour_margin_ETANOL_COMUM?: Date | string | null
  }

  export type region_setvariablesUpdateWithoutRegionsInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutRegion_setvariablesNestedInput
  }

  export type region_setvariablesUncheckedUpdateWithoutRegionsInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type region_setvariablesUncheckedUpdateManyWithoutRegionsInput = {
    region_uuid?: StringFieldUpdateOperationsInput | string
    region_marginGC?: NullableFloatFieldUpdateOperationsInput | number | null
    region_type_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_whats_app?: region_setvariablesUpdateregion_whats_appInput | string[]
    region_station_created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    region_station_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    use_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    verification_msg_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_marginGC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_marginGC?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_station_ETANOL_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_GASOLINA_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_GALONAGEM_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_OPERACIONAL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_LUCRO_BRUTO_PRODUTO_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_MLT_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S10_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_OLEO_DIESEL_B_S500_COMUM_comb?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMC_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMF_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMP_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_station_TMVOL_modal?: NullableFloatFieldUpdateOperationsInput | number | null
    region_margin_DIESEL_GROUP?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PODIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PODIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PODIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_GASOLINA_PREMIUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_GASOLINA_PREMIUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_hour_GASOLINA_PREMIUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_DIESEL_GROUP_S500?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_DIESEL_GROUP_S500?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_DIESEL_GROUP_S500?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_margin_ETANOL_COMUM?: NullableFloatFieldUpdateOperationsInput | number | null
    region_sanado_hour_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    region_sanado_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    region_type_margin_ETANOL_COMUM?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verification_hour_margin_ETANOL_COMUM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Ibm_infoCountOutputTypeDefaultArgs instead
     */
    export type Ibm_infoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Ibm_infoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionsCountOutputTypeDefaultArgs instead
     */
    export type RegionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ibm_infoDefaultArgs instead
     */
    export type ibm_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ibm_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gas_station_setvariablesDefaultArgs instead
     */
    export type gas_station_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gas_station_setvariablesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use region_setvariablesDefaultArgs instead
     */
    export type region_setvariablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = region_setvariablesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use regionsDefaultArgs instead
     */
    export type regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = regionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use big_numbers_valuesDefaultArgs instead
     */
    export type big_numbers_valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = big_numbers_valuesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gallon_gross_historyDefaultArgs instead
     */
    export type gallon_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gallon_gross_historyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use product_gross_historyDefaultArgs instead
     */
    export type product_gross_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = product_gross_historyDefaultArgs<ExtArgs>

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