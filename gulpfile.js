'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);


// para insertar template.html directamente en templateUrl
var inlineN2Template = require('gulp-inline-ng2-template');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('./tsconfig.json');

let tsInLines = build.subTask('tsInLines',function(gulp,buildOptions, done){
    return gulp.src('src/webparts/helloWorld/app/**/*.ts')
        .pipe(inlineN2Template({base:'/src/webparts/helloWorld/app/',useRelativePaths:true}))
        .pipe(tsProject())
        .pipe(gulp.dest('lib/webparts/helloWorld/app'));
});
build.rig.addPostTypescriptTask(tsInLines);

let tsInLines1 = build.subTask('tsInLines',function(gulp,buildOptions, done){
    return gulp.src('src/webparts/test01/app/**/*.ts')
        .pipe(inlineN2Template({base:'/src/webparts/test01/app/',useRelativePaths:true}))
        .pipe(tsProject())
        .pipe(gulp.dest('lib/webparts/test01/app'));
});
build.rig.addPostTypescriptTask(tsInLines1);


build.initialize(gulp);
