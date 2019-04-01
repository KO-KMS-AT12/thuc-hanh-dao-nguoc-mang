function daoNguoc(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = arr[i];
        arr[i] = tmp;
    }
    return "[" + arr + "]";
}

document.write(daoNguoc([3, 2, 5, 1, 6, 9]));