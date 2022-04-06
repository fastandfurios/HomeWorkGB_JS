let game = {
    init() {
        console.log(salute.entry);
    },

    run() {
        console.clear();
        enumerator.enumerate();
        console.clear();
        console.log(`Игра окончена!  Балы: ${metrics.scores}. Пройдено вопросов: ${metrics.getNumberQuestions(metrics.count)} %.`);
    },
};

game.init();