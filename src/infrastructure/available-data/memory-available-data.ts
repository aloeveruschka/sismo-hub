import { AvailableDataStore, AvailableData } from "topics/attester";

export class MemoryAvailableDataStore extends AvailableDataStore {
  protected _store: AvailableData[] = [];

  async all(): Promise<AvailableData[]> {
    return this._store;
  }

  async save(availableData: AvailableData): Promise<void> {
    this._store.push(availableData);
  }
}