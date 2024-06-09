import React from "react";
import styles from "../styles/Footer.module.css";

// Footer component definition
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h3 className={styles.Title}>Contact Planbrella &copy;</h3>
      <p className={styles.Paragraph}>Phone Number: 08-123 45 67</p>
      <p className={styles.Paragraph}>E-mail: admin@planbrella.com</p>
    </footer>
  );
};

export default Footer;
