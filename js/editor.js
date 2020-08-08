
    const path = require('path');
    const amdLoader = require('./node_modules/monaco-editor/min/vs/loader.js');
    const amdRequire = amdLoader.require;
    const amdDefine = amdLoader.require.define;
    

    function uriFromPath(_path) {
        var pathName = path.resolve(_path).replace(/\\/g, '/');
        if (pathName.length > 0 && pathName.charAt(0) !== '/') {
            pathName = '/' + pathName;
        }
        var encuri = encodeURI('file://' + pathName);
        console.log(encuri);
        return encuri;
    }

    amdRequire.config({
        baseUrl: uriFromPath(path.join(__dirname, './node_modules/monaco-editor/min'))
    });

    // workaround monaco-css not understanding the environment
    self.module = undefined;

    amdRequire(['vs/editor/editor.main'], function() {
        var editor = monaco.editor.create(document.getElementById('container'), {
            value: [
                'function x() {',
                '\tconsole.log("Hello world!");',
                '}'
            ].join('\n'),
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true,
            width: 10
        });

        /*
        window.onresize = function() {
            var container = document.getElementById('container');
            var h = parseInt(window.getComputedStyle(container).height);
            var w = parseInt(window.getComputedStyle(container).width);
            console.log(h + ' ' + w);
            editor.layout({height: h, width: w});
        };
        */
        
    });
