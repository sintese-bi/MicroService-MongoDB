
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
 * Model Combustiveis
 * 
 */
export type Combustiveis = $Result.DefaultSelection<Prisma.$CombustiveisPayload>
/**
 * Model FormasPg
 * 
 */
export type FormasPg = $Result.DefaultSelection<Prisma.$FormasPgPayload>
/**
 * Model Produtos
 * 
 */
export type Produtos = $Result.DefaultSelection<Prisma.$ProdutosPayload>
/**
 * Model Produtos_Grupos
 * 
 */
export type Produtos_Grupos = $Result.DefaultSelection<Prisma.$Produtos_GruposPayload>
/**
 * Model Turnos
 * 
 */
export type Turnos = $Result.DefaultSelection<Prisma.$TurnosPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Combustiveis
 * const combustiveis = await prisma.combustiveis.findMany()
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
   * // Fetch zero or more Combustiveis
   * const combustiveis = await prisma.combustiveis.findMany()
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
   * `prisma.combustiveis`: Exposes CRUD operations for the **Combustiveis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Combustiveis
    * const combustiveis = await prisma.combustiveis.findMany()
    * ```
    */
  get combustiveis(): Prisma.CombustiveisDelegate<ExtArgs>;

  /**
   * `prisma.formasPg`: Exposes CRUD operations for the **FormasPg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormasPgs
    * const formasPgs = await prisma.formasPg.findMany()
    * ```
    */
  get formasPg(): Prisma.FormasPgDelegate<ExtArgs>;

  /**
   * `prisma.produtos`: Exposes CRUD operations for the **Produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produtos.findMany()
    * ```
    */
  get produtos(): Prisma.ProdutosDelegate<ExtArgs>;

  /**
   * `prisma.produtos_Grupos`: Exposes CRUD operations for the **Produtos_Grupos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos_Grupos
    * const produtos_Grupos = await prisma.produtos_Grupos.findMany()
    * ```
    */
  get produtos_Grupos(): Prisma.Produtos_GruposDelegate<ExtArgs>;

  /**
   * `prisma.turnos`: Exposes CRUD operations for the **Turnos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turnos.findMany()
    * ```
    */
  get turnos(): Prisma.TurnosDelegate<ExtArgs>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs>;
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
    Combustiveis: 'Combustiveis',
    FormasPg: 'FormasPg',
    Produtos: 'Produtos',
    Produtos_Grupos: 'Produtos_Grupos',
    Turnos: 'Turnos',
    Usuarios: 'Usuarios'
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
      modelProps: 'combustiveis' | 'formasPg' | 'produtos' | 'produtos_Grupos' | 'turnos' | 'usuarios'
      txIsolationLevel: never
    },
    model: {
      Combustiveis: {
        payload: Prisma.$CombustiveisPayload<ExtArgs>
        fields: Prisma.CombustiveisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CombustiveisFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CombustiveisFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload>
          }
          findFirst: {
            args: Prisma.CombustiveisFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CombustiveisFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload>
          }
          findMany: {
            args: Prisma.CombustiveisFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload>[]
          }
          create: {
            args: Prisma.CombustiveisCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload>
          }
          createMany: {
            args: Prisma.CombustiveisCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CombustiveisDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload>
          }
          update: {
            args: Prisma.CombustiveisUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload>
          }
          deleteMany: {
            args: Prisma.CombustiveisDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CombustiveisUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CombustiveisUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CombustiveisPayload>
          }
          aggregate: {
            args: Prisma.CombustiveisAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCombustiveis>
          }
          groupBy: {
            args: Prisma.CombustiveisGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CombustiveisGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CombustiveisFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CombustiveisAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CombustiveisCountArgs<ExtArgs>,
            result: $Utils.Optional<CombustiveisCountAggregateOutputType> | number
          }
        }
      }
      FormasPg: {
        payload: Prisma.$FormasPgPayload<ExtArgs>
        fields: Prisma.FormasPgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormasPgFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormasPgFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload>
          }
          findFirst: {
            args: Prisma.FormasPgFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormasPgFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload>
          }
          findMany: {
            args: Prisma.FormasPgFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload>[]
          }
          create: {
            args: Prisma.FormasPgCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload>
          }
          createMany: {
            args: Prisma.FormasPgCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FormasPgDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload>
          }
          update: {
            args: Prisma.FormasPgUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload>
          }
          deleteMany: {
            args: Prisma.FormasPgDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FormasPgUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FormasPgUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FormasPgPayload>
          }
          aggregate: {
            args: Prisma.FormasPgAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFormasPg>
          }
          groupBy: {
            args: Prisma.FormasPgGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FormasPgGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FormasPgFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FormasPgAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FormasPgCountArgs<ExtArgs>,
            result: $Utils.Optional<FormasPgCountAggregateOutputType> | number
          }
        }
      }
      Produtos: {
        payload: Prisma.$ProdutosPayload<ExtArgs>
        fields: Prisma.ProdutosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          findFirst: {
            args: Prisma.ProdutosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          findMany: {
            args: Prisma.ProdutosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>[]
          }
          create: {
            args: Prisma.ProdutosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          createMany: {
            args: Prisma.ProdutosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProdutosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          update: {
            args: Prisma.ProdutosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          deleteMany: {
            args: Prisma.ProdutosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProdutosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          aggregate: {
            args: Prisma.ProdutosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProdutos>
          }
          groupBy: {
            args: Prisma.ProdutosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProdutosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProdutosFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProdutosAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ProdutosCountArgs<ExtArgs>,
            result: $Utils.Optional<ProdutosCountAggregateOutputType> | number
          }
        }
      }
      Produtos_Grupos: {
        payload: Prisma.$Produtos_GruposPayload<ExtArgs>
        fields: Prisma.Produtos_GruposFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Produtos_GruposFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Produtos_GruposFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload>
          }
          findFirst: {
            args: Prisma.Produtos_GruposFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Produtos_GruposFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload>
          }
          findMany: {
            args: Prisma.Produtos_GruposFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload>[]
          }
          create: {
            args: Prisma.Produtos_GruposCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload>
          }
          createMany: {
            args: Prisma.Produtos_GruposCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Produtos_GruposDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload>
          }
          update: {
            args: Prisma.Produtos_GruposUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload>
          }
          deleteMany: {
            args: Prisma.Produtos_GruposDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Produtos_GruposUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Produtos_GruposUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Produtos_GruposPayload>
          }
          aggregate: {
            args: Prisma.Produtos_GruposAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProdutos_Grupos>
          }
          groupBy: {
            args: Prisma.Produtos_GruposGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Produtos_GruposGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Produtos_GruposFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.Produtos_GruposAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.Produtos_GruposCountArgs<ExtArgs>,
            result: $Utils.Optional<Produtos_GruposCountAggregateOutputType> | number
          }
        }
      }
      Turnos: {
        payload: Prisma.$TurnosPayload<ExtArgs>
        fields: Prisma.TurnosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          findFirst: {
            args: Prisma.TurnosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          findMany: {
            args: Prisma.TurnosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>[]
          }
          create: {
            args: Prisma.TurnosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          createMany: {
            args: Prisma.TurnosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TurnosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          update: {
            args: Prisma.TurnosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          deleteMany: {
            args: Prisma.TurnosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TurnosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TurnosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnosPayload>
          }
          aggregate: {
            args: Prisma.TurnosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTurnos>
          }
          groupBy: {
            args: Prisma.TurnosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TurnosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TurnosFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TurnosAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TurnosCountArgs<ExtArgs>,
            result: $Utils.Optional<TurnosCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuariosFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuariosAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
   * Model Combustiveis
   */

  export type AggregateCombustiveis = {
    _count: CombustiveisCountAggregateOutputType | null
    _min: CombustiveisMinAggregateOutputType | null
    _max: CombustiveisMaxAggregateOutputType | null
  }

  export type CombustiveisMinAggregateOutputType = {
    id: string | null
    anp: string | null
    bicm: string | null
    cBar: string | null
    cTo: string | null
    capT: string | null
    cof: string | null
    cus: string | null
    dLmc: string | null
    del: string | null
    des: string | null
    dtHr: Date | null
    eTo: string | null
    ibm: string | null
    id_: string | null
    ncm: string | null
    pis: string | null
    sig: string | null
    st: string | null
    stDtI: string | null
    tCom: string | null
    vda: string | null
  }

  export type CombustiveisMaxAggregateOutputType = {
    id: string | null
    anp: string | null
    bicm: string | null
    cBar: string | null
    cTo: string | null
    capT: string | null
    cof: string | null
    cus: string | null
    dLmc: string | null
    del: string | null
    des: string | null
    dtHr: Date | null
    eTo: string | null
    ibm: string | null
    id_: string | null
    ncm: string | null
    pis: string | null
    sig: string | null
    st: string | null
    stDtI: string | null
    tCom: string | null
    vda: string | null
  }

  export type CombustiveisCountAggregateOutputType = {
    id: number
    anp: number
    bicm: number
    cBar: number
    cTo: number
    capT: number
    cof: number
    cus: number
    dLmc: number
    del: number
    des: number
    dtHr: number
    eTo: number
    ibm: number
    id_: number
    ncm: number
    pis: number
    sig: number
    st: number
    stDtI: number
    tCom: number
    vda: number
    _all: number
  }


  export type CombustiveisMinAggregateInputType = {
    id?: true
    anp?: true
    bicm?: true
    cBar?: true
    cTo?: true
    capT?: true
    cof?: true
    cus?: true
    dLmc?: true
    del?: true
    des?: true
    dtHr?: true
    eTo?: true
    ibm?: true
    id_?: true
    ncm?: true
    pis?: true
    sig?: true
    st?: true
    stDtI?: true
    tCom?: true
    vda?: true
  }

  export type CombustiveisMaxAggregateInputType = {
    id?: true
    anp?: true
    bicm?: true
    cBar?: true
    cTo?: true
    capT?: true
    cof?: true
    cus?: true
    dLmc?: true
    del?: true
    des?: true
    dtHr?: true
    eTo?: true
    ibm?: true
    id_?: true
    ncm?: true
    pis?: true
    sig?: true
    st?: true
    stDtI?: true
    tCom?: true
    vda?: true
  }

  export type CombustiveisCountAggregateInputType = {
    id?: true
    anp?: true
    bicm?: true
    cBar?: true
    cTo?: true
    capT?: true
    cof?: true
    cus?: true
    dLmc?: true
    del?: true
    des?: true
    dtHr?: true
    eTo?: true
    ibm?: true
    id_?: true
    ncm?: true
    pis?: true
    sig?: true
    st?: true
    stDtI?: true
    tCom?: true
    vda?: true
    _all?: true
  }

  export type CombustiveisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combustiveis to aggregate.
     */
    where?: CombustiveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustiveis to fetch.
     */
    orderBy?: CombustiveisOrderByWithRelationInput | CombustiveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CombustiveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustiveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustiveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Combustiveis
    **/
    _count?: true | CombustiveisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CombustiveisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CombustiveisMaxAggregateInputType
  }

  export type GetCombustiveisAggregateType<T extends CombustiveisAggregateArgs> = {
        [P in keyof T & keyof AggregateCombustiveis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCombustiveis[P]>
      : GetScalarType<T[P], AggregateCombustiveis[P]>
  }




  export type CombustiveisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CombustiveisWhereInput
    orderBy?: CombustiveisOrderByWithAggregationInput | CombustiveisOrderByWithAggregationInput[]
    by: CombustiveisScalarFieldEnum[] | CombustiveisScalarFieldEnum
    having?: CombustiveisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CombustiveisCountAggregateInputType | true
    _min?: CombustiveisMinAggregateInputType
    _max?: CombustiveisMaxAggregateInputType
  }

  export type CombustiveisGroupByOutputType = {
    id: string
    anp: string | null
    bicm: string | null
    cBar: string
    cTo: string | null
    capT: string
    cof: string | null
    cus: string
    dLmc: string
    del: string
    des: string
    dtHr: Date
    eTo: string | null
    ibm: string
    id_: string
    ncm: string | null
    pis: string | null
    sig: string
    st: string | null
    stDtI: string
    tCom: string
    vda: string
    _count: CombustiveisCountAggregateOutputType | null
    _min: CombustiveisMinAggregateOutputType | null
    _max: CombustiveisMaxAggregateOutputType | null
  }

  type GetCombustiveisGroupByPayload<T extends CombustiveisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CombustiveisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CombustiveisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CombustiveisGroupByOutputType[P]>
            : GetScalarType<T[P], CombustiveisGroupByOutputType[P]>
        }
      >
    >


  export type CombustiveisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anp?: boolean
    bicm?: boolean
    cBar?: boolean
    cTo?: boolean
    capT?: boolean
    cof?: boolean
    cus?: boolean
    dLmc?: boolean
    del?: boolean
    des?: boolean
    dtHr?: boolean
    eTo?: boolean
    ibm?: boolean
    id_?: boolean
    ncm?: boolean
    pis?: boolean
    sig?: boolean
    st?: boolean
    stDtI?: boolean
    tCom?: boolean
    vda?: boolean
  }, ExtArgs["result"]["combustiveis"]>


  export type CombustiveisSelectScalar = {
    id?: boolean
    anp?: boolean
    bicm?: boolean
    cBar?: boolean
    cTo?: boolean
    capT?: boolean
    cof?: boolean
    cus?: boolean
    dLmc?: boolean
    del?: boolean
    des?: boolean
    dtHr?: boolean
    eTo?: boolean
    ibm?: boolean
    id_?: boolean
    ncm?: boolean
    pis?: boolean
    sig?: boolean
    st?: boolean
    stDtI?: boolean
    tCom?: boolean
    vda?: boolean
  }


  export type $CombustiveisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Combustiveis"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      anp: string | null
      bicm: string | null
      cBar: string
      cTo: string | null
      capT: string
      cof: string | null
      cus: string
      dLmc: string
      del: string
      des: string
      dtHr: Date
      eTo: string | null
      ibm: string
      id_: string
      ncm: string | null
      pis: string | null
      sig: string
      st: string | null
      stDtI: string
      tCom: string
      vda: string
    }, ExtArgs["result"]["combustiveis"]>
    composites: {}
  }

  type CombustiveisGetPayload<S extends boolean | null | undefined | CombustiveisDefaultArgs> = $Result.GetResult<Prisma.$CombustiveisPayload, S>

  type CombustiveisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CombustiveisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CombustiveisCountAggregateInputType | true
    }

  export interface CombustiveisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Combustiveis'], meta: { name: 'Combustiveis' } }
    /**
     * Find zero or one Combustiveis that matches the filter.
     * @param {CombustiveisFindUniqueArgs} args - Arguments to find a Combustiveis
     * @example
     * // Get one Combustiveis
     * const combustiveis = await prisma.combustiveis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CombustiveisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CombustiveisFindUniqueArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Combustiveis that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CombustiveisFindUniqueOrThrowArgs} args - Arguments to find a Combustiveis
     * @example
     * // Get one Combustiveis
     * const combustiveis = await prisma.combustiveis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CombustiveisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CombustiveisFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Combustiveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiveisFindFirstArgs} args - Arguments to find a Combustiveis
     * @example
     * // Get one Combustiveis
     * const combustiveis = await prisma.combustiveis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CombustiveisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CombustiveisFindFirstArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Combustiveis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiveisFindFirstOrThrowArgs} args - Arguments to find a Combustiveis
     * @example
     * // Get one Combustiveis
     * const combustiveis = await prisma.combustiveis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CombustiveisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CombustiveisFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Combustiveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiveisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Combustiveis
     * const combustiveis = await prisma.combustiveis.findMany()
     * 
     * // Get first 10 Combustiveis
     * const combustiveis = await prisma.combustiveis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const combustiveisWithIdOnly = await prisma.combustiveis.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CombustiveisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CombustiveisFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Combustiveis.
     * @param {CombustiveisCreateArgs} args - Arguments to create a Combustiveis.
     * @example
     * // Create one Combustiveis
     * const Combustiveis = await prisma.combustiveis.create({
     *   data: {
     *     // ... data to create a Combustiveis
     *   }
     * })
     * 
    **/
    create<T extends CombustiveisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CombustiveisCreateArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Combustiveis.
     * @param {CombustiveisCreateManyArgs} args - Arguments to create many Combustiveis.
     * @example
     * // Create many Combustiveis
     * const combustiveis = await prisma.combustiveis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CombustiveisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CombustiveisCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Combustiveis.
     * @param {CombustiveisDeleteArgs} args - Arguments to delete one Combustiveis.
     * @example
     * // Delete one Combustiveis
     * const Combustiveis = await prisma.combustiveis.delete({
     *   where: {
     *     // ... filter to delete one Combustiveis
     *   }
     * })
     * 
    **/
    delete<T extends CombustiveisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CombustiveisDeleteArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Combustiveis.
     * @param {CombustiveisUpdateArgs} args - Arguments to update one Combustiveis.
     * @example
     * // Update one Combustiveis
     * const combustiveis = await prisma.combustiveis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CombustiveisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CombustiveisUpdateArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Combustiveis.
     * @param {CombustiveisDeleteManyArgs} args - Arguments to filter Combustiveis to delete.
     * @example
     * // Delete a few Combustiveis
     * const { count } = await prisma.combustiveis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CombustiveisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CombustiveisDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Combustiveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiveisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Combustiveis
     * const combustiveis = await prisma.combustiveis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CombustiveisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CombustiveisUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Combustiveis.
     * @param {CombustiveisUpsertArgs} args - Arguments to update or create a Combustiveis.
     * @example
     * // Update or create a Combustiveis
     * const combustiveis = await prisma.combustiveis.upsert({
     *   create: {
     *     // ... data to create a Combustiveis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Combustiveis we want to update
     *   }
     * })
    **/
    upsert<T extends CombustiveisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CombustiveisUpsertArgs<ExtArgs>>
    ): Prisma__CombustiveisClient<$Result.GetResult<Prisma.$CombustiveisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Combustiveis that matches the filter.
     * @param {CombustiveisFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const combustiveis = await prisma.combustiveis.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CombustiveisFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Combustiveis.
     * @param {CombustiveisAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const combustiveis = await prisma.combustiveis.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CombustiveisAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Combustiveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiveisCountArgs} args - Arguments to filter Combustiveis to count.
     * @example
     * // Count the number of Combustiveis
     * const count = await prisma.combustiveis.count({
     *   where: {
     *     // ... the filter for the Combustiveis we want to count
     *   }
     * })
    **/
    count<T extends CombustiveisCountArgs>(
      args?: Subset<T, CombustiveisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CombustiveisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Combustiveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiveisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CombustiveisAggregateArgs>(args: Subset<T, CombustiveisAggregateArgs>): Prisma.PrismaPromise<GetCombustiveisAggregateType<T>>

    /**
     * Group by Combustiveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CombustiveisGroupByArgs} args - Group by arguments.
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
      T extends CombustiveisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CombustiveisGroupByArgs['orderBy'] }
        : { orderBy?: CombustiveisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CombustiveisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCombustiveisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Combustiveis model
   */
  readonly fields: CombustiveisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Combustiveis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CombustiveisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Combustiveis model
   */ 
  interface CombustiveisFieldRefs {
    readonly id: FieldRef<"Combustiveis", 'String'>
    readonly anp: FieldRef<"Combustiveis", 'String'>
    readonly bicm: FieldRef<"Combustiveis", 'String'>
    readonly cBar: FieldRef<"Combustiveis", 'String'>
    readonly cTo: FieldRef<"Combustiveis", 'String'>
    readonly capT: FieldRef<"Combustiveis", 'String'>
    readonly cof: FieldRef<"Combustiveis", 'String'>
    readonly cus: FieldRef<"Combustiveis", 'String'>
    readonly dLmc: FieldRef<"Combustiveis", 'String'>
    readonly del: FieldRef<"Combustiveis", 'String'>
    readonly des: FieldRef<"Combustiveis", 'String'>
    readonly dtHr: FieldRef<"Combustiveis", 'DateTime'>
    readonly eTo: FieldRef<"Combustiveis", 'String'>
    readonly ibm: FieldRef<"Combustiveis", 'String'>
    readonly id_: FieldRef<"Combustiveis", 'String'>
    readonly ncm: FieldRef<"Combustiveis", 'String'>
    readonly pis: FieldRef<"Combustiveis", 'String'>
    readonly sig: FieldRef<"Combustiveis", 'String'>
    readonly st: FieldRef<"Combustiveis", 'String'>
    readonly stDtI: FieldRef<"Combustiveis", 'String'>
    readonly tCom: FieldRef<"Combustiveis", 'String'>
    readonly vda: FieldRef<"Combustiveis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Combustiveis findUnique
   */
  export type CombustiveisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * Filter, which Combustiveis to fetch.
     */
    where: CombustiveisWhereUniqueInput
  }

  /**
   * Combustiveis findUniqueOrThrow
   */
  export type CombustiveisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * Filter, which Combustiveis to fetch.
     */
    where: CombustiveisWhereUniqueInput
  }

  /**
   * Combustiveis findFirst
   */
  export type CombustiveisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * Filter, which Combustiveis to fetch.
     */
    where?: CombustiveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustiveis to fetch.
     */
    orderBy?: CombustiveisOrderByWithRelationInput | CombustiveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combustiveis.
     */
    cursor?: CombustiveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustiveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustiveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combustiveis.
     */
    distinct?: CombustiveisScalarFieldEnum | CombustiveisScalarFieldEnum[]
  }

  /**
   * Combustiveis findFirstOrThrow
   */
  export type CombustiveisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * Filter, which Combustiveis to fetch.
     */
    where?: CombustiveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustiveis to fetch.
     */
    orderBy?: CombustiveisOrderByWithRelationInput | CombustiveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Combustiveis.
     */
    cursor?: CombustiveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustiveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustiveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Combustiveis.
     */
    distinct?: CombustiveisScalarFieldEnum | CombustiveisScalarFieldEnum[]
  }

  /**
   * Combustiveis findMany
   */
  export type CombustiveisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * Filter, which Combustiveis to fetch.
     */
    where?: CombustiveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Combustiveis to fetch.
     */
    orderBy?: CombustiveisOrderByWithRelationInput | CombustiveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Combustiveis.
     */
    cursor?: CombustiveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Combustiveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Combustiveis.
     */
    skip?: number
    distinct?: CombustiveisScalarFieldEnum | CombustiveisScalarFieldEnum[]
  }

  /**
   * Combustiveis create
   */
  export type CombustiveisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * The data needed to create a Combustiveis.
     */
    data: XOR<CombustiveisCreateInput, CombustiveisUncheckedCreateInput>
  }

  /**
   * Combustiveis createMany
   */
  export type CombustiveisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Combustiveis.
     */
    data: CombustiveisCreateManyInput | CombustiveisCreateManyInput[]
  }

  /**
   * Combustiveis update
   */
  export type CombustiveisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * The data needed to update a Combustiveis.
     */
    data: XOR<CombustiveisUpdateInput, CombustiveisUncheckedUpdateInput>
    /**
     * Choose, which Combustiveis to update.
     */
    where: CombustiveisWhereUniqueInput
  }

  /**
   * Combustiveis updateMany
   */
  export type CombustiveisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Combustiveis.
     */
    data: XOR<CombustiveisUpdateManyMutationInput, CombustiveisUncheckedUpdateManyInput>
    /**
     * Filter which Combustiveis to update
     */
    where?: CombustiveisWhereInput
  }

  /**
   * Combustiveis upsert
   */
  export type CombustiveisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * The filter to search for the Combustiveis to update in case it exists.
     */
    where: CombustiveisWhereUniqueInput
    /**
     * In case the Combustiveis found by the `where` argument doesn't exist, create a new Combustiveis with this data.
     */
    create: XOR<CombustiveisCreateInput, CombustiveisUncheckedCreateInput>
    /**
     * In case the Combustiveis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CombustiveisUpdateInput, CombustiveisUncheckedUpdateInput>
  }

  /**
   * Combustiveis delete
   */
  export type CombustiveisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
    /**
     * Filter which Combustiveis to delete.
     */
    where: CombustiveisWhereUniqueInput
  }

  /**
   * Combustiveis deleteMany
   */
  export type CombustiveisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Combustiveis to delete
     */
    where?: CombustiveisWhereInput
  }

  /**
   * Combustiveis findRaw
   */
  export type CombustiveisFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Combustiveis aggregateRaw
   */
  export type CombustiveisAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Combustiveis without action
   */
  export type CombustiveisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Combustiveis
     */
    select?: CombustiveisSelect<ExtArgs> | null
  }


  /**
   * Model FormasPg
   */

  export type AggregateFormasPg = {
    _count: FormasPgCountAggregateOutputType | null
    _min: FormasPgMinAggregateOutputType | null
    _max: FormasPgMaxAggregateOutputType | null
  }

  export type FormasPgMinAggregateOutputType = {
    id: string | null
    ban: string | null
    cVd: string | null
    des: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
    tip: string | null
  }

  export type FormasPgMaxAggregateOutputType = {
    id: string | null
    ban: string | null
    cVd: string | null
    des: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
    tip: string | null
  }

  export type FormasPgCountAggregateOutputType = {
    id: number
    ban: number
    cVd: number
    des: number
    dtHr: number
    ibm: number
    id_: number
    tip: number
    _all: number
  }


  export type FormasPgMinAggregateInputType = {
    id?: true
    ban?: true
    cVd?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
    tip?: true
  }

  export type FormasPgMaxAggregateInputType = {
    id?: true
    ban?: true
    cVd?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
    tip?: true
  }

  export type FormasPgCountAggregateInputType = {
    id?: true
    ban?: true
    cVd?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
    tip?: true
    _all?: true
  }

  export type FormasPgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormasPg to aggregate.
     */
    where?: FormasPgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormasPgs to fetch.
     */
    orderBy?: FormasPgOrderByWithRelationInput | FormasPgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormasPgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormasPgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormasPgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormasPgs
    **/
    _count?: true | FormasPgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormasPgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormasPgMaxAggregateInputType
  }

  export type GetFormasPgAggregateType<T extends FormasPgAggregateArgs> = {
        [P in keyof T & keyof AggregateFormasPg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormasPg[P]>
      : GetScalarType<T[P], AggregateFormasPg[P]>
  }




  export type FormasPgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormasPgWhereInput
    orderBy?: FormasPgOrderByWithAggregationInput | FormasPgOrderByWithAggregationInput[]
    by: FormasPgScalarFieldEnum[] | FormasPgScalarFieldEnum
    having?: FormasPgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormasPgCountAggregateInputType | true
    _min?: FormasPgMinAggregateInputType
    _max?: FormasPgMaxAggregateInputType
  }

  export type FormasPgGroupByOutputType = {
    id: string
    ban: string
    cVd: string
    des: string
    dtHr: Date
    ibm: string
    id_: string
    tip: string
    _count: FormasPgCountAggregateOutputType | null
    _min: FormasPgMinAggregateOutputType | null
    _max: FormasPgMaxAggregateOutputType | null
  }

  type GetFormasPgGroupByPayload<T extends FormasPgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormasPgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormasPgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormasPgGroupByOutputType[P]>
            : GetScalarType<T[P], FormasPgGroupByOutputType[P]>
        }
      >
    >


  export type FormasPgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ban?: boolean
    cVd?: boolean
    des?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
    tip?: boolean
  }, ExtArgs["result"]["formasPg"]>


  export type FormasPgSelectScalar = {
    id?: boolean
    ban?: boolean
    cVd?: boolean
    des?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
    tip?: boolean
  }


  export type $FormasPgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormasPg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ban: string
      cVd: string
      des: string
      dtHr: Date
      ibm: string
      id_: string
      tip: string
    }, ExtArgs["result"]["formasPg"]>
    composites: {}
  }

  type FormasPgGetPayload<S extends boolean | null | undefined | FormasPgDefaultArgs> = $Result.GetResult<Prisma.$FormasPgPayload, S>

  type FormasPgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormasPgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormasPgCountAggregateInputType | true
    }

  export interface FormasPgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormasPg'], meta: { name: 'FormasPg' } }
    /**
     * Find zero or one FormasPg that matches the filter.
     * @param {FormasPgFindUniqueArgs} args - Arguments to find a FormasPg
     * @example
     * // Get one FormasPg
     * const formasPg = await prisma.formasPg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormasPgFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FormasPgFindUniqueArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FormasPg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FormasPgFindUniqueOrThrowArgs} args - Arguments to find a FormasPg
     * @example
     * // Get one FormasPg
     * const formasPg = await prisma.formasPg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormasPgFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormasPgFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FormasPg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormasPgFindFirstArgs} args - Arguments to find a FormasPg
     * @example
     * // Get one FormasPg
     * const formasPg = await prisma.formasPg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormasPgFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FormasPgFindFirstArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FormasPg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormasPgFindFirstOrThrowArgs} args - Arguments to find a FormasPg
     * @example
     * // Get one FormasPg
     * const formasPg = await prisma.formasPg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormasPgFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FormasPgFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FormasPgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormasPgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormasPgs
     * const formasPgs = await prisma.formasPg.findMany()
     * 
     * // Get first 10 FormasPgs
     * const formasPgs = await prisma.formasPg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formasPgWithIdOnly = await prisma.formasPg.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormasPgFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormasPgFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FormasPg.
     * @param {FormasPgCreateArgs} args - Arguments to create a FormasPg.
     * @example
     * // Create one FormasPg
     * const FormasPg = await prisma.formasPg.create({
     *   data: {
     *     // ... data to create a FormasPg
     *   }
     * })
     * 
    **/
    create<T extends FormasPgCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FormasPgCreateArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FormasPgs.
     * @param {FormasPgCreateManyArgs} args - Arguments to create many FormasPgs.
     * @example
     * // Create many FormasPgs
     * const formasPg = await prisma.formasPg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends FormasPgCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormasPgCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FormasPg.
     * @param {FormasPgDeleteArgs} args - Arguments to delete one FormasPg.
     * @example
     * // Delete one FormasPg
     * const FormasPg = await prisma.formasPg.delete({
     *   where: {
     *     // ... filter to delete one FormasPg
     *   }
     * })
     * 
    **/
    delete<T extends FormasPgDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FormasPgDeleteArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FormasPg.
     * @param {FormasPgUpdateArgs} args - Arguments to update one FormasPg.
     * @example
     * // Update one FormasPg
     * const formasPg = await prisma.formasPg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormasPgUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FormasPgUpdateArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FormasPgs.
     * @param {FormasPgDeleteManyArgs} args - Arguments to filter FormasPgs to delete.
     * @example
     * // Delete a few FormasPgs
     * const { count } = await prisma.formasPg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormasPgDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FormasPgDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormasPgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormasPgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormasPgs
     * const formasPg = await prisma.formasPg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormasPgUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FormasPgUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormasPg.
     * @param {FormasPgUpsertArgs} args - Arguments to update or create a FormasPg.
     * @example
     * // Update or create a FormasPg
     * const formasPg = await prisma.formasPg.upsert({
     *   create: {
     *     // ... data to create a FormasPg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormasPg we want to update
     *   }
     * })
    **/
    upsert<T extends FormasPgUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FormasPgUpsertArgs<ExtArgs>>
    ): Prisma__FormasPgClient<$Result.GetResult<Prisma.$FormasPgPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more FormasPgs that matches the filter.
     * @param {FormasPgFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const formasPg = await prisma.formasPg.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FormasPgFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FormasPg.
     * @param {FormasPgAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const formasPg = await prisma.formasPg.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FormasPgAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of FormasPgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormasPgCountArgs} args - Arguments to filter FormasPgs to count.
     * @example
     * // Count the number of FormasPgs
     * const count = await prisma.formasPg.count({
     *   where: {
     *     // ... the filter for the FormasPgs we want to count
     *   }
     * })
    **/
    count<T extends FormasPgCountArgs>(
      args?: Subset<T, FormasPgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormasPgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormasPg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormasPgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormasPgAggregateArgs>(args: Subset<T, FormasPgAggregateArgs>): Prisma.PrismaPromise<GetFormasPgAggregateType<T>>

    /**
     * Group by FormasPg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormasPgGroupByArgs} args - Group by arguments.
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
      T extends FormasPgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormasPgGroupByArgs['orderBy'] }
        : { orderBy?: FormasPgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormasPgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormasPgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormasPg model
   */
  readonly fields: FormasPgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormasPg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormasPgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FormasPg model
   */ 
  interface FormasPgFieldRefs {
    readonly id: FieldRef<"FormasPg", 'String'>
    readonly ban: FieldRef<"FormasPg", 'String'>
    readonly cVd: FieldRef<"FormasPg", 'String'>
    readonly des: FieldRef<"FormasPg", 'String'>
    readonly dtHr: FieldRef<"FormasPg", 'DateTime'>
    readonly ibm: FieldRef<"FormasPg", 'String'>
    readonly id_: FieldRef<"FormasPg", 'String'>
    readonly tip: FieldRef<"FormasPg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FormasPg findUnique
   */
  export type FormasPgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * Filter, which FormasPg to fetch.
     */
    where: FormasPgWhereUniqueInput
  }

  /**
   * FormasPg findUniqueOrThrow
   */
  export type FormasPgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * Filter, which FormasPg to fetch.
     */
    where: FormasPgWhereUniqueInput
  }

  /**
   * FormasPg findFirst
   */
  export type FormasPgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * Filter, which FormasPg to fetch.
     */
    where?: FormasPgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormasPgs to fetch.
     */
    orderBy?: FormasPgOrderByWithRelationInput | FormasPgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormasPgs.
     */
    cursor?: FormasPgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormasPgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormasPgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormasPgs.
     */
    distinct?: FormasPgScalarFieldEnum | FormasPgScalarFieldEnum[]
  }

  /**
   * FormasPg findFirstOrThrow
   */
  export type FormasPgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * Filter, which FormasPg to fetch.
     */
    where?: FormasPgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormasPgs to fetch.
     */
    orderBy?: FormasPgOrderByWithRelationInput | FormasPgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormasPgs.
     */
    cursor?: FormasPgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormasPgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormasPgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormasPgs.
     */
    distinct?: FormasPgScalarFieldEnum | FormasPgScalarFieldEnum[]
  }

  /**
   * FormasPg findMany
   */
  export type FormasPgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * Filter, which FormasPgs to fetch.
     */
    where?: FormasPgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormasPgs to fetch.
     */
    orderBy?: FormasPgOrderByWithRelationInput | FormasPgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormasPgs.
     */
    cursor?: FormasPgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormasPgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormasPgs.
     */
    skip?: number
    distinct?: FormasPgScalarFieldEnum | FormasPgScalarFieldEnum[]
  }

  /**
   * FormasPg create
   */
  export type FormasPgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * The data needed to create a FormasPg.
     */
    data: XOR<FormasPgCreateInput, FormasPgUncheckedCreateInput>
  }

  /**
   * FormasPg createMany
   */
  export type FormasPgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormasPgs.
     */
    data: FormasPgCreateManyInput | FormasPgCreateManyInput[]
  }

  /**
   * FormasPg update
   */
  export type FormasPgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * The data needed to update a FormasPg.
     */
    data: XOR<FormasPgUpdateInput, FormasPgUncheckedUpdateInput>
    /**
     * Choose, which FormasPg to update.
     */
    where: FormasPgWhereUniqueInput
  }

  /**
   * FormasPg updateMany
   */
  export type FormasPgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormasPgs.
     */
    data: XOR<FormasPgUpdateManyMutationInput, FormasPgUncheckedUpdateManyInput>
    /**
     * Filter which FormasPgs to update
     */
    where?: FormasPgWhereInput
  }

  /**
   * FormasPg upsert
   */
  export type FormasPgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * The filter to search for the FormasPg to update in case it exists.
     */
    where: FormasPgWhereUniqueInput
    /**
     * In case the FormasPg found by the `where` argument doesn't exist, create a new FormasPg with this data.
     */
    create: XOR<FormasPgCreateInput, FormasPgUncheckedCreateInput>
    /**
     * In case the FormasPg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormasPgUpdateInput, FormasPgUncheckedUpdateInput>
  }

  /**
   * FormasPg delete
   */
  export type FormasPgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
    /**
     * Filter which FormasPg to delete.
     */
    where: FormasPgWhereUniqueInput
  }

  /**
   * FormasPg deleteMany
   */
  export type FormasPgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormasPgs to delete
     */
    where?: FormasPgWhereInput
  }

  /**
   * FormasPg findRaw
   */
  export type FormasPgFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FormasPg aggregateRaw
   */
  export type FormasPgAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FormasPg without action
   */
  export type FormasPgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormasPg
     */
    select?: FormasPgSelect<ExtArgs> | null
  }


  /**
   * Model Produtos
   */

  export type AggregateProdutos = {
    _count: ProdutosCountAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  export type ProdutosMinAggregateOutputType = {
    id: string | null
    St: string | null
    cBar: string | null
    cNcm: string | null
    cus: string | null
    des: string | null
    dtHr: Date | null
    eDe: string | null
    eMa: string | null
    eMi: string | null
    eOl: string | null
    ePi: string | null
    eTo: string | null
    gr: string | null
    ibm: string | null
    icm: string | null
    id_: string | null
    ipi: string | null
    sgr: string | null
    st: string | null
    uCx: string | null
    unM: string | null
    vda: string | null
  }

  export type ProdutosMaxAggregateOutputType = {
    id: string | null
    St: string | null
    cBar: string | null
    cNcm: string | null
    cus: string | null
    des: string | null
    dtHr: Date | null
    eDe: string | null
    eMa: string | null
    eMi: string | null
    eOl: string | null
    ePi: string | null
    eTo: string | null
    gr: string | null
    ibm: string | null
    icm: string | null
    id_: string | null
    ipi: string | null
    sgr: string | null
    st: string | null
    uCx: string | null
    unM: string | null
    vda: string | null
  }

  export type ProdutosCountAggregateOutputType = {
    id: number
    St: number
    cBar: number
    cNcm: number
    cus: number
    des: number
    dtHr: number
    eDe: number
    eMa: number
    eMi: number
    eOl: number
    ePi: number
    eTo: number
    gr: number
    ibm: number
    icm: number
    id_: number
    ipi: number
    sgr: number
    st: number
    uCx: number
    unM: number
    vda: number
    _all: number
  }


  export type ProdutosMinAggregateInputType = {
    id?: true
    St?: true
    cBar?: true
    cNcm?: true
    cus?: true
    des?: true
    dtHr?: true
    eDe?: true
    eMa?: true
    eMi?: true
    eOl?: true
    ePi?: true
    eTo?: true
    gr?: true
    ibm?: true
    icm?: true
    id_?: true
    ipi?: true
    sgr?: true
    st?: true
    uCx?: true
    unM?: true
    vda?: true
  }

  export type ProdutosMaxAggregateInputType = {
    id?: true
    St?: true
    cBar?: true
    cNcm?: true
    cus?: true
    des?: true
    dtHr?: true
    eDe?: true
    eMa?: true
    eMi?: true
    eOl?: true
    ePi?: true
    eTo?: true
    gr?: true
    ibm?: true
    icm?: true
    id_?: true
    ipi?: true
    sgr?: true
    st?: true
    uCx?: true
    unM?: true
    vda?: true
  }

  export type ProdutosCountAggregateInputType = {
    id?: true
    St?: true
    cBar?: true
    cNcm?: true
    cus?: true
    des?: true
    dtHr?: true
    eDe?: true
    eMa?: true
    eMi?: true
    eOl?: true
    ePi?: true
    eTo?: true
    gr?: true
    ibm?: true
    icm?: true
    id_?: true
    ipi?: true
    sgr?: true
    st?: true
    uCx?: true
    unM?: true
    vda?: true
    _all?: true
  }

  export type ProdutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to aggregate.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutosMaxAggregateInputType
  }

  export type GetProdutosAggregateType<T extends ProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutos[P]>
      : GetScalarType<T[P], AggregateProdutos[P]>
  }




  export type ProdutosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutosWhereInput
    orderBy?: ProdutosOrderByWithAggregationInput | ProdutosOrderByWithAggregationInput[]
    by: ProdutosScalarFieldEnum[] | ProdutosScalarFieldEnum
    having?: ProdutosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutosCountAggregateInputType | true
    _min?: ProdutosMinAggregateInputType
    _max?: ProdutosMaxAggregateInputType
  }

  export type ProdutosGroupByOutputType = {
    id: string
    St: string | null
    cBar: string
    cNcm: string | null
    cus: string | null
    des: string
    dtHr: Date
    eDe: string
    eMa: string | null
    eMi: string | null
    eOl: string
    ePi: string
    eTo: string
    gr: string
    ibm: string
    icm: string
    id_: string
    ipi: string | null
    sgr: string | null
    st: string | null
    uCx: string | null
    unM: string | null
    vda: string | null
    _count: ProdutosCountAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  type GetProdutosGroupByPayload<T extends ProdutosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
        }
      >
    >


  export type ProdutosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    St?: boolean
    cBar?: boolean
    cNcm?: boolean
    cus?: boolean
    des?: boolean
    dtHr?: boolean
    eDe?: boolean
    eMa?: boolean
    eMi?: boolean
    eOl?: boolean
    ePi?: boolean
    eTo?: boolean
    gr?: boolean
    ibm?: boolean
    icm?: boolean
    id_?: boolean
    ipi?: boolean
    sgr?: boolean
    st?: boolean
    uCx?: boolean
    unM?: boolean
    vda?: boolean
  }, ExtArgs["result"]["produtos"]>


  export type ProdutosSelectScalar = {
    id?: boolean
    St?: boolean
    cBar?: boolean
    cNcm?: boolean
    cus?: boolean
    des?: boolean
    dtHr?: boolean
    eDe?: boolean
    eMa?: boolean
    eMi?: boolean
    eOl?: boolean
    ePi?: boolean
    eTo?: boolean
    gr?: boolean
    ibm?: boolean
    icm?: boolean
    id_?: boolean
    ipi?: boolean
    sgr?: boolean
    st?: boolean
    uCx?: boolean
    unM?: boolean
    vda?: boolean
  }


  export type $ProdutosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produtos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      St: string | null
      cBar: string
      cNcm: string | null
      cus: string | null
      des: string
      dtHr: Date
      eDe: string
      eMa: string | null
      eMi: string | null
      eOl: string
      ePi: string
      eTo: string
      gr: string
      ibm: string
      icm: string
      id_: string
      ipi: string | null
      sgr: string | null
      st: string | null
      uCx: string | null
      unM: string | null
      vda: string | null
    }, ExtArgs["result"]["produtos"]>
    composites: {}
  }

  type ProdutosGetPayload<S extends boolean | null | undefined | ProdutosDefaultArgs> = $Result.GetResult<Prisma.$ProdutosPayload, S>

  type ProdutosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProdutosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProdutosCountAggregateInputType | true
    }

  export interface ProdutosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produtos'], meta: { name: 'Produtos' } }
    /**
     * Find zero or one Produtos that matches the filter.
     * @param {ProdutosFindUniqueArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProdutosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProdutosFindUniqueArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Produtos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProdutosFindUniqueOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProdutosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdutosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosFindFirstArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProdutosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdutosFindFirstArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosFindFirstOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProdutosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdutosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produtos.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produtos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtosWithIdOnly = await prisma.produtos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProdutosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdutosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Produtos.
     * @param {ProdutosCreateArgs} args - Arguments to create a Produtos.
     * @example
     * // Create one Produtos
     * const Produtos = await prisma.produtos.create({
     *   data: {
     *     // ... data to create a Produtos
     *   }
     * })
     * 
    **/
    create<T extends ProdutosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProdutosCreateArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Produtos.
     * @param {ProdutosCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProdutosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdutosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produtos.
     * @param {ProdutosDeleteArgs} args - Arguments to delete one Produtos.
     * @example
     * // Delete one Produtos
     * const Produtos = await prisma.produtos.delete({
     *   where: {
     *     // ... filter to delete one Produtos
     *   }
     * })
     * 
    **/
    delete<T extends ProdutosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProdutosDeleteArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Produtos.
     * @param {ProdutosUpdateArgs} args - Arguments to update one Produtos.
     * @example
     * // Update one Produtos
     * const produtos = await prisma.produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProdutosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProdutosUpdateArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutosDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProdutosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProdutosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProdutosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProdutosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produtos.
     * @param {ProdutosUpsertArgs} args - Arguments to update or create a Produtos.
     * @example
     * // Update or create a Produtos
     * const produtos = await prisma.produtos.upsert({
     *   create: {
     *     // ... data to create a Produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtos we want to update
     *   }
     * })
    **/
    upsert<T extends ProdutosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProdutosUpsertArgs<ExtArgs>>
    ): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Produtos that matches the filter.
     * @param {ProdutosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const produtos = await prisma.produtos.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProdutosFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Produtos.
     * @param {ProdutosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const produtos = await prisma.produtos.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProdutosAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produtos.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutosCountArgs>(
      args?: Subset<T, ProdutosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutosAggregateArgs>(args: Subset<T, ProdutosAggregateArgs>): Prisma.PrismaPromise<GetProdutosAggregateType<T>>

    /**
     * Group by Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosGroupByArgs} args - Group by arguments.
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
      T extends ProdutosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutosGroupByArgs['orderBy'] }
        : { orderBy?: ProdutosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produtos model
   */
  readonly fields: ProdutosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Produtos model
   */ 
  interface ProdutosFieldRefs {
    readonly id: FieldRef<"Produtos", 'String'>
    readonly St: FieldRef<"Produtos", 'String'>
    readonly cBar: FieldRef<"Produtos", 'String'>
    readonly cNcm: FieldRef<"Produtos", 'String'>
    readonly cus: FieldRef<"Produtos", 'String'>
    readonly des: FieldRef<"Produtos", 'String'>
    readonly dtHr: FieldRef<"Produtos", 'DateTime'>
    readonly eDe: FieldRef<"Produtos", 'String'>
    readonly eMa: FieldRef<"Produtos", 'String'>
    readonly eMi: FieldRef<"Produtos", 'String'>
    readonly eOl: FieldRef<"Produtos", 'String'>
    readonly ePi: FieldRef<"Produtos", 'String'>
    readonly eTo: FieldRef<"Produtos", 'String'>
    readonly gr: FieldRef<"Produtos", 'String'>
    readonly ibm: FieldRef<"Produtos", 'String'>
    readonly icm: FieldRef<"Produtos", 'String'>
    readonly id_: FieldRef<"Produtos", 'String'>
    readonly ipi: FieldRef<"Produtos", 'String'>
    readonly sgr: FieldRef<"Produtos", 'String'>
    readonly st: FieldRef<"Produtos", 'String'>
    readonly uCx: FieldRef<"Produtos", 'String'>
    readonly unM: FieldRef<"Produtos", 'String'>
    readonly vda: FieldRef<"Produtos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produtos findUnique
   */
  export type ProdutosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos findUniqueOrThrow
   */
  export type ProdutosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos findFirst
   */
  export type ProdutosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * Produtos findFirstOrThrow
   */
  export type ProdutosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * Produtos findMany
   */
  export type ProdutosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * Produtos create
   */
  export type ProdutosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * The data needed to create a Produtos.
     */
    data: XOR<ProdutosCreateInput, ProdutosUncheckedCreateInput>
  }

  /**
   * Produtos createMany
   */
  export type ProdutosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutosCreateManyInput | ProdutosCreateManyInput[]
  }

  /**
   * Produtos update
   */
  export type ProdutosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * The data needed to update a Produtos.
     */
    data: XOR<ProdutosUpdateInput, ProdutosUncheckedUpdateInput>
    /**
     * Choose, which Produtos to update.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos updateMany
   */
  export type ProdutosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutosUpdateManyMutationInput, ProdutosUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutosWhereInput
  }

  /**
   * Produtos upsert
   */
  export type ProdutosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * The filter to search for the Produtos to update in case it exists.
     */
    where: ProdutosWhereUniqueInput
    /**
     * In case the Produtos found by the `where` argument doesn't exist, create a new Produtos with this data.
     */
    create: XOR<ProdutosCreateInput, ProdutosUncheckedCreateInput>
    /**
     * In case the Produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutosUpdateInput, ProdutosUncheckedUpdateInput>
  }

  /**
   * Produtos delete
   */
  export type ProdutosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Filter which Produtos to delete.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos deleteMany
   */
  export type ProdutosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutosWhereInput
  }

  /**
   * Produtos findRaw
   */
  export type ProdutosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Produtos aggregateRaw
   */
  export type ProdutosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Produtos without action
   */
  export type ProdutosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
  }


  /**
   * Model Produtos_Grupos
   */

  export type AggregateProdutos_Grupos = {
    _count: Produtos_GruposCountAggregateOutputType | null
    _min: Produtos_GruposMinAggregateOutputType | null
    _max: Produtos_GruposMaxAggregateOutputType | null
  }

  export type Produtos_GruposMinAggregateOutputType = {
    id: string | null
    des: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
  }

  export type Produtos_GruposMaxAggregateOutputType = {
    id: string | null
    des: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
  }

  export type Produtos_GruposCountAggregateOutputType = {
    id: number
    des: number
    dtHr: number
    ibm: number
    id_: number
    _all: number
  }


  export type Produtos_GruposMinAggregateInputType = {
    id?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
  }

  export type Produtos_GruposMaxAggregateInputType = {
    id?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
  }

  export type Produtos_GruposCountAggregateInputType = {
    id?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
    _all?: true
  }

  export type Produtos_GruposAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos_Grupos to aggregate.
     */
    where?: Produtos_GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos_Grupos to fetch.
     */
    orderBy?: Produtos_GruposOrderByWithRelationInput | Produtos_GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Produtos_GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos_Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos_Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos_Grupos
    **/
    _count?: true | Produtos_GruposCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Produtos_GruposMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Produtos_GruposMaxAggregateInputType
  }

  export type GetProdutos_GruposAggregateType<T extends Produtos_GruposAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutos_Grupos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutos_Grupos[P]>
      : GetScalarType<T[P], AggregateProdutos_Grupos[P]>
  }




  export type Produtos_GruposGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Produtos_GruposWhereInput
    orderBy?: Produtos_GruposOrderByWithAggregationInput | Produtos_GruposOrderByWithAggregationInput[]
    by: Produtos_GruposScalarFieldEnum[] | Produtos_GruposScalarFieldEnum
    having?: Produtos_GruposScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Produtos_GruposCountAggregateInputType | true
    _min?: Produtos_GruposMinAggregateInputType
    _max?: Produtos_GruposMaxAggregateInputType
  }

  export type Produtos_GruposGroupByOutputType = {
    id: string
    des: string
    dtHr: Date
    ibm: string
    id_: string
    _count: Produtos_GruposCountAggregateOutputType | null
    _min: Produtos_GruposMinAggregateOutputType | null
    _max: Produtos_GruposMaxAggregateOutputType | null
  }

  type GetProdutos_GruposGroupByPayload<T extends Produtos_GruposGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Produtos_GruposGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Produtos_GruposGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Produtos_GruposGroupByOutputType[P]>
            : GetScalarType<T[P], Produtos_GruposGroupByOutputType[P]>
        }
      >
    >


  export type Produtos_GruposSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    des?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
  }, ExtArgs["result"]["produtos_Grupos"]>


  export type Produtos_GruposSelectScalar = {
    id?: boolean
    des?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
  }


  export type $Produtos_GruposPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produtos_Grupos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      des: string
      dtHr: Date
      ibm: string
      id_: string
    }, ExtArgs["result"]["produtos_Grupos"]>
    composites: {}
  }

  type Produtos_GruposGetPayload<S extends boolean | null | undefined | Produtos_GruposDefaultArgs> = $Result.GetResult<Prisma.$Produtos_GruposPayload, S>

  type Produtos_GruposCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Produtos_GruposFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Produtos_GruposCountAggregateInputType | true
    }

  export interface Produtos_GruposDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produtos_Grupos'], meta: { name: 'Produtos_Grupos' } }
    /**
     * Find zero or one Produtos_Grupos that matches the filter.
     * @param {Produtos_GruposFindUniqueArgs} args - Arguments to find a Produtos_Grupos
     * @example
     * // Get one Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Produtos_GruposFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Produtos_GruposFindUniqueArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Produtos_Grupos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Produtos_GruposFindUniqueOrThrowArgs} args - Arguments to find a Produtos_Grupos
     * @example
     * // Get one Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Produtos_GruposFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Produtos_GruposFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Produtos_Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produtos_GruposFindFirstArgs} args - Arguments to find a Produtos_Grupos
     * @example
     * // Get one Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Produtos_GruposFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Produtos_GruposFindFirstArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Produtos_Grupos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produtos_GruposFindFirstOrThrowArgs} args - Arguments to find a Produtos_Grupos
     * @example
     * // Get one Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Produtos_GruposFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Produtos_GruposFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Produtos_Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produtos_GruposFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.findMany()
     * 
     * // Get first 10 Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtos_GruposWithIdOnly = await prisma.produtos_Grupos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Produtos_GruposFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Produtos_GruposFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Produtos_Grupos.
     * @param {Produtos_GruposCreateArgs} args - Arguments to create a Produtos_Grupos.
     * @example
     * // Create one Produtos_Grupos
     * const Produtos_Grupos = await prisma.produtos_Grupos.create({
     *   data: {
     *     // ... data to create a Produtos_Grupos
     *   }
     * })
     * 
    **/
    create<T extends Produtos_GruposCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Produtos_GruposCreateArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Produtos_Grupos.
     * @param {Produtos_GruposCreateManyArgs} args - Arguments to create many Produtos_Grupos.
     * @example
     * // Create many Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends Produtos_GruposCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Produtos_GruposCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produtos_Grupos.
     * @param {Produtos_GruposDeleteArgs} args - Arguments to delete one Produtos_Grupos.
     * @example
     * // Delete one Produtos_Grupos
     * const Produtos_Grupos = await prisma.produtos_Grupos.delete({
     *   where: {
     *     // ... filter to delete one Produtos_Grupos
     *   }
     * })
     * 
    **/
    delete<T extends Produtos_GruposDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Produtos_GruposDeleteArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Produtos_Grupos.
     * @param {Produtos_GruposUpdateArgs} args - Arguments to update one Produtos_Grupos.
     * @example
     * // Update one Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Produtos_GruposUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Produtos_GruposUpdateArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Produtos_Grupos.
     * @param {Produtos_GruposDeleteManyArgs} args - Arguments to filter Produtos_Grupos to delete.
     * @example
     * // Delete a few Produtos_Grupos
     * const { count } = await prisma.produtos_Grupos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Produtos_GruposDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Produtos_GruposDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos_Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produtos_GruposUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Produtos_GruposUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Produtos_GruposUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produtos_Grupos.
     * @param {Produtos_GruposUpsertArgs} args - Arguments to update or create a Produtos_Grupos.
     * @example
     * // Update or create a Produtos_Grupos
     * const produtos_Grupos = await prisma.produtos_Grupos.upsert({
     *   create: {
     *     // ... data to create a Produtos_Grupos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtos_Grupos we want to update
     *   }
     * })
    **/
    upsert<T extends Produtos_GruposUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Produtos_GruposUpsertArgs<ExtArgs>>
    ): Prisma__Produtos_GruposClient<$Result.GetResult<Prisma.$Produtos_GruposPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Produtos_Grupos that matches the filter.
     * @param {Produtos_GruposFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const produtos_Grupos = await prisma.produtos_Grupos.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: Produtos_GruposFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Produtos_Grupos.
     * @param {Produtos_GruposAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const produtos_Grupos = await prisma.produtos_Grupos.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: Produtos_GruposAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Produtos_Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produtos_GruposCountArgs} args - Arguments to filter Produtos_Grupos to count.
     * @example
     * // Count the number of Produtos_Grupos
     * const count = await prisma.produtos_Grupos.count({
     *   where: {
     *     // ... the filter for the Produtos_Grupos we want to count
     *   }
     * })
    **/
    count<T extends Produtos_GruposCountArgs>(
      args?: Subset<T, Produtos_GruposCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Produtos_GruposCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtos_Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produtos_GruposAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Produtos_GruposAggregateArgs>(args: Subset<T, Produtos_GruposAggregateArgs>): Prisma.PrismaPromise<GetProdutos_GruposAggregateType<T>>

    /**
     * Group by Produtos_Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produtos_GruposGroupByArgs} args - Group by arguments.
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
      T extends Produtos_GruposGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Produtos_GruposGroupByArgs['orderBy'] }
        : { orderBy?: Produtos_GruposGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Produtos_GruposGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutos_GruposGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produtos_Grupos model
   */
  readonly fields: Produtos_GruposFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produtos_Grupos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Produtos_GruposClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Produtos_Grupos model
   */ 
  interface Produtos_GruposFieldRefs {
    readonly id: FieldRef<"Produtos_Grupos", 'String'>
    readonly des: FieldRef<"Produtos_Grupos", 'String'>
    readonly dtHr: FieldRef<"Produtos_Grupos", 'DateTime'>
    readonly ibm: FieldRef<"Produtos_Grupos", 'String'>
    readonly id_: FieldRef<"Produtos_Grupos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produtos_Grupos findUnique
   */
  export type Produtos_GruposFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * Filter, which Produtos_Grupos to fetch.
     */
    where: Produtos_GruposWhereUniqueInput
  }

  /**
   * Produtos_Grupos findUniqueOrThrow
   */
  export type Produtos_GruposFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * Filter, which Produtos_Grupos to fetch.
     */
    where: Produtos_GruposWhereUniqueInput
  }

  /**
   * Produtos_Grupos findFirst
   */
  export type Produtos_GruposFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * Filter, which Produtos_Grupos to fetch.
     */
    where?: Produtos_GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos_Grupos to fetch.
     */
    orderBy?: Produtos_GruposOrderByWithRelationInput | Produtos_GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos_Grupos.
     */
    cursor?: Produtos_GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos_Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos_Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos_Grupos.
     */
    distinct?: Produtos_GruposScalarFieldEnum | Produtos_GruposScalarFieldEnum[]
  }

  /**
   * Produtos_Grupos findFirstOrThrow
   */
  export type Produtos_GruposFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * Filter, which Produtos_Grupos to fetch.
     */
    where?: Produtos_GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos_Grupos to fetch.
     */
    orderBy?: Produtos_GruposOrderByWithRelationInput | Produtos_GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos_Grupos.
     */
    cursor?: Produtos_GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos_Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos_Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos_Grupos.
     */
    distinct?: Produtos_GruposScalarFieldEnum | Produtos_GruposScalarFieldEnum[]
  }

  /**
   * Produtos_Grupos findMany
   */
  export type Produtos_GruposFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * Filter, which Produtos_Grupos to fetch.
     */
    where?: Produtos_GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos_Grupos to fetch.
     */
    orderBy?: Produtos_GruposOrderByWithRelationInput | Produtos_GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos_Grupos.
     */
    cursor?: Produtos_GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos_Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos_Grupos.
     */
    skip?: number
    distinct?: Produtos_GruposScalarFieldEnum | Produtos_GruposScalarFieldEnum[]
  }

  /**
   * Produtos_Grupos create
   */
  export type Produtos_GruposCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * The data needed to create a Produtos_Grupos.
     */
    data: XOR<Produtos_GruposCreateInput, Produtos_GruposUncheckedCreateInput>
  }

  /**
   * Produtos_Grupos createMany
   */
  export type Produtos_GruposCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos_Grupos.
     */
    data: Produtos_GruposCreateManyInput | Produtos_GruposCreateManyInput[]
  }

  /**
   * Produtos_Grupos update
   */
  export type Produtos_GruposUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * The data needed to update a Produtos_Grupos.
     */
    data: XOR<Produtos_GruposUpdateInput, Produtos_GruposUncheckedUpdateInput>
    /**
     * Choose, which Produtos_Grupos to update.
     */
    where: Produtos_GruposWhereUniqueInput
  }

  /**
   * Produtos_Grupos updateMany
   */
  export type Produtos_GruposUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos_Grupos.
     */
    data: XOR<Produtos_GruposUpdateManyMutationInput, Produtos_GruposUncheckedUpdateManyInput>
    /**
     * Filter which Produtos_Grupos to update
     */
    where?: Produtos_GruposWhereInput
  }

  /**
   * Produtos_Grupos upsert
   */
  export type Produtos_GruposUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * The filter to search for the Produtos_Grupos to update in case it exists.
     */
    where: Produtos_GruposWhereUniqueInput
    /**
     * In case the Produtos_Grupos found by the `where` argument doesn't exist, create a new Produtos_Grupos with this data.
     */
    create: XOR<Produtos_GruposCreateInput, Produtos_GruposUncheckedCreateInput>
    /**
     * In case the Produtos_Grupos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Produtos_GruposUpdateInput, Produtos_GruposUncheckedUpdateInput>
  }

  /**
   * Produtos_Grupos delete
   */
  export type Produtos_GruposDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
    /**
     * Filter which Produtos_Grupos to delete.
     */
    where: Produtos_GruposWhereUniqueInput
  }

  /**
   * Produtos_Grupos deleteMany
   */
  export type Produtos_GruposDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos_Grupos to delete
     */
    where?: Produtos_GruposWhereInput
  }

  /**
   * Produtos_Grupos findRaw
   */
  export type Produtos_GruposFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Produtos_Grupos aggregateRaw
   */
  export type Produtos_GruposAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Produtos_Grupos without action
   */
  export type Produtos_GruposDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos_Grupos
     */
    select?: Produtos_GruposSelect<ExtArgs> | null
  }


  /**
   * Model Turnos
   */

  export type AggregateTurnos = {
    _count: TurnosCountAggregateOutputType | null
    _min: TurnosMinAggregateOutputType | null
    _max: TurnosMaxAggregateOutputType | null
  }

  export type TurnosMinAggregateOutputType = {
    id: string | null
    des: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
  }

  export type TurnosMaxAggregateOutputType = {
    id: string | null
    des: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
  }

  export type TurnosCountAggregateOutputType = {
    id: number
    des: number
    dtHr: number
    ibm: number
    id_: number
    _all: number
  }


  export type TurnosMinAggregateInputType = {
    id?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
  }

  export type TurnosMaxAggregateInputType = {
    id?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
  }

  export type TurnosCountAggregateInputType = {
    id?: true
    des?: true
    dtHr?: true
    ibm?: true
    id_?: true
    _all?: true
  }

  export type TurnosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to aggregate.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnos
    **/
    _count?: true | TurnosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnosMaxAggregateInputType
  }

  export type GetTurnosAggregateType<T extends TurnosAggregateArgs> = {
        [P in keyof T & keyof AggregateTurnos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurnos[P]>
      : GetScalarType<T[P], AggregateTurnos[P]>
  }




  export type TurnosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnosWhereInput
    orderBy?: TurnosOrderByWithAggregationInput | TurnosOrderByWithAggregationInput[]
    by: TurnosScalarFieldEnum[] | TurnosScalarFieldEnum
    having?: TurnosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnosCountAggregateInputType | true
    _min?: TurnosMinAggregateInputType
    _max?: TurnosMaxAggregateInputType
  }

  export type TurnosGroupByOutputType = {
    id: string
    des: string
    dtHr: Date
    ibm: string
    id_: string
    _count: TurnosCountAggregateOutputType | null
    _min: TurnosMinAggregateOutputType | null
    _max: TurnosMaxAggregateOutputType | null
  }

  type GetTurnosGroupByPayload<T extends TurnosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnosGroupByOutputType[P]>
            : GetScalarType<T[P], TurnosGroupByOutputType[P]>
        }
      >
    >


  export type TurnosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    des?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
  }, ExtArgs["result"]["turnos"]>


  export type TurnosSelectScalar = {
    id?: boolean
    des?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
  }


  export type $TurnosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turnos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      des: string
      dtHr: Date
      ibm: string
      id_: string
    }, ExtArgs["result"]["turnos"]>
    composites: {}
  }

  type TurnosGetPayload<S extends boolean | null | undefined | TurnosDefaultArgs> = $Result.GetResult<Prisma.$TurnosPayload, S>

  type TurnosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TurnosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TurnosCountAggregateInputType | true
    }

  export interface TurnosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turnos'], meta: { name: 'Turnos' } }
    /**
     * Find zero or one Turnos that matches the filter.
     * @param {TurnosFindUniqueArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TurnosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TurnosFindUniqueArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Turnos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TurnosFindUniqueOrThrowArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TurnosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosFindFirstArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TurnosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnosFindFirstArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Turnos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosFindFirstOrThrowArgs} args - Arguments to find a Turnos
     * @example
     * // Get one Turnos
     * const turnos = await prisma.turnos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TurnosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turnos.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turnos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnosWithIdOnly = await prisma.turnos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TurnosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Turnos.
     * @param {TurnosCreateArgs} args - Arguments to create a Turnos.
     * @example
     * // Create one Turnos
     * const Turnos = await prisma.turnos.create({
     *   data: {
     *     // ... data to create a Turnos
     *   }
     * })
     * 
    **/
    create<T extends TurnosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TurnosCreateArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Turnos.
     * @param {TurnosCreateManyArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turnos = await prisma.turnos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TurnosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Turnos.
     * @param {TurnosDeleteArgs} args - Arguments to delete one Turnos.
     * @example
     * // Delete one Turnos
     * const Turnos = await prisma.turnos.delete({
     *   where: {
     *     // ... filter to delete one Turnos
     *   }
     * })
     * 
    **/
    delete<T extends TurnosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TurnosDeleteArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Turnos.
     * @param {TurnosUpdateArgs} args - Arguments to update one Turnos.
     * @example
     * // Update one Turnos
     * const turnos = await prisma.turnos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TurnosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TurnosUpdateArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Turnos.
     * @param {TurnosDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turnos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TurnosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turnos = await prisma.turnos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TurnosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TurnosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turnos.
     * @param {TurnosUpsertArgs} args - Arguments to update or create a Turnos.
     * @example
     * // Update or create a Turnos
     * const turnos = await prisma.turnos.upsert({
     *   create: {
     *     // ... data to create a Turnos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turnos we want to update
     *   }
     * })
    **/
    upsert<T extends TurnosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TurnosUpsertArgs<ExtArgs>>
    ): Prisma__TurnosClient<$Result.GetResult<Prisma.$TurnosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Turnos that matches the filter.
     * @param {TurnosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const turnos = await prisma.turnos.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TurnosFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Turnos.
     * @param {TurnosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const turnos = await prisma.turnos.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TurnosAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turnos.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends TurnosCountArgs>(
      args?: Subset<T, TurnosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TurnosAggregateArgs>(args: Subset<T, TurnosAggregateArgs>): Prisma.PrismaPromise<GetTurnosAggregateType<T>>

    /**
     * Group by Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnosGroupByArgs} args - Group by arguments.
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
      T extends TurnosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnosGroupByArgs['orderBy'] }
        : { orderBy?: TurnosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TurnosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turnos model
   */
  readonly fields: TurnosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turnos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Turnos model
   */ 
  interface TurnosFieldRefs {
    readonly id: FieldRef<"Turnos", 'String'>
    readonly des: FieldRef<"Turnos", 'String'>
    readonly dtHr: FieldRef<"Turnos", 'DateTime'>
    readonly ibm: FieldRef<"Turnos", 'String'>
    readonly id_: FieldRef<"Turnos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Turnos findUnique
   */
  export type TurnosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos findUniqueOrThrow
   */
  export type TurnosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos findFirst
   */
  export type TurnosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Turnos findFirstOrThrow
   */
  export type TurnosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Turnos findMany
   */
  export type TurnosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnosOrderByWithRelationInput | TurnosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnos.
     */
    cursor?: TurnosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    distinct?: TurnosScalarFieldEnum | TurnosScalarFieldEnum[]
  }

  /**
   * Turnos create
   */
  export type TurnosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * The data needed to create a Turnos.
     */
    data: XOR<TurnosCreateInput, TurnosUncheckedCreateInput>
  }

  /**
   * Turnos createMany
   */
  export type TurnosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnos.
     */
    data: TurnosCreateManyInput | TurnosCreateManyInput[]
  }

  /**
   * Turnos update
   */
  export type TurnosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * The data needed to update a Turnos.
     */
    data: XOR<TurnosUpdateInput, TurnosUncheckedUpdateInput>
    /**
     * Choose, which Turnos to update.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos updateMany
   */
  export type TurnosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnosUpdateManyMutationInput, TurnosUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnosWhereInput
  }

  /**
   * Turnos upsert
   */
  export type TurnosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * The filter to search for the Turnos to update in case it exists.
     */
    where: TurnosWhereUniqueInput
    /**
     * In case the Turnos found by the `where` argument doesn't exist, create a new Turnos with this data.
     */
    create: XOR<TurnosCreateInput, TurnosUncheckedCreateInput>
    /**
     * In case the Turnos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnosUpdateInput, TurnosUncheckedUpdateInput>
  }

  /**
   * Turnos delete
   */
  export type TurnosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
    /**
     * Filter which Turnos to delete.
     */
    where: TurnosWhereUniqueInput
  }

  /**
   * Turnos deleteMany
   */
  export type TurnosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to delete
     */
    where?: TurnosWhereInput
  }

  /**
   * Turnos findRaw
   */
  export type TurnosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Turnos aggregateRaw
   */
  export type TurnosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Turnos without action
   */
  export type TurnosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turnos
     */
    select?: TurnosSelect<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    cel: string | null
    cod: string | null
    cpf: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
    nom: string | null
    sex: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    cel: string | null
    cod: string | null
    cpf: string | null
    dtHr: Date | null
    ibm: string | null
    id_: string | null
    nom: string | null
    sex: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    cel: number
    cod: number
    cpf: number
    dtHr: number
    ibm: number
    id_: number
    nom: number
    sex: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    cel?: true
    cod?: true
    cpf?: true
    dtHr?: true
    ibm?: true
    id_?: true
    nom?: true
    sex?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    cel?: true
    cod?: true
    cpf?: true
    dtHr?: true
    ibm?: true
    id_?: true
    nom?: true
    sex?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    cel?: true
    cod?: true
    cpf?: true
    dtHr?: true
    ibm?: true
    id_?: true
    nom?: true
    sex?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    cel: string | null
    cod: string
    cpf: string
    dtHr: Date
    ibm: string
    id_: string
    nom: string
    sex: string | null
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cel?: boolean
    cod?: boolean
    cpf?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
    nom?: boolean
    sex?: boolean
  }, ExtArgs["result"]["usuarios"]>


  export type UsuariosSelectScalar = {
    id?: boolean
    cel?: boolean
    cod?: boolean
    cpf?: boolean
    dtHr?: boolean
    ibm?: boolean
    id_?: boolean
    nom?: boolean
    sex?: boolean
  }


  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cel: string | null
      cod: string
      cpf: string
      dtHr: Date
      ibm: string
      id_: string
      nom: string
      sex: string | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuariosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuariosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuariosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
    **/
    create<T extends UsuariosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UsuariosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
    **/
    delete<T extends UsuariosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuariosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuariosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuariosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
    **/
    upsert<T extends UsuariosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>
    ): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {UsuariosFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuarios = await prisma.usuarios.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UsuariosFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuarios.
     * @param {UsuariosAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuarios = await prisma.usuarios.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UsuariosAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuarios model
   */ 
  interface UsuariosFieldRefs {
    readonly id: FieldRef<"Usuarios", 'String'>
    readonly cel: FieldRef<"Usuarios", 'String'>
    readonly cod: FieldRef<"Usuarios", 'String'>
    readonly cpf: FieldRef<"Usuarios", 'String'>
    readonly dtHr: FieldRef<"Usuarios", 'DateTime'>
    readonly ibm: FieldRef<"Usuarios", 'String'>
    readonly id_: FieldRef<"Usuarios", 'String'>
    readonly nom: FieldRef<"Usuarios", 'String'>
    readonly sex: FieldRef<"Usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
  }

  /**
   * Usuarios findRaw
   */
  export type UsuariosFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuarios aggregateRaw
   */
  export type UsuariosAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CombustiveisScalarFieldEnum: {
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
    id_: 'id_',
    ncm: 'ncm',
    pis: 'pis',
    sig: 'sig',
    st: 'st',
    stDtI: 'stDtI',
    tCom: 'tCom',
    vda: 'vda'
  };

  export type CombustiveisScalarFieldEnum = (typeof CombustiveisScalarFieldEnum)[keyof typeof CombustiveisScalarFieldEnum]


  export const FormasPgScalarFieldEnum: {
    id: 'id',
    ban: 'ban',
    cVd: 'cVd',
    des: 'des',
    dtHr: 'dtHr',
    ibm: 'ibm',
    id_: 'id_',
    tip: 'tip'
  };

  export type FormasPgScalarFieldEnum = (typeof FormasPgScalarFieldEnum)[keyof typeof FormasPgScalarFieldEnum]


  export const ProdutosScalarFieldEnum: {
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
    ipi: 'ipi',
    sgr: 'sgr',
    st: 'st',
    uCx: 'uCx',
    unM: 'unM',
    vda: 'vda'
  };

  export type ProdutosScalarFieldEnum = (typeof ProdutosScalarFieldEnum)[keyof typeof ProdutosScalarFieldEnum]


  export const Produtos_GruposScalarFieldEnum: {
    id: 'id',
    des: 'des',
    dtHr: 'dtHr',
    ibm: 'ibm',
    id_: 'id_'
  };

  export type Produtos_GruposScalarFieldEnum = (typeof Produtos_GruposScalarFieldEnum)[keyof typeof Produtos_GruposScalarFieldEnum]


  export const TurnosScalarFieldEnum: {
    id: 'id',
    des: 'des',
    dtHr: 'dtHr',
    ibm: 'ibm',
    id_: 'id_'
  };

  export type TurnosScalarFieldEnum = (typeof TurnosScalarFieldEnum)[keyof typeof TurnosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
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

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


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


  export type CombustiveisWhereInput = {
    AND?: CombustiveisWhereInput | CombustiveisWhereInput[]
    OR?: CombustiveisWhereInput[]
    NOT?: CombustiveisWhereInput | CombustiveisWhereInput[]
    id?: StringFilter<"Combustiveis"> | string
    anp?: StringNullableFilter<"Combustiveis"> | string | null
    bicm?: StringNullableFilter<"Combustiveis"> | string | null
    cBar?: StringFilter<"Combustiveis"> | string
    cTo?: StringNullableFilter<"Combustiveis"> | string | null
    capT?: StringFilter<"Combustiveis"> | string
    cof?: StringNullableFilter<"Combustiveis"> | string | null
    cus?: StringFilter<"Combustiveis"> | string
    dLmc?: StringFilter<"Combustiveis"> | string
    del?: StringFilter<"Combustiveis"> | string
    des?: StringFilter<"Combustiveis"> | string
    dtHr?: DateTimeFilter<"Combustiveis"> | Date | string
    eTo?: StringNullableFilter<"Combustiveis"> | string | null
    ibm?: StringFilter<"Combustiveis"> | string
    id_?: StringFilter<"Combustiveis"> | string
    ncm?: StringNullableFilter<"Combustiveis"> | string | null
    pis?: StringNullableFilter<"Combustiveis"> | string | null
    sig?: StringFilter<"Combustiveis"> | string
    st?: StringNullableFilter<"Combustiveis"> | string | null
    stDtI?: StringFilter<"Combustiveis"> | string
    tCom?: StringFilter<"Combustiveis"> | string
    vda?: StringFilter<"Combustiveis"> | string
  }

  export type CombustiveisOrderByWithRelationInput = {
    id?: SortOrder
    anp?: SortOrder
    bicm?: SortOrder
    cBar?: SortOrder
    cTo?: SortOrder
    capT?: SortOrder
    cof?: SortOrder
    cus?: SortOrder
    dLmc?: SortOrder
    del?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eTo?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    ncm?: SortOrder
    pis?: SortOrder
    sig?: SortOrder
    st?: SortOrder
    stDtI?: SortOrder
    tCom?: SortOrder
    vda?: SortOrder
  }

  export type CombustiveisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CombustiveisWhereInput | CombustiveisWhereInput[]
    OR?: CombustiveisWhereInput[]
    NOT?: CombustiveisWhereInput | CombustiveisWhereInput[]
    anp?: StringNullableFilter<"Combustiveis"> | string | null
    bicm?: StringNullableFilter<"Combustiveis"> | string | null
    cBar?: StringFilter<"Combustiveis"> | string
    cTo?: StringNullableFilter<"Combustiveis"> | string | null
    capT?: StringFilter<"Combustiveis"> | string
    cof?: StringNullableFilter<"Combustiveis"> | string | null
    cus?: StringFilter<"Combustiveis"> | string
    dLmc?: StringFilter<"Combustiveis"> | string
    del?: StringFilter<"Combustiveis"> | string
    des?: StringFilter<"Combustiveis"> | string
    dtHr?: DateTimeFilter<"Combustiveis"> | Date | string
    eTo?: StringNullableFilter<"Combustiveis"> | string | null
    ibm?: StringFilter<"Combustiveis"> | string
    id_?: StringFilter<"Combustiveis"> | string
    ncm?: StringNullableFilter<"Combustiveis"> | string | null
    pis?: StringNullableFilter<"Combustiveis"> | string | null
    sig?: StringFilter<"Combustiveis"> | string
    st?: StringNullableFilter<"Combustiveis"> | string | null
    stDtI?: StringFilter<"Combustiveis"> | string
    tCom?: StringFilter<"Combustiveis"> | string
    vda?: StringFilter<"Combustiveis"> | string
  }, "id">

  export type CombustiveisOrderByWithAggregationInput = {
    id?: SortOrder
    anp?: SortOrder
    bicm?: SortOrder
    cBar?: SortOrder
    cTo?: SortOrder
    capT?: SortOrder
    cof?: SortOrder
    cus?: SortOrder
    dLmc?: SortOrder
    del?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eTo?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    ncm?: SortOrder
    pis?: SortOrder
    sig?: SortOrder
    st?: SortOrder
    stDtI?: SortOrder
    tCom?: SortOrder
    vda?: SortOrder
    _count?: CombustiveisCountOrderByAggregateInput
    _max?: CombustiveisMaxOrderByAggregateInput
    _min?: CombustiveisMinOrderByAggregateInput
  }

  export type CombustiveisScalarWhereWithAggregatesInput = {
    AND?: CombustiveisScalarWhereWithAggregatesInput | CombustiveisScalarWhereWithAggregatesInput[]
    OR?: CombustiveisScalarWhereWithAggregatesInput[]
    NOT?: CombustiveisScalarWhereWithAggregatesInput | CombustiveisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Combustiveis"> | string
    anp?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    bicm?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    cBar?: StringWithAggregatesFilter<"Combustiveis"> | string
    cTo?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    capT?: StringWithAggregatesFilter<"Combustiveis"> | string
    cof?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    cus?: StringWithAggregatesFilter<"Combustiveis"> | string
    dLmc?: StringWithAggregatesFilter<"Combustiveis"> | string
    del?: StringWithAggregatesFilter<"Combustiveis"> | string
    des?: StringWithAggregatesFilter<"Combustiveis"> | string
    dtHr?: DateTimeWithAggregatesFilter<"Combustiveis"> | Date | string
    eTo?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    ibm?: StringWithAggregatesFilter<"Combustiveis"> | string
    id_?: StringWithAggregatesFilter<"Combustiveis"> | string
    ncm?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    pis?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    sig?: StringWithAggregatesFilter<"Combustiveis"> | string
    st?: StringNullableWithAggregatesFilter<"Combustiveis"> | string | null
    stDtI?: StringWithAggregatesFilter<"Combustiveis"> | string
    tCom?: StringWithAggregatesFilter<"Combustiveis"> | string
    vda?: StringWithAggregatesFilter<"Combustiveis"> | string
  }

  export type FormasPgWhereInput = {
    AND?: FormasPgWhereInput | FormasPgWhereInput[]
    OR?: FormasPgWhereInput[]
    NOT?: FormasPgWhereInput | FormasPgWhereInput[]
    id?: StringFilter<"FormasPg"> | string
    ban?: StringFilter<"FormasPg"> | string
    cVd?: StringFilter<"FormasPg"> | string
    des?: StringFilter<"FormasPg"> | string
    dtHr?: DateTimeFilter<"FormasPg"> | Date | string
    ibm?: StringFilter<"FormasPg"> | string
    id_?: StringFilter<"FormasPg"> | string
    tip?: StringFilter<"FormasPg"> | string
  }

  export type FormasPgOrderByWithRelationInput = {
    id?: SortOrder
    ban?: SortOrder
    cVd?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    tip?: SortOrder
  }

  export type FormasPgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormasPgWhereInput | FormasPgWhereInput[]
    OR?: FormasPgWhereInput[]
    NOT?: FormasPgWhereInput | FormasPgWhereInput[]
    ban?: StringFilter<"FormasPg"> | string
    cVd?: StringFilter<"FormasPg"> | string
    des?: StringFilter<"FormasPg"> | string
    dtHr?: DateTimeFilter<"FormasPg"> | Date | string
    ibm?: StringFilter<"FormasPg"> | string
    id_?: StringFilter<"FormasPg"> | string
    tip?: StringFilter<"FormasPg"> | string
  }, "id">

  export type FormasPgOrderByWithAggregationInput = {
    id?: SortOrder
    ban?: SortOrder
    cVd?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    tip?: SortOrder
    _count?: FormasPgCountOrderByAggregateInput
    _max?: FormasPgMaxOrderByAggregateInput
    _min?: FormasPgMinOrderByAggregateInput
  }

  export type FormasPgScalarWhereWithAggregatesInput = {
    AND?: FormasPgScalarWhereWithAggregatesInput | FormasPgScalarWhereWithAggregatesInput[]
    OR?: FormasPgScalarWhereWithAggregatesInput[]
    NOT?: FormasPgScalarWhereWithAggregatesInput | FormasPgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormasPg"> | string
    ban?: StringWithAggregatesFilter<"FormasPg"> | string
    cVd?: StringWithAggregatesFilter<"FormasPg"> | string
    des?: StringWithAggregatesFilter<"FormasPg"> | string
    dtHr?: DateTimeWithAggregatesFilter<"FormasPg"> | Date | string
    ibm?: StringWithAggregatesFilter<"FormasPg"> | string
    id_?: StringWithAggregatesFilter<"FormasPg"> | string
    tip?: StringWithAggregatesFilter<"FormasPg"> | string
  }

  export type ProdutosWhereInput = {
    AND?: ProdutosWhereInput | ProdutosWhereInput[]
    OR?: ProdutosWhereInput[]
    NOT?: ProdutosWhereInput | ProdutosWhereInput[]
    id?: StringFilter<"Produtos"> | string
    St?: StringNullableFilter<"Produtos"> | string | null
    cBar?: StringFilter<"Produtos"> | string
    cNcm?: StringNullableFilter<"Produtos"> | string | null
    cus?: StringNullableFilter<"Produtos"> | string | null
    des?: StringFilter<"Produtos"> | string
    dtHr?: DateTimeFilter<"Produtos"> | Date | string
    eDe?: StringFilter<"Produtos"> | string
    eMa?: StringNullableFilter<"Produtos"> | string | null
    eMi?: StringNullableFilter<"Produtos"> | string | null
    eOl?: StringFilter<"Produtos"> | string
    ePi?: StringFilter<"Produtos"> | string
    eTo?: StringFilter<"Produtos"> | string
    gr?: StringFilter<"Produtos"> | string
    ibm?: StringFilter<"Produtos"> | string
    icm?: StringFilter<"Produtos"> | string
    id_?: StringFilter<"Produtos"> | string
    ipi?: StringNullableFilter<"Produtos"> | string | null
    sgr?: StringNullableFilter<"Produtos"> | string | null
    st?: StringNullableFilter<"Produtos"> | string | null
    uCx?: StringNullableFilter<"Produtos"> | string | null
    unM?: StringNullableFilter<"Produtos"> | string | null
    vda?: StringNullableFilter<"Produtos"> | string | null
  }

  export type ProdutosOrderByWithRelationInput = {
    id?: SortOrder
    St?: SortOrder
    cBar?: SortOrder
    cNcm?: SortOrder
    cus?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eDe?: SortOrder
    eMa?: SortOrder
    eMi?: SortOrder
    eOl?: SortOrder
    ePi?: SortOrder
    eTo?: SortOrder
    gr?: SortOrder
    ibm?: SortOrder
    icm?: SortOrder
    id_?: SortOrder
    ipi?: SortOrder
    sgr?: SortOrder
    st?: SortOrder
    uCx?: SortOrder
    unM?: SortOrder
    vda?: SortOrder
  }

  export type ProdutosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProdutosWhereInput | ProdutosWhereInput[]
    OR?: ProdutosWhereInput[]
    NOT?: ProdutosWhereInput | ProdutosWhereInput[]
    St?: StringNullableFilter<"Produtos"> | string | null
    cBar?: StringFilter<"Produtos"> | string
    cNcm?: StringNullableFilter<"Produtos"> | string | null
    cus?: StringNullableFilter<"Produtos"> | string | null
    des?: StringFilter<"Produtos"> | string
    dtHr?: DateTimeFilter<"Produtos"> | Date | string
    eDe?: StringFilter<"Produtos"> | string
    eMa?: StringNullableFilter<"Produtos"> | string | null
    eMi?: StringNullableFilter<"Produtos"> | string | null
    eOl?: StringFilter<"Produtos"> | string
    ePi?: StringFilter<"Produtos"> | string
    eTo?: StringFilter<"Produtos"> | string
    gr?: StringFilter<"Produtos"> | string
    ibm?: StringFilter<"Produtos"> | string
    icm?: StringFilter<"Produtos"> | string
    id_?: StringFilter<"Produtos"> | string
    ipi?: StringNullableFilter<"Produtos"> | string | null
    sgr?: StringNullableFilter<"Produtos"> | string | null
    st?: StringNullableFilter<"Produtos"> | string | null
    uCx?: StringNullableFilter<"Produtos"> | string | null
    unM?: StringNullableFilter<"Produtos"> | string | null
    vda?: StringNullableFilter<"Produtos"> | string | null
  }, "id">

  export type ProdutosOrderByWithAggregationInput = {
    id?: SortOrder
    St?: SortOrder
    cBar?: SortOrder
    cNcm?: SortOrder
    cus?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eDe?: SortOrder
    eMa?: SortOrder
    eMi?: SortOrder
    eOl?: SortOrder
    ePi?: SortOrder
    eTo?: SortOrder
    gr?: SortOrder
    ibm?: SortOrder
    icm?: SortOrder
    id_?: SortOrder
    ipi?: SortOrder
    sgr?: SortOrder
    st?: SortOrder
    uCx?: SortOrder
    unM?: SortOrder
    vda?: SortOrder
    _count?: ProdutosCountOrderByAggregateInput
    _max?: ProdutosMaxOrderByAggregateInput
    _min?: ProdutosMinOrderByAggregateInput
  }

  export type ProdutosScalarWhereWithAggregatesInput = {
    AND?: ProdutosScalarWhereWithAggregatesInput | ProdutosScalarWhereWithAggregatesInput[]
    OR?: ProdutosScalarWhereWithAggregatesInput[]
    NOT?: ProdutosScalarWhereWithAggregatesInput | ProdutosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produtos"> | string
    St?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    cBar?: StringWithAggregatesFilter<"Produtos"> | string
    cNcm?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    cus?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    des?: StringWithAggregatesFilter<"Produtos"> | string
    dtHr?: DateTimeWithAggregatesFilter<"Produtos"> | Date | string
    eDe?: StringWithAggregatesFilter<"Produtos"> | string
    eMa?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    eMi?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    eOl?: StringWithAggregatesFilter<"Produtos"> | string
    ePi?: StringWithAggregatesFilter<"Produtos"> | string
    eTo?: StringWithAggregatesFilter<"Produtos"> | string
    gr?: StringWithAggregatesFilter<"Produtos"> | string
    ibm?: StringWithAggregatesFilter<"Produtos"> | string
    icm?: StringWithAggregatesFilter<"Produtos"> | string
    id_?: StringWithAggregatesFilter<"Produtos"> | string
    ipi?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    sgr?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    st?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    uCx?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    unM?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
    vda?: StringNullableWithAggregatesFilter<"Produtos"> | string | null
  }

  export type Produtos_GruposWhereInput = {
    AND?: Produtos_GruposWhereInput | Produtos_GruposWhereInput[]
    OR?: Produtos_GruposWhereInput[]
    NOT?: Produtos_GruposWhereInput | Produtos_GruposWhereInput[]
    id?: StringFilter<"Produtos_Grupos"> | string
    des?: StringFilter<"Produtos_Grupos"> | string
    dtHr?: DateTimeFilter<"Produtos_Grupos"> | Date | string
    ibm?: StringFilter<"Produtos_Grupos"> | string
    id_?: StringFilter<"Produtos_Grupos"> | string
  }

  export type Produtos_GruposOrderByWithRelationInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type Produtos_GruposWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Produtos_GruposWhereInput | Produtos_GruposWhereInput[]
    OR?: Produtos_GruposWhereInput[]
    NOT?: Produtos_GruposWhereInput | Produtos_GruposWhereInput[]
    des?: StringFilter<"Produtos_Grupos"> | string
    dtHr?: DateTimeFilter<"Produtos_Grupos"> | Date | string
    ibm?: StringFilter<"Produtos_Grupos"> | string
    id_?: StringFilter<"Produtos_Grupos"> | string
  }, "id">

  export type Produtos_GruposOrderByWithAggregationInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    _count?: Produtos_GruposCountOrderByAggregateInput
    _max?: Produtos_GruposMaxOrderByAggregateInput
    _min?: Produtos_GruposMinOrderByAggregateInput
  }

  export type Produtos_GruposScalarWhereWithAggregatesInput = {
    AND?: Produtos_GruposScalarWhereWithAggregatesInput | Produtos_GruposScalarWhereWithAggregatesInput[]
    OR?: Produtos_GruposScalarWhereWithAggregatesInput[]
    NOT?: Produtos_GruposScalarWhereWithAggregatesInput | Produtos_GruposScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produtos_Grupos"> | string
    des?: StringWithAggregatesFilter<"Produtos_Grupos"> | string
    dtHr?: DateTimeWithAggregatesFilter<"Produtos_Grupos"> | Date | string
    ibm?: StringWithAggregatesFilter<"Produtos_Grupos"> | string
    id_?: StringWithAggregatesFilter<"Produtos_Grupos"> | string
  }

  export type TurnosWhereInput = {
    AND?: TurnosWhereInput | TurnosWhereInput[]
    OR?: TurnosWhereInput[]
    NOT?: TurnosWhereInput | TurnosWhereInput[]
    id?: StringFilter<"Turnos"> | string
    des?: StringFilter<"Turnos"> | string
    dtHr?: DateTimeFilter<"Turnos"> | Date | string
    ibm?: StringFilter<"Turnos"> | string
    id_?: StringFilter<"Turnos"> | string
  }

  export type TurnosOrderByWithRelationInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type TurnosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurnosWhereInput | TurnosWhereInput[]
    OR?: TurnosWhereInput[]
    NOT?: TurnosWhereInput | TurnosWhereInput[]
    des?: StringFilter<"Turnos"> | string
    dtHr?: DateTimeFilter<"Turnos"> | Date | string
    ibm?: StringFilter<"Turnos"> | string
    id_?: StringFilter<"Turnos"> | string
  }, "id">

  export type TurnosOrderByWithAggregationInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    _count?: TurnosCountOrderByAggregateInput
    _max?: TurnosMaxOrderByAggregateInput
    _min?: TurnosMinOrderByAggregateInput
  }

  export type TurnosScalarWhereWithAggregatesInput = {
    AND?: TurnosScalarWhereWithAggregatesInput | TurnosScalarWhereWithAggregatesInput[]
    OR?: TurnosScalarWhereWithAggregatesInput[]
    NOT?: TurnosScalarWhereWithAggregatesInput | TurnosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turnos"> | string
    des?: StringWithAggregatesFilter<"Turnos"> | string
    dtHr?: DateTimeWithAggregatesFilter<"Turnos"> | Date | string
    ibm?: StringWithAggregatesFilter<"Turnos"> | string
    id_?: StringWithAggregatesFilter<"Turnos"> | string
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    id?: StringFilter<"Usuarios"> | string
    cel?: StringNullableFilter<"Usuarios"> | string | null
    cod?: StringFilter<"Usuarios"> | string
    cpf?: StringFilter<"Usuarios"> | string
    dtHr?: DateTimeFilter<"Usuarios"> | Date | string
    ibm?: StringFilter<"Usuarios"> | string
    id_?: StringFilter<"Usuarios"> | string
    nom?: StringFilter<"Usuarios"> | string
    sex?: StringNullableFilter<"Usuarios"> | string | null
  }

  export type UsuariosOrderByWithRelationInput = {
    id?: SortOrder
    cel?: SortOrder
    cod?: SortOrder
    cpf?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    nom?: SortOrder
    sex?: SortOrder
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    cel?: StringNullableFilter<"Usuarios"> | string | null
    cod?: StringFilter<"Usuarios"> | string
    cpf?: StringFilter<"Usuarios"> | string
    dtHr?: DateTimeFilter<"Usuarios"> | Date | string
    ibm?: StringFilter<"Usuarios"> | string
    id_?: StringFilter<"Usuarios"> | string
    nom?: StringFilter<"Usuarios"> | string
    sex?: StringNullableFilter<"Usuarios"> | string | null
  }, "id">

  export type UsuariosOrderByWithAggregationInput = {
    id?: SortOrder
    cel?: SortOrder
    cod?: SortOrder
    cpf?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    nom?: SortOrder
    sex?: SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuarios"> | string
    cel?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
    cod?: StringWithAggregatesFilter<"Usuarios"> | string
    cpf?: StringWithAggregatesFilter<"Usuarios"> | string
    dtHr?: DateTimeWithAggregatesFilter<"Usuarios"> | Date | string
    ibm?: StringWithAggregatesFilter<"Usuarios"> | string
    id_?: StringWithAggregatesFilter<"Usuarios"> | string
    nom?: StringWithAggregatesFilter<"Usuarios"> | string
    sex?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
  }

  export type CombustiveisCreateInput = {
    id?: string
    anp?: string | null
    bicm?: string | null
    cBar: string
    cTo?: string | null
    capT: string
    cof?: string | null
    cus: string
    dLmc: string
    del: string
    des: string
    dtHr: Date | string
    eTo?: string | null
    ibm: string
    id_: string
    ncm?: string | null
    pis?: string | null
    sig: string
    st?: string | null
    stDtI: string
    tCom: string
    vda: string
  }

  export type CombustiveisUncheckedCreateInput = {
    id?: string
    anp?: string | null
    bicm?: string | null
    cBar: string
    cTo?: string | null
    capT: string
    cof?: string | null
    cus: string
    dLmc: string
    del: string
    des: string
    dtHr: Date | string
    eTo?: string | null
    ibm: string
    id_: string
    ncm?: string | null
    pis?: string | null
    sig: string
    st?: string | null
    stDtI: string
    tCom: string
    vda: string
  }

  export type CombustiveisUpdateInput = {
    anp?: NullableStringFieldUpdateOperationsInput | string | null
    bicm?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cTo?: NullableStringFieldUpdateOperationsInput | string | null
    capT?: StringFieldUpdateOperationsInput | string
    cof?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: StringFieldUpdateOperationsInput | string
    dLmc?: StringFieldUpdateOperationsInput | string
    del?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eTo?: NullableStringFieldUpdateOperationsInput | string | null
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    pis?: NullableStringFieldUpdateOperationsInput | string | null
    sig?: StringFieldUpdateOperationsInput | string
    st?: NullableStringFieldUpdateOperationsInput | string | null
    stDtI?: StringFieldUpdateOperationsInput | string
    tCom?: StringFieldUpdateOperationsInput | string
    vda?: StringFieldUpdateOperationsInput | string
  }

  export type CombustiveisUncheckedUpdateInput = {
    anp?: NullableStringFieldUpdateOperationsInput | string | null
    bicm?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cTo?: NullableStringFieldUpdateOperationsInput | string | null
    capT?: StringFieldUpdateOperationsInput | string
    cof?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: StringFieldUpdateOperationsInput | string
    dLmc?: StringFieldUpdateOperationsInput | string
    del?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eTo?: NullableStringFieldUpdateOperationsInput | string | null
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    pis?: NullableStringFieldUpdateOperationsInput | string | null
    sig?: StringFieldUpdateOperationsInput | string
    st?: NullableStringFieldUpdateOperationsInput | string | null
    stDtI?: StringFieldUpdateOperationsInput | string
    tCom?: StringFieldUpdateOperationsInput | string
    vda?: StringFieldUpdateOperationsInput | string
  }

  export type CombustiveisCreateManyInput = {
    id?: string
    anp?: string | null
    bicm?: string | null
    cBar: string
    cTo?: string | null
    capT: string
    cof?: string | null
    cus: string
    dLmc: string
    del: string
    des: string
    dtHr: Date | string
    eTo?: string | null
    ibm: string
    id_: string
    ncm?: string | null
    pis?: string | null
    sig: string
    st?: string | null
    stDtI: string
    tCom: string
    vda: string
  }

  export type CombustiveisUpdateManyMutationInput = {
    anp?: NullableStringFieldUpdateOperationsInput | string | null
    bicm?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cTo?: NullableStringFieldUpdateOperationsInput | string | null
    capT?: StringFieldUpdateOperationsInput | string
    cof?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: StringFieldUpdateOperationsInput | string
    dLmc?: StringFieldUpdateOperationsInput | string
    del?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eTo?: NullableStringFieldUpdateOperationsInput | string | null
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    pis?: NullableStringFieldUpdateOperationsInput | string | null
    sig?: StringFieldUpdateOperationsInput | string
    st?: NullableStringFieldUpdateOperationsInput | string | null
    stDtI?: StringFieldUpdateOperationsInput | string
    tCom?: StringFieldUpdateOperationsInput | string
    vda?: StringFieldUpdateOperationsInput | string
  }

  export type CombustiveisUncheckedUpdateManyInput = {
    anp?: NullableStringFieldUpdateOperationsInput | string | null
    bicm?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cTo?: NullableStringFieldUpdateOperationsInput | string | null
    capT?: StringFieldUpdateOperationsInput | string
    cof?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: StringFieldUpdateOperationsInput | string
    dLmc?: StringFieldUpdateOperationsInput | string
    del?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eTo?: NullableStringFieldUpdateOperationsInput | string | null
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ncm?: NullableStringFieldUpdateOperationsInput | string | null
    pis?: NullableStringFieldUpdateOperationsInput | string | null
    sig?: StringFieldUpdateOperationsInput | string
    st?: NullableStringFieldUpdateOperationsInput | string | null
    stDtI?: StringFieldUpdateOperationsInput | string
    tCom?: StringFieldUpdateOperationsInput | string
    vda?: StringFieldUpdateOperationsInput | string
  }

  export type FormasPgCreateInput = {
    id?: string
    ban: string
    cVd: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
    tip: string
  }

  export type FormasPgUncheckedCreateInput = {
    id?: string
    ban: string
    cVd: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
    tip: string
  }

  export type FormasPgUpdateInput = {
    ban?: StringFieldUpdateOperationsInput | string
    cVd?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
  }

  export type FormasPgUncheckedUpdateInput = {
    ban?: StringFieldUpdateOperationsInput | string
    cVd?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
  }

  export type FormasPgCreateManyInput = {
    id?: string
    ban: string
    cVd: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
    tip: string
  }

  export type FormasPgUpdateManyMutationInput = {
    ban?: StringFieldUpdateOperationsInput | string
    cVd?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
  }

  export type FormasPgUncheckedUpdateManyInput = {
    ban?: StringFieldUpdateOperationsInput | string
    cVd?: StringFieldUpdateOperationsInput | string
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    tip?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutosCreateInput = {
    id?: string
    St?: string | null
    cBar: string
    cNcm?: string | null
    cus?: string | null
    des: string
    dtHr: Date | string
    eDe: string
    eMa?: string | null
    eMi?: string | null
    eOl: string
    ePi: string
    eTo: string
    gr: string
    ibm: string
    icm: string
    id_: string
    ipi?: string | null
    sgr?: string | null
    st?: string | null
    uCx?: string | null
    unM?: string | null
    vda?: string | null
  }

  export type ProdutosUncheckedCreateInput = {
    id?: string
    St?: string | null
    cBar: string
    cNcm?: string | null
    cus?: string | null
    des: string
    dtHr: Date | string
    eDe: string
    eMa?: string | null
    eMi?: string | null
    eOl: string
    ePi: string
    eTo: string
    gr: string
    ibm: string
    icm: string
    id_: string
    ipi?: string | null
    sgr?: string | null
    st?: string | null
    uCx?: string | null
    unM?: string | null
    vda?: string | null
  }

  export type ProdutosUpdateInput = {
    St?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cNcm?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: NullableStringFieldUpdateOperationsInput | string | null
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eDe?: StringFieldUpdateOperationsInput | string
    eMa?: NullableStringFieldUpdateOperationsInput | string | null
    eMi?: NullableStringFieldUpdateOperationsInput | string | null
    eOl?: StringFieldUpdateOperationsInput | string
    ePi?: StringFieldUpdateOperationsInput | string
    eTo?: StringFieldUpdateOperationsInput | string
    gr?: StringFieldUpdateOperationsInput | string
    ibm?: StringFieldUpdateOperationsInput | string
    icm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ipi?: NullableStringFieldUpdateOperationsInput | string | null
    sgr?: NullableStringFieldUpdateOperationsInput | string | null
    st?: NullableStringFieldUpdateOperationsInput | string | null
    uCx?: NullableStringFieldUpdateOperationsInput | string | null
    unM?: NullableStringFieldUpdateOperationsInput | string | null
    vda?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutosUncheckedUpdateInput = {
    St?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cNcm?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: NullableStringFieldUpdateOperationsInput | string | null
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eDe?: StringFieldUpdateOperationsInput | string
    eMa?: NullableStringFieldUpdateOperationsInput | string | null
    eMi?: NullableStringFieldUpdateOperationsInput | string | null
    eOl?: StringFieldUpdateOperationsInput | string
    ePi?: StringFieldUpdateOperationsInput | string
    eTo?: StringFieldUpdateOperationsInput | string
    gr?: StringFieldUpdateOperationsInput | string
    ibm?: StringFieldUpdateOperationsInput | string
    icm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ipi?: NullableStringFieldUpdateOperationsInput | string | null
    sgr?: NullableStringFieldUpdateOperationsInput | string | null
    st?: NullableStringFieldUpdateOperationsInput | string | null
    uCx?: NullableStringFieldUpdateOperationsInput | string | null
    unM?: NullableStringFieldUpdateOperationsInput | string | null
    vda?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutosCreateManyInput = {
    id?: string
    St?: string | null
    cBar: string
    cNcm?: string | null
    cus?: string | null
    des: string
    dtHr: Date | string
    eDe: string
    eMa?: string | null
    eMi?: string | null
    eOl: string
    ePi: string
    eTo: string
    gr: string
    ibm: string
    icm: string
    id_: string
    ipi?: string | null
    sgr?: string | null
    st?: string | null
    uCx?: string | null
    unM?: string | null
    vda?: string | null
  }

  export type ProdutosUpdateManyMutationInput = {
    St?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cNcm?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: NullableStringFieldUpdateOperationsInput | string | null
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eDe?: StringFieldUpdateOperationsInput | string
    eMa?: NullableStringFieldUpdateOperationsInput | string | null
    eMi?: NullableStringFieldUpdateOperationsInput | string | null
    eOl?: StringFieldUpdateOperationsInput | string
    ePi?: StringFieldUpdateOperationsInput | string
    eTo?: StringFieldUpdateOperationsInput | string
    gr?: StringFieldUpdateOperationsInput | string
    ibm?: StringFieldUpdateOperationsInput | string
    icm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ipi?: NullableStringFieldUpdateOperationsInput | string | null
    sgr?: NullableStringFieldUpdateOperationsInput | string | null
    st?: NullableStringFieldUpdateOperationsInput | string | null
    uCx?: NullableStringFieldUpdateOperationsInput | string | null
    unM?: NullableStringFieldUpdateOperationsInput | string | null
    vda?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutosUncheckedUpdateManyInput = {
    St?: NullableStringFieldUpdateOperationsInput | string | null
    cBar?: StringFieldUpdateOperationsInput | string
    cNcm?: NullableStringFieldUpdateOperationsInput | string | null
    cus?: NullableStringFieldUpdateOperationsInput | string | null
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    eDe?: StringFieldUpdateOperationsInput | string
    eMa?: NullableStringFieldUpdateOperationsInput | string | null
    eMi?: NullableStringFieldUpdateOperationsInput | string | null
    eOl?: StringFieldUpdateOperationsInput | string
    ePi?: StringFieldUpdateOperationsInput | string
    eTo?: StringFieldUpdateOperationsInput | string
    gr?: StringFieldUpdateOperationsInput | string
    ibm?: StringFieldUpdateOperationsInput | string
    icm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    ipi?: NullableStringFieldUpdateOperationsInput | string | null
    sgr?: NullableStringFieldUpdateOperationsInput | string | null
    st?: NullableStringFieldUpdateOperationsInput | string | null
    uCx?: NullableStringFieldUpdateOperationsInput | string | null
    unM?: NullableStringFieldUpdateOperationsInput | string | null
    vda?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Produtos_GruposCreateInput = {
    id?: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
  }

  export type Produtos_GruposUncheckedCreateInput = {
    id?: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
  }

  export type Produtos_GruposUpdateInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type Produtos_GruposUncheckedUpdateInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type Produtos_GruposCreateManyInput = {
    id?: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
  }

  export type Produtos_GruposUpdateManyMutationInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type Produtos_GruposUncheckedUpdateManyInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type TurnosCreateInput = {
    id?: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
  }

  export type TurnosUncheckedCreateInput = {
    id?: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
  }

  export type TurnosUpdateInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type TurnosUncheckedUpdateInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type TurnosCreateManyInput = {
    id?: string
    des: string
    dtHr: Date | string
    ibm: string
    id_: string
  }

  export type TurnosUpdateManyMutationInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type TurnosUncheckedUpdateManyInput = {
    des?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
  }

  export type UsuariosCreateInput = {
    id?: string
    cel?: string | null
    cod: string
    cpf: string
    dtHr: Date | string
    ibm: string
    id_: string
    nom: string
    sex?: string | null
  }

  export type UsuariosUncheckedCreateInput = {
    id?: string
    cel?: string | null
    cod: string
    cpf: string
    dtHr: Date | string
    ibm: string
    id_: string
    nom: string
    sex?: string | null
  }

  export type UsuariosUpdateInput = {
    cel?: NullableStringFieldUpdateOperationsInput | string | null
    cod?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUncheckedUpdateInput = {
    cel?: NullableStringFieldUpdateOperationsInput | string | null
    cod?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosCreateManyInput = {
    id?: string
    cel?: string | null
    cod: string
    cpf: string
    dtHr: Date | string
    ibm: string
    id_: string
    nom: string
    sex?: string | null
  }

  export type UsuariosUpdateManyMutationInput = {
    cel?: NullableStringFieldUpdateOperationsInput | string | null
    cod?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUncheckedUpdateManyInput = {
    cel?: NullableStringFieldUpdateOperationsInput | string | null
    cod?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dtHr?: DateTimeFieldUpdateOperationsInput | Date | string
    ibm?: StringFieldUpdateOperationsInput | string
    id_?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sex?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CombustiveisCountOrderByAggregateInput = {
    id?: SortOrder
    anp?: SortOrder
    bicm?: SortOrder
    cBar?: SortOrder
    cTo?: SortOrder
    capT?: SortOrder
    cof?: SortOrder
    cus?: SortOrder
    dLmc?: SortOrder
    del?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eTo?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    ncm?: SortOrder
    pis?: SortOrder
    sig?: SortOrder
    st?: SortOrder
    stDtI?: SortOrder
    tCom?: SortOrder
    vda?: SortOrder
  }

  export type CombustiveisMaxOrderByAggregateInput = {
    id?: SortOrder
    anp?: SortOrder
    bicm?: SortOrder
    cBar?: SortOrder
    cTo?: SortOrder
    capT?: SortOrder
    cof?: SortOrder
    cus?: SortOrder
    dLmc?: SortOrder
    del?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eTo?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    ncm?: SortOrder
    pis?: SortOrder
    sig?: SortOrder
    st?: SortOrder
    stDtI?: SortOrder
    tCom?: SortOrder
    vda?: SortOrder
  }

  export type CombustiveisMinOrderByAggregateInput = {
    id?: SortOrder
    anp?: SortOrder
    bicm?: SortOrder
    cBar?: SortOrder
    cTo?: SortOrder
    capT?: SortOrder
    cof?: SortOrder
    cus?: SortOrder
    dLmc?: SortOrder
    del?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eTo?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    ncm?: SortOrder
    pis?: SortOrder
    sig?: SortOrder
    st?: SortOrder
    stDtI?: SortOrder
    tCom?: SortOrder
    vda?: SortOrder
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

  export type FormasPgCountOrderByAggregateInput = {
    id?: SortOrder
    ban?: SortOrder
    cVd?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    tip?: SortOrder
  }

  export type FormasPgMaxOrderByAggregateInput = {
    id?: SortOrder
    ban?: SortOrder
    cVd?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    tip?: SortOrder
  }

  export type FormasPgMinOrderByAggregateInput = {
    id?: SortOrder
    ban?: SortOrder
    cVd?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    tip?: SortOrder
  }

  export type ProdutosCountOrderByAggregateInput = {
    id?: SortOrder
    St?: SortOrder
    cBar?: SortOrder
    cNcm?: SortOrder
    cus?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eDe?: SortOrder
    eMa?: SortOrder
    eMi?: SortOrder
    eOl?: SortOrder
    ePi?: SortOrder
    eTo?: SortOrder
    gr?: SortOrder
    ibm?: SortOrder
    icm?: SortOrder
    id_?: SortOrder
    ipi?: SortOrder
    sgr?: SortOrder
    st?: SortOrder
    uCx?: SortOrder
    unM?: SortOrder
    vda?: SortOrder
  }

  export type ProdutosMaxOrderByAggregateInput = {
    id?: SortOrder
    St?: SortOrder
    cBar?: SortOrder
    cNcm?: SortOrder
    cus?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eDe?: SortOrder
    eMa?: SortOrder
    eMi?: SortOrder
    eOl?: SortOrder
    ePi?: SortOrder
    eTo?: SortOrder
    gr?: SortOrder
    ibm?: SortOrder
    icm?: SortOrder
    id_?: SortOrder
    ipi?: SortOrder
    sgr?: SortOrder
    st?: SortOrder
    uCx?: SortOrder
    unM?: SortOrder
    vda?: SortOrder
  }

  export type ProdutosMinOrderByAggregateInput = {
    id?: SortOrder
    St?: SortOrder
    cBar?: SortOrder
    cNcm?: SortOrder
    cus?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    eDe?: SortOrder
    eMa?: SortOrder
    eMi?: SortOrder
    eOl?: SortOrder
    ePi?: SortOrder
    eTo?: SortOrder
    gr?: SortOrder
    ibm?: SortOrder
    icm?: SortOrder
    id_?: SortOrder
    ipi?: SortOrder
    sgr?: SortOrder
    st?: SortOrder
    uCx?: SortOrder
    unM?: SortOrder
    vda?: SortOrder
  }

  export type Produtos_GruposCountOrderByAggregateInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type Produtos_GruposMaxOrderByAggregateInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type Produtos_GruposMinOrderByAggregateInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type TurnosCountOrderByAggregateInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type TurnosMaxOrderByAggregateInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type TurnosMinOrderByAggregateInput = {
    id?: SortOrder
    des?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
  }

  export type UsuariosCountOrderByAggregateInput = {
    id?: SortOrder
    cel?: SortOrder
    cod?: SortOrder
    cpf?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    nom?: SortOrder
    sex?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    cel?: SortOrder
    cod?: SortOrder
    cpf?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    nom?: SortOrder
    sex?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    id?: SortOrder
    cel?: SortOrder
    cod?: SortOrder
    cpf?: SortOrder
    dtHr?: SortOrder
    ibm?: SortOrder
    id_?: SortOrder
    nom?: SortOrder
    sex?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CombustiveisDefaultArgs instead
     */
    export type CombustiveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CombustiveisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormasPgDefaultArgs instead
     */
    export type FormasPgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormasPgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdutosDefaultArgs instead
     */
    export type ProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdutosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Produtos_GruposDefaultArgs instead
     */
    export type Produtos_GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Produtos_GruposDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnosDefaultArgs instead
     */
    export type TurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariosDefaultArgs instead
     */
    export type UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariosDefaultArgs<ExtArgs>

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