const weh = require('@weh/weh');
const rm = require('rm-r/sync');

try {
    rm('_site');
}
catch (Exception) {}

weh(async site => {
    site.config({
        source: ".",
        destination: "_site",
        exclude: [
            "node_modules/",
            "package.json",
            "build.js",
            "yarn.lock"
        ]
    })
    site.use(require('weh-gzip'));
    site.use(require('weh-brotli'));
    return site;
});
