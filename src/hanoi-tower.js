module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  const turns = 2 ** diskNumber - 1;
  const seconds = Math.floor(turns * 3600 / turnsSpeed);

  return { turns, seconds };
};
