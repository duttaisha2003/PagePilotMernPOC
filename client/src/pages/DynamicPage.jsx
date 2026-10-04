import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import PageRenderer from "../components/PageRenderer";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function DynamicPage() {
  const location = useLocation();
  const [page, setPage] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  const slug = useMemo(() => {
    const path = decodeURIComponent(location.pathname).replace(/^\/+|\/+$/g, "");
    return path;
  }, [location.pathname]);

  useEffect(() => {
    let cancelled = false;

    async function loadPage() {
      if (!slug) return;

      setStatus("loading");
      setError("");
      setPage(null);

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/pages/${encodeURIComponent(slug)}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Page not found.");
        }

        if (cancelled) return;

        setPage(data);
        setStatus("success");

        document.title = data.title || data.name || "PagePilot Page";
      } catch (err) {
        if (cancelled) return;

        console.error(err);
        setError(err.message || "Unable to load page.");
        setStatus("error");
      }
    }

    loadPage();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (status === "loading") {
    return <LoadingState slug={slug} />;
  }

  if (status === "error") {
    return <ErrorState message={error} slug={slug} />;
  }

  return <PageRenderer page={page} />;
}

export default DynamicPage;
