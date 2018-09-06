module.exports = function(grunt) {
    require('jit-grunt')(grunt);
  
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "stylesheets/main.css": "stylesheets/main.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['stylesheets/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    
    grunt.registerTask('default', ['less', 'watch']);
  };