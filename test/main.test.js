const chai = require('chai');
const should = chai.should();

const Repository = require('../lib/repository');
const Article = require('../lib/article');
const Role = require('../lib/role');
const Category = require('../lib/category');
const User = require('../lib/user');

const notImplementedYet = 'Módulo aún no implementado';

describe("Como Repository de textos quiero", function(){

  it("ver que no tenga articulos", function(){
    const repo = new Repository();

    repo.getAll().should.be.eql([]);
  });

  it("agregar un texto", function(){
    const repo = new Repository();
    const role = new Role();
    const article = new Article(role, new Category());
    repo.add(article);

    repo.getAll().should.be.eql([article]);
  });
  
  it("agregar multiples textos", function () {
    const repo = new Repository();
    const articleUno = new Article(new Role(), new Category());
    const articleDos = new Article(new Role(), new Category());

    repo.add([articleDos, articleUno]);

    repo.getAll().should.be.eql([articleDos, articleUno]);
  });

  it("ver articulos filtrados por rol", function(){
    const repo = new Repository();
    const role = new Role();
    const article = new Article(role, new Category());
    repo.add(article);

    repo.filterByRole(role).should.be.eql([article]);
  });

  it("ver articulos filtrados por categoria", function(){
    const repo = new Repository();
    const role = new Role();
    const category = new Category();

    const article = new Article(role, category);

    repo.add(article);

    repo.filterByCategory(category).should.be.eql([article]);
  });

  it("eliminar un articulo", function(){
    const repo = new Repository();
    const article = new Article(new Role(), new Category());
    repo.add(article);
    repo.remove(article);

    repo.getAll().should.be.eql([]);
  });

  it("eliminar un articulo de varios", function(){
    const repo = new Repository();
    const article = new Article(new Role(), new Category());
    const articleDos = new Article(new Role(), new Category());
    const articleTres = new Article(new Role(), new Category());
    repo.add([article, articleDos, articleTres]);
    repo.remove(articleDos);

    repo.getAll().should.be.eql([article, articleTres]);
  });
});

describe("Como Usuario anonimo quiero", function(){

  it("ver un listado de textos publicados", function() {
    const repo = new Repository();
    const publico = new Role();
    const articleUno = new Article(publico, new Category());
    const articleDos = new Article(publico, new Category());
    const articleTres = new Article(publico, new Category());

    repo.add([articleUno, articleDos, articleTres]);
    const user = new User(publico, repo);
    user.getReads().should.be.eql([articleUno, articleDos, articleTres]);
  });

  it("ver un listado de textos, excluyendo los que no son de mi rol", function(){
    throw notImplementedYet
  });


  it("ver un articulo en particular", function(){
    throw NotImplemented;
  });
});

describe("Como Usuario Escritor quiero", function(){
  it("crear un articulo", function() {
    throw notImplementedYet
  });

  it("crear un articulo y que el usuario publico NO lo pueda leer", function() {
    throw notImplementedYet
  });

  it("publicar un articulo y un usuario publico va a poder verlo", function() {
    throw notImplementedYet
  });
});

describe("Como Usuario Logueado quiero", function(){
  it("crear un articulo", function() {
    throw NotImplemented;
  });
});