module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-webc"));

  return {
    dir: {
      input: "src",
      includes: "components",
      output: "dist",
    },
  };
};
