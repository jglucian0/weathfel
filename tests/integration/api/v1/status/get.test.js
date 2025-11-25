test('GET to /api/v1/status should response 200', async () => {
  const resonse = await fetch("http://localhost:3000/api/v1/status")
  expect(resonse.status).toBe(200);
})