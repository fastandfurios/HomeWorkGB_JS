let enumerator = {
    enumerate() {
        let array = ['a', 'b', 'c', 'd']

        for (let i = 0; i < questions.length; i++, metrics.count++) {
            console.log(`${metrics.count})`, questions[i].question);
            
            let flag = true;
            let rightAnswer = "";

            for (let index = 0; index < array.length; index++) {
                if(questions[i].answers[index].includes("•")) {
                    rightAnswer = `${array[index]}`, questions[i].answers[index];
                }
                console.log(`${array[index]}.`, questions[i].answers[index].replace('•', ''));
            }

            let answerUser = null;

            do {
                answerUser = prompt('Выберите ответ. За каждый правильный ответ начисляется 2 балла. Для выхода из игры введите "Выход"');

                if(array.includes(answerUser) || answerUser === "Выход" || answerUser === null) {
                    if(rightAnswer.includes(answerUser)) {
                        metrics.scores += 2;
                    }

                    flag = false;
                    console.clear();
                }
                else {
                    alert("Не удалось распознать команду. Попробуйте снова!");
                }
            } while (flag);

            if(answerUser === "Выход" || answerUser === null) {
                break;
            }
        }
    },
};