module.exports = function(grunt){

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                
                files: [{
                    expand: true,
                    cwd:    'assets/sass',
                    dest:   'assets/css',
                    src:    ['**/*.scss'],
                    ext:    '.css'
                }]
            }
        },

        watch: {
            files: 'assets/sass/*.scss',
            
            tasks: [
                'sass'
            ]
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            target: {
                files: {
                    'assets/js/app.min.js': [
                        'assets/js/app.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'watch'
    ]);

    grunt.registerTask('minify', [
        'cssmin',
        'uglify'
    ]);

};
