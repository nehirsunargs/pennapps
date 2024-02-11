# PennApps Website

This repository contains the source code for the PennApps website, which serves as the online platform for the PennApps college hackathon hosted at the University of Pennsylvania.

## Overview

The PennApps website provides information about the hackathon, including event details, the application process, and relevant dates. It includes features such as navigation, a countdown timer, and social media links.

## Features

- Navigation bar for easy access to different sections of the website.
- Countdown timer displaying the time remaining until the start of the hackathon.
- "Apply" section providing information about the application process.
- Footer containing links to the code of conduct, social media profiles, and contact information.

## Setup Instructions

To set up and run the PennApps website locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pennapps-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pennapps-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the website.

## File Structure

The repository is structured as follows:

```
pennapps-website/
├── node_modules/        # Node modules
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   ├── styles/          # CSS stylesheets
│   └── App.js           # Main application component
├── .gitignore           # Git ignore file
├── package.json         # NPM package configuration
└── README.md            # Project README
```

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS (with CSS Modules)

## JavaScript Files

- **LandingPage.js**: This file contains the `LandingPage` component, which represents the landing page layout of the application. It includes a banner image, date text, and a countdown timer.

- **CountdownTimer.js**: This file contains the `CountdownTimer` component, which displays a countdown timer indicating the time remaining until a specified date.

- **NavBar.js**: This file contains the `NavBar` component, which represents the navigation bar of the application. It includes links to different sections of the website.

- **About.js**: This file contains the `About` component, which provides information about the college hackathon and the PennApps difference.

- **Apply.js**: This file contains the `Apply` component, which presents information about the application process for participating in PennApps.

- **Footer.js**: This file contains the `Footer` component, which represents the footer section of the application. It includes social links, contact information, and acknowledgments.
