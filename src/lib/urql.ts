// podemos pensar que o urql como se fosse um axios para GraphQL
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql';

// verificando se o código esta rodando do lado do browser ou do servidor
// window não existe no serverSide(lado do servidor)
const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
  url: 'https://api-sa-east-1.graphcms.com/v2/cl30k3ynw0ok301xm6n5k5xqr/master',
  // dedupExchange: se eu fizer uma query para o meu endpoint GraphQL duplicada
  // ele tira essa duplicação e faz uma unica vez 
  // fetchExchange: vai realizar as chamadas a API utilizando a API de fetch do
  // próprio navegador
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };