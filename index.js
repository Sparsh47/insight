#!/usr/bin/env node

import {program} from "commander";
import responseGenerator from "./gemini.js";
import {marked} from 'marked';
import TerminalRenderer from 'marked-terminal';

marked.setOptions({
    renderer: new TerminalRenderer()
});

// program
//     .version("0.0.1")
//     .description("A CLI tool for interpreting errors easily. Also saves you from hell of large docker commands by shortening them and making them interactive.")
//
// program
//     .command("greet <name>")
//     .description("Greets a user by name")
//     .action((name)=>{
//         console.log(`Hello ${name}`);
//     })
//
// program.parse(process.argv);

(async()=>console.log(marked(await responseGenerator("Error Message:\n" +
    "TypeError: Cannot read property 'length' of undefined\n"))))()