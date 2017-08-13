var budgetController = (function() {
  var Expense = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
    this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
    this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function(id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };
  var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
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
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      data.allItems[type].push(newItem);
      return newItem;
    },

    deleteItem(type, id) {
      var ids, index;
      ids = data.allItems[type].map(function(current) {
        return current.id;
      });
      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget() {
      calculateTotal('exp');
      calculateTotal('inc');
      data.budget = data.totals.inc - data.totals.exp;
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages() {
      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc);
      })
    },

    getPercentages() {
      var allPerc = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },

    getBudget(){
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
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
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };


  var formatNumber = function(num, type) {
    var numSplit, int, dec;
    num = Math.abs(num);
    num = num.toFixed(2);
    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
  };

  var nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getInput() {
      return  {
        type: document.querySelector(domStrings.inputType).value,
        description: document.querySelector(domStrings.inputDiscription).value,
        value: parseFloat(document.querySelector(domStrings.inputValue).value)
      };
    },
    addListItem(obj, type) {
      var html, newHtml, element;
      if (type === 'inc') {
        element = domStrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else {
        element = domStrings.expensesContainer;
        html  = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    deleteListItem(selectorID) {
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFIelds() {
      var fields, fieldsArry;
      fields = document.querySelectorAll(domStrings.inputDiscription + ', ' + domStrings.inputValue);
      fieldsArry = Array.prototype.slice.call(fields);
      fieldsArry.forEach(function(current, i, array) {
        current.value = "";
      });
      fieldsArry[0].focus();
    },

    displayBudget(obj) {
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp'; document.querySelector(domStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(domStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(domStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
      if (obj.percentage > 0) {
        document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(domStrings.percentageLabel).textContent = '---'
      }
    },

    displayPercentages(percentages) {
      var fields = document.querySelectorAll(domStrings.expensesPercLabel);
      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0) {
            current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    displayMonth: function() {
      var now, month, months, year;
      now = new Date();
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", 'September', 'October', 'November', 'December']
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(domStrings.dateLabel).textContent = months[month - 1] + ' ' + year;

    },

    changedType(){
      var fields = document.querySelectorAll(
        domStrings.inputType + ',' +
        domStrings.inputDiscription + ',' +
        domStrings.inputValue
      );
      nodeListForEach(fields, function(cur) {
        cur.classList.toggle('red-focus');
      });

      document.querySelector(domStrings.inputButton).classList.toggle('red');
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

    document.querySelector(dom.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(dom.inputType).addEventListener('change', uiCtrl.changedType);
  };

  var updateBudget = function() {
    budgetCtrl.calculateBudget();
    var budget = budgetCtrl.getBudget();
    uiCtrl.displayBudget(budget);
  };

  var updatePercentages = function() {
    budgetCtrl.calculatePercentages();
    var percentages = budgetCtrl.getPercentages();
    uiCtrl.displayPercentages(percentages);
  };

  var ctrlAddItem = function() {
    var input, newItem;
    input = uiCtrl.getInput();
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      uiCtrl.addListItem(newItem, input.type);
      uiCtrl.clearFIelds();
      updateBudget();
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemID) {
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);

      budgetCtrl.deleteItem(type, ID);
      uiCtrl.deleteListItem(itemID);
      updateBudget();
      updatePercentages();
    }
  };

  return {
    init() {
      uiCtrl.displayMonth();
      uiCtrl.displayBudget({
        budget: 0,
      totalInc: 0,
      totalExp: 0,
      percentage: -1
      });
      setUpEventListeners();
    }
  }
})(budgetController, uiController);

controller.init();
