import { request } from '../../utils/helpers/api.helper';
import fsExtra from 'fs-extra';

describe('Perform API testing', () => {
  test('Get All users location and write result to the file', async () => {
    const { status, data } = await request('character');
    fsExtra.writeFileSync('./respon.json', JSON.stringify(data));
    expect(status).toEqual(200);
  });

  test('Get URL of each origin', async () => {
    const { status } = await request('character');
    const fileContent = await fsExtra.readFileSync('./respon.json');
    const jsonData = JSON.parse(fileContent);
    for (let i = 0; i < jsonData.results.length; i++) {
      const { data } = await request(`character/${i+1}`);
      const actualUrl = data.location.url;
      expect(jsonData.results[i].location.url).toEqual(actualUrl);
    }
    expect(status).toEqual(200);
  });
});
