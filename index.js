const express = require("express");
const mysql2 = require("mysql2");

const app = express();
const port = 3300;

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Dabu6039###",
  database: "dml",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get("/all", (req, res) => {
  // Query to get all table names
  connection.query("SHOW TABLES", (err, tables) => {
    if (err) throw err;

    // Extract table names
    const tableNames = tables.map((table) => Object.values(table)[0]);
    const describeQueries = tableNames.map(
      (tableName) => `DESCRIBE ${tableName}`
    );

    // Function to execute describe queries one by one
    const executeDescribeQueries = (queries, index = 0, results = {}) => {
      if (index >= queries.length) {
        // All queries executed, send results
        return res.json(results);
      }

      // Execute describe query
      connection.query(queries[index], (err, rows) => {
        if (err) throw err;

        // Store results
        results[tableNames[index]] = rows;

        // Execute next query
        executeDescribeQueries(queries, index + 1, results);
      });
    };

    // Start executing describe queries
    executeDescribeQueries(describeQueries);
  });
});


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
