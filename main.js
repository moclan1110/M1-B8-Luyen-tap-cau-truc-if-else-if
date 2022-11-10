let userName = prompt('Enter username:', '');
if(userName == 'Admin') {
    let passWord = prompt('Enter passWord:', '');
    if(passWord == 'TheMaster') {
        alert('Welcome');
    } else if(passWord == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if(userName == null) {
    alert('canceled');
} else {
    alert('I don’t know you');
}