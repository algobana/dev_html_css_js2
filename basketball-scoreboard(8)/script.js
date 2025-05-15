function increaseScore(event, amount) {
    const team = event.target.getAttribute("data-team"); // "home" ya da "guest"

    const scoreElement = document.getElementById(team + "-score"); // "home-score" ya da "guest-score"
    const currentScore = parseInt(scoreElement.textContent, 10);

    scoreElement.textContent = currentScore + amount;
}
