/**
 * Created by Administrator on 2017/9/13.
 */
angular.module('starter.services', ['ngResource'])
  .factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
  });
