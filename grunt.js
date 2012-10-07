/*global module:false*/
module.exports = function(grunt) {

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
				//dest: '_static/js/<%= pkg.name %>-<%= pkg.version %>.js'
				dest: '_static/js/<%= pkg.jsname %>.js'
			},
			// CSS FILES
			css: {
				src: [
					'<banner:meta.banner>',
					'_dev/css/normalize.css',
					'_dev/css/helper.css',
					'_dev/css/typography.css',
					'_dev/css/layout.css'
				],
				//dest: '_static/css/<%= pkg.name %>-<%= pkg.version %>.css'
				dest: '_static/css/<%= pkg.cssname %>.css'
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
				//dest: '_static/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
				dest: '_static/js/<%= pkg.jsname %>.min.js'
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
				//dest: '_static/css/<%= pkg.name %>-<%= pkg.version %>.min.css'
				dest: '_static/css/<%= pkg.cssname %>.min.css'
			}
		},

		// JSHINT SETTINGS
		jshint: {
			options: {
				browser: true,
				//devel: true, // console, alert
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
				'_dev/css/*.css'
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