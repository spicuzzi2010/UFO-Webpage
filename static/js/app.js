// from data.js
var tableData = data;

// selecting the tbody element and assigning it to a variable
var tbody = d3.select("tbody");

//Using a foreach and arrow function to append a row for each ufoReport object
//Foreach to loop through the tableData
tableData.forEach((ufoData) => {
    //Appending a row for each ufoReport object
    var row = tbody.append("tr");
    //returning an array of the key,value pairs of ufoData
    Object.entries(ufoData).forEach(([key, value]) => {
        //Append a cell for each value in the ufoData object
        var cell = row.append("td");
      cell.text(value);
    });
  });
  