function isDate(d) {
  // let date = new Date();
  return ((d instanceof Date) && !isNaN(d.valueOf()))
}
