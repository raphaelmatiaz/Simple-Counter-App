

window.onload = () => {


    // Select DOM counter element + set it to starting number (zero)
    let counter = document.querySelector('.count');
    counter.textContent = "0";

    // Select DOM buttons as consts 
    const decreaseButton = document.querySelector('#decrease');
    const increaseButton = document.querySelector('#increase');
    const resetButton = document.querySelector('#reset');

    // Define variable 'count' to be the text content of 'counter' as a number
    let count = Number(counter.textContent);

    //----------------------------------------------------------------------------
    // APP Behaviour

    // Click event-listner for deacrese button
    decreaseButton.addEventListener('click', () => {

        count--;
        counter.textContent = count;
})

    // Click event-listner for increase button
    increaseButton.addEventListener('click', () => {

        count++;
        counter.textContent = count;
    });


    // Click event-listner for reset button
    resetButton.addEventListener('click', () => {

        count = 0;
        counter.textContent = count;
    });




}