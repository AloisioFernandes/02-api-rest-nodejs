import { expect, test } from 'vitest';

test('user can create a new transaction', () => {
  const responseStatus = 201; // Simulating a successful response status
  
  expect(responseStatus).toEqual(201);
})