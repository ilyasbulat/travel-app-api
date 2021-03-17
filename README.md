## Deplyed on heroku
[https://rs-travel-app-api.herokuapp.com/countries](https://rs-travel-app-api.herokuapp.com/countries) - get all countries

[https://rs-travel-app-api.herokuapp.com/countries/:id](https://rs-travel-app-api.herokuapp.com/countries:id) - get all countries sights (id=country id)

### To start this API you need environment variables:
1. DBS - mongoDB string for connect
2. PORT - port on which server will work


### To start dev server with nodemon:
* ```yarn start-dev || npm run start-dev```

### To start server:
- ```yarn start || npm run start```

### To get all countries: 
- ```http://localhost:<PORT>/countries```
### To get sights of a country:
- ```http://localhost:<PORT>/coutnries/:id```
- where id = country ```_id``` from database
