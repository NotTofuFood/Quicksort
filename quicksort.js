var sort = [40, 100, 20, 30, 4000, 100000, -1023, 19]

function quicksort(array, low, high) {
    if(low < high) {
        let p = partition(array, low, high);
        quicksort(array, low, p-1);
        quicksort(array, p + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[high];
    let i = low;
    for(let j = low; j < high; j++) {
        if(array[j] < pivot) {
            swap(array, i, j);
            i++;
        }
    }
    swap(array, i, high);
    return i;
}

function swap(array, index_1, index_2) {
    let temp_value = array[index_1];
    array[index_1] = array[index_2];
    array[index_2] = temp_value;
}

window.onload = function()  {
    quicksort(sort, 0, sort.length-1);
    console.log(sort);
}