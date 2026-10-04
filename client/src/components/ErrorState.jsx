import { Link } from "react-router-dom";

function ErrorState({ message, slug }) {
  return (
    <main className="state-page">
      <div className="state-card error-card">
        <p className="error-code">404</p>
        <h1>Page not found</h1>
        <p>
          PagePilot did not return a page for <code>/{slug}</code>.
        </p>
        <p className="error-detail">{message}</p>
        <Link className="button" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default ErrorState;
