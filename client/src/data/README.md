# Data files
#### These files control significant data values that when changed, affect areas of the website.
#### These files have the structure of:
> `data.js` 
> ```const nameData = [
>   {name: "", age: "", dob: ""},
>   {name: "", age: "", dob: ""}
>]
>export default nameData```
><h4>Or</h4>
>```const nameData = [
>   {name: "", age: "", dob: ""},
>   {name: "", age: "", dob: ""}
>];
>const siteData = [
>   {title: "", header: "", link: ""},
>   {title: "", header: "", link: ""}
>]
>export { nameData, siteData }```