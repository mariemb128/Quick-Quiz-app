 const highScoresList = document.getElementById("highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    if (Array.isArray(highScores) && highScores.length > 0) {
        highScoresList.innerHTML = highScores
            .map(score => {
                return `<li class="high-score">${score.name} - ${score.score}</li>`;
            })
            .join("");
    } else {
        highScoresList.innerHTML = "<li class='high-score'>No High Scores Available</li>";
    }
