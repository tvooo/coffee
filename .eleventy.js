// const pluginTOC = require("eleventy-plugin-nesting-toc");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
// const Image = require("@11ty/eleventy-img");

// const format = require("date-fns/format");
// const markdownIt = require("markdown-it");
// const markdownItAnchor = require("markdown-it-anchor");
// const markdownItAbbr = require("markdown-it-abbr");
// const markdownItEmoji = require("markdown-it-emoji");
// const markdownItDeflist = require("markdown-it-deflist");
// const markdownItFootnote = require("markdown-it-footnote");

// async function imageShortcode(src, alt, sizes = "100vw") {
//   if (alt === undefined) {
//     // You bet we throw an error on missing alt (alt="" works okay)
//     throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
//   }

//   let metadata = await Image(src, {
//     widths: [350, 700, 1400],
//     formats: ["webp", "jpeg"],
//     outputDir: "./_site/images/",
//     urlPath: "/images/",
//   });

//   let lowsrc = metadata.jpeg[0];

//   return `<picture>
//     ${Object.values(metadata)
//       .map((imageFormat) => {
//         return `  <source type="${
//           imageFormat[0].sourceType
//         }" srcset="${imageFormat
//           .map((entry) => entry.srcset)
//           .join(", ")}" sizes="${sizes}">`;
//       })
//       .join("\n")}
//       <img
//         src="${lowsrc.url}"
//         alt="${alt}"
//         loading="lazy"
//         decoding="async">
//     </picture>`;
// }

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

//   eleventyConfig.addFilter("readableDate", (dateObj) => {
//     return format(dateObj, "dd LLL yyyy");
//   });
//   eleventyConfig.addFilter("longDate", (dateObj) => {
//     return format(dateObj, "dd LLLL yyyy");
//   });

//   // Markdown
//   eleventyConfig.setLibrary(
//     "md",
//     markdownIt({ html: true, linkify: true, typographer: true })
//       .use(markdownItAnchor)
//       .use(markdownItAbbr)
//       .use(markdownItEmoji)
//       .use(markdownItDeflist)
//       .use(markdownItFootnote)
//   );

//   eleventyConfig.addPlugin(pluginRss);
//   eleventyConfig.addPlugin(pluginTOC, {
//     tags: ["h2", "h3", "h4"], // Which heading tags are selected (headings must each have an ID attribute)
//     wrapper: "nav", // Element to put around the root `ol`
//     wrapperClass: "toc", // Class for the element around the root `ol`
//     headingText: "Table of contents", // Optional text to show in heading above the wrapper element
//     headingTag: "h2", // Heading tag when showing heading above the wrapper element
//   });

//   eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
//   eleventyConfig.addNunjucksAsyncFilter("imageUrl", function (url, callback) {
//     Image(url, {
//       widths: [1400],
//       formats: ["webp", "jpeg"],
//       outputDir: "./_site/images/",
//       urlPath: "/images/",
//     }).then(function (metadata) {
//       callback(null, metadata.jpeg[0].url);
//     });
//   });
};
