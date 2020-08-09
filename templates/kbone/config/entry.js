const fs = require('fs');

const fileList = [];

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function walk(path) {
    const dirList = fs.readdirSync(path);
    dirList.forEach((item) => {
        if (!fs.statSync(`${path}/${item}`).isDirectory()) {
            if (item.endsWith('\.tsx')) {
                fileList.push(item.split('.')[0]);
            }
        } else {
            // walk(path + '/' + item);
        }
    });
}

walk('./src');

module.exports = fileList;
