# grunt-smoothie

## Features

> Auto generate modules for your javascript projects by mixing delicious flavours.
> Sprinkle in some auto generated doc meta comments
> Create test files in your favourite framework

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

## The "smoothie" task

### Overview
In your project's Gruntfile, add a section named `smoothie` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  smoothie: {
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  },
});
```

### Usage
Run the task then follow the instructions.

```shell
grunt smoothie
```


### Options

#### options.dir
Type: `String`
Default value: `'app/'`

The default directory you would like new files to be added to

#### options.moduleType
Type: `String`
Default value: `'node'`

The type of module you would like smoothie to generate for you

#### options.flavour
Type: `String`
Default value: `'class'`

Smoothies require flavours to mix in to the module... This flavour is "Class" which creates a Class style node module based on https://github.com/FredKSchott/the-node-way

#### options.spec
Type: `Boolean`
Default value: `'true'`

Wny not include a Test for your awesome smoothie.. The default test even contains pre written mocha specs which should pass on an unmodified smoothie
nb. Don't forget to modify your tests if you change your smoothie code. Or it won't pass anymore.



### Usage Examples

#### Default Options

```js
grunt.initConfig({
  smoothie: {
        default_task: {
            options: {
                dir: "app/",
                moduleType: 'node',
                flavour: 'class',
                spec: true
            }
        }
    },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
v1.0.0
-------
- initial project inception
- creates "Class" style node modules

# grunt-smoothie
