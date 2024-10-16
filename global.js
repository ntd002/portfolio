console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");

if (typeof navLinks === 'undefined') {
    console.log("Variable is Undefined");
}
else {
    console.log("Variable is defined and"
        + " value is " + GFG_Var);
}

let currentLink = navLinks.find(
    (a) => a.host === location.host && a.pathname === location.pathname,
  );

  if (currentLink) {
    // or if (currentLink !== undefined)
    currentLink.classList.add('current');
  }