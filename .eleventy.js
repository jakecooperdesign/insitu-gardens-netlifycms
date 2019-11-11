module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/dist");
    eleventyConfig.addPassthroughCopy("src/admin");

    return {
        dir: {
            input: "src",
            includes: "views"
        }
    }
};