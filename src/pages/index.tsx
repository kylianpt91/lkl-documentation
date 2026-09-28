import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <img src="/img/logo.png" alt="" className={styles.logo} />
      <h1 className={styles.title}>
        L'aide dont vous avez <em>besoin</em>,<br />quand vous en avez besoin.
      </h1>
      <p className={styles.subtitle}>
        Guides pas à pas pour vos VPS, hébergements web, bots Discord et votre compte LKL Cloud.
      </p>
      <div className={styles.buttons}>
        <Link className="button button--primary button--lg" to="/vps-linux/premiers-pas">
          Parcourir la documentation
        </Link>
      </div>
      <div className={styles.badges}>
        <span className={styles.badge}>🇫🇷 Infrastructure en France</span>
        <span className={styles.badge}>🛡️ Anti-DDoS inclus</span>
        <span className={styles.badge}>💬 Support 24/7</span>
        <span className={styles.badge}>⚡ 99,9 % de disponibilité</span>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Guides et réponses pour vos VPS, hébergements web et bots Discord LKL Cloud.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
