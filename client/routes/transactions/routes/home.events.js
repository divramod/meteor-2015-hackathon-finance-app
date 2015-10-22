// =========== [ transactionsHome events ] ===========
Template.transactionsHome.events({
  "click .amount": function (event) {
    console.log('Change Amount');
    $(".amount").replaceWith("<input class='amountInput'></input>" );
    $(".amountInput").focus();
  },
  "click .book": function (event) {
    console.log('Book');
  }
});
