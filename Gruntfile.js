 'use strict';  
    
    module.exports = function(grunt) {  
      // Configuración del proyecto  
      grunt.initConfig({  
     pkg: grunt.file.readJSON('package.json'),  
     docco: {  
	     debug: {  
	     src: ['cassandra.js'],  
	     options: {  
	       	  output: 'docs/'  
	     }  
    	  }  
     }  
     });  

  
    grunt.loadNpmTasks('grunt-docco');
    grunt.registerTask('default', ['docco']);
    };
