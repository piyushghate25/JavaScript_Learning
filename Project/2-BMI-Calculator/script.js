const form  = document.querySelector('form')

form.addEventListener( 'submit' , function (e) {

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`
    }else if (weight  == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter a valid weight ${weight}`
    }else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show results
        if(bmi <18.6 ){
            result.innerHTML = `<span>${bmi} is under Weight </span> `
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `<span>${bmi} is Normal Weight </span> `
        }else{
            result.innerHTML = `<span>${bmi} is Over Weight </span> `
        }
    }
})