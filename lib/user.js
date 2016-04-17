module.exports = function(role, repository){
  this.role = role;
  this.repository = repository;
  this.articles = [];

  this.getReads = function () {
    return this.repository.filter(e => e.role == this.role);
  };
};