import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {ArrowRight, MessageCircle, ShieldCheck, Zap, Headset} from 'lucide-react';

import styles from './index.module.css';

const trustItems = [
  {icon: ShieldCheck, label: 'Anti-DDoS inclus'},
  {icon: Zap, label: '99,9 % de disponibilité'},
  {icon: Headset, label: 'Support 24/7'},
];

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
        <Link className={styles.buttonPrimary} to="/vps-linux/premiers-pas">
          Parcourir la documentation
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
        <Link className={styles.buttonSecondary} to="/aide/faq">
          <MessageCircle size={16} strokeWidth={2.5} />
          Contacter le support
        </Link>
      </div>
      <ul className={styles.trustRow}>
        {trustItems.map(({icon: Icon, label}) => (
          <li key={label} className={styles.trustItem}>
            <Icon size={15} strokeWidth={2.25} />
            {label}
          </li>
        ))}
      </ul>
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
