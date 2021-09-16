
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose')


test("Task Test", async () => {
	                const response = await request(app).get('/tasks');
	                        console.log(response)
});
				afterAll( async () =>{
					        await mongoose.connection.close()
					    });
	
