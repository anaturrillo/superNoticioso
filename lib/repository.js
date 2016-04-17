'use strict';

module.exports = function () {
  let textos = [];

  this.getAll = function () {
    return textos;
  };

  this.add = function (article) {
    if((article.role && article.category) || article.every(e => e.role && e.category)){
      textos = textos.concat(article);
    }
  };
  
  this.filterByRole = function (role) {
    return textos.filter(e => e.role == role);
  };

  this.filterByCategory = function (category) {
    return textos.filter(e => e.category == category);
  };
  
  this.remove = function (article) {
    textos = textos.filter(e => e != article);
  }

};