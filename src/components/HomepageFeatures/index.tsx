import type {ReactNode, ComponentType} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import {Server, Globe, Bot, CreditCard, ArrowRight} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ComponentType<{size?: number; strokeWidth?: number}>;
  description: string;
  to: string;
};

function useFeatureList(): FeatureItem[] {
  return [
    {
      title: 'VPS Linux',
      icon: Server,
      description: translate({id: 'homepage.feature.vps', message: 'Premiers pas, SSH, console de secours, réinstallation.'}),
      to: '/vps-linux/premiers-pas',
    },
    {
      title: translate({id: 'homepage.feature.web.title', message: 'Hébergement web'}),
      icon: Globe,
      description: translate({id: 'homepage.feature.web', message: 'Panel Plesk, domaines, SSL, bases de données, sauvegardes.'}),
      to: '/web/plesk-debuter',
    },
    {
      title: translate({id: 'homepage.feature.bots.title', message: 'Bots Discord'}),
      icon: Bot,
      description: translate({id: 'homepage.feature.bots', message: 'Déployer, configurer et faire évoluer votre bot Node.js ou Python.'}),
      to: '/bots-discord/demarrer',
    },
    {
      title: translate({id: 'homepage.feature.account.title', message: 'Compte & facturation'}),
      icon: CreditCard,
      description: translate({id: 'homepage.feature.account', message: 'Moyens de paiement, virement bancaire, sécurité du compte.'}),
      to: '/compte/moyens-de-paiement',
    },
  ];
}

function Feature({title, icon: Icon, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={to} className={styles.card}>
        <span className={styles.iconWrap}><Icon size={20} strokeWidth={2.25} /></span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <span className={styles.arrow}>
          <Translate id="homepage.feature.read">Lire</Translate> <ArrowRight size={13} strokeWidth={2.5} />
        </span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const featureList = useFeatureList();
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate id="homepage.feature.sectionTitle">Par où commencer ?</Translate>
        </h2>
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
