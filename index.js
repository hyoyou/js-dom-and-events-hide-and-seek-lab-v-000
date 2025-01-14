function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rank = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node').querySelectorAll('div')

  return node[node.length - 1];
}
