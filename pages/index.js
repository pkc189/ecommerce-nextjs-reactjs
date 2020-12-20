import Link from "next/link";
import Layout from "../components/Layout.js";
export default function IndexPage() {
  return (
    <Layout>
      <div>
        <h1>index</h1>

        <div className="row">
          <div className="col s12 m4 l3">
            This content will be: 3-columns-wide on large screens,
            4-columns-wide on medium screens, 12-columns-wide on small screens
          </div>

          <div className="col s12 m8 l9">
            This content will be: 9-columns-wide on large screens,
            8-columns-wide on medium screens, 12-columns-wide on small screens
          </div>
        </div>
      </div>
    </Layout>
  );
}
