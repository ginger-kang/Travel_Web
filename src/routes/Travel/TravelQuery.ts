import { gql } from "apollo-boost";

export const CITYS = gql`
  query {
    citys {
      name
      photo {
        id
        url
      }
    }
  }
`;
