var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

for (var i = 0; i < 10; i++) {
    console.log(`${i} : ${faktoriális(i)}`);
}

function számítás() {
    let n = document.getElementById("nTb").value;
    let n2 = parseInt(n);
    if (n2) {
        let er = faktoriális(n);
        document.getElementById("eredményDiv").innerText = er;
    }
    else {
        document.getElementById("eredményDiv").innerText = "?";
    }
    
}