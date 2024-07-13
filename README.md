# Mongo Social Network API

## Table Of Contents
- [Mongo Social Network API](#mongo-social-network-api)
  - [Table Of Contents](#table-of-contents)
  - [Description](#description)
  - [The Challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Link To GitHub](#link-to-github)
  - [Walkthrough Video](#walkthrough-video)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Features](#features)
  - [Error Handling](#error-handling)
  - [License](#license)
  - [Questions](#questions)

## Description
This project is a social network API built using Node.js, Express.js, and MongoDB. It provides a RESTful API for managing users, thoughts, reactions, and friends in a social network.

## The Challenge
The challenge was to build a robust backend for a social network application that allows users to share thoughts, react to friends' thoughts, and manage a friend list. The application needed to support CRUD operations and handle associations between different entities efficiently.

## User Story
- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Link To GitHub
[GitHub Repository](https://github.com/EdRivera016/Mongo-Social-Network)

## Walkthrough Video
[Walkthrough Video](https://watch.screencastify.com/v/bQKZNSd5tWyulFRGpFLM)

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation
To install and run the application locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/EdRivera016/Mongo-Social-Network.git
   cd Mongo-Social-Network
2. Install dependencies:
   - `npm install`
3. Set up your environment variables:
Create a `.env` file in the root directory and add the following variables:
`MONGODB_URI=mongodb://localhost:27017/mongo-social-network
PORT=3001`
4. Start the server:
   `npm run dev`
## Features
* CRUD Operations for Users: Create, read, update, and delete users in the database.
* CRUD Operations for Thoughts: Create, read, update, and delete thoughts, including managing reactions and timestamps.
* CRUD Operations for Reactions: Create and delete reactions associated with thoughts.
* Friend Management: Add and remove friends from a user's friend list.
* Database Integration: Utilize MongoDB for robust and scalable data storage.
* Mongoose ODM: Use Mongoose to handle database interactions, ensuring smooth and efficient data management.
* RESTful API: Expose a well-structured RESTful API for easy interaction with the data.

## Error Handling
Comprehensive error handling is implemented throughout the application to provide meaningful error messages and improve debugging.

## License 
This project is licensed under the MIT License.
- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Questions
Please send any quesons you may have [here](mailto:edwinrivera016@outlook.com?subject=[Github]%20Dev%20Connect) or visit [github/EdRivera016](https://github.comEdRivera016).