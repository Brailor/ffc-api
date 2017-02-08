# ffc-timestamp-api
Timestamp Microservice

1.User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

2.User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

3.User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:

https://pathname/March 25, 2020

https://pathname/187148841

Output:

{"unix":1585094400000,"natural":"2020 March, 25"}

{"unix":"187148841","natural":"1975 December, 07"}
