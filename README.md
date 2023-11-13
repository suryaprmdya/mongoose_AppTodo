# Web Service & RESTful API ToDo List App
Is a web service that is API-based and connected to a database. For this project I used a database from MongoDB Atlas

## Feature
- Create user (Register)
- Login
- Create todo
- Get all todos
- Get detail todo
- Update todo
- Delete todo
- Delete todos

## Tech
This Web Service & RESTful API ToDo List App was developed using the following technology:
- VScode
- Postman
- NodeJS
- ExpressJS
- MongoDB Atlas
- MongoDB Compass

## Installation
Web Service & RESTful API ToDo List App requires [Node.js](https://nodejs.org/) v20+ to run.

Install the dependencies and devDependencies and start the server.


```sh
cd mongoose_AppTodo
npm install
npm run dev
```


create cloud database using mongodb atlas service

connect database to your VScode with create file `.env` according to the file `.env.example`

> Note: 
`DB_URL` is required for connecting database
`JWT_KEY` is required for authorization, you can use random string

after in the terminal print :
```sh
Server running in port 3000
success connect to mongoDB
```

in Postman you can New Request and write API root of server
```sh
localhost:3000
```

### Use feature 
- Create user (Register)
    use the following API and use method `POST`
    ```sh
    localhost:3000/auth/register
    ```
    
    and then you can input the data user in `body` with `JSON`

  
- Login
    use the following API and use method `POST`
    ```sh
    localhost:3000/auth/login
    ```
    
    and then you can input `username` and `password` by data user in `body` with `JSON`

  
- Create todo
    use the following API and use method `POST`
    ```sh
    localhost:3000/users/:username
    ```
    
    > Note: 
    `:username` is username in data user
    
    copy `token` from respon `login`, add key `Authorization` in `headers` and paste `token` in value key with prefix `Bearer`
    > Note: if after you use New Request in Postman, You must re-entry the `token`
    
    and then you can input data todo in `body` with `JSON`

  
- Get all todos
    use the following API and use method `GET`
    ```sh
    localhost:3000/todos
    ```

    
- Get detail todo
    use the following API and use method `GET`
    ```sh
    localhost:3000/users/:username/todo/:id
    ```
    
    > Note: 
    `:username` is username in data user
    `:id` is id in data todo
    
    copy `token` from respon `login`, add key `Authorization` in `headers` and paste `token` in value key with prefix `Bearer`
    > Note: if after you use New Request in Postman, You must re-entry the `token`

  
- Update todo
    use the following API and use method `PUT`
    ```sh
    localhost:3000/users/:username/todo/:id
    ```
    
    > Note: 
    `:username` is username in data user
    `:id` is id in data todo
    
    copy `token` from respon `login`, add key `Authorization` in `headers` and paste `token` in value key with prefix `Bearer`
    > Note: if after you use New Request in Postman, You must re-entry the `token`
    
    and then you can input data todo will update in `body` with `JSON`

  
- Delete Todo
    use the following API and use method `DELETE`
    ```sh
    localhost:3000/users/:username/todo/:id
    ```
    
    > Note: 
    `:username` is username in data user
    `:id` is id in data todo

    copy `token` from respon `login`, add key `Authorization` in `headers` and paste `token` in value key with prefix `Bearer`
    > Note: if after you use New Request in Postman, You must re-entry the `token`

    
- Delete all todos
    use the following API and use method `DELETE`
    ```sh
    localhost:3000/users/:username
    ```
    
    > Note: 
    `:username` is username in data user

    copy `token` from respon `login`, add key `Authorization` in `headers` and paste `token` in value key with prefix `Bearer`
    > Note: if after you use New Request in Postman, You must re-entry the `token`
    
## Credits
Surya Oktova Pramudya (FS-27)

Universitas Pembangunan Nasional Veteran Jawa Timur

Web Service & RESTful API ToDo List App
