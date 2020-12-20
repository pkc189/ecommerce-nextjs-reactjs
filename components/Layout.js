import Link from "next/link";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
      </Head>

      <nav>
        <div className="nav-wrapper">
          <Link href="/">
            <a className="brand-logo">Ecommerce</a>
          </Link>

          {/* <form>
            <div className="input-field w-3">
              <input id="search" type="search" required />
              <label className="label-icon" for="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form> */}

          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link href="/">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Components</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>JavaScript</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {props.children}
    </>
  );
}
