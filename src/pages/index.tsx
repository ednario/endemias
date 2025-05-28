import React from "react";
import HomePage from "./Home";
import fetchHygraphQuery from '@/lib/fetch-hygraph-query'
import { HomePageData } from '@/types/page-info'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        acoes {
          imagem {
            url
          }
          titulo
          descricao
        }
    }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24, // 24 hours
  )
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  console.log(pageData.acoes)
  return (
    <>
      <HomePage />
    </>
  );
}