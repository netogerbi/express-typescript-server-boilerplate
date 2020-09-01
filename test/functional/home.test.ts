describe('API root endpoint', () => {
  it('should return the package.json version', async () => {
    const { body, status } = await global.testRequest.get('/');
    const { version, name } = require('../../package.json');
    expect(body).toEqual({ name, version });
    expect(status).toBe(200);
  });
});
