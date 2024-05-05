import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AddDeliveryStatusError = ParcelTrackingServiceError;

export type AddDeliveryStatusInput = {
  createDto: DeliveryStatusCreateDtoInput;
};

export type AddDeliveryStatusPayload = {
  __typename?: 'AddDeliveryStatusPayload';
  deliveryStatus?: Maybe<DeliveryStatus>;
  errors?: Maybe<Array<AddDeliveryStatusError>>;
};

export type AddParcelInput = {
  createDto: ParcelCreateDtoInput;
};

export type AddParcelPayload = {
  __typename?: 'AddParcelPayload';
  parcel?: Maybe<Parcel>;
};

export type AddPostOfficeError = ParcelTrackingServiceError;

export type AddPostOfficeInput = {
  createDto: PostOfficeCreateDtoInput;
};

export type AddPostOfficePayload = {
  __typename?: 'AddPostOfficePayload';
  errors?: Maybe<Array<AddPostOfficeError>>;
  postOffice?: Maybe<PostOffice>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DeleteDeliveryStatusByIdInput = {
  statusId: Scalars['UUID']['input'];
};

export type DeleteDeliveryStatusByIdPayload = {
  __typename?: 'DeleteDeliveryStatusByIdPayload';
  deliveryStatus?: Maybe<DeliveryStatus>;
};

export type DeleteParcelByIdInput = {
  parcelId: Scalars['UUID']['input'];
};

export type DeleteParcelByIdPayload = {
  __typename?: 'DeleteParcelByIdPayload';
  parcel?: Maybe<Parcel>;
};

export type DeletePostOfficeByIdInput = {
  officeId: Scalars['UUID']['input'];
};

export type DeletePostOfficeByIdPayload = {
  __typename?: 'DeletePostOfficeByIdPayload';
  postOffice?: Maybe<PostOffice>;
};

export type DeliveryStatus = {
  __typename?: 'DeliveryStatus';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  statusName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DeliveryStatusCreateDtoInput = {
  statusName: Scalars['String']['input'];
};

export type DeliveryStatusFilterInput = {
  and?: InputMaybe<Array<DeliveryStatusFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<DeliveryStatusFilterInput>>;
  statusName?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type DeliveryStatusPatchDtoInput = {
  statusName?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryStatusSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  statusName?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type DeliveryStatusesConnection = {
  __typename?: 'DeliveryStatusesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DeliveryStatusesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<DeliveryStatus>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DeliveryStatusesEdge = {
  __typename?: 'DeliveryStatusesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DeliveryStatus;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type ListFilterInputTypeOfParcelStatusFilterInput = {
  all?: InputMaybe<ParcelStatusFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ParcelStatusFilterInput>;
  some?: InputMaybe<ParcelStatusFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDeliveryStatus: AddDeliveryStatusPayload;
  addParcel: AddParcelPayload;
  addPostOffice: AddPostOfficePayload;
  deleteDeliveryStatusById: DeleteDeliveryStatusByIdPayload;
  deleteParcelById: DeleteParcelByIdPayload;
  deletePostOfficeById: DeletePostOfficeByIdPayload;
  pushOneMoreParcelStatus: PushOneMoreParcelStatusPayload;
  updateDeliveryStatus: UpdateDeliveryStatusPayload;
  updatePostOffice: UpdatePostOfficePayload;
};


export type MutationAddDeliveryStatusArgs = {
  input: AddDeliveryStatusInput;
};


export type MutationAddParcelArgs = {
  input: AddParcelInput;
};


export type MutationAddPostOfficeArgs = {
  input: AddPostOfficeInput;
};


export type MutationDeleteDeliveryStatusByIdArgs = {
  input: DeleteDeliveryStatusByIdInput;
};


export type MutationDeleteParcelByIdArgs = {
  input: DeleteParcelByIdInput;
};


export type MutationDeletePostOfficeByIdArgs = {
  input: DeletePostOfficeByIdInput;
};


export type MutationPushOneMoreParcelStatusArgs = {
  input: PushOneMoreParcelStatusInput;
};


export type MutationUpdateDeliveryStatusArgs = {
  input: UpdateDeliveryStatusInput;
};


export type MutationUpdatePostOfficeArgs = {
  input: UpdatePostOfficeInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Parcel = {
  __typename?: 'Parcel';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentStatus?: Maybe<ParcelStatus>;
  id: Scalars['UUID']['output'];
  parcelInfo: ParcelInfo;
  parcelInfoId: Scalars['UUID']['output'];
  parcelStatusHistory: Array<ParcelStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ParcelCreateDtoInput = {
  parcelInfo: ParcelInfoDtoInput;
  parcelStatusHistory?: InputMaybe<Array<ParcelStatusDtoInput>>;
};

export type ParcelFilterInput = {
  and?: InputMaybe<Array<ParcelFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ParcelFilterInput>>;
  parcelInfo?: InputMaybe<ParcelInfoFilterInput>;
  parcelInfoId?: InputMaybe<UuidOperationFilterInput>;
  parcelStatusHistory?: InputMaybe<ListFilterInputTypeOfParcelStatusFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

/** A connection to a list of items. */
export type ParcelHistoryConnection = {
  __typename?: 'ParcelHistoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ParcelHistoryEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ParcelStatus>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ParcelHistoryEdge = {
  __typename?: 'ParcelHistoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ParcelStatus;
};

export type ParcelInfo = {
  __typename?: 'ParcelInfo';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryDestinationAddress: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  parcelContentPrice: Scalars['Decimal']['output'];
  priceToPay: Scalars['Decimal']['output'];
  sender?: Maybe<User>;
  senderId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ParcelInfoDtoInput = {
  deliveryDestinationAddress: Scalars['String']['input'];
  description: Scalars['String']['input'];
  parcelContentPrice: Scalars['Decimal']['input'];
  priceToPay: Scalars['Decimal']['input'];
};

export type ParcelInfoFilterInput = {
  and?: InputMaybe<Array<ParcelInfoFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  deliveryDestinationAddress?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ParcelInfoFilterInput>>;
  parcelContentPrice?: InputMaybe<DecimalOperationFilterInput>;
  priceToPay?: InputMaybe<DecimalOperationFilterInput>;
  sender?: InputMaybe<UserFilterInput>;
  senderId?: InputMaybe<UuidOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ParcelInfoSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  deliveryDestinationAddress?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  parcelContentPrice?: InputMaybe<SortEnumType>;
  priceToPay?: InputMaybe<SortEnumType>;
  sender?: InputMaybe<UserSortInput>;
  senderId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ParcelNotFoundError = Error & {
  __typename?: 'ParcelNotFoundError';
  message: Scalars['String']['output'];
};

export type ParcelSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  parcelInfo?: InputMaybe<ParcelInfoSortInput>;
  parcelInfoId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ParcelStatus = {
  __typename?: 'ParcelStatus';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  deliveryStatus?: Maybe<DeliveryStatus>;
  deliveryStatusId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  parcel: Parcel;
  parcelId: Scalars['UUID']['output'];
  statusDescription: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ParcelStatusDtoInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  deliveryStatusId?: InputMaybe<Scalars['UUID']['input']>;
  statusDescription: Scalars['String']['input'];
};

export type ParcelStatusFilterInput = {
  and?: InputMaybe<Array<ParcelStatusFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  deliveryStatus?: InputMaybe<DeliveryStatusFilterInput>;
  deliveryStatusId?: InputMaybe<UuidOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ParcelStatusFilterInput>>;
  parcel?: InputMaybe<ParcelFilterInput>;
  parcelId?: InputMaybe<UuidOperationFilterInput>;
  statusDescription?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ParcelStatusSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  date?: InputMaybe<SortEnumType>;
  deliveryStatus?: InputMaybe<DeliveryStatusSortInput>;
  deliveryStatusId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  parcel?: InputMaybe<ParcelSortInput>;
  parcelId?: InputMaybe<SortEnumType>;
  statusDescription?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ParcelTrackingServiceError = Error & {
  __typename?: 'ParcelTrackingServiceError';
  message: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type ParcelsConnection = {
  __typename?: 'ParcelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ParcelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Parcel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ParcelsEdge = {
  __typename?: 'ParcelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Parcel;
};

export type PostOffice = {
  __typename?: 'PostOffice';
  address: Scalars['String']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostOfficeCreateDtoInput = {
  address: Scalars['String']['input'];
  code: Scalars['String']['input'];
};

export type PostOfficeFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<PostOfficeFilterInput>>;
  code?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<PostOfficeFilterInput>>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type PostOfficePatchDtoInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
};

export type PostOfficeSortInput = {
  address?: InputMaybe<SortEnumType>;
  code?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PostOfficesConnection = {
  __typename?: 'PostOfficesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PostOfficesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<PostOffice>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PostOfficesEdge = {
  __typename?: 'PostOfficesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PostOffice;
};

export type PushOneMoreParcelStatusError = ParcelNotFoundError;

export type PushOneMoreParcelStatusInput = {
  createDto: ParcelStatusDtoInput;
  parcelId: Scalars['UUID']['input'];
};

export type PushOneMoreParcelStatusPayload = {
  __typename?: 'PushOneMoreParcelStatusPayload';
  errors?: Maybe<Array<PushOneMoreParcelStatusError>>;
  parcel?: Maybe<Array<Parcel>>;
};

export type Query = {
  __typename?: 'Query';
  currentParcelStatus?: Maybe<ParcelStatus>;
  deliveryStatuses?: Maybe<DeliveryStatusesConnection>;
  parcelHistory?: Maybe<ParcelHistoryConnection>;
  parcels?: Maybe<ParcelsConnection>;
  postOffices?: Maybe<PostOfficesConnection>;
};


export type QueryCurrentParcelStatusArgs = {
  order?: InputMaybe<Array<ParcelStatusSortInput>>;
  parcelId: Scalars['UUID']['input'];
  where?: InputMaybe<ParcelStatusFilterInput>;
};


export type QueryDeliveryStatusesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<DeliveryStatusSortInput>>;
  where?: InputMaybe<DeliveryStatusFilterInput>;
};


export type QueryParcelHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ParcelStatusSortInput>>;
  parcelId: Scalars['UUID']['input'];
  where?: InputMaybe<ParcelStatusFilterInput>;
};


export type QueryParcelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ParcelSortInput>>;
  where?: InputMaybe<ParcelFilterInput>;
};


export type QueryPostOfficesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PostOfficeSortInput>>;
  where?: InputMaybe<PostOfficeFilterInput>;
};

export type SortEnumType =
  | 'ASC'
  | 'DESC';

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  endsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  ncontainsIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  nendsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  neqIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  nstartsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  startsWithIgnoreCase?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deliveryStatusCreated?: Maybe<DeliveryStatus>;
  deliveryStatusDeleted?: Maybe<DeliveryStatus>;
  deliveryStatusUpdated?: Maybe<DeliveryStatus>;
  parcelStatusUpdated?: Maybe<ParcelStatus>;
  postOfficeCreated?: Maybe<PostOffice>;
  postOfficeDeleted?: Maybe<PostOffice>;
  postOfficeUpdated?: Maybe<PostOffice>;
};


export type SubscriptionParcelStatusUpdatedArgs = {
  parcelId: Scalars['UUID']['input'];
};


export type SubscriptionPostOfficeUpdatedArgs = {
  postOfficeId: Scalars['UUID']['input'];
};

export type UpdateDeliveryStatusInput = {
  statusId: Scalars['UUID']['input'];
  updateDto: DeliveryStatusPatchDtoInput;
};

export type UpdateDeliveryStatusPayload = {
  __typename?: 'UpdateDeliveryStatusPayload';
  deliveryStatus?: Maybe<DeliveryStatus>;
};

export type UpdatePostOfficeInput = {
  officeId: Scalars['UUID']['input'];
  updateDto: PostOfficePatchDtoInput;
};

export type UpdatePostOfficePayload = {
  __typename?: 'UpdatePostOfficePayload';
  postOffice?: Maybe<PostOffice>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  passwordHash: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UserFilterInput = {
  and?: InputMaybe<Array<UserFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  passwordHash?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
  username?: InputMaybe<StringOperationFilterInput>;
};

export type UserSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  passwordHash?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
  username?: InputMaybe<SortEnumType>;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type ParcelCardItemFragment = { __typename?: 'Parcel', id: any, parcelInfo: { __typename?: 'ParcelInfo', deliveryDestinationAddress: string, description: string, priceToPay: any, parcelContentPrice: any }, currentStatus?: { __typename?: 'ParcelStatus', statusDescription: string } | null };

export type GetParcelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetParcelsQuery = { __typename?: 'Query', parcels?: { __typename?: 'ParcelsConnection', nodes?: Array<{ __typename?: 'Parcel', id: any, parcelInfo: { __typename?: 'ParcelInfo', deliveryDestinationAddress: string, description: string, priceToPay: any, parcelContentPrice: any }, currentStatus?: { __typename?: 'ParcelStatus', statusDescription: string } | null }> | null } | null };

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  AddDeliveryStatusError: ( ParcelTrackingServiceError );
  AddPostOfficeError: ( ParcelTrackingServiceError );
  PushOneMoreParcelStatusError: ( ParcelNotFoundError );
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Error: ( ParcelNotFoundError ) | ( ParcelTrackingServiceError );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddDeliveryStatusError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddDeliveryStatusError']>;
  AddDeliveryStatusInput: AddDeliveryStatusInput;
  AddDeliveryStatusPayload: ResolverTypeWrapper<Omit<AddDeliveryStatusPayload, 'errors'> & { errors?: Maybe<Array<ResolversTypes['AddDeliveryStatusError']>> }>;
  AddParcelInput: AddParcelInput;
  AddParcelPayload: ResolverTypeWrapper<AddParcelPayload>;
  AddPostOfficeError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddPostOfficeError']>;
  AddPostOfficeInput: AddPostOfficeInput;
  AddPostOfficePayload: ResolverTypeWrapper<Omit<AddPostOfficePayload, 'errors'> & { errors?: Maybe<Array<ResolversTypes['AddPostOfficeError']>> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeOperationFilterInput: DateTimeOperationFilterInput;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DecimalOperationFilterInput: DecimalOperationFilterInput;
  DeleteDeliveryStatusByIdInput: DeleteDeliveryStatusByIdInput;
  DeleteDeliveryStatusByIdPayload: ResolverTypeWrapper<DeleteDeliveryStatusByIdPayload>;
  DeleteParcelByIdInput: DeleteParcelByIdInput;
  DeleteParcelByIdPayload: ResolverTypeWrapper<DeleteParcelByIdPayload>;
  DeletePostOfficeByIdInput: DeletePostOfficeByIdInput;
  DeletePostOfficeByIdPayload: ResolverTypeWrapper<DeletePostOfficeByIdPayload>;
  DeliveryStatus: ResolverTypeWrapper<DeliveryStatus>;
  DeliveryStatusCreateDtoInput: DeliveryStatusCreateDtoInput;
  DeliveryStatusFilterInput: DeliveryStatusFilterInput;
  DeliveryStatusPatchDtoInput: DeliveryStatusPatchDtoInput;
  DeliveryStatusSortInput: DeliveryStatusSortInput;
  DeliveryStatusesConnection: ResolverTypeWrapper<DeliveryStatusesConnection>;
  DeliveryStatusesEdge: ResolverTypeWrapper<DeliveryStatusesEdge>;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Error']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ListFilterInputTypeOfParcelStatusFilterInput: ListFilterInputTypeOfParcelStatusFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Parcel: ResolverTypeWrapper<Parcel>;
  ParcelCreateDtoInput: ParcelCreateDtoInput;
  ParcelFilterInput: ParcelFilterInput;
  ParcelHistoryConnection: ResolverTypeWrapper<ParcelHistoryConnection>;
  ParcelHistoryEdge: ResolverTypeWrapper<ParcelHistoryEdge>;
  ParcelInfo: ResolverTypeWrapper<ParcelInfo>;
  ParcelInfoDtoInput: ParcelInfoDtoInput;
  ParcelInfoFilterInput: ParcelInfoFilterInput;
  ParcelInfoSortInput: ParcelInfoSortInput;
  ParcelNotFoundError: ResolverTypeWrapper<ParcelNotFoundError>;
  ParcelSortInput: ParcelSortInput;
  ParcelStatus: ResolverTypeWrapper<ParcelStatus>;
  ParcelStatusDtoInput: ParcelStatusDtoInput;
  ParcelStatusFilterInput: ParcelStatusFilterInput;
  ParcelStatusSortInput: ParcelStatusSortInput;
  ParcelTrackingServiceError: ResolverTypeWrapper<ParcelTrackingServiceError>;
  ParcelsConnection: ResolverTypeWrapper<ParcelsConnection>;
  ParcelsEdge: ResolverTypeWrapper<ParcelsEdge>;
  PostOffice: ResolverTypeWrapper<PostOffice>;
  PostOfficeCreateDtoInput: PostOfficeCreateDtoInput;
  PostOfficeFilterInput: PostOfficeFilterInput;
  PostOfficePatchDtoInput: PostOfficePatchDtoInput;
  PostOfficeSortInput: PostOfficeSortInput;
  PostOfficesConnection: ResolverTypeWrapper<PostOfficesConnection>;
  PostOfficesEdge: ResolverTypeWrapper<PostOfficesEdge>;
  PushOneMoreParcelStatusError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PushOneMoreParcelStatusError']>;
  PushOneMoreParcelStatusInput: PushOneMoreParcelStatusInput;
  PushOneMoreParcelStatusPayload: ResolverTypeWrapper<Omit<PushOneMoreParcelStatusPayload, 'errors'> & { errors?: Maybe<Array<ResolversTypes['PushOneMoreParcelStatusError']>> }>;
  Query: ResolverTypeWrapper<{}>;
  SortEnumType: SortEnumType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringOperationFilterInput: StringOperationFilterInput;
  Subscription: ResolverTypeWrapper<{}>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UpdateDeliveryStatusInput: UpdateDeliveryStatusInput;
  UpdateDeliveryStatusPayload: ResolverTypeWrapper<UpdateDeliveryStatusPayload>;
  UpdatePostOfficeInput: UpdatePostOfficeInput;
  UpdatePostOfficePayload: ResolverTypeWrapper<UpdatePostOfficePayload>;
  User: ResolverTypeWrapper<User>;
  UserFilterInput: UserFilterInput;
  UserSortInput: UserSortInput;
  UuidOperationFilterInput: UuidOperationFilterInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddDeliveryStatusError: ResolversUnionTypes<ResolversParentTypes>['AddDeliveryStatusError'];
  AddDeliveryStatusInput: AddDeliveryStatusInput;
  AddDeliveryStatusPayload: Omit<AddDeliveryStatusPayload, 'errors'> & { errors?: Maybe<Array<ResolversParentTypes['AddDeliveryStatusError']>> };
  AddParcelInput: AddParcelInput;
  AddParcelPayload: AddParcelPayload;
  AddPostOfficeError: ResolversUnionTypes<ResolversParentTypes>['AddPostOfficeError'];
  AddPostOfficeInput: AddPostOfficeInput;
  AddPostOfficePayload: Omit<AddPostOfficePayload, 'errors'> & { errors?: Maybe<Array<ResolversParentTypes['AddPostOfficeError']>> };
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  DateTimeOperationFilterInput: DateTimeOperationFilterInput;
  Decimal: Scalars['Decimal']['output'];
  DecimalOperationFilterInput: DecimalOperationFilterInput;
  DeleteDeliveryStatusByIdInput: DeleteDeliveryStatusByIdInput;
  DeleteDeliveryStatusByIdPayload: DeleteDeliveryStatusByIdPayload;
  DeleteParcelByIdInput: DeleteParcelByIdInput;
  DeleteParcelByIdPayload: DeleteParcelByIdPayload;
  DeletePostOfficeByIdInput: DeletePostOfficeByIdInput;
  DeletePostOfficeByIdPayload: DeletePostOfficeByIdPayload;
  DeliveryStatus: DeliveryStatus;
  DeliveryStatusCreateDtoInput: DeliveryStatusCreateDtoInput;
  DeliveryStatusFilterInput: DeliveryStatusFilterInput;
  DeliveryStatusPatchDtoInput: DeliveryStatusPatchDtoInput;
  DeliveryStatusSortInput: DeliveryStatusSortInput;
  DeliveryStatusesConnection: DeliveryStatusesConnection;
  DeliveryStatusesEdge: DeliveryStatusesEdge;
  Error: ResolversInterfaceTypes<ResolversParentTypes>['Error'];
  Int: Scalars['Int']['output'];
  ListFilterInputTypeOfParcelStatusFilterInput: ListFilterInputTypeOfParcelStatusFilterInput;
  Mutation: {};
  PageInfo: PageInfo;
  Parcel: Parcel;
  ParcelCreateDtoInput: ParcelCreateDtoInput;
  ParcelFilterInput: ParcelFilterInput;
  ParcelHistoryConnection: ParcelHistoryConnection;
  ParcelHistoryEdge: ParcelHistoryEdge;
  ParcelInfo: ParcelInfo;
  ParcelInfoDtoInput: ParcelInfoDtoInput;
  ParcelInfoFilterInput: ParcelInfoFilterInput;
  ParcelInfoSortInput: ParcelInfoSortInput;
  ParcelNotFoundError: ParcelNotFoundError;
  ParcelSortInput: ParcelSortInput;
  ParcelStatus: ParcelStatus;
  ParcelStatusDtoInput: ParcelStatusDtoInput;
  ParcelStatusFilterInput: ParcelStatusFilterInput;
  ParcelStatusSortInput: ParcelStatusSortInput;
  ParcelTrackingServiceError: ParcelTrackingServiceError;
  ParcelsConnection: ParcelsConnection;
  ParcelsEdge: ParcelsEdge;
  PostOffice: PostOffice;
  PostOfficeCreateDtoInput: PostOfficeCreateDtoInput;
  PostOfficeFilterInput: PostOfficeFilterInput;
  PostOfficePatchDtoInput: PostOfficePatchDtoInput;
  PostOfficeSortInput: PostOfficeSortInput;
  PostOfficesConnection: PostOfficesConnection;
  PostOfficesEdge: PostOfficesEdge;
  PushOneMoreParcelStatusError: ResolversUnionTypes<ResolversParentTypes>['PushOneMoreParcelStatusError'];
  PushOneMoreParcelStatusInput: PushOneMoreParcelStatusInput;
  PushOneMoreParcelStatusPayload: Omit<PushOneMoreParcelStatusPayload, 'errors'> & { errors?: Maybe<Array<ResolversParentTypes['PushOneMoreParcelStatusError']>> };
  Query: {};
  String: Scalars['String']['output'];
  StringOperationFilterInput: StringOperationFilterInput;
  Subscription: {};
  UUID: Scalars['UUID']['output'];
  UpdateDeliveryStatusInput: UpdateDeliveryStatusInput;
  UpdateDeliveryStatusPayload: UpdateDeliveryStatusPayload;
  UpdatePostOfficeInput: UpdatePostOfficeInput;
  UpdatePostOfficePayload: UpdatePostOfficePayload;
  User: User;
  UserFilterInput: UserFilterInput;
  UserSortInput: UserSortInput;
  UuidOperationFilterInput: UuidOperationFilterInput;
}>;

export type AddDeliveryStatusErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddDeliveryStatusError'] = ResolversParentTypes['AddDeliveryStatusError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ParcelTrackingServiceError', ParentType, ContextType>;
}>;

export type AddDeliveryStatusPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddDeliveryStatusPayload'] = ResolversParentTypes['AddDeliveryStatusPayload']> = ResolversObject<{
  deliveryStatus?: Resolver<Maybe<ResolversTypes['DeliveryStatus']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['AddDeliveryStatusError']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddParcelPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddParcelPayload'] = ResolversParentTypes['AddParcelPayload']> = ResolversObject<{
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddPostOfficeErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddPostOfficeError'] = ResolversParentTypes['AddPostOfficeError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ParcelTrackingServiceError', ParentType, ContextType>;
}>;

export type AddPostOfficePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddPostOfficePayload'] = ResolversParentTypes['AddPostOfficePayload']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['AddPostOfficeError']>>, ParentType, ContextType>;
  postOffice?: Resolver<Maybe<ResolversTypes['PostOffice']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DeleteDeliveryStatusByIdPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteDeliveryStatusByIdPayload'] = ResolversParentTypes['DeleteDeliveryStatusByIdPayload']> = ResolversObject<{
  deliveryStatus?: Resolver<Maybe<ResolversTypes['DeliveryStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteParcelByIdPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteParcelByIdPayload'] = ResolversParentTypes['DeleteParcelByIdPayload']> = ResolversObject<{
  parcel?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeletePostOfficeByIdPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePostOfficeByIdPayload'] = ResolversParentTypes['DeletePostOfficeByIdPayload']> = ResolversObject<{
  postOffice?: Resolver<Maybe<ResolversTypes['PostOffice']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeliveryStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryStatus'] = ResolversParentTypes['DeliveryStatus']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  statusName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeliveryStatusesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryStatusesConnection'] = ResolversParentTypes['DeliveryStatusesConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<ResolversTypes['DeliveryStatusesEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<ResolversTypes['DeliveryStatus']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeliveryStatusesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryStatusesEdge'] = ResolversParentTypes['DeliveryStatusesEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DeliveryStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ParcelNotFoundError' | 'ParcelTrackingServiceError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addDeliveryStatus?: Resolver<ResolversTypes['AddDeliveryStatusPayload'], ParentType, ContextType, RequireFields<MutationAddDeliveryStatusArgs, 'input'>>;
  addParcel?: Resolver<ResolversTypes['AddParcelPayload'], ParentType, ContextType, RequireFields<MutationAddParcelArgs, 'input'>>;
  addPostOffice?: Resolver<ResolversTypes['AddPostOfficePayload'], ParentType, ContextType, RequireFields<MutationAddPostOfficeArgs, 'input'>>;
  deleteDeliveryStatusById?: Resolver<ResolversTypes['DeleteDeliveryStatusByIdPayload'], ParentType, ContextType, RequireFields<MutationDeleteDeliveryStatusByIdArgs, 'input'>>;
  deleteParcelById?: Resolver<ResolversTypes['DeleteParcelByIdPayload'], ParentType, ContextType, RequireFields<MutationDeleteParcelByIdArgs, 'input'>>;
  deletePostOfficeById?: Resolver<ResolversTypes['DeletePostOfficeByIdPayload'], ParentType, ContextType, RequireFields<MutationDeletePostOfficeByIdArgs, 'input'>>;
  pushOneMoreParcelStatus?: Resolver<ResolversTypes['PushOneMoreParcelStatusPayload'], ParentType, ContextType, RequireFields<MutationPushOneMoreParcelStatusArgs, 'input'>>;
  updateDeliveryStatus?: Resolver<ResolversTypes['UpdateDeliveryStatusPayload'], ParentType, ContextType, RequireFields<MutationUpdateDeliveryStatusArgs, 'input'>>;
  updatePostOffice?: Resolver<ResolversTypes['UpdatePostOfficePayload'], ParentType, ContextType, RequireFields<MutationUpdatePostOfficeArgs, 'input'>>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parcel'] = ResolversParentTypes['Parcel']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  currentStatus?: Resolver<Maybe<ResolversTypes['ParcelStatus']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  parcelInfo?: Resolver<ResolversTypes['ParcelInfo'], ParentType, ContextType>;
  parcelInfoId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  parcelStatusHistory?: Resolver<Array<ResolversTypes['ParcelStatus']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelHistoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelHistoryConnection'] = ResolversParentTypes['ParcelHistoryConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<ResolversTypes['ParcelHistoryEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<ResolversTypes['ParcelStatus']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelHistoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelHistoryEdge'] = ResolversParentTypes['ParcelHistoryEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ParcelStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelInfo'] = ResolversParentTypes['ParcelInfo']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deliveryDestinationAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  parcelContentPrice?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  priceToPay?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  senderId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelNotFoundErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelNotFoundError'] = ResolversParentTypes['ParcelNotFoundError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelStatus'] = ResolversParentTypes['ParcelStatus']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deliveryStatus?: Resolver<Maybe<ResolversTypes['DeliveryStatus']>, ParentType, ContextType>;
  deliveryStatusId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  parcel?: Resolver<ResolversTypes['Parcel'], ParentType, ContextType>;
  parcelId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  statusDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelTrackingServiceErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelTrackingServiceError'] = ResolversParentTypes['ParcelTrackingServiceError']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelsConnection'] = ResolversParentTypes['ParcelsConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<ResolversTypes['ParcelsEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelsEdge'] = ResolversParentTypes['ParcelsEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Parcel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostOfficeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostOffice'] = ResolversParentTypes['PostOffice']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostOfficesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostOfficesConnection'] = ResolversParentTypes['PostOfficesConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<ResolversTypes['PostOfficesEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<ResolversTypes['PostOffice']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PostOfficesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostOfficesEdge'] = ResolversParentTypes['PostOfficesEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PostOffice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PushOneMoreParcelStatusErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PushOneMoreParcelStatusError'] = ResolversParentTypes['PushOneMoreParcelStatusError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ParcelNotFoundError', ParentType, ContextType>;
}>;

export type PushOneMoreParcelStatusPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PushOneMoreParcelStatusPayload'] = ResolversParentTypes['PushOneMoreParcelStatusPayload']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['PushOneMoreParcelStatusError']>>, ParentType, ContextType>;
  parcel?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  currentParcelStatus?: Resolver<Maybe<ResolversTypes['ParcelStatus']>, ParentType, ContextType, RequireFields<QueryCurrentParcelStatusArgs, 'parcelId'>>;
  deliveryStatuses?: Resolver<Maybe<ResolversTypes['DeliveryStatusesConnection']>, ParentType, ContextType, Partial<QueryDeliveryStatusesArgs>>;
  parcelHistory?: Resolver<Maybe<ResolversTypes['ParcelHistoryConnection']>, ParentType, ContextType, RequireFields<QueryParcelHistoryArgs, 'parcelId'>>;
  parcels?: Resolver<Maybe<ResolversTypes['ParcelsConnection']>, ParentType, ContextType, Partial<QueryParcelsArgs>>;
  postOffices?: Resolver<Maybe<ResolversTypes['PostOfficesConnection']>, ParentType, ContextType, Partial<QueryPostOfficesArgs>>;
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  deliveryStatusCreated?: SubscriptionResolver<Maybe<ResolversTypes['DeliveryStatus']>, "deliveryStatusCreated", ParentType, ContextType>;
  deliveryStatusDeleted?: SubscriptionResolver<Maybe<ResolversTypes['DeliveryStatus']>, "deliveryStatusDeleted", ParentType, ContextType>;
  deliveryStatusUpdated?: SubscriptionResolver<Maybe<ResolversTypes['DeliveryStatus']>, "deliveryStatusUpdated", ParentType, ContextType>;
  parcelStatusUpdated?: SubscriptionResolver<Maybe<ResolversTypes['ParcelStatus']>, "parcelStatusUpdated", ParentType, ContextType, RequireFields<SubscriptionParcelStatusUpdatedArgs, 'parcelId'>>;
  postOfficeCreated?: SubscriptionResolver<Maybe<ResolversTypes['PostOffice']>, "postOfficeCreated", ParentType, ContextType>;
  postOfficeDeleted?: SubscriptionResolver<Maybe<ResolversTypes['PostOffice']>, "postOfficeDeleted", ParentType, ContextType>;
  postOfficeUpdated?: SubscriptionResolver<Maybe<ResolversTypes['PostOffice']>, "postOfficeUpdated", ParentType, ContextType, RequireFields<SubscriptionPostOfficeUpdatedArgs, 'postOfficeId'>>;
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UpdateDeliveryStatusPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateDeliveryStatusPayload'] = ResolversParentTypes['UpdateDeliveryStatusPayload']> = ResolversObject<{
  deliveryStatus?: Resolver<Maybe<ResolversTypes['DeliveryStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdatePostOfficePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePostOfficePayload'] = ResolversParentTypes['UpdatePostOfficePayload']> = ResolversObject<{
  postOffice?: Resolver<Maybe<ResolversTypes['PostOffice']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AddDeliveryStatusError?: AddDeliveryStatusErrorResolvers<ContextType>;
  AddDeliveryStatusPayload?: AddDeliveryStatusPayloadResolvers<ContextType>;
  AddParcelPayload?: AddParcelPayloadResolvers<ContextType>;
  AddPostOfficeError?: AddPostOfficeErrorResolvers<ContextType>;
  AddPostOfficePayload?: AddPostOfficePayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  DeleteDeliveryStatusByIdPayload?: DeleteDeliveryStatusByIdPayloadResolvers<ContextType>;
  DeleteParcelByIdPayload?: DeleteParcelByIdPayloadResolvers<ContextType>;
  DeletePostOfficeByIdPayload?: DeletePostOfficeByIdPayloadResolvers<ContextType>;
  DeliveryStatus?: DeliveryStatusResolvers<ContextType>;
  DeliveryStatusesConnection?: DeliveryStatusesConnectionResolvers<ContextType>;
  DeliveryStatusesEdge?: DeliveryStatusesEdgeResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Parcel?: ParcelResolvers<ContextType>;
  ParcelHistoryConnection?: ParcelHistoryConnectionResolvers<ContextType>;
  ParcelHistoryEdge?: ParcelHistoryEdgeResolvers<ContextType>;
  ParcelInfo?: ParcelInfoResolvers<ContextType>;
  ParcelNotFoundError?: ParcelNotFoundErrorResolvers<ContextType>;
  ParcelStatus?: ParcelStatusResolvers<ContextType>;
  ParcelTrackingServiceError?: ParcelTrackingServiceErrorResolvers<ContextType>;
  ParcelsConnection?: ParcelsConnectionResolvers<ContextType>;
  ParcelsEdge?: ParcelsEdgeResolvers<ContextType>;
  PostOffice?: PostOfficeResolvers<ContextType>;
  PostOfficesConnection?: PostOfficesConnectionResolvers<ContextType>;
  PostOfficesEdge?: PostOfficesEdgeResolvers<ContextType>;
  PushOneMoreParcelStatusError?: PushOneMoreParcelStatusErrorResolvers<ContextType>;
  PushOneMoreParcelStatusPayload?: PushOneMoreParcelStatusPayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UpdateDeliveryStatusPayload?: UpdateDeliveryStatusPayloadResolvers<ContextType>;
  UpdatePostOfficePayload?: UpdatePostOfficePayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;


export const ParcelCardItemFragmentDoc = gql`
    fragment ParcelCardItem on Parcel {
  id
  parcelInfo {
    deliveryDestinationAddress
    description
    priceToPay
    parcelContentPrice
  }
  currentStatus {
    statusDescription
  }
}
    `;
export const GetParcelsDocument = gql`
    query GetParcels {
  parcels {
    nodes {
      ...ParcelCardItem
    }
  }
}
    ${ParcelCardItemFragmentDoc}`;

/**
 * __useGetParcelsQuery__
 *
 * To run a query within a React component, call `useGetParcelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParcelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParcelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetParcelsQuery(baseOptions?: Apollo.QueryHookOptions<GetParcelsQuery, GetParcelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetParcelsQuery, GetParcelsQueryVariables>(GetParcelsDocument, options);
      }
export function useGetParcelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetParcelsQuery, GetParcelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetParcelsQuery, GetParcelsQueryVariables>(GetParcelsDocument, options);
        }
export function useGetParcelsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetParcelsQuery, GetParcelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetParcelsQuery, GetParcelsQueryVariables>(GetParcelsDocument, options);
        }
export type GetParcelsQueryHookResult = ReturnType<typeof useGetParcelsQuery>;
export type GetParcelsLazyQueryHookResult = ReturnType<typeof useGetParcelsLazyQuery>;
export type GetParcelsSuspenseQueryHookResult = ReturnType<typeof useGetParcelsSuspenseQuery>;
export type GetParcelsQueryResult = Apollo.QueryResult<GetParcelsQuery, GetParcelsQueryVariables>;
export type AddDeliveryStatusPayloadKeySpecifier = ('deliveryStatus' | 'errors' | AddDeliveryStatusPayloadKeySpecifier)[];
export type AddDeliveryStatusPayloadFieldPolicy = {
	deliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddParcelPayloadKeySpecifier = ('parcel' | AddParcelPayloadKeySpecifier)[];
export type AddParcelPayloadFieldPolicy = {
	parcel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddPostOfficePayloadKeySpecifier = ('errors' | 'postOffice' | AddPostOfficePayloadKeySpecifier)[];
export type AddPostOfficePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postOffice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteDeliveryStatusByIdPayloadKeySpecifier = ('deliveryStatus' | DeleteDeliveryStatusByIdPayloadKeySpecifier)[];
export type DeleteDeliveryStatusByIdPayloadFieldPolicy = {
	deliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteParcelByIdPayloadKeySpecifier = ('parcel' | DeleteParcelByIdPayloadKeySpecifier)[];
export type DeleteParcelByIdPayloadFieldPolicy = {
	parcel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePostOfficeByIdPayloadKeySpecifier = ('postOffice' | DeletePostOfficeByIdPayloadKeySpecifier)[];
export type DeletePostOfficeByIdPayloadFieldPolicy = {
	postOffice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliveryStatusKeySpecifier = ('createdAt' | 'id' | 'statusName' | 'updatedAt' | DeliveryStatusKeySpecifier)[];
export type DeliveryStatusFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	statusName?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliveryStatusesConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | DeliveryStatusesConnectionKeySpecifier)[];
export type DeliveryStatusesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliveryStatusesEdgeKeySpecifier = ('cursor' | 'node' | DeliveryStatusesEdgeKeySpecifier)[];
export type DeliveryStatusesEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('message' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addDeliveryStatus' | 'addParcel' | 'addPostOffice' | 'deleteDeliveryStatusById' | 'deleteParcelById' | 'deletePostOfficeById' | 'pushOneMoreParcelStatus' | 'updateDeliveryStatus' | 'updatePostOffice' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addDeliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	addParcel?: FieldPolicy<any> | FieldReadFunction<any>,
	addPostOffice?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDeliveryStatusById?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteParcelById?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePostOfficeById?: FieldPolicy<any> | FieldReadFunction<any>,
	pushOneMoreParcelStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDeliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostOffice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelKeySpecifier = ('createdAt' | 'currentStatus' | 'id' | 'parcelInfo' | 'parcelInfoId' | 'parcelStatusHistory' | 'updatedAt' | ParcelKeySpecifier)[];
export type ParcelFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelStatusHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelHistoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ParcelHistoryConnectionKeySpecifier)[];
export type ParcelHistoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelHistoryEdgeKeySpecifier = ('cursor' | 'node' | ParcelHistoryEdgeKeySpecifier)[];
export type ParcelHistoryEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelInfoKeySpecifier = ('createdAt' | 'deliveryDestinationAddress' | 'description' | 'id' | 'parcelContentPrice' | 'priceToPay' | 'sender' | 'senderId' | 'updatedAt' | ParcelInfoKeySpecifier)[];
export type ParcelInfoFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryDestinationAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelContentPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	priceToPay?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	senderId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelNotFoundErrorKeySpecifier = ('message' | ParcelNotFoundErrorKeySpecifier)[];
export type ParcelNotFoundErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelStatusKeySpecifier = ('createdAt' | 'date' | 'deliveryStatus' | 'deliveryStatusId' | 'id' | 'parcel' | 'parcelId' | 'statusDescription' | 'updatedAt' | ParcelStatusKeySpecifier)[];
export type ParcelStatusFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryStatusId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parcel?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelId?: FieldPolicy<any> | FieldReadFunction<any>,
	statusDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelTrackingServiceErrorKeySpecifier = ('message' | ParcelTrackingServiceErrorKeySpecifier)[];
export type ParcelTrackingServiceErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelsConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ParcelsConnectionKeySpecifier)[];
export type ParcelsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelsEdgeKeySpecifier = ('cursor' | 'node' | ParcelsEdgeKeySpecifier)[];
export type ParcelsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostOfficeKeySpecifier = ('address' | 'code' | 'createdAt' | 'id' | 'updatedAt' | PostOfficeKeySpecifier)[];
export type PostOfficeFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostOfficesConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostOfficesConnectionKeySpecifier)[];
export type PostOfficesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostOfficesEdgeKeySpecifier = ('cursor' | 'node' | PostOfficesEdgeKeySpecifier)[];
export type PostOfficesEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PushOneMoreParcelStatusPayloadKeySpecifier = ('errors' | 'parcel' | PushOneMoreParcelStatusPayloadKeySpecifier)[];
export type PushOneMoreParcelStatusPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	parcel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('currentParcelStatus' | 'deliveryStatuses' | 'parcelHistory' | 'parcels' | 'postOffices' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	currentParcelStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	parcels?: FieldPolicy<any> | FieldReadFunction<any>,
	postOffices?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('deliveryStatusCreated' | 'deliveryStatusDeleted' | 'deliveryStatusUpdated' | 'parcelStatusUpdated' | 'postOfficeCreated' | 'postOfficeDeleted' | 'postOfficeUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	deliveryStatusCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryStatusDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryStatusUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelStatusUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	postOfficeCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	postOfficeDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	postOfficeUpdated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateDeliveryStatusPayloadKeySpecifier = ('deliveryStatus' | UpdateDeliveryStatusPayloadKeySpecifier)[];
export type UpdateDeliveryStatusPayloadFieldPolicy = {
	deliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostOfficePayloadKeySpecifier = ('postOffice' | UpdatePostOfficePayloadKeySpecifier)[];
export type UpdatePostOfficePayloadFieldPolicy = {
	postOffice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'email' | 'id' | 'passwordHash' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordHash?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AddDeliveryStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddDeliveryStatusPayloadKeySpecifier | (() => undefined | AddDeliveryStatusPayloadKeySpecifier),
		fields?: AddDeliveryStatusPayloadFieldPolicy,
	},
	AddParcelPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddParcelPayloadKeySpecifier | (() => undefined | AddParcelPayloadKeySpecifier),
		fields?: AddParcelPayloadFieldPolicy,
	},
	AddPostOfficePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddPostOfficePayloadKeySpecifier | (() => undefined | AddPostOfficePayloadKeySpecifier),
		fields?: AddPostOfficePayloadFieldPolicy,
	},
	DeleteDeliveryStatusByIdPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteDeliveryStatusByIdPayloadKeySpecifier | (() => undefined | DeleteDeliveryStatusByIdPayloadKeySpecifier),
		fields?: DeleteDeliveryStatusByIdPayloadFieldPolicy,
	},
	DeleteParcelByIdPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteParcelByIdPayloadKeySpecifier | (() => undefined | DeleteParcelByIdPayloadKeySpecifier),
		fields?: DeleteParcelByIdPayloadFieldPolicy,
	},
	DeletePostOfficeByIdPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePostOfficeByIdPayloadKeySpecifier | (() => undefined | DeletePostOfficeByIdPayloadKeySpecifier),
		fields?: DeletePostOfficeByIdPayloadFieldPolicy,
	},
	DeliveryStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliveryStatusKeySpecifier | (() => undefined | DeliveryStatusKeySpecifier),
		fields?: DeliveryStatusFieldPolicy,
	},
	DeliveryStatusesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliveryStatusesConnectionKeySpecifier | (() => undefined | DeliveryStatusesConnectionKeySpecifier),
		fields?: DeliveryStatusesConnectionFieldPolicy,
	},
	DeliveryStatusesEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliveryStatusesEdgeKeySpecifier | (() => undefined | DeliveryStatusesEdgeKeySpecifier),
		fields?: DeliveryStatusesEdgeFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Parcel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelKeySpecifier | (() => undefined | ParcelKeySpecifier),
		fields?: ParcelFieldPolicy,
	},
	ParcelHistoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelHistoryConnectionKeySpecifier | (() => undefined | ParcelHistoryConnectionKeySpecifier),
		fields?: ParcelHistoryConnectionFieldPolicy,
	},
	ParcelHistoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelHistoryEdgeKeySpecifier | (() => undefined | ParcelHistoryEdgeKeySpecifier),
		fields?: ParcelHistoryEdgeFieldPolicy,
	},
	ParcelInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelInfoKeySpecifier | (() => undefined | ParcelInfoKeySpecifier),
		fields?: ParcelInfoFieldPolicy,
	},
	ParcelNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelNotFoundErrorKeySpecifier | (() => undefined | ParcelNotFoundErrorKeySpecifier),
		fields?: ParcelNotFoundErrorFieldPolicy,
	},
	ParcelStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelStatusKeySpecifier | (() => undefined | ParcelStatusKeySpecifier),
		fields?: ParcelStatusFieldPolicy,
	},
	ParcelTrackingServiceError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelTrackingServiceErrorKeySpecifier | (() => undefined | ParcelTrackingServiceErrorKeySpecifier),
		fields?: ParcelTrackingServiceErrorFieldPolicy,
	},
	ParcelsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelsConnectionKeySpecifier | (() => undefined | ParcelsConnectionKeySpecifier),
		fields?: ParcelsConnectionFieldPolicy,
	},
	ParcelsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelsEdgeKeySpecifier | (() => undefined | ParcelsEdgeKeySpecifier),
		fields?: ParcelsEdgeFieldPolicy,
	},
	PostOffice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostOfficeKeySpecifier | (() => undefined | PostOfficeKeySpecifier),
		fields?: PostOfficeFieldPolicy,
	},
	PostOfficesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostOfficesConnectionKeySpecifier | (() => undefined | PostOfficesConnectionKeySpecifier),
		fields?: PostOfficesConnectionFieldPolicy,
	},
	PostOfficesEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostOfficesEdgeKeySpecifier | (() => undefined | PostOfficesEdgeKeySpecifier),
		fields?: PostOfficesEdgeFieldPolicy,
	},
	PushOneMoreParcelStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PushOneMoreParcelStatusPayloadKeySpecifier | (() => undefined | PushOneMoreParcelStatusPayloadKeySpecifier),
		fields?: PushOneMoreParcelStatusPayloadFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	UpdateDeliveryStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateDeliveryStatusPayloadKeySpecifier | (() => undefined | UpdateDeliveryStatusPayloadKeySpecifier),
		fields?: UpdateDeliveryStatusPayloadFieldPolicy,
	},
	UpdatePostOfficePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostOfficePayloadKeySpecifier | (() => undefined | UpdatePostOfficePayloadKeySpecifier),
		fields?: UpdatePostOfficePayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;