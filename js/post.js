function saveEdits() {
    var x = document.getElementById("toggle");
    console.log(x.innerHTML);
    if (x.innerHTML > 0) {
        document.getElementById("edit").contentEditable = true;
        document.getElementById("edit1").contentEditable = true;
        x.innerHTML = 0;
        document.getElementById("save").value = "Save";

        // //get the editable element
        // var editElem = document.getElementById("edit");

        // //get the edited element content
        // var userVersion = editElem.innerHTML;

        // //save the content to local storage
        // localStorage.userEdits = userVersion;

        // //write a confirmation to the user
        // document.getElementById("update").innerHTML = "Edits saved!";

    } else {
        x.innerHTML = 1;
        document.getElementById("save").value = "Edit";
        document.getElementById("edit").contentEditable = false;
        document.getElementById("edit1").contentEditable = false;

    }
}

// function checkEdits() {

//     //find out if the user has previously saved edits
//     if (localStorage.userEdits != null)
//         document.getElementById("edit").innerHTML = localStorage.userEdits;
// }
var button = document.getElementById("clickme"),
count = 0;
var para =document.getElementById("hide");
button.onclick = function() {
  para.innerHTML = " ";

count += 1;
button.innerHTML = "Liked !" ;
var countLike = document.getElementById("new1");
countLike.innerHTML =  "\nThe user has liked" + " " +count +" " + "times!";
};

window.onclick = function(e)
{   var id =  e.target.id;   
   if (id === 'sent')  
   { var txtbox = document.getElementById('example');  
     var txt = txtbox.value;
     var p = document.createElement('p');
    p.className="pcomment";
    p.id="commentpara";
    p.innerHTML=txt;
    var parent=document.getElementById('para');
    parent.appendChild(p);
    // $( "#para" ).append( txt + '<br>');
     $( txtbox ).val('');  
   }
}