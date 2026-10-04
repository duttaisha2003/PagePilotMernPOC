import DOMPurify from "dompurify";

function PageRenderer({ page }) {
  const sections = Array.isArray(page?.sections) ? page.sections : [];

  return (
    <main className="pagepilot-page">
      {page?.title || page?.name ? (
        <header className="page-header">
          <div className="page-header-inner">
            <p className="eyebrow">PagePilot</p>
            <h1>{page.title || page.name}</h1>
          </div>
        </header>
      ) : null}

      <div id="page-content" className="page-content">
        {sections.length > 0 ? (
          sections.map((section, index) => {
            const safeHtml = DOMPurify.sanitize(section?.content || "", {
              USE_PROFILES: { html: true },
            });

            return (
              <section
                key={section?.id || index}
                className="page-section"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />
            );
          })
        ) : (
          <div className="empty-page">
            <h2>No sections found</h2>
            <p>
              The PagePilot page was returned, but no renderable sections were
              present in the response.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default PageRenderer;
