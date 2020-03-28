const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () =>{
    await connection.destroy();
  })

  it('should be able to create a new ONG',async () => {
    const response = await request(app)
    .post('/ongs')
    //caso tenha que passar um header  .set('Authorization','asd')
    .send({
        name: "Cotia e VGP Solidaria",
        email: "contato@contato.com",
        whatsapp: "11999995555",
        city: "Cotia",
        uf: "SP"
    });

    //console.log(response.body);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});