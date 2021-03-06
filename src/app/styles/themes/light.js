import { colors } from '../tokens/colors';
import { breakpoints } from '../tokens/breakpoints';
import { shapes } from '../tokens/shape';
import { typography } from '../tokens/typography';

export const unit = 8;

export const theme = {
  title: 'light',

  unit,

  colors: {
    primary: {
      main: colors.pink[500],
    },
    secundary: {
      disabled: colors.blue[200],
      main: colors.blue[500],
    },
    text: {
      main: colors.gray[400],
      base: colors.gray[400],
      sub: colors.gray[800],
      aux: colors.gray[300],
      warning: colors.red[500],
      contrast: colors.white,
    },
    title: {
      base: colors.gray[800],
      aux: colors.indigo[800],
      contrast: colors.white,
    },
    input: {
      base: colors.gray[900],
      placeholder: colors.gray[600],
      line: colors.pink[500],
      icons: colors.pink[500],
      actionIcons: colors.gray[500],
      contrast: colors.white,
    },
    surface: {
      base: colors.white,
      constrast: '',
      background: colors.gray[200],
      banner: colors.green[500],
      input: colors.gray[800],
      gradiente: [
        colors.pink[500],
        colors.blue[800],
      ],
    },
  },
  shapes,
  breakpoints,
  typography,
};
