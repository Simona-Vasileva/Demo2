let index = 0;


(function change() {
    let x = document.getElementsByClassName('slidesFirst');
    let y = document.getElementsByClassName('slidesSecond');
    let z = document.getElementsByClassName('slidesThird');

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
        z[i].style.display = "none";
    }

    index++;

    if (index > x.length) {
        index = 1;
    }

    if (index > y.length) {
        index = 1;
    }

    if (index > z.length) {
        index = 1;
    }

    x[index - 1].style.display = "block";
    y[index - 1].style.display = "block";
    z[index - 1].style.display = "block";

    setTimeout(change, 2000);
})();


