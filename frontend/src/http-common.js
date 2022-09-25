import axios from 'axios';

export default axios.create({
   baseURL: 'http://certwebapp.northeurope.azurecontainer.io:8080/' /* development 'http://localhost:80/'*/,
   headers: {
      'Content-type': 'application/json'
   }
});