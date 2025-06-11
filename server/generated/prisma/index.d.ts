
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Progress
 * 
 */
export type Progress = $Result.DefaultSelection<Prisma.$ProgressPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model WorkoutExercises
 * 
 */
export type WorkoutExercises = $Result.DefaultSelection<Prisma.$WorkoutExercisesPayload>
/**
 * Model ExternalExercise
 * 
 */
export type ExternalExercise = $Result.DefaultSelection<Prisma.$ExternalExercisePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.progress`: Exposes CRUD operations for the **Progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Progresses
    * const progresses = await prisma.progress.findMany()
    * ```
    */
  get progress(): Prisma.ProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutExercises`: Exposes CRUD operations for the **WorkoutExercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercises
    * const workoutExercises = await prisma.workoutExercises.findMany()
    * ```
    */
  get workoutExercises(): Prisma.WorkoutExercisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.externalExercise`: Exposes CRUD operations for the **ExternalExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalExercises
    * const externalExercises = await prisma.externalExercise.findMany()
    * ```
    */
  get externalExercise(): Prisma.ExternalExerciseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Goal: 'Goal',
    Progress: 'Progress',
    Workout: 'Workout',
    WorkoutExercises: 'WorkoutExercises',
    ExternalExercise: 'ExternalExercise'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "goal" | "progress" | "workout" | "workoutExercises" | "externalExercise"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Progress: {
        payload: Prisma.$ProgressPayload<ExtArgs>
        fields: Prisma.ProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findFirst: {
            args: Prisma.ProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          findMany: {
            args: Prisma.ProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          create: {
            args: Prisma.ProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          createMany: {
            args: Prisma.ProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          delete: {
            args: Prisma.ProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          update: {
            args: Prisma.ProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          deleteMany: {
            args: Prisma.ProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>[]
          }
          upsert: {
            args: Prisma.ProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgressPayload>
          }
          aggregate: {
            args: Prisma.ProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgress>
          }
          groupBy: {
            args: Prisma.ProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressCountArgs<ExtArgs>
            result: $Utils.Optional<ProgressCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercises: {
        payload: Prisma.$WorkoutExercisesPayload<ExtArgs>
        fields: Prisma.WorkoutExercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          findFirst: {
            args: Prisma.WorkoutExercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          findMany: {
            args: Prisma.WorkoutExercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>[]
          }
          create: {
            args: Prisma.WorkoutExercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          createMany: {
            args: Prisma.WorkoutExercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutExercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>[]
          }
          delete: {
            args: Prisma.WorkoutExercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          update: {
            args: Prisma.WorkoutExercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutExercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutExercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisesPayload>
          }
          aggregate: {
            args: Prisma.WorkoutExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercises>
          }
          groupBy: {
            args: Prisma.WorkoutExercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExercisesCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExercisesCountAggregateOutputType> | number
          }
        }
      }
      ExternalExercise: {
        payload: Prisma.$ExternalExercisePayload<ExtArgs>
        fields: Prisma.ExternalExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>
          }
          findFirst: {
            args: Prisma.ExternalExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>
          }
          findMany: {
            args: Prisma.ExternalExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>[]
          }
          create: {
            args: Prisma.ExternalExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>
          }
          createMany: {
            args: Prisma.ExternalExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternalExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>[]
          }
          delete: {
            args: Prisma.ExternalExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>
          }
          update: {
            args: Prisma.ExternalExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExternalExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExternalExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExternalExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalExercisePayload>
          }
          aggregate: {
            args: Prisma.ExternalExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalExercise>
          }
          groupBy: {
            args: Prisma.ExternalExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalExerciseCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    goal?: GoalOmit
    progress?: ProgressOmit
    workout?: WorkoutOmit
    workoutExercises?: WorkoutExercisesOmit
    externalExercise?: ExternalExerciseOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Goal: number
    Workout: number
    Progress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Goal?: boolean | UserCountOutputTypeCountGoalArgs
    Workout?: boolean | UserCountOutputTypeCountWorkoutArgs
    Progress?: boolean | UserCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    WorkoutExercises: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercises?: boolean | WorkoutCountOutputTypeCountWorkoutExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisesWhereInput
  }


  /**
   * Count Type ExternalExerciseCountOutputType
   */

  export type ExternalExerciseCountOutputType = {
    WorkoutExercises: number
  }

  export type ExternalExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercises?: boolean | ExternalExerciseCountOutputTypeCountWorkoutExercisesArgs
  }

  // Custom InputTypes
  /**
   * ExternalExerciseCountOutputType without action
   */
  export type ExternalExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExerciseCountOutputType
     */
    select?: ExternalExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExternalExerciseCountOutputType without action
   */
  export type ExternalExerciseCountOutputTypeCountWorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    sizeCm: number | null
    initialWeightKg: number | null
    weightKg: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    sizeCm: number | null
    initialWeightKg: number | null
    weightKg: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    username: string | null
    email: string | null
    birthdate: Date | null
    age: number | null
    sizeCm: number | null
    initialWeightKg: number | null
    weightKg: number | null
    gender: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    username: string | null
    email: string | null
    birthdate: Date | null
    age: number | null
    sizeCm: number | null
    initialWeightKg: number | null
    weightKg: number | null
    gender: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    username: number
    email: number
    birthdate: number
    age: number
    sizeCm: number
    initialWeightKg: number
    weightKg: number
    gender: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    sizeCm?: true
    initialWeightKg?: true
    weightKg?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    sizeCm?: true
    initialWeightKg?: true
    weightKg?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    username?: true
    email?: true
    birthdate?: true
    age?: true
    sizeCm?: true
    initialWeightKg?: true
    weightKg?: true
    gender?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    username?: true
    email?: true
    birthdate?: true
    age?: true
    sizeCm?: true
    initialWeightKg?: true
    weightKg?: true
    gender?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    username?: true
    email?: true
    birthdate?: true
    age?: true
    sizeCm?: true
    initialWeightKg?: true
    weightKg?: true
    gender?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    surname: string | null
    username: string | null
    email: string | null
    birthdate: Date | null
    age: number | null
    sizeCm: number | null
    initialWeightKg: number | null
    weightKg: number | null
    gender: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    role: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    age?: boolean
    sizeCm?: boolean
    initialWeightKg?: boolean
    weightKg?: boolean
    gender?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    Goal?: boolean | User$GoalArgs<ExtArgs>
    Workout?: boolean | User$WorkoutArgs<ExtArgs>
    Progress?: boolean | User$ProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    age?: boolean
    sizeCm?: boolean
    initialWeightKg?: boolean
    weightKg?: boolean
    gender?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    age?: boolean
    sizeCm?: boolean
    initialWeightKg?: boolean
    weightKg?: boolean
    gender?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    username?: boolean
    email?: boolean
    birthdate?: boolean
    age?: boolean
    sizeCm?: boolean
    initialWeightKg?: boolean
    weightKg?: boolean
    gender?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "username" | "email" | "birthdate" | "age" | "sizeCm" | "initialWeightKg" | "weightKg" | "gender" | "password" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Goal?: boolean | User$GoalArgs<ExtArgs>
    Workout?: boolean | User$WorkoutArgs<ExtArgs>
    Progress?: boolean | User$ProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Goal: Prisma.$GoalPayload<ExtArgs>[]
      Workout: Prisma.$WorkoutPayload<ExtArgs>[]
      Progress: Prisma.$ProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      surname: string | null
      username: string | null
      email: string | null
      birthdate: Date | null
      age: number | null
      sizeCm: number | null
      initialWeightKg: number | null
      weightKg: number | null
      gender: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
      role: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Goal<T extends User$GoalArgs<ExtArgs> = {}>(args?: Subset<T, User$GoalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Workout<T extends User$WorkoutArgs<ExtArgs> = {}>(args?: Subset<T, User$WorkoutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Progress<T extends User$ProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$ProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly age: FieldRef<"User", 'Int'>
    readonly sizeCm: FieldRef<"User", 'Int'>
    readonly initialWeightKg: FieldRef<"User", 'Float'>
    readonly weightKg: FieldRef<"User", 'Float'>
    readonly gender: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Goal
   */
  export type User$GoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.Workout
   */
  export type User$WorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * User.Progress
   */
  export type User$ProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    cursor?: ProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    id: number | null
    objectifPoids: number | null
  }

  export type GoalSumAggregateOutputType = {
    id: number | null
    objectifPoids: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    objectifPoids: number | null
    objectifDate: Date | null
    createdAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    type: string | null
    objectifPoids: number | null
    objectifDate: Date | null
    createdAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    objectifPoids: number
    objectifDate: number
    createdAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    id?: true
    objectifPoids?: true
  }

  export type GoalSumAggregateInputType = {
    id?: true
    objectifPoids?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    objectifPoids?: true
    objectifDate?: true
    createdAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    objectifPoids?: true
    objectifDate?: true
    createdAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    objectifPoids?: true
    objectifDate?: true
    createdAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: number
    userId: string
    type: string
    objectifPoids: number | null
    objectifDate: Date
    createdAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    objectifPoids?: boolean
    objectifDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    objectifPoids?: boolean
    objectifDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    objectifPoids?: boolean
    objectifDate?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    objectifPoids?: boolean
    objectifDate?: boolean
    createdAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "objectifPoids" | "objectifDate" | "createdAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      type: string
      objectifPoids: number | null
      objectifDate: Date
      createdAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'Int'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly type: FieldRef<"Goal", 'String'>
    readonly objectifPoids: FieldRef<"Goal", 'Float'>
    readonly objectifDate: FieldRef<"Goal", 'DateTime'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Progress
   */

  export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  export type ProgressAvgAggregateOutputType = {
    id: number | null
    poidsKg: number | null
    calories: number | null
  }

  export type ProgressSumAggregateOutputType = {
    id: number | null
    poidsKg: number | null
    calories: number | null
  }

  export type ProgressMinAggregateOutputType = {
    id: number | null
    userId: string | null
    date: Date | null
    poidsKg: number | null
    calories: number | null
  }

  export type ProgressMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    date: Date | null
    poidsKg: number | null
    calories: number | null
  }

  export type ProgressCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    poidsKg: number
    calories: number
    _all: number
  }


  export type ProgressAvgAggregateInputType = {
    id?: true
    poidsKg?: true
    calories?: true
  }

  export type ProgressSumAggregateInputType = {
    id?: true
    poidsKg?: true
    calories?: true
  }

  export type ProgressMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    poidsKg?: true
    calories?: true
  }

  export type ProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    poidsKg?: true
    calories?: true
  }

  export type ProgressCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    poidsKg?: true
    calories?: true
    _all?: true
  }

  export type ProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progress to aggregate.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Progresses
    **/
    _count?: true | ProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressMaxAggregateInputType
  }

  export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgress[P]>
      : GetScalarType<T[P], AggregateProgress[P]>
  }




  export type ProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressWhereInput
    orderBy?: ProgressOrderByWithAggregationInput | ProgressOrderByWithAggregationInput[]
    by: ProgressScalarFieldEnum[] | ProgressScalarFieldEnum
    having?: ProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressCountAggregateInputType | true
    _avg?: ProgressAvgAggregateInputType
    _sum?: ProgressSumAggregateInputType
    _min?: ProgressMinAggregateInputType
    _max?: ProgressMaxAggregateInputType
  }

  export type ProgressGroupByOutputType = {
    id: number
    userId: string
    date: Date
    poidsKg: number
    calories: number | null
    _count: ProgressCountAggregateOutputType | null
    _avg: ProgressAvgAggregateOutputType | null
    _sum: ProgressSumAggregateOutputType | null
    _min: ProgressMinAggregateOutputType | null
    _max: ProgressMaxAggregateOutputType | null
  }

  type GetProgressGroupByPayload<T extends ProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressGroupByOutputType[P]>
        }
      >
    >


  export type ProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    poidsKg?: boolean
    calories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    poidsKg?: boolean
    calories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    poidsKg?: boolean
    calories?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progress"]>

  export type ProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    poidsKg?: boolean
    calories?: boolean
  }

  export type ProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "poidsKg" | "calories", ExtArgs["result"]["progress"]>
  export type ProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Progress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      date: Date
      poidsKg: number
      calories: number | null
    }, ExtArgs["result"]["progress"]>
    composites: {}
  }

  type ProgressGetPayload<S extends boolean | null | undefined | ProgressDefaultArgs> = $Result.GetResult<Prisma.$ProgressPayload, S>

  type ProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgressCountAggregateInputType | true
    }

  export interface ProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Progress'], meta: { name: 'Progress' } }
    /**
     * Find zero or one Progress that matches the filter.
     * @param {ProgressFindUniqueArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressFindUniqueArgs>(args: SelectSubset<T, ProgressFindUniqueArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressFindUniqueOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressFindFirstArgs>(args?: SelectSubset<T, ProgressFindFirstArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindFirstOrThrowArgs} args - Arguments to find a Progress
     * @example
     * // Get one Progress
     * const progress = await prisma.progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Progresses
     * const progresses = await prisma.progress.findMany()
     * 
     * // Get first 10 Progresses
     * const progresses = await prisma.progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressWithIdOnly = await prisma.progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgressFindManyArgs>(args?: SelectSubset<T, ProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Progress.
     * @param {ProgressCreateArgs} args - Arguments to create a Progress.
     * @example
     * // Create one Progress
     * const Progress = await prisma.progress.create({
     *   data: {
     *     // ... data to create a Progress
     *   }
     * })
     * 
     */
    create<T extends ProgressCreateArgs>(args: SelectSubset<T, ProgressCreateArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Progresses.
     * @param {ProgressCreateManyArgs} args - Arguments to create many Progresses.
     * @example
     * // Create many Progresses
     * const progress = await prisma.progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgressCreateManyArgs>(args?: SelectSubset<T, ProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Progresses and returns the data saved in the database.
     * @param {ProgressCreateManyAndReturnArgs} args - Arguments to create many Progresses.
     * @example
     * // Create many Progresses
     * const progress = await prisma.progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Progresses and only return the `id`
     * const progressWithIdOnly = await prisma.progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Progress.
     * @param {ProgressDeleteArgs} args - Arguments to delete one Progress.
     * @example
     * // Delete one Progress
     * const Progress = await prisma.progress.delete({
     *   where: {
     *     // ... filter to delete one Progress
     *   }
     * })
     * 
     */
    delete<T extends ProgressDeleteArgs>(args: SelectSubset<T, ProgressDeleteArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Progress.
     * @param {ProgressUpdateArgs} args - Arguments to update one Progress.
     * @example
     * // Update one Progress
     * const progress = await prisma.progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgressUpdateArgs>(args: SelectSubset<T, ProgressUpdateArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Progresses.
     * @param {ProgressDeleteManyArgs} args - Arguments to filter Progresses to delete.
     * @example
     * // Delete a few Progresses
     * const { count } = await prisma.progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgressDeleteManyArgs>(args?: SelectSubset<T, ProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgressUpdateManyArgs>(args: SelectSubset<T, ProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Progresses and returns the data updated in the database.
     * @param {ProgressUpdateManyAndReturnArgs} args - Arguments to update many Progresses.
     * @example
     * // Update many Progresses
     * const progress = await prisma.progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Progresses and only return the `id`
     * const progressWithIdOnly = await prisma.progress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Progress.
     * @param {ProgressUpsertArgs} args - Arguments to update or create a Progress.
     * @example
     * // Update or create a Progress
     * const progress = await prisma.progress.upsert({
     *   create: {
     *     // ... data to create a Progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Progress we want to update
     *   }
     * })
     */
    upsert<T extends ProgressUpsertArgs>(args: SelectSubset<T, ProgressUpsertArgs<ExtArgs>>): Prisma__ProgressClient<$Result.GetResult<Prisma.$ProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressCountArgs} args - Arguments to filter Progresses to count.
     * @example
     * // Count the number of Progresses
     * const count = await prisma.progress.count({
     *   where: {
     *     // ... the filter for the Progresses we want to count
     *   }
     * })
    **/
    count<T extends ProgressCountArgs>(
      args?: Subset<T, ProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressAggregateArgs>(args: Subset<T, ProgressAggregateArgs>): Prisma.PrismaPromise<GetProgressAggregateType<T>>

    /**
     * Group by Progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressGroupByArgs} args - Group by arguments.
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
      T extends ProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressGroupByArgs['orderBy'] }
        : { orderBy?: ProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Progress model
   */
  readonly fields: ProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Progress model
   */
  interface ProgressFieldRefs {
    readonly id: FieldRef<"Progress", 'Int'>
    readonly userId: FieldRef<"Progress", 'String'>
    readonly date: FieldRef<"Progress", 'DateTime'>
    readonly poidsKg: FieldRef<"Progress", 'Float'>
    readonly calories: FieldRef<"Progress", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Progress findUnique
   */
  export type ProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress findUniqueOrThrow
   */
  export type ProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress findFirst
   */
  export type ProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress findFirstOrThrow
   */
  export type ProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progress to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Progresses.
     */
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress findMany
   */
  export type ProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter, which Progresses to fetch.
     */
    where?: ProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Progresses to fetch.
     */
    orderBy?: ProgressOrderByWithRelationInput | ProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Progresses.
     */
    cursor?: ProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Progresses.
     */
    skip?: number
    distinct?: ProgressScalarFieldEnum | ProgressScalarFieldEnum[]
  }

  /**
   * Progress create
   */
  export type ProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a Progress.
     */
    data: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
  }

  /**
   * Progress createMany
   */
  export type ProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Progresses.
     */
    data: ProgressCreateManyInput | ProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Progress createManyAndReturn
   */
  export type ProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * The data used to create many Progresses.
     */
    data: ProgressCreateManyInput | ProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progress update
   */
  export type ProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a Progress.
     */
    data: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
    /**
     * Choose, which Progress to update.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress updateMany
   */
  export type ProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to update.
     */
    limit?: number
  }

  /**
   * Progress updateManyAndReturn
   */
  export type ProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * The data used to update Progresses.
     */
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyInput>
    /**
     * Filter which Progresses to update
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Progress upsert
   */
  export type ProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the Progress to update in case it exists.
     */
    where: ProgressWhereUniqueInput
    /**
     * In case the Progress found by the `where` argument doesn't exist, create a new Progress with this data.
     */
    create: XOR<ProgressCreateInput, ProgressUncheckedCreateInput>
    /**
     * In case the Progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateInput, ProgressUncheckedUpdateInput>
  }

  /**
   * Progress delete
   */
  export type ProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
    /**
     * Filter which Progress to delete.
     */
    where: ProgressWhereUniqueInput
  }

  /**
   * Progress deleteMany
   */
  export type ProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Progresses to delete
     */
    where?: ProgressWhereInput
    /**
     * Limit how many Progresses to delete.
     */
    limit?: number
  }

  /**
   * Progress without action
   */
  export type ProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Progress
     */
    select?: ProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Progress
     */
    omit?: ProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgressInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    id: number | null
    duree: number | null
    calories: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    id: number | null
    duree: number | null
    calories: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: number | null
    userId: string | null
    weekDay: string | null
    duree: number | null
    calories: number | null
    createdAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    weekDay: string | null
    duree: number | null
    calories: number | null
    createdAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    userId: number
    weekDay: number
    duree: number
    calories: number
    createdAt: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    id?: true
    duree?: true
    calories?: true
  }

  export type WorkoutSumAggregateInputType = {
    id?: true
    duree?: true
    calories?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    userId?: true
    weekDay?: true
    duree?: true
    calories?: true
    createdAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    userId?: true
    weekDay?: true
    duree?: true
    calories?: true
    createdAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    userId?: true
    weekDay?: true
    duree?: true
    calories?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: number
    userId: string
    weekDay: string
    duree: number
    calories: number
    createdAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekDay?: boolean
    duree?: boolean
    calories?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    WorkoutExercises?: boolean | Workout$WorkoutExercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekDay?: boolean
    duree?: boolean
    calories?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekDay?: boolean
    duree?: boolean
    calories?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    userId?: boolean
    weekDay?: boolean
    duree?: boolean
    calories?: boolean
    createdAt?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "weekDay" | "duree" | "calories" | "createdAt", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    WorkoutExercises?: boolean | Workout$WorkoutExercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      WorkoutExercises: Prisma.$WorkoutExercisesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      weekDay: string
      duree: number
      calories: number
      createdAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    WorkoutExercises<T extends Workout$WorkoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$WorkoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'Int'>
    readonly userId: FieldRef<"Workout", 'String'>
    readonly weekDay: FieldRef<"Workout", 'String'>
    readonly duree: FieldRef<"Workout", 'Int'>
    readonly calories: FieldRef<"Workout", 'Float'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.WorkoutExercises
   */
  export type Workout$WorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    where?: WorkoutExercisesWhereInput
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    cursor?: WorkoutExercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercises
   */

  export type AggregateWorkoutExercises = {
    _count: WorkoutExercisesCountAggregateOutputType | null
    _avg: WorkoutExercisesAvgAggregateOutputType | null
    _sum: WorkoutExercisesSumAggregateOutputType | null
    _min: WorkoutExercisesMinAggregateOutputType | null
    _max: WorkoutExercisesMaxAggregateOutputType | null
  }

  export type WorkoutExercisesAvgAggregateOutputType = {
    id: number | null
    workoutId: number | null
    externalExerciseId: number | null
    series: number | null
    repetitions: number | null
    poidsKg: number | null
  }

  export type WorkoutExercisesSumAggregateOutputType = {
    id: number | null
    workoutId: number | null
    externalExerciseId: number | null
    series: number | null
    repetitions: number | null
    poidsKg: number | null
  }

  export type WorkoutExercisesMinAggregateOutputType = {
    id: number | null
    workoutId: number | null
    externalExerciseId: number | null
    series: number | null
    repetitions: number | null
    poidsKg: number | null
    createdAt: Date | null
  }

  export type WorkoutExercisesMaxAggregateOutputType = {
    id: number | null
    workoutId: number | null
    externalExerciseId: number | null
    series: number | null
    repetitions: number | null
    poidsKg: number | null
    createdAt: Date | null
  }

  export type WorkoutExercisesCountAggregateOutputType = {
    id: number
    workoutId: number
    externalExerciseId: number
    series: number
    repetitions: number
    poidsKg: number
    createdAt: number
    _all: number
  }


  export type WorkoutExercisesAvgAggregateInputType = {
    id?: true
    workoutId?: true
    externalExerciseId?: true
    series?: true
    repetitions?: true
    poidsKg?: true
  }

  export type WorkoutExercisesSumAggregateInputType = {
    id?: true
    workoutId?: true
    externalExerciseId?: true
    series?: true
    repetitions?: true
    poidsKg?: true
  }

  export type WorkoutExercisesMinAggregateInputType = {
    id?: true
    workoutId?: true
    externalExerciseId?: true
    series?: true
    repetitions?: true
    poidsKg?: true
    createdAt?: true
  }

  export type WorkoutExercisesMaxAggregateInputType = {
    id?: true
    workoutId?: true
    externalExerciseId?: true
    series?: true
    repetitions?: true
    poidsKg?: true
    createdAt?: true
  }

  export type WorkoutExercisesCountAggregateInputType = {
    id?: true
    workoutId?: true
    externalExerciseId?: true
    series?: true
    repetitions?: true
    poidsKg?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to aggregate.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercises
    **/
    _count?: true | WorkoutExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExercisesMaxAggregateInputType
  }

  export type GetWorkoutExercisesAggregateType<T extends WorkoutExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercises[P]>
      : GetScalarType<T[P], AggregateWorkoutExercises[P]>
  }




  export type WorkoutExercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisesWhereInput
    orderBy?: WorkoutExercisesOrderByWithAggregationInput | WorkoutExercisesOrderByWithAggregationInput[]
    by: WorkoutExercisesScalarFieldEnum[] | WorkoutExercisesScalarFieldEnum
    having?: WorkoutExercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExercisesCountAggregateInputType | true
    _avg?: WorkoutExercisesAvgAggregateInputType
    _sum?: WorkoutExercisesSumAggregateInputType
    _min?: WorkoutExercisesMinAggregateInputType
    _max?: WorkoutExercisesMaxAggregateInputType
  }

  export type WorkoutExercisesGroupByOutputType = {
    id: number
    workoutId: number
    externalExerciseId: number
    series: number
    repetitions: number
    poidsKg: number | null
    createdAt: Date
    _count: WorkoutExercisesCountAggregateOutputType | null
    _avg: WorkoutExercisesAvgAggregateOutputType | null
    _sum: WorkoutExercisesSumAggregateOutputType | null
    _min: WorkoutExercisesMinAggregateOutputType | null
    _max: WorkoutExercisesMaxAggregateOutputType | null
  }

  type GetWorkoutExercisesGroupByPayload<T extends WorkoutExercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExercisesGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    externalExerciseId?: boolean
    series?: boolean
    repetitions?: boolean
    poidsKg?: boolean
    createdAt?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    externalExercise?: boolean | ExternalExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercises"]>

  export type WorkoutExercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    externalExerciseId?: boolean
    series?: boolean
    repetitions?: boolean
    poidsKg?: boolean
    createdAt?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    externalExercise?: boolean | ExternalExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercises"]>

  export type WorkoutExercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    externalExerciseId?: boolean
    series?: boolean
    repetitions?: boolean
    poidsKg?: boolean
    createdAt?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    externalExercise?: boolean | ExternalExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercises"]>

  export type WorkoutExercisesSelectScalar = {
    id?: boolean
    workoutId?: boolean
    externalExerciseId?: boolean
    series?: boolean
    repetitions?: boolean
    poidsKg?: boolean
    createdAt?: boolean
  }

  export type WorkoutExercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutId" | "externalExerciseId" | "series" | "repetitions" | "poidsKg" | "createdAt", ExtArgs["result"]["workoutExercises"]>
  export type WorkoutExercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    externalExercise?: boolean | ExternalExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    externalExercise?: boolean | ExternalExerciseDefaultArgs<ExtArgs>
  }
  export type WorkoutExercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    externalExercise?: boolean | ExternalExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercises"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      externalExercise: Prisma.$ExternalExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workoutId: number
      externalExerciseId: number
      series: number
      repetitions: number
      poidsKg: number | null
      createdAt: Date
    }, ExtArgs["result"]["workoutExercises"]>
    composites: {}
  }

  type WorkoutExercisesGetPayload<S extends boolean | null | undefined | WorkoutExercisesDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisesPayload, S>

  type WorkoutExercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExercisesCountAggregateInputType | true
    }

  export interface WorkoutExercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercises'], meta: { name: 'WorkoutExercises' } }
    /**
     * Find zero or one WorkoutExercises that matches the filter.
     * @param {WorkoutExercisesFindUniqueArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExercisesFindUniqueArgs>(args: SelectSubset<T, WorkoutExercisesFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutExercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExercisesFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesFindFirstArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExercisesFindFirstArgs>(args?: SelectSubset<T, WorkoutExercisesFindFirstArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercises
     * @example
     * // Get one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findMany()
     * 
     * // Get first 10 WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExercisesWithIdOnly = await prisma.workoutExercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExercisesFindManyArgs>(args?: SelectSubset<T, WorkoutExercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutExercises.
     * @param {WorkoutExercisesCreateArgs} args - Arguments to create a WorkoutExercises.
     * @example
     * // Create one WorkoutExercises
     * const WorkoutExercises = await prisma.workoutExercises.create({
     *   data: {
     *     // ... data to create a WorkoutExercises
     *   }
     * })
     * 
     */
    create<T extends WorkoutExercisesCreateArgs>(args: SelectSubset<T, WorkoutExercisesCreateArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutExercises.
     * @param {WorkoutExercisesCreateManyArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExercisesCreateManyArgs>(args?: SelectSubset<T, WorkoutExercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutExercises and returns the data saved in the database.
     * @param {WorkoutExercisesCreateManyAndReturnArgs} args - Arguments to create many WorkoutExercises.
     * @example
     * // Create many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutExercises and only return the `id`
     * const workoutExercisesWithIdOnly = await prisma.workoutExercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutExercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutExercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutExercises.
     * @param {WorkoutExercisesDeleteArgs} args - Arguments to delete one WorkoutExercises.
     * @example
     * // Delete one WorkoutExercises
     * const WorkoutExercises = await prisma.workoutExercises.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercises
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExercisesDeleteArgs>(args: SelectSubset<T, WorkoutExercisesDeleteArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutExercises.
     * @param {WorkoutExercisesUpdateArgs} args - Arguments to update one WorkoutExercises.
     * @example
     * // Update one WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExercisesUpdateArgs>(args: SelectSubset<T, WorkoutExercisesUpdateArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutExercises.
     * @param {WorkoutExercisesDeleteManyArgs} args - Arguments to filter WorkoutExercises to delete.
     * @example
     * // Delete a few WorkoutExercises
     * const { count } = await prisma.workoutExercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExercisesDeleteManyArgs>(args?: SelectSubset<T, WorkoutExercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExercisesUpdateManyArgs>(args: SelectSubset<T, WorkoutExercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercises and returns the data updated in the database.
     * @param {WorkoutExercisesUpdateManyAndReturnArgs} args - Arguments to update many WorkoutExercises.
     * @example
     * // Update many WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutExercises and only return the `id`
     * const workoutExercisesWithIdOnly = await prisma.workoutExercises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutExercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutExercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutExercises.
     * @param {WorkoutExercisesUpsertArgs} args - Arguments to update or create a WorkoutExercises.
     * @example
     * // Update or create a WorkoutExercises
     * const workoutExercises = await prisma.workoutExercises.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExercisesUpsertArgs>(args: SelectSubset<T, WorkoutExercisesUpsertArgs<ExtArgs>>): Prisma__WorkoutExercisesClient<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesCountArgs} args - Arguments to filter WorkoutExercises to count.
     * @example
     * // Count the number of WorkoutExercises
     * const count = await prisma.workoutExercises.count({
     *   where: {
     *     // ... the filter for the WorkoutExercises we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExercisesCountArgs>(
      args?: Subset<T, WorkoutExercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutExercisesAggregateArgs>(args: Subset<T, WorkoutExercisesAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExercisesAggregateType<T>>

    /**
     * Group by WorkoutExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisesGroupByArgs} args - Group by arguments.
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
      T extends WorkoutExercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExercisesGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExercisesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutExercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercises model
   */
  readonly fields: WorkoutExercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    externalExercise<T extends ExternalExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExternalExerciseDefaultArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutExercises model
   */
  interface WorkoutExercisesFieldRefs {
    readonly id: FieldRef<"WorkoutExercises", 'Int'>
    readonly workoutId: FieldRef<"WorkoutExercises", 'Int'>
    readonly externalExerciseId: FieldRef<"WorkoutExercises", 'Int'>
    readonly series: FieldRef<"WorkoutExercises", 'Int'>
    readonly repetitions: FieldRef<"WorkoutExercises", 'Int'>
    readonly poidsKg: FieldRef<"WorkoutExercises", 'Float'>
    readonly createdAt: FieldRef<"WorkoutExercises", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercises findUnique
   */
  export type WorkoutExercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises findUniqueOrThrow
   */
  export type WorkoutExercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises findFirst
   */
  export type WorkoutExercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * WorkoutExercises findFirstOrThrow
   */
  export type WorkoutExercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercises.
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercises.
     */
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * WorkoutExercises findMany
   */
  export type WorkoutExercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercises to fetch.
     */
    where?: WorkoutExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercises to fetch.
     */
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercises.
     */
    cursor?: WorkoutExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercises.
     */
    skip?: number
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * WorkoutExercises create
   */
  export type WorkoutExercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercises.
     */
    data: XOR<WorkoutExercisesCreateInput, WorkoutExercisesUncheckedCreateInput>
  }

  /**
   * WorkoutExercises createMany
   */
  export type WorkoutExercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExercisesCreateManyInput | WorkoutExercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercises createManyAndReturn
   */
  export type WorkoutExercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutExercises.
     */
    data: WorkoutExercisesCreateManyInput | WorkoutExercisesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercises update
   */
  export type WorkoutExercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercises.
     */
    data: XOR<WorkoutExercisesUpdateInput, WorkoutExercisesUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercises to update.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises updateMany
   */
  export type WorkoutExercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExercisesWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercises updateManyAndReturn
   */
  export type WorkoutExercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutExercises.
     */
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercises to update
     */
    where?: WorkoutExercisesWhereInput
    /**
     * Limit how many WorkoutExercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutExercises upsert
   */
  export type WorkoutExercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercises to update in case it exists.
     */
    where: WorkoutExercisesWhereUniqueInput
    /**
     * In case the WorkoutExercises found by the `where` argument doesn't exist, create a new WorkoutExercises with this data.
     */
    create: XOR<WorkoutExercisesCreateInput, WorkoutExercisesUncheckedCreateInput>
    /**
     * In case the WorkoutExercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExercisesUpdateInput, WorkoutExercisesUncheckedUpdateInput>
  }

  /**
   * WorkoutExercises delete
   */
  export type WorkoutExercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercises to delete.
     */
    where: WorkoutExercisesWhereUniqueInput
  }

  /**
   * WorkoutExercises deleteMany
   */
  export type WorkoutExercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercises to delete
     */
    where?: WorkoutExercisesWhereInput
    /**
     * Limit how many WorkoutExercises to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercises without action
   */
  export type WorkoutExercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
  }


  /**
   * Model ExternalExercise
   */

  export type AggregateExternalExercise = {
    _count: ExternalExerciseCountAggregateOutputType | null
    _avg: ExternalExerciseAvgAggregateOutputType | null
    _sum: ExternalExerciseSumAggregateOutputType | null
    _min: ExternalExerciseMinAggregateOutputType | null
    _max: ExternalExerciseMaxAggregateOutputType | null
  }

  export type ExternalExerciseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExternalExerciseSumAggregateOutputType = {
    id: number | null
  }

  export type ExternalExerciseMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    license_author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExternalExerciseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    license_author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExternalExerciseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    muscleGroups: number
    musclesSecondary: number
    equipment: number
    license_author: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExternalExerciseAvgAggregateInputType = {
    id?: true
  }

  export type ExternalExerciseSumAggregateInputType = {
    id?: true
  }

  export type ExternalExerciseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    license_author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExternalExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    license_author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExternalExerciseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscleGroups?: true
    musclesSecondary?: true
    equipment?: true
    license_author?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExternalExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalExercise to aggregate.
     */
    where?: ExternalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalExercises to fetch.
     */
    orderBy?: ExternalExerciseOrderByWithRelationInput | ExternalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalExercises
    **/
    _count?: true | ExternalExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternalExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternalExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalExerciseMaxAggregateInputType
  }

  export type GetExternalExerciseAggregateType<T extends ExternalExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalExercise[P]>
      : GetScalarType<T[P], AggregateExternalExercise[P]>
  }




  export type ExternalExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalExerciseWhereInput
    orderBy?: ExternalExerciseOrderByWithAggregationInput | ExternalExerciseOrderByWithAggregationInput[]
    by: ExternalExerciseScalarFieldEnum[] | ExternalExerciseScalarFieldEnum
    having?: ExternalExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalExerciseCountAggregateInputType | true
    _avg?: ExternalExerciseAvgAggregateInputType
    _sum?: ExternalExerciseSumAggregateInputType
    _min?: ExternalExerciseMinAggregateInputType
    _max?: ExternalExerciseMaxAggregateInputType
  }

  export type ExternalExerciseGroupByOutputType = {
    id: number
    name: string
    description: string | null
    muscleGroups: JsonValue | null
    musclesSecondary: JsonValue | null
    equipment: JsonValue | null
    license_author: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExternalExerciseCountAggregateOutputType | null
    _avg: ExternalExerciseAvgAggregateOutputType | null
    _sum: ExternalExerciseSumAggregateOutputType | null
    _min: ExternalExerciseMinAggregateOutputType | null
    _max: ExternalExerciseMaxAggregateOutputType | null
  }

  type GetExternalExerciseGroupByPayload<T extends ExternalExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExternalExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroups?: boolean
    musclesSecondary?: boolean
    equipment?: boolean
    license_author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    WorkoutExercises?: boolean | ExternalExercise$WorkoutExercisesArgs<ExtArgs>
    _count?: boolean | ExternalExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalExercise"]>

  export type ExternalExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroups?: boolean
    musclesSecondary?: boolean
    equipment?: boolean
    license_author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["externalExercise"]>

  export type ExternalExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroups?: boolean
    musclesSecondary?: boolean
    equipment?: boolean
    license_author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["externalExercise"]>

  export type ExternalExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    muscleGroups?: boolean
    musclesSecondary?: boolean
    equipment?: boolean
    license_author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExternalExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "muscleGroups" | "musclesSecondary" | "equipment" | "license_author" | "createdAt" | "updatedAt", ExtArgs["result"]["externalExercise"]>
  export type ExternalExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercises?: boolean | ExternalExercise$WorkoutExercisesArgs<ExtArgs>
    _count?: boolean | ExternalExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExternalExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExternalExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExternalExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalExercise"
    objects: {
      WorkoutExercises: Prisma.$WorkoutExercisesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      muscleGroups: Prisma.JsonValue | null
      musclesSecondary: Prisma.JsonValue | null
      equipment: Prisma.JsonValue | null
      license_author: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["externalExercise"]>
    composites: {}
  }

  type ExternalExerciseGetPayload<S extends boolean | null | undefined | ExternalExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExternalExercisePayload, S>

  type ExternalExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExternalExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExternalExerciseCountAggregateInputType | true
    }

  export interface ExternalExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalExercise'], meta: { name: 'ExternalExercise' } }
    /**
     * Find zero or one ExternalExercise that matches the filter.
     * @param {ExternalExerciseFindUniqueArgs} args - Arguments to find a ExternalExercise
     * @example
     * // Get one ExternalExercise
     * const externalExercise = await prisma.externalExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalExerciseFindUniqueArgs>(args: SelectSubset<T, ExternalExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExternalExercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExternalExerciseFindUniqueOrThrowArgs} args - Arguments to find a ExternalExercise
     * @example
     * // Get one ExternalExercise
     * const externalExercise = await prisma.externalExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalExerciseFindFirstArgs} args - Arguments to find a ExternalExercise
     * @example
     * // Get one ExternalExercise
     * const externalExercise = await prisma.externalExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalExerciseFindFirstArgs>(args?: SelectSubset<T, ExternalExerciseFindFirstArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalExerciseFindFirstOrThrowArgs} args - Arguments to find a ExternalExercise
     * @example
     * // Get one ExternalExercise
     * const externalExercise = await prisma.externalExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExternalExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalExercises
     * const externalExercises = await prisma.externalExercise.findMany()
     * 
     * // Get first 10 ExternalExercises
     * const externalExercises = await prisma.externalExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalExerciseWithIdOnly = await prisma.externalExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExternalExerciseFindManyArgs>(args?: SelectSubset<T, ExternalExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExternalExercise.
     * @param {ExternalExerciseCreateArgs} args - Arguments to create a ExternalExercise.
     * @example
     * // Create one ExternalExercise
     * const ExternalExercise = await prisma.externalExercise.create({
     *   data: {
     *     // ... data to create a ExternalExercise
     *   }
     * })
     * 
     */
    create<T extends ExternalExerciseCreateArgs>(args: SelectSubset<T, ExternalExerciseCreateArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExternalExercises.
     * @param {ExternalExerciseCreateManyArgs} args - Arguments to create many ExternalExercises.
     * @example
     * // Create many ExternalExercises
     * const externalExercise = await prisma.externalExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalExerciseCreateManyArgs>(args?: SelectSubset<T, ExternalExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExternalExercises and returns the data saved in the database.
     * @param {ExternalExerciseCreateManyAndReturnArgs} args - Arguments to create many ExternalExercises.
     * @example
     * // Create many ExternalExercises
     * const externalExercise = await prisma.externalExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExternalExercises and only return the `id`
     * const externalExerciseWithIdOnly = await prisma.externalExercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternalExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternalExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExternalExercise.
     * @param {ExternalExerciseDeleteArgs} args - Arguments to delete one ExternalExercise.
     * @example
     * // Delete one ExternalExercise
     * const ExternalExercise = await prisma.externalExercise.delete({
     *   where: {
     *     // ... filter to delete one ExternalExercise
     *   }
     * })
     * 
     */
    delete<T extends ExternalExerciseDeleteArgs>(args: SelectSubset<T, ExternalExerciseDeleteArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExternalExercise.
     * @param {ExternalExerciseUpdateArgs} args - Arguments to update one ExternalExercise.
     * @example
     * // Update one ExternalExercise
     * const externalExercise = await prisma.externalExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalExerciseUpdateArgs>(args: SelectSubset<T, ExternalExerciseUpdateArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExternalExercises.
     * @param {ExternalExerciseDeleteManyArgs} args - Arguments to filter ExternalExercises to delete.
     * @example
     * // Delete a few ExternalExercises
     * const { count } = await prisma.externalExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalExerciseDeleteManyArgs>(args?: SelectSubset<T, ExternalExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalExercises
     * const externalExercise = await prisma.externalExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalExerciseUpdateManyArgs>(args: SelectSubset<T, ExternalExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalExercises and returns the data updated in the database.
     * @param {ExternalExerciseUpdateManyAndReturnArgs} args - Arguments to update many ExternalExercises.
     * @example
     * // Update many ExternalExercises
     * const externalExercise = await prisma.externalExercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExternalExercises and only return the `id`
     * const externalExerciseWithIdOnly = await prisma.externalExercise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExternalExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExternalExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExternalExercise.
     * @param {ExternalExerciseUpsertArgs} args - Arguments to update or create a ExternalExercise.
     * @example
     * // Update or create a ExternalExercise
     * const externalExercise = await prisma.externalExercise.upsert({
     *   create: {
     *     // ... data to create a ExternalExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalExercise we want to update
     *   }
     * })
     */
    upsert<T extends ExternalExerciseUpsertArgs>(args: SelectSubset<T, ExternalExerciseUpsertArgs<ExtArgs>>): Prisma__ExternalExerciseClient<$Result.GetResult<Prisma.$ExternalExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExternalExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalExerciseCountArgs} args - Arguments to filter ExternalExercises to count.
     * @example
     * // Count the number of ExternalExercises
     * const count = await prisma.externalExercise.count({
     *   where: {
     *     // ... the filter for the ExternalExercises we want to count
     *   }
     * })
    **/
    count<T extends ExternalExerciseCountArgs>(
      args?: Subset<T, ExternalExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalExerciseAggregateArgs>(args: Subset<T, ExternalExerciseAggregateArgs>): Prisma.PrismaPromise<GetExternalExerciseAggregateType<T>>

    /**
     * Group by ExternalExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExternalExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExternalExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExternalExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalExercise model
   */
  readonly fields: ExternalExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WorkoutExercises<T extends ExternalExercise$WorkoutExercisesArgs<ExtArgs> = {}>(args?: Subset<T, ExternalExercise$WorkoutExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExternalExercise model
   */
  interface ExternalExerciseFieldRefs {
    readonly id: FieldRef<"ExternalExercise", 'Int'>
    readonly name: FieldRef<"ExternalExercise", 'String'>
    readonly description: FieldRef<"ExternalExercise", 'String'>
    readonly muscleGroups: FieldRef<"ExternalExercise", 'Json'>
    readonly musclesSecondary: FieldRef<"ExternalExercise", 'Json'>
    readonly equipment: FieldRef<"ExternalExercise", 'Json'>
    readonly license_author: FieldRef<"ExternalExercise", 'String'>
    readonly createdAt: FieldRef<"ExternalExercise", 'DateTime'>
    readonly updatedAt: FieldRef<"ExternalExercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExternalExercise findUnique
   */
  export type ExternalExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ExternalExercise to fetch.
     */
    where: ExternalExerciseWhereUniqueInput
  }

  /**
   * ExternalExercise findUniqueOrThrow
   */
  export type ExternalExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ExternalExercise to fetch.
     */
    where: ExternalExerciseWhereUniqueInput
  }

  /**
   * ExternalExercise findFirst
   */
  export type ExternalExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ExternalExercise to fetch.
     */
    where?: ExternalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalExercises to fetch.
     */
    orderBy?: ExternalExerciseOrderByWithRelationInput | ExternalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalExercises.
     */
    cursor?: ExternalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalExercises.
     */
    distinct?: ExternalExerciseScalarFieldEnum | ExternalExerciseScalarFieldEnum[]
  }

  /**
   * ExternalExercise findFirstOrThrow
   */
  export type ExternalExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ExternalExercise to fetch.
     */
    where?: ExternalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalExercises to fetch.
     */
    orderBy?: ExternalExerciseOrderByWithRelationInput | ExternalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalExercises.
     */
    cursor?: ExternalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalExercises.
     */
    distinct?: ExternalExerciseScalarFieldEnum | ExternalExerciseScalarFieldEnum[]
  }

  /**
   * ExternalExercise findMany
   */
  export type ExternalExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * Filter, which ExternalExercises to fetch.
     */
    where?: ExternalExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalExercises to fetch.
     */
    orderBy?: ExternalExerciseOrderByWithRelationInput | ExternalExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalExercises.
     */
    cursor?: ExternalExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalExercises.
     */
    skip?: number
    distinct?: ExternalExerciseScalarFieldEnum | ExternalExerciseScalarFieldEnum[]
  }

  /**
   * ExternalExercise create
   */
  export type ExternalExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalExercise.
     */
    data: XOR<ExternalExerciseCreateInput, ExternalExerciseUncheckedCreateInput>
  }

  /**
   * ExternalExercise createMany
   */
  export type ExternalExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalExercises.
     */
    data: ExternalExerciseCreateManyInput | ExternalExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalExercise createManyAndReturn
   */
  export type ExternalExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many ExternalExercises.
     */
    data: ExternalExerciseCreateManyInput | ExternalExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalExercise update
   */
  export type ExternalExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalExercise.
     */
    data: XOR<ExternalExerciseUpdateInput, ExternalExerciseUncheckedUpdateInput>
    /**
     * Choose, which ExternalExercise to update.
     */
    where: ExternalExerciseWhereUniqueInput
  }

  /**
   * ExternalExercise updateMany
   */
  export type ExternalExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalExercises.
     */
    data: XOR<ExternalExerciseUpdateManyMutationInput, ExternalExerciseUncheckedUpdateManyInput>
    /**
     * Filter which ExternalExercises to update
     */
    where?: ExternalExerciseWhereInput
    /**
     * Limit how many ExternalExercises to update.
     */
    limit?: number
  }

  /**
   * ExternalExercise updateManyAndReturn
   */
  export type ExternalExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * The data used to update ExternalExercises.
     */
    data: XOR<ExternalExerciseUpdateManyMutationInput, ExternalExerciseUncheckedUpdateManyInput>
    /**
     * Filter which ExternalExercises to update
     */
    where?: ExternalExerciseWhereInput
    /**
     * Limit how many ExternalExercises to update.
     */
    limit?: number
  }

  /**
   * ExternalExercise upsert
   */
  export type ExternalExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalExercise to update in case it exists.
     */
    where: ExternalExerciseWhereUniqueInput
    /**
     * In case the ExternalExercise found by the `where` argument doesn't exist, create a new ExternalExercise with this data.
     */
    create: XOR<ExternalExerciseCreateInput, ExternalExerciseUncheckedCreateInput>
    /**
     * In case the ExternalExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalExerciseUpdateInput, ExternalExerciseUncheckedUpdateInput>
  }

  /**
   * ExternalExercise delete
   */
  export type ExternalExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
    /**
     * Filter which ExternalExercise to delete.
     */
    where: ExternalExerciseWhereUniqueInput
  }

  /**
   * ExternalExercise deleteMany
   */
  export type ExternalExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalExercises to delete
     */
    where?: ExternalExerciseWhereInput
    /**
     * Limit how many ExternalExercises to delete.
     */
    limit?: number
  }

  /**
   * ExternalExercise.WorkoutExercises
   */
  export type ExternalExercise$WorkoutExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercises
     */
    select?: WorkoutExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercises
     */
    omit?: WorkoutExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisesInclude<ExtArgs> | null
    where?: WorkoutExercisesWhereInput
    orderBy?: WorkoutExercisesOrderByWithRelationInput | WorkoutExercisesOrderByWithRelationInput[]
    cursor?: WorkoutExercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExercisesScalarFieldEnum | WorkoutExercisesScalarFieldEnum[]
  }

  /**
   * ExternalExercise without action
   */
  export type ExternalExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalExercise
     */
    select?: ExternalExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalExercise
     */
    omit?: ExternalExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalExerciseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    username: 'username',
    email: 'email',
    birthdate: 'birthdate',
    age: 'age',
    sizeCm: 'sizeCm',
    initialWeightKg: 'initialWeightKg',
    weightKg: 'weightKg',
    gender: 'gender',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    objectifPoids: 'objectifPoids',
    objectifDate: 'objectifDate',
    createdAt: 'createdAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const ProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    poidsKg: 'poidsKg',
    calories: 'calories'
  };

  export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekDay: 'weekDay',
    duree: 'duree',
    calories: 'calories',
    createdAt: 'createdAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const WorkoutExercisesScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    externalExerciseId: 'externalExerciseId',
    series: 'series',
    repetitions: 'repetitions',
    poidsKg: 'poidsKg',
    createdAt: 'createdAt'
  };

  export type WorkoutExercisesScalarFieldEnum = (typeof WorkoutExercisesScalarFieldEnum)[keyof typeof WorkoutExercisesScalarFieldEnum]


  export const ExternalExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    muscleGroups: 'muscleGroups',
    musclesSecondary: 'musclesSecondary',
    equipment: 'equipment',
    license_author: 'license_author',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExternalExerciseScalarFieldEnum = (typeof ExternalExerciseScalarFieldEnum)[keyof typeof ExternalExerciseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    age?: IntNullableFilter<"User"> | number | null
    sizeCm?: IntNullableFilter<"User"> | number | null
    initialWeightKg?: FloatNullableFilter<"User"> | number | null
    weightKg?: FloatNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    Goal?: GoalListRelationFilter
    Workout?: WorkoutListRelationFilter
    Progress?: ProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    sizeCm?: SortOrderInput | SortOrder
    initialWeightKg?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    Goal?: GoalOrderByRelationAggregateInput
    Workout?: WorkoutOrderByRelationAggregateInput
    Progress?: ProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    age?: IntNullableFilter<"User"> | number | null
    sizeCm?: IntNullableFilter<"User"> | number | null
    initialWeightKg?: FloatNullableFilter<"User"> | number | null
    weightKg?: FloatNullableFilter<"User"> | number | null
    gender?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    Goal?: GoalListRelationFilter
    Workout?: WorkoutListRelationFilter
    Progress?: ProgressListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    sizeCm?: SortOrderInput | SortOrder
    initialWeightKg?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    surname?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    sizeCm?: IntNullableWithAggregatesFilter<"User"> | number | null
    initialWeightKg?: FloatNullableWithAggregatesFilter<"User"> | number | null
    weightKg?: FloatNullableWithAggregatesFilter<"User"> | number | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: IntFilter<"Goal"> | number
    userId?: StringFilter<"Goal"> | string
    type?: StringFilter<"Goal"> | string
    objectifPoids?: FloatNullableFilter<"Goal"> | number | null
    objectifDate?: DateTimeFilter<"Goal"> | Date | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    objectifPoids?: SortOrderInput | SortOrder
    objectifDate?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    type?: StringFilter<"Goal"> | string
    objectifPoids?: FloatNullableFilter<"Goal"> | number | null
    objectifDate?: DateTimeFilter<"Goal"> | Date | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    objectifPoids?: SortOrderInput | SortOrder
    objectifDate?: SortOrder
    createdAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Goal"> | number
    userId?: StringWithAggregatesFilter<"Goal"> | string
    type?: StringWithAggregatesFilter<"Goal"> | string
    objectifPoids?: FloatNullableWithAggregatesFilter<"Goal"> | number | null
    objectifDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type ProgressWhereInput = {
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    id?: IntFilter<"Progress"> | number
    userId?: StringFilter<"Progress"> | string
    date?: DateTimeFilter<"Progress"> | Date | string
    poidsKg?: FloatFilter<"Progress"> | number
    calories?: FloatNullableFilter<"Progress"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    poidsKg?: SortOrder
    calories?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: ProgressWhereInput | ProgressWhereInput[]
    OR?: ProgressWhereInput[]
    NOT?: ProgressWhereInput | ProgressWhereInput[]
    date?: DateTimeFilter<"Progress"> | Date | string
    poidsKg?: FloatFilter<"Progress"> | number
    calories?: FloatNullableFilter<"Progress"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    poidsKg?: SortOrder
    calories?: SortOrderInput | SortOrder
    _count?: ProgressCountOrderByAggregateInput
    _avg?: ProgressAvgOrderByAggregateInput
    _max?: ProgressMaxOrderByAggregateInput
    _min?: ProgressMinOrderByAggregateInput
    _sum?: ProgressSumOrderByAggregateInput
  }

  export type ProgressScalarWhereWithAggregatesInput = {
    AND?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    OR?: ProgressScalarWhereWithAggregatesInput[]
    NOT?: ProgressScalarWhereWithAggregatesInput | ProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Progress"> | number
    userId?: StringWithAggregatesFilter<"Progress"> | string
    date?: DateTimeWithAggregatesFilter<"Progress"> | Date | string
    poidsKg?: FloatWithAggregatesFilter<"Progress"> | number
    calories?: FloatNullableWithAggregatesFilter<"Progress"> | number | null
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: IntFilter<"Workout"> | number
    userId?: StringFilter<"Workout"> | string
    weekDay?: StringFilter<"Workout"> | string
    duree?: IntFilter<"Workout"> | number
    calories?: FloatFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    WorkoutExercises?: WorkoutExercisesListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekDay?: SortOrder
    duree?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    WorkoutExercises?: WorkoutExercisesOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    userId?: StringFilter<"Workout"> | string
    weekDay?: StringFilter<"Workout"> | string
    duree?: IntFilter<"Workout"> | number
    calories?: FloatFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    WorkoutExercises?: WorkoutExercisesListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekDay?: SortOrder
    duree?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workout"> | number
    userId?: StringWithAggregatesFilter<"Workout"> | string
    weekDay?: StringWithAggregatesFilter<"Workout"> | string
    duree?: IntWithAggregatesFilter<"Workout"> | number
    calories?: FloatWithAggregatesFilter<"Workout"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type WorkoutExercisesWhereInput = {
    AND?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    OR?: WorkoutExercisesWhereInput[]
    NOT?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    id?: IntFilter<"WorkoutExercises"> | number
    workoutId?: IntFilter<"WorkoutExercises"> | number
    externalExerciseId?: IntFilter<"WorkoutExercises"> | number
    series?: IntFilter<"WorkoutExercises"> | number
    repetitions?: IntFilter<"WorkoutExercises"> | number
    poidsKg?: FloatNullableFilter<"WorkoutExercises"> | number | null
    createdAt?: DateTimeFilter<"WorkoutExercises"> | Date | string
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    externalExercise?: XOR<ExternalExerciseScalarRelationFilter, ExternalExerciseWhereInput>
  }

  export type WorkoutExercisesOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    externalExerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    poidsKg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
    externalExercise?: ExternalExerciseOrderByWithRelationInput
  }

  export type WorkoutExercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    OR?: WorkoutExercisesWhereInput[]
    NOT?: WorkoutExercisesWhereInput | WorkoutExercisesWhereInput[]
    workoutId?: IntFilter<"WorkoutExercises"> | number
    externalExerciseId?: IntFilter<"WorkoutExercises"> | number
    series?: IntFilter<"WorkoutExercises"> | number
    repetitions?: IntFilter<"WorkoutExercises"> | number
    poidsKg?: FloatNullableFilter<"WorkoutExercises"> | number | null
    createdAt?: DateTimeFilter<"WorkoutExercises"> | Date | string
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    externalExercise?: XOR<ExternalExerciseScalarRelationFilter, ExternalExerciseWhereInput>
  }, "id">

  export type WorkoutExercisesOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    externalExerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    poidsKg?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkoutExercisesCountOrderByAggregateInput
    _avg?: WorkoutExercisesAvgOrderByAggregateInput
    _max?: WorkoutExercisesMaxOrderByAggregateInput
    _min?: WorkoutExercisesMinOrderByAggregateInput
    _sum?: WorkoutExercisesSumOrderByAggregateInput
  }

  export type WorkoutExercisesScalarWhereWithAggregatesInput = {
    AND?: WorkoutExercisesScalarWhereWithAggregatesInput | WorkoutExercisesScalarWhereWithAggregatesInput[]
    OR?: WorkoutExercisesScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExercisesScalarWhereWithAggregatesInput | WorkoutExercisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    workoutId?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    externalExerciseId?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    series?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    repetitions?: IntWithAggregatesFilter<"WorkoutExercises"> | number
    poidsKg?: FloatNullableWithAggregatesFilter<"WorkoutExercises"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutExercises"> | Date | string
  }

  export type ExternalExerciseWhereInput = {
    AND?: ExternalExerciseWhereInput | ExternalExerciseWhereInput[]
    OR?: ExternalExerciseWhereInput[]
    NOT?: ExternalExerciseWhereInput | ExternalExerciseWhereInput[]
    id?: IntFilter<"ExternalExercise"> | number
    name?: StringFilter<"ExternalExercise"> | string
    description?: StringNullableFilter<"ExternalExercise"> | string | null
    muscleGroups?: JsonNullableFilter<"ExternalExercise">
    musclesSecondary?: JsonNullableFilter<"ExternalExercise">
    equipment?: JsonNullableFilter<"ExternalExercise">
    license_author?: StringNullableFilter<"ExternalExercise"> | string | null
    createdAt?: DateTimeFilter<"ExternalExercise"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalExercise"> | Date | string
    WorkoutExercises?: WorkoutExercisesListRelationFilter
  }

  export type ExternalExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroups?: SortOrderInput | SortOrder
    musclesSecondary?: SortOrderInput | SortOrder
    equipment?: SortOrderInput | SortOrder
    license_author?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkoutExercises?: WorkoutExercisesOrderByRelationAggregateInput
  }

  export type ExternalExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExternalExerciseWhereInput | ExternalExerciseWhereInput[]
    OR?: ExternalExerciseWhereInput[]
    NOT?: ExternalExerciseWhereInput | ExternalExerciseWhereInput[]
    name?: StringFilter<"ExternalExercise"> | string
    description?: StringNullableFilter<"ExternalExercise"> | string | null
    muscleGroups?: JsonNullableFilter<"ExternalExercise">
    musclesSecondary?: JsonNullableFilter<"ExternalExercise">
    equipment?: JsonNullableFilter<"ExternalExercise">
    license_author?: StringNullableFilter<"ExternalExercise"> | string | null
    createdAt?: DateTimeFilter<"ExternalExercise"> | Date | string
    updatedAt?: DateTimeFilter<"ExternalExercise"> | Date | string
    WorkoutExercises?: WorkoutExercisesListRelationFilter
  }, "id">

  export type ExternalExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    muscleGroups?: SortOrderInput | SortOrder
    musclesSecondary?: SortOrderInput | SortOrder
    equipment?: SortOrderInput | SortOrder
    license_author?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExternalExerciseCountOrderByAggregateInput
    _avg?: ExternalExerciseAvgOrderByAggregateInput
    _max?: ExternalExerciseMaxOrderByAggregateInput
    _min?: ExternalExerciseMinOrderByAggregateInput
    _sum?: ExternalExerciseSumOrderByAggregateInput
  }

  export type ExternalExerciseScalarWhereWithAggregatesInput = {
    AND?: ExternalExerciseScalarWhereWithAggregatesInput | ExternalExerciseScalarWhereWithAggregatesInput[]
    OR?: ExternalExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExternalExerciseScalarWhereWithAggregatesInput | ExternalExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExternalExercise"> | number
    name?: StringWithAggregatesFilter<"ExternalExercise"> | string
    description?: StringNullableWithAggregatesFilter<"ExternalExercise"> | string | null
    muscleGroups?: JsonNullableWithAggregatesFilter<"ExternalExercise">
    musclesSecondary?: JsonNullableWithAggregatesFilter<"ExternalExercise">
    equipment?: JsonNullableWithAggregatesFilter<"ExternalExercise">
    license_author?: StringNullableWithAggregatesFilter<"ExternalExercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExternalExercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExternalExercise"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Goal?: GoalCreateNestedManyWithoutUserInput
    Workout?: WorkoutCreateNestedManyWithoutUserInput
    Progress?: ProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Goal?: GoalUncheckedCreateNestedManyWithoutUserInput
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    Progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Goal?: GoalUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
    Progress?: ProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Goal?: GoalUncheckedUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    Progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalCreateInput = {
    type: string
    objectifPoids?: number | null
    objectifDate: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: number
    userId: string
    type: string
    objectifPoids?: number | null
    objectifDate: Date | string
    createdAt?: Date | string
  }

  export type GoalUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    objectifPoids?: NullableFloatFieldUpdateOperationsInput | number | null
    objectifDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    objectifPoids?: NullableFloatFieldUpdateOperationsInput | number | null
    objectifDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyInput = {
    id?: number
    userId: string
    type: string
    objectifPoids?: number | null
    objectifDate: Date | string
    createdAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    objectifPoids?: NullableFloatFieldUpdateOperationsInput | number | null
    objectifDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    objectifPoids?: NullableFloatFieldUpdateOperationsInput | number | null
    objectifDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressCreateInput = {
    date?: Date | string
    poidsKg: number
    calories?: number | null
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type ProgressUncheckedCreateInput = {
    id?: number
    userId: string
    date?: Date | string
    poidsKg: number
    calories?: number | null
  }

  export type ProgressUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    poidsKg?: FloatFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type ProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    poidsKg?: FloatFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProgressCreateManyInput = {
    id?: number
    userId: string
    date?: Date | string
    poidsKg: number
    calories?: number | null
  }

  export type ProgressUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    poidsKg?: FloatFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    poidsKg?: FloatFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WorkoutCreateInput = {
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutInput
    WorkoutExercises?: WorkoutExercisesCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: number
    userId: string
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutNestedInput
    WorkoutExercises?: WorkoutExercisesUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: number
    userId: string
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesCreateInput = {
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
    workout: WorkoutCreateNestedOneWithoutWorkoutExercisesInput
    externalExercise: ExternalExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExercisesUncheckedCreateInput = {
    id?: number
    workoutId: number
    externalExerciseId: number
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
  }

  export type WorkoutExercisesUpdateInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput
    externalExercise?: ExternalExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    externalExerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesCreateManyInput = {
    id?: number
    workoutId: number
    externalExerciseId: number
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
  }

  export type WorkoutExercisesUpdateManyMutationInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    externalExerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalExerciseCreateInput = {
    name: string
    description?: string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercises?: WorkoutExercisesCreateNestedManyWithoutExternalExerciseInput
  }

  export type ExternalExerciseUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedCreateNestedManyWithoutExternalExerciseInput
  }

  export type ExternalExerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUpdateManyWithoutExternalExerciseNestedInput
  }

  export type ExternalExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedUpdateManyWithoutExternalExerciseNestedInput
  }

  export type ExternalExerciseCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalExerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type ProgressListRelationFilter = {
    every?: ProgressWhereInput
    some?: ProgressWhereInput
    none?: ProgressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    sizeCm?: SortOrder
    initialWeightKg?: SortOrder
    weightKg?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    sizeCm?: SortOrder
    initialWeightKg?: SortOrder
    weightKg?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    sizeCm?: SortOrder
    initialWeightKg?: SortOrder
    weightKg?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    birthdate?: SortOrder
    age?: SortOrder
    sizeCm?: SortOrder
    initialWeightKg?: SortOrder
    weightKg?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    sizeCm?: SortOrder
    initialWeightKg?: SortOrder
    weightKg?: SortOrder
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    objectifPoids?: SortOrder
    objectifDate?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    id?: SortOrder
    objectifPoids?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    objectifPoids?: SortOrder
    objectifDate?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    objectifPoids?: SortOrder
    objectifDate?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    id?: SortOrder
    objectifPoids?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    poidsKg?: SortOrder
    calories?: SortOrder
  }

  export type ProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    poidsKg?: SortOrder
    calories?: SortOrder
  }

  export type ProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    poidsKg?: SortOrder
    calories?: SortOrder
  }

  export type ProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    poidsKg?: SortOrder
    calories?: SortOrder
  }

  export type ProgressSumOrderByAggregateInput = {
    id?: SortOrder
    poidsKg?: SortOrder
    calories?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type WorkoutExercisesListRelationFilter = {
    every?: WorkoutExercisesWhereInput
    some?: WorkoutExercisesWhereInput
    none?: WorkoutExercisesWhereInput
  }

  export type WorkoutExercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekDay?: SortOrder
    duree?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    id?: SortOrder
    duree?: SortOrder
    calories?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekDay?: SortOrder
    duree?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekDay?: SortOrder
    duree?: SortOrder
    calories?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    id?: SortOrder
    duree?: SortOrder
    calories?: SortOrder
  }

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExternalExerciseScalarRelationFilter = {
    is?: ExternalExerciseWhereInput
    isNot?: ExternalExerciseWhereInput
  }

  export type WorkoutExercisesCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    externalExerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    poidsKg?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutExercisesAvgOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    externalExerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    poidsKg?: SortOrder
  }

  export type WorkoutExercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    externalExerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    poidsKg?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutExercisesMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    externalExerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    poidsKg?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutExercisesSumOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    externalExerciseId?: SortOrder
    series?: SortOrder
    repetitions?: SortOrder
    poidsKg?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ExternalExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscleGroups?: SortOrder
    musclesSecondary?: SortOrder
    equipment?: SortOrder
    license_author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExternalExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    license_author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    license_author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExternalExerciseSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type ProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUserInput | ProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUserInput | ProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUserInput | ProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type ProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput> | ProgressCreateWithoutUserInput[] | ProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProgressCreateOrConnectWithoutUserInput | ProgressCreateOrConnectWithoutUserInput[]
    upsert?: ProgressUpsertWithWhereUniqueWithoutUserInput | ProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProgressCreateManyUserInputEnvelope
    set?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    disconnect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    delete?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    connect?: ProgressWhereUniqueInput | ProgressWhereUniqueInput[]
    update?: ProgressUpdateWithWhereUniqueWithoutUserInput | ProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProgressUpdateManyWithWhereWithoutUserInput | ProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGoalInput = {
    create?: XOR<UserCreateWithoutGoalInput, UserUncheckedCreateWithoutGoalInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGoalNestedInput = {
    create?: XOR<UserCreateWithoutGoalInput, UserUncheckedCreateWithoutGoalInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalInput
    upsert?: UserUpsertWithoutGoalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalInput, UserUpdateWithoutGoalInput>, UserUncheckedUpdateWithoutGoalInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserCreateNestedOneWithoutWorkoutInput = {
    create?: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutExercisesCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type WorkoutExercisesUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkoutNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutInput
    upsert?: UserUpsertWithoutWorkoutInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutInput, UserUpdateWithoutWorkoutInput>, UserUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExercisesUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput | WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput> | WorkoutExercisesCreateWithoutWorkoutInput[] | WorkoutExercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutWorkoutInput | WorkoutExercisesCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExercisesCreateManyWorkoutInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput | WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExternalExerciseCreateNestedOneWithoutWorkoutExercisesInput = {
    create?: XOR<ExternalExerciseCreateWithoutWorkoutExercisesInput, ExternalExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExternalExerciseCreateOrConnectWithoutWorkoutExercisesInput
    connect?: ExternalExerciseWhereUniqueInput
  }

  export type WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: WorkoutUpsertWithoutWorkoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutWorkoutExercisesInput, WorkoutUpdateWithoutWorkoutExercisesInput>, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExternalExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput = {
    create?: XOR<ExternalExerciseCreateWithoutWorkoutExercisesInput, ExternalExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    connectOrCreate?: ExternalExerciseCreateOrConnectWithoutWorkoutExercisesInput
    upsert?: ExternalExerciseUpsertWithoutWorkoutExercisesInput
    connect?: ExternalExerciseWhereUniqueInput
    update?: XOR<XOR<ExternalExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput, ExternalExerciseUpdateWithoutWorkoutExercisesInput>, ExternalExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type WorkoutExercisesCreateNestedManyWithoutExternalExerciseInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExternalExerciseInput, WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput> | WorkoutExercisesCreateWithoutExternalExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput | WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExternalExerciseInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type WorkoutExercisesUncheckedCreateNestedManyWithoutExternalExerciseInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExternalExerciseInput, WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput> | WorkoutExercisesCreateWithoutExternalExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput | WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExternalExerciseInputEnvelope
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
  }

  export type WorkoutExercisesUpdateManyWithoutExternalExerciseNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExternalExerciseInput, WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput> | WorkoutExercisesCreateWithoutExternalExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput | WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutExternalExerciseInput | WorkoutExercisesUpsertWithWhereUniqueWithoutExternalExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExternalExerciseInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutExternalExerciseInput | WorkoutExercisesUpdateWithWhereUniqueWithoutExternalExerciseInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutExternalExerciseInput | WorkoutExercisesUpdateManyWithWhereWithoutExternalExerciseInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutExternalExerciseNestedInput = {
    create?: XOR<WorkoutExercisesCreateWithoutExternalExerciseInput, WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput> | WorkoutExercisesCreateWithoutExternalExerciseInput[] | WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput[]
    connectOrCreate?: WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput | WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput[]
    upsert?: WorkoutExercisesUpsertWithWhereUniqueWithoutExternalExerciseInput | WorkoutExercisesUpsertWithWhereUniqueWithoutExternalExerciseInput[]
    createMany?: WorkoutExercisesCreateManyExternalExerciseInputEnvelope
    set?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    disconnect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    delete?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    connect?: WorkoutExercisesWhereUniqueInput | WorkoutExercisesWhereUniqueInput[]
    update?: WorkoutExercisesUpdateWithWhereUniqueWithoutExternalExerciseInput | WorkoutExercisesUpdateWithWhereUniqueWithoutExternalExerciseInput[]
    updateMany?: WorkoutExercisesUpdateManyWithWhereWithoutExternalExerciseInput | WorkoutExercisesUpdateManyWithWhereWithoutExternalExerciseInput[]
    deleteMany?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GoalCreateWithoutUserInput = {
    type: string
    objectifPoids?: number | null
    objectifDate: Date | string
    createdAt?: Date | string
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    objectifPoids?: number | null
    objectifDate: Date | string
    createdAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutCreateWithoutUserInput = {
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: number
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProgressCreateWithoutUserInput = {
    date?: Date | string
    poidsKg: number
    calories?: number | null
  }

  export type ProgressUncheckedCreateWithoutUserInput = {
    id?: number
    date?: Date | string
    poidsKg: number
    calories?: number | null
  }

  export type ProgressCreateOrConnectWithoutUserInput = {
    where: ProgressWhereUniqueInput
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressCreateManyUserInputEnvelope = {
    data: ProgressCreateManyUserInput | ProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: IntFilter<"Goal"> | number
    userId?: StringFilter<"Goal"> | string
    type?: StringFilter<"Goal"> | string
    objectifPoids?: FloatNullableFilter<"Goal"> | number | null
    objectifDate?: DateTimeFilter<"Goal"> | Date | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: IntFilter<"Workout"> | number
    userId?: StringFilter<"Workout"> | string
    weekDay?: StringFilter<"Workout"> | string
    duree?: IntFilter<"Workout"> | number
    calories?: FloatFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
  }

  export type ProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    update: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
    create: XOR<ProgressCreateWithoutUserInput, ProgressUncheckedCreateWithoutUserInput>
  }

  export type ProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: ProgressWhereUniqueInput
    data: XOR<ProgressUpdateWithoutUserInput, ProgressUncheckedUpdateWithoutUserInput>
  }

  export type ProgressUpdateManyWithWhereWithoutUserInput = {
    where: ProgressScalarWhereInput
    data: XOR<ProgressUpdateManyMutationInput, ProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type ProgressScalarWhereInput = {
    AND?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    OR?: ProgressScalarWhereInput[]
    NOT?: ProgressScalarWhereInput | ProgressScalarWhereInput[]
    id?: IntFilter<"Progress"> | number
    userId?: StringFilter<"Progress"> | string
    date?: DateTimeFilter<"Progress"> | Date | string
    poidsKg?: FloatFilter<"Progress"> | number
    calories?: FloatNullableFilter<"Progress"> | number | null
  }

  export type UserCreateWithoutGoalInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Workout?: WorkoutCreateNestedManyWithoutUserInput
    Progress?: ProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    Progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalInput, UserUncheckedCreateWithoutGoalInput>
  }

  export type UserUpsertWithoutGoalInput = {
    update: XOR<UserUpdateWithoutGoalInput, UserUncheckedUpdateWithoutGoalInput>
    create: XOR<UserCreateWithoutGoalInput, UserUncheckedCreateWithoutGoalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalInput, UserUncheckedUpdateWithoutGoalInput>
  }

  export type UserUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
    Progress?: ProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    Progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Goal?: GoalCreateNestedManyWithoutUserInput
    Workout?: WorkoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Goal?: GoalUncheckedCreateNestedManyWithoutUserInput
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Goal?: GoalUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Goal?: GoalUncheckedUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkoutInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Goal?: GoalCreateNestedManyWithoutUserInput
    Progress?: ProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutInput = {
    id?: string
    name?: string | null
    surname?: string | null
    username?: string | null
    email?: string | null
    birthdate?: Date | string | null
    age?: number | null
    sizeCm?: number | null
    initialWeightKg?: number | null
    weightKg?: number | null
    gender?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    Goal?: GoalUncheckedCreateNestedManyWithoutUserInput
    Progress?: ProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExercisesCreateWithoutWorkoutInput = {
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
    externalExercise: ExternalExerciseCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExercisesUncheckedCreateWithoutWorkoutInput = {
    id?: number
    externalExerciseId: number
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
  }

  export type WorkoutExercisesCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExercisesWhereUniqueInput
    create: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExercisesCreateManyWorkoutInputEnvelope = {
    data: WorkoutExercisesCreateManyWorkoutInput | WorkoutExercisesCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutInput = {
    update: XOR<UserUpdateWithoutWorkoutInput, UserUncheckedUpdateWithoutWorkoutInput>
    create: XOR<UserCreateWithoutWorkoutInput, UserUncheckedCreateWithoutWorkoutInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutInput, UserUncheckedUpdateWithoutWorkoutInput>
  }

  export type UserUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Goal?: GoalUpdateManyWithoutUserNestedInput
    Progress?: ProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    sizeCm?: NullableIntFieldUpdateOperationsInput | number | null
    initialWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    Goal?: GoalUncheckedUpdateManyWithoutUserNestedInput
    Progress?: ProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutExercisesUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExercisesWhereUniqueInput
    update: XOR<WorkoutExercisesUpdateWithoutWorkoutInput, WorkoutExercisesUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExercisesCreateWithoutWorkoutInput, WorkoutExercisesUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExercisesUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExercisesWhereUniqueInput
    data: XOR<WorkoutExercisesUpdateWithoutWorkoutInput, WorkoutExercisesUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExercisesUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExercisesScalarWhereInput
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutExercisesScalarWhereInput = {
    AND?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
    OR?: WorkoutExercisesScalarWhereInput[]
    NOT?: WorkoutExercisesScalarWhereInput | WorkoutExercisesScalarWhereInput[]
    id?: IntFilter<"WorkoutExercises"> | number
    workoutId?: IntFilter<"WorkoutExercises"> | number
    externalExerciseId?: IntFilter<"WorkoutExercises"> | number
    series?: IntFilter<"WorkoutExercises"> | number
    repetitions?: IntFilter<"WorkoutExercises"> | number
    poidsKg?: FloatNullableFilter<"WorkoutExercises"> | number | null
    createdAt?: DateTimeFilter<"WorkoutExercises"> | Date | string
  }

  export type WorkoutCreateWithoutWorkoutExercisesInput = {
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutWorkoutExercisesInput = {
    id?: number
    userId: string
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutWorkoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type ExternalExerciseCreateWithoutWorkoutExercisesInput = {
    name: string
    description?: string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalExerciseUncheckedCreateWithoutWorkoutExercisesInput = {
    id?: number
    name: string
    description?: string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExternalExerciseCreateOrConnectWithoutWorkoutExercisesInput = {
    where: ExternalExerciseWhereUniqueInput
    create: XOR<ExternalExerciseCreateWithoutWorkoutExercisesInput, ExternalExerciseUncheckedCreateWithoutWorkoutExercisesInput>
  }

  export type WorkoutUpsertWithoutWorkoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutWorkoutExercisesInput, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<WorkoutCreateWithoutWorkoutExercisesInput, WorkoutUncheckedCreateWithoutWorkoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutWorkoutExercisesInput, WorkoutUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type WorkoutUpdateWithoutWorkoutExercisesInput = {
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalExerciseUpsertWithoutWorkoutExercisesInput = {
    update: XOR<ExternalExerciseUpdateWithoutWorkoutExercisesInput, ExternalExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
    create: XOR<ExternalExerciseCreateWithoutWorkoutExercisesInput, ExternalExerciseUncheckedCreateWithoutWorkoutExercisesInput>
    where?: ExternalExerciseWhereInput
  }

  export type ExternalExerciseUpdateToOneWithWhereWithoutWorkoutExercisesInput = {
    where?: ExternalExerciseWhereInput
    data: XOR<ExternalExerciseUpdateWithoutWorkoutExercisesInput, ExternalExerciseUncheckedUpdateWithoutWorkoutExercisesInput>
  }

  export type ExternalExerciseUpdateWithoutWorkoutExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalExerciseUncheckedUpdateWithoutWorkoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: NullableJsonNullValueInput | InputJsonValue
    musclesSecondary?: NullableJsonNullValueInput | InputJsonValue
    equipment?: NullableJsonNullValueInput | InputJsonValue
    license_author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesCreateWithoutExternalExerciseInput = {
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
    workout: WorkoutCreateNestedOneWithoutWorkoutExercisesInput
  }

  export type WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput = {
    id?: number
    workoutId: number
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
  }

  export type WorkoutExercisesCreateOrConnectWithoutExternalExerciseInput = {
    where: WorkoutExercisesWhereUniqueInput
    create: XOR<WorkoutExercisesCreateWithoutExternalExerciseInput, WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput>
  }

  export type WorkoutExercisesCreateManyExternalExerciseInputEnvelope = {
    data: WorkoutExercisesCreateManyExternalExerciseInput | WorkoutExercisesCreateManyExternalExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExercisesUpsertWithWhereUniqueWithoutExternalExerciseInput = {
    where: WorkoutExercisesWhereUniqueInput
    update: XOR<WorkoutExercisesUpdateWithoutExternalExerciseInput, WorkoutExercisesUncheckedUpdateWithoutExternalExerciseInput>
    create: XOR<WorkoutExercisesCreateWithoutExternalExerciseInput, WorkoutExercisesUncheckedCreateWithoutExternalExerciseInput>
  }

  export type WorkoutExercisesUpdateWithWhereUniqueWithoutExternalExerciseInput = {
    where: WorkoutExercisesWhereUniqueInput
    data: XOR<WorkoutExercisesUpdateWithoutExternalExerciseInput, WorkoutExercisesUncheckedUpdateWithoutExternalExerciseInput>
  }

  export type WorkoutExercisesUpdateManyWithWhereWithoutExternalExerciseInput = {
    where: WorkoutExercisesScalarWhereInput
    data: XOR<WorkoutExercisesUpdateManyMutationInput, WorkoutExercisesUncheckedUpdateManyWithoutExternalExerciseInput>
  }

  export type GoalCreateManyUserInput = {
    id?: number
    type: string
    objectifPoids?: number | null
    objectifDate: Date | string
    createdAt?: Date | string
  }

  export type WorkoutCreateManyUserInput = {
    id?: number
    weekDay: string
    duree: number
    calories: number
    createdAt?: Date | string
  }

  export type ProgressCreateManyUserInput = {
    id?: number
    date?: Date | string
    poidsKg: number
    calories?: number | null
  }

  export type GoalUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    objectifPoids?: NullableFloatFieldUpdateOperationsInput | number | null
    objectifDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    objectifPoids?: NullableFloatFieldUpdateOperationsInput | number | null
    objectifDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    objectifPoids?: NullableFloatFieldUpdateOperationsInput | number | null
    objectifDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUpdateWithoutUserInput = {
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercises?: WorkoutExercisesUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekDay?: StringFieldUpdateOperationsInput | string
    duree?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    poidsKg?: FloatFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    poidsKg?: FloatFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    poidsKg?: FloatFieldUpdateOperationsInput | number
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type WorkoutExercisesCreateManyWorkoutInput = {
    id?: number
    externalExerciseId: number
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
  }

  export type WorkoutExercisesUpdateWithoutWorkoutInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalExercise?: ExternalExerciseUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    externalExerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    externalExerciseId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesCreateManyExternalExerciseInput = {
    id?: number
    workoutId: number
    series: number
    repetitions: number
    poidsKg?: number | null
    createdAt?: Date | string
  }

  export type WorkoutExercisesUpdateWithoutExternalExerciseInput = {
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutExercisesNestedInput
  }

  export type WorkoutExercisesUncheckedUpdateWithoutExternalExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisesUncheckedUpdateManyWithoutExternalExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repetitions?: IntFieldUpdateOperationsInput | number
    poidsKg?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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