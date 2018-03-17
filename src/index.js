var path    = require('path');
var fs      = require("fs-extra");
var RootDir = process.cwd();

/**
 * nodejs path组件扩展
 * @name ismart-path
 */



/**
 * 自动创建文件
 *
 * @name path.smartFile
 * @grammar path.smartFile()
 * @example
 * path.smartFile("./temp","./log","server.log") =>  {root}/temp/log/server.log
 */

path.smartFile = function () {
    
 
    
    var filename = path.join(RootDir);
    var arr     = Array.prototype.slice.call(arguments);
    arr.forEach(function (item) {
        filename = path.join(filename, item);
    })
    fs.ensureFileSync(filename);
    return filename;
    
}


/**
 * 自动创建文件夹
 *
 * @name path.smartDir
 * @grammar path.smartDir()
 * @example
 * path.smartFile("./temp","./log","2018/10") =>  {root}/temp/log/2018/10
 */


path.smartDir  = function () {
    var dirName = path.join(RootDir);
    var arr     = Array.prototype.slice.call(arguments);
    arr.forEach(function (item) {
        dirName = path.join(dirName, item);
    })
    fs.ensureDirSync(dirName);
    return dirName;
}

module.exports      = path;
module.exports.Root = function (_dirname) {
    RootDir = path.resolve(_dirname);
    return path;
}