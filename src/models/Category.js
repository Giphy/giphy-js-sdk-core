function Category(data) {
  /*	
  String String name;
  String String name_encoded;
  Media gif;
  Array subcategories;
  */
  //MANIPULATE FORMAT HERE IF NECESSARY

  if (data["subcategories"]) {
    data["subcategories"] = Category(data["subcategories"])
  }
  return data
}

module.exports = Category