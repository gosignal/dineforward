const allContentPages = `
  query getContentPagesAndBlocks {
    allContentPages {
      name
      status
      slug
      blocks {
        name
        title
        subtitle
        hero {
          path
          filename
          originalFilename
          id
          publicUrl
          encoding
        }
        image {
          path
          filename
          originalFilename
          id
          publicUrl
          encoding
        }
        textContent
        richContent
      }
    }
  }
`;

const sitemapBody = urls => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${urls}
</urlset>`;

const sitemapUrl = (url, lastMod) => `<url>
  <loc>https://dineforward.org${url}</loc>
  <lastmod>${lastMod}</lastmod>
</url>`;

module.exports = {
  graphql: {
    allContentPages,
  },
  sitemap: {
    body: sitemapBody,
    urlEntity: sitemapUrl,
  },
};
