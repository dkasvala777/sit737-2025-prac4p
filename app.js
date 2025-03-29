const express = require('express');
const winston = require('winston');
const app = express();
const port = 3000;

// Settting up the logger with Winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Middleware to log for every incoming request
app.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.originalUrl}`, {
        ip: req.ip,
        headers: req.headers,
    });
    next();
});

// Addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    
    // Validate if num1 and num2 are numbers
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    
    const result = parseFloat(num1) + parseFloat(num2);
    
    // Log the result of the operation
    logger.info(`Addition operation: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

// Subtraction 
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    
    const result = parseFloat(num1) - parseFloat(num2);
    logger.info(`Subtraction operation: ${num1} - ${num2} = ${result}`);
    res.json({ result });
});

// Multiplication 
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    
    const result = parseFloat(num1) * parseFloat(num2);
    logger.info(`Multiplication operation: ${num1} * ${num2} = ${result}`);
    res.json({ result });
});

// Division 
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    
    if (isNaN(num1) || isNaN(num2)) {
        logger.error(`Invalid input: ${num1}, ${num2}`);
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    
    if (parseFloat(num2) === 0) {
        logger.error('Division by zero attempt');
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    
    const result = parseFloat(num1) / parseFloat(num2);
    logger.info(`Division operation: ${num1} / ${num2} = ${result}`);
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    logger.info(`Calculator microservice listening at http://localhost:${port}`);
});
