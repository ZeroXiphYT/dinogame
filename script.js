var player = document.getElementById('player');
var enemy = document.getElementById('enemy');

function jump() {
    if (player.classList != "animate") {
        player.classList.add("animate");
    }
    setTimeout(function () {
        player.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    if (enemyLeft < 20 && enemyLeft > 0 && playerTop >= 130) {
        enemy.style.animation = "none";
        enemy.style.display = "none";

        alert("You Lose!");
        var pa = confirm("Play Again?");
        if (pa === true) {
            window.location.reload();
        }
    }
}, 10);