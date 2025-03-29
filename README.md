Challenges Faced and How I Solved Them
1. Handling Invalid Input:
Challenge: Ensuring that the microservice properly handles invalid input, such as non-numeric values for arithmetic operations.

Solution: I used isNaN() to check if the provided input is a valid number. If either of the inputs is invalid, the service returns a 400 status code with an appropriate error message.

2. Division by Zero:
Challenge: Ensuring the service doesn’t attempt division by zero, which would result in an error or an incorrect result.

Solution: I implemented a specific check for division by zero in the /divide endpoint. If num2 is zero, it returns an error message: "Cannot divide by zero".

3. Logging:
Challenge: Ensuring that all API requests and responses were properly logged, along with any errors, while making the logs easy to follow.

Solution: I integrated Winston to log details of each incoming request, operation result, and errors. Logs are written to files (combined.log and error.log) to allow for easy tracking of requests and issues.

