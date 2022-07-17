import fs from 'fs/promises';
import { firstLetterToUpperCase, __dirname } from "utils";

export enum Extentions {
  JS = '.js',
  JSX = '.jsx',
  TS = '.ts',
  TSX = '.tsx',
  CSS = '.css',
  SCSS = '.scss',
  SASS = '.sass',
}

interface CreateFileInput {
  extention: Extentions,
  name?: string,
  container?: boolean,
  template: (name: string) => string,
}

export class FileSystem {
  private dirName: string;

  constructor(name: string) {
    this.dirName = firstLetterToUpperCase(name);
  }

  private getCurrentDirectory(): string {
    return __dirname;
  }

  public async createFile({
    extention,
    template,
    container = false,
    name,
  }: CreateFileInput) {
    const fileName = name ? name : this.dirName + (container ? 'Container' : '');
    const file = `${this.getCurrentDirectory()}/${this.dirName}/${fileName}${extention}`;
    await fs.writeFile(file, template(this.dirName));
  }

  public async createDirectory(): Promise<void> {
    const directory = `${this.getCurrentDirectory()}/${this.dirName}`;
    await fs.mkdir(directory);
  }

  public async createStylesFile({
    name,
    template,
    extention
  }: CreateFileInput) {
    const fileName = `${name ? name : this.dirName}`;
    const file = `${this.getCurrentDirectory()}/${this.dirName}/${fileName}${extention}`;
    await fs.writeFile(file, template(this.dirName));
  }

  public async createStylesModuleFile({
    name,
    template,
    extention
  }: CreateFileInput) {
    const fileName = `${name ? name : this.dirName}.module`;
    const file = `${this.getCurrentDirectory()}/${this.dirName}/${fileName}${extention}`;
    await fs.writeFile(file, template(this.dirName));
  }
}