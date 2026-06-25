// ╔══════════════════════════════════════════════╗
// ║    TAHA BOT — Main Configuration File        ║
// ║    Owner: TAHA BABU                      ║
// ║    Number: 923474771404                     ║
// ║    Email : tahachandia84@gmail.com         ║
// ╚══════════════════════════════════════════════╝
module.exports = {
  BOT_NAME: "TAHA BABU",
  PREFIX: ".",
  ALLOW_NO_PREFIX: true,        // commands work without prefix too
  REPLY_TO_INBOX: true,         // reply in private chat
  REPLY_TO_SELF: true,          // bot reacts to its own messages
  AUTO_DOWNLOAD_LINKS: true,    // auto downloader on any video link
  AUTO_RESTART: false,
  AUTO_READ: false,
  AUTO_TYPING: false,
  AUTO_UPDATE: true,
  TIMEZONE: "Asia/Karachi",
  LANGUAGE: "en",
  // ── OWNERS (multi-owner) ──
  OWNERS: [
    "923474771404",
    "",
    ""
  ],
  OWNER_NAME: "TAHA BABU",
  OWNER_EMAIL: "tahachandia84@gmail.com",

  // ── LOGIN ──
  loginMode: "qr",              // "qr" | "pair"
  pairingNumber: "923291489055",

  // ── AI ──
  AI: {
    enabled: true,
    provider: "lovable",        // lovable | openai | gemini
    model: "google/gemini-2.5-flash",
    personality: "You are TAHA BOT, a helpful WhatsApp assistant created by PAPA TAHA."
  },

  // ── BRANDING ──
  CREDITS: "All credit
    — TAHA BABU",
  FOOTER: "— TAHA BABU —"
};
