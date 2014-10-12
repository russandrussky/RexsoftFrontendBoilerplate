module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: true,
          sourceMap: true,
          sourceMapFilename: 'css/style.css.map',
          sourceMapURL: 'style.css.map'
        },
        files: {
          "css/ie8.css": "dev/less/ie8.less",
          "css/style.css": "dev/less/style.less"
        }
      },
      production: {
        options: {
          compress: true,
          cleancss: true
        },
        files: {
          "css/ie8.css": "dev/less/ie8.less",
          "css/style.css": "dev/less/style.less"
        }
      },
      beautify: {
        options: {
          compress: false,
          sourceMap: false,
          relativeUrls: true
        },
        files: {
          "css/ie8.css": "dev/less/ie8.less",
          "css/style.css": "dev/less/style.less"
        }
      }
    },
    concat: {
      development: {
        files: {
          'js/libs.js': ['dev/js/jquery-1.11.1.min.js', 'dev/js/lib/*.js']
        }
      },
      production: {
        files: {
          'dev/js/production.js': ['js/libs.js', 'js/common.js']
        }
      }
    },
    uglify: {
      options: {
        sourceMap: false
      },
      production: {
        src: 'dev/js/production.js',
        dest: 'js/production.min.js'
      }
    },
    htmlbuild: {
      development: {
        src: 'dev/templates/*.html',
        dest: './',
        options: {
          sections: {
            layout: {
              head: 'dev/chunks/head.html',
              header: 'dev/chunks/header.html',
              scripts: 'dev/chunks/scripts.html',
              footer: 'dev/chunks/footer.html'
            }
          }
        },
        data: {
          // Data to pass to templates
          version: "0.1.0",
          title: "test"
        }
      }
    },
    replace: {
      css: {
        src: ['css/style.css', 'css/ie8.css'],
        dest: 'css/',
        replacements: [{
          from: /(\.\.\/)+css\//g,
          to: ''
        }]
      },
      html: {
        src: ['./*.html'],
        dest: './',
        replacements: [{
          from: /(\.\.\/)+/g,
          to: ''
        },{
          from: '.css',
          to: '.css?v=' + new Date().getTime()
        },{
          from: 'common.js',
          to: 'common.js?v=' + new Date().getTime()
        }]
      },
      production: {
        src: ['./*.html'],
        dest: './',
        replacements: [{
          from: '<script src="//localhost:35729/livereload.js"></script>',
          to: ''
        },{
          from: /\?v=\d+/g,
          to: ''
        }]
      },
      productionFinal: {
        src: ['./*.html'],
        dest: './',
        replacements: [{
          from: '<script src="js/libs.js"></script>',
          to: ''
        },{
          from: 'common.js',
          to: 'production.min.js'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['dev/js/*.js', 'js/common.js'],
        tasks: ['concat:development'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      styles: {
        files: ['dev/less/*.less'],
        tasks: ['less:development', 'replace:css'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      html: {
        files: ['dev/templates/*.html', 'dev/chunks/*.html'],
        tasks: ['htmlbuild', 'replace:html'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.registerTask('development', ['concat:development', 'less:development', 'htmlbuild', 'replace:css', 'replace:html', 'watch']);
  grunt.registerTask('production', ['concat:production', 'uglify:production', 'less:production', 'htmlbuild', 'replace:css', 'replace:html', 'replace:production']);
  grunt.registerTask('production-compress', ['concat:production', 'uglify:production', 'less:production', 'htmlbuild', 'replace']);
  grunt.registerTask('css-beautify', ['less:beautify', 'replace:css']);
};
