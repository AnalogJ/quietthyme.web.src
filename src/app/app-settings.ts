import { environment } from '../environments/environment';

//CONSTANTS in any other application
export class AppSettings {
  public static get API_ENDPOINT(): string {
    return 'https://api.quietthyme.com/' + environment.apiVersion;
  }

  public static get CATALOG_ENDPOINT(): string {
    return 'https://catalog.quietthyme.com/' + environment.apiVersion;
  }

  public static get KLOUDLESS_STORAGE_TYPES(): string[] {
    return ['box', 'dropbox', 'skydrive', 'gdrive'];
    // return ['box', 'dropbox', 'skydrive']; //TODO: disable google drive, events missing since Aug 22.
  }

  public static get SUPPORTED_STORAGE_TYPES(): string[] {
    return AppSettings.KLOUDLESS_STORAGE_TYPES.concat(['quietthyme']);
  }

  public static get SUPPORTED_BOOK_TYPES(): any {
    return ['.azw3', '.azw', '.cbr', '.cbt', '.cbz','.chm','.djvu','.doc','.docx','.epub','.ibooks','.kf8','.lrf','.lit','.mobi','.pdf','.prc','.rtf','.txt']
  }

  public static get STORAGE_DETAILS(): any {
    return {
      quietthyme: {
        display_name: 'QuietThyme',
        details: 'Ebook storage that grows with you. Unlimited books in the cloud',
        blackhole_path: null,
      },
      box: {
        display_name: 'Box',
        details:
          'Manage content across your business; from simple file sharing to building custom apps.',
        blackhole_path: 'QuietThyme/blackhole',
      },
      dropbox: {
        display_name: 'Dropbox',
        details:
          'A file backup, sync, and sharing solution used by more than 500 million users.',
        blackhole_path: 'Apps/QuietThyme/blackhole',
      },
      skydrive: {
        display_name: 'OneDrive',
        details:
          'Get to your files and photos from anywhere, on any device. Share and work together with anyone in your work and life.',
        blackhole_path: 'QuietThyme/blackhole',
      },
      gdrive: {
        display_name: 'Google Drive',
        details:
          'Get access to files anywhere through secure cloud storage and file backup for your photos, videos, files and more with Google Drive.',
        blackhole_path: 'QuietThyme/blackhole',
      },
    };
  }
}
