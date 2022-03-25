import { Console } from 'console';

/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let array = [];

    for (let i = 0, length = data.length, start = 0, end = 0; i < length; i++) {
        if (data[i] != ',') {
            end++;
        } else if (data[i] == ',') {
            array.push(Number(data.slice(start, end)));
            end++;
            start = end;
        }
        if (i === length - 1) {
            array.push(Number(data.slice(start)));
        }
    }

    array = array.sort((a, b) => {
        return a - b;
    });

    let result = String(array[0]);
    for (let i = 1, lenght = array.length; i < lenght; i++) {
        result += ',' + array[i];
    }

    return result;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    return data.filter((n) => n < 100);
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array3 = new Array(10);

    for (let i = 0, i_a1 = 0, i_a2 = 0; i < 10; i++) {
        if (i % 2 === 0) {
            array3[i] = array1[i_a1];
            i_a1++;
        } else {
            array3[i] = array2[i_a2];
            i_a2++;
        }
    }

    return array3;
}
