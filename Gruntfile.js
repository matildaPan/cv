module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

   // copy: {
   //    html: {
   //      files: [{ src: './index.html', dest: './dist/index.html' }]
   //    }
   //  },

    // concat: {
    //   dist: {
    //       src:[
    //           'js/app.js',
    //           'js/service.js',
    //           'js/controller.js',
    //           'js/directives.js'
    //       ],
    //       desc: 'js/production.js',
    //   }
    // },

    uglify: {
      build: {
          src:[
              'js/app.js',
              'js/service.js',
              'js/controller.js',
              'js/directives.js'
          ],
          dest: 'js/production.min.js'
      }
    },

    // useminPrepare: {
    //   html: './dist/index.html',
    //   options: {
    //     dest: './dist'
    //   }
    // },
    // usemin: {
    //   html: ['./dist/index.html']
    // }
 
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
//  grunt.loadNpmTasks('grunt-contrib-cssmin');
//  grunt.loadNpmTasks('grunt-usemin');

  // Default task(s).
  grunt.registerTask('default', [
    //'copy:html',
    //'useminPrepare',
//    'concat',
    'uglify',
    //'cssmin'
    //'cssmin',
    //'usemin'
  ]);


};