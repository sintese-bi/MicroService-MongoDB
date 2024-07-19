
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
 * Model VendasFormaspg
 * 
 */
export type VendasFormaspg = $Result.DefaultSelection<Prisma.$VendasFormaspgPayload>
/**
 * Model VendasItems
 * 
 */
export type VendasItems = $Result.DefaultSelection<Prisma.$VendasItemsPayload>
/**
 * Model Vendas
 * 
 */
export type Vendas = $Result.DefaultSelection<Prisma.$VendasPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vendas
 * const vendas = await prisma.vendas.findMany()
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
   * // Fetch zero or more Vendas
   * const vendas = await prisma.vendas.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.vendas`: Exposes CRUD operations for the **Vendas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendas
    * const vendas = await prisma.vendas.findMany()
    * ```
    */
  get vendas(): Prisma.VendasDelegate<ExtArgs>;
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
    Vendas: 'Vendas'
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
      modelProps: 'vendas'
      txIsolationLevel: never
    },
    model: {
      Vendas: {
        payload: Prisma.$VendasPayload<ExtArgs>
        fields: Prisma.VendasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          findFirst: {
            args: Prisma.VendasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          findMany: {
            args: Prisma.VendasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>[]
          }
          create: {
            args: Prisma.VendasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          createMany: {
            args: Prisma.VendasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VendasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          update: {
            args: Prisma.VendasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          deleteMany: {
            args: Prisma.VendasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VendasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VendasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          aggregate: {
            args: Prisma.VendasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVendas>
          }
          groupBy: {
            args: Prisma.VendasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VendasGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VendasFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.VendasAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.VendasCountArgs<ExtArgs>,
            result: $Utils.Optional<VendasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
   * Models
   */

  /**
   * Model VendasFormaspg
   */





  export type VendasFormaspgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dtV?: boolean
    fCd?: boolean
    fId?: boolean
    seq?: boolean
    vl?: boolean
  }, ExtArgs["result"]["vendasFormaspg"]>


  export type VendasFormaspgSelectScalar = {
    dtV?: boolean
    fCd?: boolean
    fId?: boolean
    seq?: boolean
    vl?: boolean
  }


  export type $VendasFormaspgPayload = {
    name: "VendasFormaspg"
    objects: {}
    scalars: {
      dtV: Date
      fCd: string
      fId: string
      seq: string
      vl: string
    }
    composites: {}
  }

  type VendasFormaspgGetPayload<S extends boolean | null | undefined | VendasFormaspgDefaultArgs> = $Result.GetResult<Prisma.$VendasFormaspgPayload, S>





  /**
   * Fields of the VendasFormaspg model
   */ 
  interface VendasFormaspgFieldRefs {
    readonly dtV: FieldRef<"VendasFormaspg", 'DateTime'>
    readonly fCd: FieldRef<"VendasFormaspg", 'String'>
    readonly fId: FieldRef<"VendasFormaspg", 'String'>
    readonly seq: FieldRef<"VendasFormaspg", 'String'>
    readonly vl: FieldRef<"VendasFormaspg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VendasFormaspg without action
   */
  export type VendasFormaspgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendasFormaspg
     */
    select?: VendasFormaspgSelect<ExtArgs> | null
  }


  /**
   * Model VendasItems
   */





  export type VendasItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    aIcm?: boolean
    bId?: boolean
    bLmc?: boolean
    cB?: boolean
    codG?: boolean
    dI?: boolean
    dtA?: boolean
    iId?: boolean
    iTip?: boolean
    isIcSt?: boolean
    isIs?: boolean
    isNI?: boolean
    pC?: boolean
    pTb?: boolean
    pUn?: boolean
    qd?: boolean
    seq?: boolean
    st?: boolean
    tot?: boolean
    vId?: boolean
  }, ExtArgs["result"]["vendasItems"]>


  export type VendasItemsSelectScalar = {
    aIcm?: boolean
    bId?: boolean
    bLmc?: boolean
    cB?: boolean
    codG?: boolean
    dI?: boolean
    dtA?: boolean
    iId?: boolean
    iTip?: boolean
    isIcSt?: boolean
    isIs?: boolean
    isNI?: boolean
    pC?: boolean
    pTb?: boolean
    pUn?: boolean
    qd?: boolean
    seq?: boolean
    st?: boolean
    tot?: boolean
    vId?: boolean
  }


  export type $VendasItemsPayload = {
    name: "VendasItems"
    objects: {}
    scalars: {
      aIcm: string | null
      bId: string
      bLmc: string
      cB: string
      codG: string
      dI: string
      dtA: Date
      iId: string
      iTip: string
      isIcSt: string
      isIs: string
      isNI: string
      pC: string
      pTb: string
      pUn: string
      qd: string
      seq: string
      st: string
      tot: string
      vId: string
    }
    composites: {}
  }

  type VendasItemsGetPayload<S extends boolean | null | undefined | VendasItemsDefaultArgs> = $Result.GetResult<Prisma.$VendasItemsPayload, S>





  /**
   * Fields of the VendasItems model
   */ 
  interface VendasItemsFieldRefs {
    readonly aIcm: FieldRef<"VendasItems", 'String'>
    readonly bId: FieldRef<"VendasItems", 'String'>
    readonly bLmc: FieldRef<"VendasItems", 'String'>
    readonly cB: FieldRef<"VendasItems", 'String'>
    readonly codG: FieldRef<"VendasItems", 'String'>
    readonly dI: FieldRef<"VendasItems", 'String'>
    readonly dtA: FieldRef<"VendasItems", 'DateTime'>
    readonly iId: FieldRef<"VendasItems", 'String'>
    readonly iTip: FieldRef<"VendasItems", 'String'>
    readonly isIcSt: FieldRef<"VendasItems", 'String'>
    readonly isIs: FieldRef<"VendasItems", 'String'>
    readonly isNI: FieldRef<"VendasItems", 'String'>
    readonly pC: FieldRef<"VendasItems", 'String'>
    readonly pTb: FieldRef<"VendasItems", 'String'>
    readonly pUn: FieldRef<"VendasItems", 'String'>
    readonly qd: FieldRef<"VendasItems", 'String'>
    readonly seq: FieldRef<"VendasItems", 'String'>
    readonly st: FieldRef<"VendasItems", 'String'>
    readonly tot: FieldRef<"VendasItems", 'String'>
    readonly vId: FieldRef<"VendasItems", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VendasItems without action
   */
  export type VendasItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendasItems
     */
    select?: VendasItemsSelect<ExtArgs> | null
  }


  /**
   * Model Vendas
   */

  export type AggregateVendas = {
    _count: VendasCountAggregateOutputType | null
    _min: VendasMinAggregateOutputType | null
    _max: VendasMaxAggregateOutputType | null
  }

  export type VendasMinAggregateOutputType = {
    id: string | null
    cdT: string | null
    clId: string | null
    cpf: string | null
    dCh: string | null
    dPr: string | null
    dTE: string | null
    dTa: string | null
    dtHr: Date | null
    fcId: string | null
    ibm: string | null
    id_: string | null
    idC: string | null
    idT: string | null
    mod: string | null
    nCf: string | null
    nEc: string | null
    pl: string | null
    st: string | null
    tot: string | null
    vId: string | null
    ver: string | null
  }

  export type VendasMaxAggregateOutputType = {
    id: string | null
    cdT: string | null
    clId: string | null
    cpf: string | null
    dCh: string | null
    dPr: string | null
    dTE: string | null
    dTa: string | null
    dtHr: Date | null
    fcId: string | null
    ibm: string | null
    id_: string | null
    idC: string | null
    idT: string | null
    mod: string | null
    nCf: string | null
    nEc: string | null
    pl: string | null
    st: string | null
    tot: string | null
    vId: string | null
    ver: string | null
  }

  export type VendasCountAggregateOutputType = {
    id: number
    cdT: number
    clId: number
    cpf: number
    dCh: number
    dPr: number
    dTE: number
    dTa: number
    dtHr: number
    fcId: number
    ibm: number
    id_: number
    idC: number
    idT: number
    mod: number
    nCf: number
    nEc: number
    pl: number
    st: number
    tot: number
    vId: number
    ver: number
    _all: number
  }


  export type VendasMinAggregateInputType = {
    id?: true
    cdT?: true
    clId?: true
    cpf?: true
    dCh?: true
    dPr?: true
    dTE?: true
    dTa?: true
    dtHr?: true
    fcId?: true
    ibm?: true
    id_?: true
    idC?: true
    idT?: true
    mod?: true
    nCf?: true
    nEc?: true
    pl?: true
    st?: true
    tot?: true
    vId?: true
    ver?: true
  }

  export type VendasMaxAggregateInputType = {
    id?: true
    cdT?: true
    clId?: true
    cpf?: true
    dCh?: true
    dPr?: true
    dTE?: true
    dTa?: true
    dtHr?: true
    fcId?: true
    ibm?: true
    id_?: true
    idC?: true
    idT?: true
    mod?: true
    nCf?: true
    nEc?: true
    pl?: true
    st?: true
    tot?: true
    vId?: true
    ver?: true
  }

  export type VendasCountAggregateInputType = {
    id?: true
    cdT?: true
    clId?: true
    cpf?: true
    dCh?: true
    dPr?: true
    dTE?: true
    dTa?: true
    dtHr?: true
    fcId?: true
    ibm?: true
    id_?: true
    idC?: true
    idT?: true
    mod?: true
    nCf?: true
    nEc?: true
    pl?: true
    st?: true
    tot?: true
    vId?: true
    ver?: true
    _all?: true
  }

  export type VendasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendas to aggregate.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendas
    **/
    _count?: true | VendasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendasMaxAggregateInputType
  }

  export type GetVendasAggregateType<T extends VendasAggregateArgs> = {
        [P in keyof T & keyof AggregateVendas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendas[P]>
      : GetScalarType<T[P], AggregateVendas[P]>
  }




  export type VendasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendasWhereInput
    orderBy?: VendasOrderByWithAggregationInput | VendasOrderByWithAggregationInput[]
    by: VendasScalarFieldEnum[] | VendasScalarFieldEnum
    having?: VendasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendasCountAggregateInputType | true
    _min?: VendasMinAggregateInputType
    _max?: VendasMaxAggregateInputType
  }

  export type VendasGroupByOutputType = {
    id: string
    cdT: string
    clId: string | null
    cpf: string | null
    dCh: string
    dPr: string
    dTE: string
    dTa: string
    dtHr: Date
    fcId: string
    ibm: string
    id_: string
    idC: string
    idT: string
    mod: string
    nCf: string
    nEc: string
    pl: string | null
    st: string
    tot: string
    vId: string
    ver: string
    _count: VendasCountAggregateOutputType | null
    _min: VendasMinAggregateOutputType | null
    _max: VendasMaxAggregateOutputType | null
  }

  type GetVendasGroupByPayload<T extends VendasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendasGroupByOutputType[P]>
            : GetScalarType<T[P], VendasGroupByOutputType[P]>
        }
      >
    >


  export type VendasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cdT?: boolean
    clId?: boolean
    cpf?: boolean
    dCh?: boolean
    dPr?: boolean
    dTE?: boolean
    dTa?: boolean
    dtHr?: boolean
    fcId?: boolean
    formaspg?: boolean | VendasFormaspgDefaultArgs<ExtArgs>
    ibm?: boolean
    id_?: boolean
    idC?: boolean
    idT?: boolean
    items?: boolean | VendasItemsDefaultArgs<ExtArgs>
    mod?: boolean
    nCf?: boolean
    nEc?: boolean
    pl?: boolean
    st?: boolean
    tot?: boolean
    vId?: boolean
    ver?: boolean
  }, ExtArgs["result"]["vendas"]>


  export type VendasSelectScalar = {
    id?: boolean
    cdT?: boolean
    clId?: boolean
    cpf?: boolean
    dCh?: boolean
    dPr?: boolean
    dTE?: boolean
    dTa?: boolean
    dtHr?: boolean
    fcId?: boolean
    ibm?: boolean
    id_?: boolean
    idC?: boolean
    idT?: boolean
    mod?: boolean
    nCf?: boolean
    nEc?: boolean
    pl?: boolean
    st?: boolean
    tot?: boolean
    vId?: boolean
    ver?: boolean
  }

  export type VendasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cdT: string
      clId: string | null
      cpf: string | null
      dCh: string
      dPr: string
      dTE: string
      dTa: string
      dtHr: Date
      fcId: string
      ibm: string
      id_: string
      idC: string
      idT: string
      mod: string
      nCf: string
      nEc: string
      pl: string | null
      st: string
      tot: string
      vId: string
      ver: string
    }, ExtArgs["result"]["vendas"]>
    composites: {
      formaspg: Prisma.$VendasFormaspgPayload[]
      items: Prisma.$VendasItemsPayload[]
    }
  }

  type VendasGetPayload<S extends boolean | null | undefined | VendasDefaultArgs> = $Result.GetResult<Prisma.$VendasPayload, S>

  type VendasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VendasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VendasCountAggregateInputType | true
    }

  export interface VendasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendas'], meta: { name: 'Vendas' } }
    /**
     * Find zero or one Vendas that matches the filter.
     * @param {VendasFindUniqueArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VendasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VendasFindUniqueArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vendas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VendasFindUniqueOrThrowArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VendasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VendasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasFindFirstArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VendasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VendasFindFirstArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vendas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasFindFirstOrThrowArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VendasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VendasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendas
     * const vendas = await prisma.vendas.findMany()
     * 
     * // Get first 10 Vendas
     * const vendas = await prisma.vendas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendasWithIdOnly = await prisma.vendas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VendasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VendasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vendas.
     * @param {VendasCreateArgs} args - Arguments to create a Vendas.
     * @example
     * // Create one Vendas
     * const Vendas = await prisma.vendas.create({
     *   data: {
     *     // ... data to create a Vendas
     *   }
     * })
     * 
    **/
    create<T extends VendasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VendasCreateArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vendas.
     * @param {VendasCreateManyArgs} args - Arguments to create many Vendas.
     * @example
     * // Create many Vendas
     * const vendas = await prisma.vendas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VendasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VendasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendas.
     * @param {VendasDeleteArgs} args - Arguments to delete one Vendas.
     * @example
     * // Delete one Vendas
     * const Vendas = await prisma.vendas.delete({
     *   where: {
     *     // ... filter to delete one Vendas
     *   }
     * })
     * 
    **/
    delete<T extends VendasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VendasDeleteArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vendas.
     * @param {VendasUpdateArgs} args - Arguments to update one Vendas.
     * @example
     * // Update one Vendas
     * const vendas = await prisma.vendas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VendasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VendasUpdateArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vendas.
     * @param {VendasDeleteManyArgs} args - Arguments to filter Vendas to delete.
     * @example
     * // Delete a few Vendas
     * const { count } = await prisma.vendas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VendasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VendasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendas
     * const vendas = await prisma.vendas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VendasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VendasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendas.
     * @param {VendasUpsertArgs} args - Arguments to update or create a Vendas.
     * @example
     * // Update or create a Vendas
     * const vendas = await prisma.vendas.upsert({
     *   create: {
     *     // ... data to create a Vendas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendas we want to update
     *   }
     * })
    **/
    upsert<T extends VendasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VendasUpsertArgs<ExtArgs>>
    ): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Vendas that matches the filter.
     * @param {VendasFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vendas = await prisma.vendas.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: VendasFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vendas.
     * @param {VendasAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vendas = await prisma.vendas.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: VendasAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasCountArgs} args - Arguments to filter Vendas to count.
     * @example
     * // Count the number of Vendas
     * const count = await prisma.vendas.count({
     *   where: {
     *     // ... the filter for the Vendas we want to count
     *   }
     * })
    **/
    count<T extends VendasCountArgs>(
      args?: Subset<T, VendasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendasAggregateArgs>(args: Subset<T, VendasAggregateArgs>): Prisma.PrismaPromise<GetVendasAggregateType<T>>

    /**
     * Group by Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasGroupByArgs} args - Group by arguments.
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
      T extends VendasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendasGroupByArgs['orderBy'] }
        : { orderBy?: VendasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendas model
   */
  readonly fields: VendasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Vendas model
   */ 
  interface VendasFieldRefs {
    readonly id: FieldRef<"Vendas", 'String'>
    readonly cdT: FieldRef<"Vendas", 'String'>
    readonly clId: FieldRef<"Vendas", 'String'>
    readonly cpf: FieldRef<"Vendas", 'String'>
    readonly dCh: FieldRef<"Vendas", 'String'>
    readonly dPr: FieldRef<"Vendas", 'String'>
    readonly dTE: FieldRef<"Vendas", 'String'>
    readonly dTa: FieldRef<"Vendas", 'String'>
    readonly dtHr: FieldRef<"Vendas", 'DateTime'>
    readonly fcId: FieldRef<"Vendas", 'String'>
    readonly ibm: FieldRef<"Vendas", 'String'>
    readonly id_: FieldRef<"Vendas", 'String'>
    readonly idC: FieldRef<"Vendas", 'String'>
    readonly idT: FieldRef<"Vendas", 'String'>
    readonly mod: FieldRef<"Vendas", 'String'>
    readonly nCf: FieldRef<"Vendas", 'String'>
    readonly nEc: FieldRef<"Vendas", 'String'>
    readonly pl: FieldRef<"Vendas", 'String'>
    readonly st: FieldRef<"Vendas", 'String'>
    readonly tot: FieldRef<"Vendas", 'String'>
    readonly vId: FieldRef<"Vendas", 'String'>
    readonly ver: FieldRef<"Vendas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendas findUnique
   */
  export type VendasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas findUniqueOrThrow
   */
  export type VendasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas findFirst
   */
  export type VendasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Vendas findFirstOrThrow
   */
  export type VendasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Vendas findMany
   */
  export type VendasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendas.
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Vendas create
   */
  export type VendasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendas.
     */
    data: XOR<VendasCreateInput, VendasUncheckedCreateInput>
  }

  /**
   * Vendas createMany
   */
  export type VendasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendas.
     */
    data: VendasCreateManyInput | VendasCreateManyInput[]
  }

  /**
   * Vendas update
   */
  export type VendasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendas.
     */
    data: XOR<VendasUpdateInput, VendasUncheckedUpdateInput>
    /**
     * Choose, which Vendas to update.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas updateMany
   */
  export type VendasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendas.
     */
    data: XOR<VendasUpdateManyMutationInput, VendasUncheckedUpdateManyInput>
    /**
     * Filter which Vendas to update
     */
    where?: VendasWhereInput
  }

  /**
   * Vendas upsert
   */
  export type VendasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendas to update in case it exists.
     */
    where: VendasWhereUniqueInput
    /**
     * In case the Vendas found by the `where` argument doesn't exist, create a new Vendas with this data.
     */
    create: XOR<VendasCreateInput, VendasUncheckedCreateInput>
    /**
     * In case the Vendas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendasUpdateInput, VendasUncheckedUpdateInput>
  }

  /**
   * Vendas delete
   */
  export type VendasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter which Vendas to delete.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas deleteMany
   */
  export type VendasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendas to delete
     */
    where?: VendasWhereInput
  }

  /**
   * Vendas findRaw
   */
  export type VendasFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vendas aggregateRaw
   */
  export type VendasAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vendas without action
   */
  export type VendasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const VendasScalarFieldEnum: {
    id: 'id',
    cdT: 'cdT',
    clId: 'clId',
    cpf: 'cpf',
    dCh: 'dCh',
    dPr: 'dPr',
    dTE: 'dTE',
    dTa: 'dTa',
    dtHr: 'dtHr',
    fcId: 'fcId',
    ibm: 'ibm',
    id_: 'id_',
    idC: 'idC',
    idT: 'idT',
    mod: 'mod',
    nCf: 'nCf',
    nEc: 'nEc',
    pl: 'pl',
    st: 'st',
    tot: 'tot',
    vId: 'vId',
    ver: 'ver'
  };

  export type VendasScalarFieldEnum = (typeof VendasScalarFieldEnum)[keyof typeof VendasScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type VendasWhereInput = {
    AND?: VendasWhereInput | VendasWhereInput[]
    OR?: VendasWhereInput[]
    NOT?: VendasWhereInput | VendasWhereInput[]
    id?: StringFilter<"Vendas"> | string
    cdT?: StringFilter<"Vendas"> | string
    clId?: StringNullableFilter<"Vendas"> | string | null
    cpf?: StringNullableFilter<"Vendas"> | string | null
    dCh?: StringFilter<"Vendas"> | string
    dPr?: StringFilter<"Vendas"> | string
    dTE?: StringFilter<"Vendas"> | string
    dTa?: StringFilter<"Vendas"> | string
    dtHr?: DateTimeFilter<"Vendas"> | Date | string
    fcId?: StringFilter<"Vendas"> | string
    formaspg?: VendasFormaspgCompositeListFilter | VendasFormaspgObjectEqualityInput[]
    ibm?: StringFilter<"Vendas"> | string
    id_?: StringFilter<"Vendas"> | string
    idC?: StringFilter<"Vendas"> | string
    idT?: StringFilter<"Vendas"> | string
    items?: VendasItemsCompositeListFilter | VendasItemsObjectEqualityInput[]
    mod?: StringFilter<"Vendas"> | string
    nCf?: StringFilter<"Vendas"> | string
    nEc?: StringFilter<"Vendas"> | string
    pl?: StringNullableFilter<"Vendas"> | string | null
    st?: StringFilter<"Vendas"> | string
    tot?: StringFilter<"Vendas"> | string
    vId?: StringFilter<"Vendas"> | string
    ver?: StringFilter<"Vendas"> | string
  }

  export type VendasOrderByWithRelationInput = {
    id?: SortOrder
    cdT?: SortOrder
    clId?: SortOrder
    cpf?: SortOrder
    dCh?: SortOrder
    dPr?: SortOrder
    dTE?: SortOrder
    dTa?: SortOrder
    dtHr?: SortOrder
    fcId?: SortOrder
    formaspg?: VendasFormaspgOrderByCompositeAggregateInput
    ibm?: SortOrder
    id_?: SortOrder
    idC?: SortOrder
    idT?: SortOrder
    items?: VendasItemsOrderByCompositeAggregateInput
    mod?: SortOrder
    nCf?: SortOrder
    nEc?: SortOrder
    pl?: SortOrder
    st?: SortOrder
    tot?: SortOrder
    vId?: SortOrder
    ver?: SortOrder
  }

  export type VendasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VendasWhereInput | VendasWhereInput[]
    OR?: VendasWhereInput[]
    NOT?: VendasWhereInput | VendasWhereInput[]
    cdT?: StringFilter<"Vendas"> | string
    clId?: StringNullableFilter<"Vendas"> | string | null
    cpf?: StringNullableFilter<"Vendas"> | string | null
    dCh?: StringFilter<"Vendas"> | string
    dPr?: StringFilter<"Vendas"> | string
    dTE?: StringFilter<"Vendas"> | string
    dTa?: StringFilter<"Vendas"> | string
    dtHr?: DateTimeFilter<"Vendas"> | Date | string
    fcId?: StringFilter<"Vendas"> | string
    formaspg?: VendasFormaspgCompositeListFilter | VendasFormaspgObjectEqualityInput[]
    ibm?: StringFilter<"Vendas"> | string
    id_?: StringFilter<"Vendas"> | string
    idC?: StringFilter<"Vendas"> | string
    idT?: StringFilter<"Vendas"> | string
    items?: VendasItemsCompositeListFilter | VendasItemsObjectEqualityInput[]
    mod?: StringFilter<"Vendas"> | string
    nCf?: StringFilter<"Vendas"> | string
    nEc?: StringFilter<"Vendas"> | string
    pl?: StringNullableFilter<"Vendas"> | string | null
    st?: StringFilter<"Vendas"> | string
    tot?: StringFilter<"Vendas"> | string
    vId?: StringFilter<"Vendas"> | string
    ver?: StringFilter<"Vendas"> | string
  }, "id">

  export type VendasOrderByWithAggregationInput = {
    id?: SortOrder
    cdT?: SortOrder
    clId?: SortOrder
    cpf?: SortOrder
    dCh?: SortOrder
    dPr?: SortOrder
    dTE?: SortOrder
    dTa?: SortOrder
    dtHr?: SortOrder
    fcId?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    idC?: SortOrder
    idT?: SortOrder
    mod?: SortOrder
    nCf?: SortOrder
    nEc?: SortOrder
    pl?: SortOrder
    st?: SortOrder
    tot?: SortOrder
    vId?: SortOrder
    ver?: SortOrder
    _count?: VendasCountOrderByAggregateInput
    _max?: VendasMaxOrderByAggregateInput
    _min?: VendasMinOrderByAggregateInput
  }

  export type VendasScalarWhereWithAggregatesInput = {
    AND?: VendasScalarWhereWithAggregatesInput | VendasScalarWhereWithAggregatesInput[]
    OR?: VendasScalarWhereWithAggregatesInput[]
    NOT?: VendasScalarWhereWithAggregatesInput | VendasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendas"> | string
    cdT?: StringWithAggregatesFilter<"Vendas"> | string
    clId?: StringNullableWithAggregatesFilter<"Vendas"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"Vendas"> | string | null
    dCh?: StringWithAggregatesFilter<"Vendas"> | string
    dPr?: StringWithAggregatesFilter<"Vendas"> | string
    dTE?: StringWithAggregatesFilter<"Vendas"> | string
    dTa?: StringWithAggregatesFilter<"Vendas"> | string
    dtHr?: DateTimeWithAggregatesFilter<"Vendas"> | Date | string
    fcId?: StringWithAggregatesFilter<"Vendas"> | string
    ibm?: StringWithAggregatesFilter<"Vendas"> | string
    id_?: StringWithAggregatesFilter<"Vendas"> | string
    idC?: StringWithAggregatesFilter<"Vendas"> | string
    idT?: StringWithAggregatesFilter<"Vendas"> | string
    mod?: StringWithAggregatesFilter<"Vendas"> | string
    nCf?: StringWithAggregatesFilter<"Vendas"> | string
    nEc?: StringWithAggregatesFilter<"Vendas"> | string
    pl?: StringNullableWithAggregatesFilter<"Vendas"> | string | null
    st?: StringWithAggregatesFilter<"Vendas"> | string
    tot?: StringWithAggregatesFilter<"Vendas"> | string
    vId?: StringWithAggregatesFilter<"Vendas"> | string
    ver?: StringWithAggregatesFilter<"Vendas"> | string
  }

  export type VendasCreateInput = {
    id?: string
    cdT: string
    clId?: string | null
    cpf?: string | null
    dCh: string
    dPr: string
    dTE: string
    dTa: string
    dtHr: Date | string
    fcId: string
    formaspg?: XOR<VendasFormaspgListCreateEnvelopeInput, VendasFormaspgCreateInput> | VendasFormaspgCreateInput[]
    ibm: string
    id_: string
    idC: string
    idT: string
    items?: XOR<VendasItemsListCreateEnvelopeInput, VendasItemsCreateInput> | VendasItemsCreateInput[]
    mod: string
    nCf: string
    nEc: string
    pl?: string | null
    st: string
    tot: string
    vId: string
    ver: string
  }

  export type VendasUncheckedCreateInput = {
    id?: string
    cdT: string
    clId?: string | null
    cpf?: string | null
    dCh: string
    dPr: string
    dTE: string
    dTa: string
    dtHr: Date | string
    fcId: string
    formaspg?: XOR<VendasFormaspgListCreateEnvelopeInput, VendasFormaspgCreateInput> | VendasFormaspgCreateInput[]
    ibm: string
    id_: string
    idC: string
    idT: string
    items?: XOR<VendasItemsListCreateEnvelopeInput, VendasItemsCreateInput> | VendasItemsCreateInput[]
    mod: string
    nCf: string
    nEc: string
    pl?: string | null
    st: string
    tot: string
    vId: string
    ver: string
  }

  export type VendasUpdateInput = {
    cdT?: StringFieldUpdateOperationsInput | string
    clId?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dCh?: StringFieldUpdateOperationsInput | string
    dPr?: StringFieldUpdateOperationsInput | string
    dTE?: StringFieldUpdateOperationsInput | string
    dTa?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    fcId?: StringFieldUpdateOperationsInput | string
    formaspg?: XOR<VendasFormaspgListUpdateEnvelopeInput, VendasFormaspgCreateInput> | VendasFormaspgCreateInput[]
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    idC?: StringFieldUpdateOperationsInput | string
    idT?: StringFieldUpdateOperationsInput | string
    items?: XOR<VendasItemsListUpdateEnvelopeInput, VendasItemsCreateInput> | VendasItemsCreateInput[]
    mod?: StringFieldUpdateOperationsInput | string
    nCf?: StringFieldUpdateOperationsInput | string
    nEc?: StringFieldUpdateOperationsInput | string
    pl?: NullableStringFieldUpdateOperationsInput | string | null
    st?: StringFieldUpdateOperationsInput | string
    tot?: StringFieldUpdateOperationsInput | string
    vId?: StringFieldUpdateOperationsInput | string
    ver?: StringFieldUpdateOperationsInput | string
  }

  export type VendasUncheckedUpdateInput = {
    cdT?: StringFieldUpdateOperationsInput | string
    clId?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dCh?: StringFieldUpdateOperationsInput | string
    dPr?: StringFieldUpdateOperationsInput | string
    dTE?: StringFieldUpdateOperationsInput | string
    dTa?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    fcId?: StringFieldUpdateOperationsInput | string
    formaspg?: XOR<VendasFormaspgListUpdateEnvelopeInput, VendasFormaspgCreateInput> | VendasFormaspgCreateInput[]
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    idC?: StringFieldUpdateOperationsInput | string
    idT?: StringFieldUpdateOperationsInput | string
    items?: XOR<VendasItemsListUpdateEnvelopeInput, VendasItemsCreateInput> | VendasItemsCreateInput[]
    mod?: StringFieldUpdateOperationsInput | string
    nCf?: StringFieldUpdateOperationsInput | string
    nEc?: StringFieldUpdateOperationsInput | string
    pl?: NullableStringFieldUpdateOperationsInput | string | null
    st?: StringFieldUpdateOperationsInput | string
    tot?: StringFieldUpdateOperationsInput | string
    vId?: StringFieldUpdateOperationsInput | string
    ver?: StringFieldUpdateOperationsInput | string
  }

  export type VendasCreateManyInput = {
    id?: string
    cdT: string
    clId?: string | null
    cpf?: string | null
    dCh: string
    dPr: string
    dTE: string
    dTa: string
    dtHr: Date | string
    fcId: string
    formaspg?: XOR<VendasFormaspgListCreateEnvelopeInput, VendasFormaspgCreateInput> | VendasFormaspgCreateInput[]
    ibm: string
    id_: string
    idC: string
    idT: string
    items?: XOR<VendasItemsListCreateEnvelopeInput, VendasItemsCreateInput> | VendasItemsCreateInput[]
    mod: string
    nCf: string
    nEc: string
    pl?: string | null
    st: string
    tot: string
    vId: string
    ver: string
  }

  export type VendasUpdateManyMutationInput = {
    cdT?: StringFieldUpdateOperationsInput | string
    clId?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dCh?: StringFieldUpdateOperationsInput | string
    dPr?: StringFieldUpdateOperationsInput | string
    dTE?: StringFieldUpdateOperationsInput | string
    dTa?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    fcId?: StringFieldUpdateOperationsInput | string
    formaspg?: XOR<VendasFormaspgListUpdateEnvelopeInput, VendasFormaspgCreateInput> | VendasFormaspgCreateInput[]
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    idC?: StringFieldUpdateOperationsInput | string
    idT?: StringFieldUpdateOperationsInput | string
    items?: XOR<VendasItemsListUpdateEnvelopeInput, VendasItemsCreateInput> | VendasItemsCreateInput[]
    mod?: StringFieldUpdateOperationsInput | string
    nCf?: StringFieldUpdateOperationsInput | string
    nEc?: StringFieldUpdateOperationsInput | string
    pl?: NullableStringFieldUpdateOperationsInput | string | null
    st?: StringFieldUpdateOperationsInput | string
    tot?: StringFieldUpdateOperationsInput | string
    vId?: StringFieldUpdateOperationsInput | string
    ver?: StringFieldUpdateOperationsInput | string
  }

  export type VendasUncheckedUpdateManyInput = {
    cdT?: StringFieldUpdateOperationsInput | string
    clId?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dCh?: StringFieldUpdateOperationsInput | string
    dPr?: StringFieldUpdateOperationsInput | string
    dTE?: StringFieldUpdateOperationsInput | string
    dTa?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    fcId?: StringFieldUpdateOperationsInput | string
    formaspg?: XOR<VendasFormaspgListUpdateEnvelopeInput, VendasFormaspgCreateInput> | VendasFormaspgCreateInput[]
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    idC?: StringFieldUpdateOperationsInput | string
    idT?: StringFieldUpdateOperationsInput | string
    items?: XOR<VendasItemsListUpdateEnvelopeInput, VendasItemsCreateInput> | VendasItemsCreateInput[]
    mod?: StringFieldUpdateOperationsInput | string
    nCf?: StringFieldUpdateOperationsInput | string
    nEc?: StringFieldUpdateOperationsInput | string
    pl?: NullableStringFieldUpdateOperationsInput | string | null
    st?: StringFieldUpdateOperationsInput | string
    tot?: StringFieldUpdateOperationsInput | string
    vId?: StringFieldUpdateOperationsInput | string
    ver?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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
    isSet?: boolean
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

  export type VendasFormaspgCompositeListFilter = {
    equals?: VendasFormaspgObjectEqualityInput[]
    every?: VendasFormaspgWhereInput
    some?: VendasFormaspgWhereInput
    none?: VendasFormaspgWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type VendasFormaspgObjectEqualityInput = {
    dtV: Date | string
    fCd: string
    fId: string
    seq: string
    vl: string
  }

  export type VendasItemsCompositeListFilter = {
    equals?: VendasItemsObjectEqualityInput[]
    every?: VendasItemsWhereInput
    some?: VendasItemsWhereInput
    none?: VendasItemsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type VendasItemsObjectEqualityInput = {
    aIcm?: string | null
    bId: string
    bLmc: string
    cB: string
    codG: string
    dI: string
    dtA: Date | string
    iId: string
    iTip: string
    isIcSt: string
    isIs: string
    isNI: string
    pC: string
    pTb: string
    pUn: string
    qd: string
    seq: string
    st: string
    tot: string
    vId: string
  }

  export type VendasFormaspgOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type VendasItemsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type VendasCountOrderByAggregateInput = {
    id?: SortOrder
    cdT?: SortOrder
    clId?: SortOrder
    cpf?: SortOrder
    dCh?: SortOrder
    dPr?: SortOrder
    dTE?: SortOrder
    dTa?: SortOrder
    dtHr?: SortOrder
    fcId?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    idC?: SortOrder
    idT?: SortOrder
    mod?: SortOrder
    nCf?: SortOrder
    nEc?: SortOrder
    pl?: SortOrder
    st?: SortOrder
    tot?: SortOrder
    vId?: SortOrder
    ver?: SortOrder
  }

  export type VendasMaxOrderByAggregateInput = {
    id?: SortOrder
    cdT?: SortOrder
    clId?: SortOrder
    cpf?: SortOrder
    dCh?: SortOrder
    dPr?: SortOrder
    dTE?: SortOrder
    dTa?: SortOrder
    dtHr?: SortOrder
    fcId?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    idC?: SortOrder
    idT?: SortOrder
    mod?: SortOrder
    nCf?: SortOrder
    nEc?: SortOrder
    pl?: SortOrder
    st?: SortOrder
    tot?: SortOrder
    vId?: SortOrder
    ver?: SortOrder
  }

  export type VendasMinOrderByAggregateInput = {
    id?: SortOrder
    cdT?: SortOrder
    clId?: SortOrder
    cpf?: SortOrder
    dCh?: SortOrder
    dPr?: SortOrder
    dTE?: SortOrder
    dTa?: SortOrder
    dtHr?: SortOrder
    fcId?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    idC?: SortOrder
    idT?: SortOrder
    mod?: SortOrder
    nCf?: SortOrder
    nEc?: SortOrder
    pl?: SortOrder
    st?: SortOrder
    tot?: SortOrder
    vId?: SortOrder
    ver?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    isSet?: boolean
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

  export type VendasFormaspgListCreateEnvelopeInput = {
    set?: VendasFormaspgCreateInput | VendasFormaspgCreateInput[]
  }

  export type VendasFormaspgCreateInput = {
    dtV: Date | string
    fCd: string
    fId: string
    seq: string
    vl: string
  }

  export type VendasItemsListCreateEnvelopeInput = {
    set?: VendasItemsCreateInput | VendasItemsCreateInput[]
  }

  export type VendasItemsCreateInput = {
    aIcm?: string | null
    bId: string
    bLmc: string
    cB: string
    codG: string
    dI: string
    dtA: Date | string
    iId: string
    iTip: string
    isIcSt: string
    isIs: string
    isNI: string
    pC: string
    pTb: string
    pUn: string
    qd: string
    seq: string
    st: string
    tot: string
    vId: string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendasFormaspgListUpdateEnvelopeInput = {
    set?: VendasFormaspgCreateInput | VendasFormaspgCreateInput[]
    push?: VendasFormaspgCreateInput | VendasFormaspgCreateInput[]
    updateMany?: VendasFormaspgUpdateManyInput
    deleteMany?: VendasFormaspgDeleteManyInput
  }

  export type VendasItemsListUpdateEnvelopeInput = {
    set?: VendasItemsCreateInput | VendasItemsCreateInput[]
    push?: VendasItemsCreateInput | VendasItemsCreateInput[]
    updateMany?: VendasItemsUpdateManyInput
    deleteMany?: VendasItemsDeleteManyInput
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
    isSet?: boolean
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

  export type VendasFormaspgWhereInput = {
    AND?: VendasFormaspgWhereInput | VendasFormaspgWhereInput[]
    OR?: VendasFormaspgWhereInput[]
    NOT?: VendasFormaspgWhereInput | VendasFormaspgWhereInput[]
    dtV?: DateTimeFilter<"VendasFormaspg"> | Date | string
    fCd?: StringFilter<"VendasFormaspg"> | string
    fId?: StringFilter<"VendasFormaspg"> | string
    seq?: StringFilter<"VendasFormaspg"> | string
    vl?: StringFilter<"VendasFormaspg"> | string
  }

  export type VendasItemsWhereInput = {
    AND?: VendasItemsWhereInput | VendasItemsWhereInput[]
    OR?: VendasItemsWhereInput[]
    NOT?: VendasItemsWhereInput | VendasItemsWhereInput[]
    aIcm?: StringNullableFilter<"VendasItems"> | string | null
    bId?: StringFilter<"VendasItems"> | string
    bLmc?: StringFilter<"VendasItems"> | string
    cB?: StringFilter<"VendasItems"> | string
    codG?: StringFilter<"VendasItems"> | string
    dI?: StringFilter<"VendasItems"> | string
    dtA?: DateTimeFilter<"VendasItems"> | Date | string
    iId?: StringFilter<"VendasItems"> | string
    iTip?: StringFilter<"VendasItems"> | string
    isIcSt?: StringFilter<"VendasItems"> | string
    isIs?: StringFilter<"VendasItems"> | string
    isNI?: StringFilter<"VendasItems"> | string
    pC?: StringFilter<"VendasItems"> | string
    pTb?: StringFilter<"VendasItems"> | string
    pUn?: StringFilter<"VendasItems"> | string
    qd?: StringFilter<"VendasItems"> | string
    seq?: StringFilter<"VendasItems"> | string
    st?: StringFilter<"VendasItems"> | string
    tot?: StringFilter<"VendasItems"> | string
    vId?: StringFilter<"VendasItems"> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type VendasFormaspgUpdateManyInput = {
    where: VendasFormaspgWhereInput
    data: VendasFormaspgUpdateInput
  }

  export type VendasFormaspgDeleteManyInput = {
    where: VendasFormaspgWhereInput
  }

  export type VendasItemsUpdateManyInput = {
    where: VendasItemsWhereInput
    data: VendasItemsUpdateInput
  }

  export type VendasItemsDeleteManyInput = {
    where: VendasItemsWhereInput
  }

  export type VendasFormaspgUpdateInput = {
    dtV?: DateTimeFieldUpdateOperationsInput | Date | string
    fCd?: StringFieldUpdateOperationsInput | string
    fId?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    vl?: StringFieldUpdateOperationsInput | string
  }

  export type VendasItemsUpdateInput = {
    aIcm?: NullableStringFieldUpdateOperationsInput | string | null
    bId?: StringFieldUpdateOperationsInput | string
    bLmc?: StringFieldUpdateOperationsInput | string
    cB?: StringFieldUpdateOperationsInput | string
    codG?: StringFieldUpdateOperationsInput | string
    dI?: StringFieldUpdateOperationsInput | string
    dtA?: DateTimeFieldUpdateOperationsInput | Date | string
    iId?: StringFieldUpdateOperationsInput | string
    iTip?: StringFieldUpdateOperationsInput | string
    isIcSt?: StringFieldUpdateOperationsInput | string
    isIs?: StringFieldUpdateOperationsInput | string
    isNI?: StringFieldUpdateOperationsInput | string
    pC?: StringFieldUpdateOperationsInput | string
    pTb?: StringFieldUpdateOperationsInput | string
    pUn?: StringFieldUpdateOperationsInput | string
    qd?: StringFieldUpdateOperationsInput | string
    seq?: StringFieldUpdateOperationsInput | string
    st?: StringFieldUpdateOperationsInput | string
    tot?: StringFieldUpdateOperationsInput | string
    vId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VendasFormaspgDefaultArgs instead
     */
    export type VendasFormaspgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendasFormaspgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendasItemsDefaultArgs instead
     */
    export type VendasItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendasItemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendasDefaultArgs instead
     */
    export type VendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendasDefaultArgs<ExtArgs>

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