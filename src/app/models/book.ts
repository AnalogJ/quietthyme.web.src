export class BookModel {
  id: string;
  user_id: number;

  storage_type: string;
  storage_size: number;
  storage_identifier: string;
  storage_filename: string;
  storage_format: string;

  title: string;
  average_rating: number;
  short_summary: string;
  publisher: string;
  published_date: string;
  tags: string[];
  authors: string[];
  last_modified: string;

  series_name: string;
  series_number: string;

  isbn: string;
  isbn10: string;

  drm_type: string;

  calibre_id: string;
  amazon_id: string;
  google_id: string;
  goodreads_id: string;
  ffiction_id: string;
  barnesnoble_id: string;

  cover: string;
}
