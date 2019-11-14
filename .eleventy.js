module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/dist");
    eleventyConfig.addPassthroughCopy("src/admin");

    eleventyConfig.addFilter('push', (arr1, arr2) => {
        return arr1.concat(arr2);
    });

    eleventyConfig.addCollection("nav_links", function (collection) {
        return collection.getAll()
            .filter(item => "show_in_nav" in item.data)
            .sort((a, b) => b.data.show_in_nav - a.data.show_in_nav)
            .map(item => {
                return {
                    url: item.url,
                    label: item.data.title,
                    rank: item.data.show_in_nav
                };
            });
    });

    return {
        dir: {
            input: "src",
            includes: "views"
        }
    }
};