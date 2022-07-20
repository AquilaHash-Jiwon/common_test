import axios from 'axios';
import {Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const dateFormatter = date => {
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month.toString().length === 1) {
    month = '0' + month;
  }
  if (day.toString().length === 1) {
    day = '0' + day;
  }
  return `${date.getFullYear()}.${month}.${day}`;
};
export const postLog = async () => {
  const BASE_URL = 'https://test-deployment.es.us-west-1.aws.found.io/';
  const date = dateFormatter(new Date());
  const brand = DeviceInfo.getBrand(); // 디바이스 브랜드 명
  const model = DeviceInfo.getModel(); // 디바이스 모델 명
  const service = 'dev'; // dev, staging, production으로 구분되어야 함
  const index = `lofi-${service}-app-${date}/`;
  const config = {
    headers: {
      Authorization:
        'apikey MjhPRTlZRUJLd3l1YnJtX3FIZTE6XzlPRmlvNGpSb2lIZGN3U1FWaWpiZw==',
    },
  };
  const body = {
    // type: 'iPhone13 Pro', //기기 종류
    type: `${brand} ${model}`,
    userId: 'intellectus', //유저명
    screenName: 'Pods', //현재 스크린명
    timeOnScreen: 33.21, //스크린 내 체류 시간
    '@timestamp': new Date().toISOString(), // 시간 ISO8601 ( ex: 2022-07-15T15:34:55Z )
    '@version': '0.0.1', // 현재 앱 버전
    walletStatus: {
      //지갑 상태
      LoFi: 1.49574,
      Buzz: 16.4827,
    },
    eventName: 'PodClick', //이벤트 종류
    eventType: 'Click', //[Scroll Down, Click, Swipe, ...]
    //Optional
    eventDetail: {
      podId: 1827374,
      price: 44.74,
      rarity: 'Legendary',
    },
  };

  // console.log(index);

  await axios
    .post(`${BASE_URL}${index}_doc`, body, config)
    .then(res => {
      console.log(res.data);
      Alert.alert('Api called!', body.toString());
    })
    .catch(err => {
      console.error(`API/POST_LOG error! ${err}`);
      throw err;
    });
};
