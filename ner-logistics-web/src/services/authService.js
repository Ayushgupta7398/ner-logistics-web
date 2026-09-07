const authService = {
  async login(credentials) {
    // Temporary mock API
    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    return {
      success: true,

      user: {
        id: "demo-user",
        name: "NER User",
        identifier: credentials.identifier,
        role: "user",
      },

      token: "mock-token",
    };
  },

  async logout() {
    sessionStorage.removeItem(
      "ner_demo_session"
    );

    return {
      success: true,
    };
  },
};

export default authService;