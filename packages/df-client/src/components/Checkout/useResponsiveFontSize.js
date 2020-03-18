import { useEffect, useState } from 'react';

export default function useResponsiveFontSize() {
  const [fontSize, setFontSize] = useState();

  useEffect(() => {
    if (window !== undefined) {
      const getFontSize = () => (window.innerWidth < 450 ? '16px' : '18px');
      setFontSize(getFontSize);
      const onResize = () => {
        setFontSize(getFontSize());
      };

      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
      };
    }
  });

  return fontSize;
}
