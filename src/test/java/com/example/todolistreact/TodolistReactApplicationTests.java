package com.example.todolistreact;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Connection;
import java.sql.DriverManager;

import static com.jayway.jsonpath.internal.path.PathCompiler.fail;

@SpringBootTest
class TodolistReactApplicationTests {

    @Test
    void contextLoads() {
    }

    static {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void TestConnectDB() {
        try (Connection conn =
                     DriverManager.getConnection(
                         "jdbc:oracle:thin:@(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1521)(host=adb.ap-chuncheon-1.oraclecloud.com))(connect_data=(service_name=g91c16de698e1a3_testdb_medium.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
                        "ADMIN",
                        "Tkddyd123123")) {
            System.out.println(conn);
        } catch (Exception e) {
            fail(e.getMessage());
        }

    }

}
