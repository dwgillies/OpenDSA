"use strict";

// Convenience function for setting another type of highlight
// (will be used for showing which elements will be compared during sort)
var setBlue = function (arr, index) {
  arr.css(index, {"background-color": "#ddf" });
};

(function ($) {
  var empty = [];
  empty.length = 10;
  var av = new JSAV("collisionCON1");
  // Create an array object under control of JSAV library
  var arr = av.ds.array(empty, {indexed: true});

  av.umsg("When doing collision resolution with linear probing by steps of size 2 on a hash table of size 10, a record that hashes to slot 4...");
  setBlue(arr, 4);
  av.displayInit();

  av.umsg("... will first probe to slot 6...");
  arr.highlight(6);
  av.step();

  av.umsg("... then slot 8...");
  arr.highlight(8);
  av.step();

  av.umsg("... then slot 0...");
  arr.highlight(0);
  av.step();

  av.umsg("... and finally slot 2.");
  arr.highlight(2);
  av.step();

  av.umsg("A record that hashes to slot 3...");
  arr.unhighlight([0, 2, 4, 6, 8]);
  setBlue(arr, 3);
  av.step();

  av.umsg("... will first probe to slot 5...");
  arr.highlight(5);
  av.step();

  av.umsg("... then slot 7...");
  arr.highlight(7);
  av.step();

  av.umsg("... then slot 9...");
  arr.highlight(9);
  av.step();

  av.umsg("... and finally slot 1.");
  arr.highlight(1);
  av.recorded();
}(jQuery));

(function ($) {
  var empty = [];
  empty.length = 10;
  var av = new JSAV("collisionCON2");
  // Create an array object under control of JSAV library
  var arr = av.ds.array(empty, {indexed: true});

  av.umsg("When doing collision resolution with linear probing by steps of size 3 on a hash table of size 10, a record that hashes to slot 4...");
  setBlue(arr, 4);
  av.displayInit();

  av.umsg("... will first probe to slot 7...");
  arr.highlight(7);
  av.step();

  av.umsg("... then slot 0...");
  arr.highlight(0);
  av.step();

  av.umsg("... then slot 3...");
  arr.highlight(3);
  av.step();

  av.umsg("... then slot 6...");
  arr.highlight(6);
  av.step();

  av.umsg("... then slot 9...");
  arr.highlight(9);
  av.step();

  av.umsg("... then slot 2...");
  arr.highlight(2);
  av.step();

  av.umsg("... then slot 5...");
  arr.highlight(5);
  av.step();

  av.umsg("... then slot 8...");
  arr.highlight(8);
  av.step();

  av.umsg(" and finally to slot 1.");
  arr.highlight(1);
  av.step();

  av.umsg("Since stepsize 3 is relatively prime to table size 10, all slots are eventually visited by the probe sequence.");
  av.recorded();
}(jQuery));

