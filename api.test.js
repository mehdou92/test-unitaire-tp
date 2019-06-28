const api = require('./api.js');

const dataRoom = {
  id: Math.floor((Math.random() * 1000000) + 1),
  name: 'testJest',
  place: 15,
  batiment: 'B'
};

const dataFormateur ={
    id: Math.floor((Math.random() * 1000000) + 1),
    name: 'formateur jest test',
    firstName: 'test',
    lastName: 'jest',
    birthday: '121212',
    spe1: 'test',
    spe2: 'test2',
    mail: 'testunitaire@hotmail.com'
}

test('Test Create room', async () => {

  const result = await api.createRoom(dataRoom);

  expect(result).toBeDefined();
  expect(result.status).toEqual(201);

});

test('Test Get Room', async () => {

  const result = await api.getRoom(dataRoom.id);

  expect(result).toBeDefined();
  expect(result.status).toEqual(200);

  expect(JSON.stringify(result.data)).toEqual(JSON.stringify(dataRoom));
});

test('Test Get Rooms', async () => {

  const result = await api.getRooms();
  
  expect(result).toBeDefined();
  expect(result.status).toEqual(200);

});

test('Test Update Room', async () => {

  const newRoom = {
    name: 'testJestUpdated',
    place: 20,
    batiment: 'C',
  }
  
  const result = await api.updateRoom(dataRoom.id, newRoom);

  expect(result).toBeDefined();
  expect(result.status).toEqual(200);

  const { data } = result;

  expect(data).toBeDefined();
  expect(data.name).toEqual(newRoom.name);

})

test('Test Delete Room', async () => {
  
  const result = await api.deleteRoom(dataRoom.id);

  expect(result).toBeDefined();
  expect(result.status).toEqual(200);

})

test('Create formateur ', async () => {
    const result = await api.createFormateur(dataFormateur);

    expect(result).toBeDefined();
    expect(result.status).toEqual(201);
})


// api.deleteRoom(1)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.error(error);
//   })


// api.createRoom("testapi", 23, "7")
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.error(error);
// })