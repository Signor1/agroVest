import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const ListedFarmProducts = async () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_QUERY_URL,
    cache: new InMemoryCache(),
  });
  const GET_products = gql`
      query{  productAddeds(first: 5) {
    id
    farmer
		productName
    blockTimestamp
    
  }}
      }`;

  try {
    const { data } = await client.query({ query: GET_products });
    return data.eventCreateds;
  } catch (error) {
    console.error("error fetching data", error);
  }
};
