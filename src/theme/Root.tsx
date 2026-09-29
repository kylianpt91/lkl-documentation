import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {Zap, X} from 'lucide-react';
import styles from './Root.module.css';

const DISMISS_KEY = 'lkl-doc-promo-dismissed';

function isHomepage(pathname: string): boolean {
  return /^\/(en\/)?$/.test(pathname);
}

function PromoCard() {
  const location = useLocation();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      setDismissed(false);
    }
  }, []);

  if (isHomepage(location.pathname) || dismissed) return null;

  const close = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  return (
    <div className={styles.card}>
      <button className={styles.close} onClick={close} aria-label="Fermer">
        <X size={14} strokeWidth={2.5} />
      </button>
      <span className={styles.iconWrap}><Zap size={16} strokeWidth={2.5} /></span>
      <p className={styles.text}>
        <Translate id="promo.text">Besoin d'un serveur performant pour vos projets ?</Translate>
      </p>
      <Link className={styles.cta} to="https://lklcloud.fr">
        <Translate id="promo.cta">Découvrir nos offres</Translate>
      </Link>
    </div>
  );
}

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <>
      {children}
      <PromoCard />
    </>
  );
}
