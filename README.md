karma-requirejs-mock
====================

This is a Karma.js test framework setup with Require.js and a simple mocking system for isolating modules from their dependencies. 

I wrote this after having tremendous difficulty finding a setup that allowed for...

 1. testing headlessly
 2. using Require.js,
 3. allowing complete isolation of modules, when needed, via mock dependencies,
 4. but without adding complexity or excessive boilerplate. 

The number one problem I kept running into is that AMD mocking requires creating new `context`s. Even when running on `localhost`, this is asynchronous and can cause test suites to return before all the tests have run. So far, the only acceptable solution (especially with respect to point 4), was [Karma](http://karma-runner.github.io/0.8/index.html), using [Mocha](http://visionmedia.github.io/mocha/) as the testing framework. Mocking is done using some extremely simple code found in a [StackOverflow answer](http://stackoverflow.com/questions/11439540/how-can-i-mock-dependencies-for-unit-testing-in-requirejs/11695463#11695463).

I've added [Chai](http://chaijs.com/) for easy BDD matching. I've not added [Sinon/](http://sinonjs.org/), though I may soon (or if someone requests it.)

## Requirements

You will need [Node and NPM](http://nodejs.org/) installed. 

## Recommended setup

So, actually I don't have any recommendations. I could make this into another [Grunt](http://gruntjs.com/) scaffolding ecosystem, but these tend to have a short shelf-life and get abandoned pretty quickly. Plus, you may want to add this to your project after you've already added a lot of working code. You might want to just move the entire test folder to your project's `scripts` folder and modify the `karma.conf.js` and, if necessary, `main.js`. I wouldn't add this as a Git submodule. 

The way I would set up your code though might be something like this:

    root/
      + scripts/
        + dist/ # For minified production code
        + lib/ # For your require.js module code
          + Bar/ # a namespaced submodule
            - Baz.js # module called 'Bar/Baz'
          - Foo.js 
        - main.js # The entry point for your application
        + test
          - karma.conf.js
          - karma.start
          - main.js # The entry point for testing your library
          + node_modules
          + specs
            - BarBazSpec.js
            - FooSpec.js
          + vendor # Any third-party modules that will only be used in the tests
        + vendor # Your application's third-party modules

Use `r.js` to compile your application into the `dist` folder. Be sure to keep all `test` code out of your application's `main.js`.

## Instructions

Once the project is installed, go to the `test` directory and run `npm install`. It should fetch all the dependencies. 

Karma.js will be installed as a local module, so if you don't have it installed globally already, you will need to run it explicitly from the node\_modules folder. There is a shell script you can use for this on Linux/Mac. Just follow these steps:

 1. Open a terminal
 2. Navigate to the `test` folder
 3. Run `./karma.start`

If you get any Require errors (specifically, `Error: Script error`), open up one of the test browsers, open the developer console's Network panel and see what's not loading. It usually is a simple typo in one of your dependency lists (or maybe a configuration issue in `main.js`).

