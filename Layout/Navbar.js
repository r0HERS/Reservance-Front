import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Logo from '../../img/Logonovo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = (event) => {
    if (!event.target.closest(`.${styles.burgerIcon}`)) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar} onClick={handleMenuClick}>
      <div className={styles.container}>
        <Link to="/"><img src={Logo} alt="Reservance" className={styles.logo} /></Link>
        <div className={styles.burgerMenu}>
          <FaBars className={styles.burgerIcon} onClick={() => setMenuOpen(true)} />
          <Menu 
            right 
            isOpen={menuOpen} 
            onStateChange={(state) => handleStateChange(state)}
            styles={{ bmMenu: { background: 'black', height: '100%' } }}
          >
            <Link to="/" onClick={() => closeMenu()} className={styles.menuItem}>Home</Link>
            <Link to="/Empresa" onClick={() => closeMenu()} className={styles.menuItem}>O Que Somos?</Link>
            <Link to="/Contato" onClick={() => closeMenu()} className={styles.menuItem}>Contato</Link>
            <Link to="/Entrar" onClick={() => closeMenu()} className={styles.menuItem}>Entrar</Link>
          </Menu>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/">Home</Link></li>
          <li className={styles.navItem}><Link to="/Empresa">O Que Somos?</Link></li>
          <li className={styles.navItem}><Link to="/Contato">Contato</Link></li>
          <li className={styles.navItem}><Link to="/Entrar">Entrar</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
