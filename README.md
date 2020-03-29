# Parcel For TypeScript Environment
## TypeScript Environment Setup

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

## RxJS Environment Setup
https://rxjs-dev.firebaseapp.com/guide/installation

### Install RxJS
```
$ npm install --save rxjs @types/rx
```

### Create Sample
src/index.ts
```ts
import Rx from 'rx';

const source$ = Rx.Observable.range(1, 10).publish();
const [odd$, even$] = source$.partition(i => i % 2 === 1);
     Rx.Observable.merge(
         odd$.map(i => i * 2),
         even$.map(i => i * i))
         .subscribe(v => console.log(v));
source$.connect();
```
