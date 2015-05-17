module.exports = function(grunt) {
    grunt.initConfig({
        clean:  ["public/css", "public/js", "public/modules", 'public/index.html'],
        browserify: {
            js: {
                // root js in the app
                src: 'app/js/app.js',
                // Compile the above into to a single file to add a script tag for in your HTML
                dest: 'public/js/app.js'
            }
        },
        copy: {
            all: {
                // This copies all the html and css into the public/ folder
                expand: true,
                cwd: 'app/',
                src: ['**/*.html', '**/*.css'],
                dest: 'public/'
            }
        }
    });

    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // The default tasks to run when you type: grunt
    grunt.registerTask('default', ['clean', 'browserify', 'copy']);
};