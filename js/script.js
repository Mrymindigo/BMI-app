
let $ = document
const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')
const bmiResult = $.querySelector('#result')
const bmiCategory = $.querySelector('#category')

function bmiCalculator(){
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100 , 2))).toFixed(1) //yek ragham ashar

    weightVal.innerHTML = weightInputValue + 'kg'
    heightVal.innerHTML = heightInputValue + 'cm'
    bmiResult.innerHTML = bmiValue 

    if(bmiValue < 18.5){
        bmiCategory.innerHTML = 'Underweight'
        bmiResult.style.color = '#ffc44d'
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
         bmiCategory.innerHTML = 'Normalweight'
         bmiResult.style.color = '#0be881'

    }else if(bmiValue >= 24.9 && bmiValue <= 29.5){
         bmiCategory.innerHTML = 'overweight'
         bmiResult.style.color = '#ff884d'

    }else{
         bmiCategory.innerHTML = 'obese'
         bmiResult.style.color = '#ff5e4d'

    }

    console.log(bmiValue);

    console.log('bmi')
}

//we use oninput for change with mouse moving.
weightInput.addEventListener('input' , bmiCalculator) 
heightInput.addEventListener('input' , bmiCalculator)