interface AstroProps {
  is_moon_up: boolean;
  is_sun_up: boolean;
  moon_illumination: boolean;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

interface ConditionProps {
  code: number;
  icon: string;
  text: string;
}
interface DayProps {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: ConditionProps;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: boolean;
  daily_will_it_snow: boolean;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}

interface HourProps {
  chance_of_rain: number;
  chance_of_snow: number;
  cloud: number;
  condition: ConditionProps;
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: boolean;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  time: string;
  time_epoch: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  will_it_rain: boolean;
  will_it_snow: boolean;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}
export interface FullDayProps {
  astro: AstroProps;
  date: string;
  date_epoch: number;
  day: DayProps;
  hour: HourProps[];
}

export interface TodayWeatherProps {
  location: string;
  astro: AstroProps;
  cloud: number;
  condition: ConditionProps;
  currentTime: string;

  feelslike_c: number;

  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  hour: HourProps[];
  humidity: number;
  is_day: boolean;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}
export interface WeatherProps {
  weekWeatherData: FullDayProps[];
  todayWeatherData: TodayWeatherProps;
}
