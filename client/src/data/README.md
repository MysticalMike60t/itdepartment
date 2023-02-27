<div align="left">
<h1>Data files</h1>
<h4>These files control significant data values that when changed, affect areas of the website.</h4>
<h4>These files have the structure of:</h4>
<blockquote> 
    <code>data.js</code>
    <code>
        const nameData = [
            {name: "", age: "", dob: ""},
            {name: "", age: "", dob: ""}
        ]
        export default nameData
    </code>
    <h4>Or</h4>
    <code>
        const nameData = [
            {name: "", age: "", dob: ""},
            {name: "", age: "", dob: ""}
        ];
        const siteData = [
            {title: "", header: "", link: ""},
            {title: "", header: "", link: ""}
        ]
        export { nameData, siteData }
    </code>
</blockquote>
</div>