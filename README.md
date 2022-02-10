# Api Rest for my library
This api will be used in my personal project and is only for studies.

## Start
```
$npm install
$npm run dev
```
## Endpoints
### POST /auth
This endpoint is responsible for **logging** into the api.
#### Parameters
Email and Passoword
#### Exemple
```
{
	"email": "exemple@exemple.com",
	"password": "exemple1"
}
```
### GET /book
This endpoint lists all registered books
#### Parameters
None
#### Output
```
[
	{
		"id": 1,
		"title": "JavaScript",
		"pages": 400,
		"release": "10-01-01T00:00:00.000Z",
		"category_id": 1,
		"active": true,
		"image_id": 1,
		"Category": {
			"id": 1,
			"name": "Technology"
		},
		"Image": {
			"id": 1,
			"originalname": "exemple.jpg",
			"filename": "1644196162780exmple.jpg",
			"url": null,
			"createdAt": "2022-02-07T01:09:22.000Z",
			"updatedAt": "2022-02-07T01:09:22.000Z"
		}
	}
]
```
### GET /book/1
This endponit searches for a book according to the id passed in the parameter
#### Parameters
Query params: **Id**
