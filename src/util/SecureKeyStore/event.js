import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

export const SKS = {
  SET: ({key, value}) => {
    // For Storing key
    RNSecureKeyStore.set(key, value, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  },
  GET: ({key}) => {
    // For retrieving key
    RNSecureKeyStore.get(key).then(
      res => {
        console.log('key1: ', res);
      },
      err => {
        console.log(err);
      },
    );
  },
  REMOVE: ({key}) => {
    // For removing key
    RNSecureKeyStore.remove(key).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  },
};
