function readPackage(pkg, context) {
  if (pkg.name === "hast-util-from-html" && pkg.version.startsWith("1.")) {
    pkg.dependencies = {
      ...pkg.dependencies,
      "vfile-message": "^3.1.2",
    };
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
