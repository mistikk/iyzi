
import firebase from '../config/firebaseInitialize';

const db = firebase.firestore();

export const setFavoriteItem = data => new Promise((resolve, reject) => {
  db.collection('favorites').doc(data.id.toString()).set({ favorite: data.favorite })
    .then(() => {
      resolve(true);
    })
    .catch((error) => {
      reject(error);
    });
});


export const isMarkAsFavorite = id => new Promise((resolve, reject) => {
  db.collection('favorites').doc(id.toString()).get().then((doc) => {
    if (doc.exists && doc.data().favorite) {
      resolve(true);
    } else {
      resolve(false);
    }
  })
    .catch((error) => {
      reject(error);
    });
});
