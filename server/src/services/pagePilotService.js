const PAGEPILOT_BASE_URL = "https://pagepilot.fabbuilder.com/api/tenant";

function validateSlug(slug) {
  // PagePilot examples use URL-safe slugs. This also prevents
  // unexpected path characters from being sent to the upstream API.
  return /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(slug);
}

async function fetchPageFromPagePilot(slug) {
  if (!validateSlug(slug)) {
    const error = new Error("Invalid page slug.");
    error.statusCode = 400;
    throw error;
  }

  const tenantId = process.env.PAGEPILOT_TENANT_ID;

  if (!tenantId) {
    throw new Error("PAGEPILOT_TENANT_ID is not configured.");
  }

  const url =
    `${PAGEPILOT_BASE_URL}/${encodeURIComponent(tenantId)}` +
    `/pagebypath/${encodeURIComponent(slug)}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`PagePilot returned HTTP ${response.status}.`);
  }

  return response.json();
}

module.exports = {
  fetchPageFromPagePilot,
};
