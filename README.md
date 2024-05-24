# DummyDataAPI

This is a simple Node.js API that serves student and product data. The API allows users to retrieve student details based on query parameters and fetch product information.

## Table of Contents

- [Usage](#usage)
- [Endpoints](#endpoints)
  - [GET /students](#get-students)
  - [GET /products](#get-products)
- [Example Data](#example-data)
- [Contributing](#contributing)
- [License](#license)

## Usage

Start the server:

```bash
node server.js
```
The server will start on port 8000. You can access the API at http://localhost:8000.

## Endpoints
GET /students
Retrieve student data. You can filter the data using query parameters.

### Query Parameters
- id (optional): Filter by student ID.
Example Requests
Get all students:

```http
GET http://localhost:8000/students
```
### Get student by ID:

```http
GET http://localhost:8000/students?id=1
```
- Example Response
```json

[
  {
    "id": 1,
    "name": "Aarav Kumar",
    "age": 17,
    "gender": "Male",
    "email": "aarav.kumar@example.com",
    "phone": "+91-9000000000",
    "address": {
      "street": "1234 Main Street",
      "city": "New Delhi",
      "state": "Delhi",
      "zip": "110001"
    }
  }
]
```
### GET /products
Retrieve product data.

- Example Request
```http
GET http://localhost:8000/products
```
Example Response
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "category": "Category",
    "price": 100,
    "stock": 50
  }
]
```
Example Data
Make sure you have student-data.json and products-data.json files with data similar to the following:

student-data.json
```json
[
  {
    "id": 1,
    "name": "Aarav Kumar",
    "age": 17,
    "gender": "Male",
    "email": "aarav.kumar@example.com",
    "phone": "+91-9000000000",
    "address": {
      "street": "1234 Main Street",
      "city": "New Delhi",
      "state": "Delhi",
      "zip": "110001"
    }
  }
]
```
products-data.json
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "category": "Category",
    "price": 100,
    "stock": 50
  }
]
```
## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the ISO License. See the LICENSE file for details.

