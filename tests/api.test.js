const request = require('supertest');
const app = require('../src/index');

describe('GET /api/contacts', ()=>{
    it('respond with json containing a list of all contacts', (done)=>{
        request(app)
        .get('/api/contacts')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200)
        .end((err)=>{
            if(err) return done(err);
            done();
        })
    });
});

describe('GET /api/contacts/:id', ()=>{
    it('respond with json containing a single user', (done)=>{
        request(app)
        .get('/api/contacts/601eb055db7176234c3f2d0f')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200)
        .end((err)=>{
            if(err) return done(err);
            done();
        })
    });

    it("response with json 'ID is not correct' when the ID is incorrect", (done)=>{
        request(app)
        .get('/api/contacts/601eb055db7176')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(404)
        .expect('"ID is not correct"')
        .end((err)=>{
            if(err) return done(err);
            done();
        })
    });
});

describe('POST /api/contacts/',()=>{
    it('respond with 200 created',done=>{
        const data = {
            name:'Mayra',
            lastname:'Knovilav',
            address:'ul. Lesnaya d. 5, kv. 176 , MOKVA',
            phone:'98674321'
        }
        request(app)
        .post('/api/contacts/')
        .send(data)
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200)
        .end(err=>{
            if(err)return(done(err));
            done();
        })
    });
    it('respond with 400 not created',done=>{
        const data={}
        request(app)
        .post('/api/contacts/')
        .send(data)
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(400)
        .end(err=>{
            if(err)return(done(err));
            done();
        })
    })

})
