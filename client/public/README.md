# ```/client/public/```

# All files that will go into the final build un-compiled
#### `_redirects` file allows react app on netlify to refresh.
The `_redirects` file tells the server to send all requests for sub-folders to the index.html file. For example: `itdepartment.cf/jobs`. Instead of looking for a html file named "jobs", it sends that request to the ```index.html``` file. This allows the React Router Dom to process and execute the page change.
```
/*  /index.html  200
```