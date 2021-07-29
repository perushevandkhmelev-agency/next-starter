/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: newsItems
// ====================================================

export interface newsItems_newsItems {
  __typename: "NewsItems";
  id: string;
  title: string | null;
}

export interface newsItems {
  newsItems: (newsItems_newsItems | null)[] | null;
}

export interface newsItemsVariables {
  limit?: number | null;
  start?: number | null;
}
