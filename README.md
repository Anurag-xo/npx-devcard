# Anurag Kumar's Terminal Portfolio Card

[![NPM Version](https://img.shields.io/npm/v/anuragxo)](https://www.npmjs.com/package/anuragxo)
[![Docker Image](https://img.shields.io/badge/Docker-anuragxo/card-blue)](https://hub.docker.com/r/anuragxo/card)

This is my interactive terminal portfolio, a creative and fun way to get to know me. Built with Node.js, this CLI tool provides quick access to my professional links, allows you to download my resume, and even fetches real-time stats from my GitHub and WakaTime profiles.

It's designed to be a memorable introduction for anyone who loves the command line.

## Demo

When you run the card, you'll see a sleek, colorized profile summary:
<img width="887" height="482" alt="image" src="https://github.com/user-attachments/assets/8215b54f-0f2d-41c0-a9a3-d87b70ef6eff" />

You will then be prompted with a list of actions to choose from.
<img width="698" height="210" alt="image" src="https://github.com/user-attachments/assets/9618a224-0c65-43e6-a627-c1796f34a77d" />

## Usage

No installation is needed. Just run this command in your terminal:

```bash
npx anuragxo
```

This command fetches and executes the script, displaying my portfolio card and an interactive menu.

## Docker Usage

You can also run the portfolio card using Docker.

1.  **Build the Docker image:**

    ```bash
    docker build -t anuragxo-card .
    ```

2.  **Run the Docker container:**

    ```bash
    docker run -it anuragxo-card
    ```

## Features

The interactive menu allows you to:

- **📧 Send an Email:** Opens your default email client to send me a message.
- **📄 Download my Resume:** Downloads my resume in PDF format to your current directory.
- **📅 Schedule a Chat:** Provides my contact details for a direct chat.
- **📈 Show my GitHub Stats:** Fetches and displays my latest GitHub profile stats.
- **📊 Show my WakaTime Stats:** Shows my coding activity from the last 7 days.
- **🎁 Surprise Me!:** Displays a random developer-related fact or tip.
- **❌ Exit:** Exits the portfolio card with a friendly sign-off.

## Technologies Used

This project is built with a modern, feature-rich stack:

- **[Node.js](https://nodejs.org/):** The runtime environment.
- **[Docker](https://www.docker.com/):** For containerizing the application.
- **[chalk](https://github.com/chalk/chalk):** For styling terminal output with vibrant colors.
- **[boxen](https://github.com/sindresorhus/boxen):** To create the stylish card layout.
- **[inquirer](https://github.com/SBoudrias/Inquirer.js):** For crafting interactive command-line prompts.
- **[ora](https://github.com/sindresorhus/ora):** To add elegant spinners for async operations.
- **[node-fetch](https://github.com/node-fetch/node-fetch):** To make API requests for GitHub and WakaTime stats.
- **[open](https://github.com/sindresorhus/open):** To open URLs and files seamlessly.

## License

This project is licensed under the MIT License.
