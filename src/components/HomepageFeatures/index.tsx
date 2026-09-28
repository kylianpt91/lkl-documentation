import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'VPS Linux',
    icon: '🖥️',
    description: 'Premiers pas, SSH, console de secours, réinstallation.',
    to: '/vps-linux/premiers-pas',
  },
  {
    title: 'Hébergement web',
    icon: '🌐',
    description: 'Panel Plesk, domaines, SSL, bases de données, sauvegardes.',
    to: '/web/plesk-debuter',
  },
  {
    title: 'Bots Discord',
    icon: '🤖',
    description: 'Déployer, configurer et faire évoluer votre bot Node.js ou Python.',
    to: '/bots-discord/demarrer',
  },
  {
    title: 'Compte & facturation',
    icon: '💳',
    description: 'Moyens de paiement, virement bancaire, sécurité du compte.',
    to: '/compte/moyens-de-paiement',
  },
];

function Feature({title, icon, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={to} className={styles.card}>
        <span className={styles.icon}>{icon}</span>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
