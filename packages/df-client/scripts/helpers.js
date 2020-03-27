/* eslint-disable consistent-this */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */

const fs = require('fs');

const throwError = (error, message = '', data = {}) => {
  console.error(`----------------`);
  console.error(`[ERROR] - ${error}`);
  console.error(`[MESSAGE] - ${message}`);
  console.log(`[DATA] - ${data}`);
  console.error(`----------------`);
  console.error({ error, message, data });
  throw new Error(error);
};

const helpers = {
  formatDate: date => {
    const d = new Date(date);
    let month = d.getMonth() + 1;
    let day = d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [month, day, year].join('-');
  },
  throwError,
  writeFileToPath: (path, data) => {
    // const _this = this;
    try {
      return fs.writeFileSync(path, data);
    } catch (e) {
      throwError(e, `Unable to write to ${path}`, data);
    }
  },
  stringFileSize: string => new TextEncoder().encode(string).length,
  allPagesAsPaths: async dir => {
    const fileObj = {};
    // const _this = this;
    try {
      const walkSync = _dir => {
        const files = fs.readdirSync(_dir);
        files.forEach(file => {
          try {
            const filePath = `${_dir}${file}`;
            const fileStat = fs.statSync(filePath);

            if (fileStat.isDirectory()) {
              // Recurse one folder deeper
              walkSync(`${filePath}/`);
            } else {
              // Construct this file's pathname excluding the "pages" folder & its extension
              const cleanFileName = filePath.substr(0, filePath.lastIndexOf('.')).replace(_dir, '');

              // let's test for dynamic routes in next;
              if (!cleanFileName.match(/\[([^)]+)\]/g)) {
                // Add this file to `fileObj`
                fileObj[`/${cleanFileName}`] = {
                  page: `/${cleanFileName}`,
                  lastModified: fileStat.mtime,
                };
              }
            }
          } catch (e) {
            throwError(e, `Error Walking Subdirectory ${_dir} of ${dir}`, dir);
          }
        });
      };
      walkSync(dir);
    } catch (e) {
      throwError(e, `Error collecting pages at dir ${dir}`, dir);
    }
    return fileObj;
  },
};
module.exports = helpers;

// formatDate(new Date(pathsObj[_path].lastModified

// console.log(sitemapXml);
