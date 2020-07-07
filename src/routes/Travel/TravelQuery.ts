import { gql } from "apollo-boost";

export const GET_CITYS = gql`
  query getCity($first: Int!) {
    citys {
      name
      photo(first: $first) {
        id
        url
      }
    }
  }
`;

export const GET_CITY_LIST = gql`
  query getCityList($first: Int!) {
    citys {
      name
      photo(first: $first) {
        id
        url
      }
    }
  }
`;
