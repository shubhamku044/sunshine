import Link from 'next/link';
import React from 'react';

import styles from '../styles/Footer.module.scss';

const footerLinks = {
  'For Students': [
    ['/join', 'Apply'],
    ['/team', 'About'],
    ['/events', 'Events'],
    ['/projects', 'Projects'],
  ],
  'Stay Updated': [
    ['https://www.instagram.com/creativelabsucla', 'Discord'],
    ['https://www.instagram.com/creativelabsucla', 'Instagram'],
  ],
};

function Footer(): JSX.Element {
  return (
    <footer id={styles.footer}>
      <Link href='/'>
        <span id={styles['footer-tag']}>
          <div id={styles.logo}/>
          <h3 className={styles.logotype}>CREATIVE LABS</h3>
        </span>
      </Link>
      <div id={styles['footer-links']}>
        {Object.entries(footerLinks).map(([title, links]) =>
          <div className={styles['footer-col']} key={title}>
            <div className={styles.title}>{title}</div>
            {links.map(([path, display]) => {
              const external = path.charAt(0) === '/'
                ? {}
                : {target: '_blank', rel: 'noreferrer'};
              return (
                <Link href={path} passHref={true} key={`${title}-${display}`}>
                  <a {...external}>{display}</a>
                </Link>
              );
            })}
          </div>,
        )}
      </div>
    </footer>
  );
}

export default Footer;
