$(document).ready(function () {
    // URL of the API
    var apiUrl = "https://ojaarv-api.onrender.com";
    const method = "/api/contact";

    // Get the container element where data will be displayed
    var dataContainer = $('#data-container');

    // AJAX call to fetch data from the API
    $.ajax({
        url: apiUrl + method,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Handle the API response data
            console.log("data",data);
            displayData(data);
        },
        error: function (error) {
            dataContainer.text("Error fetching data from the API.");
            console.error(error);
        }
    });

    // Function to display API response data
    function displayData(data) {

        if (data != undefined || data != "") {
            html = '<li>' + data.fname + "  " + data.lname +'</li>'
         
            dataContainer.html(html);
        } else {
            dataContainer.text("No data available.");
        }
    }
});
