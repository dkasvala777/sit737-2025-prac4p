# Calculator Microservice

This is a simple calculator microservice built using **Node.js** and **Express**. It provides basic arithmetic operations like addition, subtraction, multiplication, and division. Additionally, the microservice includes **logging** using the **Winston** library to capture request details, operation results, and errors.

---

## Project Setup

### Steps I Followed

1. **Initialize the Node.js Project**:
   - I started by creating a new Node.js project.
   - Ran `npm init -y` to initialize the project with default settings.

2. **Install Express**:
   - Installed Express by running:
     ```bash
     npm install express
     ```

3. **Set Up Basic API Endpoints**:
   - Created the following API endpoints for basic arithmetic operations:
     - `GET /add`: Performs addition.
     - `GET /subtract`: Performs subtraction.
     - `GET /multiply`: Performs multiplication.
     - `GET /divide`: Performs division.

4. **Add Error Handling**:
   - Implemented error handling to return a 400 status and error message for invalid inputs or division by zero.
   
5. **Add Logging with Winston**:
   - Installed **Winston** to log requests and results.
   - Set up logging to capture all requests, operations, and errors into log files:
     - `logs/combined.log` for all logs.
     - `logs/error.log` for error logs only.

6. **Push Code to GitHub**:
   - I created a GitHub repository and pushed my code using Git.
   - Used the following commands to commit and push:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/dkasvala777/sit737-2025-prac4p.git
     git push -u origin main
     ```

7. **View Logs**:
   - I used PowerShell to view logs with the following command:
     ```bash
     Get-Content -Path "logs\combined.log" -Wait
     ```
   - This allows real-time monitoring of log updates.

8. **API Endpoints Testing**:
   - I tested all the endpoints in Postman and ensured correct responses:
     - **Addition**: `GET /add?num1=10&num2=20`
     - **Subtraction**: `GET /subtract?num1=30&num2=10`
     - **Multiplication**: `GET /multiply?num1=5&num2=4`
     - **Division**: `GET /divide?num1=10&num2=2`
   - Handled errors like invalid numbers and division by zero.

---

## API Endpoints

- **Addition**: `/add`
  - **Method**: `GET`
  - **Parameters**: `num1`, `num2` (required)
  - **Response Example**: `{"result": 30}`

- **Subtraction**: `/subtract`
  - **Method**: `GET`
  - **Parameters**: `num1`, `num2` (required)
  - **Response Example**: `{"result": 20}`

- **Multiplication**: `/multiply`
  - **Method**: `GET`
  - **Parameters**: `num1`, `num2` (required)
  - **Response Example**: `{"result": 20}`

- **Division**: `/divide`
  - **Method**: `GET`
  - **Parameters**: `num1`, `num2` (required)
  - **Response Example**: `{"result": 5}`

---

## Logging Setup

- Installed and configured **Winston** to log requests, operations, and errors.
- Logs are saved to the following files:
  - **`logs/combined.log`**: Contains all log messages.
  - **`logs/error.log`**: Contains only error messages.

### How to View Logs:
- Use this command to view logs in real-time:
  ```bash
  Get-Content -Path "logs\combined.log" -Wait

Challenges Faced
Handling Invalid Input:

Solution: I used isNaN() to validate inputs and ensured that only valid numbers are processed.

Division by Zero:

Solution: I added specific error handling for division by zero to return an appropriate message.

Logging Requests and Errors:

Solution: I integrated Winston to log both successful operations and errors, making it easy to track issues.

Conclusion
The calculator microservice is a simple REST API built with Node.js and Express, with Winston logging integrated for real-time monitoring. The service handles basic arithmetic operations and provides robust error handling for invalid inputs and division by zero.



---

This is a concise **`README.md`** file that documents the steps you've taken to complete the task and how to use the calculator microservice. Let me know if you need any modifications or additional details!
