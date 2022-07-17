import { Extentions, FileSystem } from 'file-system';
import { component, style } from 'templates';
import { UseCase } from "./use-case";

export class CreateComponentUseCase extends UseCase {
  protected fs: FileSystem;
  constructor(name: string) {
    super();
    this.fs = new FileSystem(name);
  }

  public async run(): Promise<void> {
    await this.fs.createDirectory();
    await this.fs.createFile({
      extention: Extentions.TSX,
      template: component,
    });
    await this.fs.createFile({
      extention: Extentions.SCSS,
      template: style,
    });
  }
}