export const touchlog = (nativeEvent, timeStamp) => {
  const time = new Date(timeStamp);
  console.log('============Log============');
  console.log('touched!');
  console.log(`location: ${nativeEvent.locationX}, ${nativeEvent.locationY}`);
  console.log(`target: ${nativeEvent.target}`);
  console.log(`time stamp: ${time}`);
  console.log('===========================');
};
