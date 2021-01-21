let minify = require('html-minifier').minify;
let app = new Vue({
    el: "#app",
    data: {
        msg: "Hello world!",
        pattern: "",
        neckline: "",
        length: "",
        sleeve: "",
        season: "",
        material: "",
        fit: "",
        html_text: ""
    },
    methods: {
        genHTMLText() {
            console.log(minify);
            this.html_text =
`<div style="display: table; width: 85%; padding-left: 30px;">
    <div style="display: table-row;">
        <div style="display: table-cell;">Pattern Type:</div>
        <div style="display: table-cell;">${this.pattern}</div>
    </div>
    <div style="display: table-row;">
        <div style="display: table-cell;">Neckline:</div>
        <div style="display: table-cell;">${this.neckline}</div>
    </div>
    <div style="display: table-row;">
        <div style="display: table-cell;">Length:</div>
        <div style="display: table-cell;">${this.length}</div>
    </div>
    <div style="display: table-row;">
        <div style="display: table-cell;">Sleeve Length:</div>
        <div style="display: table-cell;">${this.sleeve}</div>
    </div>
    <div style="display: table-row;">
        <div style="display: table-cell;">Season:</div>
        <div style="display: table-cell;">${this.season}</div>
    </div>
    <div style="display: table-row;">
        <div style="display: table-cell;">Material:</div>
        <div style="display: table-cell;">${this.material}</div>
    </div>
    <div style="display: table-row;">
        <div style="display: table-cell;">Fit Type:</div>
        <div style="display: table-cell;">${this.fit}</div>
    </div>
</div>`;
            console.log((this.html_text));
        },
    },
})