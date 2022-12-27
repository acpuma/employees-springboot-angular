# Employees and Departments application

Spring Boot is used as backend to create REST APIs.

Angular is used to create frontend UI.  

## Run
Check releases for latest available jar file. 
https://github.com/acpuma/employees-springboot-angular/releases/

Download and run with java:
java -jar employees-1.0.0.jar

(Application will run on default port 8080)

## Local build and run
Run Npm and Maven build commands to build project:

npm install 

npm run build 

./mvnw install -DskipTests=false

mvn spring-boot:run
