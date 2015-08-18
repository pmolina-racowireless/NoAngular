module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		coffee: {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files: [ { 
					cwd: 'angular',
					src: '**/*.coffee',
					dest: 'scripts/compiled',
					ext: '.js',
					expand: true
				} ]
			}
		},
		
		jade: {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files: [ {
					cwd: "views",
					src: "**/*.jade",
					dest: "build/views",
					ext: ".html",
					expand: true
				} ]
			}
		},

		watch: {
			scripts: {
				files: ['**/*.coffee'],
				tasks: ['coffee'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			html: {
				files: ['**/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			
			grunt: {
				files: ['gruntfile.js']
			}
		}
});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-jade');
	
	grunt.registerTask('default', ['coffee', 'jade']);
};