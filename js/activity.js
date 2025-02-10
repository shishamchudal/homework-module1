$(document).ready(function() {
    // Apply styles to selectable cells
    $("td").each(function() {
        let cellText = $(this).text().trim();
        if (cellText !== "Not Available" && !$(this).closest("thead").length) {
            $(this).css("cursor", "pointer");
        }
    });

    // Click event for table cells
    $("td").click(function() {
        let cellText = $(this).text().trim();

        // Ignore "Not Available" and header cells
        if (cellText !== "Not Available" && !$(this).closest("thead").length) {
            $(this).toggleClass("selected");
        }
    });
});

