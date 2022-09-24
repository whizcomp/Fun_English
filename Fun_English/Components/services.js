import { Alert, Platform } from 'react-native'
import PushNotification from "react-native-push-notification";

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log('LOCAL NOTIFICATION ==>')
  },
  popInitialNotification: true,
  requestPermissions:  Platform.OS === 'ios'
})
PushNotification.createChannel(
  {
    channelId: 'channel-id', // (required)
    channelName: 'Fun_English', // (required)
    channelDescription: 'have fun learning English', // (optional) default: undefined.
    playSound: true, // (optional) default: true // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`channel '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);
export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: "channel-id",
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'English new Words',
    title: 'Fun_English',
    message: 'The new Word',
    bigPictureUrl: "https://www.example.tld/picture.jpg", // (optional) default: undefined
  bigLargeIcon: "ic_launcher", // (optional) default: undefined
  bigLargeIconUrl: "https://www.example.tld/bigicon.jpg", 
    picture: "https://www.example.tld/picture.jpg",
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]'
  })
}
export const LocalNotificationSchedule = () => {

  PushNotification.localNotificationSchedule({
    channelId: "channel-id",
    autoCancel: true,
    date: new Date(Date.now() + 240 * 1000),
    bigText:
      'Click to view the word of the day',
    subText: 'New Word',
    title: 'Fun',
    message: 'The word of the day is...',
    bigPictureUrl: "https://www.example.tld/picture.jpg", // (optional) default: undefined
  bigLargeIcon: "ic_launcher", // (optional) default: undefined
  bigLargeIconUrl: "https://www.example.tld/bigicon.jpg", 
    picture: "https://www.example.tld/picture.jpg",
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["View"]',
    repeatType: 'day',
    repeatTime: 1,
  })
}
export const CancelNotification = () => {
  PushNotification.cancelAllLocalNotifications()
}