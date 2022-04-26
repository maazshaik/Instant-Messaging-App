# Chat Application

**Team Members:** Abhinav Venkatesh, Dhrumil Makwana, Maaz Afzal Shaikh, Sana Fathima, Shaily Preetham Kurra, Sri Nikitha Kalidindi

This is the initial version of our chat application deployed at: [Chat App](http://35.224.20.5:3000/)


# A Level work description

- Web application - Developed using React, Node JS and Python
- Basic form, reporting - Login, Register, User Home and Message Pages 
- Data collection - User Credentials, Friend details are collected from the user 
- Data analyzer - Analysis of messages for expletive content
- Unit tests - Performed using unit test module in python
- Data persistence - Using Redis, PostgreSQL databases
- Data store - User Credentials, Friend details, Messages are stored
- Rest collaboration internal or API endpoint - REST endpoint between front-end and backend
- Product environment - GKE cluster

- Integration tests - Performed by interacting with database instance and the unit test modules
- Using mock objects or any test doubles - Used Fake Redis module in python to mock the functionality of Redis
- Continuous integration - Achieved using GitHub Actions
- Production monitoring instrumenting - Using Prometheus

- Acceptance tests - Performed by Gopala Krishna Vasanth Kanugo (Acceptance Tests.xlsx)
- Event collaboration messaging - Using RabbitMQ to analyze messages for expletive content
- Continuous delivery - Achieved using GitHub Actions

</br></br>


How to run dev environment:

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

References:
* https://flask.palletsprojects.com/en/2.0.x/
* https://www.digitalocean.com/community/tutorials/how-to-use-web-forms-in-a-flask-application
* https://devcenter.heroku.com/articles/getting-started-with-python
