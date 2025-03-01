package com.rodriguez_web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import model.book.*;
import dbUtils.*;
import view.BookView;

@RestController
public class BookController {
    @RequestMapping(value = "/book/getAll", produces = "application/json")
    public String allUsers() {
        StringDataList list = new StringDataList(); // dbError empty, list empty
        DbConn dbc = new DbConn();
        list = BookView.getAllBooks(dbc);
        dbc.close(); // EVERY code path that opens a db connection must close it
        // (or else you have a database connection leak).
        return Json.toJson(list); // convert sdl obj to JSON Format and return that.
    }
}