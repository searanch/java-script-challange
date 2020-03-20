// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var btn = d3.select('button');

renderTable(tableData);
btn.on('click', handleClick);

// ======================================================
function renderTable(data) {
  tbody.html('');

  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.entries(dataRow).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

function handleClick() {
  var filteredData = tableData;
  var date = d3.select('input').property('value');

  if (date) {
    filteredData = filteredData.filter( row => row.datetime === date );
  };

  d3.select('input').property('value','');
  renderTable(filteredData);
}


