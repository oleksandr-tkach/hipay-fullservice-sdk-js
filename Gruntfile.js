module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var configFileCreationNeeded = function() {
    return !grunt.file.exists('test/config.js')
  };

  grunt.initConfig({
    clean: ['dist'],

    pkg: grunt.file.readJSON('package.json'),

    concat: {
        options: {
              separator: grunt.util.linefeed + ';' + grunt.util.linefeed,
        },
        dist1 : {
              src: ['src/reqwest.js', 'src/json3.js', 'src/hipay-fullservice-sdk.js'],
              dest: 'dist/hipay-fullservice-sdk.js'
        },
        dist2: {

            src: ['src/json3.js', 'node_modules/bluebird/js/browser/bluebird.js','node_modules/axios/dist/axios.js', 'src/hipay-fullservice-sdk-2.js'],
            dest: 'dist/hipay-fullservice-sdk-2.js'
        }
    },
    uglify: {
      my_target: {
        files: {
          'dist/hipay-fullservice-sdk.min.js': ['dist/hipay-fullservice-sdk.js']
        }
      }
    }

  });

  grunt.registerTask('default', ['sync', 'clean', 'concat', 'uglify']);
    grunt.registerTask('dist', ['concat:dist1', 'concat:dist2']);

};