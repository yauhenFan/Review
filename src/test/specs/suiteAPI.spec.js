import { request } from '../../utils/helpers/api.helper';

describe('Perform API testing', () => {
  test('Get All users location', async () => {
    const { status, data } = await request('character');
    expect(status).toEqual(200);
  });

  test('Get URL of each origin', async () => {
    const { status, data } = await request('character');
    let arrID = [];
    let arrLocation = [];
    for (let key in data.results) {
      arrID.push(data.results[key].id);
      arrLocation.push(data.results[key].location.url);
    }

    for (let i = 0; i < arrID.length; i++) {
      const { data } = await request(`character/${arrID[i]}`);
      const actualUrl = data.location.url;
      expect(arrLocation[i]).toEqual(actualUrl);
    }
    expect(status).toEqual(200);
  });
});
