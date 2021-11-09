import styles from "../styles/Error.module.scss";

export default function Custom404() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h4>Page Not Found</h4>
    </div>
  );
}
