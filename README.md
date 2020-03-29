# Parcel For TypeScript Environment
## Environment Setup

### Install Parcel
```
$ npm install -g parcel-bundler
```

### Create HTML and TS File
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script src="./src/index.ts"></script>
</body>
</html>
```

src/index.ts
```
console.log('Hello TypeScript !');
```

### Run
```
$ parcel index.html
Server running at http://localhost:1234
✨  Built in 5.34s.
```

### Access
Access to http://localhost:1234

### Ignore File
Parcel automatically create blow.
```
node_modules
.cache
dist
package.json
package-lock.json
```

Then, you should ignore file blow.
.gitignore
```
node_modules
.cache
dist
```
