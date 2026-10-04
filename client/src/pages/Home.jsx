function Home() {
  const pagePilotUrl = "/fashion-shopping-app";

  return (
    <main className="home">
      {/* Background decorations */}
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">P</div>
          <div>
            <strong>PagePilot</strong>
            <span>MERN POC</span>
          </div>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          Integration Active
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✦</span>
            MERN + PAGEPILOT INTEGRATION
          </div>

          <h1>
            Build once.
            <br />
            <span>Publish dynamically.</span>
          </h1>

          <p className="hero-description">
            A proof-of-concept demonstrating how PagePilot pages can be
            dynamically rendered inside a MERN application using URL-based
            slugs.
          </p>

          <div className="hero-actions">
            <a href={pagePilotUrl} className="primary-btn">
              <span>Explore Live Page</span>
              <span className="arrow">→</span>
            </a>

            <a href="#architecture" className="secondary-btn">
              View Integration
            </a>
          </div>

          {/* Live URL */}
          <div className="live-url">
            <div className="live-url-header">
              <span className="live-dot"></span>
              LIVE PAGE ROUTE
            </div>

            <div className="url-row">
              <code>localhost:5173/fashion-shopping-app</code>

              <a href={pagePilotUrl} className="open-link">
                Open ↗
              </a>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="hero-visual">
          <div className="browser-window">
            <div className="browser-top">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="browser-address">
                localhost:5173/fashion-shopping-app
              </div>
            </div>

            <div className="browser-content">
              <div className="mock-label">PAGEPILOT PAGE</div>

              <div className="mock-title">
                Dynamic
                <br />
                Content
              </div>

              <div className="mock-line large"></div>
              <div className="mock-line"></div>
              <div className="mock-line short"></div>

              <div className="mock-button">
                Page rendered successfully
              </div>
            </div>

            <div className="success-card">
              <div className="success-icon">✓</div>
              <div>
                <strong>Page Loaded</strong>
                <span>Fetched from PagePilot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="section-heading">
          <span>WHAT THIS POC DEMONSTRATES</span>
          <h2>PagePilot meets MERN</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon purple">↗</div>
            <h3>Dynamic Routing</h3>
            <p>
              Every PagePilot page can be accessed using its corresponding
              slug directly from the application URL.
            </p>
            <code>/your-page-slug</code>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue">⚡</div>
            <h3>Server Integration</h3>
            <p>
              The Express backend receives the slug and communicates with
              PagePilot without exposing integration logic to the client.
            </p>
            <code>React → Express → PagePilot</code>
          </div>

          <div className="feature-card">
            <div className="feature-icon green">✓</div>
            <h3>Fallback Handling</h3>
            <p>
              Invalid or unpublished slugs are handled gracefully with a
              dedicated 404 state instead of breaking the application.
            </p>
            <code>404 → Page Not Found</code>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="architecture" id="architecture">
        <div className="section-heading">
          <span>INTEGRATION FLOW</span>
          <h2>How the request works</h2>
          <p>
            The URL slug travels through the MERN application before the
            corresponding PagePilot content is returned.
          </p>
        </div>

        <div className="flow">
          <div className="flow-card">
            <div className="flow-number">01</div>
            <div className="flow-icon">🌐</div>
            <h3>Browser</h3>
            <p>/fashion-shopping-app</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card">
            <div className="flow-number">02</div>
            <div className="flow-icon">⚛</div>
            <h3>React</h3>
            <p>Reads the route slug</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card">
            <div className="flow-number">03</div>
            <div className="flow-icon">⌘</div>
            <h3>Express API</h3>
            <p>Fetches PagePilot data</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card">
            <div className="flow-number">04</div>
            <div className="flow-icon">✦</div>
            <h3>PagePilot</h3>
            <p>Returns page content</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div>
          <span className="cta-label">READY TO TEST?</span>
          <h2>Open a PagePilot page</h2>
          <p>
            Use the example slug to see the complete integration in action.
          </p>
        </div>

        <a href={pagePilotUrl} className="primary-btn">
          Launch Demo <span className="arrow">→</span>
        </a>
      </section>

      <footer>
        <span>PagePilot × MERN</span>
        <span>Proof of Concept</span>
      </footer>
    </main>
  );
}

export default Home;