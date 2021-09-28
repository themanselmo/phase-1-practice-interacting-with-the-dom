
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


likeBttn.addEventListener('click', addLike);


function addLike() {
    
    let timeCount = likeCounter.textContent;
    
    const foundLi = document.getElementById(`like-${timeCount}`);
    if(foundLi) {
        // change the Li
        let splitLi = foundLi.textContent.split(' ');
        console.log(splitLi);
        let newNum = ++splitLi[splitLi.length-2];
        console.log(newNum);
        foundLi.textContent = `${timeCount} has been liked ${newNum} times`;
    } else {
        // make a new li
        let newLike = document.createElement('li');
        newLike.id = `like-${timeCount}`;

        newLike.textContent = `${timeCount} has been liked 1 time`;
        
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