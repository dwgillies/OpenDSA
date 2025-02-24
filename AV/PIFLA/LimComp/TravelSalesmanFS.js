// Written by Yijing Wu and Cliff Shaffer
$(document).ready(function(){
  "use strict";

  var av_name = "TravelSalesmanFS";
  var av = new JSAV(av_name);
  var Frames = PIFRAMES.init(av_name);

  //frame 1
  av.umsg("There are several ways that a problem could be considered hard. For example, we might have trouble understanding the definition of the problem itself. At the beginning of a large data collection and analysis project, developers and their clients might have only a hazy notion of what their goals actually are, and need to work that out over time.");
  av.displayInit();

  //frame 2
  av.umsg("For other types of problems, we might have trouble finding or understanding an algorithm to solve the problem. Understanding spoken English and translating it to written text is an example of a problem whose goals are easy to define, but whose solution is not easy to discover. ");
  av.step();

  //frame 3
  av.umsg("But even though a natural language processing algorithm might be difficult to write, the program's running time might be fairly fast. There are many practical systems today that solve aspects of this problem in reasonable time.");
  av.step();

  //frame 4
  av.umsg("None of these is what is commonly meant when a computer theoretician uses the word <b>hard</b>. Throughout this section, <b>hard</b> means that the best-known algorithm for the problem is expensive in its running time. ");
  av.step();

  //frame 5
  av.umsg(Frames.addQuestion("q1"));
  av.step();

  //frame 6
  av.umsg("One example of a hard problem is Towers of Hanoi. It is easy to understand this problem and its solution. It is also easy to write a program to solve this problem. But, it takes an extremely long time to run for any <b>reasonably</b> large value of n. Try running a program to solve Towers of Hanoi for only 30 disks!");
  av.step();

  //frame 7
  av.umsg("The Towers of Hanoi problem takes exponential time, that is, its running time is Θ(2<sup>n</sup>). This is radically different from an algorithm that takes Θ(nlogn) time or Θ(n<sup>2</sup>) time. It is even radically different from a problem that takes Θ(n<sup>4</sup>) time. These are all examples of polynomial running time, because the exponents for all terms of these equations are constants.");
  av.step();

  //frame 8
  av.umsg(Frames.addQuestion("q2"));
  av.step();

  //frame 9
  av.umsg("If we buy a new computer that runs twice as fast, the size of problem with complexity Θ(n<sup>4</sup>) that we can solve in a certain amount of time is increased by the fourth root of two. In other words, there is a multiplicative factor increase, even if it is a rather small one. This is true for any algorithm whose running time can be represented by a polynomial.");
  av.step();

  //frame 10
  av.umsg(Frames.addQuestion("q3"));
  av.step();

  //frame 11
  av.umsg("Consider what happens if you buy a computer that is twice as fast and try to solve a bigger Towers of Hanoi problem in a given amount of time. <br><br>Because its complexity is Θ(2<sup>n</sup>), we can solve a problem only one disk bigger! There is no multiplicative factor, and this is true for any exponential algorithm: A constant factor increase in processing power results in only a fixed addition in problem-solving power.");
  av.step();

  //frame 12
  av.umsg(Frames.addQuestion("q4"));
  av.step();

  //frame 13
  av.umsg("There are a number of other fundamental differences between polynomial running times and exponential running times that argues for treating them as qualitatively different. <br><br>Polynomials are closed under composition and addition. Thus, running polynomial-time programs in sequence, or having one program with polynomial running time call another a polynomial number of times yields polynomial time.");
  av.step();

  //frame 14
  av.umsg("Also, all computers known are polynomially related. That is, any program that runs in polynomial time on any computer today, when transferred to any other computer, will still run in polynomial time.");
  av.step();


  //frame 15
  av.umsg("There is a practical reason for recognizing a distinction. In practice, most polynomial time algorithms are <b>feasible</b> in that they can run reasonably large inputs in reasonable time. In contrast, most algorithms requiring exponential time are not practical to run even for fairly modest sizes of input.");
  av.step();

  //frame 16
  av.umsg(Frames.addQuestion("q5"));
  av.step();

  //frame 17
  av.umsg(Frames.addQuestion("q6"));
  av.step();

  //frame 18
  av.umsg("One could argue that a program with high polynomial degree (such as n<sup>100</sup>) is not practical, while an exponential-time program with cost 1.001<sup>n</sup> is practical. <br><br>But the reality is that we know of almost no problems where the best polynomial-time algorithm has high degree (they nearly all have degree four or less), while almost no exponential-time algorithms (whose cost is (O(c<sup>n</sup>)) have their constant c close to one. So there is not much gray area between polynomial and exponential time algorithms in practice.");
  av.step();

  //franme 19
  av.umsg(Frames.addQuestion("q7"));
  av.step();

  //frame 20
  av.umsg("For the purposes of this Module, we define a hard algorithm to be one that runs in exponential time, that is, in Ω(c<sup>n</sup>) for some constant c>1. A definition for a hard problem will be presented soon.");
  av.step();

  //frame 21
  av.umsg("<B>The theory of NP-Completeness</b><br><br>Imagine a magical computer that works by guessing the correct solution from among all of the possible solutions to a problem.<br>Another way to look at this is to imagine a super parallel computer that could test all possible solutions simultaneously. Certainly this magical (or highly parallel) computer can do anything a normal computer can do. It might also solve some problems more quickly than a normal computer can. ");
  av.step();

  //frame 22
  av.umsg("Consider some problem where, given a guess for a solution, checking the solution to see if it is correct can be done in polynomial time. Even if the number of possible solutions is exponential, any given guess can be checked in polynomial time (equivalently, all possible solutions are checked simultaneously in polynomial time), and thus the problem can be solved in polynomial time by our hypothetical magical computer. <br><br>Another view of this concept is this: If you cannot get the answer to a problem in polynomial time by guessing the right answer and then checking it, then you cannot do it in polynomial time in any other way.");
  av.step();

  //frame 23
  av.umsg("The idea of <b>guessing</b> the right answer to a problem—or checking all possible solutions in parallel to determine which is correct—is a called a non-deterministic choice. <br><br>An algorithm that works in this manner is called a non-deterministic algorithm, and any problem with an algorithm that runs on a non-deterministic machine in polynomial time is given a special name: It is said to be a problem in NP. Thus, problems in NP are those problems that can be solved in polynomial time on a non-deterministic machine. ");
  av.step();

  //frame 24
  av.umsg(Frames.addQuestion("q8"));
  av.step();

  //frame 25
  av.umsg(Frames.addQuestion("q9"));
  av.step();


  //frame 26
  av.umsg("Not all problems requiring exponential time on a regular computer are in NP. For example, Towers of Hanoi is not in NP, because it must print out O(2<sup>n</sup>) moves for n disks. A non-deterministic machine cannot <b>guess</b> and print the correct answer in less time.");
  av.step();

  //frame 27
  av.umsg(Frames.addQuestion("q10"));
  av.step();

  //frame 28
  av.umsg("On the other hand, consider the TRAVELING SALESMAN problem.<br><br> <b><u>Problem</u></b> <br> TRAVELING SALESMAN (1) <br><b>Input:</b> A complete, directed graph G with positive distances assigned to each edge in the graph. <br><b>Output:</b> The shortest simple cycle that includes every vertex.");
  av.step();

  //frame 29
  av.umsg("Figure 0.3.1 illustrates this problem. Five vertices are shown, with edges and associated costs between each pair of edges. (For simplicity Figure 0.3.1 shows an undirected graph, assuming that the cost is the same in both directions, though this need not be the case.) ");
  var graph = av.ds.graph({width: 300, height: 300, layout: "manual", directed: false});
  var a = graph.addNode("A", {left: 80, top: 80});
  var b = graph.addNode("B", {left: 220, top: 80});
  var c = graph.addNode("C", {left: 280, top: 210});
  var d = graph.addNode("D", {left: 150, top: 290});
  var e = graph.addNode("E", {left: 20, top: 210});
  graph.addEdge(a, b, {weight: "2"});
  graph.addEdge(a, c, {weight: "3"});
  graph.addEdge(a, d, {weight: "8"});
  graph.addEdge(a, e, {weight: "3"});
  graph.addEdge(b, c, {weight: "6"});
  graph.addEdge(b, d, {weight: "1"});
  graph.addEdge(b, e, {weight: "2"});
  graph.addEdge(c, e, {weight: "4"});
  graph.addEdge(d, e, {weight: "1"});
  graph.addEdge(c, d, {weight: "1"});
  graph.layout();
  var l1 = av.label("Figure 0.3.1: An illustration of the TRAVELING SALESMAN problem. Five vertices are shown, with edges between each pair of cities. The problem is to visit all of the cities exactly once, returning to the start city, with the least total cost.", {left: 0, top: 400});
  av.step();

  //frame 30
  av.umsg("If the salesman visits the cities in the order ABCDEA, they will travel a total distance of 13. A better route would be ABDCEA, with cost 11. The best route for this particular graph would be ABEDCA, with cost 9.");
  av.step();

  //frame 31
  graph.hide();
  l1.hide();
  av.umsg("We cannot solve this problem in polynomial time with a guess-and-test non-deterministic computer. The problem is that, given a candidate cycle, while we can quickly check that the answer is indeed a cycle of the appropriate form, and while we can quickly calculate the length of the cycle, we have no easy way of knowing if it is in fact the shortest such cycle. <br><br>However, we can solve a variant of this problem cast in the form of a decision problem. A decision problem is simply one whose answer is either YES or NO. The decision problem form of TRAVELING SALESMAN is as follows.");
  av.step();

  //frame 32
  av.umsg(Frames.addQuestion("q11"));
  av.step();

  //frame 33
  av.umsg("<b><u>Problem</u></b> <br> TRAVELING SALESMAN (2) <br><b>Input:</b> A complete, directed graph G with positive distances assigned to each edge in the graph, and an integer k. <br><b>Output:</b> YES if there is a simple cycle with total distance ≤k containing every vertex in G, and NO otherwise.");
  av.step();


  //frame 34
  av.umsg("We can solve this version of the problem in polynomial time with a non-deterministic computer. The non-deterministic algorithm simply checks all of the possible subsets of edges in the graph, in parallel. If any subset of the edges is an appropriate cycle of total length less than or equal to k, the answer is YES; otherwise the answer is NO. ");
  av.step();

  //frame 35
  av.umsg("Note that it is only necessary that some subset meet the requirement; it does not matter how many subsets fail. Checking a particular subset is done in polynomial time by adding the distances of the edges and verifying that the edges form a cycle that visits each vertex exactly once. Thus, the checking algorithm runs in polynomial time.");
  av.step();

  //frame 36
  av.umsg("Unfortunately, there are 2<sup>|E|</sup> subsets to check, so this algorithm cannot be converted to a polynomial time algorithm on a regular computer. Nor does anybody in the world know of any other polynomial time algorithm to solve TRAVELING SALESMAN on a regular computer, despite the fact that the problem has been studied extensively by many computer scientists for many years.");
  av.step();

  //frame 37
  av.umsg(Frames.addQuestion("q12"));
  av.step();

  //frame 38
  av.umsg("It turns out that there is a large collection of problems with this property: We know efficient non-deterministic algorithms, but we do not know if there are efficient deterministic algorithms. At the same time, we have not been able to prove that any of these problems do not have efficient deterministic algorithms. This class of problems is called NP-complete.");
  av.step();

  //frame 39
  av.umsg(Frames.addQuestion("q13"));
  av.step();


  //frame 40
  av.umsg("What is truly strange and fascinating about NP-complete problems is that if anybody ever finds the solution to any one of them that runs in polynomial time on a regular computer, then by a series of reductions, every other problem that is in NP can also be solved in polynomial time on a regular computer!");
  av.step();


  //frame 41
  av.umsg("Define a problem to be NP-hard if any problem in NP can be reduced to X in polynomial time. Thus, X is as hard as any problem in NP. A problem X is defined to be NP-complete if <br><br>1. X is in NP, and <br><br>2. X is NP-hard");
  av.step();

  //frame 42
  av.umsg(Frames.addQuestion("q14"));
  av.step();


  //frame 43
  av.umsg("The requirement that a problem be NP-hard might seem to be impossible, but in fact there are hundreds of such problems, including TRAVELING SALESMAN.");
  av.step();

  av.recorded();
});
