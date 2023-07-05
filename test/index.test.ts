import { describe, it, expect } from 'vitest';
import { Api } from '../src/api';

describe('test', () => {
  it('should be ok', async () => {
    const api = new Api('');
    const data = await api.getLineReports();
    console.log(data); 
  });
})