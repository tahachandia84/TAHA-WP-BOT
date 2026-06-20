module.exports = {
  config: {
    name: "${global.config.PREFIX}",
    aliases: [],
    permission: 0,
    prefix: true,
    description: 'Handles custom prefix responses.',
    categories: "botprefix",
    usages: [
      `${global.config.PREFIX} - Get custom message.`,
      `${global.config.PREFIX}help - Show help menu.`
    ]
  },

  event: async ({ event, api, body }) => {
    const { threadId } = event;
    const prefix = global.config.PREFIX;
    const cleanBody = body.trim().toLowerCase();

    // ১. ইউজার যদি শুধুমাত্র প্রিফিক্স লেখে (যেমন: .)
    if (cleanBody === prefix) {
      return await api.sendMessage(threadId, { 
        text: "আসসালামু আলাইকুম! আমি ইমোন বট । আমার সব কমান্ড দেখতে ${global.config.PREFIX}help ব্যবহার করুন।" 
      });
  }
};
