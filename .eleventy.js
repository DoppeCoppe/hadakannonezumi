module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");


  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
