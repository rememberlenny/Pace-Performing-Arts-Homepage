module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      pages: {
        src: ['js/landing/models/**/*.js',
              'js/landing/collections/**/*.js',
              'js/landing/views/**/*.js',
              'js/landing/routers/**/*.js',
              'js/landing/app.js'],
        dest: 'js/landing/pages-app.js'
      }
    },
    uglify:{
      pages:{
        files:{
          'js/landing/pages-app-min.js':[
          'js/landing/pages-app.js'
          ]
        }
      }
    },
    jshint: {
      options: {
        globals: {
          jQuery: true
        },
      },
      uses_defaults: ['js/**/*.js']
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      scripts: {
        files: [ 'js/**/*.js' ],
        tasks: [ 'concat', 'uglify' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch','concat','uglify',]);
}
