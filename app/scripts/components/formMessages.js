const messages = {
  missingValue: {
    checkbox: 'Este campo é obrigatório.',
    radio: 'Please select a value.',
    select: 'Please select a value.',
    'select-multiple': 'Please select at least one value.',
    default: 'Campo obrigatório.'
  },
  patternMismatch: {
    email: 'Preencha com um email válido.',
    url: 'Please enter a URL.',
    number: 'Please enter a number',
    color: 'Please match the following format: #rrggbb',
    date: 'Please use the YYYY-MM-DD format',
    time: 'Please use the 24-hour time format. Ex. 23:00',
    month: 'Please use the YYYY-MM format',
    default: 'Please match the requested format.'
  },
  outOfRange: {
    over: 'Please select a value that is no more than {max}.',
    under: 'Please select a value that is no less than {min}.'
  },
  wrongLength: {
    over:
      'Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.',
    under:
      'Please lengthen this text to {minLength} characters or more. You are currently using {length} characters.'
  }
};

export default messages;
