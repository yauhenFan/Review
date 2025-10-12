import fsExtra from 'fs-extra';
import { RickMortyHelpper } from '../../utils/helpers/rickMorty.helper';

const rickMortyHelper = new RickMortyHelpper()

describe('Verify contry contains correct location',() => {
    let fileContent, jsonData
       fileContent = fsExtra.readFileSync('./respon.json');
       jsonData = JSON.parse(fileContent);
     test('Get URL of each origin', async () => {
        for (let i = 0; i < jsonData.results.length; i++) {
          const { status, data } = await rickMortyHelper.getAllCharacters(i+1);
          const actualUrl = data.location.url;
          expect(status).toEqual(200);
          expect(jsonData.results[i].location.url).toEqual(actualUrl);
        }
      });
})