### This is a scaffold for a project with AngularJS, SASS, Browsersync, Gulp.js architecture

# Installation
### Step 1:

Create a empty project in c9

### Step 2:
Clone this repository into your project

```sh
$git clone https://github.com/Davidrl1000/baseAngularJSc9.git
```

### Step 3:
Move all outside of the folder baseAngularJSc9 to your project, && delete the folder baseAngularJSc9


# Run project
### Step 1:
Press the button 'play' in c9 (The green one in the top of the window) || (Menu/Toolbar) Run -> Run With -> Apache httpd(PHP,HTML)

### Step 2:
```sh
$gulp browser-sync
```

### Step 3:
Go to app/index.html. For better results change the path from https to http because the angular dependencies used in this project work with http

# Steps followed to create this project:

### Step 1:

Install AngularJS 1.5
```sh
$npm install angular@1.5.0
```

### Step 2:

Install angular-route 
```sh
$npm install angular-route
```

### Step 3:

Create the project's scaffolt (app/...)

### Step 4:

- install gulp globally so we can use it in the command line
```sh
$ npm i -g gulp
```

- install gulp locally as a development dependency
```sh
$ npm i -D gulp
```

- install browser-sync as a development dependency
```sh
$ npm i -D browser-sync
```

### Step 5:

Create the file gulpfile.js
```sh
$touch gulpfile.js
```

#### Inside gulpfile.js
```sh
var gulp = require('gulp'),
browserSync = require('browser-sync');

gulp.task('default', function() {
});

gulp.task('browser-sync', function() {

    browserSync({
    
        // You can use wildcards in here.
        //files: 'index.js,index.scss,...', >for specific files
        files: 'app/',
        
        // We can pick port 8081 or 8082, if you are more of a 2's kind 
        //of guy, go for the 8082. Highly recommended.
        
        port: 8082
    
    });

});

```
### Step 6:
Just in case to be necesary install sass in your c9 workspace 
```sh
$gem install sass
```

## Bibliography && references
* https://angularjs.org/
* https://www.npmjs.com/package/gulp-sass
* https://c9.io/blog/browsersync-gulp-js-cloud9/
* https://github.com/angular/bower-angular-route

# About me!!
* http://www.davidrldev.com
