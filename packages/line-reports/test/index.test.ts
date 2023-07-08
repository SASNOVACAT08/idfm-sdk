import { describe, it, expect } from 'vitest';
import { Api } from '../src/api';

const { API_KEY } = process.env;

describe('test', () => {
  it('should be ok', async () => {
    const api = new Api(API_KEY || '');
    const data = await api.getLineReports();
    console.log(data.disruptions[0].messages); 
  });
})