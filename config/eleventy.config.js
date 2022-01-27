const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  })

  eleventyConfig.addPassthroughCopy('src/assets')

  eleventyConfig.addPassthroughCopy('src/assets/icons/favicon.ico')

  eleventyConfig.addPassthroughCopy({'src/assets/pdf/usc-talk.pdf': 'usc-talk.pdf'})

  return {
    templateFormats: ["html", "njk", "md", "js"],
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'www',
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};