import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {ArrowRight, MessageCircle, ShieldCheck, Zap, Headset} from 'lucide-react';

import styles from './index.module.css';

function HomepageHeader() {
  const trustItems = [
    {icon: ShieldCheck, label: translate({id: 'homepage.trust.antiDdos', message: 'Anti-DDoS inclus'})},
    {icon: Zap, label: translate({id: 'homepage.trust.uptime', message: '99,9 % de disponibilité'})},
    {icon: Headset, label: translate({id: 'homepage.trust.support', message: 'Support 24/7'})},
  ];
  return (
    <header className={styles.heroBanner}>
      <img src="/img/logo.png" alt="" className={styles.logo} />
      <h1 className={styles.title}>
        <Translate id="homepage.hero.title">
          L'aide dont vous avez besoin, quand vous en avez besoin.
        </Translate>
      </h1>
      <p className={styles.subtitle}>
        <Translate id="homepage.hero.subtitle">
          Guides pas à pas pour vos VPS, hébergements web, bots Discord et votre compte LKL Cloud.
        </Translate>
      </p>
      <div className={styles.buttons}>
        <Link className={styles.buttonPrimary} to="/vps-linux/premiers-pas">
          <Translate id="homepage.hero.browseDocs">Parcourir la documentation</Translate>
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>
        <Link className={styles.buttonSecondary} to="/aide/faq">
          <MessageCircle size={16} strokeWidth={2.5} />
          <Translate id="homepage.hero.contactSupport">Contacter le support</Translate>
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
      description={translate({
        id: 'homepage.description',
        message: 'Guides et réponses pour vos VPS, hébergements web et bots Discord LKL Cloud.',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
