# Zuri Crud App

This is a simple express application that:
- Connects to a database
- Creates the payload: { message: String, data: Object }
- Gets the data created
- Updates the data created
- Deletes the data created

Data required includes: name, email & country. 

In the following format 
{
  "name": String,
  "email": String,
  "country": String
}


## API Reference


#### Welcome page

```http
  GET /
```
#### Create details

```http
  POST /info
```
#### Read details

```http
  GET /info
  GET /info/:id
```
#### Update details

```http
  PUT /info/:id
```
#### Delete details

```http
  DELETE /info/:id
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to get, update or delete |



## Hosted Website

[Zuri Crud App](https://my-zuri-crud-app.herokuapp.com)

  
## Authors

- [@willingtoeatyam](https://www.github.com/willingtoeatyam)
  
