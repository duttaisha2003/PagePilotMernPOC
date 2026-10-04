const { fetchPageFromPagePilot } = require("../services/pagePilotService");
const RequestLog = require("../models/RequestLog");

async function getPage(req, res) {
  const { slug } = req.params;

  try {
    const page = await fetchPageFromPagePilot(slug);

    if (!page) {
      await safeLog(slug, 404);
      return res.status(404).json({
        message: "Page not found in PagePilot.",
        slug,
      });
    }

    await safeLog(slug, 200);
    return res.json(page);
  } catch (error) {
    console.error("PagePilot request failed:", error.message);
    await safeLog(slug, error.statusCode || 502);

    if (error.statusCode === 400) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(502).json({
      message: "Unable to fetch the page from PagePilot.",
    });
  }
}

async function safeLog(slug, statusCode) {
  if (!process.env.MONGODB_URI || !mongooseReady()) return;

  try {
    await RequestLog.create({ slug, statusCode });
  } catch (error) {
    console.error("Request log failed:", error.message);
  }
}

function mongooseReady() {
  try {
    const mongoose = require("mongoose");
    return mongoose.connection.readyState === 1;
  } catch {
    return false;
  }
}

module.exports = { getPage };
