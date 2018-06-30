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
var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + role + "</td></tr>" + start + "</td></tr>" + start + "</td></tr>" + rate + "</td></tr>" ;
            $("table tbody").append(markup);
    database.ref().push({
     name: name,
     role: role,
     start: start,
     rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    })})

    database.ref().on("child_added", function(snapshot) {
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().role);
        console.log(snapshot.val().start);
        console.log(snapshot.val().rate);
        })
        database.ref().once('value', function(snapshot){
            if(snapshot.exists()){
            var content = "";
            snapshot.forEach(function(data){
            var val = data.val()
            content += "<tr>";
            content += "<td>" + val.name + "</td>";
            content += "<td>" + val.role + "</td>";
            content += "<td>" + val.start + "</td>";
            content += "<td>" + val.rate + "</td>";
            $(".empTable").append(content);
            })}})

