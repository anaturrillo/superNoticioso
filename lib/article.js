module.exports = function (role, category) {
  this.role = role;
  this.category = category;
  this.setRole = function (role) {
    this.role = role;
  };
  this.getRole = function () {
    return this.role;
  };

  this.setCategory = function (category) {
    this.category = category; 
  };
  this.getCategory = function () {
    return this.category;
  }
};