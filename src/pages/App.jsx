import { Logo } from "../components/Logo";
import style from "../styles/app.module.scss";

export function App(props) {
  // process env DB_PASSWORD gets replaced by rollup replace plugin..
  const db_pw = process.env.DB_PASSWORD ?? null;
  const db_url = import.meta.env.APP_DB_URL ?? null;

  return (
    <div className={style.app}>
      <Logo />
      {/**
       * If we need to have something like process.env.DB_PASSWORD, then we need to have them with unicode of zero width space: \u200b
       * It is bcoz, we have used a rollup replace plugin to replace every process env <Valid Key> with the respective value.
       * So, it will replace that process env <Some_Key> with the value in double quotes,
       * and if that value makes the resultant expression invalid, then it throws the error.
       */}

      <p>
        Hello Vite + Preact!!
        <br />
        Just checking if the key can be printed directly, with some hacky trick:
        <br /><br />
        {"process.env.\u200bDB_PASSWORD"}
      </p>
      {db_url && (
        <p>
          {db_url}: {db_pw}
        </p>
      )}
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
