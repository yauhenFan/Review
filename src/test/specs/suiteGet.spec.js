import fsExtra from 'fs-extra';
import { RickMortyHelpper } from '../../utils/helpers/rickMorty.helper';

const rickMortyHelper = new RickMortyHelpper()

describe('Perform API testing', () => {
  test('Get All users location and write result to the file', async () => {
    const { status, data } = await rickMortyHelper.getAllCharacters();
    console.log(data);
    fsExtra.writeFileSync('./respon.json', JSON.stringify(data));
    expect(status).toEqual(200);
  });
});
