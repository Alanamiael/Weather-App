export const characteristics = [
  'temp_c',
  'feelslike_c',
  'pressure_mb',
  'humidity',
  'wind_kph',
];
export const formatDayTime = (formattedTime: string) => {
  if (formattedTime === '2:00') {
    return 'Night';
  }
  if (formattedTime === '8:00') {
    return 'Morning';
  }
  if (formattedTime === '14:00') {
    return 'Day';
  }
  return 'Evening';
};
