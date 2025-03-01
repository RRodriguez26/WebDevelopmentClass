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
            String sql = "SELECT book_id, book_review_id, web_user_id "
                    + "FROM book "
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
                sd.bookReviewId = Format.plainInteger(results.getObject("book_review_id"));
                sd.webUserId = Format.plainInteger(results.getObject("web_user_id"));
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