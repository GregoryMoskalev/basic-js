module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    let depth = 1 + Math.max(...arr.map((e) => this.calculateDepth(e.length === 0 ? [ 1 ] : e)));

    return depth;
  }
};
