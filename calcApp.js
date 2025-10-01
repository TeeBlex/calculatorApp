
    const screenDisplay = document.querySelector('#screenDisplay');
    const btn = document.querySelectorAll('.btn');
    const cancleBtn = document.querySelector('.cancleBtn');
    const equalBtn = document.querySelector('.equalBtn');

    screenDisplay.value = 0;
    let userClickedValue = ''; 
        
        for(let i = 0; i < btn.length; i++){

            btn[i].addEventListener('click', () => {

                    
                    if (btn[i].innerText == 'x'){
                    
                        userClickedValue += btn[i].innerText.replace('x', '*');
                            
                    } else {
                        userClickedValue += btn[i].innerText;
                    }

                    let getIndexOfZero =  userClickedValue.indexOf(0);
                   
                    if (getIndexOfZero == 0){

                        let sliceZeroClickedValue = userClickedValue.slice(0, 1);
                        let sliceRemainingClickedValue = userClickedValue.slice(1, userClickedValue.length);

                        screenDisplay.value = sliceZeroClickedValue;
                        userClickedValue = sliceRemainingClickedValue;

                    } else {

                    screenDisplay.value = userClickedValue;

                    }
                
            })

            cancleBtn.addEventListener('click', () => {
                screenDisplay.value = 0;
                userClickedValue = '';
            })

            let result = 0;
            equalBtn.addEventListener('click', () => {
                result = eval(screenDisplay.value);
                screenDisplay.value = result;
                userClickedValue = result;
            })
            
        }