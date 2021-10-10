
// we're capturing the html elements on the page that we want 
// to manipulate
let commentList = document.getElementById('list');
let commentForm = document.getElementById('comment-form');

// adding event listner to the event form
commentForm.addEventListener('submit', (e) => {
    // prevent the defaut behavior of the form submit, which 
    // is to refresh the page on submit, which we don't want
    e.preventDefault();
    console.log(e.target[0].value);

    // we're capturing the value of the text box when the form
    // is submitted
    let comment = e.target[0].value;

    // we're passing the captured value to the renderComment
    // function to be appended to the html page
    renderComment(comment);
})

// adds the provided comment to the page
function renderComment(comment) {
    // creates a new element
    let newComment = document.createElement('p');
    // sets the new elements text to the given comment
    newComment.textContent = comment;
    // appends the comment to the html page
    commentList.append(newComment);
}

//Capturing the elements from the HTML page
let likeBttn = document.getElementById('heart');
let likeList = document.getElementsByClassName('likes')[0];
let likeCounter = document.getElementById('counter');

//Adding an event listener whenever 
likeBttn.addEventListener('click', addLike);

//Defining the function that adds a li to the ul under class 'likes'
//captured as likeList variable above. 
function addLike() {
    //timeCount is the text content found in id 'counter'
    let timeCount = likeCounter.textContent;
    //foundLi checks if an li already exists for the current time count.
    const foundLi = document.getElementById(`like-${timeCount}`);
    //creating an if statement that if 'foundLi' already exists, then 
    //update existing li element. 
    if(foundLi) {
        // Taknig the found li element and splitting it's contents
        //into a new array. 
        let splitLi = foundLi.textContent.split(' ');
        console.log(splitLi);
        //And then it access the second to last index to update the
        //number of likes.
        let newNum = ++splitLi[splitLi.length-2];
        console.log(newNum);
        //we're updating the text content in foundLi to reflect
        //the incremented amount of likes. 
        foundLi.textContent = `${timeCount} has been liked ${newNum} times`;
        //otherwise, if not found, create a new li into 'likes' list. 
    } else {
        // Literally creating a new li element. Setting it into this var. 
        let newLike = document.createElement('li');
        //creating an id for newLike. it is 'like-(the number in the counter)
        newLike.id = `like-${timeCount}`;
        //newLike is being given the textContent to display. 
        //timeCount is whatever the number in the counter is plus the string. 
        newLike.textContent = `${timeCount} has been liked 1 time`;
        //likeList is the 'likes' 
        likeList.append(newLike);
    }
}

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener('click', () =>{
    let currentVal = likeCounter.textContent;
    likeCounter.textContent = ++currentVal;
})

minus.addEventListener('click', () => {
    let currentVal = likeCounter.textContent;
    likeCounter.textContent = --currentVal;
})

