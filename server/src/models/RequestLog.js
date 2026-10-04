const mongoose = require("mongoose");

const requestLogSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      maxlength: 200,
    },
    statusCode: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RequestLog", requestLogSchema);
