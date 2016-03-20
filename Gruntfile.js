module.exports = function(grunt){

	grunt.initConfig({
		clean: {
			all:{
				src:['9_DIST/*']
			},
			allDistHtml:{
				src:['9_DIST/*.html']
			},
			allDistImg:{
				src:['9_DIST/img/*']
			},
			uselessCss:{
				src:['9_DIST/css/*.css','!9_DIST/css/style.css']
			},
			uselessJs:{
				src:['9_DIST/js/*.js','!9_DIST/js/script.js']
			}
		},

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
		      expand: true,
		      cwd: '1_HTML/',
		      src: ['*.html'],
		      dest: '9_DIST/'
		    }]
      }
    },

		compass: {
			dist: {
	      options: {
	        sassDir: '2_CSS',
	        cssDir: '2_CSS',
	        environment: 'production'
	      }
	    }
	  },

		cssmin: {
			options: {
	        keepSpecialComments: 0
	    },
		  target: {
		    files: [{
		      expand: true,
		      cwd: '2_CSS/',
		      src: ['*.css'],
		      dest: '9_DIST/css'
		    }]
		  }
		},

    uglify: {
			options: {
				preserveComments: false,
				report: 'min',
				screwIE8: true,
			},
			js: {
				options: {
					preserveComments: false,
					report: 'min',
					screwIE8: true,
				},
				files: [{
					expand: true,
					cwd: '4_JS/',
					src: ['*.js'],
					dest: '9_DIST/js'
				}],
			},
    },

		concat: {
	    css: {
	      src: ['9_DIST/css/*.css', '!9_DIST/css/style.css'],
	      dest: '9_DIST/css/style.css',
	    },
			js: {
				options:{
					separator:';',
				},
				src: ['9_DIST/js/*.js', '!9_DIST/js/script.js'],
				dest: '9_DIST/js/script.js',
			},
		},

    responsive_images: {
      myTask: {
        options: {
          aspectRatio: true,
          upscale: true,
          gravity: "center",
          quality: 60,
          /*sharpen: {
            sigma: 1,
            radius: 2
          },*/
          sizes: [{
            width: 320,
            height: 240
          },{
            name: 'large',
            width: 640
          },{
            name: "large",
            width: 1024,
            suffix: "_x2"
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png}'],
          cwd: '3_IMG/',
          dest: '9_DIST/img/'
        }]
      }
    },

    connect: {
      server: {
        options: {
          open: true,
          port: 9001,
          base: '9_DIST/'
        }
      }
    },

    watch: {
      files: {
        files: ['1_HTML/*','2_CSS/*','4_JS/*'],
        tasks: ['default'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
      imgs: {
        files: ['3_IMG/*'],
        tasks: ['newer:responsive_images'],
        options: {
          spawn: false,
          livereload: true,
        },
      }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('cleanAll', ['clean:all']);
	grunt.registerTask('html', ['clean:allDistHtml','htmlmin']);
	grunt.registerTask('css', ['compass','cssmin','concat:css','clean:uselessCss']);
	grunt.registerTask('images', ['newer:responsive_images']);
	grunt.registerTask('js', ['uglify','concat:js','clean:uselessJs']);
	grunt.registerTask('default', ['html','css','images','js']);
	grunt.registerTask('all', ['default','connect','watch']);
};
