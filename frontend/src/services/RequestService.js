import http from '../http-common';

const getAllCertificates = (params) => {
   return http.get('/', { params });
};

export default {
   getAllCertificates
};