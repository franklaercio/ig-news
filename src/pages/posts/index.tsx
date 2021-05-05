import Heed from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Heed>
        <title>Posts | Ignews</title>
      </Heed>

      <main>
        <a>
          <time>12 de março de 2021</time>
          <strong>Creating Testing</strong>
          <p>In this post a will testing...</p>
        </a>
        <a>
          <time>12 de março de 2021</time>
          <strong>Creating Testing</strong>
          <p>In this post a will testing...</p>
        </a>
        <a>
          <time>12 de março de 2021</time>
          <strong>Creating Testing</strong>
          <p>In this post a will testing...</p>
        </a>
      </main>
    </>
  );
}