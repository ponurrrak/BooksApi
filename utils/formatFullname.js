module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  const data = fullName.trim().split(' ');
  if(data.length !== 2) {
    return 'Error';
  } else {
    const [ firstName, lastName ] = data;
    return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  }
};
