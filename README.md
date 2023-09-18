# Movie_Ticket_Booking_System
This is a Movie Ticket Booking System application built using Node.js and MongoDB. It provides functionalities for users to register, login, add movies to theaters, book tickets, and manage their cart.

 `Table of Content for Application`
* [For Back-End](#for-back-end)
* [For Front-End](#for-front-end)
* [Deployment](#deployment)

# For Back-End

 `Table of Contents for Back-End`
* [Installation](#Installation)

* [Usage](#usage)

* [API Endpoints](#api-endpoints)
       
* [Models](#models)

* [Controllers](#controller)
       
* [Routes](#routes)

* [Middleware](#middleware)
       
* [Authentication](#authentication)
      
* [Dependencies](#depedencies)
   


### Installation:

      git clone <repository-url>

### Navigate to the project directory:

     cd ticket-reservation-system
### Install the dependencies:

          npm install

`Set up the environment variables:`

 * Create a .env file in the root directory of the project.
 * Define the following environment variables in the .env file:
 * mongoUrl: MongoDB connection URL
 * key: Secret key used for JWT token generation
 * port: Port number on which the server will run 

  `Start the application:`

       npm start
   
   The application will be accessible at http://localhost:6000 

## Usage

The Ticket Reservation System provides the following functionalities:

 * User Registration: Users can register by providing their name, mobile number, email, and password.

 * User Login: Registered users can log in with their email and password to access the system.

 * Theater Management: Admins can add theaters with details like theater name, location, total seats, and associated movies.

 * Movie Management: Admins can add movies to theaters, providing details like the movie's URL, name, price, show times, and available seats.

 * Ticket Booking: Users can search for theaters, view available movies, select show times, choose seats, and book tickets.

 * Cart Management: Users can add movie tickets to their cart, view the cart contents, and remove items from the cart.

 * Ticket History: Users can view their booking history and details of past ticket purchases.

## API Endpoints

The API endpoints provided by the Ticket Reservation System are as follows:

   `User Registration:`

   * method : POST

   * Endpoint : /user/register
   * body :
           
           {
              "name":"Chandan Kumar,
              "email":"abc@gmail.com",
              "mobile":1234567890,
              "password":******
           }
  * Response : If user already registered then it will throw an error other wise user registeration successfull

  `User Login:`

  * method : POST
  * Endpoing : /user/login
  * body :
   
          {
              "email":"abc@gmail.com",

              "password":******
       }
   * Response : If all the credential provide and also correct infromation about user then login success other wise throw an error



  `Theater Management:`

  * POST /theaters/add: Add a new theater.
  * GET /theaters/allTheater: Get all theaters.
  * GET /theaters/oneTheater/:theaterId: Get details of a specific theater.
  * GET /theaters/search?query={query}: Search for theaters.

   `Movie Management:`

  * POST /movie/add/:theaterId: Add a new movie to a theater.
  * GET /movie/availableSeatDetails/:movieId: Get available seat details for a movie.
  * GET /movie/AllMovie/:movieId: Get all movies for a theater.
  * GET /movie/OneMovie/:movieId/:showId: Get details of a specific movie.

  `Ticket Booking:`

   * POST /bookings/book/:movieId: Book tickets for a movie.

   `Cart Management:`

   * POST /cart/add/:movieId: Add a movie to the cart.
   * GET /cart/get: Get the cart contents.
  * DELETE /cart/remove/:_id: Remove an item from the cart.

  `Ticket History:`

   * GET /bookings/get: Search for tickets based on various criteria.
   * GET /bookings/getbooking: Get ticket booking history for a user.

## Models
The Ticket Reservation System has the following data models:

 * User: Represents a user registered in the system. Stores information like name, mobile number, email, and password.

 * Theater: Represents a theater in the system. Stores details like theater name, location, total seats, and associated movies.

 * Movie: Represents a movie in a theater. Stores information like the movie's URL, name, price, show times, and available seats.

 * Cart: Represents a user's cart. Stores information about the movies added to the cart, including movie details, price, location, show time, and selected seats.

 * Ticket: Represents a booked ticket. Stores information about the user, movie, price, location, show time, and booked seats.

## Controllers
The Ticket Reservation System has the following controllers:

 * User Controller: Handles user registration and login functionality.

 * Theater Controller: Handles theater-related operations such as adding a new theater, getting theaters, and searching for theaters.

 * Movie Controller: Handles movie-related operations such as adding a movie to a theater, getting available seat details, and getting movies for a theater.

 * Cart Controller: Handles cart-related operations such as adding movies to the cart, getting the cart contents, and removing items from the cart.

 * Ticket Controller: Handles ticket-related operations such as booking tickets and retrieving ticket booking history.

 ## Routes
The Ticket Reservation System has the following routes:

 * User Routes: Handles user registration and login endpoints.

 * Theater Routes: Handles theater-related endpoints such as adding a new theater, getting theaters, and searching for theaters.

 * Movie Routes: Handles movie-related endpoints such as adding a movie to a theater, getting available seat details, and getting movies for a theater.

 * Cart Routes: Handles cart-related endpoints such as adding movies to the cart, getting the cart contents, and removing items from the cart.

 * Ticket Routes: Handles ticket-related endpoints such as booking tickets and retrieving ticket booking history.

## Middleware
* Authentication Middleware: Validates the JWT token received in the request headers and authenticates the user before allowing access to protected routes.

## Authentication
The Ticket Reservation System uses JWT (JSON Web Token) for authentication. After successful user login, a token is generated and returned to the client, which is then included in the headers of subsequent requests to protected routes. The authentication middleware verifies the token and grants access to the protected routes.

# Dependencies
The Ticket Reservation System uses the following dependencies:

 * `express`: Fast, unopinionated, minimalist web framework for Node.js.
 * `mongoose`: MongoDB object modeling tool.
 * `bcrypt`: Library for hashing and comparing passwords.
 * `jsonwebtoken`: JSON Web Token implementation.
 * `dotenv`: Loads environment variables from a .env file.
 * `cors`: Middleware for enabling Cross-Origin Resource Sharing.


# For Front-End
 
 `Table of Content For Front-End`
 * [Components](#components)
 * [Context](#context-api)
 * [Pages](#pages)
 * [Run the application](#running-the-application)

## Components

### Navbar Component
The `Navbar` component is responsible for rendering the navigation bar at the top of the application. It displays links to different pages based on the user's authentication status. It also includes a logout button and shows the user's name if authenticated.

Location: `components/Navbar.jsx`

`Before Login`
![Screenshot (557)](https://github-production-user-asset-6210df.s3.amazonaws.com/107467981/251887335-e57bf470-aaef-48d5-b7e3-c100b788310c.png)

`After Login`
![Screenshot (556)](https://www.linkpicture.com/q/Screenshot-151_2.png)



### AllRoutes Component
The `AllRoutes` component defines all the routes for the application using `react-router-dom`. It maps each route to a specific page component, such as Home, Register, Login, Movie, Seat, ShowDetails, Cart, Checkout, and TicketList.

Location: `components/AllRoutes.jsx`


### ShowDetails Component
The `ShowDetails` component displays the available show details for a selected movie. It fetches the show details from the server based on the movie ID and renders them as clickable links to the seat selection page.

Location: `components/ShowDetails.jsx`


![Screenshot (546)](https://www.linkpicture.com/q/Screenshot-153_2.png)

## Context API 
### AuthContextProvider
The `AuthContextProvider` component is responsible for managing the authentication state of the application using the Context API. It provides the authentication context to its child components and includes methods for login and logout.

Location: `context/AuthContextProvider.jsx`

## Pages


### Home Page
The `Home` page displays a list of theaters available for movie selection. It fetches the theater data from the server and renders it as clickable links to the movie selection page.

Location: `pages/Home.jsx`

![Screenshot (544)](https://www.linkpicture.com/q/Screenshot-152_5.png)

### Register Page
The `Register` page allows new users to create an account. It includes a registration form where users can enter their name, mobile number, email, and password. After successful registration, the user is redirected to the login page.

Location: `pages/Register.jsx`

![Screenshot (542)](https://github-production-user-asset-6210df.s3.amazonaws.com/107467981/251887802-8c83dc7e-0f4a-45c1-ae36-461dcd39b4d1.png)

### Login Page
The `Login page` allows existing users to log in to their accounts. It includes a login form where users can enter their email and password. After successful login, the user is redirected to the home page.

Location: `pages/Login.js`

![Screenshot (543)](https://github-production-user-asset-6210df.s3.amazonaws.com/107467981/251887820-57a87593-97f0-4596-bbfb-2c235a34eacc.png)

### Movie Page
The `Movie` page displays a list of movies available at a selected theater. It fetches the movie data from the server based on the theater ID and renders it as cards with movie details. Users can click on a movie to view its show details.

Location: `pages/Movie.jsx`
![Screenshot (545)](https://www.linkpicture.com/q/movie_1.png)


### Seat Page
The `Seat` page allows users to select seats for a specific movie show. It fetches the seat data from the server based on the movie ID and show ID. Users can click on available seats to select them. Selected seats are added to the cart for checkout.

Location: `pages/Seat.jsx`

![Screenshot (547)](https://www.linkpicture.com/q/Screenshot-154_3.png)

### Cart Page
The `Cart` page displays the list of movies added to the user's cart. It fetches the cart data from the server and allows users to remove movies from the cart. Users can proceed to checkout or remove movies from the cart.

Location: `pages/Cart.jsx`

![Screenshot (548)](https://www.linkpicture.com/q/Screenshot-155_3.png)

### Checkout Page
The `Checkout` page displays the payment form for users to enter their card details. It allows users to make payments for the selected movie tickets. After successful payment, the user is redirected to the home page.

Location: `pages/Checkout.jsx`

![Screenshot (551)](https://www.linkpicture.com/q/Screenshot-157_1.png)

### TicketList Page
The `TicketList` page displays the list of tickets booked by the user. It fetches the ticket data from the server and shows details such as movie name, show time, total seats, total price, and location.

Location: `pages/TicketList.jsx`

![Screenshot (552)](https://www.linkpicture.com/q/Screenshot-156_1.png)

## Running the Application
To run the application, follow these steps:

* Install the required dependencies using npm install.
* Start the development server using npm start.
* Access the application in a web browser at http://localhost:3000.

## Dependencies
  
            "dependencies":
            {
            "@fortawesome/fontawesome-svg-core": "^6.4.0",
            "@fortawesome/free-solid-svg-icons": "^6.4.0",
            "@fortawesome/react-fontawesome": "^0.2.0",
            "@testing-library/jest-dom": "^5.16.5",
            "@testing-library/react": "^13.4.0",
            "@testing-library/user-event": "^13.5.0",
            "react": "^18.2.0",
            "react-dom": "^18.2.0",
            "react-router-dom": "^6.14.0",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
         }



## Deployment



[Backend-End]( https://sparkling-erin-gilet.cyclic.app/)

Server side:  Deployed on the Cyclic
      
 
 [Front-End]( https://ticket-tan.vercel.app/)

 Client side: Deploy on the Vercel
