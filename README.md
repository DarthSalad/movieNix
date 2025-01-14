<!-- PROJECT LOGO -->
<br>
<div align="center">
  <a href="#">
    <img src="src/pages/Login/MovieNix-2.svg" alt="MovieNix Logo" width="80" height="80">
  </a>

  <h3 align="center">MovieNix</h3>

  <p align="center">
    A movie streaming platform built on the Hedera network
    <br />
    <a href="https://docs.hedera.com/guides/docs/sdks"><strong>Hashgraph-SDK docs »</strong></a>
    <br />
    <br />
    <a target="_blank" href="https://movienix-5e794.web.app/">View Deployment</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project
      </a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#planned-features-for-the-project">Planned Features</a></li>
      </ul>
    </li>
    <li>
       <a href="#server-routes">Server routes</a>
    </li>
    <li>
       <a href="#database-schema">Database Schema</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#project-members">Our Team</a></li>
  </ol>
</details>

<br/>

<!-- ABOUT THE PROJECT -->
## About The Project
MovieNix is a decentralised application built on top of Hedera's Hashgraph-SDK where the idea is that the users can pay for movies in hbars directly to production companies without any intermediaries using Hedera's transaction system.
<br/><br/>
### Built with

* **[ReactJS](https://reactjs.org/docs/getting-started.html)** for front-end
* **[Hedera Hashgraph-SDK](https://docs.hedera.com/guides/)** for creating decentralised accounts and payment system 
* **[Express](https://expressjs.com/)** middleware on the backened to handle api routes and requests
* **[Firebase](https://firebase.google.com/)** database and also used for authentication
* **[TMDB](https://developers.themoviedb.org/3)** api to fetch information and requied data for the movies
* **[Heroku](https://www.heroku.com/)** used for deploying and hosting the project
* **[Github](https://github.com/)** for CI/CD and git

<br/>

### Features

1. **Built on the Hedera network** - A movie streaming platform built on the decentralised Hedera network using the Hashgraph SDK with decentralised payment system.

2. **One Tap Buy** - User can purchase any desired movie using the decentralised payment gateway by paying in hbars which requires just one tap and no further cards or UPI. The payment system is built using Hedera; the required amount for the movie is directly transferred from the user hedera account to the movie company hedera account. 

3. **Pay Per Second (PPS)** - We have provided an additional feature, if the user hasn't bought the movie and still wants to watch the movie the user can watch the respective movie by paying 0.01 hbar per second watched.

4. **Library** - The user can view all his purchased movie in his library page. The purchased movie remains in the library or remain subscribed for 14 days. 

5. **Check balance** - Profile page has been made for the user, where one can see his Hedera account id, account balance, account creation date, and the number of movies added to his library.
 
<br/>

### Planned features for the project

* Return to the last watched position of a movie.
* Verified 'Movie production accounts' for production companies to upload their movies directly to the network
* The hbars of purchasing or watching the movie in PPS should be transferred directly to the movie producing company's hedera account .
* Comment and rating feature for each movie


<p align="right">(<a href="#">Back to top</a>)</p>

<!-- ## Currently working on

1. xyz
2. abc -->

## Server Routes

| Type | Route | Description |
|:--:|--| ------------- |
| GET | /createAccount | Creates an account for the user on the Hedera Network and creates and acount ID for them |
| POST | /balance | Checks the balance of the user |
| POST | /transferMoney | Used for making a transaction (buying/paying for a movie) |
| POST | /deleteAccount | Called when the user deletes his/her account essentially deleting their account from the Hedera network and Firestore database |

## Database Schema:
```
    accounts
      	├── user (string generated by Firebase)
      		  ├── accid (Acocunt ID procvided by Hedera)
      		  ├── accountCreationDate
      		  ├── email 
      		  ├── lib (library array for the purchased movies)
      	    		├── libraryItem
      				        ├── expiryDate
      				        ├── id (movie ID from TMDB)
      				        ├── purchaseDate
      				        ├── time
      		  ├── privatekey (generated on account creation)
      		  ├── publickey (provided by Hedera)
```
<p align="right">(<a href="#">Back to top</a>)</p>

## Getting started

```bash
git clone https://github.com/saswatsam786/movieNix.git
git checkout dev_branch
```
Create a .env file in the root directory:

```
REACT_APP_FIREBASE_API_KEY=<your_api_key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your_project_id>.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=<your_project_id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your_project_id>.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your_project_messaging_id>
REACT_APP_FIREBASE_APP_ID=<your_project_app_id>
REACT_APP_FIREBASE_TMDB_API_KEY=<tmdb_api_key>
```
Now create a .env file in the server directory:

```
MY_ACCOUNT_ID=<your_hedera_testnet_id>
MY_PRIVATE_KEY=<your_private_key>
```

Run the command in the **root directory and the server directory to install all the dependencies**:

```bash
# (for npm)
npm install
npm start

# (for yarn) 
yarn add
yarn start
```



To run the server on the local machine:

```bash
cd server

# (for npm)
npm i
npm start

# (for yarn)
npm i
yarn start
```

<p align="right">(<a href="#">Back to top</a>)</p>


## Project Members

<div align="center">

## Team Atreus
<a href = "https://github.com/saswatsam786/movienix/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=saswatsam786/movienix">
</a>
</div>
