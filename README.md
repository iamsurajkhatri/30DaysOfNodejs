

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

# React + Vite

To run the backend go to specic day directory
then 
=> npm install
=> npm run start

 # to run the frotend project
=> npm install
=> npm run dev


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
