const chai = require('chai');
const should = chai.should;

const Repository = require('../lib/repository')

const notImplementedYet = 'Módulo aún no implementado';

describe("Como Repository de textos quiero", function(){

  it("Ver que no tenga articulos", function(){
    const repo = new Repository();
    repo.getAll().length.should.be.equal(0);
  });

  it("Agregar textos al repositorio", function(){
    throw notImplementedYet
  });

  it("Ver articulos filtrados por rol", function(){
    throw notImplementedYet
  });

  it("Ver articulos filtrados por categoria", function(){
    throw notImplementedYet
  });

  it("Eliminar un articulo", function(){
    throw notImplementedYet
  });

  it("Eliminar un articulo de varios", function(){
    throw notImplementedYet
  });
});

describe("Como Usuario anonimo quiero", function(){

  it("ver un listado de textos publicados", function() {
    throw notImplementedYet
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