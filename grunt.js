/*global module:false*/
module.exports = function(grunt) {

	var cssName = 'style'
	  , jsName = 'main'
	;

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner:
				'/*** \n' +
				' * <%= pkg.title %> \n' +
				' * - \n' +
				' * Version <%= pkg.version %> \n' +
				' * <%= grunt.template.today("dddd, mmmm dS, yyyy, HH:MM:ss") %>\n' +
				' */'
		},

		lint: {
			files: [
				'grunt.js',
				'_dev/js/*.js'
			]
		},

		// CONCATENATE
		concat: {
			// JS FILES
			js: {
				src: [
					'<banner:meta.banner>',
					'_dev/js/main.js'
				],
				// Use version number
				//dest: '_static/js/' + jsName + '-<%= pkg.version %>.js'
				// Doesnt use version number
				dest: '_static/js/' + jsName + '.js'
			},
			// CSS FILES
			css: {
				src: [
					'<banner:meta.banner>',
					
					// Base
					'_dev/css/base/normalize.css',
					'_dev/css/base/helper.css',
					'_dev/css/base/helper-typography.css',

					// Objects
					'_dev/css/objects/*.css',

					// Site
					'_dev/css/site/*.css',

					// Modules
					'_dev/css/modules/*.css'
				],
				// Use version number
				//dest: '_static/css/' + cssName + '-<%= pkg.version %>.css'
				// Doesnt use version number
				dest: '_static/css/' + cssName + '.css'
			}
		},

		// JS MIN
		min: {
			dist: {
				// Use banner and concatenated JS file
				src: [
					'<banner:meta.banner>',
					'<config:concat.js.dest>'
				],
				// Use version number
				//dest: '_static/js/' + jsName + '-<%= pkg.version %>.min.js'
				// Doesnt use version number
				dest: '_static/js/' + jsName + '.min.js'
			}
		},

		// CSS MIN
		cssmin: {
			dist: {
				// Use banner and concatenated CSS file
				src: [
					'<banner:meta.banner>',
					'<config:concat.css.dest>'
				],
				// Use version number
				//dest: '_static/css/' + cssName + '-<%= pkg.version %>.min.css'
				// Doesnt use version number
				dest: '_static/css/' + cssName + '.min.css'
			}
		},

		// JSHINT SETTINGS
		jshint: {
			options: {
				browser: true,
				// console, alert
				//devel: true,
				smarttabs: true,
				laxbreak: true,
				laxcomma: true,
				scripturl: true
			},
			globals: {
				jQuery: true
			}
		},

		// WATCH
		watch: {
			files: [
				'_dev/js/*.js',
				'_dev/css/*.css',
				'_dev/css/*/*.css'
			],
			tasks: 'default'
		},

		// SMUSH IMAGES
		smushit: {
			destination: {
				src:'_dev/img',
				dest:'_static/img'
			}
		}

	});

	// Grunt css
	// https://github.com/jzaefferer/grunt-css
	// Fixed version: https://github.com/quentind/grunt-css
	grunt.loadNpmTasks('grunt-css');

	// Grunt Smushit
	// https://github.com/heldr/grunt-smushit
	grunt.loadNpmTasks('grunt-smushit');

	// Default task
	grunt.registerTask('default', 'lint concat min cssmin');

	// Release taks
	grunt.registerTask('release', 'lint concat min cssmin smushit');

};