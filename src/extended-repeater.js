module.exports = function repeater(str, options) {
  let {
    repeatTimes = 0,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = '|'
  } = options;
  let sep = [];
  let result = [];

  str = String(str);
  addition = String(addition);

  if (!repeatTimes) return str + addition;

  for (let i = 0; i < additionRepeatTimes; i++) {
    sep.push(addition);
  }

  sep = additionRepeatTimes ? sep.join(additionSeparator) : addition;

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + sep);
  }

  return result.join(separator);
};
