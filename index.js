#!/usr/bin/env node

import {program} from "commander";

program
    .version("0.0.1")
    .description("A CLI tool for interpreting errors easily. Also saves you from hell of large docker commands by shortening them and making them interactive.")

program
    .command("greet <name>")
    .description("Greets a user by name")
    .action((name)=>{
        console.log(`Hello ${name}`);
    })

program.parse(process.argv);