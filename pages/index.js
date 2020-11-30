import { useRouter } from "next/router";
import Link from "next/link";

import { ToggleLocale } from "../components/ToggleLocale";

const title = {
  pt: "Olá",
  en: "Hello",
};

export default function Home(props) {
  const { locale } = useRouter();

  return (
    <div>
      <ToggleLocale />
      <header>
        <h1>{title[locale]}</h1>
        <p>Current locale: "{locale}"</p>
      </header>

      <section>
        <h2>Working routes</h2>
        <p>
          The following URL is the updated/corrected one. Here I'm using
          `next/link` with the `href` without locale and passing it down as
          props.
        </p>
        <ul>
          <li>
            <Link href="/blog/e-o-coronavirus-hein" locale="pt">
              <a>/pt/blog/e-o-coronavirus-hein</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/outro-examplo" locale="pt">
              <a>/pt/blog/outro-examplo</a>
            </Link>
          </li>
        </ul>
      </section>
      <br />
      <hr />
      <section>
        <h2>Defective redirects</h2>
        <p>
          Both cases represents the same problem but with redirect different
          redirect config.
        </p>
        <p>
          Their anchor tag isn't surround by `next/link` to do force a page
          reload.
        </p>

        <article>
          <h3>With {`{ locale : false }`}</h3>
          <pre>It'll reach this exact route</pre>
          <a href="/blog/e-o-coronavirus-hein">/blog/e-o-coronavirus-hein</a>
        </article>

        <article>
          <h3>Without {`{ locale : false }`}</h3>
          <pre>Pay attention on the URL generated</pre>
          <a href="/blog/outro-examplo">/blog/outro-examplo</a>
        </article>
      </section>
    </div>
  );
}
