module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        file: {
          'public/javascripts/all.js': ['public/javascripts/all.js']
        }
      }
    },
    bower_concat: {
      all: {
        dest: 'public/javascripts/vendor/all.js',
        dependencies: {
          'underscore': 'jquery',
          'backbone': 'underscore'
        }
      }
    }
  });
  [
    'grunt-bower-concat',
    'grunt-contrib-uglify'
  ].forEach(function(task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['bower_concat', 'uglify']);
};
