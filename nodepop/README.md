# NodePop
As part of the 'Women in Tech' bootcamp by Glovo and Keepcoding, we've been asked to develop the API that will run on the server of a second-hand goods selling service called NodePop.


## Pre - requisites

First of all, you must have installed :

* **[Node.js](https://nodejs.org/)** 

* **[MongoDB](https://www.mongodb.com/)**


Clone :

You can clone this repo using the link below

```
https://github.com/EliFullStack/api-nodejs-mongodb.git
```

Deploy :

```sh
npm install
```

Load initial data to database :

```
npm run init-db
```

Start the application in production with :

```sh
npm start
```

Start the application in development with :

```sh
npm run dev
```

## API Endpoints :

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /apiv1/anuncios | To create a new ad |
| GET | /apiv1/anuncios | To retrieve all ads |
| GET | /apiv1/tags | To retrieve all tags used in the app |


## Filters

You can filter results by:

* name

* tag

* price

* sale (True or False)

* fields

* skip & limit (pagination)

* sort



## Examples

```
 POST  /apiv1/anuncios 
```

```
Expected response:

{
    "result": {
        "name": "Samsung",
        "sale": true,
        "price": 350,
        "photo": "/images/samsung.jpg",
        "tags": [
            "work",
            "mobile"
        ],
        "_id": "63b9b27454e7793f43f3af6c",
        "__v": 0
    }
}
```


```
 GET  apiv1/anuncios?tag=mobile&sale=false&name=ip&price=50&skip=0&limit=2&sort=price 
```
```
Expected response:

{
    "results": [
        {
            "_id": "63baafba05f525252cd13176",
            "name": "iPhone 3GS",
            "sale": false,
            "price": 50,
            "photo": "/images/iPhone.jpg",
            "tags": [
                "lifestyle",
                "mobile"
            ],
            "__v": 0
        }
    ]
}
```

```
GET /apiv1/tags
```
```
{
    "results": [
        "work",
        "lifestyle",
        "motor",
        "mobile"
    ]

```

## Technologies used

- [Node.js](https://nodejs.org/)

- [MongoDB](https://www.mongodb.com/)

- [Mongoose ODM](https://mongoosejs.com/)

- [Express](https://expressjs.com/)

- Nodemon

- Basic-Auth


## Author
[Elisabet V. Alvarez](https://www.linkedin.com/in/elisabet-v-alvarez/)


