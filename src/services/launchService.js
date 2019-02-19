
import api from '../config/api';

export const getLaunchStatus = id => new Promise((resolve, reject) => {
  api
    .get(`/launchstatus/${id}`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((error) => {
      reject(error);
    });
});
