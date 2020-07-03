import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const GRAPHCMS_API =
  "https://api-ap-northeast-1.graphcms.com/v2/ckc50e9lu01gh01whb5ed5pdo/master"; // ココにエンドポイントを貼り付ける

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
});

export default client;
