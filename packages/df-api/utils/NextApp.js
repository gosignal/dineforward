const path = require('path');
const next = require('next');
const nextBuild = require('next/dist/build').default;

class NextApp {
  constructor({ dir } = {}) {
    if (!dir || typeof dir !== 'string') {
      throw new Error('NextApp requires a "dir" option, which must be a string.');
    }
    this._dir = path.resolve(dir);
  }

  async prepareMiddleware({ dev, distDir }) {
    if (process.env.KEYSTONE_BUILD) return;
    const nextApp = next({ distDir, dir: this._dir, dev });
    await nextApp.prepare();
    return nextApp.getRequestHandler();
  }

  async buildWithKeystone() {
    return nextBuild(this._dir);
  }
}

module.exports = {
  NextApp,
};
