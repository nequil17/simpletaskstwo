var friends = ['nequil', 'jack', 'mike', 'lauren', 'carry', 'cat', 'sidney', 'sarah', 'mark', 'alex']
var sentence = 'hello world my name is john doe, goodbye forever world'
var fn;
var input = 'nequil';

function displayAlert() {
        alert(fn.value);
    }

function displayOutput() {
        document.getElementById("userInput").innerHTML;
        document.getElementById("result").innerHTML = input;
    };

document.addEventListener('DOMContentLoaded', function() {
    // Question One
    var buttonOne = document.createElement('button');
    buttonOne.innerHTML = "something";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(buttonOne);

    buttonOne.addEventListener ("click", function() {
    alert("did something");
    });

    // Question Two
    fn = document.getElementById('a');

    // Question Three
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
        box.style.backgroundColor = 'orange';
    });

    function randomColor() {
    var randomRed = Math.floor(Math.random() * 250);
    var randomGreen = Math.floor(Math.random() * 250);
    var randomBlue = Math.floor(Math.random() * 250);
    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
            
        return randomColor;
    }

    // Question Four
    var colortext = document.getElementById("colortext");
    colortext.addEventListener ("click", function() {
        colortext.style.color = 'red';
    });

    // Question Five - Fix
    function displayOutput(success) {
        var input = document.getElementById("userInput").innerHTML;
        document.getElementById("result").innerHTML = input;
    };

    // Question Six
    var button = document.getElementById("button");

    button.addEventListener('click', function() {
    for(var i = 0; i < friends.length; i++) {
            var friend = friends[i];

    var people = document.createElement('div');
    people.className = 'friend'
    var names = document.createElement('li');
    var textName = document.createTextNode(friend);
    names.appendChild(textName);
    people.appendChild(names);
    document.body.appendChild(people);
    }
    });


    // Question Seven - Start

    
    });