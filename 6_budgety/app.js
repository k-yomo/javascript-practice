var budgetController = (function() {
  var Expence = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
  };

  var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
  };

  var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      }
  };

  return {
    addItem(type, des, val) {
      var newItem, ID;
      if (data.allItems[type] > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID =0;
      }
      if (type === 'exp') {
        newItem = new Expence(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      data.allItems[type].push(newItem);
      return newItem;
    },

    testing() {
      console.log(data);
    }
  };
})();


var uiController = (function() {

  var domStrings = {
    inputType: '.add__type',
    inputDiscription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };

  return {
    getInput() {
      return  {
        type: document.querySelector(domStrings.inputType).value,
        description: document.querySelector(domStrings.inputDiscription).value,
        value: document.querySelector(domStrings.inputValue).value
      };
    },
    addListItem(obj, type) {
      var html, newHtml, element;
      if (type === 'inc') {
        element = domStrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else {
        element = domStrings.expensesContainer;
        html  = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    clearFIelds(){
      var fields, fieldsArry;
      fields = document.querySelectorAll(domStrings.inputDiscription + ', ' + domStrings.inputValue);
      fieldsArry = Array.prototype.slice.call(fields);
      fieldsArry.forEach(function(current, i, array) {
        current.value = "";
      });
      fieldsArry[0].focus();
    },

    getDomStrings() {
      return domStrings;
    }
  };
})();


var controller = (function(budgetCtrl, uiCtrl) {
  var dom = uiCtrl.getDomStrings();
  var setUpEventListeners = function() {
    document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  }

  var ctrlAddItem = function() {
    var input, newItem;
    input = uiCtrl.getInput();
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    uiCtrl.addListItem(newItem, input.type);
    uiCtrl.clearFIelds();
  };

  return {
    init() {
      setUpEventListeners();
    }
  }
})(budgetController, uiController);

controller.init();
