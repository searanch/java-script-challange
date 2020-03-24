// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

//load table

data.forEach(function(ufoReports) {

    console.log(ufoReports)


})

console.log(Object.values(data))

tableData.forEach((tablerow) => {
    var row = tbody.append("tr");
    Object.entries(tablerow).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

