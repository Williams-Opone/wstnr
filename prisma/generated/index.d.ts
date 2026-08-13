
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model AnalyticsHit
 * 
 */
export type AnalyticsHit = $Result.DefaultSelection<Prisma.$AnalyticsHitPayload>
/**
 * Model ProductSku
 * 
 */
export type ProductSku = $Result.DefaultSelection<Prisma.$ProductSkuPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model Newsletter
 * 
 */
export type Newsletter = $Result.DefaultSelection<Prisma.$NewsletterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SectionPlacement: {
  LATEST_DROP: 'LATEST_DROP',
  LOOKBOOK_STATEMENT: 'LOOKBOOK_STATEMENT',
  ARCHIVE_GRID: 'ARCHIVE_GRID'
};

export type SectionPlacement = (typeof SectionPlacement)[keyof typeof SectionPlacement]


export const OrderStatus: {
  PENDING: 'PENDING',
  SUCCESSFUL: 'SUCCESSFUL',
  FAILED: 'FAILED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const InquiryType: {
  ORDER: 'ORDER',
  COLLAB: 'COLLAB',
  PRESS: 'PRESS',
  GENERAL: 'GENERAL'
};

export type InquiryType = (typeof InquiryType)[keyof typeof InquiryType]


export const InquiryStatus: {
  NEW: 'NEW',
  READ: 'READ',
  REPLIED: 'REPLIED',
  ARCHIVED: 'ARCHIVED'
};

export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus]

}

export type SectionPlacement = $Enums.SectionPlacement

export const SectionPlacement: typeof $Enums.SectionPlacement

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type InquiryType = $Enums.InquiryType

export const InquiryType: typeof $Enums.InquiryType

export type InquiryStatus = $Enums.InquiryStatus

export const InquiryStatus: typeof $Enums.InquiryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsHit`: Exposes CRUD operations for the **AnalyticsHit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsHits
    * const analyticsHits = await prisma.analyticsHit.findMany()
    * ```
    */
  get analyticsHit(): Prisma.AnalyticsHitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSku`: Exposes CRUD operations for the **ProductSku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSkus
    * const productSkus = await prisma.productSku.findMany()
    * ```
    */
  get productSku(): Prisma.ProductSkuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletter`: Exposes CRUD operations for the **Newsletter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Newsletters
    * const newsletters = await prisma.newsletter.findMany()
    * ```
    */
  get newsletter(): Prisma.NewsletterDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Product: 'Product',
    AnalyticsHit: 'AnalyticsHit',
    ProductSku: 'ProductSku',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Inquiry: 'Inquiry',
    Newsletter: 'Newsletter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "analyticsHit" | "productSku" | "order" | "orderItem" | "inquiry" | "newsletter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsHit: {
        payload: Prisma.$AnalyticsHitPayload<ExtArgs>
        fields: Prisma.AnalyticsHitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsHitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsHitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsHitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsHitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>
          }
          findMany: {
            args: Prisma.AnalyticsHitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>[]
          }
          create: {
            args: Prisma.AnalyticsHitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>
          }
          createMany: {
            args: Prisma.AnalyticsHitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsHitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsHitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>
          }
          update: {
            args: Prisma.AnalyticsHitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsHitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsHitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsHitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsHitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsHitPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsHitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsHit>
          }
          groupBy: {
            args: Prisma.AnalyticsHitGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsHitGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsHitCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsHitCountAggregateOutputType> | number
          }
        }
      }
      ProductSku: {
        payload: Prisma.$ProductSkuPayload<ExtArgs>
        fields: Prisma.ProductSkuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSkuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSkuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          findFirst: {
            args: Prisma.ProductSkuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSkuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          findMany: {
            args: Prisma.ProductSkuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>[]
          }
          create: {
            args: Prisma.ProductSkuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          createMany: {
            args: Prisma.ProductSkuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSkuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>[]
          }
          delete: {
            args: Prisma.ProductSkuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          update: {
            args: Prisma.ProductSkuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          deleteMany: {
            args: Prisma.ProductSkuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSkuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSkuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>[]
          }
          upsert: {
            args: Prisma.ProductSkuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          aggregate: {
            args: Prisma.ProductSkuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSku>
          }
          groupBy: {
            args: Prisma.ProductSkuGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSkuGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSkuCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSkuCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      Newsletter: {
        payload: Prisma.$NewsletterPayload<ExtArgs>
        fields: Prisma.NewsletterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          findFirst: {
            args: Prisma.NewsletterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          findMany: {
            args: Prisma.NewsletterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>[]
          }
          create: {
            args: Prisma.NewsletterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          createMany: {
            args: Prisma.NewsletterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsletterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>[]
          }
          delete: {
            args: Prisma.NewsletterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          update: {
            args: Prisma.NewsletterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsletterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>[]
          }
          upsert: {
            args: Prisma.NewsletterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterPayload>
          }
          aggregate: {
            args: Prisma.NewsletterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletter>
          }
          groupBy: {
            args: Prisma.NewsletterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    analyticsHit?: AnalyticsHitOmit
    productSku?: ProductSkuOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    inquiry?: InquiryOmit
    newsletter?: NewsletterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    skus: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skus?: boolean | ProductCountOutputTypeCountSkusArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSkusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSkuWhereInput
  }


  /**
   * Count Type ProductSkuCountOutputType
   */

  export type ProductSkuCountOutputType = {
    orderItems: number
  }

  export type ProductSkuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | ProductSkuCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductSkuCountOutputType without action
   */
  export type ProductSkuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSkuCountOutputType
     */
    select?: ProductSkuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductSkuCountOutputType without action
   */
  export type ProductSkuCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    serial: string | null
    name: string | null
    price: Decimal | null
    category: string | null
    composition: string | null
    details: string | null
    measurements: string | null
    isActive: boolean | null
    placement: $Enums.SectionPlacement | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    serial: string | null
    name: string | null
    price: Decimal | null
    category: string | null
    composition: string | null
    details: string | null
    measurements: string | null
    isActive: boolean | null
    placement: $Enums.SectionPlacement | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    serial: number
    name: number
    price: number
    category: number
    composition: number
    details: number
    measurements: number
    images: number
    isActive: number
    placement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    serial?: true
    name?: true
    price?: true
    category?: true
    composition?: true
    details?: true
    measurements?: true
    isActive?: true
    placement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    serial?: true
    name?: true
    price?: true
    category?: true
    composition?: true
    details?: true
    measurements?: true
    isActive?: true
    placement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    serial?: true
    name?: true
    price?: true
    category?: true
    composition?: true
    details?: true
    measurements?: true
    images?: true
    isActive?: true
    placement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    serial: string
    name: string
    price: Decimal
    category: string
    composition: string
    details: string
    measurements: string
    images: string[]
    isActive: boolean
    placement: $Enums.SectionPlacement
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    composition?: boolean
    details?: boolean
    measurements?: boolean
    images?: boolean
    isActive?: boolean
    placement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skus?: boolean | Product$skusArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    composition?: boolean
    details?: boolean
    measurements?: boolean
    images?: boolean
    isActive?: boolean
    placement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    composition?: boolean
    details?: boolean
    measurements?: boolean
    images?: boolean
    isActive?: boolean
    placement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    serial?: boolean
    name?: boolean
    price?: boolean
    category?: boolean
    composition?: boolean
    details?: boolean
    measurements?: boolean
    images?: boolean
    isActive?: boolean
    placement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serial" | "name" | "price" | "category" | "composition" | "details" | "measurements" | "images" | "isActive" | "placement" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skus?: boolean | Product$skusArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      skus: Prisma.$ProductSkuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serial: string
      name: string
      price: Prisma.Decimal
      category: string
      composition: string
      details: string
      measurements: string
      images: string[]
      isActive: boolean
      placement: $Enums.SectionPlacement
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skus<T extends Product$skusArgs<ExtArgs> = {}>(args?: Subset<T, Product$skusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly serial: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly category: FieldRef<"Product", 'String'>
    readonly composition: FieldRef<"Product", 'String'>
    readonly details: FieldRef<"Product", 'String'>
    readonly measurements: FieldRef<"Product", 'String'>
    readonly images: FieldRef<"Product", 'String[]'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly placement: FieldRef<"Product", 'SectionPlacement'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.skus
   */
  export type Product$skusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    where?: ProductSkuWhereInput
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    cursor?: ProductSkuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSkuScalarFieldEnum | ProductSkuScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model AnalyticsHit
   */

  export type AggregateAnalyticsHit = {
    _count: AnalyticsHitCountAggregateOutputType | null
    _min: AnalyticsHitMinAggregateOutputType | null
    _max: AnalyticsHitMaxAggregateOutputType | null
  }

  export type AnalyticsHitMinAggregateOutputType = {
    id: string | null
    ipHash: string | null
    timestamp: Date | null
  }

  export type AnalyticsHitMaxAggregateOutputType = {
    id: string | null
    ipHash: string | null
    timestamp: Date | null
  }

  export type AnalyticsHitCountAggregateOutputType = {
    id: number
    ipHash: number
    timestamp: number
    _all: number
  }


  export type AnalyticsHitMinAggregateInputType = {
    id?: true
    ipHash?: true
    timestamp?: true
  }

  export type AnalyticsHitMaxAggregateInputType = {
    id?: true
    ipHash?: true
    timestamp?: true
  }

  export type AnalyticsHitCountAggregateInputType = {
    id?: true
    ipHash?: true
    timestamp?: true
    _all?: true
  }

  export type AnalyticsHitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsHit to aggregate.
     */
    where?: AnalyticsHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsHits to fetch.
     */
    orderBy?: AnalyticsHitOrderByWithRelationInput | AnalyticsHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsHits
    **/
    _count?: true | AnalyticsHitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsHitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsHitMaxAggregateInputType
  }

  export type GetAnalyticsHitAggregateType<T extends AnalyticsHitAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsHit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsHit[P]>
      : GetScalarType<T[P], AggregateAnalyticsHit[P]>
  }




  export type AnalyticsHitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsHitWhereInput
    orderBy?: AnalyticsHitOrderByWithAggregationInput | AnalyticsHitOrderByWithAggregationInput[]
    by: AnalyticsHitScalarFieldEnum[] | AnalyticsHitScalarFieldEnum
    having?: AnalyticsHitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsHitCountAggregateInputType | true
    _min?: AnalyticsHitMinAggregateInputType
    _max?: AnalyticsHitMaxAggregateInputType
  }

  export type AnalyticsHitGroupByOutputType = {
    id: string
    ipHash: string
    timestamp: Date
    _count: AnalyticsHitCountAggregateOutputType | null
    _min: AnalyticsHitMinAggregateOutputType | null
    _max: AnalyticsHitMaxAggregateOutputType | null
  }

  type GetAnalyticsHitGroupByPayload<T extends AnalyticsHitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsHitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsHitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsHitGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsHitGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsHitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipHash?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["analyticsHit"]>

  export type AnalyticsHitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipHash?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["analyticsHit"]>

  export type AnalyticsHitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipHash?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["analyticsHit"]>

  export type AnalyticsHitSelectScalar = {
    id?: boolean
    ipHash?: boolean
    timestamp?: boolean
  }

  export type AnalyticsHitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ipHash" | "timestamp", ExtArgs["result"]["analyticsHit"]>

  export type $AnalyticsHitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsHit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ipHash: string
      timestamp: Date
    }, ExtArgs["result"]["analyticsHit"]>
    composites: {}
  }

  type AnalyticsHitGetPayload<S extends boolean | null | undefined | AnalyticsHitDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsHitPayload, S>

  type AnalyticsHitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsHitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsHitCountAggregateInputType | true
    }

  export interface AnalyticsHitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsHit'], meta: { name: 'AnalyticsHit' } }
    /**
     * Find zero or one AnalyticsHit that matches the filter.
     * @param {AnalyticsHitFindUniqueArgs} args - Arguments to find a AnalyticsHit
     * @example
     * // Get one AnalyticsHit
     * const analyticsHit = await prisma.analyticsHit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsHitFindUniqueArgs>(args: SelectSubset<T, AnalyticsHitFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsHit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsHitFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsHit
     * @example
     * // Get one AnalyticsHit
     * const analyticsHit = await prisma.analyticsHit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsHitFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsHitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsHit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsHitFindFirstArgs} args - Arguments to find a AnalyticsHit
     * @example
     * // Get one AnalyticsHit
     * const analyticsHit = await prisma.analyticsHit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsHitFindFirstArgs>(args?: SelectSubset<T, AnalyticsHitFindFirstArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsHit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsHitFindFirstOrThrowArgs} args - Arguments to find a AnalyticsHit
     * @example
     * // Get one AnalyticsHit
     * const analyticsHit = await prisma.analyticsHit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsHitFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsHitFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsHits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsHitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsHits
     * const analyticsHits = await prisma.analyticsHit.findMany()
     * 
     * // Get first 10 AnalyticsHits
     * const analyticsHits = await prisma.analyticsHit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsHitWithIdOnly = await prisma.analyticsHit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsHitFindManyArgs>(args?: SelectSubset<T, AnalyticsHitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsHit.
     * @param {AnalyticsHitCreateArgs} args - Arguments to create a AnalyticsHit.
     * @example
     * // Create one AnalyticsHit
     * const AnalyticsHit = await prisma.analyticsHit.create({
     *   data: {
     *     // ... data to create a AnalyticsHit
     *   }
     * })
     * 
     */
    create<T extends AnalyticsHitCreateArgs>(args: SelectSubset<T, AnalyticsHitCreateArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsHits.
     * @param {AnalyticsHitCreateManyArgs} args - Arguments to create many AnalyticsHits.
     * @example
     * // Create many AnalyticsHits
     * const analyticsHit = await prisma.analyticsHit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsHitCreateManyArgs>(args?: SelectSubset<T, AnalyticsHitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsHits and returns the data saved in the database.
     * @param {AnalyticsHitCreateManyAndReturnArgs} args - Arguments to create many AnalyticsHits.
     * @example
     * // Create many AnalyticsHits
     * const analyticsHit = await prisma.analyticsHit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsHits and only return the `id`
     * const analyticsHitWithIdOnly = await prisma.analyticsHit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsHitCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsHitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsHit.
     * @param {AnalyticsHitDeleteArgs} args - Arguments to delete one AnalyticsHit.
     * @example
     * // Delete one AnalyticsHit
     * const AnalyticsHit = await prisma.analyticsHit.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsHit
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsHitDeleteArgs>(args: SelectSubset<T, AnalyticsHitDeleteArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsHit.
     * @param {AnalyticsHitUpdateArgs} args - Arguments to update one AnalyticsHit.
     * @example
     * // Update one AnalyticsHit
     * const analyticsHit = await prisma.analyticsHit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsHitUpdateArgs>(args: SelectSubset<T, AnalyticsHitUpdateArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsHits.
     * @param {AnalyticsHitDeleteManyArgs} args - Arguments to filter AnalyticsHits to delete.
     * @example
     * // Delete a few AnalyticsHits
     * const { count } = await prisma.analyticsHit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsHitDeleteManyArgs>(args?: SelectSubset<T, AnalyticsHitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsHits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsHitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsHits
     * const analyticsHit = await prisma.analyticsHit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsHitUpdateManyArgs>(args: SelectSubset<T, AnalyticsHitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsHits and returns the data updated in the database.
     * @param {AnalyticsHitUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsHits.
     * @example
     * // Update many AnalyticsHits
     * const analyticsHit = await prisma.analyticsHit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsHits and only return the `id`
     * const analyticsHitWithIdOnly = await prisma.analyticsHit.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsHitUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsHitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsHit.
     * @param {AnalyticsHitUpsertArgs} args - Arguments to update or create a AnalyticsHit.
     * @example
     * // Update or create a AnalyticsHit
     * const analyticsHit = await prisma.analyticsHit.upsert({
     *   create: {
     *     // ... data to create a AnalyticsHit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsHit we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsHitUpsertArgs>(args: SelectSubset<T, AnalyticsHitUpsertArgs<ExtArgs>>): Prisma__AnalyticsHitClient<$Result.GetResult<Prisma.$AnalyticsHitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsHits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsHitCountArgs} args - Arguments to filter AnalyticsHits to count.
     * @example
     * // Count the number of AnalyticsHits
     * const count = await prisma.analyticsHit.count({
     *   where: {
     *     // ... the filter for the AnalyticsHits we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsHitCountArgs>(
      args?: Subset<T, AnalyticsHitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsHitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsHit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsHitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsHitAggregateArgs>(args: Subset<T, AnalyticsHitAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsHitAggregateType<T>>

    /**
     * Group by AnalyticsHit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsHitGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsHitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsHitGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsHitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsHitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsHitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsHit model
   */
  readonly fields: AnalyticsHitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsHit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsHitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AnalyticsHit model
   */
  interface AnalyticsHitFieldRefs {
    readonly id: FieldRef<"AnalyticsHit", 'String'>
    readonly ipHash: FieldRef<"AnalyticsHit", 'String'>
    readonly timestamp: FieldRef<"AnalyticsHit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsHit findUnique
   */
  export type AnalyticsHitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsHit to fetch.
     */
    where: AnalyticsHitWhereUniqueInput
  }

  /**
   * AnalyticsHit findUniqueOrThrow
   */
  export type AnalyticsHitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsHit to fetch.
     */
    where: AnalyticsHitWhereUniqueInput
  }

  /**
   * AnalyticsHit findFirst
   */
  export type AnalyticsHitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsHit to fetch.
     */
    where?: AnalyticsHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsHits to fetch.
     */
    orderBy?: AnalyticsHitOrderByWithRelationInput | AnalyticsHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsHits.
     */
    cursor?: AnalyticsHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsHits.
     */
    distinct?: AnalyticsHitScalarFieldEnum | AnalyticsHitScalarFieldEnum[]
  }

  /**
   * AnalyticsHit findFirstOrThrow
   */
  export type AnalyticsHitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsHit to fetch.
     */
    where?: AnalyticsHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsHits to fetch.
     */
    orderBy?: AnalyticsHitOrderByWithRelationInput | AnalyticsHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsHits.
     */
    cursor?: AnalyticsHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsHits.
     */
    distinct?: AnalyticsHitScalarFieldEnum | AnalyticsHitScalarFieldEnum[]
  }

  /**
   * AnalyticsHit findMany
   */
  export type AnalyticsHitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsHits to fetch.
     */
    where?: AnalyticsHitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsHits to fetch.
     */
    orderBy?: AnalyticsHitOrderByWithRelationInput | AnalyticsHitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsHits.
     */
    cursor?: AnalyticsHitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsHits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsHits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsHits.
     */
    distinct?: AnalyticsHitScalarFieldEnum | AnalyticsHitScalarFieldEnum[]
  }

  /**
   * AnalyticsHit create
   */
  export type AnalyticsHitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsHit.
     */
    data: XOR<AnalyticsHitCreateInput, AnalyticsHitUncheckedCreateInput>
  }

  /**
   * AnalyticsHit createMany
   */
  export type AnalyticsHitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsHits.
     */
    data: AnalyticsHitCreateManyInput | AnalyticsHitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsHit createManyAndReturn
   */
  export type AnalyticsHitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsHits.
     */
    data: AnalyticsHitCreateManyInput | AnalyticsHitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsHit update
   */
  export type AnalyticsHitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsHit.
     */
    data: XOR<AnalyticsHitUpdateInput, AnalyticsHitUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsHit to update.
     */
    where: AnalyticsHitWhereUniqueInput
  }

  /**
   * AnalyticsHit updateMany
   */
  export type AnalyticsHitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsHits.
     */
    data: XOR<AnalyticsHitUpdateManyMutationInput, AnalyticsHitUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsHits to update
     */
    where?: AnalyticsHitWhereInput
    /**
     * Limit how many AnalyticsHits to update.
     */
    limit?: number
  }

  /**
   * AnalyticsHit updateManyAndReturn
   */
  export type AnalyticsHitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsHits.
     */
    data: XOR<AnalyticsHitUpdateManyMutationInput, AnalyticsHitUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsHits to update
     */
    where?: AnalyticsHitWhereInput
    /**
     * Limit how many AnalyticsHits to update.
     */
    limit?: number
  }

  /**
   * AnalyticsHit upsert
   */
  export type AnalyticsHitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsHit to update in case it exists.
     */
    where: AnalyticsHitWhereUniqueInput
    /**
     * In case the AnalyticsHit found by the `where` argument doesn't exist, create a new AnalyticsHit with this data.
     */
    create: XOR<AnalyticsHitCreateInput, AnalyticsHitUncheckedCreateInput>
    /**
     * In case the AnalyticsHit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsHitUpdateInput, AnalyticsHitUncheckedUpdateInput>
  }

  /**
   * AnalyticsHit delete
   */
  export type AnalyticsHitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
    /**
     * Filter which AnalyticsHit to delete.
     */
    where: AnalyticsHitWhereUniqueInput
  }

  /**
   * AnalyticsHit deleteMany
   */
  export type AnalyticsHitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsHits to delete
     */
    where?: AnalyticsHitWhereInput
    /**
     * Limit how many AnalyticsHits to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsHit without action
   */
  export type AnalyticsHitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsHit
     */
    select?: AnalyticsHitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsHit
     */
    omit?: AnalyticsHitOmit<ExtArgs> | null
  }


  /**
   * Model ProductSku
   */

  export type AggregateProductSku = {
    _count: ProductSkuCountAggregateOutputType | null
    _avg: ProductSkuAvgAggregateOutputType | null
    _sum: ProductSkuSumAggregateOutputType | null
    _min: ProductSkuMinAggregateOutputType | null
    _max: ProductSkuMaxAggregateOutputType | null
  }

  export type ProductSkuAvgAggregateOutputType = {
    stock: number | null
  }

  export type ProductSkuSumAggregateOutputType = {
    stock: number | null
  }

  export type ProductSkuMinAggregateOutputType = {
    id: string | null
    productId: string | null
    color: string | null
    size: string | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSkuMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    color: string | null
    size: string | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductSkuCountAggregateOutputType = {
    id: number
    productId: number
    color: number
    size: number
    stock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductSkuAvgAggregateInputType = {
    stock?: true
  }

  export type ProductSkuSumAggregateInputType = {
    stock?: true
  }

  export type ProductSkuMinAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSkuMaxAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductSkuCountAggregateInputType = {
    id?: true
    productId?: true
    color?: true
    size?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductSkuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSku to aggregate.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSkus
    **/
    _count?: true | ProductSkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSkuMaxAggregateInputType
  }

  export type GetProductSkuAggregateType<T extends ProductSkuAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSku[P]>
      : GetScalarType<T[P], AggregateProductSku[P]>
  }




  export type ProductSkuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSkuWhereInput
    orderBy?: ProductSkuOrderByWithAggregationInput | ProductSkuOrderByWithAggregationInput[]
    by: ProductSkuScalarFieldEnum[] | ProductSkuScalarFieldEnum
    having?: ProductSkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSkuCountAggregateInputType | true
    _avg?: ProductSkuAvgAggregateInputType
    _sum?: ProductSkuSumAggregateInputType
    _min?: ProductSkuMinAggregateInputType
    _max?: ProductSkuMaxAggregateInputType
  }

  export type ProductSkuGroupByOutputType = {
    id: string
    productId: string
    color: string
    size: string
    stock: number
    createdAt: Date
    updatedAt: Date
    _count: ProductSkuCountAggregateOutputType | null
    _avg: ProductSkuAvgAggregateOutputType | null
    _sum: ProductSkuSumAggregateOutputType | null
    _min: ProductSkuMinAggregateOutputType | null
    _max: ProductSkuMaxAggregateOutputType | null
  }

  type GetProductSkuGroupByPayload<T extends ProductSkuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSkuGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSkuGroupByOutputType[P]>
        }
      >
    >


  export type ProductSkuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    color?: boolean
    size?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    orderItems?: boolean | ProductSku$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductSkuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSku"]>

  export type ProductSkuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    color?: boolean
    size?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSku"]>

  export type ProductSkuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    color?: boolean
    size?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSku"]>

  export type ProductSkuSelectScalar = {
    id?: boolean
    productId?: boolean
    color?: boolean
    size?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductSkuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "color" | "size" | "stock" | "createdAt" | "updatedAt", ExtArgs["result"]["productSku"]>
  export type ProductSkuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    orderItems?: boolean | ProductSku$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductSkuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductSkuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSkuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductSkuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSku"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      color: string
      size: string
      stock: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productSku"]>
    composites: {}
  }

  type ProductSkuGetPayload<S extends boolean | null | undefined | ProductSkuDefaultArgs> = $Result.GetResult<Prisma.$ProductSkuPayload, S>

  type ProductSkuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSkuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSkuCountAggregateInputType | true
    }

  export interface ProductSkuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSku'], meta: { name: 'ProductSku' } }
    /**
     * Find zero or one ProductSku that matches the filter.
     * @param {ProductSkuFindUniqueArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSkuFindUniqueArgs>(args: SelectSubset<T, ProductSkuFindUniqueArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSkuFindUniqueOrThrowArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSkuFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSkuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuFindFirstArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSkuFindFirstArgs>(args?: SelectSubset<T, ProductSkuFindFirstArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuFindFirstOrThrowArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSkuFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSkuFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSkus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSkus
     * const productSkus = await prisma.productSku.findMany()
     * 
     * // Get first 10 ProductSkus
     * const productSkus = await prisma.productSku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSkuWithIdOnly = await prisma.productSku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSkuFindManyArgs>(args?: SelectSubset<T, ProductSkuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSku.
     * @param {ProductSkuCreateArgs} args - Arguments to create a ProductSku.
     * @example
     * // Create one ProductSku
     * const ProductSku = await prisma.productSku.create({
     *   data: {
     *     // ... data to create a ProductSku
     *   }
     * })
     * 
     */
    create<T extends ProductSkuCreateArgs>(args: SelectSubset<T, ProductSkuCreateArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSkus.
     * @param {ProductSkuCreateManyArgs} args - Arguments to create many ProductSkus.
     * @example
     * // Create many ProductSkus
     * const productSku = await prisma.productSku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSkuCreateManyArgs>(args?: SelectSubset<T, ProductSkuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSkus and returns the data saved in the database.
     * @param {ProductSkuCreateManyAndReturnArgs} args - Arguments to create many ProductSkus.
     * @example
     * // Create many ProductSkus
     * const productSku = await prisma.productSku.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSkus and only return the `id`
     * const productSkuWithIdOnly = await prisma.productSku.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSkuCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSkuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSku.
     * @param {ProductSkuDeleteArgs} args - Arguments to delete one ProductSku.
     * @example
     * // Delete one ProductSku
     * const ProductSku = await prisma.productSku.delete({
     *   where: {
     *     // ... filter to delete one ProductSku
     *   }
     * })
     * 
     */
    delete<T extends ProductSkuDeleteArgs>(args: SelectSubset<T, ProductSkuDeleteArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSku.
     * @param {ProductSkuUpdateArgs} args - Arguments to update one ProductSku.
     * @example
     * // Update one ProductSku
     * const productSku = await prisma.productSku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSkuUpdateArgs>(args: SelectSubset<T, ProductSkuUpdateArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSkus.
     * @param {ProductSkuDeleteManyArgs} args - Arguments to filter ProductSkus to delete.
     * @example
     * // Delete a few ProductSkus
     * const { count } = await prisma.productSku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSkuDeleteManyArgs>(args?: SelectSubset<T, ProductSkuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSkus
     * const productSku = await prisma.productSku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSkuUpdateManyArgs>(args: SelectSubset<T, ProductSkuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSkus and returns the data updated in the database.
     * @param {ProductSkuUpdateManyAndReturnArgs} args - Arguments to update many ProductSkus.
     * @example
     * // Update many ProductSkus
     * const productSku = await prisma.productSku.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSkus and only return the `id`
     * const productSkuWithIdOnly = await prisma.productSku.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductSkuUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSkuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSku.
     * @param {ProductSkuUpsertArgs} args - Arguments to update or create a ProductSku.
     * @example
     * // Update or create a ProductSku
     * const productSku = await prisma.productSku.upsert({
     *   create: {
     *     // ... data to create a ProductSku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSku we want to update
     *   }
     * })
     */
    upsert<T extends ProductSkuUpsertArgs>(args: SelectSubset<T, ProductSkuUpsertArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuCountArgs} args - Arguments to filter ProductSkus to count.
     * @example
     * // Count the number of ProductSkus
     * const count = await prisma.productSku.count({
     *   where: {
     *     // ... the filter for the ProductSkus we want to count
     *   }
     * })
    **/
    count<T extends ProductSkuCountArgs>(
      args?: Subset<T, ProductSkuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSkuAggregateArgs>(args: Subset<T, ProductSkuAggregateArgs>): Prisma.PrismaPromise<GetProductSkuAggregateType<T>>

    /**
     * Group by ProductSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuGroupByArgs} args - Group by arguments.
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
      T extends ProductSkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSkuGroupByArgs['orderBy'] }
        : { orderBy?: ProductSkuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSkuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSku model
   */
  readonly fields: ProductSkuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSkuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends ProductSku$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductSku$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductSku model
   */
  interface ProductSkuFieldRefs {
    readonly id: FieldRef<"ProductSku", 'String'>
    readonly productId: FieldRef<"ProductSku", 'String'>
    readonly color: FieldRef<"ProductSku", 'String'>
    readonly size: FieldRef<"ProductSku", 'String'>
    readonly stock: FieldRef<"ProductSku", 'Int'>
    readonly createdAt: FieldRef<"ProductSku", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductSku", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductSku findUnique
   */
  export type ProductSkuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku findUniqueOrThrow
   */
  export type ProductSkuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku findFirst
   */
  export type ProductSkuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSkus.
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSkus.
     */
    distinct?: ProductSkuScalarFieldEnum | ProductSkuScalarFieldEnum[]
  }

  /**
   * ProductSku findFirstOrThrow
   */
  export type ProductSkuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSkus.
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSkus.
     */
    distinct?: ProductSkuScalarFieldEnum | ProductSkuScalarFieldEnum[]
  }

  /**
   * ProductSku findMany
   */
  export type ProductSkuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSkus to fetch.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSkus.
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSkus.
     */
    distinct?: ProductSkuScalarFieldEnum | ProductSkuScalarFieldEnum[]
  }

  /**
   * ProductSku create
   */
  export type ProductSkuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSku.
     */
    data: XOR<ProductSkuCreateInput, ProductSkuUncheckedCreateInput>
  }

  /**
   * ProductSku createMany
   */
  export type ProductSkuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSkus.
     */
    data: ProductSkuCreateManyInput | ProductSkuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSku createManyAndReturn
   */
  export type ProductSkuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSkus.
     */
    data: ProductSkuCreateManyInput | ProductSkuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSku update
   */
  export type ProductSkuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSku.
     */
    data: XOR<ProductSkuUpdateInput, ProductSkuUncheckedUpdateInput>
    /**
     * Choose, which ProductSku to update.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku updateMany
   */
  export type ProductSkuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSkus.
     */
    data: XOR<ProductSkuUpdateManyMutationInput, ProductSkuUncheckedUpdateManyInput>
    /**
     * Filter which ProductSkus to update
     */
    where?: ProductSkuWhereInput
    /**
     * Limit how many ProductSkus to update.
     */
    limit?: number
  }

  /**
   * ProductSku updateManyAndReturn
   */
  export type ProductSkuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * The data used to update ProductSkus.
     */
    data: XOR<ProductSkuUpdateManyMutationInput, ProductSkuUncheckedUpdateManyInput>
    /**
     * Filter which ProductSkus to update
     */
    where?: ProductSkuWhereInput
    /**
     * Limit how many ProductSkus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSku upsert
   */
  export type ProductSkuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSku to update in case it exists.
     */
    where: ProductSkuWhereUniqueInput
    /**
     * In case the ProductSku found by the `where` argument doesn't exist, create a new ProductSku with this data.
     */
    create: XOR<ProductSkuCreateInput, ProductSkuUncheckedCreateInput>
    /**
     * In case the ProductSku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSkuUpdateInput, ProductSkuUncheckedUpdateInput>
  }

  /**
   * ProductSku delete
   */
  export type ProductSkuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter which ProductSku to delete.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku deleteMany
   */
  export type ProductSkuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSkus to delete
     */
    where?: ProductSkuWhereInput
    /**
     * Limit how many ProductSkus to delete.
     */
    limit?: number
  }

  /**
   * ProductSku.orderItems
   */
  export type ProductSku$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * ProductSku without action
   */
  export type ProductSkuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    reference: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    shippingAddress: string | null
    totalAmount: Decimal | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    shippingAddress: string | null
    totalAmount: Decimal | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    reference: number
    customerName: number
    customerEmail: number
    customerPhone: number
    shippingAddress: number
    totalAmount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    reference?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    shippingAddress?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    reference?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    shippingAddress?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    reference?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    shippingAddress?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    reference: string
    customerName: string
    customerEmail: string
    customerPhone: string
    shippingAddress: string
    totalAmount: Decimal
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    shippingAddress?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    shippingAddress?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    shippingAddress?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    reference?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    shippingAddress?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "customerName" | "customerEmail" | "customerPhone" | "shippingAddress" | "totalAmount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      customerName: string
      customerEmail: string
      customerPhone: string
      shippingAddress: string
      totalAmount: Prisma.Decimal
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly reference: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerEmail: FieldRef<"Order", 'String'>
    readonly customerPhone: FieldRef<"Order", 'String'>
    readonly shippingAddress: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    pricePaid: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    pricePaid: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productSkuId: string | null
    quantity: number | null
    pricePaid: Decimal | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productSkuId: string | null
    quantity: number | null
    pricePaid: Decimal | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productSkuId: number
    quantity: number
    pricePaid: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    pricePaid?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    pricePaid?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productSkuId?: true
    quantity?: true
    pricePaid?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productSkuId?: true
    quantity?: true
    pricePaid?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productSkuId?: true
    quantity?: true
    pricePaid?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productSkuId: string
    quantity: number
    pricePaid: Decimal
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productSkuId?: boolean
    quantity?: boolean
    pricePaid?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productSkuId?: boolean
    quantity?: boolean
    pricePaid?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productSkuId?: boolean
    quantity?: boolean
    pricePaid?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productSkuId?: boolean
    quantity?: boolean
    pricePaid?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productSkuId" | "quantity" | "pricePaid", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      productSku: Prisma.$ProductSkuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productSkuId: string
      quantity: number
      pricePaid: Prisma.Decimal
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productSku<T extends ProductSkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductSkuDefaultArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productSkuId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly pricePaid: FieldRef<"OrderItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    inquiryType: $Enums.InquiryType | null
    message: string | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    inquiryType: $Enums.InquiryType | null
    message: string | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    name: number
    email: number
    inquiryType: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InquiryMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    inquiryType?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    inquiryType?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    inquiryType?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: string
    name: string
    email: string
    inquiryType: $Enums.InquiryType
    message: string
    status: $Enums.InquiryStatus
    createdAt: Date
    updatedAt: Date
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    inquiryType?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    inquiryType?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    inquiryType?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    inquiryType?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "inquiryType" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["inquiry"]>

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      inquiryType: $Enums.InquiryType
      message: string
      status: $Enums.InquiryStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inquiries and returns the data saved in the database.
     * @param {InquiryCreateManyAndReturnArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, InquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries and returns the data updated in the database.
     * @param {InquiryUpdateManyAndReturnArgs} args - Arguments to update many Inquiries.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.updateManyAndReturn({
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
    updateManyAndReturn<T extends InquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, InquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'String'>
    readonly name: FieldRef<"Inquiry", 'String'>
    readonly email: FieldRef<"Inquiry", 'String'>
    readonly inquiryType: FieldRef<"Inquiry", 'InquiryType'>
    readonly message: FieldRef<"Inquiry", 'String'>
    readonly status: FieldRef<"Inquiry", 'InquiryStatus'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry createManyAndReturn
   */
  export type InquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry updateManyAndReturn
   */
  export type InquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
  }


  /**
   * Model Newsletter
   */

  export type AggregateNewsletter = {
    _count: NewsletterCountAggregateOutputType | null
    _min: NewsletterMinAggregateOutputType | null
    _max: NewsletterMaxAggregateOutputType | null
  }

  export type NewsletterMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type NewsletterMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type NewsletterCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    _all: number
  }


  export type NewsletterMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type NewsletterMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type NewsletterCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type NewsletterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newsletter to aggregate.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Newsletters
    **/
    _count?: true | NewsletterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterMaxAggregateInputType
  }

  export type GetNewsletterAggregateType<T extends NewsletterAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletter[P]>
      : GetScalarType<T[P], AggregateNewsletter[P]>
  }




  export type NewsletterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterWhereInput
    orderBy?: NewsletterOrderByWithAggregationInput | NewsletterOrderByWithAggregationInput[]
    by: NewsletterScalarFieldEnum[] | NewsletterScalarFieldEnum
    having?: NewsletterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterCountAggregateInputType | true
    _min?: NewsletterMinAggregateInputType
    _max?: NewsletterMaxAggregateInputType
  }

  export type NewsletterGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    _count: NewsletterCountAggregateOutputType | null
    _min: NewsletterMinAggregateOutputType | null
    _max: NewsletterMaxAggregateOutputType | null
  }

  type GetNewsletterGroupByPayload<T extends NewsletterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletter"]>

  export type NewsletterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletter"]>

  export type NewsletterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletter"]>

  export type NewsletterSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type NewsletterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt", ExtArgs["result"]["newsletter"]>

  export type $NewsletterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Newsletter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["newsletter"]>
    composites: {}
  }

  type NewsletterGetPayload<S extends boolean | null | undefined | NewsletterDefaultArgs> = $Result.GetResult<Prisma.$NewsletterPayload, S>

  type NewsletterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterCountAggregateInputType | true
    }

  export interface NewsletterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Newsletter'], meta: { name: 'Newsletter' } }
    /**
     * Find zero or one Newsletter that matches the filter.
     * @param {NewsletterFindUniqueArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterFindUniqueArgs>(args: SelectSubset<T, NewsletterFindUniqueArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Newsletter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterFindUniqueOrThrowArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindFirstArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterFindFirstArgs>(args?: SelectSubset<T, NewsletterFindFirstArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newsletter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindFirstOrThrowArgs} args - Arguments to find a Newsletter
     * @example
     * // Get one Newsletter
     * const newsletter = await prisma.newsletter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Newsletters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Newsletters
     * const newsletters = await prisma.newsletter.findMany()
     * 
     * // Get first 10 Newsletters
     * const newsletters = await prisma.newsletter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterWithIdOnly = await prisma.newsletter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterFindManyArgs>(args?: SelectSubset<T, NewsletterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Newsletter.
     * @param {NewsletterCreateArgs} args - Arguments to create a Newsletter.
     * @example
     * // Create one Newsletter
     * const Newsletter = await prisma.newsletter.create({
     *   data: {
     *     // ... data to create a Newsletter
     *   }
     * })
     * 
     */
    create<T extends NewsletterCreateArgs>(args: SelectSubset<T, NewsletterCreateArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Newsletters.
     * @param {NewsletterCreateManyArgs} args - Arguments to create many Newsletters.
     * @example
     * // Create many Newsletters
     * const newsletter = await prisma.newsletter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterCreateManyArgs>(args?: SelectSubset<T, NewsletterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Newsletters and returns the data saved in the database.
     * @param {NewsletterCreateManyAndReturnArgs} args - Arguments to create many Newsletters.
     * @example
     * // Create many Newsletters
     * const newsletter = await prisma.newsletter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Newsletters and only return the `id`
     * const newsletterWithIdOnly = await prisma.newsletter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsletterCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsletterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Newsletter.
     * @param {NewsletterDeleteArgs} args - Arguments to delete one Newsletter.
     * @example
     * // Delete one Newsletter
     * const Newsletter = await prisma.newsletter.delete({
     *   where: {
     *     // ... filter to delete one Newsletter
     *   }
     * })
     * 
     */
    delete<T extends NewsletterDeleteArgs>(args: SelectSubset<T, NewsletterDeleteArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Newsletter.
     * @param {NewsletterUpdateArgs} args - Arguments to update one Newsletter.
     * @example
     * // Update one Newsletter
     * const newsletter = await prisma.newsletter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterUpdateArgs>(args: SelectSubset<T, NewsletterUpdateArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Newsletters.
     * @param {NewsletterDeleteManyArgs} args - Arguments to filter Newsletters to delete.
     * @example
     * // Delete a few Newsletters
     * const { count } = await prisma.newsletter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterDeleteManyArgs>(args?: SelectSubset<T, NewsletterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Newsletters
     * const newsletter = await prisma.newsletter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterUpdateManyArgs>(args: SelectSubset<T, NewsletterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newsletters and returns the data updated in the database.
     * @param {NewsletterUpdateManyAndReturnArgs} args - Arguments to update many Newsletters.
     * @example
     * // Update many Newsletters
     * const newsletter = await prisma.newsletter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Newsletters and only return the `id`
     * const newsletterWithIdOnly = await prisma.newsletter.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsletterUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsletterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Newsletter.
     * @param {NewsletterUpsertArgs} args - Arguments to update or create a Newsletter.
     * @example
     * // Update or create a Newsletter
     * const newsletter = await prisma.newsletter.upsert({
     *   create: {
     *     // ... data to create a Newsletter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Newsletter we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterUpsertArgs>(args: SelectSubset<T, NewsletterUpsertArgs<ExtArgs>>): Prisma__NewsletterClient<$Result.GetResult<Prisma.$NewsletterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Newsletters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterCountArgs} args - Arguments to filter Newsletters to count.
     * @example
     * // Count the number of Newsletters
     * const count = await prisma.newsletter.count({
     *   where: {
     *     // ... the filter for the Newsletters we want to count
     *   }
     * })
    **/
    count<T extends NewsletterCountArgs>(
      args?: Subset<T, NewsletterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Newsletter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsletterAggregateArgs>(args: Subset<T, NewsletterAggregateArgs>): Prisma.PrismaPromise<GetNewsletterAggregateType<T>>

    /**
     * Group by Newsletter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterGroupByArgs} args - Group by arguments.
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
      T extends NewsletterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsletterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Newsletter model
   */
  readonly fields: NewsletterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Newsletter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Newsletter model
   */
  interface NewsletterFieldRefs {
    readonly id: FieldRef<"Newsletter", 'String'>
    readonly email: FieldRef<"Newsletter", 'String'>
    readonly createdAt: FieldRef<"Newsletter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Newsletter findUnique
   */
  export type NewsletterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter findUniqueOrThrow
   */
  export type NewsletterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter findFirst
   */
  export type NewsletterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter findFirstOrThrow
   */
  export type NewsletterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletter to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter findMany
   */
  export type NewsletterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter, which Newsletters to fetch.
     */
    where?: NewsletterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newsletters to fetch.
     */
    orderBy?: NewsletterOrderByWithRelationInput | NewsletterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Newsletters.
     */
    cursor?: NewsletterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newsletters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newsletters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newsletters.
     */
    distinct?: NewsletterScalarFieldEnum | NewsletterScalarFieldEnum[]
  }

  /**
   * Newsletter create
   */
  export type NewsletterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data needed to create a Newsletter.
     */
    data: XOR<NewsletterCreateInput, NewsletterUncheckedCreateInput>
  }

  /**
   * Newsletter createMany
   */
  export type NewsletterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Newsletters.
     */
    data: NewsletterCreateManyInput | NewsletterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Newsletter createManyAndReturn
   */
  export type NewsletterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data used to create many Newsletters.
     */
    data: NewsletterCreateManyInput | NewsletterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Newsletter update
   */
  export type NewsletterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data needed to update a Newsletter.
     */
    data: XOR<NewsletterUpdateInput, NewsletterUncheckedUpdateInput>
    /**
     * Choose, which Newsletter to update.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter updateMany
   */
  export type NewsletterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Newsletters.
     */
    data: XOR<NewsletterUpdateManyMutationInput, NewsletterUncheckedUpdateManyInput>
    /**
     * Filter which Newsletters to update
     */
    where?: NewsletterWhereInput
    /**
     * Limit how many Newsletters to update.
     */
    limit?: number
  }

  /**
   * Newsletter updateManyAndReturn
   */
  export type NewsletterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The data used to update Newsletters.
     */
    data: XOR<NewsletterUpdateManyMutationInput, NewsletterUncheckedUpdateManyInput>
    /**
     * Filter which Newsletters to update
     */
    where?: NewsletterWhereInput
    /**
     * Limit how many Newsletters to update.
     */
    limit?: number
  }

  /**
   * Newsletter upsert
   */
  export type NewsletterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * The filter to search for the Newsletter to update in case it exists.
     */
    where: NewsletterWhereUniqueInput
    /**
     * In case the Newsletter found by the `where` argument doesn't exist, create a new Newsletter with this data.
     */
    create: XOR<NewsletterCreateInput, NewsletterUncheckedCreateInput>
    /**
     * In case the Newsletter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterUpdateInput, NewsletterUncheckedUpdateInput>
  }

  /**
   * Newsletter delete
   */
  export type NewsletterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
    /**
     * Filter which Newsletter to delete.
     */
    where: NewsletterWhereUniqueInput
  }

  /**
   * Newsletter deleteMany
   */
  export type NewsletterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newsletters to delete
     */
    where?: NewsletterWhereInput
    /**
     * Limit how many Newsletters to delete.
     */
    limit?: number
  }

  /**
   * Newsletter without action
   */
  export type NewsletterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newsletter
     */
    select?: NewsletterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newsletter
     */
    omit?: NewsletterOmit<ExtArgs> | null
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


  export const ProductScalarFieldEnum: {
    id: 'id',
    serial: 'serial',
    name: 'name',
    price: 'price',
    category: 'category',
    composition: 'composition',
    details: 'details',
    measurements: 'measurements',
    images: 'images',
    isActive: 'isActive',
    placement: 'placement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const AnalyticsHitScalarFieldEnum: {
    id: 'id',
    ipHash: 'ipHash',
    timestamp: 'timestamp'
  };

  export type AnalyticsHitScalarFieldEnum = (typeof AnalyticsHitScalarFieldEnum)[keyof typeof AnalyticsHitScalarFieldEnum]


  export const ProductSkuScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    color: 'color',
    size: 'size',
    stock: 'stock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductSkuScalarFieldEnum = (typeof ProductSkuScalarFieldEnum)[keyof typeof ProductSkuScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    shippingAddress: 'shippingAddress',
    totalAmount: 'totalAmount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productSkuId: 'productSkuId',
    quantity: 'quantity',
    pricePaid: 'pricePaid'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    inquiryType: 'inquiryType',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const NewsletterScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type NewsletterScalarFieldEnum = (typeof NewsletterScalarFieldEnum)[keyof typeof NewsletterScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SectionPlacement'
   */
  export type EnumSectionPlacementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SectionPlacement'>
    


  /**
   * Reference to a field of type 'SectionPlacement[]'
   */
  export type ListEnumSectionPlacementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SectionPlacement[]'>
    


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
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'InquiryType'
   */
  export type EnumInquiryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryType'>
    


  /**
   * Reference to a field of type 'InquiryType[]'
   */
  export type ListEnumInquiryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryType[]'>
    


  /**
   * Reference to a field of type 'InquiryStatus'
   */
  export type EnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus'>
    


  /**
   * Reference to a field of type 'InquiryStatus[]'
   */
  export type ListEnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    serial?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Product"> | string
    composition?: StringFilter<"Product"> | string
    details?: StringFilter<"Product"> | string
    measurements?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    isActive?: BoolFilter<"Product"> | boolean
    placement?: EnumSectionPlacementFilter<"Product"> | $Enums.SectionPlacement
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    skus?: ProductSkuListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    serial?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    composition?: SortOrder
    details?: SortOrder
    measurements?: SortOrder
    images?: SortOrder
    isActive?: SortOrder
    placement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skus?: ProductSkuOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serial?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Product"> | string
    composition?: StringFilter<"Product"> | string
    details?: StringFilter<"Product"> | string
    measurements?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    isActive?: BoolFilter<"Product"> | boolean
    placement?: EnumSectionPlacementFilter<"Product"> | $Enums.SectionPlacement
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    skus?: ProductSkuListRelationFilter
  }, "id" | "serial">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    serial?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    composition?: SortOrder
    details?: SortOrder
    measurements?: SortOrder
    images?: SortOrder
    isActive?: SortOrder
    placement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    serial?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    category?: StringWithAggregatesFilter<"Product"> | string
    composition?: StringWithAggregatesFilter<"Product"> | string
    details?: StringWithAggregatesFilter<"Product"> | string
    measurements?: StringWithAggregatesFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    placement?: EnumSectionPlacementWithAggregatesFilter<"Product"> | $Enums.SectionPlacement
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type AnalyticsHitWhereInput = {
    AND?: AnalyticsHitWhereInput | AnalyticsHitWhereInput[]
    OR?: AnalyticsHitWhereInput[]
    NOT?: AnalyticsHitWhereInput | AnalyticsHitWhereInput[]
    id?: StringFilter<"AnalyticsHit"> | string
    ipHash?: StringFilter<"AnalyticsHit"> | string
    timestamp?: DateTimeFilter<"AnalyticsHit"> | Date | string
  }

  export type AnalyticsHitOrderByWithRelationInput = {
    id?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsHitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsHitWhereInput | AnalyticsHitWhereInput[]
    OR?: AnalyticsHitWhereInput[]
    NOT?: AnalyticsHitWhereInput | AnalyticsHitWhereInput[]
    ipHash?: StringFilter<"AnalyticsHit"> | string
    timestamp?: DateTimeFilter<"AnalyticsHit"> | Date | string
  }, "id">

  export type AnalyticsHitOrderByWithAggregationInput = {
    id?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
    _count?: AnalyticsHitCountOrderByAggregateInput
    _max?: AnalyticsHitMaxOrderByAggregateInput
    _min?: AnalyticsHitMinOrderByAggregateInput
  }

  export type AnalyticsHitScalarWhereWithAggregatesInput = {
    AND?: AnalyticsHitScalarWhereWithAggregatesInput | AnalyticsHitScalarWhereWithAggregatesInput[]
    OR?: AnalyticsHitScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsHitScalarWhereWithAggregatesInput | AnalyticsHitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalyticsHit"> | string
    ipHash?: StringWithAggregatesFilter<"AnalyticsHit"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AnalyticsHit"> | Date | string
  }

  export type ProductSkuWhereInput = {
    AND?: ProductSkuWhereInput | ProductSkuWhereInput[]
    OR?: ProductSkuWhereInput[]
    NOT?: ProductSkuWhereInput | ProductSkuWhereInput[]
    id?: StringFilter<"ProductSku"> | string
    productId?: StringFilter<"ProductSku"> | string
    color?: StringFilter<"ProductSku"> | string
    size?: StringFilter<"ProductSku"> | string
    stock?: IntFilter<"ProductSku"> | number
    createdAt?: DateTimeFilter<"ProductSku"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSku"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductSkuOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductSkuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_color_size?: ProductSkuProductIdColorSizeCompoundUniqueInput
    AND?: ProductSkuWhereInput | ProductSkuWhereInput[]
    OR?: ProductSkuWhereInput[]
    NOT?: ProductSkuWhereInput | ProductSkuWhereInput[]
    productId?: StringFilter<"ProductSku"> | string
    color?: StringFilter<"ProductSku"> | string
    size?: StringFilter<"ProductSku"> | string
    stock?: IntFilter<"ProductSku"> | number
    createdAt?: DateTimeFilter<"ProductSku"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSku"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id" | "productId_color_size">

  export type ProductSkuOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductSkuCountOrderByAggregateInput
    _avg?: ProductSkuAvgOrderByAggregateInput
    _max?: ProductSkuMaxOrderByAggregateInput
    _min?: ProductSkuMinOrderByAggregateInput
    _sum?: ProductSkuSumOrderByAggregateInput
  }

  export type ProductSkuScalarWhereWithAggregatesInput = {
    AND?: ProductSkuScalarWhereWithAggregatesInput | ProductSkuScalarWhereWithAggregatesInput[]
    OR?: ProductSkuScalarWhereWithAggregatesInput[]
    NOT?: ProductSkuScalarWhereWithAggregatesInput | ProductSkuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductSku"> | string
    productId?: StringWithAggregatesFilter<"ProductSku"> | string
    color?: StringWithAggregatesFilter<"ProductSku"> | string
    size?: StringWithAggregatesFilter<"ProductSku"> | string
    stock?: IntWithAggregatesFilter<"ProductSku"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductSku"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductSku"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    reference?: StringFilter<"Order"> | string
    customerName?: StringFilter<"Order"> | string
    customerEmail?: StringFilter<"Order"> | string
    customerPhone?: StringFilter<"Order"> | string
    shippingAddress?: StringFilter<"Order"> | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    shippingAddress?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerName?: StringFilter<"Order"> | string
    customerEmail?: StringFilter<"Order"> | string
    customerPhone?: StringFilter<"Order"> | string
    shippingAddress?: StringFilter<"Order"> | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    items?: OrderItemListRelationFilter
  }, "id" | "reference">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    shippingAddress?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    reference?: StringWithAggregatesFilter<"Order"> | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    customerEmail?: StringWithAggregatesFilter<"Order"> | string
    customerPhone?: StringWithAggregatesFilter<"Order"> | string
    shippingAddress?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productSkuId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    pricePaid?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productSkuId?: SortOrder
    quantity?: SortOrder
    pricePaid?: SortOrder
    order?: OrderOrderByWithRelationInput
    productSku?: ProductSkuOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productSkuId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    pricePaid?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productSkuId?: SortOrder
    quantity?: SortOrder
    pricePaid?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productSkuId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    pricePaid?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    name?: StringFilter<"Inquiry"> | string
    email?: StringFilter<"Inquiry"> | string
    inquiryType?: EnumInquiryTypeFilter<"Inquiry"> | $Enums.InquiryType
    message?: StringFilter<"Inquiry"> | string
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    inquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    name?: StringFilter<"Inquiry"> | string
    email?: StringFilter<"Inquiry"> | string
    inquiryType?: EnumInquiryTypeFilter<"Inquiry"> | $Enums.InquiryType
    message?: StringFilter<"Inquiry"> | string
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Inquiry"> | Date | string
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    inquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inquiry"> | string
    name?: StringWithAggregatesFilter<"Inquiry"> | string
    email?: StringWithAggregatesFilter<"Inquiry"> | string
    inquiryType?: EnumInquiryTypeWithAggregatesFilter<"Inquiry"> | $Enums.InquiryType
    message?: StringWithAggregatesFilter<"Inquiry"> | string
    status?: EnumInquiryStatusWithAggregatesFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
  }

  export type NewsletterWhereInput = {
    AND?: NewsletterWhereInput | NewsletterWhereInput[]
    OR?: NewsletterWhereInput[]
    NOT?: NewsletterWhereInput | NewsletterWhereInput[]
    id?: StringFilter<"Newsletter"> | string
    email?: StringFilter<"Newsletter"> | string
    createdAt?: DateTimeFilter<"Newsletter"> | Date | string
  }

  export type NewsletterOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: NewsletterWhereInput | NewsletterWhereInput[]
    OR?: NewsletterWhereInput[]
    NOT?: NewsletterWhereInput | NewsletterWhereInput[]
    createdAt?: DateTimeFilter<"Newsletter"> | Date | string
  }, "id" | "email">

  export type NewsletterOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: NewsletterCountOrderByAggregateInput
    _max?: NewsletterMaxOrderByAggregateInput
    _min?: NewsletterMinOrderByAggregateInput
  }

  export type NewsletterScalarWhereWithAggregatesInput = {
    AND?: NewsletterScalarWhereWithAggregatesInput | NewsletterScalarWhereWithAggregatesInput[]
    OR?: NewsletterScalarWhereWithAggregatesInput[]
    NOT?: NewsletterScalarWhereWithAggregatesInput | NewsletterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Newsletter"> | string
    email?: StringWithAggregatesFilter<"Newsletter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Newsletter"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    serial: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    composition: string
    details: string
    measurements: string
    images?: ProductCreateimagesInput | string[]
    isActive?: boolean
    placement?: $Enums.SectionPlacement
    createdAt?: Date | string
    updatedAt?: Date | string
    skus?: ProductSkuCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    serial: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    composition: string
    details: string
    measurements: string
    images?: ProductCreateimagesInput | string[]
    isActive?: boolean
    placement?: $Enums.SectionPlacement
    createdAt?: Date | string
    updatedAt?: Date | string
    skus?: ProductSkuUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    measurements?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    placement?: EnumSectionPlacementFieldUpdateOperationsInput | $Enums.SectionPlacement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skus?: ProductSkuUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    measurements?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    placement?: EnumSectionPlacementFieldUpdateOperationsInput | $Enums.SectionPlacement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skus?: ProductSkuUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    serial: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    composition: string
    details: string
    measurements: string
    images?: ProductCreateimagesInput | string[]
    isActive?: boolean
    placement?: $Enums.SectionPlacement
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    measurements?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    placement?: EnumSectionPlacementFieldUpdateOperationsInput | $Enums.SectionPlacement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    measurements?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    placement?: EnumSectionPlacementFieldUpdateOperationsInput | $Enums.SectionPlacement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsHitCreateInput = {
    id?: string
    ipHash: string
    timestamp?: Date | string
  }

  export type AnalyticsHitUncheckedCreateInput = {
    id?: string
    ipHash: string
    timestamp?: Date | string
  }

  export type AnalyticsHitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsHitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsHitCreateManyInput = {
    id?: string
    ipHash: string
    timestamp?: Date | string
  }

  export type AnalyticsHitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsHitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSkuCreateInput = {
    id?: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutSkusInput
    orderItems?: OrderItemCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUncheckedCreateInput = {
    id?: string
    productId: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutSkusNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuCreateManyInput = {
    id?: string
    productId: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSkuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSkuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    reference: string
    customerName: string
    customerEmail: string
    customerPhone: string
    shippingAddress: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    reference: string
    customerName: string
    customerEmail: string
    customerPhone: string
    shippingAddress: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    reference: string
    customerName: string
    customerEmail: string
    customerPhone: string
    shippingAddress: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
    order: OrderCreateNestedOneWithoutItemsInput
    productSku: ProductSkuCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productSkuId: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    productSku?: ProductSkuUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productSkuId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productSkuId: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productSkuId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InquiryCreateInput = {
    id?: string
    name: string
    email: string
    inquiryType?: $Enums.InquiryType
    message: string
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    inquiryType?: $Enums.InquiryType
    message: string
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inquiryType?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inquiryType?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateManyInput = {
    id?: string
    name: string
    email: string
    inquiryType?: $Enums.InquiryType
    message: string
    status?: $Enums.InquiryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inquiryType?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    inquiryType?: EnumInquiryTypeFieldUpdateOperationsInput | $Enums.InquiryType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type NewsletterUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type NewsletterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type NewsletterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSectionPlacementFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionPlacement | EnumSectionPlacementFieldRefInput<$PrismaModel>
    in?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionPlacementFilter<$PrismaModel> | $Enums.SectionPlacement
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

  export type ProductSkuListRelationFilter = {
    every?: ProductSkuWhereInput
    some?: ProductSkuWhereInput
    none?: ProductSkuWhereInput
  }

  export type ProductSkuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    composition?: SortOrder
    details?: SortOrder
    measurements?: SortOrder
    images?: SortOrder
    isActive?: SortOrder
    placement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    composition?: SortOrder
    details?: SortOrder
    measurements?: SortOrder
    isActive?: SortOrder
    placement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
    name?: SortOrder
    price?: SortOrder
    category?: SortOrder
    composition?: SortOrder
    details?: SortOrder
    measurements?: SortOrder
    isActive?: SortOrder
    placement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSectionPlacementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionPlacement | EnumSectionPlacementFieldRefInput<$PrismaModel>
    in?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionPlacementWithAggregatesFilter<$PrismaModel> | $Enums.SectionPlacement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionPlacementFilter<$PrismaModel>
    _max?: NestedEnumSectionPlacementFilter<$PrismaModel>
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

  export type AnalyticsHitCountOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsHitMaxOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
  }

  export type AnalyticsHitMinOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    timestamp?: SortOrder
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

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSkuProductIdColorSizeCompoundUniqueInput = {
    productId: string
    color: string
    size: string
  }

  export type ProductSkuCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSkuAvgOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type ProductSkuMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSkuMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    color?: SortOrder
    size?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSkuSumOrderByAggregateInput = {
    stock?: SortOrder
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

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    shippingAddress?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    shippingAddress?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    shippingAddress?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductSkuScalarRelationFilter = {
    is?: ProductSkuWhereInput
    isNot?: ProductSkuWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productSkuId?: SortOrder
    quantity?: SortOrder
    pricePaid?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    pricePaid?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productSkuId?: SortOrder
    quantity?: SortOrder
    pricePaid?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productSkuId?: SortOrder
    quantity?: SortOrder
    pricePaid?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    pricePaid?: SortOrder
  }

  export type EnumInquiryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryTypeFilter<$PrismaModel> | $Enums.InquiryType
  }

  export type EnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    inquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    inquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    inquiryType?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumInquiryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryTypeWithAggregatesFilter<$PrismaModel> | $Enums.InquiryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryTypeFilter<$PrismaModel>
    _max?: NestedEnumInquiryTypeFilter<$PrismaModel>
  }

  export type EnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type NewsletterCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductCreateimagesInput = {
    set: string[]
  }

  export type ProductSkuCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSkuCreateWithoutProductInput, ProductSkuUncheckedCreateWithoutProductInput> | ProductSkuCreateWithoutProductInput[] | ProductSkuUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSkuCreateOrConnectWithoutProductInput | ProductSkuCreateOrConnectWithoutProductInput[]
    createMany?: ProductSkuCreateManyProductInputEnvelope
    connect?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
  }

  export type ProductSkuUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSkuCreateWithoutProductInput, ProductSkuUncheckedCreateWithoutProductInput> | ProductSkuCreateWithoutProductInput[] | ProductSkuUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSkuCreateOrConnectWithoutProductInput | ProductSkuCreateOrConnectWithoutProductInput[]
    createMany?: ProductSkuCreateManyProductInputEnvelope
    connect?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSectionPlacementFieldUpdateOperationsInput = {
    set?: $Enums.SectionPlacement
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductSkuUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSkuCreateWithoutProductInput, ProductSkuUncheckedCreateWithoutProductInput> | ProductSkuCreateWithoutProductInput[] | ProductSkuUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSkuCreateOrConnectWithoutProductInput | ProductSkuCreateOrConnectWithoutProductInput[]
    upsert?: ProductSkuUpsertWithWhereUniqueWithoutProductInput | ProductSkuUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSkuCreateManyProductInputEnvelope
    set?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    disconnect?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    delete?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    connect?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    update?: ProductSkuUpdateWithWhereUniqueWithoutProductInput | ProductSkuUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSkuUpdateManyWithWhereWithoutProductInput | ProductSkuUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSkuScalarWhereInput | ProductSkuScalarWhereInput[]
  }

  export type ProductSkuUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSkuCreateWithoutProductInput, ProductSkuUncheckedCreateWithoutProductInput> | ProductSkuCreateWithoutProductInput[] | ProductSkuUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSkuCreateOrConnectWithoutProductInput | ProductSkuCreateOrConnectWithoutProductInput[]
    upsert?: ProductSkuUpsertWithWhereUniqueWithoutProductInput | ProductSkuUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSkuCreateManyProductInputEnvelope
    set?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    disconnect?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    delete?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    connect?: ProductSkuWhereUniqueInput | ProductSkuWhereUniqueInput[]
    update?: ProductSkuUpdateWithWhereUniqueWithoutProductInput | ProductSkuUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSkuUpdateManyWithWhereWithoutProductInput | ProductSkuUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSkuScalarWhereInput | ProductSkuScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSkusInput = {
    create?: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSkusInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<OrderItemCreateWithoutProductSkuInput, OrderItemUncheckedCreateWithoutProductSkuInput> | OrderItemCreateWithoutProductSkuInput[] | OrderItemUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductSkuInput | OrderItemCreateOrConnectWithoutProductSkuInput[]
    createMany?: OrderItemCreateManyProductSkuInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<OrderItemCreateWithoutProductSkuInput, OrderItemUncheckedCreateWithoutProductSkuInput> | OrderItemCreateWithoutProductSkuInput[] | OrderItemUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductSkuInput | OrderItemCreateOrConnectWithoutProductSkuInput[]
    createMany?: OrderItemCreateManyProductSkuInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutSkusNestedInput = {
    create?: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSkusInput
    upsert?: ProductUpsertWithoutSkusInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSkusInput, ProductUpdateWithoutSkusInput>, ProductUncheckedUpdateWithoutSkusInput>
  }

  export type OrderItemUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductSkuInput, OrderItemUncheckedCreateWithoutProductSkuInput> | OrderItemCreateWithoutProductSkuInput[] | OrderItemUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductSkuInput | OrderItemCreateOrConnectWithoutProductSkuInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductSkuInput | OrderItemUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: OrderItemCreateManyProductSkuInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductSkuInput | OrderItemUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductSkuInput | OrderItemUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductSkuInput, OrderItemUncheckedCreateWithoutProductSkuInput> | OrderItemCreateWithoutProductSkuInput[] | OrderItemUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductSkuInput | OrderItemCreateOrConnectWithoutProductSkuInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductSkuInput | OrderItemUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: OrderItemCreateManyProductSkuInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductSkuInput | OrderItemUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductSkuInput | OrderItemUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductSkuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductSkuCreateWithoutOrderItemsInput, ProductSkuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutOrderItemsInput
    connect?: ProductSkuWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductSkuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductSkuCreateWithoutOrderItemsInput, ProductSkuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductSkuUpsertWithoutOrderItemsInput
    connect?: ProductSkuWhereUniqueInput
    update?: XOR<XOR<ProductSkuUpdateToOneWithWhereWithoutOrderItemsInput, ProductSkuUpdateWithoutOrderItemsInput>, ProductSkuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type EnumInquiryTypeFieldUpdateOperationsInput = {
    set?: $Enums.InquiryType
  }

  export type EnumInquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InquiryStatus
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSectionPlacementFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionPlacement | EnumSectionPlacementFieldRefInput<$PrismaModel>
    in?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionPlacementFilter<$PrismaModel> | $Enums.SectionPlacement
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSectionPlacementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionPlacement | EnumSectionPlacementFieldRefInput<$PrismaModel>
    in?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    notIn?: $Enums.SectionPlacement[] | ListEnumSectionPlacementFieldRefInput<$PrismaModel>
    not?: NestedEnumSectionPlacementWithAggregatesFilter<$PrismaModel> | $Enums.SectionPlacement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionPlacementFilter<$PrismaModel>
    _max?: NestedEnumSectionPlacementFilter<$PrismaModel>
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

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumInquiryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryTypeFilter<$PrismaModel> | $Enums.InquiryType
  }

  export type NestedEnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type NestedEnumInquiryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryType | EnumInquiryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryType[] | ListEnumInquiryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryTypeWithAggregatesFilter<$PrismaModel> | $Enums.InquiryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryTypeFilter<$PrismaModel>
    _max?: NestedEnumInquiryTypeFilter<$PrismaModel>
  }

  export type NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InquiryStatus[] | ListEnumInquiryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type ProductSkuCreateWithoutProductInput = {
    id?: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUncheckedCreateWithoutProductInput = {
    id?: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuCreateOrConnectWithoutProductInput = {
    where: ProductSkuWhereUniqueInput
    create: XOR<ProductSkuCreateWithoutProductInput, ProductSkuUncheckedCreateWithoutProductInput>
  }

  export type ProductSkuCreateManyProductInputEnvelope = {
    data: ProductSkuCreateManyProductInput | ProductSkuCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductSkuUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSkuWhereUniqueInput
    update: XOR<ProductSkuUpdateWithoutProductInput, ProductSkuUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSkuCreateWithoutProductInput, ProductSkuUncheckedCreateWithoutProductInput>
  }

  export type ProductSkuUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSkuWhereUniqueInput
    data: XOR<ProductSkuUpdateWithoutProductInput, ProductSkuUncheckedUpdateWithoutProductInput>
  }

  export type ProductSkuUpdateManyWithWhereWithoutProductInput = {
    where: ProductSkuScalarWhereInput
    data: XOR<ProductSkuUpdateManyMutationInput, ProductSkuUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSkuScalarWhereInput = {
    AND?: ProductSkuScalarWhereInput | ProductSkuScalarWhereInput[]
    OR?: ProductSkuScalarWhereInput[]
    NOT?: ProductSkuScalarWhereInput | ProductSkuScalarWhereInput[]
    id?: StringFilter<"ProductSku"> | string
    productId?: StringFilter<"ProductSku"> | string
    color?: StringFilter<"ProductSku"> | string
    size?: StringFilter<"ProductSku"> | string
    stock?: IntFilter<"ProductSku"> | number
    createdAt?: DateTimeFilter<"ProductSku"> | Date | string
    updatedAt?: DateTimeFilter<"ProductSku"> | Date | string
  }

  export type ProductCreateWithoutSkusInput = {
    id?: string
    serial: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    composition: string
    details: string
    measurements: string
    images?: ProductCreateimagesInput | string[]
    isActive?: boolean
    placement?: $Enums.SectionPlacement
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutSkusInput = {
    id?: string
    serial: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    composition: string
    details: string
    measurements: string
    images?: ProductCreateimagesInput | string[]
    isActive?: boolean
    placement?: $Enums.SectionPlacement
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSkusInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
  }

  export type OrderItemCreateWithoutProductSkuInput = {
    id?: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductSkuInput = {
    id?: string
    orderId: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemCreateOrConnectWithoutProductSkuInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductSkuInput, OrderItemUncheckedCreateWithoutProductSkuInput>
  }

  export type OrderItemCreateManyProductSkuInputEnvelope = {
    data: OrderItemCreateManyProductSkuInput | OrderItemCreateManyProductSkuInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutSkusInput = {
    update: XOR<ProductUpdateWithoutSkusInput, ProductUncheckedUpdateWithoutSkusInput>
    create: XOR<ProductCreateWithoutSkusInput, ProductUncheckedCreateWithoutSkusInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSkusInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSkusInput, ProductUncheckedUpdateWithoutSkusInput>
  }

  export type ProductUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    measurements?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    placement?: EnumSectionPlacementFieldUpdateOperationsInput | $Enums.SectionPlacement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutSkusInput = {
    id?: StringFieldUpdateOperationsInput | string
    serial?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    composition?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    measurements?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    placement?: EnumSectionPlacementFieldUpdateOperationsInput | $Enums.SectionPlacement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductSkuInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductSkuInput, OrderItemUncheckedUpdateWithoutProductSkuInput>
    create: XOR<OrderItemCreateWithoutProductSkuInput, OrderItemUncheckedCreateWithoutProductSkuInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductSkuInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductSkuInput, OrderItemUncheckedUpdateWithoutProductSkuInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductSkuInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductSkuInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productSkuId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    pricePaid?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
    productSku: ProductSkuCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productSkuId: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    reference: string
    customerName: string
    customerEmail: string
    customerPhone: string
    shippingAddress: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    reference: string
    customerName: string
    customerEmail: string
    customerPhone: string
    shippingAddress: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductSkuCreateWithoutOrderItemsInput = {
    id?: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutSkusInput
  }

  export type ProductSkuUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    productId: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSkuCreateOrConnectWithoutOrderItemsInput = {
    where: ProductSkuWhereUniqueInput
    create: XOR<ProductSkuCreateWithoutOrderItemsInput, ProductSkuUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSkuUpsertWithoutOrderItemsInput = {
    update: XOR<ProductSkuUpdateWithoutOrderItemsInput, ProductSkuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductSkuCreateWithoutOrderItemsInput, ProductSkuUncheckedCreateWithoutOrderItemsInput>
    where?: ProductSkuWhereInput
  }

  export type ProductSkuUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductSkuWhereInput
    data: XOR<ProductSkuUpdateWithoutOrderItemsInput, ProductSkuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductSkuUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutSkusNestedInput
  }

  export type ProductSkuUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSkuCreateManyProductInput = {
    id?: string
    color: string
    size: string
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductSkuUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyProductSkuInput = {
    id?: string
    orderId: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUpdateWithoutProductSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUncheckedUpdateManyWithoutProductSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productSkuId: string
    quantity: number
    pricePaid: Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    productSku?: ProductSkuUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productSkuId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productSkuId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePaid?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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