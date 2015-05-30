# playground-base

This playground is a visual html DOM presenter, solution is [d3](http://d3js.org/) based, html parsing can been done on server side or client side.

Make sure to set full url on the input field before submit, there's no parameters validation or error handling.

##TL;DR
To build&run

```
npm install
gulp npm
gulp
```
Then point your browser to ```http://localhost:3000```


### General  

This is a fully automated project, all the source files reside under the 'src/' folder, running the build process compile/preprocess/generate the distribution files to the 'dist/' folder.

### Automation

Automation is done with [gulp](http://gulpjs.com/), in order to initialize the project run:

```
npm install
gulp npm
```

Then just run:
```
gulp
```
To invoke build, serve and watch tasks for the project.The watch task will invoke the proper build sub task for every source file change, the serve task relaunch the server upon files changes.

TODO - add livereload, add test to dev life cycle

More gulp tasks:
```
gulp test
gulp clean
```

Review  [gulpfile.js](https://github.com/noygal/playground-base/blob/master/gulpfile.js) for more details.


### Project stack&layout

We use [babel](https://babeljs.io/) to compile es6 to es5, every .js file under the 'src/' folder is pipe to 'dist/' folder.

1. Server - 'src/server.js' is the server start point.
2. Client - 'src/public/app.js' get browserify.
3. Shared - all the code placed under 'src/public/' folder should be accessible to both the client and the server.

All *.spec.js files are piped to mocha, there is no client/e2e tests, but you can still use mocha to test client js code, just make sure there's no external dependecies in the code (or inject those), taking TDD approach would most likely produce easy solutions for that.