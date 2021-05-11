import Head from 'next/head';
import Image from 'next/image';
import Page from '../components/Page';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Page className={styles.container}>
      <p>main page</p>
    </Page>
  );
}
