import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

/** Contest */
export type Contest = {
  __typename?: 'Contest';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  endAt?: Maybe<Scalars['Date']>;
  prize?: Maybe<Prize>;
  score?: Maybe<Scalars['String']>;
  winner?: Maybe<User>;
  winnerId?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  endContest?: Maybe<Contest>;
  login?: Maybe<User>;
  pushToken?: Maybe<Scalars['String']>;
  register?: Maybe<User>;
  updateScore?: Maybe<User>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPushTokenArgs = {
  pushToken: Scalars['String'];
};


export type MutationRegisterArgs = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  whereYouFindUs?: Maybe<Scalars['String']>;
};


export type MutationUpdateScoreArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
};

export type Prize = {
  __typename?: 'Prize';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** User */
export type Query = {
  __typename?: 'Query';
  currentContest?: Maybe<Contest>;
  hello?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastContests?: Maybe<Array<Maybe<Contest>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type SmallContest = {
  __typename?: 'SmallContest';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  rank?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  contests?: Maybe<Array<Maybe<SmallContest>>>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['String']>;
  whereYouFindUs?: Maybe<Scalars['String']>;
};

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contest: ResolverTypeWrapper<Contest>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Prize: ResolverTypeWrapper<Prize>;
  Query: ResolverTypeWrapper<{}>;
  SmallContest: ResolverTypeWrapper<SmallContest>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Contest: Contest;
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Prize: Prize;
  Query: {};
  SmallContest: SmallContest;
  String: Scalars['String'];
  User: User;
}>;

export type ConstraintDirectiveArgs = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  exclusiveMax?: Maybe<Scalars['Int']>;
  exclusiveMin?: Maybe<Scalars['Int']>;
  format?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  maxLength?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  minLength?: Maybe<Scalars['Int']>;
  multipleOf?: Maybe<Scalars['Int']>;
  notContains?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  uniqueTypeName?: Maybe<Scalars['String']>;
};

export type ConstraintDirectiveResolver<Result, Parent, ContextType = any, Args = ConstraintDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ContestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contest'] = ResolversParentTypes['Contest']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  endAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  prize?: Resolver<Maybe<ResolversTypes['Prize']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  winner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  winnerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  endContest?: Resolver<Maybe<ResolversTypes['Contest']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  pushToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationPushTokenArgs, 'pushToken'>>;
  register?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'displayName' | 'email' | 'password'>>;
  updateScore?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateScoreArgs, never>>;
}>;

export type PrizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prize'] = ResolversParentTypes['Prize']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  currentContest?: Resolver<Maybe<ResolversTypes['Contest']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lastContests?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contest']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type SmallContestResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmallContest'] = ResolversParentTypes['SmallContest']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  contests?: Resolver<Maybe<Array<Maybe<ResolversTypes['SmallContest']>>>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whereYouFindUs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Contest?: ContestResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Prize?: PrizeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SmallContest?: SmallContestResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
}>;

export type ContestInfoFragment = { __typename?: 'Contest', _id?: Maybe<string>, createdAt?: Maybe<any>, endAt?: Maybe<any>, prize?: Maybe<{ __typename?: 'Prize', description?: Maybe<string>, value?: Maybe<string> }> };

export type LastContestsQueryVariables = Exact<{ [key: string]: never; }>;


export type LastContestsQuery = { __typename?: 'Query', lastContests?: Maybe<Array<Maybe<{ __typename?: 'Contest', score?: Maybe<string>, _id?: Maybe<string>, createdAt?: Maybe<any>, endAt?: Maybe<any>, winner?: Maybe<{ __typename?: 'User', _id?: Maybe<string>, displayName?: Maybe<string>, email?: Maybe<string> }>, prize?: Maybe<{ __typename?: 'Prize', description?: Maybe<string>, value?: Maybe<string> }> }>>> };

export type CurrentContestQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentContestQuery = { __typename?: 'Query', currentContest?: Maybe<{ __typename?: 'Contest', _id?: Maybe<string>, createdAt?: Maybe<any>, endAt?: Maybe<any>, prize?: Maybe<{ __typename?: 'Prize', description?: Maybe<string>, value?: Maybe<string> }> }> };

export type EndContestMutationVariables = Exact<{ [key: string]: never; }>;


export type EndContestMutation = { __typename?: 'Mutation', endContest?: Maybe<{ __typename?: 'Contest', _id?: Maybe<string>, createdAt?: Maybe<any>, endAt?: Maybe<any>, prize?: Maybe<{ __typename?: 'Prize', description?: Maybe<string>, value?: Maybe<string> }> }> };

export type UserInfosFragment = { __typename?: 'User', _id?: Maybe<string>, displayName?: Maybe<string>, token?: Maybe<string>, email?: Maybe<string>, score?: Maybe<number>, contests?: Maybe<Array<Maybe<{ __typename?: 'SmallContest', rank?: Maybe<number>, createdAt?: Maybe<any>, score?: Maybe<number>, _id?: Maybe<string> }>>> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', _id?: Maybe<string>, displayName?: Maybe<string>, token?: Maybe<string>, email?: Maybe<string>, score?: Maybe<number>, contests?: Maybe<Array<Maybe<{ __typename?: 'SmallContest', rank?: Maybe<number>, createdAt?: Maybe<any>, score?: Maybe<number>, _id?: Maybe<string> }>>> }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Maybe<Array<Maybe<{ __typename?: 'User', _id?: Maybe<string>, displayName?: Maybe<string>, email?: Maybe<string>, score?: Maybe<number> }>>> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: Maybe<{ __typename?: 'User', _id?: Maybe<string>, displayName?: Maybe<string>, token?: Maybe<string>, email?: Maybe<string>, score?: Maybe<number>, contests?: Maybe<Array<Maybe<{ __typename?: 'SmallContest', rank?: Maybe<number>, createdAt?: Maybe<any>, score?: Maybe<number>, _id?: Maybe<string> }>>> }> };

export type UpdateScoreMutationVariables = Exact<{
  isActive?: Maybe<Scalars['Boolean']>;
}>;


export type UpdateScoreMutation = { __typename?: 'Mutation', updateScore?: Maybe<{ __typename?: 'User', _id?: Maybe<string>, displayName?: Maybe<string>, token?: Maybe<string>, email?: Maybe<string>, score?: Maybe<number>, contests?: Maybe<Array<Maybe<{ __typename?: 'SmallContest', rank?: Maybe<number>, createdAt?: Maybe<any>, score?: Maybe<number>, _id?: Maybe<string> }>>> }> };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  displayName: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: Maybe<{ __typename?: 'User', _id?: Maybe<string>, displayName?: Maybe<string>, token?: Maybe<string>, email?: Maybe<string>, score?: Maybe<number>, contests?: Maybe<Array<Maybe<{ __typename?: 'SmallContest', rank?: Maybe<number>, createdAt?: Maybe<any>, score?: Maybe<number>, _id?: Maybe<string> }>>> }> };

export type PushTokenMutationVariables = Exact<{
  pushToken: Scalars['String'];
}>;


export type PushTokenMutation = { __typename?: 'Mutation', pushToken?: Maybe<string> };

export const ContestInfoFragmentDoc = gql`
    fragment ContestInfo on Contest {
  _id
  createdAt
  endAt
  prize {
    description
    value
  }
}
    `;
export const UserInfosFragmentDoc = gql`
    fragment UserInfos on User {
  _id
  displayName
  token
  email
  score
  contests {
    rank
    createdAt
    score
    _id
  }
}
    `;
export const LastContestsDocument = gql`
    query lastContests {
  lastContests {
    ...ContestInfo
    score
    winner {
      _id
      displayName
      email
    }
  }
}
    ${ContestInfoFragmentDoc}`;
export type LastContestsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LastContestsQuery, LastContestsQueryVariables>, 'query'>;

    export const LastContestsComponent = (props: LastContestsComponentProps) => (
      <ApolloReactComponents.Query<LastContestsQuery, LastContestsQueryVariables> query={LastContestsDocument} {...props} />
    );
    

/**
 * __useLastContestsQuery__
 *
 * To run a query within a React component, call `useLastContestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastContestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastContestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLastContestsQuery(baseOptions?: Apollo.QueryHookOptions<LastContestsQuery, LastContestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LastContestsQuery, LastContestsQueryVariables>(LastContestsDocument, options);
      }
export function useLastContestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastContestsQuery, LastContestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LastContestsQuery, LastContestsQueryVariables>(LastContestsDocument, options);
        }
export type LastContestsQueryHookResult = ReturnType<typeof useLastContestsQuery>;
export type LastContestsLazyQueryHookResult = ReturnType<typeof useLastContestsLazyQuery>;
export type LastContestsQueryResult = Apollo.QueryResult<LastContestsQuery, LastContestsQueryVariables>;
export const CurrentContestDocument = gql`
    query currentContest {
  currentContest {
    ...ContestInfo
  }
}
    ${ContestInfoFragmentDoc}`;
export type CurrentContestComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CurrentContestQuery, CurrentContestQueryVariables>, 'query'>;

    export const CurrentContestComponent = (props: CurrentContestComponentProps) => (
      <ApolloReactComponents.Query<CurrentContestQuery, CurrentContestQueryVariables> query={CurrentContestDocument} {...props} />
    );
    

/**
 * __useCurrentContestQuery__
 *
 * To run a query within a React component, call `useCurrentContestQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentContestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentContestQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentContestQuery(baseOptions?: Apollo.QueryHookOptions<CurrentContestQuery, CurrentContestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentContestQuery, CurrentContestQueryVariables>(CurrentContestDocument, options);
      }
export function useCurrentContestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentContestQuery, CurrentContestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentContestQuery, CurrentContestQueryVariables>(CurrentContestDocument, options);
        }
export type CurrentContestQueryHookResult = ReturnType<typeof useCurrentContestQuery>;
export type CurrentContestLazyQueryHookResult = ReturnType<typeof useCurrentContestLazyQuery>;
export type CurrentContestQueryResult = Apollo.QueryResult<CurrentContestQuery, CurrentContestQueryVariables>;
export const EndContestDocument = gql`
    mutation endContest {
  endContest {
    ...ContestInfo
  }
}
    ${ContestInfoFragmentDoc}`;
export type EndContestMutationFn = Apollo.MutationFunction<EndContestMutation, EndContestMutationVariables>;
export type EndContestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<EndContestMutation, EndContestMutationVariables>, 'mutation'>;

    export const EndContestComponent = (props: EndContestComponentProps) => (
      <ApolloReactComponents.Mutation<EndContestMutation, EndContestMutationVariables> mutation={EndContestDocument} {...props} />
    );
    

/**
 * __useEndContestMutation__
 *
 * To run a mutation, you first call `useEndContestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndContestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endContestMutation, { data, loading, error }] = useEndContestMutation({
 *   variables: {
 *   },
 * });
 */
export function useEndContestMutation(baseOptions?: Apollo.MutationHookOptions<EndContestMutation, EndContestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EndContestMutation, EndContestMutationVariables>(EndContestDocument, options);
      }
export type EndContestMutationHookResult = ReturnType<typeof useEndContestMutation>;
export type EndContestMutationResult = Apollo.MutationResult<EndContestMutation>;
export type EndContestMutationOptions = Apollo.BaseMutationOptions<EndContestMutation, EndContestMutationVariables>;
export const UserDocument = gql`
    query user {
  user {
    ...UserInfos
  }
}
    ${UserInfosFragmentDoc}`;
export type UserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserQuery, UserQueryVariables>, 'query'>;

    export const UserComponent = (props: UserComponentProps) => (
      <ApolloReactComponents.Query<UserQuery, UserQueryVariables> query={UserDocument} {...props} />
    );
    

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query users {
  users {
    _id
    displayName
    email
    score
  }
}
    `;
export type UsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersQuery, UsersQueryVariables>, 'query'>;

    export const UsersComponent = (props: UsersComponentProps) => (
      <ApolloReactComponents.Query<UsersQuery, UsersQueryVariables> query={UsersDocument} {...props} />
    );
    

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ...UserInfos
  }
}
    ${UserInfosFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateScoreDocument = gql`
    mutation updateScore($isActive: Boolean) {
  updateScore(isActive: $isActive) {
    ...UserInfos
  }
}
    ${UserInfosFragmentDoc}`;
export type UpdateScoreMutationFn = Apollo.MutationFunction<UpdateScoreMutation, UpdateScoreMutationVariables>;
export type UpdateScoreComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateScoreMutation, UpdateScoreMutationVariables>, 'mutation'>;

    export const UpdateScoreComponent = (props: UpdateScoreComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateScoreMutation, UpdateScoreMutationVariables> mutation={UpdateScoreDocument} {...props} />
    );
    

/**
 * __useUpdateScoreMutation__
 *
 * To run a mutation, you first call `useUpdateScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScoreMutation, { data, loading, error }] = useUpdateScoreMutation({
 *   variables: {
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useUpdateScoreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScoreMutation, UpdateScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScoreMutation, UpdateScoreMutationVariables>(UpdateScoreDocument, options);
      }
export type UpdateScoreMutationHookResult = ReturnType<typeof useUpdateScoreMutation>;
export type UpdateScoreMutationResult = Apollo.MutationResult<UpdateScoreMutation>;
export type UpdateScoreMutationOptions = Apollo.BaseMutationOptions<UpdateScoreMutation, UpdateScoreMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $password: String!, $displayName: String!) {
  register(email: $email, password: $password, displayName: $displayName) {
    ...UserInfos
  }
}
    ${UserInfosFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      displayName: // value for 'displayName'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const PushTokenDocument = gql`
    mutation pushToken($pushToken: String!) {
  pushToken(pushToken: $pushToken)
}
    `;
export type PushTokenMutationFn = Apollo.MutationFunction<PushTokenMutation, PushTokenMutationVariables>;
export type PushTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PushTokenMutation, PushTokenMutationVariables>, 'mutation'>;

    export const PushTokenComponent = (props: PushTokenComponentProps) => (
      <ApolloReactComponents.Mutation<PushTokenMutation, PushTokenMutationVariables> mutation={PushTokenDocument} {...props} />
    );
    

/**
 * __usePushTokenMutation__
 *
 * To run a mutation, you first call `usePushTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePushTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pushTokenMutation, { data, loading, error }] = usePushTokenMutation({
 *   variables: {
 *      pushToken: // value for 'pushToken'
 *   },
 * });
 */
export function usePushTokenMutation(baseOptions?: Apollo.MutationHookOptions<PushTokenMutation, PushTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PushTokenMutation, PushTokenMutationVariables>(PushTokenDocument, options);
      }
export type PushTokenMutationHookResult = ReturnType<typeof usePushTokenMutation>;
export type PushTokenMutationResult = Apollo.MutationResult<PushTokenMutation>;
export type PushTokenMutationOptions = Apollo.BaseMutationOptions<PushTokenMutation, PushTokenMutationVariables>;