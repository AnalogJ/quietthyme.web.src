import { environment } from '../environments/environment'

export class AppSettings {
    public static get API_ENDPOINT(): string { return 'https://api.capsulecd.com/' + environment.apiVersion; }

}
