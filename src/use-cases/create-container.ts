import { Extentions, FileSystem } from 'file-system';
import { component, style, container, index } from 'templates';
import { UseCase } from "./use-case";

export class CreateContainerUseCase extends UseCase {
  protected fs: FileSystem;
  constructor(name: string) {
    super();
    this.fs = new FileSystem(name);
  }

  public async run(): Promise<void> {
    await this.fs.createDirectory();
    await this.fs.createFile({
      extention: Extentions.TS,
      container: true,
      template: container,
    });
    await this.fs.createFile({
      extention: Extentions.TSX,
      template: component,
    });
    await this.fs.createFile({
      extention: Extentions.TS,
      name: 'index',
      template: index,
    });
    await this.fs.createStylesModuleFile({
      extention: Extentions.SCSS,
      template: style,
    });
  }
}