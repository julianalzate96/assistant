export const formatTheDate = date => {
  let stringDate = date.split('T');
  let newDate = stringDate[0].split('-');
  return (`${newDate[2]}/${newDate[1]}/${newDate[0]}`);
};
