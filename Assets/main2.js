$(document).ready();
var name = ""
var role = ""
var start = ""
var rate = ""
var database = firebase.database()
    
    


$("#submit").on("click", function(){
 event.preventDefault()
 name = $("#empName").val().trim();
 role = $("#empRole").val().trim()
 start = $("#empStart").val().trim()
 rate = $("#empPay").val().trim()
    database.ref().push({
     name: name,
     role: role,
     start: start,
     rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    })})

    database.ref().once('value', function(snapshot){
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().start);
        console.log(snapshot.val().role);
        console.log(snapshot.val().rate);
        

            if(snapshot.exists()){
            var content = "";
            snapshot.forEach(function(data){
            var val = data.val()
            content += "<tr>";
            content += "<td>" + val.name + "</td>";
            content += "<td>" + val.start + "</td>";
            content += "<td>" + val.role + "</td>";
            content += "<td>" + val.rate + "</td>";
            $(".empTable").append(content);
            })}})