module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    devUpdate: {
      show: {
        options: {
          updateType: 'report',
          reportUpdated: true,
          packages: {
            devDependencies: true,
            dependencies: true
          },
          packageJson: null
        }
      },
      install: {
        options: {
          updateType: 'force',
          reportUpdated: false,
          semver: false,
          packages: {
            devDependencies: true,
            dependencies: false
          },
          packageJson: null
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: [
          'src/BrowserDetection.js'
        ]
      }
    },

    run: {
      test: {
        exec: 'npm run test --silent'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-dev-update');

  grunt.registerTask('default', [
    'jshint',
    'run:test'
  ]);

};
