# Gujarat Famous Places REST API

Welcome to the Gujarat Famous Places REST API! This API provides information about famous places in Gujarat, including their names, cities, images, and location details. It's a valuable resource for travelers and enthusiasts interested in exploring the beauty of Gujarat.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Endpoints](#endpoints)
- [Search Features](#search-features)
- [Sample Requests](#sample-requests)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)

## Introduction

Briefly introduce your Gujarat Famous Places REST API. Describe its purpose, what it offers, and who its intended users are. Mention any unique features or advantages of your API.

# Live Link 
    https://travel-rest-api.onrender.com/

## Getting Started

### Installation

To install and run this API locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ShyamJP/Travel_REST_API.git
   cd Travel_REST_API.git

2. Install dependencies:
    npm install

3. Start the API:
    npm start    

4. Usage
    - open in browser using link which is provide in console
    - write /data after url you get all data of API
    - It also provide all the features

## Endpoints

The API provides the following endpoints:

- `GET /data`: Retrieve a list of data of all place.
- `GET /data?name={placename}`: Retrieve a list of cities.
- `GET /data?city={cityname}`: Retrieve a list of states.
- `GET /data?state={statename}`: Retrieve details about a specific place.


# Sample Requests and Responses

### Request
    http://localhost:5000/data

### Response
  {  
    "_id": "650eee335b85c5588ba52b7b",
    "name": "Rani Ki Vav",
    "state": "Gujrat",
    "city": "Patan",
    "url": "https://example.com/images/rani-ki-vav.jpg",
    "location": "https://maps.google.com/?q=Rani+Ki+Vav",
    "__v": 0
  } 
  
multiple data like this

## Authentication

This API does not require authentication to access the endpoints. However, rate limiting may apply to prevent abuse.

## Search Features

### Search Parameters

- `name`: The name of the place you want to search for.
- `city`: The city where the place is located.
- `state`: The state where the place is located.

### Fields

The API response will include the following fields:

- `name`: The name of the place.
- `city`: The city where the place is located.
- `state`: The state where the place is located.
- `url`: The URL of an image representing the place.
- `location`: The geographical coordinates (latitude and longitude) of the place.

## Sample Requests and Responses

### Get All Data
    `https`
    GET https://travel-rest-api.onrender.com/data

## Get a specific data by name

### Request ex.
`GET https://travel-rest-api.onrender.com/data?name=junagadh`

### Response
     {
        "_id": "650eee335b85c5588ba52b94",
        "name": "Junagadh Fort",
        "state": "Gujrat",
        "city": "Junagadh",
        "url": "https://example.com/images/junagadh-fort.jpg",
        "location": "https://maps.google.com/?q=Junagadh+Fort",
        "__v": 0
    }

## Get a specific data by state

### Request ex.

`GET https://travel-rest-api.onrender.com/data?state=Gujrat`

### Response

  HTTP/1.1 200 OK
  Status: 200 OK
  Content-Type: application/json
  Content-Length: 36

  {
      "_id": "650eee335b85c5588ba52b7b",
      "name": "Rani Ki Vav",
      "state": "Gujrat",
      "city": "Patan",
      "url": "https://example.com/images/rani-ki-vav.jpg",
      "location": "https://maps.google.com/?q=Rani+Ki+Vav",
      "__v": 0
  }
## Get a specific data by city

### Request ex. 
    `GET https://travel-rest-api.onrender.com/data?city=ahmedabad`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    Content-Length: 36

    {
        "_id": "650eee335b85c5588ba52b7e",
        "name": "Gandhi Ashram",
        "state": "Gujrat",
        "city": "Ahmedabad",
        "url": "https://example.com/images/gandhi-ashram.jpg",
        "location": "https://maps.google.com/?q=Gandhi+Ashram",
        "__v": 0
    }
#### You can search similar  or incomplete word in any field than also you can show data this is feature of this REST API

## Examples

        `GET https://travel-rest-api.onrender.com/data?name=gandh`

        {
            "_id": "650eee335b85c5588ba52b7e",
            "name": "Gandhi Ashram",
            "state": "Gujrat",
            "city": "Ahmedabad",
            "url": "https://example.com/images/gandhi-ashram.jpg",
            "location": "https://maps.google.com/?q=Gandhi+Ashram",
            "__v": 0
        }

        `GET https://travel-rest-api.onrender.com/data?city=junagad`

        {
            "_id": "650eee335b85c5588ba52b94",
            "name": "Junagadh Fort",
            "state": "Gujrat",
            "city": "Junagadh",
            "url": "https://example.com/images/junagadh-fort.jpg",
            "location": "https://maps.google.com/?q=Junagadh+Fort",
            "__v": 0
            },
## select particular field
### Request ex. 
    `GET https://travel-rest-api.onrender.com/data?select=city`

### Response

        {
        "_id": "65c8a910d14fdc9db622becc",
        "city": "Veraval"
        },
        {
        "_id": "65c8a910d14fdc9db622becb",
        "city": "Patan"
        },
        {
        "_id": "65c8a910d14fdc9db622becf",
        "city": "Mandvi"
        },

## Sort By particular field
### Request ex. 
    `GET https://travel-rest-api.onrender.com/data?sort=city`

### Response

        {
            "_id": "65c8a910d14fdc9db622bed0",
            "name": "Gandhi Ashram",
            "state": "Gujarat",
            "city": "Ahmedabad",
            "url": "https://media.istockphoto.com/id/1327433319/photo/      gandhi-statue-at-sabarmati-ashram-ahmedabad-gujarat-india.jpg?s=612x612&w=0&k=20&   c=0IkYWCmx-WJnHtE_U-12iCs7Rk0VpIvd8-K4a3c_F58=",
            "location": "https://maps.google.com/?q=Gandhi+Ashram",
            "__v": 0
        },
        {
            "_id": "65c8a910d14fdc9db622bed1",
            "name": "Sarkhej Roza",
            "state": "Gujarat",
            "city": "Ahmedabad",
            "url": "https://images.unsplash.com/photo-1603651481343-0f71466bb14a?   ixlib=rb-4.0.      3&  ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&    fit=crop&   w=1470&q=80",
            "location": "https://maps.google.com/?q=Sarkhej+Roza",
            "__v": 0
        },
        like this...


### Thankyou for visit
sugessions are most welcome! and feel free to contribute.