
    const decreaseButton = document.querySelector('#decrease');
    const increaseButton = document.querySelector('#increase');
    const resetButton = document.querySelector('#reset');

    // Mousein-out styling Decrease Button
    decreaseButton.addEventListener('mouseover', () => {

        decreaseButton.style.backgroundColor = "rgb(147, 0, 0)"
})

    decreaseButton.addEventListener('mouseout', () => {

        decreaseButton.style.backgroundColor = "red"
})

    // Mousein-out styling Increase Button
    increaseButton.addEventListener('mouseover', () => {

        increaseButton.style.backgroundColor = "rgb(2, 88, 2)"
})

    increaseButton.addEventListener('mouseout', () => {

        increaseButton.style.backgroundColor = "green"
})

    // Mousein-out styling Reset Button
    resetButton.addEventListener('mouseover', () => {

        resetButton.style.backgroundColor = "rgb(0, 0, 123)"
})

    resetButton.addEventListener('mouseout', () => {

        resetButton.style.backgroundColor = "blue"
})


