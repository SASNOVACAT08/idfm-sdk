import { IdLine } from '../types/idLine.js';

export interface LineReportOptionsQuery {
  since?: string;
  until?: string;
  count?: number;
  depth?: number;
  forbidden_uris?: string[];
  disable_geojson?: boolean;
}

export class Api {
  private url = 'https://prim.iledefrance-mobilites.fr/marketplace/navitia/line_reports'
  public apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private getOptionsQuery(options?: LineReportOptionsQuery) {
    const optionsQuery = {
      since: options.since,
      until: options.until,
      count: options.count?.toString(),
      depth: options.depth?.toString(),
      forbidden_uris: options.forbidden_uris?.join(','),
      disable_geojson: options.disable_geojson?.toString(),
    }
    Object.keys(optionsQuery).forEach(key => optionsQuery[key] === undefined ? delete optionsQuery[key] : {});
    return new URLSearchParams(optionsQuery)
  }

  getAdditionalUri(idLine: IdLine) {
    return `lines/${idLine}`;
  }

  async getAllLineReports(options?: LineReportOptionsQuery) {
    const url = `${this.url}/coverage/fr-idf/line_reports`;
    const query = this.getOptionsQuery(options);
    const result = await fetch(`${url}?${query}`, {
      headers: {
        apiKey: this.apiKey
      },
    });
    return result.json();
  }

  async getLineReports(additionalUri: string, options?: LineReportOptionsQuery) {
    const url = `${this.url}/coverage/fr-idf/${additionalUri}/line_reports`;
    const query = this.getOptionsQuery(options);
    const result = await fetch(`${url}?${query}`, {
      headers: {
        apiKey: this.apiKey
      }
    });
    return result.json();
  }
}