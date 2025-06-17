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
      carouselItems(orderBy: createdAt_DESC, first: 10) {
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
    cardAtencoes(orderBy: createdAt_DESC, first: 10) {
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

type CardEMULTI = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type EMULTIQueryResponse = {
  cardsEmulti: CardEMULTI[]; // nome correto: "cardsEmulti"
};

export const getCardEMULTI = async (): Promise<CardEMULTI[]> => {
  const query = gql`
    {
      cardsEmulti(orderBy: createdAt_DESC, first: 10) {
        id
        title
        description
        image {
          url
        }
      }
    }
  `;

  const data = await client.request<EMULTIQueryResponse>(query);
  console.log(data.cardsEmulti); // agora funciona corretamente

  return data.cardsEmulti;
};

type CardTempoCrescer = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type TempoCrescerQueryResponse = {
  cardsTempoCrescer: CardTempoCrescer[]; // nome correto: "cardsTempoCrescer"
};

export const getCardTempoCrescer = async (): Promise<CardTempoCrescer[]> => {
  const query = gql`
    {
      cardsTempoCrescer(orderBy: createdAt_DESC, first: 10) {
        id
        title
        description
        image {
          url
        }
      }
    }
  `;

  const data = await client.request<TempoCrescerQueryResponse>(query);
  console.log(data.cardsTempoCrescer); // agora funciona corretamente

  return data.cardsTempoCrescer;
};

type CardVigilancia = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type VigilanciaQueryResponse = {
  cardsVigilancia: CardVigilancia[]; // nome correto: "cardsVigilancia"
};

export const getCardVigilancia = async (): Promise<CardVigilancia[]> => {
  const query = gql`
    {
      cardsVigilancia(orderBy: createdAt_DESC, first: 10) {
        id
        title
        description
        image {
          url
        }
      }
    }
  `;

  const data = await client.request<VigilanciaQueryResponse>(query);
  console.log(data.cardsVigilancia); // agora funciona corretamente

  return data.cardsVigilancia;
};

export async function getCardEndemias() {
  const query = `
    query GetCardEndemias {
      cards(where: { category: { name: "Endemias" } }) {
        id
        title
        description
        image {
          url
        }
      }
    }
  `;

  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  return json.data.cards;
}