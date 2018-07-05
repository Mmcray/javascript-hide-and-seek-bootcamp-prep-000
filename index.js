function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const lis = 
  document.querySelector('#nested .target');
  return lis;
}

function increaseRankBy(n) {
  const dep = document.querySelectorAll(".ranked-list");
  
  for (let i = 0; i < dep.length; i++) {
    dep[i].innerHTML = (parseInt(i) + n);
  }
}

function deepestChild() {
  const deep = document.getElementById("grand-node");
  const deeper = deep.querySelectorAll('div');
  var len = deeper.length;
  for (let i = 0; i < deeper.length; i++) {
    while (deeper.length > i) {
    var deepest = deeper[i];
    i++;
    }
    return deepest;
  
  
  
  
}
}