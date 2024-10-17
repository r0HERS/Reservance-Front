import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyRight}><span>Reservance</span> &copy; 2023</p>
    </footer>
  );
}

export default Footer;
