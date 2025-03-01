package com.rodriguez_web;

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.webUser.StringData;

@RestController
public class Controller {

    private String outMsg = "";

    @RequestMapping("/hello")
    public String helloController() {
        return "<h1>Hello World</h1>";
    }

    @RequestMapping(value = "/jsonClass", produces = "application/json")
    public String jsonClassController() {
        StringData sd = new StringData();
        sd.userEmail = "sallyk@temple.edu";
        sd.userPassword = "pass1234";
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writer().writeValueAsString(sd);
        } catch (Exception e) {
            return "Cannot convert object to JSON";
        }
    }

    @RequestMapping("/db")
    public String dbController() {
        outMsg = "";
        try {
            Connection conn = null;
            try {
                String dbAndPass = "sallyk_3308?user=sallyk&password=Vaca1415";
                String url = "jdbc:mysql://localhost:3307/" + dbAndPass; // Assumes running from home
                conn = DriverManager.getConnection(url);
                log("Got the DB connection");
                String sql = "SELECT web_user_id, user_email FROM web_user ORDER BY web_user_id ";
                try {
                    PreparedStatement stmt = conn.prepareStatement(sql);
                    log("The SQL statement compiled OK with the connected DB");
                    ResultSet results = stmt.executeQuery();
                    log("Now we have a result set");
                    while (results.next()) {
                        try {
                            // extract web_user_id from db then convert it to string.
                            Integer wuId = results.getInt("web_user_id");
                            log("Web user id is " + wuId.toString());
                            String wuEmail = results.getString("user_email");
                            log("Email is " + wuEmail);
                        } catch (Exception e) {
                            log("Exception while extracting data from result set: " + e.getMessage());
                        }
                    } // while there's more data in result set
                    results.close();
                    stmt.close();
                } catch (Exception e) {
                    log("Exception compiling this SQL [" + sql + "]. Error is: " + e.getMessage());
                } finally {
                    conn.close(); // ALWAYS close every open DB connection (else = DB Connection leak).
                }
            } catch (Exception e) {
                log("Exception trying to connect. Error is: " + e.getMessage());
            }
        } catch (Exception e) {
            log("Exception thrown trying to find MySQL Drivers. Error is: " + e.getMessage());
        }
        log("All done!!");
        return outMsg;
    }
    public void log(String newMsg) {
        System.out.println(newMsg);
        outMsg += newMsg + "<br/>";
        }
        
}
