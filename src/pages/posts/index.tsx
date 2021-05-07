import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Heed from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Heed>
        <title>Posts | Ignews</title>
      </Heed>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta sagittis lacus</p>
          </a>
          <a href="#"> 
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta sagittis lacus</p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta sagittis lacus</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticPropos: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'publication')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100
  });

  return {
    props: {}
  }
}