import type {ReactNode, ComponentType} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {Server, Globe, Bot, CreditCard, ArrowRight} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ComponentType<{size?: number; strokeWidth?: number}>;
  description: string;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'VPS Linux',
    icon: Server,
    description: 'Premiers pas, SSH, console de secours, réinstallation.',
    to: '/vps-linux/premiers-pas',
  },
  {
    title: 'Hébergement web',
    icon: Globe,
    description: 'Panel Plesk, domaines, SSL, bases de données, sauvegardes.',
    to: '/web/plesk-debuter',
  },
  {
    title: 'Bots Discord',
    icon: Bot,
    description: 'Déployer, configurer et faire évoluer votre bot Node.js ou Python.',
    to: '/bots-discord/demarrer',
  },
  {
    title: 'Compte & facturation',
    icon: CreditCard,
    description: 'Moyens de paiement, virement bancaire, sécurité du compte.',
    to: '/compte/moyens-de-paiement',
  },
];

function Feature({title, icon: Icon, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={to} className={styles.card}>
        <span className={styles.iconWrap}><Icon size={20} strokeWidth={2.25} /></span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <span className={styles.arrow}>Lire <ArrowRight size={13} strokeWidth={2.5} /></span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Par où commencer ?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
