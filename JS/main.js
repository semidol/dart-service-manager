function show() {
  let elem = event.currentTarget.nextElementSibling;
  if (elem.style.display == 'flex') {
    elem.style.display = 'none';
  } else {
    elem.style.display = 'flex';
  }
}

document.getElementById('firstElem').style.display = 'flex';

document.getElementById('carousel_block').style.transform = 'translateY(-253px)';

let isPossible = true;

function up() {
  if (isPossible) {
    let elem = document.getElementById('carousel_block');

    elem.classList.add('carousel_up');
    elem.style.transform = 'translateY(-10px)';
    isPossible = false;

    setTimeout( function() {
      elem.classList.remove('carousel_up');
      elem.prepend(elem.lastElementChild);
      elem.style.transform = 'translateY(-253px)';
      isPossible = true;
    }, 600 );
  };
};

function down() {
  if (isPossible) {
    let elem = document.getElementById('carousel_block');

    elem.classList.add('carousel_up');
    elem.style.transform = 'translateY(-496px)';
    isPossible = false;

    setTimeout( function() {
      elem.classList.remove('carousel_up');
      elem.append(elem.firstElementChild);
      elem.style.transform = 'translateY(-253px)';
      isPossible = true;
    }, 600 );
  };
};

function choose() {
  let elem = event.currentTarget;
  let description = document.getElementsByClassName('member_description');

  for (let i = 0; i < elem.parentElement.children.length; i++) {
    elem.parentElement.children[i].className = 'not_selected';
    description[0].children[i].className = 'hidden';

    if (elem == elem.parentElement.children[i]) {
      description[0].children[i].className = '';
    }
  }

  elem.className = 'selected';
}

for (let elems of document.getElementsByTagName('a')) {
  elems.onclick = function() {
    return false;
  }
}
