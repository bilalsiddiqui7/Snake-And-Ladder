class Uc1 {
    constructor() {
        let noPlay = 0;
        let ladder = 1;
        let snake = 2;
        let sum1 = 0;
        let sum2 = 0;
        let counter = 0;
        console.log("Start Position is Zero");
        let player1 = true;
        while (sum1 < 100 && sum2 < 100) {
            let currentSum=player1 ? sum1 : sum2;
            let num = Math.floor(Math.random() * 6) + 1;
            console.log("Turn: "+(player1 ? "player1" : "player2"));
            console.log("The dice number is " + num);
            let option = Math.floor(Math.random() * 3);
            if (option == ladder) {
                if (currentSum <= 100 && (currentSum + num) <= 100) {
                    currentSum = currentSum + num;
                    console.log("Ladder");
                }
            } else if (option == snake) {
                if (currentSum > 0 && (currentSum - num) >= 0) {
                    currentSum = currentSum - num;
                    console.log("Snake");
                }
            } else {
                console.log("No Play");
            }
            console.log("Position of dice is " + currentSum);
            counter++;
            if (player1){
                sum1=currentSum;
            } else {
                sum2=currentSum;
            }

            if (option != ladder) {
                player1 = !player1;
            }

        }
        console.log("The numner of times the dice was played is " + counter);
        console.log(sum1>=100 ? "Player 1 Won" : "Player 2 Won")
    }
}
let obj = new Uc1();