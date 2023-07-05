export class Api {
  private url = 'https://prim.iledefrance-mobilites.fr/marketplace/navitia/line_reports'
  public apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getLineReports() {
    const url = `${this.url}/coverage/fr-idf/line_reports`;
    const result = await fetch(url, {
      headers: {
        apiKey: this.apiKey
      },
    });
    return result.json();
  }
}