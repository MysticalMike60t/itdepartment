# Data files
#### These files control significant data values that when changed, affect areas of the website.
#### These files have the structure of:
> ### `data.js`
```sh
const nameData = [
    {name: "", age: "", dob: ""},
    {name: "", age: "", dob: ""}
]
export default nameData
```
### Or
```sh
const nameData = [
    {name: "", age: "", dob: ""},
    {name: "", age: "", dob: ""}
];
const siteData = [
    {title: "", header: "", link: ""},
    {title: "", header: "", link: ""}
]
export { nameData, siteData }
```
### Or
> ### `data.json`
```sh
{
    "value1": "input1"
    "value2": "input2"
    "values1": {
        "input1": "input1",
        "input2": "input2"
    }
}
```