import { site } from "@/config/site";

import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <p translate="no">
          © {year} {site.name}
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
