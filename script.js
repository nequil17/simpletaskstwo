var sentence = 'hello world my name is john doe, goodbye forever world'
var fn;
var input = 'nequil';

function display() {
    alert(fn.value);
}

function displayOutput() {
    document.getElementById("userInput").innerHTML;
    document.getElementById("result").innerHTML = input;
};

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.innerHTML = "Hey welcome to my page!";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    button.addEventListener ("click", function() {
    alert("Nice knowing you");
    });

    
    fn = document.getElementById('textbox');

    
    var box = document.createElement('div');
        box.style.width = '200px';
        box.style.height = '200px';
        box.style.backgroundColor = 'lightblue';
        box.style.marginBottom = '1em'
        document.body.appendChild(box);

    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = randomColor();
    });

    box.addEventListener('mouseleave', function() {
        box.style.backgroundColor = 'lightblue';
    });

    function randomColor() {
    var randomRed = Math.floor(Math.random() * 250);
    var randomGreen = Math.floor(Math.random() * 250);
    var randomBlue = Math.floor(Math.random() * 250);
    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
            
        return randomColor;
    }

    
    var colortext = document.getElementById("colortext");
    colortext.addEventListener ("click", function() {
        colortext.style.color = 'red';
    });

    
    function displayOutput(success) {
        var input = document.getElementById("userInput").innerHTML;
        document.getElementById("result").innerHTML = input;
    };

    var friends = ['amyna', 'eric', 'cyrus', 'lauren', 'chris', 'kate', 'kristine', 'gerald', 'jason', 'varner']
    var addList = document.getElementById('list')
    var bnt4 = document.getElementById('btn4')
    btn4.addEventListener('click', function() {
        for(i=0; i<friends.length; i++) {
            var li = document.createElement('li')
            li.innerHTML = friends[i]
            addList.appendChild(li)
        }
    });
    
    var res = sentence.split(" ");
    var addList= document.getElementById('list')
    var btn5= document.getElementById('btn5')
    var lis= document.getElementsByTagName('li')
    btn5.addEventListener('click',function() {
        for(i=0; i<friends.length; i++) {
            lis[i].innerHTML = res[i]
        }
    friends=[]
    });
    
});
