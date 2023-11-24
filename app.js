var i = 0;
var a = document.querySelector('div');
var text = "Hello: My name is Muhammadjon, I am from Uzbekistan";

function func() {
    if(i < text.length) {
        a.innerHTML += text.charAt(i);
        i++;
        setTimeout(func, 200);
    }
}

func();