module.exports = function createDreamTeam(arrayOfMembersName) {
  if (!Array.isArray(arrayOfMembersName)) return false;

  const arrayOfFirstLetters = [];

  arrayOfMembersName.forEach((name) => {
    if (typeof name === 'string') {
      name = name.trim();
      name = name[0].toUpperCase();
    } else {
      name = '';
    }
    arrayOfFirstLetters.push(name);
  });

  const sortedArrayOfFirstLetters = arrayOfFirstLetters.sort();
  const teamName = sortedArrayOfFirstLetters.join('');

  return teamName || false; //return false if teamName is empty(all members name are wrong)
};
