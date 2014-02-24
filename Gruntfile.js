module.exports = function(grunt) {
  grunt.initConfig({
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        //grep: '*-test',
        ui: 'bdd',
        reporter: 'tap'
      },

      all: { src: ['test/**/*.js'] }
    },
    jshint: {
      //src: ['Gruntfile.js', 'src/app/**/*.js', 'src/config.js', 'tests/app/**/*.js'],
      src: ['Gruntfile.js', 'test/**/*.js', 'lib/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        node: true,
        globals: {
          assert: true,
          require: true,
          define: true,
          requirejs: true,
          //describe: true,
          expect: true,
          it: true,
          /* MOCHA */
          describe: false,
          before: false,
          beforeEach: false,
          after: false,
          afterEach: false,
          to: false,
          be: false,
          ok: false
        }
      }
    }
  });

  // For this to work, you need to have run `npm install grunt-simple-mocha`
  grunt.loadNpmTasks('grunt-simple-mocha');

   // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-jshint');

  //http://merrickchristensen.com/articles/gruntjs-workflow.html

  // Add a default task. This is optional, of course :)
  grunt.registerTask('default', ['simplemocha', 'jshint']);

};
