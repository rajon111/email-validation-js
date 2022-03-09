function validation() {
    var text = document.getElementById('text').value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regx.test(text)) {
        document.getElementById('1b1text').innerHTML = 'valid';
        document.getElementById('1b1text').style.visibility = 'visible';
        document.getElementById('1b1text').style.color = 'green';
    } else {
        document.getElementById('1b1text').innerHTML = 'InValid';
        document.getElementById('1b1text').style.visibility = 'visible';
        document.getElementById('1b1text').style.color = 'red';
    }
}