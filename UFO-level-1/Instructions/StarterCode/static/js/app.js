// from data.js, append into table function
var tableData = data;
function table(sampledata){
var tbody = d3.select("tbody");
tbody.html("");
sampledata.forEach((data)=>{
    var trow = tbody.append("tr")
    Object.values(data).forEach((value)=>{
var cells = trow.append("td");
cells.text(value);
    })
})
}
table(tableData);

//Filter table by data function
function filterTable(){
    var date = d3.select("#datetime").property("value");
    if (date)
{
    filterData = tableData.filter(rowData=>rowData.datetime===date);

}
table(filterData)
}
d3.selectAll("#filter-btn").on("click",filterTable)