import { Logo } from "../components/Logo";
import style from "../styles/app.module.scss";

export function App(props) {
  const db_url = import.meta.env.APP_DB_URL ?? null;

  return (
    <div className={style.app}>
      <Logo />
      <p>Hello Vite + Preact!!</p>
      {db_url && <p>Database url (loaded from exposed env): {db_url}</p>}
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </div>
  );
}
