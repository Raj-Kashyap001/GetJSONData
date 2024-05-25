const http = require("node:http");
const { URL, URLSearchParams } = require("whatwg-url");
const studentData = require("./student-data");
const productData = require("./products-data");

const PORT = process.env.PORT || 8000;

const filterData = (data, params) => {
  let filteredData = data;
  for (const [key, value] of params) {
    if (["id", "age", "amount"].includes(key)) {
      filteredData = filteredData.filter((item) => item[key] === Number(value));
    } else {
      filteredData = filteredData.filter((item) => item[key] === value);
    }
  }
  return filteredData;
};

const server = http.createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);
  const params = new URLSearchParams(url.search);
  const endPoint = url.pathname.toLowerCase();

  res.setHeader("Content-Type", "application/json");

  if (endPoint === "/api") {
    const jointData = { students: studentData, products: productData };
    res.writeHead(200);
    res.end(JSON.stringify(jointData));
  } else if (endPoint === "/api/students") {
    const filteredStudents = filterData(studentData, params);

    if (filteredStudents.length > 0) {
      res.writeHead(200);
      res.end(JSON.stringify(filteredStudents));
    } else {
      res.writeHead(404);
      res.end(
        JSON.stringify({ error: "No students found matching the criteria" })
      );
    }
  } else if (endPoint === "/api/products") {
    const filteredProducts = filterData(productData, params);

    if (filteredProducts.length > 0) {
      res.writeHead(200);
      res.end(JSON.stringify(filteredProducts));
    } else {
      res.writeHead(404);
      res.end(
        JSON.stringify({ error: "No products found matching the criteria" })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
