require('dotenv').config();
const ampPlugin = require('@ampproject/eleventy-plugin-amp');
const dir = {
  input: './src/site',
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/static': '/' });
  eleventyConfig.addPassthroughCopy({ 'src/img': 'img' });
  eleventyConfig.addPlugin(ampPlugin, {
    imageBasePath: 'src',
    imageOptimization: true,
  });

  return {
    dir,
  };
};
