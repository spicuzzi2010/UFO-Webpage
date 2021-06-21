// from data.js
var tableData = data;

// selecting the tbody element and assigning it to a variable
var tbody = d3.select("tbody");

//Creating a function to create the HTML table of uFO Data
function table(ufo){
    //Clearing the table in case there is already data in it
    tbody.html("");
    //Foreach to loop through the tableData
    ufo.forEach((ufoData) => {
        //Appending a row for each ufoReport object
        var row = tbody.append("tr");
        //returning an array of the key,value pairs of ufoData
        Object.entries(ufoData).forEach(([key, value]) => {
            //Append a cell for each value in the ufoData object
            var cell = row.append("td");
          cell.text(value);
        })
      })

}

//Calling the table function to create the table from the tableData upon loading the page
table(tableData);

//Selecting the filter button
var button = d3.select("#filter-btn")

//Creating event handlers for clicking the filter button
button.on("click", runEnter);

//Creating the function to run for the filter button click event
function runEnter(){

//Prevent the page from refreshing  
  d3.event.preventDefault();

  //Storing the input date value entered in the form in the inputElemnt variable
  var inputElement = d3.select("#datetime").property("value");

  //Filter the tableData based on the date that was entered in the form
  var filterData = tableData.filter(row => row.datetime === inputElement);

  //Run the table function to create a new table based on the filteredData
  table(filterData);
}

  