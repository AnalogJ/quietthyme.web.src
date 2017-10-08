export class StorageStatus {
  free_space: number;
  total_space: number;
  prefix: string; // `quietthyme://`
  device_name: string; // `quietthyme`
  storage_id: string; // `quietthyme` or UUID/credential_id
  storage_type: string; // `quietthyme`
  location_code: string; // `main`, `A` or `B`
}
