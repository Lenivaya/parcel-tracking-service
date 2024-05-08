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
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The built-in `Decimal` scalar type. */
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

export type AddPostOfficeError = ParcelTrackingServiceError;

export type AddPostOfficeInput = {
  createDto: PostOfficeCreateDtoInput;
};

export type AddPostOfficePayload = {
  __typename?: 'AddPostOfficePayload';
  errors?: Maybe<Array<AddPostOfficeError>>;
  postOffice?: Maybe<PostOffice>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
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
  generalDeliveryState: GeneralDeliveryState;
  id: Scalars['UUID']['output'];
  statusName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DeliveryStatusCreateDtoInput = {
  generalDeliveryState: GeneralDeliveryState;
  statusName: Scalars['String']['input'];
};

export type DeliveryStatusFilterInput = {
  and?: InputMaybe<Array<DeliveryStatusFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  generalDeliveryState?: InputMaybe<GeneralDeliveryStateOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<DeliveryStatusFilterInput>>;
  statusName?: InputMaybe<StringOperationFilterInput>;
  updatedAt?: InputMaybe<DateTimeOperationFilterInput>;
};

export type DeliveryStatusPatchDtoInput = {
  generalDeliveryState?: InputMaybe<GeneralDeliveryState>;
  statusName?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryStatusSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  generalDeliveryState?: InputMaybe<SortEnumType>;
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

export type GeneralDeliveryState =
  | 'DELIVERED'
  | 'IN_TRANSIT'
  | 'PREPARING'
  | 'RETURNED'
  | 'SENT';

export type GeneralDeliveryStateOperationFilterInput = {
  eq?: InputMaybe<GeneralDeliveryState>;
  in?: InputMaybe<Array<GeneralDeliveryState>>;
  neq?: InputMaybe<GeneralDeliveryState>;
  nin?: InputMaybe<Array<GeneralDeliveryState>>;
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
  addPostOffice: AddPostOfficePayload;
  deleteDeliveryStatusById: DeleteDeliveryStatusByIdPayload;
  deletePostOfficeById: DeletePostOfficeByIdPayload;
  updateDeliveryStatus: UpdateDeliveryStatusPayload;
  updatePostOffice: UpdatePostOfficePayload;
};


export type MutationAddDeliveryStatusArgs = {
  input: AddDeliveryStatusInput;
};


export type MutationAddPostOfficeArgs = {
  input: AddPostOfficeInput;
};


export type MutationDeleteDeliveryStatusByIdArgs = {
  input: DeleteDeliveryStatusByIdInput;
};


export type MutationDeletePostOfficeByIdArgs = {
  input: DeletePostOfficeByIdInput;
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
  deliverySourceAddress: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  parcelContentPrice: Scalars['Decimal']['output'];
  priceToPay: Scalars['Decimal']['output'];
  sender?: Maybe<User>;
  senderId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ParcelInfoFilterInput = {
  and?: InputMaybe<Array<ParcelInfoFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  deliveryDestinationAddress?: InputMaybe<StringOperationFilterInput>;
  deliverySourceAddress?: InputMaybe<StringOperationFilterInput>;
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
  deliverySourceAddress?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  parcelContentPrice?: InputMaybe<SortEnumType>;
  priceToPay?: InputMaybe<SortEnumType>;
  sender?: InputMaybe<UserSortInput>;
  senderId?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type ParcelSearchCriteriaInput = {
  matching?: InputMaybe<Scalars['String']['input']>;
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
export type ParcelsCursorConnection = {
  __typename?: 'ParcelsCursorConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ParcelsCursorEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Parcel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ParcelsCursorEdge = {
  __typename?: 'ParcelsCursorEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Parcel;
};

/** A segment of a collection. */
export type ParcelsOffsetCollectionSegment = {
  __typename?: 'ParcelsOffsetCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<Parcel>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int']['output'];
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

export type Query = {
  __typename?: 'Query';
  currentParcelStatus?: Maybe<ParcelStatus>;
  deliveryStatuses?: Maybe<DeliveryStatusesConnection>;
  parcelById?: Maybe<Parcel>;
  parcelHistory?: Maybe<ParcelHistoryConnection>;
  parcelsCursor?: Maybe<ParcelsCursorConnection>;
  parcelsOffset?: Maybe<ParcelsOffsetCollectionSegment>;
  postOffices?: Maybe<PostOfficesConnection>;
  trackedParcelsIds?: Maybe<Array<Scalars['UUID']['output']>>;
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


export type QueryParcelByIdArgs = {
  parcelId: Scalars['UUID']['input'];
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


export type QueryParcelsCursorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ParcelSortInput>>;
  searchCriteria?: InputMaybe<ParcelSearchCriteriaInput>;
  where?: InputMaybe<ParcelFilterInput>;
};


export type QueryParcelsOffsetArgs = {
  order?: InputMaybe<Array<ParcelSortInput>>;
  searchCriteria?: InputMaybe<ParcelSearchCriteriaInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
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

export type GetParcelsQueryVariables = Exact<{
  trackedParcelsIds: Array<InputMaybe<Scalars['UUID']['input']>> | InputMaybe<Scalars['UUID']['input']>;
  searchCriteria?: InputMaybe<ParcelSearchCriteriaInput>;
}>;


export type GetParcelsQuery = { __typename?: 'Query', parcelsCursor?: { __typename?: 'ParcelsCursorConnection', nodes?: Array<{ __typename?: 'Parcel', id: any, updatedAt?: any | null, parcelInfo: { __typename?: 'ParcelInfo', id: any, description: string, priceToPay: any, parcelContentPrice: any, deliveryDestinationAddress: string, deliverySourceAddress: string }, currentStatus?: { __typename?: 'ParcelStatus', updatedAt?: any | null, statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null } | null }> | null } | null };

export type GetTrackedParcelsIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrackedParcelsIdsQuery = { __typename?: 'Query', trackedParcelsIds?: Array<any> | null };

export type ParcelCardItemFragment = { __typename?: 'Parcel', id: any, updatedAt?: any | null, parcelInfo: { __typename?: 'ParcelInfo', id: any, description: string, priceToPay: any, parcelContentPrice: any, deliveryDestinationAddress: string, deliverySourceAddress: string }, currentStatus?: { __typename?: 'ParcelStatus', updatedAt?: any | null, statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null } | null };

export type ParcelCardStatusItemFragment = { __typename?: 'Parcel', currentStatus?: { __typename?: 'ParcelStatus', statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null } | null };

export type ParcelDeliveryPathItemFragment = { __typename?: 'Parcel', parcelInfo: { __typename?: 'ParcelInfo', deliveryDestinationAddress: string, deliverySourceAddress: string } };

export type GetParcelForPageQueryVariables = Exact<{
  parcelId: Scalars['UUID']['input'];
}>;


export type GetParcelForPageQuery = { __typename?: 'Query', parcelById?: { __typename?: 'Parcel', id: any, updatedAt?: any | null, parcelInfo: { __typename?: 'ParcelInfo', id: any, description: string, priceToPay: any, parcelContentPrice: any, deliveryDestinationAddress: string, deliverySourceAddress: string }, parcelStatusHistory: Array<{ __typename?: 'ParcelStatus', updatedAt?: any | null, id: any, date: any, statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null }> } | null };

export type ParcelPageItemFragment = { __typename?: 'Parcel', id: any, updatedAt?: any | null, parcelInfo: { __typename?: 'ParcelInfo', id: any, description: string, priceToPay: any, parcelContentPrice: any, deliveryDestinationAddress: string, deliverySourceAddress: string }, parcelStatusHistory: Array<{ __typename?: 'ParcelStatus', updatedAt?: any | null, id: any, date: any, statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null }> };

export type ParcelPageStatusBlockItemFragment = { __typename?: 'ParcelStatus', id: any, date: any, statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null };

export type ParcelPageStatusesListItemFragment = { __typename?: 'Parcel', parcelStatusHistory: Array<{ __typename?: 'ParcelStatus', id: any, date: any, statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null }> };

export type ParcelStatusUpdatesSubscriptionVariables = Exact<{
  parcelId: Scalars['UUID']['input'];
}>;


export type ParcelStatusUpdatesSubscription = { __typename?: 'Subscription', parcelStatusUpdated?: { __typename?: 'ParcelStatus', updatedAt?: any | null, id: any, date: any, statusDescription: string, deliveryStatus?: { __typename?: 'DeliveryStatus', generalDeliveryState: GeneralDeliveryState } | null } | null };

export type ParcelQrCodeDrawerItemFragment = { __typename?: 'Parcel', id: any };

export type GetParcelForSearchQueryVariables = Exact<{
  parcelId: Scalars['UUID']['input'];
}>;


export type GetParcelForSearchQuery = { __typename?: 'Query', parcelById?: { __typename?: 'Parcel', id: any } | null };

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
}>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Error: ( ParcelTrackingServiceError );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddDeliveryStatusError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddDeliveryStatusError']>;
  AddDeliveryStatusInput: AddDeliveryStatusInput;
  AddDeliveryStatusPayload: ResolverTypeWrapper<Omit<AddDeliveryStatusPayload, 'errors'> & { errors?: Maybe<Array<ResolversTypes['AddDeliveryStatusError']>> }>;
  AddPostOfficeError: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddPostOfficeError']>;
  AddPostOfficeInput: AddPostOfficeInput;
  AddPostOfficePayload: ResolverTypeWrapper<Omit<AddPostOfficePayload, 'errors'> & { errors?: Maybe<Array<ResolversTypes['AddPostOfficeError']>> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CollectionSegmentInfo: ResolverTypeWrapper<CollectionSegmentInfo>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeOperationFilterInput: DateTimeOperationFilterInput;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DecimalOperationFilterInput: DecimalOperationFilterInput;
  DeleteDeliveryStatusByIdInput: DeleteDeliveryStatusByIdInput;
  DeleteDeliveryStatusByIdPayload: ResolverTypeWrapper<DeleteDeliveryStatusByIdPayload>;
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
  GeneralDeliveryState: GeneralDeliveryState;
  GeneralDeliveryStateOperationFilterInput: GeneralDeliveryStateOperationFilterInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ListFilterInputTypeOfParcelStatusFilterInput: ListFilterInputTypeOfParcelStatusFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Parcel: ResolverTypeWrapper<Parcel>;
  ParcelFilterInput: ParcelFilterInput;
  ParcelHistoryConnection: ResolverTypeWrapper<ParcelHistoryConnection>;
  ParcelHistoryEdge: ResolverTypeWrapper<ParcelHistoryEdge>;
  ParcelInfo: ResolverTypeWrapper<ParcelInfo>;
  ParcelInfoFilterInput: ParcelInfoFilterInput;
  ParcelInfoSortInput: ParcelInfoSortInput;
  ParcelSearchCriteriaInput: ParcelSearchCriteriaInput;
  ParcelSortInput: ParcelSortInput;
  ParcelStatus: ResolverTypeWrapper<ParcelStatus>;
  ParcelStatusFilterInput: ParcelStatusFilterInput;
  ParcelStatusSortInput: ParcelStatusSortInput;
  ParcelTrackingServiceError: ResolverTypeWrapper<ParcelTrackingServiceError>;
  ParcelsCursorConnection: ResolverTypeWrapper<ParcelsCursorConnection>;
  ParcelsCursorEdge: ResolverTypeWrapper<ParcelsCursorEdge>;
  ParcelsOffsetCollectionSegment: ResolverTypeWrapper<ParcelsOffsetCollectionSegment>;
  PostOffice: ResolverTypeWrapper<PostOffice>;
  PostOfficeCreateDtoInput: PostOfficeCreateDtoInput;
  PostOfficeFilterInput: PostOfficeFilterInput;
  PostOfficePatchDtoInput: PostOfficePatchDtoInput;
  PostOfficeSortInput: PostOfficeSortInput;
  PostOfficesConnection: ResolverTypeWrapper<PostOfficesConnection>;
  PostOfficesEdge: ResolverTypeWrapper<PostOfficesEdge>;
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
  AddPostOfficeError: ResolversUnionTypes<ResolversParentTypes>['AddPostOfficeError'];
  AddPostOfficeInput: AddPostOfficeInput;
  AddPostOfficePayload: Omit<AddPostOfficePayload, 'errors'> & { errors?: Maybe<Array<ResolversParentTypes['AddPostOfficeError']>> };
  Boolean: Scalars['Boolean']['output'];
  CollectionSegmentInfo: CollectionSegmentInfo;
  DateTime: Scalars['DateTime']['output'];
  DateTimeOperationFilterInput: DateTimeOperationFilterInput;
  Decimal: Scalars['Decimal']['output'];
  DecimalOperationFilterInput: DecimalOperationFilterInput;
  DeleteDeliveryStatusByIdInput: DeleteDeliveryStatusByIdInput;
  DeleteDeliveryStatusByIdPayload: DeleteDeliveryStatusByIdPayload;
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
  GeneralDeliveryStateOperationFilterInput: GeneralDeliveryStateOperationFilterInput;
  Int: Scalars['Int']['output'];
  ListFilterInputTypeOfParcelStatusFilterInput: ListFilterInputTypeOfParcelStatusFilterInput;
  Mutation: {};
  PageInfo: PageInfo;
  Parcel: Parcel;
  ParcelFilterInput: ParcelFilterInput;
  ParcelHistoryConnection: ParcelHistoryConnection;
  ParcelHistoryEdge: ParcelHistoryEdge;
  ParcelInfo: ParcelInfo;
  ParcelInfoFilterInput: ParcelInfoFilterInput;
  ParcelInfoSortInput: ParcelInfoSortInput;
  ParcelSearchCriteriaInput: ParcelSearchCriteriaInput;
  ParcelSortInput: ParcelSortInput;
  ParcelStatus: ParcelStatus;
  ParcelStatusFilterInput: ParcelStatusFilterInput;
  ParcelStatusSortInput: ParcelStatusSortInput;
  ParcelTrackingServiceError: ParcelTrackingServiceError;
  ParcelsCursorConnection: ParcelsCursorConnection;
  ParcelsCursorEdge: ParcelsCursorEdge;
  ParcelsOffsetCollectionSegment: ParcelsOffsetCollectionSegment;
  PostOffice: PostOffice;
  PostOfficeCreateDtoInput: PostOfficeCreateDtoInput;
  PostOfficeFilterInput: PostOfficeFilterInput;
  PostOfficePatchDtoInput: PostOfficePatchDtoInput;
  PostOfficeSortInput: PostOfficeSortInput;
  PostOfficesConnection: PostOfficesConnection;
  PostOfficesEdge: PostOfficesEdge;
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

export type ClientDirectiveArgs = { };

export type ClientDirectiveResolver<Result, Parent, ContextType = any, Args = ClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddDeliveryStatusErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddDeliveryStatusError'] = ResolversParentTypes['AddDeliveryStatusError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ParcelTrackingServiceError', ParentType, ContextType>;
}>;

export type AddDeliveryStatusPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddDeliveryStatusPayload'] = ResolversParentTypes['AddDeliveryStatusPayload']> = ResolversObject<{
  deliveryStatus?: Resolver<Maybe<ResolversTypes['DeliveryStatus']>, ParentType, ContextType>;
  errors?: Resolver<Maybe<Array<ResolversTypes['AddDeliveryStatusError']>>, ParentType, ContextType>;
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

export type CollectionSegmentInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionSegmentInfo'] = ResolversParentTypes['CollectionSegmentInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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

export type DeletePostOfficeByIdPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletePostOfficeByIdPayload'] = ResolversParentTypes['DeletePostOfficeByIdPayload']> = ResolversObject<{
  postOffice?: Resolver<Maybe<ResolversTypes['PostOffice']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeliveryStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeliveryStatus'] = ResolversParentTypes['DeliveryStatus']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  generalDeliveryState?: Resolver<ResolversTypes['GeneralDeliveryState'], ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<'ParcelTrackingServiceError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addDeliveryStatus?: Resolver<ResolversTypes['AddDeliveryStatusPayload'], ParentType, ContextType, RequireFields<MutationAddDeliveryStatusArgs, 'input'>>;
  addPostOffice?: Resolver<ResolversTypes['AddPostOfficePayload'], ParentType, ContextType, RequireFields<MutationAddPostOfficeArgs, 'input'>>;
  deleteDeliveryStatusById?: Resolver<ResolversTypes['DeleteDeliveryStatusByIdPayload'], ParentType, ContextType, RequireFields<MutationDeleteDeliveryStatusByIdArgs, 'input'>>;
  deletePostOfficeById?: Resolver<ResolversTypes['DeletePostOfficeByIdPayload'], ParentType, ContextType, RequireFields<MutationDeletePostOfficeByIdArgs, 'input'>>;
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
  deliverySourceAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  parcelContentPrice?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  priceToPay?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  senderId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
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

export type ParcelsCursorConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelsCursorConnection'] = ResolversParentTypes['ParcelsCursorConnection']> = ResolversObject<{
  edges?: Resolver<Maybe<Array<ResolversTypes['ParcelsCursorEdge']>>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelsCursorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelsCursorEdge'] = ResolversParentTypes['ParcelsCursorEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Parcel'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParcelsOffsetCollectionSegmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ParcelsOffsetCollectionSegment'] = ResolversParentTypes['ParcelsOffsetCollectionSegment']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['Parcel']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['CollectionSegmentInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  currentParcelStatus?: Resolver<Maybe<ResolversTypes['ParcelStatus']>, ParentType, ContextType, RequireFields<QueryCurrentParcelStatusArgs, 'parcelId'>>;
  deliveryStatuses?: Resolver<Maybe<ResolversTypes['DeliveryStatusesConnection']>, ParentType, ContextType, Partial<QueryDeliveryStatusesArgs>>;
  parcelById?: Resolver<Maybe<ResolversTypes['Parcel']>, ParentType, ContextType, RequireFields<QueryParcelByIdArgs, 'parcelId'>>;
  parcelHistory?: Resolver<Maybe<ResolversTypes['ParcelHistoryConnection']>, ParentType, ContextType, RequireFields<QueryParcelHistoryArgs, 'parcelId'>>;
  parcelsCursor?: Resolver<Maybe<ResolversTypes['ParcelsCursorConnection']>, ParentType, ContextType, Partial<QueryParcelsCursorArgs>>;
  parcelsOffset?: Resolver<Maybe<ResolversTypes['ParcelsOffsetCollectionSegment']>, ParentType, ContextType, Partial<QueryParcelsOffsetArgs>>;
  postOffices?: Resolver<Maybe<ResolversTypes['PostOfficesConnection']>, ParentType, ContextType, Partial<QueryPostOfficesArgs>>;
  trackedParcelsIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
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
  AddPostOfficeError?: AddPostOfficeErrorResolvers<ContextType>;
  AddPostOfficePayload?: AddPostOfficePayloadResolvers<ContextType>;
  CollectionSegmentInfo?: CollectionSegmentInfoResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  DeleteDeliveryStatusByIdPayload?: DeleteDeliveryStatusByIdPayloadResolvers<ContextType>;
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
  ParcelStatus?: ParcelStatusResolvers<ContextType>;
  ParcelTrackingServiceError?: ParcelTrackingServiceErrorResolvers<ContextType>;
  ParcelsCursorConnection?: ParcelsCursorConnectionResolvers<ContextType>;
  ParcelsCursorEdge?: ParcelsCursorEdgeResolvers<ContextType>;
  ParcelsOffsetCollectionSegment?: ParcelsOffsetCollectionSegmentResolvers<ContextType>;
  PostOffice?: PostOfficeResolvers<ContextType>;
  PostOfficesConnection?: PostOfficesConnectionResolvers<ContextType>;
  PostOfficesEdge?: PostOfficesEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UpdateDeliveryStatusPayload?: UpdateDeliveryStatusPayloadResolvers<ContextType>;
  UpdatePostOfficePayload?: UpdatePostOfficePayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  client?: ClientDirectiveResolver<any, any, ContextType>;
}>;

export const ParcelCardStatusItemFragmentDoc = gql`
    fragment ParcelCardStatusItem on Parcel {
  currentStatus {
    deliveryStatus {
      generalDeliveryState
    }
    statusDescription
  }
}
    `;
export const ParcelDeliveryPathItemFragmentDoc = gql`
    fragment ParcelDeliveryPathItem on Parcel {
  parcelInfo {
    deliveryDestinationAddress
    deliverySourceAddress
  }
}
    `;
export const ParcelCardItemFragmentDoc = gql`
    fragment ParcelCardItem on Parcel {
  id
  parcelInfo {
    id
    description
    priceToPay
    parcelContentPrice
  }
  currentStatus {
    updatedAt
  }
  updatedAt
  ...ParcelCardStatusItem
  ...ParcelDeliveryPathItem
}
    ${ParcelCardStatusItemFragmentDoc}
${ParcelDeliveryPathItemFragmentDoc}`;
export const ParcelPageStatusBlockItemFragmentDoc = gql`
    fragment ParcelPageStatusBlockItem on ParcelStatus {
  id
  date
  statusDescription
  deliveryStatus {
    generalDeliveryState
  }
}
    `;
export const ParcelPageStatusesListItemFragmentDoc = gql`
    fragment ParcelPageStatusesListItem on Parcel {
  parcelStatusHistory {
    ...ParcelPageStatusBlockItem
  }
}
    ${ParcelPageStatusBlockItemFragmentDoc}`;
export const ParcelQrCodeDrawerItemFragmentDoc = gql`
    fragment ParcelQrCodeDrawerItem on Parcel {
  id
}
    `;
export const ParcelPageItemFragmentDoc = gql`
    fragment ParcelPageItem on Parcel {
  id
  parcelInfo {
    id
    description
    priceToPay
    parcelContentPrice
  }
  parcelStatusHistory {
    updatedAt
  }
  updatedAt
  ...ParcelPageStatusesListItem
  ...ParcelQrCodeDrawerItem
  ...ParcelDeliveryPathItem
}
    ${ParcelPageStatusesListItemFragmentDoc}
${ParcelQrCodeDrawerItemFragmentDoc}
${ParcelDeliveryPathItemFragmentDoc}`;
export const GetParcelsDocument = gql`
    query GetParcels($trackedParcelsIds: [UUID]!, $searchCriteria: ParcelSearchCriteriaInput) {
  parcelsCursor(
    where: {id: {in: $trackedParcelsIds}}
    searchCriteria: $searchCriteria
  ) {
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
 *      trackedParcelsIds: // value for 'trackedParcelsIds'
 *      searchCriteria: // value for 'searchCriteria'
 *   },
 * });
 */
export function useGetParcelsQuery(baseOptions: Apollo.QueryHookOptions<GetParcelsQuery, GetParcelsQueryVariables> & ({ variables: GetParcelsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
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
export const GetTrackedParcelsIdsDocument = gql`
    query GetTrackedParcelsIds {
  trackedParcelsIds @client
}
    `;

/**
 * __useGetTrackedParcelsIdsQuery__
 *
 * To run a query within a React component, call `useGetTrackedParcelsIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackedParcelsIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackedParcelsIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrackedParcelsIdsQuery(baseOptions?: Apollo.QueryHookOptions<GetTrackedParcelsIdsQuery, GetTrackedParcelsIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrackedParcelsIdsQuery, GetTrackedParcelsIdsQueryVariables>(GetTrackedParcelsIdsDocument, options);
      }
export function useGetTrackedParcelsIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrackedParcelsIdsQuery, GetTrackedParcelsIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrackedParcelsIdsQuery, GetTrackedParcelsIdsQueryVariables>(GetTrackedParcelsIdsDocument, options);
        }
export function useGetTrackedParcelsIdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTrackedParcelsIdsQuery, GetTrackedParcelsIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrackedParcelsIdsQuery, GetTrackedParcelsIdsQueryVariables>(GetTrackedParcelsIdsDocument, options);
        }
export type GetTrackedParcelsIdsQueryHookResult = ReturnType<typeof useGetTrackedParcelsIdsQuery>;
export type GetTrackedParcelsIdsLazyQueryHookResult = ReturnType<typeof useGetTrackedParcelsIdsLazyQuery>;
export type GetTrackedParcelsIdsSuspenseQueryHookResult = ReturnType<typeof useGetTrackedParcelsIdsSuspenseQuery>;
export type GetTrackedParcelsIdsQueryResult = Apollo.QueryResult<GetTrackedParcelsIdsQuery, GetTrackedParcelsIdsQueryVariables>;
export const GetParcelForPageDocument = gql`
    query GetParcelForPage($parcelId: UUID!) {
  parcelById(parcelId: $parcelId) {
    ...ParcelPageItem
  }
}
    ${ParcelPageItemFragmentDoc}`;

/**
 * __useGetParcelForPageQuery__
 *
 * To run a query within a React component, call `useGetParcelForPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParcelForPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParcelForPageQuery({
 *   variables: {
 *      parcelId: // value for 'parcelId'
 *   },
 * });
 */
export function useGetParcelForPageQuery(baseOptions: Apollo.QueryHookOptions<GetParcelForPageQuery, GetParcelForPageQueryVariables> & ({ variables: GetParcelForPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetParcelForPageQuery, GetParcelForPageQueryVariables>(GetParcelForPageDocument, options);
      }
export function useGetParcelForPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetParcelForPageQuery, GetParcelForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetParcelForPageQuery, GetParcelForPageQueryVariables>(GetParcelForPageDocument, options);
        }
export function useGetParcelForPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetParcelForPageQuery, GetParcelForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetParcelForPageQuery, GetParcelForPageQueryVariables>(GetParcelForPageDocument, options);
        }
export type GetParcelForPageQueryHookResult = ReturnType<typeof useGetParcelForPageQuery>;
export type GetParcelForPageLazyQueryHookResult = ReturnType<typeof useGetParcelForPageLazyQuery>;
export type GetParcelForPageSuspenseQueryHookResult = ReturnType<typeof useGetParcelForPageSuspenseQuery>;
export type GetParcelForPageQueryResult = Apollo.QueryResult<GetParcelForPageQuery, GetParcelForPageQueryVariables>;
export const ParcelStatusUpdatesDocument = gql`
    subscription ParcelStatusUpdates($parcelId: UUID!) {
  parcelStatusUpdated(parcelId: $parcelId) {
    ...ParcelPageStatusBlockItem
    updatedAt
  }
}
    ${ParcelPageStatusBlockItemFragmentDoc}`;

/**
 * __useParcelStatusUpdatesSubscription__
 *
 * To run a query within a React component, call `useParcelStatusUpdatesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useParcelStatusUpdatesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParcelStatusUpdatesSubscription({
 *   variables: {
 *      parcelId: // value for 'parcelId'
 *   },
 * });
 */
export function useParcelStatusUpdatesSubscription(baseOptions: Apollo.SubscriptionHookOptions<ParcelStatusUpdatesSubscription, ParcelStatusUpdatesSubscriptionVariables> & ({ variables: ParcelStatusUpdatesSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ParcelStatusUpdatesSubscription, ParcelStatusUpdatesSubscriptionVariables>(ParcelStatusUpdatesDocument, options);
      }
export type ParcelStatusUpdatesSubscriptionHookResult = ReturnType<typeof useParcelStatusUpdatesSubscription>;
export type ParcelStatusUpdatesSubscriptionResult = Apollo.SubscriptionResult<ParcelStatusUpdatesSubscription>;
export const GetParcelForSearchDocument = gql`
    query GetParcelForSearch($parcelId: UUID!) {
  parcelById(parcelId: $parcelId) {
    id
  }
}
    `;

/**
 * __useGetParcelForSearchQuery__
 *
 * To run a query within a React component, call `useGetParcelForSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetParcelForSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetParcelForSearchQuery({
 *   variables: {
 *      parcelId: // value for 'parcelId'
 *   },
 * });
 */
export function useGetParcelForSearchQuery(baseOptions: Apollo.QueryHookOptions<GetParcelForSearchQuery, GetParcelForSearchQueryVariables> & ({ variables: GetParcelForSearchQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetParcelForSearchQuery, GetParcelForSearchQueryVariables>(GetParcelForSearchDocument, options);
      }
export function useGetParcelForSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetParcelForSearchQuery, GetParcelForSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetParcelForSearchQuery, GetParcelForSearchQueryVariables>(GetParcelForSearchDocument, options);
        }
export function useGetParcelForSearchSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetParcelForSearchQuery, GetParcelForSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetParcelForSearchQuery, GetParcelForSearchQueryVariables>(GetParcelForSearchDocument, options);
        }
export type GetParcelForSearchQueryHookResult = ReturnType<typeof useGetParcelForSearchQuery>;
export type GetParcelForSearchLazyQueryHookResult = ReturnType<typeof useGetParcelForSearchLazyQuery>;
export type GetParcelForSearchSuspenseQueryHookResult = ReturnType<typeof useGetParcelForSearchSuspenseQuery>;
export type GetParcelForSearchQueryResult = Apollo.QueryResult<GetParcelForSearchQuery, GetParcelForSearchQueryVariables>;
export type AddDeliveryStatusPayloadKeySpecifier = ('deliveryStatus' | 'errors' | AddDeliveryStatusPayloadKeySpecifier)[];
export type AddDeliveryStatusPayloadFieldPolicy = {
	deliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddPostOfficePayloadKeySpecifier = ('errors' | 'postOffice' | AddPostOfficePayloadKeySpecifier)[];
export type AddPostOfficePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	postOffice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionSegmentInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | CollectionSegmentInfoKeySpecifier)[];
export type CollectionSegmentInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteDeliveryStatusByIdPayloadKeySpecifier = ('deliveryStatus' | DeleteDeliveryStatusByIdPayloadKeySpecifier)[];
export type DeleteDeliveryStatusByIdPayloadFieldPolicy = {
	deliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePostOfficeByIdPayloadKeySpecifier = ('postOffice' | DeletePostOfficeByIdPayloadKeySpecifier)[];
export type DeletePostOfficeByIdPayloadFieldPolicy = {
	postOffice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliveryStatusKeySpecifier = ('createdAt' | 'generalDeliveryState' | 'id' | 'statusName' | 'updatedAt' | DeliveryStatusKeySpecifier)[];
export type DeliveryStatusFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	generalDeliveryState?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type MutationKeySpecifier = ('addDeliveryStatus' | 'addPostOffice' | 'deleteDeliveryStatusById' | 'deletePostOfficeById' | 'updateDeliveryStatus' | 'updatePostOffice' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addDeliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	addPostOffice?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDeliveryStatusById?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePostOfficeById?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type ParcelInfoKeySpecifier = ('createdAt' | 'deliveryDestinationAddress' | 'deliverySourceAddress' | 'description' | 'id' | 'parcelContentPrice' | 'priceToPay' | 'sender' | 'senderId' | 'updatedAt' | ParcelInfoKeySpecifier)[];
export type ParcelInfoFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryDestinationAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	deliverySourceAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelContentPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	priceToPay?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	senderId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ParcelsCursorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | ParcelsCursorConnectionKeySpecifier)[];
export type ParcelsCursorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelsCursorEdgeKeySpecifier = ('cursor' | 'node' | ParcelsCursorEdgeKeySpecifier)[];
export type ParcelsCursorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ParcelsOffsetCollectionSegmentKeySpecifier = ('items' | 'pageInfo' | 'totalCount' | ParcelsOffsetCollectionSegmentKeySpecifier)[];
export type ParcelsOffsetCollectionSegmentFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
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
export type QueryKeySpecifier = ('currentParcelStatus' | 'deliveryStatuses' | 'parcelById' | 'parcelHistory' | 'parcelsCursor' | 'parcelsOffset' | 'postOffices' | 'trackedParcelsIds' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	currentParcelStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelById?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelsCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	parcelsOffset?: FieldPolicy<any> | FieldReadFunction<any>,
	postOffices?: FieldPolicy<any> | FieldReadFunction<any>,
	trackedParcelsIds?: FieldPolicy<any> | FieldReadFunction<any>
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
	AddPostOfficePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddPostOfficePayloadKeySpecifier | (() => undefined | AddPostOfficePayloadKeySpecifier),
		fields?: AddPostOfficePayloadFieldPolicy,
	},
	CollectionSegmentInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionSegmentInfoKeySpecifier | (() => undefined | CollectionSegmentInfoKeySpecifier),
		fields?: CollectionSegmentInfoFieldPolicy,
	},
	DeleteDeliveryStatusByIdPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteDeliveryStatusByIdPayloadKeySpecifier | (() => undefined | DeleteDeliveryStatusByIdPayloadKeySpecifier),
		fields?: DeleteDeliveryStatusByIdPayloadFieldPolicy,
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
	ParcelStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelStatusKeySpecifier | (() => undefined | ParcelStatusKeySpecifier),
		fields?: ParcelStatusFieldPolicy,
	},
	ParcelTrackingServiceError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelTrackingServiceErrorKeySpecifier | (() => undefined | ParcelTrackingServiceErrorKeySpecifier),
		fields?: ParcelTrackingServiceErrorFieldPolicy,
	},
	ParcelsCursorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelsCursorConnectionKeySpecifier | (() => undefined | ParcelsCursorConnectionKeySpecifier),
		fields?: ParcelsCursorConnectionFieldPolicy,
	},
	ParcelsCursorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelsCursorEdgeKeySpecifier | (() => undefined | ParcelsCursorEdgeKeySpecifier),
		fields?: ParcelsCursorEdgeFieldPolicy,
	},
	ParcelsOffsetCollectionSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ParcelsOffsetCollectionSegmentKeySpecifier | (() => undefined | ParcelsOffsetCollectionSegmentKeySpecifier),
		fields?: ParcelsOffsetCollectionSegmentFieldPolicy,
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