// костыль, пока у react-notifications не появится поддержки TS

declare module 'react-notifications' {
  const NotificationContainer: any;
  const NotificationManager: any;
}
