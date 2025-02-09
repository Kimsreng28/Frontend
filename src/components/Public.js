import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Gy CoLtd. Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Beautiful Downtown Hello City, Gy CoLtd. Repairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Gy CoLtd. Repairs
          <br />
          666 Foo Drive
          <br />
          Hello City, CA 123456
          <br />
          <a href="tel:+16666666">(666) 666-6666</a>
        </address>
        <br />
        <p>Owner: Gy CoLtd.</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
