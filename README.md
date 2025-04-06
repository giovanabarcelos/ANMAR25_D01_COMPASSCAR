# AWS NODE MAR25 DESAFIO 01 

## Application 

This application aims to implement an API thats use Nodejs, MySQL, Sequelize and Express to maintain car and items record.

## API 

The API has the following endpoints:
|*Description*|*Endpoint*|
|---------|--------|
|**01: Car registration**|POST /api/v1/cars|
|**02: Update car items**|PUT /api/v1/cars/:id/items|
|**03: Find car by ID**|GET /api/v1/cars/:id|
|**04: List cars**|GET /api/v1/cars|
|**05: Update car data**|PATCH /api/v1/cars/:id|
|**06: Delete a car**|DELETE /api/v1/cars/:id|

## Postman Tests 

API tests and validations can be validated with [Postman Collection](CompassCars.Postman_collection.json) available in the project repository.
You can change the global variable called URL in Postman to point to another IP or port configured in Docker-Compose available at http://localhost:8000.

## Running the Application

This application can be executed by performing [Project docker-compose] (docker-compose.yml).

### Docker and docker-compose installation 

Install the docker and docker-compose as documentation at https://docs.docker.com/engine/install/.

### Commands to manage the application with docker-compose

Follow the main commands that should be used to manage the application using docker-compose.
It is necessary to be in the project root directory of the project to execute these commands.

|#|What|How|
|---|---|---|
|1|Run the database|docker-compose up -d mysql|
|2|Run the application|docker-compose up -d nodejs|
|3|Run the complete stack Mysql, Nodejs Application and Database Client|docker-compose up -d|
|4|Check the logs|docker-compose logs|
|5|Check the logs continuously|docker-compose logs -f|
|6|Stop the application|docker-compose stop nodejs|
|7|Remove the stopped container|system prune -f|

**Some sequences of useful commands:**

|#|What|How|
|---|---|---|
|a|Run the complete stack Mysql, Nodejs Application and Database Client|docker-compose up -d|
|b|Run the clean application after some code change|docker-compose build nodejs; docker-compose stop nodejs; docker system prune -f; docker-compose up -d nodejs|
|c|Run the database clean without tables and other objects, zero data|docker-compose stop mysql; docker system prune -f; docker volume rm **VOLUME_NAME**; docker-compose up -d mysql;|

**Note:** Replace **VOLUME_NAME** with mysql volume name that appears when running the command **docker volume ls** 

### Accessing the application and mysql

The application will be available at **http://localhost:8000** and the database can be administered by **http://localhost:8090** using the configuration and credentials below.

The configuration and credentials to access the database are:
- **Host:** mysql
- **User:** root
- **Password:** myPassword
- **DBName:** compasscar