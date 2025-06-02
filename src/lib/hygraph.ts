import { GraphQLClient, gql } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

console.log(endpoint);


if (!endpoint) {
  throw new Error("HYGRAPH_ENDPOINT not defined in .env.local");
}

const client = new GraphQLClient(endpoint);

type CarouselItem = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type CarouselQueryResponse = {
  carouselItems: CarouselItem[];
};

export const getCarouselItems = async (): Promise<CarouselItem[]> => {
  const query = gql`
    {
      carouselItems(orderBy: createdAt_ASC, first: 10) {
        id
        title
        description
        image {
          url
        }
      }
    }
  `;
  const data = await client.request<CarouselQueryResponse>(query);
  return data.carouselItems;
};

type CardAtencao = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type AtencaoQueryResponse = {
  cardAtencoes: CardAtencao[];
};

export const getCardAtencao = async (): Promise<CardAtencao[]> => {
  const query = gql`
  {
    cardAtencoes(orderBy: createdAt_ASC, first: 10) {
      id
      title
      description
      image {
        url
      }
    }
  }
`;

  const data = await client.request<AtencaoQueryResponse>(query);

return data.cardAtencoes;

};