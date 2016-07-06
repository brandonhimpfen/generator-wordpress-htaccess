'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var WordPressHtaccessGenerator = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        var prompts = [{
            name: 'appWWW',
            message: 'What is WordPress URL? Exclude www. ie. yoursite.com'
        }];

        this.prompt(prompts, function(props) {
            this.appWWW = props.appWWW;

            done();
        }.bind(this));

    },

    files: function() {
        var context = {
            domain_name: this.appWWW
        };

        this.template("_htaccess", ".htaccess", context);

    },

    end: function () {

    }

});

module.exports = WordPressHtaccessGenerator;
