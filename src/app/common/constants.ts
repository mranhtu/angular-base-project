export const LANGUAGES = {
  VI: 'vi',
  EN: 'en'
};

export const CHARACTERS = {
  DOT: '.',
  COMMA: ',',
  SPACE: ' ',
};

export const CURRENCY_MASK = {
  CURRENT_CONFIG: {
    round: 0,
    pattern: 'separator.0',
    thousandSeparator: CHARACTERS.COMMA,
  },
  MOZ_CONFIG: {
    round: 0,
    pattern: 'separator.0'
  },
  PERU_CONFIG: {
    round: 2,
    pattern: 'separator.2'
  },
  EN_SEPARATOR: CHARACTERS.COMMA,
  VI_SEPARATOR: CHARACTERS.DOT,
  ES_SEPARATOR: CHARACTERS.COMMA
};
