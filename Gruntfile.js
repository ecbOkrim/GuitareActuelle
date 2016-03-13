module.exports = function(grunt){

	var Imagemin = require('imagemin');
	var mozjpeg = require('imagemin-mozjpeg');

	mozjpeg();

	grunt.initConfig({
	  uglify: {
			options: {
	      preserveComments: 'some',
				report: false
	    },
			my_target: {
			  files: [{
		      expand: true,
		      cwd: 'js/',
		      src: ['*.js'],
		      dest: 'built/js'
		    }]
			}
		},

		cssmin: {
			options: {
	        keepSpecialComments: 0
	    },
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css/',
		      src: ['*.css'],
		      dest: 'built/css'
		    }]
		  }
		},

		concat: {
	    css: {
	      src: ['built/css/*.css', '!built/css/style.css'],
	      dest: 'built/css/style.css',
	    },
			js: {
				options:{
					separator:';',
				},
				src: ['built/js/*.js', '!built/js/script.js'],
				dest: 'built/js/script.js',
			},
		},

		imagemin: {                          // Task
	    static: {                          // Target
	      options: {                       // Target options
	        optimizationLevel: 3,
	        svgoPlugins: [{ removeViewBox: false }],
					use: [mozjpeg()]
	      },
	      files: {                         // Dictionary of files
	        'pics/img.png': 'built/pic/img.png', // 'destination': 'source'
	        'pics/img.jpg': 'built/pic/img.jpg',
	        'pics/img.gif': 'built/pic/img.gif'
	      }
	    },
	    dynamic: {                         // Another target
	      files: [{
	        expand: true,                  // Enable dynamic expansion
	        cwd: 'src/',                   // Src matches are relative to this path
	        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
	        dest: 'dist/'                  // Destination path prefix
	      }]
	    },
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['uglify','cssmin','concat:css','concat:js','imagemin']);
};
