import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphQLDateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Category = {
  __typename?: "Category";
  _id: Scalars["ID"];
  description: Scalars["String"];
  films?: Maybe<Array<Maybe<Film>>>;
  image?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
};

export type CategoryInput = {
  description: Scalars["String"];
  films?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
};

export type CategoryRelation = {
  __typename?: "CategoryRelation";
  _id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

export type CreatePodcastInput = {
  name: Scalars["String"];
  url: Scalars["String"];
};

export type DeletePayload = {
  __typename?: "DeletePayload";
  id: Scalars["ID"];
};

export type DeletePodcastInput = {
  id: Scalars["ID"];
};

export type Film = {
  __typename?: "Film";
  _id?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  genre?: Maybe<CategoryRelation>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  national?: Maybe<Scalars["String"]>;
  rate?: Maybe<Scalars["Int"]>;
  startDate?: Maybe<Scalars["GraphQLDateTime"]>;
  status?: Maybe<Scalars["String"]>;
};

export type FilmInput = {
  description: Scalars["String"];
  genre?: InputMaybe<Scalars["String"]>;
  image: Scalars["String"];
  name: Scalars["String"];
  national?: InputMaybe<Scalars["String"]>;
  rate?: InputMaybe<Scalars["Int"]>;
  startDate?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
};

export type FilmPaginator = {
  __typename?: "FilmPaginator";
  films?: Maybe<Array<Maybe<Film>>>;
  paginator?: Maybe<Paginator>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCategory?: Maybe<Category>;
  createFilm?: Maybe<Film>;
  createPodcast: Podcast;
  deletePodcast: DeletePayload;
  updatePodcast: Podcast;
};

export type MutationCreateCategoryArgs = {
  data?: InputMaybe<CategoryInput>;
};

export type MutationCreateFilmArgs = {
  data?: InputMaybe<FilmInput>;
};

export type MutationCreatePodcastArgs = {
  input: CreatePodcastInput;
};

export type MutationDeletePodcastArgs = {
  id: Scalars["ID"];
};

export type MutationUpdatePodcastArgs = {
  id: Scalars["ID"];
  input: UpdatePodcastInput;
};

export type Paginator = {
  __typename?: "Paginator";
  currentPage?: Maybe<Scalars["Int"]>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  next?: Maybe<Scalars["Int"]>;
  pageCount?: Maybe<Scalars["Int"]>;
  perPage?: Maybe<Scalars["Int"]>;
  prev?: Maybe<Scalars["Int"]>;
};

export type Podcast = {
  __typename?: "Podcast";
  id: Scalars["ID"];
  name: Scalars["String"];
  url: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  categories?: Maybe<Array<Maybe<Category>>>;
  categoryId?: Maybe<Category>;
  filmId?: Maybe<Film>;
  filmPaginate?: Maybe<FilmPaginator>;
  filmStatus?: Maybe<Array<Maybe<Film>>>;
  films?: Maybe<Array<Maybe<Film>>>;
  podcasts?: Maybe<Array<Maybe<Podcast>>>;
};

export type QueryCategoryIdArgs = {
  _id: Scalars["ID"];
};

export type QueryFilmIdArgs = {
  _id: Scalars["ID"];
};

export type QueryFilmPaginateArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
};

export type QueryFilmStatusArgs = {
  status?: InputMaybe<Scalars["String"]>;
};

export type UpdatePodcastInput = {
  name?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type AllCategoryQueryVariables = Exact<{ [key: string]: never }>;

export type AllCategoryQuery = {
  __typename?: "Query";
  categories?: Array<{
    __typename?: "Category";
    _id: string;
    name: string;
  } | null> | null;
};

export type AllFilmsQueryVariables = Exact<{ [key: string]: never }>;

export type AllFilmsQuery = {
  __typename?: "Query";
  films?: Array<{
    __typename?: "Film";
    _id?: string | null;
    name?: string | null;
  } | null> | null;
};

export type FilmStatusQueryVariables = Exact<{ [key: string]: never }>;

export type FilmStatusQuery = {
  __typename?: "Query";
  filmStatusOpen?: Array<{
    __typename?: "Film";
    _id?: string | null;
    name?: string | null;
    image?: string | null;
    rate?: number | null;
    status?: string | null;
    startDate?: any | null;
  } | null> | null;
  filmStatusPending?: Array<{
    __typename?: "Film";
    _id?: string | null;
    name?: string | null;
    image?: string | null;
    rate?: number | null;
    status?: string | null;
    startDate?: any | null;
  } | null> | null;
  filmStatusEnd?: Array<{
    __typename?: "Film";
    _id?: string | null;
    name?: string | null;
    image?: string | null;
    rate?: number | null;
    status?: string | null;
    startDate?: any | null;
  } | null> | null;
};

export type FieldFilmFragment = {
  __typename?: "Film";
  _id?: string | null;
  name?: string | null;
  image?: string | null;
  rate?: number | null;
  status?: string | null;
  startDate?: any | null;
};

export const FieldFilmFragmentDoc = `
    fragment fieldFilm on Film {
  _id
  name
  image
  rate
  status
  startDate
}
    `;
export const AllCategoryDocument = `
    query AllCategory {
  categories {
    _id
    name
  }
}
    `;
export const useAllCategoryQuery = <TData = AllCategoryQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: AllCategoryQueryVariables,
  options?: UseQueryOptions<AllCategoryQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<AllCategoryQuery, TError, TData>(
    variables === undefined ? ["AllCategory"] : ["AllCategory", variables],
    fetcher<AllCategoryQuery, AllCategoryQueryVariables>(
      client,
      AllCategoryDocument,
      variables,
      headers
    ),
    options
  );
export const AllFilmsDocument = `
    query AllFilms {
  films {
    _id
    name
  }
}
    `;
export const useAllFilmsQuery = <TData = AllFilmsQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: AllFilmsQueryVariables,
  options?: UseQueryOptions<AllFilmsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<AllFilmsQuery, TError, TData>(
    variables === undefined ? ["AllFilms"] : ["AllFilms", variables],
    fetcher<AllFilmsQuery, AllFilmsQueryVariables>(
      client,
      AllFilmsDocument,
      variables,
      headers
    ),
    options
  );
export const FilmStatusDocument = `
    query filmStatus {
  filmStatusOpen: filmStatus(status: "open") {
    ...fieldFilm
  }
  filmStatusPending: filmStatus(status: "pending") {
    ...fieldFilm
  }
  filmStatusEnd: filmStatus(status: "end") {
    ...fieldFilm
  }
}
    ${FieldFilmFragmentDoc}`;
export const useFilmStatusQuery = <TData = FilmStatusQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: FilmStatusQueryVariables,
  options?: UseQueryOptions<FilmStatusQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<FilmStatusQuery, TError, TData>(
    variables === undefined ? ["filmStatus"] : ["filmStatus", variables],
    fetcher<FilmStatusQuery, FilmStatusQueryVariables>(
      client,
      FilmStatusDocument,
      variables,
      headers
    ),
    options
  );
