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
					'dist/jform.validate-1.0.1.min.js': [ 'src/*' ] 
				} 
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask( 'default', [ 'uglify' ] ); };