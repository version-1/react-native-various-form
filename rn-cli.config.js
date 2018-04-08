const path = require("path");
const blacklist = require("metro-bundler").createBlacklist;

module.exports = {
  getProjectRoots() {
    return this._getRoots();
  },

  getBlacklistRE() {
    return blacklist([
      /example\/node_modules\/react-native\/.*/
    ]);
  },

  _getRoots() {
    // eslint-disable-next-line no-undef
    return [path.resolve(__dirname, "example"), path.resolve(__dirname)];
  }
};
