var budgetController = (function() {

})();


var uiController = (function() {

})();


var controller = (function(budgetCtrl, uiCtrl) {
  var ctrlAddItem = function() {
    console.log('It works');
  };
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
  document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, uiController);
