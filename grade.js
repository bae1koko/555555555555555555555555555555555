var grade = document.getElementById("grade");
function calculateGrade()
 {
  var grade = document.getElementById("g").value;
  var objDiv = document.getElementById("showGrade");
  
  if(grade > 100)
   objDiv.innerHTML = "Your grade is none, Please try again";
   else if(grade <= 49)
   objDiv.innerHTML = "Your grade is: F";
   else if(grade <= 60)
   objDiv.innerHTML = "Your grade is: D";
   else if(grade <= 70)
   objDiv.innerHTML = "Your grade is: C";
   else if(grade <= 79)
   objDiv.innerHTML = "Your grade is: B";
  else if(grade <= 100)
   objDiv.innerHTML = "Your grade is: A";
  else
   objDiv.innerHTML = "Your grade is: F";
 }