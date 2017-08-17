import { environment } from '../environments/environment'

export class AppSettings {
    public static get API_ENDPOINT(): string { return 'https://api.quietthyme.com/' + environment.apiVersion; }

    public static get CATALOG_ENDPOINT(): string { return 'https://catalog.quietthyme.com/' + environment.apiVersion; }

}
