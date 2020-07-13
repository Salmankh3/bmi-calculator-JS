

function bmi_calc(){
    var height = parseInt(document.querySelector("#height").value);
    var weight = parseInt(document.querySelector("#weight").value);
    
    var bmi_result= (weight / ((height/100)*(height/100))).toFixed(2);

    document.getElementById("result").innerHTML = "Your BMI is " + bmi_result;
    
    if(bmi_result < 18.6) {
        document.getElementById("comment").innerHTML = "You are Weak! Eat Food and become Smarter!";
    }
    else if(bmi_result >= 18.6 && bmi_result < 25){
        document.getElementById("comment").innerHTML = "You are Healthy and Smart! Keep Up the Good diet!";
    }
    else if(bmi_result == "NaN"){
        document.getElementById("comment").innerHTML = "Please Enter Weight and Height";
    }
    else{
        document.getElementById("comment").innerHTML = "You are Over-weighted! You need to do exercise and reduce your excessive diet!";
    }
}