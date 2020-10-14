const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity > MODERN_ACTIVITY) return false;
  if (sampleActivity <= 0) return false;
  if (typeof sampleActivity !== 'string') return false;
  if (!Number(sampleActivity)) return false;
  if (isNaN(Number(sampleActivity))) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;

  const date = Math.log(MODERN_ACTIVITY / sampleActivity) / k;

  return Math.ceil(date);
};
