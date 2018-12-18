const functions = require('./functions');


test('ADD 2+2 = 4 ', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('ADD 2+2 Not Equal 4 ', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('IsNull ', () => {
  expect(functions.isNulll()).toBe(null);
});

test('Should be falsy ', () => {
  expect(functions.checkValue(0)).toBeFalsy();
  //.not = toBetruthy
});

// toBe is not working on objects we use toEqual
test('Should be falsy ', () => {
  expect(functions.createUser()).toEqual({ firstname: 'Abdelhedi', lastnaem: 'Hlel' });
});

// test Numbers
test('Should Be under 1600', () => {
  const x = 800;
  const y = 700;
  expect(x + y).toBeLessThan(1600)
})

//Test Regex
test('There is no I in Team', () => {
  expect('team').not.toMatch(/I/);
})


//Wroking with Arrays
test('Admin should be in usernames', () => {
  const usernames = ['normal_user', 'super_user', 'admin'];
  expect(usernames).toContain('admin')
})

// //Working with async data
// test('User fetched name should be Leanne Graham', async () => {
//   // expect.assertions(1);
//   const data = await functions.searchUser();
//   expect(data.name).toEqual('Leanne Graham');

// })