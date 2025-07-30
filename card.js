#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");
const fetch = require("node-fetch");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "🚀 What would you like to do?",
    choices: [
      {
        name: `📧  Send me an ${chalk.green.bold("Email")}`,
        value: () => {
          open("mailto:anuragxo.dev@gmail.com");
          console.log("\n✅ Email client opened.\n");
        },
      },
      {
        name: `📄  Download my ${chalk.magentaBright.bold("Resume")}`,
        value: () => {
          const loader = ora({
            text: "Downloading resume...",
            spinner: cliSpinners.material,
          }).start();
          const fileName = "anurag-kumar-resume.pdf";
          const fileUrl =
            "https://drive.google.com/uc?export=download&id=1EfaqUgWBMX3fHxJvhZ_HiI_BLOgQIRN_";
          const pipe = request(fileUrl).pipe(
            fs.createWriteStream(`./${fileName}`),
          );

          pipe.on("finish", () => {
            loader.stop();
            const downloadPath = path.join(process.cwd(), fileName);
            console.log(
              `\n✅ Resume downloaded to: ${chalk.green(downloadPath)}\n`,
            );
            setTimeout(() => open(downloadPath), 1000);
          });
        },
      },
      {
        name: `📅  Schedule a ${chalk.redBright.bold("Meeting")}`,
        value: () => {
          open("https://calendly.com/anuragxo/30min");
          console.log("\n📌 Meeting link opened.\n");
        },
      },
      {
        name: `📈  Show my ${chalk.yellowBright.bold("GitHub Stats")}`,
        value: async () => {
          const username = "Anurag-xo";
          const loader = ora({
            text: "Fetching GitHub stats...",
            spinner: cliSpinners.dots,
          }).start();

          try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();
            loader.stop();
            console.log(`\n📊 GitHub Stats for ${chalk.green(username)}:`);
            console.log(`⭐ Repositories: ${chalk.yellow(data.public_repos)}`);
            console.log(`👥 Followers: ${chalk.yellow(data.followers)}`);
            console.log(
              `📦 Public Gists: ${chalk.yellow(data.public_gists)}\n`,
            );
          } catch (error) {
            loader.stop();
            console.log("❌ Failed to fetch GitHub stats");
          }
        },
      },
      {
        name: `🎁  Surprise Me!`,
        value: () => {
          const facts = [
            "💡 Tip: Use 'npx' to run packages without installing them.",
            "🐛 Fun Fact: The first computer bug was an actual moth.",
            "🚀 Pro Tip: Automate your CI/CD to deploy code like a pro.",
            "📦 DevOps Secret: Your config is code. Treat it like one.",
            "🔥 Hot Take: Bash scripts can be poetry too.",
          ];
          const fact = facts[Math.floor(Math.random() * facts.length)];
          console.log(`\n✨ ${fact}\n`);
        },
      },
      {
        name: "❌  Exit",
        value: () => {
          console.log(
            `\n${chalk.yellowBright("You quit?! I thought we had something special.")}`,
          );
          console.log(
            chalk.gray(
              "But okay, I'm just a script standing in front of a dev, asking to be run again.",
            ),
          );
          console.log(
            chalk.magenta(
              "✨ Run me again anytime. I’ll be waiting in your terminal. ✨\n",
            ),
          );
          process.exit();
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("            Anurag Kumar  /  @anuragxo"),
  work: `${chalk.white("DevOps | Linux Admin | Software Engineer")}`,
  github: chalk.gray("https://github.com/") + chalk.green("Anurag-xo"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("anurag-kumar-b1a790249"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("anuragxo1221"),
  leetcode: chalk.gray("https://leetcode.com/") + chalk.yellow("Anurag8081"),
  medium: chalk.gray("https://medium.com/@") + chalk.magenta("anuragxo"),
  portfolio: chalk.cyan("https://notrlyanurag.duckdns.org"),
  npx: chalk.red("npx") + " " + chalk.white("anuragxo"),

  labelWork: chalk.white.bold("        Role:"),
  labelGitHub: chalk.white.bold("      GitHub:"),
  labelLinkedIn: chalk.white.bold("    LinkedIn:"),
  labelTwitter: chalk.white.bold("     Twitter:"),
  labelLeetcode: chalk.white.bold("   LeetCode:"),
  labelMedium: chalk.white.bold("     Medium:"),
  labelPortfolio: chalk.white.bold("   Portfolio:"),
  labelCard: chalk.white.bold("         Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelLeetcode}  ${data.leetcode}`,
    `${data.labelMedium}  ${data.medium}`,
    `${data.labelPortfolio}  ${data.portfolio}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("Let’s connect and build something amazing!")}`,
    `${chalk.italic("Or at least debug something that shouldn't have broken.")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
    backgroundColor: "#1a1a1a",
  },
);

console.log(me);

const tip = `💡 ${chalk.cyanBright.bold("Tip:")} Use ${chalk.cyanBright("Cmd/Ctrl + Click")} on the links above to open them.`;
console.log(tip);

async function main() {
  while (true) {
    const answer = await prompt(questions);
    await answer.action();
  }
}

main();
