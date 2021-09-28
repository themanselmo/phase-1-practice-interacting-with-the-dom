
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

let likeBttn = document.getElementById('heart');
let likeList = document.getElementsByClassName('likes')[0];
let likeCounter = document.getElementById('counter');
let likeCount = 0;

likeBttn.addEventListener('click', addLike);

function addLike() {
    let timeCount = likeCounter.textContent;    
    let newLike = document.createElement('li');
    newLike.textContent = `${timeCount} has been liked ${++likeCount}`;
    console.log(likeList);
    likeList.append(newLike);
}