# TeamH-Backend

```
Creating movie-review website and mobile app
This app has : RESTful endpoint for movie-review website and mobile app CRUD operation
Link Heroku : https://aqueous-savannah-95860.herokuapp.com
```

## RESTful endpoints for User Register - Login

JSON formatted response

```
POST /register
Register for user
Request Header
not needed
Request Body{
"username": "",
"email": "",
"password": ""
}
Response (201)[
{
"id": 1,
"username": "",
"email": "",
"password": "",
"role": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z"
}
]
Response (400 - Bad Request){
"message": ""
}
```

```
POST /login
Login for user
Request Header
not needed
Request Body{
"username": "",
"password": "",
}
Response (200)[
{
"access_token": ""
}
]
Response (400 - Bad Request){
"message": ""
}
```

## RESTful endpoints for User CRUD Operation

```
GET /users
Get all users
Request Header{
"access_token": ""
}
Request Body
not needed
Response (200)[
{
"id": ,
"full_name": "",
"username": "",
"email": "",
"password": "",
"user_img": "",
"roles": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (400 - Bad Request){
"message": ""
}
```

```
POST /users
Create new user
Request Header{
"access_token": ""
}
Request Body{
"full_name": "",
"username": "",
"email": "",
"password": "",
"user_img": "",
"roles": ""
}
Response (201 - Created){
"id": ,
"full_name": "",
"username": "",
"email": "",
"password": "",
"user_img": "",
"roles": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (400 - Bad Request){
"message": ""
}
```

```
PUT /users/:id
Update user by id
Request Header{
"access_token": ""
}
Request Body to update{
"full_name": "",
"username": "",
"email": "",
"password": "",
"user_img": "",
"roles": ""
}
Response (201 - Created){
"id": ,
"full_name": "",
"username": "",
"email": "",
"password": "",
"user_img": "",
"roles": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (400 - Bad Request){
"message": ""
}
```

```
DELETE /users/:id
delete user by id
Request Header{
"access_token": ""
}
Request Body to delete
not needed
Response (201 - deleted) all assets except the one that has been deleted
Response (400 - Bad Request){
"message": ""
}
```

## RESTful endpoints for movie

###### GET /movie/:page

```
Get movie per page (12 movie/page)
-Request Header:
not needed
-Request Body
not needed
-Response (200 - OK)[
{
"id": 1,
"img_url_backdrop": "",
"img_url_poster": "",
"title": "",
"genre" : "",
"synopsis" : ""
}
]
-Response (500 - Internal Server Error)
```

###### GET /movie/id/:id

```
get movie by movie id
-Request Header
not needed
-Request Body
not needed
-Response (200)[
{
"id": ,
"img_url_backdrop": "",
"img_url_poster": "",
"title": "",
"genre": "",
"date_data_in": "",
"release_date" : "",
"synopsis" : "",
"director" : "",
"budget" : "",
"trailer_url" : ""
}, Songs: {
    "featured_song":"",
    "artist":"",
}
]
-Response (500 - Internal Server Error)
```

###### POST /movie

```
Create new movie
-Request Header
not needed_
-Request Body
{
"id": ,
"img_url_backdrop": "",
"img_url_poster": "",
"title": "",
"genre": "",
"date_data_in": "",
"release_date" : "",
"synopsis" : "",
"director" : "",
"budget" : "",
"trailer_url" : ""
}
-Response (201 - Created){
"id": ,
"img_url_backdrop": "",
"img_url_poster": "",
"title": "",
"genre": "",
"date_data_in": "",
"synopsis" : "",
"director" : "",
"budget" : "",
"trailer_url" : "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
-Response (500 - Internal Server Error){
```

###### GET /movie/genre/:genre

```
find movie by genre (12 Movie/page)
-Request Header
not needed
-Request Body
not needed
-Response (200 - OK)[
{
"id": 1,
"img_url_backdrop": "",
"img_url_poster": "",
"title": "",
"genre":""
"synopsis":""
}
]
-Response (500 - Internal Server Error)
```

###### GET movie/find/:page

```
find movie by title (12 page per movie)
-Request Header
not needed
-Request Body
not needed
-Response (200)[
{
"id": ,
"img_url_backdrop": "",
"img_url_poster": "",
"title": "",
"genre": "",
"synopsis":""
}
]
-Response (500 - Internal Server Error)
```

## RESTful endpoints for Actor

###### GET /actor

```
Get all actor
Request Header
not needed
Request Body
not needed
Response (200)[
{
"id": 1,
"img_url": "",
"name": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (500 - Internal Server Error)
```

###### POST /actor

```
Create new movie
Request Header{
not needed
}
Request Body{
"img_url": "",
"name": "",
}
}
Response (201 - Created){
"id": ,
"img_url": "",
"name": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (500 - Internal Server Error)
```

###### PUT /actor/:id

```
Update actor by id
Request Header
not needed
Request Body to update{
"img_url": "",
"name": "",
}
Response (201 - Created){
"id": ,
"img_url": "",
"name": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (500 - Internal Server Error)
```

###### DELETE /actor/:id

```
delete actor by id
Request Header
not needed
Request Body to delete
not needed
Response (201 - deleted) all assets except the one that has been deleted
Response (500 - Internal Server Error)
```

## RESTful endpoints for Charachter

###### GET /character

```
Get all character
Request Header
not needed
Request Body
not needed
Response (200)[
{
"id": 1,
"MovieId": "",
"ActorId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (500 - Internal Server Error)
```

###### GET /character/:id

```
Get all character from the MovieId
Request Header
not needed
Request Body
not needed
Response (200)[
{
"id": 1,
"MovieId": "",
"ActorId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (500 - Internal Server Error)
```

###### POST /character

```
Create new character
Request Header
not needed
Request Body{
"MovieId": "",
"ActorId": "",
}
}
Response (201 - Created){
"id": ,
"MovieId": "",
"ActorId": "",
},
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (500 - Internal Server Error)
```

###### PUT /character/:id

```
Update character by id
Request Header
not needed
Request Body to update{
"MovieId": "",
"ActorId": "",
}
Response (201 - Created){
"id": ,
"MovieId": "",
"ActorId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (500 - Internal Server Error)
```

###### DELETE /character/:id

```
delete character by id
Request Header
not needed
Request Body to delete
not needed
Response (201 - deleted) all assets except the one that has been deleted
Response (500 - Internal Server Error)
```

## RESTful endpoints for Feature Song

###### GET /song

```
Get all feature song
Request Header
not needed
Request Body
not needed
Response (200)[
{
"id": 1,
"featured_song": "",
"artist": "",
"MovieId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (500 - Internal Server Error)
```

###### GET /song/:id

```
Get all feature song from movieId
Request Header
not needed
Request Body
not needed
Response (200)[
{
"id": 1,
"featured_song": "",
"artist": "",
"MovieId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (500 - Internal Server Error)
```

###### POST /song

```
Create new song
Request Header
not needed
Request Body{
"featured_song": "",
"artist": "",
"MovieId": "",
}
}
Response (201 - Created){
"id": ,
"featured_song": "",
"artist": "",
"MovieId": "",
},
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (500 - Internal Server Error)
```

###### PUT /song/:id

```
Update song by id
Request Header{
not needed
Request Body to update{
"featured_song": "",
"artist": "",
"MovieId": "",
}
Response (201 - Created){
"id": ,
"featured_song": "",
"artist": "",
"MovieId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (500 - Internal Server Error)
```

###### DELETE /song/:id

```
delete song by id
Request Header
not needed
Request Body to delete
not needed
Response (201 - deleted) all assets except the one that has been deleted
Response (500 - Internal Server Error)
```

## RESTful endpoints for Review

###### GET /review

```
Get all review where share is true
Request Header
not needed
Request Body
not needed
Response (200)[
{
"id": 1,
"user_rating": "",
"comment": "",
"date_of_comment": "",
"share": "true",
"MovieId": "",
"UserId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (500 - Internal Server Error)
```

###### GET /review/:id

```
Get review by Movie where share is true
Request Header
not needed
Request Body
not needed
Response (200)[
{
"id": 1,
"user_rating": "",
"comment": "",
"date_of_comment": "",
"share":"true",
"MovieId": "",
"UserId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
]
Response (500 - Internal Server Error)
```

###### GET /review/rating/:id

```
Show rating by MovieId
Request Header
not needed
Request Body
not needed
Response (200)
{
    average_rating: "",
    total_reviewer: ""
}
Response (500 - Internal Server Error)
```

###### POST /review/:MovieId

```
Create new review by MovieId
Request Header{
"access_token": ""
}
Request Body{
"user_rating": "",
"comment": "",
"date_of_comment": "",
"share": ""
}
if UserId already review in the MovieId
Response (409 - Bad Request){
    "msg": "Only 1 review for 1 movie per user"
}
}
Response (201 - Created){
"id": ,
"user_rating": "",
"comment": "",
"date_of_comment": "",
"share":"",
"MovieId": "",
"UserId": "",
"createdAt": "2020-03-20T07:15:12.149Z",
"updatedAt": "2020-03-20T07:15:12.149Z",
}
Response (500 - Internal Server Error)
```

###### PUT /review/:id

```
Update review by id
Request Header{
"access_token": ""
}
Request Body to update{
"user_rating": "",
"comment": "",
"date_of_comment": "",
"share" : ""
}
Response (201 - Created){
msg : "Review updated"
}
Response (500 - Internal Server Error)
```

###### DELETE /review/:id

```
delete review by id
Request Header{
"access_token": ""
}
Request Body to delete
not needed
Response (201 - {"Review Updated"}) all review except the one that has been deleted and share is false
Response (500 - Internal Server Error)
```
