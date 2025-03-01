"use strict";

function MakeBook_CGF() {

    var ele = document.createElement("div");

    ele.classList.add("books");

    var bookOne = MakeBook({
        bookAuthor:  "Isaac Asimov",
        bookName: "Foundation",
        bookReview: "I love this book",
        bookPublishedDate: "1951",
        rate: 4,
        bookCoverURL: 'pics/booksRated/foundationAsimov.jpeg',
        moodList: [{"display": "Love", "val": "pics/moods/inLove.jpeg"},
            {"display": "Happy", "val":"pics/moods/happy.jpeg"},
            {"display": "Stupafied", "val":"pics/moods/stupafied.jpeg"}],
    });

    var bookTwo = MakeBook({
        bookAuthor:  "Pierce Brown",
        bookName: "Red Rising",
        bookReview: "I hate this book",
        bookPublishedDate: "2016",
        rate: 5,
        bookCoverURL: 'pics/booksRated/redRisingBrown.jpeg',
        moodList: [{"display":"Sad", "val":"pics/moods/sad.jpeg"},
            {"display":"questioning", "val":"pics/moods/questioning.jpeg"}],
    });

    var bookThree = MakeBook({
    });

    ele.appendChild(bookOne);
    ele.appendChild(bookTwo);
    ele.appendChild(bookThree);

    return ele;
}