var unorderedList = document.createElement('UL')

//this function only works on one item and so it's not used anymore in the code
function addSingleItem() {
    var newItem = document.createElement('LI');
    newItem.innerHTML = document.getElementById('to-do').value;
    document.getElementById('list').appendChild(newItem);
    document.getElementById('to-do').value = '';
}
//the addItems function can add multiple items separated by a comma
// it also adds single items and so we no longer need to use the addSingleItem
//function listed above.
function addItems() {
    var input = document.getElementById('to-do').value;
    var inputArray = input.split(',');
    for (var i = 0; i < inputArray.length; i++) {
      var newItem = document.createElement('LI');
      newItem.innerHTML = inputArray[i];
      addOnclickAttribute(newItem);
      document.getElementById('list').appendChild(newItem);
    }
    document.getElementById('to-do').value = '';
}

function strikeThroughItem(element) {
    var index;
    var classArray = element.className.split(' ');
    for (var i = 0; i < classArray.length; i++) {
      if (classArray[i] === "cross-out") {
        index = i;
        break;
      }
    }
    if (index) {
      classArray.splice(index, 1);
    }
    else {
      classArray.push("cross-out");
    }
    element.className = classArray.join(' ');
}

function addOnclickAttribute(elementVariable) {
    elementVariable.setAttribute("onclick", "strikeThroughItem(this)");
};

function validate(someFunction) {
  if (document.getElementById('to-do').value === '') {
    alert('Oops, to do item was left blank.');
  }
  else {
    someFunction();
  }
}
