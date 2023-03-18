# Drone Delivery App

This is a web application for a drone delivery company to facilitate delivery using drones. It is developed using **ReactJs** as frontend and **firebase** as backend.

<br />

## Project Setup

This project uses [React](https://reactjs.org/) and [Firebase](https://firebase.google.com/).
The package manager is  `npm`. To install `npm`, install [node.js](https://nodejs.org/en/download/).

<br/>

1. Clone the repository on your local machine
```posh
git clone https://github.com/vishnu921/drone-delivery.git
```
2. Move to the `drone-delivery` directory using
```posh
cd drone-delivery
```
3. Install the dependencies using
```posh
npm install
```
4. To start the development server, use
```posh
npm start
```

<br/>

## Features

<br/>

**USER**

* Signup and Login using email and password
* Request a drone: User can fill the pickup and delivery location and submit a drone delivery request
* Realtime status of package is shown in the orders sections of each order
* Package history: All the past orders are available in the orders section
```
Sample User Credentials
email: user1@gmail.com
password: test123
```

<br/>

**ADMIN**
* Signup and Login using email and password
* Admin can Accept and Reject order requests from the users
* Package History: Admin can see all the past orders made by the users
* Admin can see all the available drones in the **Drones** section
* Add drones: Admin can add more drones using the form
```
Sample Admin Credentials
email: admin@gmail.com
password: test123
```