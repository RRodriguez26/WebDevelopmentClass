package view;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.webUser.*;
import dbUtils.*;

public class WebUserView {
    public static StringDataList getAllUsers(DbConn dbc) {
        // sdl will be an empty array and DbError with ""
        StringDataList sdl = new StringDataList();
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        try {
            String sql = "SELECT web_user_id, user_email, user_password, membership_fee, birthday, "
                    + "web_user.user_role_id, user_role_type "
                    + "FROM web_user, user_role where web_user.user_role_id = user_role.user_role_id "
                    + "ORDER BY web_user_id "; // you always want to order by something, not just random order.
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();
            while (results.next()) {
                sd = new StringData();
                // the Format methods do not throw exceptions, but if they find illegal data,
                // they write
                // a message right in the field that they are trying to format.
                // plainInteger returns integer converted to string with no commas.
                sd.webUserId = Format.plainInteger(results.getObject("web_user_id"));
                sd.userEmail = Format.formatString(results.getObject("user_email"));
                sd.userPassword = Format.formatString(results.getObject("user_password"));
                sd.birthday = Format.formatDate(results.getObject("birthday"));
                sd.membershipFee = Format.formatDollar(results.getObject("membership_fee"));
                sd.userRoleId = Format.plainInteger(results.getObject("web_user.user_role_id"));
                sd.userRoleType = Format.formatString(results.getObject("user_role_type"));
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in WebUserView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}