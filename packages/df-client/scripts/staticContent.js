/* eslint-disable no-console */

const helpers = require('./helpers');
const templates = require('./strings.tmpl');

const { request } = require('graphql-request');

const fs = require('fs');

// let rawdata = fs.readFileSync('student.json');
// let student = JSON.parse(rawdata);

const config = {
  url: 'http://localhost:8000/admin/api',
  pagesDir: './src/pages/',
  manifestPath: './public/data/allContent.json',
};
class StaticContent {
  constructor(overrides) {
    // this.config = Object.assign({}, { ...config, overrides }); //eslint prefers spreads.
    this.config = { ...config, ...overrides };
    this.pagePaths = {};
  }

  async downloadContent() {
    try {
      const content = request(this.config.url, templates.graphql.allContentPages);

      this.content = content;
      return content;
    } catch (e) {
      console.error(`Error downloading schema from ${this.config.url}`);
      throw new Error(e);
    }
  }

  // writeToManifest(data) {}
  async collectAllPaths() {
    const pagePaths = helpers.allPagesAsPaths(this.config.pagesDir);
    this.pagePaths = pagePaths;
    return pagePaths;
  }

  async collectSchemaDocument() {
    const content = await this.downloadContent();
    const pagePaths = await this.collectAllPaths();
    const schema = {
      name: 'All Content Pages',
      dataset: 'production',
      url: this.config.url,
      createdAt: new Date().toUTCString(),
      content,
    };
    const allContentPages = {
      content: {
        _jsonObj: schema,
        filename: this.config.manifestPath,
        revisedAt: new Date().toUTCString(),
        // lastRevisedAt: `to implement...`,
        // _approxSize: contentSize, //incorrect
      },
      paths: {
        _paths: pagePaths,
      },
    };

    // const schema = allContentPages
    this.allContentPages = allContentPages;
    return allContentPages;
  }

  async writeStaticContentToJSON(manifest) {
    try {
      await helpers.writeFileToPath(this.config.manifestPath, JSON.stringify(manifest, null, 2));
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  }
}

module.exports = {
  init: async () => {
    const generator = new StaticContent();
    const manifest = await generator.collectSchemaDocument();
    try {
      await generator.writeStaticContentToJSON(manifest);
    } catch (e) {
      helpers.throwError(e, 'Failed to write manifest', manifest);
    }
    return manifest;
  },
};

require('make-runnable');
