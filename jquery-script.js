js/jquery-script.js - jQuery

// Ensure the document is fully loaded and ready before running jQuery code
// This is the standard way to start jQuery scripts
$(document).ready(function() {
    console.log("jQuery скрипт загружен!");

    // 4. Enhance User Interaction with jQuery:

    // Select and manipulate HTML elements using jQuery.
    // Change styles, text, and attributes using jQuery.

    // Example 1: Select the footer paragraph and change its text content
    // $('selector') is how you select elements in jQuery
    // .text() is a jQuery method to get or set the text content of elements
    $('footer p').text('&copy; 2023 Blogify. Все права защищены. (Изменено jQuery)');
    console.log("jQuery: Изменен текст в футере.");

    // Example 2: Select the first h2 in the main content area and change its style
    // .css() is a jQuery method to get or set CSS properties
    $('main h2:first').css('color', '#1d4ed8'); // Tailwind blue-700
    console.log("jQuery: Изменен цвет первого заголовка h2 в main.");

    // Example 3: Select the 'About' link in the header navigation and change its href attribute
    // .attr() is a jQuery method to get or set attributes
    $('header nav a:contains("About")').attr('href', '/about-us'); // Assuming you will have an about-us page
    console.log("jQuery: Изменен атрибут href ссылки 'About'.");


    // Add simple animations (e.g., fadeIn, slideToggle) using jQuery.

    // Find the button with the ID 'hideShowButton' (make sure this button exists in your HTML)
    // .on('click', function() { ... }) is how you add event listeners in jQuery
    $('#hideShowButton').on('click', function() {
        // Find the element with the ID 'jQueryAnimatedBlock' (make sure this element exists in your HTML)
        // .slideToggle() is a jQuery animation method that toggles visibility with a sliding effect
        $('#jQueryAnimatedBlock').slideToggle();
        console.log("jQuery: Запущена анимация slideToggle на блоке.");
    });

    // Example of another animation: Fade in a specific element on page load
    // You would typically hide the element initially in CSS (e.g., display: none;)
    // Let's assume the #jQueryAnimatedBlock is initially hidden for this example
    // $('#jQueryAnimatedBlock').fadeIn(1000); // Fade in over 1000 milliseconds (1 second)
    // console.log("jQuery: Запущена анимация fadeIn на блоке (если он был скрыт).");


    // Add or remove elements dynamically on user action using jQuery.

    // Find the button with the ID 'addRemoveElementButton' (make sure this button exists in your HTML)
    $('#addRemoveElementButton').on('click', function() {
        // Find the container where dynamic elements will be added/removed
        // Make sure this container exists in your HTML (e.g., <div id="jQueryDynamicElementsContainer"></div>)
        const container = $('#jQueryDynamicElementsContainer');

        // Check if the container has any child elements
        if (container.children().length === 0) {
            // If the container is empty, add a new element
            // $('<div>...</div>') creates a new HTML element
            // .append() adds the new element to the end of the container
            const newElement = $('<div class="dynamic-element bg-blue-200 p-2 rounded mb-1">Новый элемент (jQuery)</div>');
            container.append(newElement);
            console.log("jQuery: Добавлен новый элемент.");
        } else {
            // If the container is not empty, remove the last child element
            // .children() gets all direct children of the container
            // .last() selects the last element among the children
            // .remove() removes the selected element from the DOM
            container.children().last().remove();
            console.log("jQuery: Удален последний элемент.");
        }
    });

}); // End of $(document).ready()