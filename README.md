

# 30DaysOfNodejs
# Day-1 How to deploy backed code in prouduction
steps:- create git repo first then deploy that repo on cloud
We need to add the env varibles on the cloud which we haved added in env files

# Day-2 Connect backend with frontend | Fullstack Proxy and CORS
we need to add the proxy package in package.json file in frontend
or we can add the cors middleware in backend as well
like below in sever.js file where we have created the backend server
var cors = require('cors')

app.use(cors());

# To run the backend go to specic day directory

then 
=> npm install
=> npm run start




# Day-3   Data modelling for backend with mongoose
moon modler tool for mongoDb and noSql for visulize of mongodDb & mongoose ODM Sschema Designs

# moon modeler:- https://www.datensen.com/data-modeling/moon-modeler-for-databases.html(create schema design(diagram) and gives us the model schema script)

# https://www.eraser.io/:- this is also gives us the facility to create the data modeling (shema desing):- we will create the schema design in it and in returns this will gives us the source code of the model

# code sandbox(to run code without installing the software like replit.com):- https://stackblitz.com/

# Work with mongoose
# These three steps wil be common for all the models in mongooose
const mongoose = require('mongoose');

const userSchema =  new mongoose.Shema({})

export const User = mongoose.model("User", userSchema);

#when model goes in mongodb then its model name is changes to the plur like user to users todo to todos photo to photos


# Day- 4 = How to setup the professional project
to make the model or schema strucute you can use below link
https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj
in above link we have added the youtube data model flow

 # to run the frotend project
 # React + Vite
=> npm install
=> npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
