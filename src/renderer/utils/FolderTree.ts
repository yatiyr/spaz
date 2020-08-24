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
    public folders: any[];
    public files: any[];
    public depth: number;
    public isDirectory: boolean;

    constructor(path, name, depth=0, isDirectory=true) {
        this.path = path;
        this.name = name;
        this.items = [];
        this.files = [];
        this.folders = [];
        this.depth = depth;
        this.isDirectory = isDirectory;
    }

    public build = () => {
        this.readDir(this.path, this.depth);
    }

    sortItems() {
        this.items.sort(this.compareItems);
    }


    // TODO: TURKCE KARAKTERLI DOSYALARIN SIRALANMASI EKLENECEK
    compareItems(a, b) {

        var uppercasedA = a.name.toUpperCase();
        var uppercasedB = b.name.toUpperCase();

        if(uppercasedA > uppercasedB) {
            return 1;
        }
        else if(uppercasedA < uppercasedB) {
            return -1;
        }
        return 0;

    }

    clearItems() {
        this.items = [];
    }
    
    readDir(path, depth) {

            electronFs.readdirSync(path).forEach(file => {

                try {
                    var stat = electronFs.statSync(`${path}\\${file}`);
        
                    if(stat.isDirectory()) {
                        var fileInfo = new FolderTree(`${path}\\${file}`, file, depth + 1, true);
                        this.folders.push(fileInfo);
                    }
                    else {
                        var fileInfo = new FolderTree(`${path}\\${file}`, file, depth + 1, false)
                        this.files.push(fileInfo);
                    }

                }
                catch (error) {
                    console.log(error);
                }
            })

        this.folders.sort(this.compareItems);
        this.files.sort(this.compareItems);

        this.folders.forEach(element => {
            this.items.push(element);
        });

        this.files.forEach(element => {
            this.items.push(element);
        })
    }
}
