define(['./../module'], function (module) {
  'use strict';

  module.factory('notifierService', ['$log','globalToastr',
    function ($log,globalToastr) {

      globalToastr.options.closeButton = true;
//      globalToastr.options.onShown = function() {
//      };
//      globalToastr.options.onHidden = function() {
//      };

      var basicNotify = function(options){
        if(!options.message){
          globalToastr.error('You sent an invalid Toastr call!');
          return;
        }
        var type = 'info';
        if(options.type){
          type = options.type;
        }

        if(options.title){
          globalToastr[type](options.message,options.title);
        } else {
          globalToastr[type](options.message);
        }
      };

      return {
        clear: function(){
          globalToastr.clear();
        },
        success: function(message,title){
          var options = {
            message: message,
            title: title,
            type: 'success'
          };
          basicNotify(options);
          $log.log(title + ": " + message);
        },
        info: function(message,title){
          var options = {
            message: message,
            title: title,
            type: 'info'
          };
          basicNotify(options);
          $log.log(title + ": " + message);
        },
        warning: function(message,title){
          var options = {
            message: message,
            title: title,
            type: 'warning'
          };
          basicNotify(options);
          $log.warn(title + ": " + message);
        },
        error: function(message,title){
          var options = {
            message: message,
            title: title,
            type: 'error'
          };
          basicNotify(options);
          $log.error(title + ": " + message);
        },
        debug: function(message,title){
          var options = {
            message: message,
            title: title,
            type: 'info'
          };
          basicNotify(options);
          $log.debug(title + ": " + message);
        }
      }
    }]);
});