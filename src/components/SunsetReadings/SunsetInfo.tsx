import { useMemo } from 'react';

interface TwentyFourFormatType {
  [index: number]: string;
}

export const twentyFourFormat: TwentyFourFormatType = [
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
];

interface SunsetTerms {
  currentTime: string;
  sunrise: string;
  sunset: string;
}

// type SunsetTerms = () => SunsetResult;

export const useSunsetTerms = ({
  currentTime,
  sunrise,
  sunset,
}: SunsetTerms) => {
  const time = useMemo(
    () => ({
      currentTime: +currentTime,
      sunriseTime: +sunrise[1],
      sunsetTime: +sunset[1],
      twentyFourFormat: +twentyFourFormat[+sunrise[1]],
    }),
    [currentTime, sunrise, sunset],
  );

  const sunAnimation = useMemo(() => {
    if (sunset && sunrise && currentTime) {
      const timeDifference = time.currentTime - time.sunriseTime;

      switch (true) {
        case timeDifference <= 0:
          return {
            sun: {
              bottom: '-10px',
              left: '11px',
            },
            backgrnd: {
              width: '0%',
            },
          };
        case timeDifference >= time.twentyFourFormat:
          return {
            sun: {
              bottom: '-11px',
              left: '218px',
            },
            backgrnd: {
              width: '100%',
            },
          };
        case timeDifference < 6:
          return {
            sun: {
              bottom: '40px',
              left: '47px',
            },
            backgrnd: {
              width: '20%',
            },
          };
        case timeDifference === 6:
          return {
            sun: {
              bottom: '63px',
              left: '115px',
            },
            backgrnd: {
              width: '50%',
            },
          };
        default:
          return {
            sun: {
              bottom: '47px',
              left: '170px',
            },
            backgrnd: {
              width: '75%',
            },
          };
      }
    }

    return {
      sun: {
        bottom: '-10px',
        left: '11px',
      },
      backgrnd: {
        width: '0%',
      },
    };
  }, [sunset, sunrise, currentTime, time]);

  return { sunAnimation };
};
