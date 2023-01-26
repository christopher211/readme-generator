# Homework 09: README generator

## Table of Contents:

1. [Description](#description)
2. [Links](#links)
3. [User Story](#userstory)
4. [Requirement](#requirement)
5. [Preview](#preview)

## Description

A simple command line tool to generate a README file follow a table of content using Inquirer

## Links

- The repo of the tool: [Source Code](https://github.com/christopher211/readme-generator)
- Here is the link of demo video: [Google drive](https://drive.google.com/file/d/1QINJoUjUnF0E8qdMsuPDDz9e8BIGuzTL/view?usp=share_link)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Requirement

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Preview

![THe command line result after answer series of questions.](./demo/preview.png)
