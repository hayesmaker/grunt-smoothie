[![npm version](https://badge.fury.io/js/grunt-smoothie.svg)](http://badge.fury.io/js/grunt-smoothie) [![Build Status](https://travis-ci.org/hayesmaker/grunt-smoothie.svg?branch=master)](https://travis-ci.org/hayesmaker/grunt-smoothie)

![Delicious Smoothies](/../<images-store>/smoothies.jpg?raw=true "Delicious JS Smoothies")

# grunt-smoothie
Auto generate modules and tests for your javascript projects.  A Template metaprogramming framework for javascript.

## Features

> - Auto generate javascript module js file and a Mocha Test js file for the module.
> - Define your own custom templates (docs required)
> - Inquirer prompt for module name
> - Inquirer prompt for package name
> - Predefined module template for Browserify Custom Type Modules - based on the node-way https://github.com/FredKSchott/the-node-way
> - JSDoc meta data added automatically (YUIDoc friendly format)


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-smoothie --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-smoothie');
```

### Usage
Run the task then follow the instructions.

```shell
grunt smoothie
```

## Templates:
- Using packaged templates (aka flavours)
> Define path to the template which by default are inside './node_modules/grunt-smoothie/tasks/flavours/node/specs/classModule.js'
> If you define a specTemplate, a Spec file (or Test Suite file for your module) is also created.

- Adding Custom Templates
> See making templates at https://github.com/hayesmaker/grunt-smoothie/tree/master/tasks/flavours/


### Options

#### options.prompt
Type: `Boolean`
Default value: `true`

When set to true the user is given a prompt to enter their module name, and packageName if packageMap option is present.
Should be set to false, when testing tasks.

#### options.src
Type: `String`
Default value: `'app/src'`

The default directory you would like new files to be added to

#### options.test
Type: `String`
Default value: `'app/test'`

The default directory you would like new files to be added to

#### options.moduleTemplate
Type: `String`
Example value: `'./node_modules/grunt-smoothie/tasks/flavours/node/specs/classModule.js'`

The path to the moduleTemplate, you can use this template, or create your own

#### options.specTemplate
Type: `String`
Example value: `'./node_modules/grunt-smoothie/tasks/flavours/node/specs/classModuleSpec.js'`
Default value: `None`

The path to the specTemplate, you can use this template, or create your own


#### options.packageMap
Type: 'Array',
Default value: `Empty Array`

If you'd like to support packages in your app, (currently only 1 level of packages inside your app are supported)
Then provide a packageMap.  When running the smoothie task, you can choose a package from this list or the 'Top Level'.
See Example 3 below.

### Usage Examples

#### Example 1:

Your project code has source js files inside app/src

```js
smoothie: {
    default_task: {
        options: {
            src: "app/src/",
            moduleTemplate: 'tasks/flavours/node/app/classModule.js'
        }
    }
}
```

#### Example 2:

Your project code has source js files inside app/src/
Your project tests are inside app/test/ and you'd like a test (mocha / jasmine style) generated based on templateDir/classModuleSpec.js

```js
smoothie: {
    default_task: {
        options: {
           src: "app/src/",
           test: "app/test/",
           moduleTemplate: 'tasks/flavours/node/app/classModule.js',
           specTemplate: 'tasks/flavours/node/specs/classModuleSpec.js',
        }
    }
}
```

#### Example 3:

Your project code has source js files inside app/src/ and packages(folders): core, components, states and utils.

```js
smoothie: {
    default_task: {
        options: {
            src: "app/src/",
            test: "app/test/",
            moduleTemplate: 'tasks/flavours/node/app/classModule.js',
            specTemplate: 'tasks/flavours/node/specs/classModuleSpec.js',
            packageMap: [
                {
                    name: 'Top Level',
                    value: ''
                },
                'core',
                'components',
                'states',
                'utils'
            ]
        }
    }
}
```

# grunt-smoothie

## Contributing
- Task changes
> In lieu of a formal styleguide, take care to maintain the existing coding style.
> Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
- Adding Templates
> See making templates at https://github.com/hayesmaker/grunt-smoothie/tree/master/tasks/flavours/

## Release History
v1.3.0
------
- Simplified template generation
- Only Custom paths supported now
- Package links respected in Spec require.

v1.2.0
------
- Packages supported

v1.1.0
------
- custom template paths supported

v1.0.0
-------
- initial project inception
- creates "Class" style node modules

#todos
------
- Provide more custom templates for common module patterns in js
- Provide some ES6 templates



