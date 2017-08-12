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
    allItem{
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
})();


var uiController = (function() {

  var domStrings = {
    inputType: '.add__type',
    inputDiscription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };

  return {
    getInput: function() {
      return  {
        type: document.querySelector(domStrings.inputType).value,
        description: document.querySelector(domStrings.inputDiscription).value,
        value: document.querySelector(domStrings.inputValue).value
      };
    },
    getDomStrings: function() {
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
    var input = uiCtrl.getInput();
    console.log(input);
  };

  return {
    init: function() {
      setUpEventListeners();
    }
  }
})(budgetController, uiController);

controller.init();
