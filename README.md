# Chat Application

**Team Members:** Abhinav Venkatesh, Dhrumil Makwana, Maaz Afzal Shaikh, Sana Fathima, Shaily Preetham Kurra, Sri Nikitha Kalidindi

Production Deployment link for chat application: [Chat App](http://35.224.20.5:3000/)

**Architecture Diagram:** [Architecture](https://github.com/maazshaik/chat_app/blob/main/Architecture%20Diagram.pdf)

## A Level work description

- **Web application -** Developed using React, Node JS and Python
- **Basic form, reporting -** Through web pages for user login, registration, user home and message  
- **Data collection -** User Credentials, Friend details and Messages are collected from the user 
- **Data analyzer -** Analysis of messages for expletive content
- **Unit tests -** Performed using unittest module in python
- **Data persistence -** Using Redis, PostgreSQL databases
- **Data store -** User Credentials, Friend details, Messages are stored
- **Rest collaboration internal or API endpoint -** REST endpoint between front-end and backend
- **Product environment -** GKE cluster

- **Integration tests -** Performed between different components like database instance, front-end, back-end and analyzer
- **Using mock objects or any test doubles -** Used fakeredis module in python to mock the functionality of Redis
- **Continuous integration -** Achieved using GitHub Actions
- **Production monitoring instrumenting -** Using /dbstatus endpoint [/dbstatus](https://github.com/maazshaik/chat_app/wiki/Monitoring-DB-status)

- **Acceptance tests -** Performed by Gopala Krishna Vasanth Kanugo (Acceptance Tests.xlsx)
- **Event collaboration messaging -** Using RabbitMQ to analyze messages for expletive content
- **Continuous delivery -** Achieved using GitHub Actions


## Running the dev environment:

There are a total of 3 processes. 

Terminal 1
```
yarn install
yarn startboth
```

Terminal 2
```
cd chat-server
python3 app.py
```

Terminal 3
```
cd analyzer
python3 analyzer.py
```

## References:
* https://flask.palletsprojects.com/en/2.0.x/
* https://www.digitalocean.com/community/tutorials/how-to-use-web-forms-in-a-flask-application
* https://devcenter.heroku.com/articles/getting-started-with-python
