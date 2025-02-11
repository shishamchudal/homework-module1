//User interaction with table cells
$(document).ready(function () {
  $("td").click(function () {
    var content = $(this).text();
    var columnIndex = $(this).index(); // Get the index of the clicked column
    var cliffSiteName = $("th").eq(columnIndex).text(); // Get the text of the corresponding <th>

    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");

      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css("visibility", "visible");
        $("#displaySelected").css("margin-top", "2em");
        // Include the cliff site name with the activity
        $("#result").append("<p>" + content + " at " + cliffSiteName + "</p>");
      } else {
        $("#result p:contains(" + content + ")").remove(); //remove child element

        if ($("#result").has("p").length == 0) {
          // Corrected comparison: .length == 0 or .length === 0 is preferred
          //check if there are any child elements within parent
          $("#displaySelected").css("visibility", "hidden"); //make display box hidden
          $("#displaySelected").css("margin-top", "0"); //remove spaces above display box
        }
      }
    }
  });
});
