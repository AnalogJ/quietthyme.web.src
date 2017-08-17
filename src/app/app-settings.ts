import { environment } from '../environments/environment'

//CONSTANTS in any other application
export class AppSettings {
    public static get API_ENDPOINT(): string { return 'https://api.quietthyme.com/' + environment.apiVersion; }

    public static get CATALOG_ENDPOINT(): string { return 'https://catalog.quietthyme.com/' + environment.apiVersion; }

    public static get KLOUDLESS_STORAGE_TYPES(): string[] {
        return ['box', 'dropbox', 'skydrive', 'gdrive']
    }

    public static get SUPPORTED_STORAGE_TYPES(): string[] {
        return AppSettings.KLOUDLESS_STORAGE_TYPES.concat(['quietthyme'])
    }
}
