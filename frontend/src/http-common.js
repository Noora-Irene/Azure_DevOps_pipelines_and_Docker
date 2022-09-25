import axios from 'axios';

export default axios.create({
   baseURL: 'http://portfolioapp.northeurope.azurecontainer.io:80/' /* development 'http://localhost:80/'*/,
   headers: {
      'Content-type': 'application/json'
   }
});