1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:    Main difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is getElementById works only when we identify something speicifically with a unique "id", getElementsByClassName returns multiple values which means it is live, it can change DOM values, querySelector / querySelectorAll these two are the most flexible among the 4 things as they can work in all CSS sectors.


2. How do you create and insert a new element into the DOM?
Ans:    To create & insert new element in the DOM, we use "document.createElement()", then we add append methods with it like appendChild, append, before, after etc.

3. What is Event Bubbling and how does it work?
Ans:   Event bubbling is when an event starts from it's target element and bubbles up through its parent elements until it reaches it's root.

Example: clicking a button inside a <div> → click fires first,then its parent div, then body and then document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:   When we attach a single event listener that listens for events only on it's children using event Bubbling, we call it Event Delegation. It is useful as we don't have to attach  listeners newly when elements are added. 

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:   Difference between preventDefault() and stopPropagation() is preventDefault() prevents default browser effect on a server and stopPropagation() prevents a link from navigating.