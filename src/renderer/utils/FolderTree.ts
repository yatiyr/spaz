/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-var */
var remote = window.require('electron').remote;
var electronFs = remote.require('fs');


// TODO: LINUX DESTEGI SONRA GETIR

export default class FolderTree {
    public path: any;
    public name: null;
    public items: any[];
    public depth: number;
    public isDirectory: boolean;

    constructor(path, name, depth=0, isDirectory=true) {
        this.path = path;
        this.name = name;
        this.items = [];
        this.depth = depth;
        this.isDirectory = isDirectory;
    }

    public build = () => {
        this.items = this.readDir(this.path, this.depth);
    }


    clearItems() {
        this.items = [];
    }
    
    readDir(path, depth) {
        var fileArray: any[] = [];

        electronFs.readdirSync(path).forEach(file => {
            var stat = electronFs.statSync(`${path}\\${file}`);

            if(stat.isDirectory()) {
                var fileInfo = new FolderTree(`${path}\\${file}`, file, depth + 1, true);
                fileArray.push(fileInfo);
            }
            else {
                var fileInfo = new FolderTree(`${path}\\${file}`, file, depth + 1, false)
                fileArray.push(fileInfo);
            }

        })

        return fileArray;
    }
}
