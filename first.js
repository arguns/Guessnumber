let secretnumber = Math.trunc(Math.random()*20)+1; 
let score = 20;   
let highscore = 0;

document.querySelector('.check').addEventListener('click', function()
    {
        const guess= Number(document.querySelector('.guess').value);        // prints the value entered in the guess class in the log after clicking the check button
        console.log(guess, typeof guess)
        //When there is no input
    if(!guess)
    {
        document.querySelector('.message').textContent='No Number';
    }
    // When PLayer wins, 
    else if(guess === secretnumber)
    {
        document.querySelector('.number').textContent=secretnumber+"🎉";
        document.querySelector('.message').textContent="Congratulations! 🎆🎆🎉 Right Guess";
        document.querySelector('body').style.backgroundColor= 'green';
        if(score>highscore)
        {
            document.querySelector('.highscore').textContent=score;
        }
    }
    //This is when the guess is too high
    else if(guess > secretnumber)
    {
        if(score>1)
        {
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').textContent="Too High ...........Try again 🙄";
            document.querySelector('body').style.backgroundColor= 'red';
        }
        else{
            document.querySelector('.message').textContent="Game Over 💥";
            document.querySelector('.score').textContent=0;
        }
    }
    //When the guess is tooo low. 
    else if(guess < secretnumber)
    {
        if(score>1)
        {
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').textContent="Too Low ...........Try again 🙄";
            document.querySelector('body').style.backgroundColor= 'red';
        }
        else{
            document.querySelector('.message').textContent="Game Over 💥";
            document.querySelector('.score').textContent=0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score= 20;
    document.querySelector('.score').textContent=score;
    secretnumber = Math.trunc(Math.random()*20)+1; 
    document.querySelector('.message').textContent='Start Guessing.........';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value= " ";
    document.querySelector('body').style.backgroundColor= 'rgb(37, 39, 37)';



});