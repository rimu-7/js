const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")


    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please input a valid height ${height}`
    }else if (weight === '' || height < 0 || isNaN(weight)) {
        result.innerHTML = `Please input a valid weight ${weight}`
    }else{
        const bmi = (weight /((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`
        if (18.6 <= bmi && bmi <= 24.9) {
            result.innerHTML += "<br>Your BMI is Normal."
            document.querySelector("#result").style.color = "green"
        } else if (bmi < 18.6) {
            result.innerHTML += "<br>Your BMI is Underweight."
            document.querySelector("#result").style.color = "red"
        } else {
            result.innerHTML += "<br>Your BMI is Overweight."
            document.querySelector("#result").style.color = "red"
        }
    }
})

