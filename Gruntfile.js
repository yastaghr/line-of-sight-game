grunt.initConfig({
  jshint: {
    client:[
      'Gruntfile.js',
      'JS/**/*.js',
      '!JS/vendor'
    ]
  },
  less: {
    compile: {
      files: {
        'public/css/compiled.css': 'public/css/**/*.less'
      }
    }
  },

  watch: {
    less: {
      tasks: ['less:debug'],
      files: ['**/*.less']
    },
    lint_client: {
      tasks: ['jshint:client'],
      files: ['JS/**/*.js']
    }

  }

});

//.loadNpmTasks section
grunt.loadNpmTasks('grunt-contrib-jshint'); //loading jshint into grunt
grunt.loadNpmTasks('grunt-contrib-less'); //loading less into grunt
grunt.loadNpmTasks('grunt-contrib-concat'); //loading concat (for bundling)
grunt.loadNpmTasks('grunt-contrib-uglify'); //loading uglify (for minification)
grunt.loadNpmTasks('grunt-spritesmith'); //loading for spriting
grunt.loadNpmTasks('grunt-contrib-clean'); //loading for cleaning
grunt.loadNpmTasks('grunt-contrib-watch'); //watches code for changes

//registering section
grunt.registerTask('default', ['jshint', 'less', 'watch']); //register a default task alias
