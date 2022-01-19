# Home-Medical-Care

Managing healthcare data is essential for everyone, but it can be challenging and time-consuming. Although several Web and mobile applications existed for personal medical record management, there were few home-based, family-oriented solutions. In this project, we proposed to design an easy-to-use solution for a family. 

We designed and implemented an innovative Home Medical Care System, MedCare4Home, by deploying a MERN stack Web application to a minicomputer, Raspberry Pi 4, and enabling a local network to connect different devices at home. The users can access the Web application using either a desktop, tablet, mobile phone, or simply a 7-inch LCD touchscreen. 

MedCare4Home not only allows the users to keep track of appointments and organize healthcare documents, but it can also help set up medication reminders and provide a self-report interface for symptom collection for family members easily and securely in one place. The final prototype system demonstrated that we achieved the original goal and beyond. We expect to extend our current hardware design and software development to support physiological data collection with external sensors in the future.


## File Structure
    .
    ├── config                 # Configuration files
    │   ├── db.js              # Connect to db
    │   ├── default.json       # Holds mongoURI and jwtSecret 
    ├── front-end              # Holds the client application
    │   ├── public             # This holds all of our static files
    │   ├── src                # Source
    |   │   ├── assets         # This folder holds assets such as images, docs, and fonts
    |   │   ├── components     # This folder holds all of the different components that will make up our views
    |   │   ├── views          # These represent a unique page on the website i.e. Home or About
    |   │   ├── HMC            # Main components for this app 
    |   │   ├── index.js       # This is what renders all of our browser routes and different views
    ├── middleware             # Middlewares used
    ├── models                 # This holds all of our data models
    ├── routes/api             # Backend APIs
    ├── package-lock.json      # An auto-generated list of each dependency listed in package.json
    ├── package.json           # A file contains various metadata related to the project 
    ├── .gitignore             # Tells git which files to ignore
    └── README.md              # This file!
 
## Setup the environment 

Follow these steps to set up your Raspberry Pi and the environment needed for this project
1. [Install 64bit Raspbian on your Raspberry Pi 3 or 4](https://jamesachambers.com/where-to-get-the-64-bit-raspberry-pi-os-image-for-pi-4-400/)
2. [Install MongoDB](https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/)
3. [Install npm/nodejs](https://www.instructables.com/Install-Nodejs-and-Npm-on-Raspberry-Pi/)
4. [Install Git](https://linuxize.com/post/how-to-install-git-on-raspberry-pi/)
5. Clone this repo and run it 

## How to run the project

Since this project will hold both the client application and the server application there will be node modules in two different places. 
1. Install dependencies
   - run `npm install` from the root.
   - run `cd front-end` then run `npm install` to install all modules again

2. In the project directory, you can run:
   - Run `npm run-script dev` or `npm run dev` for both the client app and the server app in development mode.<br>
     Open [http://localhost:3000](http://localhost:5000) to view the client in the browser.
   - Run `npm run-script client` or `npm run client` for just the client app in development mode.<br>
     Open [http://localhost:3000](http://localhost:5000) to view the client in the browser.
   - Run `npm run-script server` or `npm run server` for just the server in development mode.<br>
