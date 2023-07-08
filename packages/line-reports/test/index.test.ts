import { describe, it } from 'vitest';
import { Api } from '../src/api';
import { IdLineMetro } from '../types/idLine';

const { API_KEY } = process.env;

describe('test', () => {
  it('should be ok', async () => {
    const api = new Api(API_KEY || '');
    const metro8 = api.getAdditionalUri(IdLineMetro.M8);
    const data = await api.getLineReports(metro8, {
      depth: 1
    });
    console.log(data);
  });
})