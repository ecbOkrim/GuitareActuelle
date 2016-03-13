module.exports = function(grunt){

	var mozjpeg = require('imagemin-mozjpeg');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json');

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
			js-concat: {
				options: {
		      separator: ';',
		    },
				files:{
		      src: ['built/*.js', '!built/css/style.css'],
		      dest: 'built/script.js',
				}
			},
			css-concat: {
				files:{
		      src: ['built/*.css'],
		      dest: 'built/style.js',
				}
			}
	  },

		imagemin: {
		    optimizeImages: {
		      options: {
		        optimizationLevel: 3,
		        svgoPlugins: [{ removeViewBox: false }],
		        use: [mozjpeg()]
		      },
					files: [{
	        expand: true,
	        cwd: 'pics/',
	        src: ['*.{png,jpg,gif}'],
	        dest: 'built/pics/'
	      }]
	    }
	  }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', 'uglify');
};
