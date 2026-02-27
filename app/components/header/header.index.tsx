import { NavLink } from 'react-bootstrap';
import '../../app.css';
import styles from './header.module.css'
import { useEffect, useState } from "react";
import { useWindowDimensions } from '~/hooks/use-window-dimensions';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const { width } = useWindowDimensions();

  const isSmall = width !== null && width <= 576;
  const isTablet = width !== null && width > 576 && width <= 1024;
  const isDesktop = width !== null && width > 1024;


  return (
    <header id={styles['header-main']}>
      <div id={styles['header-content']}>
        {isSmall ? (
          <div id={styles['mobile-header']}>
            <a href="/" id={styles['logo']}>
              <h1 >Atlas Project Manager</h1>        
            </a>
            <button id={styles['menu-toggle']} onClick={() => setMenuVisible(!menuVisible)}>Menu</button>
          </div>
        ) : (
          <a href="/" id={styles['logo']}>
            <h1 >Atlas Project Manager</h1>        
          </a>
        )}
        {!isSmall ? (
          <>
            <NavLink className={styles.navLink} href="/">Home</NavLink>
            <NavLink className={styles.navLink} href="/documentation">Docs</NavLink>
            <NavLink className={styles.navLink} href="/pricing">Pricing</NavLink>
            <NavLink className={styles.navLink} href="/login">Log In</NavLink>
          </>

        ) : isSmall && menuVisible ? (
          <div id={styles['mobile-menu']}>
            <NavLink className={styles.navLink} href="/">Home</NavLink>
            <NavLink className={styles.navLink} href="/documentation">Docs</NavLink>
            <NavLink className={styles.navLink} href="/pricing">Pricing</NavLink>
            <NavLink className={styles.navLink} href="/login">Log In</NavLink>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}