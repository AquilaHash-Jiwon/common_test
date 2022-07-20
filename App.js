import React, {useDebugValue, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  AppState,
  Alert,
} from 'react-native';
// import { run } from './src/ElasticSearch';
import DeviceInfo from 'react-native-device-info';
import {SKS} from './src/util/SecureKeyStore/event';
import ShakingAnimation from './src/assets/ShakingAnimation';
import {touchlog} from './src/util/TouchEventLogTest/event';
import * as API from './src/util/ElasticSearch';
import codePush from 'react-native-code-push';
import MainScreen from './src/screen/MainScreen';
import CodePushLoadingScreen from './src/screen/CodePushLoadingScreen';

function App() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(1);
  const [version, setVersion] = useState('0.0.1');

  //Secure Key Store
  const key = 'test key';
  const value = 'test value';
  SKS.SET({key, value});
  SKS.GET({key});
  SKS.REMOVE({key});

  useEffect(() => {
    const staging = AppState.addEventListener('change', state => {
      if (state === 'active') {
        setIsUpdating(true);
        codePushSync();
      }
    });

    return () => {
      staging.remove();
    };
  }, []);

  const codePushSync = () => {
    codePush.sync(
      {
        updateDialog: {
          //업데이트 다이얼로그 설정
          title: '새로운 업데이트가 존재합니다.',
          // Force Update
          mandatoryContinueButtonLabel: '업데이트 하기',
          mandatoryUpdateMessage:
            '새로운 기능 제공을 위해 앱이 업데이트 됩니다.',
          // Update
          optionalUpdateMessage: '지금 업데이트하시겠습니까?',
          optionalIgnoreButtonLabel: '나중에',
          optionalInstallButtonLabel: '업데이트',
        },
        installMode: codePush.InstallMode.IMMEDIATE, //즉시 업데이트
      },
      status => {
        switch (status) {
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            setStatusMessage('Downloading package.');
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            setStatusMessage('Installing update.');
            break;
        }
      },
      ({receivedBytes, totalBytes}) => {
        /* Update download modal progress */
        setProgress(receivedBytes);
        setMaxProgress(totalBytes);
      },
    );
    codePush.getUpdateMetadata().then(update => {
      setVersion(`${update.appVersion} ${update.label}`);
    });
    setIsUpdating(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {!isUpdating ? (
        <MainScreen
          isUpdating={isUpdating}
          statusMessage={statusMessage}
          progress={progress}
          maxProgress={maxProgress}
          version={version}
        />
      ) : (
        <CodePushLoadingScreen
          statusMessage={statusMessage}
          progress={progress}
          maxProgress={maxProgress}
        />
      )}
    </SafeAreaView>
  );
}

export default codePush({checkFreQuency: codePush.CheckFrequency.MANUAL})(App);
