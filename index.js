module.exports = function parser(sort) {
  let order = [];
  for (let field of sort.split(",")) {
    if (field.startsWith("-")) {
      order.push([field.substring(1), "DESC"]);
    } else {
      order.push([field, "ASC"]);
    }
  }
  return order;
};
