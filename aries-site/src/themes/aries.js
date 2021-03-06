import { hpe } from 'grommet-theme-hpe';
import { deepMerge, normalizeColor } from 'grommet/utils';

export const aries = deepMerge(hpe, {
  defaultMode: 'dark',
  layer: {
    background: 'background',
  },
  checkBox: {
    toggle: {
      color: {
        dark: hpe.global.colors['text-strong'].dark,
        light: hpe.global.colors['text-strong'].dark,
      },
      background: 'background-back',
      extend: ({ checked, theme }) => `
          border: none;
          ${checked && `background-color: ${normalizeColor('brand', theme)};`}
      `,
      knob: {
        extend: ({ theme }) => `
          border: 2px solid ${theme.global.colors.text.light};
          top: 0px;
        `,
      },
    },
  },
  rangeInput: {
    thumb: {
      color: {
        dark: 'text-strong',
        light: hpe.global.colors['text-strong'].dark,
      },
      extend: ({ theme }) => `
        border: 2px solid ${theme.global.colors.text.light};
      `,
    },
    track: {
      extend: ({ max, theme, value }) => {
        const lowerTrack = normalizeColor('brand', theme);
        const upperTrack = normalizeColor('background-contrast', theme);
        const trackPoint = `${(value / max) * 100}%`;

        return `background: linear-gradient(
          to right, 
          ${lowerTrack}, 
          ${lowerTrack} ${trackPoint},
          ${upperTrack} ${trackPoint},
          ${upperTrack}
        );`;
      },
    },
  },
  anchor: {
    color: 'brand',
    textDecoration: 'none',
    fontWeight: 500,
    hover: {
      textDecoration: 'underline',
    },
  },
});

export const { colors } = aries.global;
