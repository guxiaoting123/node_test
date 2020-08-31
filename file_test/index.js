//文件操作
/*
    1.  fs.stst     检测是文件还是目录（文件夹）
    2.  fs.mkdir    创建目录（文件夹）
    3.  fs.writeFile    创建写入文件
    4.  fs.appendFile      追加文件
    5.  fs.readFile     读取文件
    6.  fs.readdir         读取目录
    7.  fs.rename       重命名文件
    8.  fs.rmdir    删除目录
    9.  fs.unlink   删除文件
*/

const fs = require('fs');

// 1.  fs.stst     检测是文件还是目录（文件夹）
/*
    fs.stat('./html',(err,data)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log(`是文件:${data.isFile()}`);
        console.log(`是目录:${data.isDirectory()}`);
    })
*/
/* fs.stat('./package.json',(err,data)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(`是文件:${data.isFile()}`);
    console.log(`是目录:${data.isDirectory()}`);
}) */

// 2.  fs.mkdir    创建目录（文件夹）

/* fs.mkdir('./css',(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("创建目录成功！！！")
}) */

//  3.  fs.writeFile    创建写入文件

/* fs.writeFile('./html/index.html',"hello word aaa  啊啊啊!!!",(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("写入文件成功！！！")
}) */

//  4.  fs.appendFile      追加文件
/* fs.appendFile('./css/style.css','\nh1{color:red}',(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("文件追加成功！！！")
}) */

//5.  fs.readFile     读取文件

/* fs.readFile('./html/index.html',(err,data)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString())
}) */

//5.  fs.readdir    读取目录 列出文件夹下的所有条目

/* fs.readdir('./css',(err,data)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(data)
}) */


//7.  fs.rename       重命名文件  作用： 1.重命名  2.移动文件

/* fs.rename('./html/index.html','./html/demo.html',(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log('重命名成功！！！') 
}) */
/* fs.rename('./css/demo.css','./html/demo.html',(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log('移动文件成功！！！') 
})  */

//8.  fs.rmdir    删除目录
/* fs.rmdir('./html',(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log('目录删除成功！！！')
})  */

//9.  fs.unlink   删除文件
/* fs.unlink('./html/demo.html',(err)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log('文件删除成功！！！')
}) */