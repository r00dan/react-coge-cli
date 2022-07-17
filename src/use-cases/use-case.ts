import { FileSystem } from 'file-system';

export abstract class UseCase {
  protected abstract fs: FileSystem;
  public abstract run(): Promise<void>;
  
}