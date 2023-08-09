$(document).ready(function() {
    // URL of the API
    var apiUrl = "https://toskie-prod-api.azurewebsites.net/ToskieService.svc/GetExceptionlog";

    // Get the container element where data will be displayed
    var dataContainer = $('#data-container');

    // AJAX call to fetch data from the API
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Handle the API response data
            displayData(data);
        },
        error: function(error) {
            dataContainer.text("Error fetching data from the API.");
            console.error(error);
        }
    });

    // Function to display API response data
    function displayData(data) {
        const arrayData=data.GetExceptionlogResult.slice(0, 10);;
        console.log('data',data.GetExceptionlogResult[0])
        if (Array.isArray(arrayData)) {
            var html = '<ul>';
            arrayData.forEach(function(item) {
                html += '<li>' + item.ErrorMessage+ '</li>';
            });
            html += '</ul>';
            dataContainer.html(html);
        } else {
            dataContainer.text("No data available.");
        }
    }
});
