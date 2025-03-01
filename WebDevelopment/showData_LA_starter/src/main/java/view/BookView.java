package view;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.book.*;
import dbUtils.*;

public class BookView {
    public static StringDataList getAllBooks(DbConn dbc) {
        // sdl will be an empty array and DbError with ""
        StringDataList sdl = new StringDataList();
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        try {
            String sql = "SELECT book_id, book_name, book_cover, book_published, reader_rate, reader_have_read, book_author, book.web_user_id, book_review_id "
                    + "FROM book, web_user "
                    + "WHERE book.web_user_id = web_user.web_user_id "
                    + "ORDER BY book_id"; 
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();
            while (results.next()) {
                sd = new StringData();
                // the Format methods do not throw exceptions, but if they find illegal data,
                // they write
                // a message right in the field that they are trying to format.
                // plainInteger returns integer converted to string with no commas.
                sd.bookId = Format.plainInteger(results.getObject("book_id"));
                sd.bookName = Format.fmtString(results.getObject("book_name"));
                sd.bookCover = Format.fmtString(results.getObject("book_cover"));
                sd.bookPublished = Format.fmtDate(results.getObject("book_published"));
                sd.readerRate = Format.fmtInteger(results.getObject("reader_rate"));
                sd.readerHaveRead = Format.fmtBoolean(results.getObject("reader_have_read"));
                sd.bookAuthor = Format.fmtString(results.getObject("book_author"));
                sd.bookReviewId = Format.plainInteger(results.getObject("book_review_id"));
                sd.webUserId = Format.plainInteger(results.getObject("book.web_user_id"));
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in BookView.getAllBooks(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}