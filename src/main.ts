#!/usr/bin/env node --experimental-specifier-resolution=node
import inquirer from 'inquirer';
import { createSpinner, Spinner } from "nanospinner";

import { __dirname } from 'utils';
import { CreateComponentUseCase, CreateContainerUseCase } from 'use-cases';

enum Targets {
  COMPONENT = 'component',
  CONTAINER = 'container',
}

class Builder {
  private selectedTarget!: Targets;
  private componentName!: string;
  private spinner: Spinner = createSpinner('Creating component...');

  constructor() {
    this.run();
  }
  
  private async run() {
    await this.selectTarget();
    await this.enterTargetName();

    try {
      this.spinner.start();
      await this.create();
    } catch (error: any) {
      this.spinner.error({ text: `Something went wrong 😪 | ${error.errno} (${error.code})` });
    } finally {
      process.exit();
    }
  }

  private async selectTarget() {
    const result = await inquirer.prompt({
      name: 'target',
      type: 'list',
      message: 'Select target: ',
      choices: [
        Targets.COMPONENT,
        Targets.CONTAINER,
      ]
    });
  
    this.selectedTarget = result.target;
  }

  private async enterTargetName() {
    const result = await inquirer.prompt({
      name: 'target_name',
      type: 'input',
      message: 'Name your component: ',
      default() {
        return 'UnnamedComponent';
      }
    });

    this.componentName = result.target_name;
  }

  private async create() {
    switch (this.selectedTarget) {
      case Targets.COMPONENT:
        await new CreateComponentUseCase(this.componentName).run();
        break;
      case Targets.CONTAINER:
        await new CreateContainerUseCase(this.componentName).run();
        break;
      default:
        break;
    }
  }
}

new Builder();