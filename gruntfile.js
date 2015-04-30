"use strict"; 

module.exports = function( grunt ) { 
	grunt.initConfig({ 
		uglify: { 
			options: { 
				mangle: true,
				beautify: false
			}, 
			dist: { 
				files: { 
					'dist/jform.validate-1.0.0.min.js': [ 'src/jform.validate-1.0.0.js' ] 
				} 
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask( 'default', [ 'uglify' ] ); };