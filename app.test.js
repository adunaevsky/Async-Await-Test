const app = require('./app.cjs');

  test('my main async function', async ()=>{
      var result = await app.main();
      expect(result).toContain('Aquaman');
      expect(Array.isArray(result)).toBeTruthy();
  });

  test('getMovieList for 2015', async ()=>{
      var result = await app.getMovieList(2015);
      expect(Array.isArray(result)).toBeTruthy();
      expect(typeof result[0]).toMatch(/string/);
  });

  test('getMovieList for 2010', async ()=>{
      var result = await app.getMovieList(2010);
      expect(Array.isArray(result)).toBeTruthy();
      expect(typeof result[0]).toMatch(/string/);
  });

  test('getMovieList for 2018', async ()=>{
      var result = await app.getMovieList(2018);
      expect(Array.isArray(result)).toBeTruthy();
      expect(typeof result[0]).toMatch(/string/);
  });

  test('getMovieList for 2020', async ()=>{
      var result = await app.getMovieList(2020);
      expect(result).toMatch('No results found');
      expect(typeof result).toMatch(/string/);
  });