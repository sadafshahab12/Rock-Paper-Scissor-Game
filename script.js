let user_score = 0;
let comp_score = 0;

// choices selection

const choices = document.querySelectorAll(".choice");
// distribute your every small work in a different funtion called modular way
const message = document.querySelector("#msg");

const user_win_score = document.querySelector("#user-score");
const comp_win_score = document.querySelector("#comp-score");

const gen_comp_choice = () => {
  const options = ["rock", "paper", "scissor"];
  const random_index = Math.floor(Math.random() * 3);
  return options[random_index];
};

const draw_game = () => {
  console.log("Game Draw");
  message.innerText = "Game Draw.Play Again!";
  message.style.backgroundColor = "blue";
  
};

const show_winner = (user_win, user_choice, comp_choice) => {
  if (user_win === true) {
    // console.log("you win!");
    user_score++;
    user_win_score.innerText = user_score;
    message.innerText = `You Win! Your ${user_choice} beats ${comp_choice}`;
    message.style.backgroundColor = "green";
  } else {
    comp_score++;
    comp_win_score.innerText = comp_score;
    // console.log("you lose!");
    message.innerText = `You lose!${comp_choice} beats your ${user_choice}`;
    message.style.backgroundColor = "red";
  }
};
const play_game = (user_choice) => {
  console.log("user choice is", user_choice);
  //generate computer choice
  const comp_choice = gen_comp_choice();
  console.log("comp choice is", comp_choice);

  if (user_choice === comp_choice) {
    // draw game
    draw_game();
  } else {
    let user_win = true;
    if (user_choice === "rock") {
      //paper  , scissor(computer choice will be)
      user_win = comp_choice === "paper" ? false : true;
      //mean if comp choice will be paper (user win false)(computer will win ) , but if comp choose use scissor (user win true ) (user win)
    } else if (user_choice === "paper") {
      //scissor , rock
      user_win = comp_choice === "scissor" ? false : true;
    } else {
      //rock , paper
      user_win = comp_choice === "rock" ? false : true;
    }
    show_winner(user_win, user_choice, comp_choice);
  }
};

// adding event listener
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // console.log(choice);
    let user_choice = choice.getAttribute("id");
    // console.log("choice was clicked" + " " + user_choice)
    play_game(user_choice);
  });
});
