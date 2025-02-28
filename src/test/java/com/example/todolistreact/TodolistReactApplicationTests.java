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
                         "jdbc:oracle:thin:@testdb_high?TNS_ADMIN=/Users/apple/Documents/OCI-Wallet/Wallet_testdb",
                        "ADMIN",
                        "Tkddyd123123")) {
            System.out.println(conn);
        } catch (Exception e) {
            fail(e.getMessage());
        }

    }

}
