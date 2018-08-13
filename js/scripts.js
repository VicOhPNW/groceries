// $(document).ready(function() {
//   $("form#shopping").submit(function(event) {
//     event.preventDefault();
//
//     var blanks = ["item1", "item2", "item3", "item4", "item5"]
//
//     blanks.forEach(function(blank) {
//     var userInput = $("input#" + blank).val();
//
//     var NewArray = [userInput]
//     NewArray.concat(userInput);
//
//
//     $("form#shopping").hide();
//     alert(NewArray);
//
//       event.preventDefault();
//     });
//   });
// });

$(document).ready(function() {
  $("form#shopping").submit(function(event) {
    event.preventDefault();

    var blanks = ["item1", "item2", "item3", "item4", "item5"]
    var finalList = [];

    blanks.forEach(function(blank) {
    var userInput = $("input#" + blank).val();
    finalList.push(userInput);

    //var NewArray = [userInput]
    //NewArray.concat(userInput);


    $("form#shopping").hide();
    // alert(userInput);

      event.preventDefault();
    });
    alert(finalList);
  });
});
