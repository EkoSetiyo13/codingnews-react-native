import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  console.log(dim, dim.width)
  return dim.height >= dim.width;
};

export default function useOrientation() {
  // State to hold the connection status
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
  );

  console.log(isPortrait())

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

    Dimensions.addEventListener('change', callback);

    return () => {
      Dimensions.removeEventListener('change', callback);
    };
  }, []);

  return orientation;
}
