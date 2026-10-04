function LoadingState({ slug }) {
  return (
    <main className="state-page">
      <div className="state-card">
        <div className="spinner" aria-hidden="true" />
        <h1>Loading PagePilot page...</h1>
        <p>
          Fetching <code>/{slug}</code>
        </p>
      </div>
    </main>
  );
}

export default LoadingState;
