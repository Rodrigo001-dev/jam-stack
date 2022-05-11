import { GetServerSideProps } from 'next';

import { usePageQuery, PageDocument } from '../generated/graphql';
import { client, ssrCache } from '../lib/urql';

import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';

export default function Home() {
  // quando eu executo essa query aqui no client side a informação já está em chace
  // por ela ter vindo do server side
  const [{ data }] = usePageQuery({ 
    variables: { 
      slug: 'home' 
    } 
  })
  
  return (
    <>
      <Hero title={data.page.title} subtitle={data.page.subtitle} />
      <Features />
      <Pricing />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // informação sendo carregada pelo server side
  await client.query(PageDocument, { slug: 'home' }).toPromise();
  
  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
};
