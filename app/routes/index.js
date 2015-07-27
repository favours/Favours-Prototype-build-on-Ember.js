import Ember from 'ember';

var people = [
  {
    "name" : "Jim",
    "points" : 15,
    "memberSince" : "June 2015" 
  },
  {
    "name" : "Rafael",
    "points" : 12,
    "memberSince" : "July 2015" 
  },
  {
    "name" : "Jane",
    "points" : 11.5,
    "memberSince" : "June 2015" 
  },
  {
    "name" : "Alpha",
    "points" : 5,
    "memberSince" : "May 2015" 
  },
  {
    "name" : "Daniel",
    "points" : 500,
    "memberSince" : "May 2015" 
  }
];

export default Ember.Route.extend({
  model : function() {
    return people;
  }
});

