import { MortarOutput } from "..";
import MortarAST from "./MortarAST";

export default class Generator {
  constructor(ast: MortarAST) {
    
  }

  generate(): MortarOutput {
    return {
      skript: 'log "Mortar isn\'t functional yet!"',
      data: {
        version: '2.5.3'
      }
    }
  }
}