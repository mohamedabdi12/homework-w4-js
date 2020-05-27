//Variables = qNumber(null), timer(num), score(num), initials(text)
let timer = 90;
let runningTimer;
let score = 0;
let username = "";
let qNumber;
let finalScore;
const MAX_HIGH_SCORES = 10;


// create new elements
{var newDiv = document.createElement('div');
newDiv.id = 'container';
newDiv.innerHTML = 'QUICK QUIZ';
newDiv.className = 'border pad'
newDiv.style = " height: 500px;width: 1000px; position: absolute; top: 50%; left: 50%;transform: translateX(-50%) translateY(-50%);background: url(https://images.befunky.com/wp/wp-2016-03-blur-background-featured-1.jpg?auto=format&fm=jpg&q=75&w=880&ixlib=js-1.4.1);; padding: 20px; border: 1px solid #08038c;box-shadow: 0 0 8px 3px yellowgreen;text-align: center;";
document.getElementsByTagName('body')[0].appendChild(newDiv);


}


