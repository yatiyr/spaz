/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-var */
var remote = window.require('electron').remote;
var electronFs = remote.require('fs');


// TODO: LINUX DESTEGI SONRA GETIR

export default class FolderTree {
    public path: any;
    public name: null;
    public depth: number;
    public isDirectory: boolean;
    public isExpanded: boolean;
    public areItemsLoaded: boolean;
    public rendered: boolean;

    constructor(path, name, depth=0, isDirectory=true) {
        this.path = path;
        this.name = name;
        this.depth = depth;
        this.isDirectory = isDirectory;
        this.isExpanded = false;
        this.areItemsLoaded = false;
        this.rendered = true;
    }

    public build = () => {

        return (this.readDir(this.path, this.depth));

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
    
    readDir(path, depth) {

        var items: any[];
        var folders: any[];
        var files: any[];

        items = [];
        folders = [];
        files = [];

        electronFs.readdirSync(path).forEach(file => {
            try {
                var stat = electronFs.statSync(`${path}\\${file}`);
        
                if(stat.isDirectory()) {
                    var fileInfo = new FolderTree(`${path}\\${file}`, file, depth + 1, true);
                    folders.push(fileInfo);
                }
                else {
                    var fileInfo = new FolderTree(`${path}\\${file}`, file, depth + 1, false)
                    files.push(fileInfo);
                }

            }
            catch (error) {
                console.log(error);
             }
        })

        folders.sort(this.compareItems);
        files.sort(this.compareItems);

        folders.forEach(element => {
            items.push(element);
        });

        files.forEach(element => {
            items.push(element);
        })

        return items;
    }
}
