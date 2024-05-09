    var score = window.prompt("กรุณากรอกคะแนน ");
    var div = document.getElementById("div");
    var result = "คะแนน คือ "+score+" ได้เกรด ";
    var your_grade = "Your Grade Is None"

    if( score > 100 ) {
        your_grade += "Please Try Again"
    } else if( score >= 100 ) {
        result += "A";
    } else if( score >= 79 ) {
        result += "B";
    } else if( score >= 69 ) {
        result += "C";
    } else if( score >=59 ) {
        result += "D";
    }else if( score < 50 ) {
        result += "F";
    } 
        else {
            
        }

    div.innerHTML = result;
