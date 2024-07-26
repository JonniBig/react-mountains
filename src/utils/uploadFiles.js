import { nanoid } from '@reduxjs/toolkit';
import { storage } from 'auth/base';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export const uploadFiles = async files => {
  const downloadURLs = [];

  for (const file of files) {
    const storageRef = ref(storage, `images/${nanoid(10)}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const downloadURL = await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        null,
        error => {
          reject(error);
        },
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(url);
          } catch (error) {
            reject(error);
          }
        }
      );
    });

    downloadURLs.push(downloadURL);
  }

  return downloadURLs;
};
