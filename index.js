class Uc1 {
    constructor() {
        let noPlay = 0;
        let ladder = 1;
        let snake = 2;
        let sum = 0;
        let counter = 0;
        console.log("Start Position is Zero");
        while (sum < 100) {
            let num = Math.floor(Math.random() * 6) + 1;
            console.log("The dice number is " + num);
            let option = Math.floor(Math.random() * 3);
            if (option == ladder) {
                if (sum <= 100 && (sum + num) <= 100) {
                    sum = sum + num;
                    console.log("Ladder");
                }
            } else if (option == snake) {
                if (sum > 0 && (sum - num) >= 0) {
                    sum = sum - num;
                    console.log("Snake");
                }
            } else {
                console.log("No Play");
            }
            console.log("Position of dice is " + sum);
            counter++;
        }
        console.log("The numner of times the dice was played is "+counter);
    }
}
let obj = new Uc1();