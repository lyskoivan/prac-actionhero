import { Action } from "actionhero";

export class Hello extends Action {
  constructor() {
    super();
    this.name = "hello";
    this.description = "I am an API method which will send hello word";
    this.outputExample = { hello: "hello word" };
  }

  async run({ response }) {
    response.hello = "hello word";
  }
}
