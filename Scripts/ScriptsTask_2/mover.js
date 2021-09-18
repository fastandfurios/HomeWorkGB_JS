let mover = {
    getDirection() {
        const avaibleDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = +prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.');
            if(Number.isNaN(direction)) {
                return null;
            }
            if(!avaibleDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };

        switch (direction) {
            case 1:
                if(nextPosition.y < config.rowsCount - 1 && nextPosition.x > 0){
                    nextPosition.y++;
                    nextPosition.x--;
                }
                break;
            case 2:
                nextPosition.y < config.rowsCount - 1 
                    ? nextPosition.y++ 
                    : nextPosition.y;
                break;
            case 3:
                if(nextPosition.x < config.colsCount - 1 && nextPosition.y < config.rowsCount - 1) {
                    nextPosition.y++;
                    nextPosition.x++;
                }
                break;
            case 4:
                nextPosition.x > 0
                 ? nextPosition.x--
                 : nextPosition.x;
                break;
            case 6:
                nextPosition.x < config.colsCount - 1
                 ? nextPosition.x++
                 : nextPosition.x;
                break;
            case 7:
                if(nextPosition.y > 0 && nextPosition.x > 0 ) {
                    nextPosition.y--;
                    nextPosition.x--;
                }
                break;
            case 8:
                nextPosition.y > 0
                   ? nextPosition.y--
                   : nextPosition.y;
                break;
            case 9:
                if(nextPosition.y > 0 && nextPosition.x < config.colsCount - 1) {
                    nextPosition.y--;
                    nextPosition.x++;
                }
                break;
        }

        return nextPosition;
    }
};