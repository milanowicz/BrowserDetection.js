module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: false,
        presets: ['@babel/env']
      },
      dist: {
        files: {
          'dist/BrowserDetection.js': 'src/BrowserDetection.js'
        }
      }
    },
    copy: {
      config: {
        files: [
          {expand: true, cwd: './coverage/', src: 'badge-*.svg', dest: './.github/'}
        ]
      }
    },
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
    uglify: {
      options: {
        report: 'min'
      },
      main: {
        src: 'dist/BrowserDetection.js',
        dest: 'dist/BrowserDetection.min.js'
      }
    },
    run: {
      test: {
        exec: 'npm run test --silent'
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', [
    'jshint',
    'run:test',
    'babel',
    'uglify',
    'copy'
  ]);

};
