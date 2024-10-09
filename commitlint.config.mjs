export default {
  extends: ["@commitlint/config-conventional"],
  prompt: {
    questions: {
      type: {
        description: "please input type:"
      }
    }
  }
};
