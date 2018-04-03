
import './app.css';
import * as Title from './title.css';

//simple example
console.log('Hello by typescript!');
var divRoot = document.getElementById('root');
if (divRoot) {
    divRoot.innerHTML = '<h1 class='+Title.title+'>Hello by typescript!</h1>'
}