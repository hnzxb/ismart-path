var path    = require('path');
var fs      = require("fs-extra");
var RootDir = process.cwd();

path.smartFile = function (_filename) {
    var filename = path.join(RootDir, _filename);
    fs.ensureFileSync(filename);
    return filename;
    
}
path.smartDir  = function (_dirname) {
    var dirName = path.join(RootDir, _dirname);
    fs.ensureDirSync(dirName);
    return dirName;
}

module.exports      = path;
module.exports.Root = function (_dirname) {
    RootDir = path.resolve(_dirname);
    return path;
}