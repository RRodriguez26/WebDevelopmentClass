"use strict";

function MakeBook({
    bookCoverURL = 'pics/defaultBooks/bookStackOne.jpeg',
    bookName = 'No Name',
    bookAuthor = 'No Author',
    bookReview = 'No Review',
    bookPublishedDate = new Date(),
    rate = 0,
    didReaderRead = false,
    moodList = [{"display":"Moods Not Supplied", "val":"pics/defaultMood.jpeg"}],
}) {

    var bookObj = document.createElement("div");

    bookObj.classList.add("book");

    bookObj.bookName = bookName;
    bookObj.bookAuthor = bookAuthor;
    bookObj.bookPublishedDate = bookPublishedDate;
    bookObj.rate = rate;
    bookObj.didReaderRead = didReaderRead;
    bookObj.bookReview = bookReview;

    bookObj.setRate = function (newRate) {
        bookObj.rate = newRate;
        display();
    }
    bookObj.setReview = function (newReview) {
        bookObj.bookReview = newReview;
        display();
    }

    bookObj.innerHTML = `
        <div class='bookInfoClass'></div>
        <button class='rateButtonClass'>Change Rate to: </button>
        <input class='rateInputClass'/> <br/>
        <button class='reviewButtonClass'>Change Review: </button>
        <input class='reviewInputClass'/> <br/>
        <select class='moodClass'></select>
    `;

    var bookInfo = bookObj.getElementsByClassName("bookInfoClass")[0];
    var rateButton = bookObj.getElementsByClassName("rateButtonClass")[0];
    var newRateInput = bookObj.getElementsByClassName("rateInputClass")[0];
    var reviewButton = bookObj.getElementsByClassName("reviewButtonClass")[0];
    var newReviewInput = bookObj.getElementsByClassName("reviewInputClass")[0];
    var moodSelect = bookObj.getElementsByClassName("moodClass")[0];
 
    var display = function ( ) {
        bookInfo.innerHTML = `
        <img src="${bookCoverURL}" class='bookCoverImage'/>
        <h3>${bookName}</h3>
        <p>Author: ${bookObj.bookAuthor}<br/>
           Rating: ${bookObj.rate.toString()}<br/>
           Publication Date: ${bookObj.bookPublishedDate} <br/>
           Review: ${bookObj.bookReview} <br/>
           <img src="${moodSelect.value}" />
        </p>`;
    };

    for (var listEle of moodList) {
        var opt = document.createElement("option");
        opt.innerHTML = listEle.display;
        opt.value=listEle.val;
        moodSelect.appendChild(opt);
    }

    moodSelect.value = moodList[0].val;

    display();

    var bookCoverImage = bookInfo.getElementsByClassName("bookCoverImage")[0];

    rateButton.onclick = function () {
        bookObj.setRate(newRateInput.value);
    };

    reviewButton.onclick = function () {
        bookObj.setReview(newReviewInput.value);
    }

    moodSelect.onchange = function() {
        display();
    }

    bookCoverImage.onmouseover = function() {
        bookCoverImage.style.filter = "drop-shadow(3rem 1rem 1rem rgb(255, 88, 88))";
    }

    bookCoverImage.onmouseout = function() {
        bookCoverImage.style.filter = "drop-shadow(3rem 1rem 1rem #000000)";
    }

    return bookObj;
}