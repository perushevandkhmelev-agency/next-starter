import classNames from 'classnames'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import styles from 'styles/pages/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={classNames(styles.main, inter.className)}>
      <div className={styles.description}>
        <p>
          <i className={classNames('icon-heart', styles.heart)} aria-hidden={true} />
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={require('assets/img/next.svg')}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and&nbsp;API.</p>
        </a>
      </div>
    </main>
  )
}
