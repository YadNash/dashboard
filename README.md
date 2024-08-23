
# CNAPP Dashboard - Frontend Assignment

This project is a frontend assignment for AccuKnox, designed to create an interactive CNAPP (Cloud-Native Application Protection Platform) Dashboard. The dashboard features widgets for cloud account risk assessment, namespace-specific alerts, workload alerts, and more. The project is built using React, Context API for state management, and Chart.js for visualizations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [State Management](#state-management)
- [Widget Management](#widget-management)

## Features

- **Responsive Dashboard**: The dashboard is fully responsive and adapts to different screen sizes.
- **Dynamic Widgets**: Add or remove widgets dynamically on the dashboard.
- **State Management**: Implemented using Context API for managing global state.
- **Chart Visualizations**: Visualize data using circular charts with different color indicators.
- **Modern UI**: Clean and modern user interface using custom CSS and components.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YadNash/dashboard.git
   cd Dashboard
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then, install the required packages by running:

   ```bash
   npm install
   ```

3. **Start the development server:**

   Run the following command to start the application in development mode:

   ```bash
   npm run dev
   ```

   The app will be available at [ http://localhost:5173/]( http://localhost:5173/).

## Usage

After starting the development server, you can access the dashboard at ` http://localhost:5173/`. 

- **Adding Widgets:** Use the "Add Widget +" button in the Navbar to dynamically add widgets to the dashboard.
- **Removing Widgets:** Each widget has a "Remove" button that allows you to delete the widget from the dashboard.

## State Management

State management is handled globally using Context API. This allows the dynamic addition and removal of widgets across the application without prop drilling.

## Widget Management

Widgets in the dashboard can be added or removed dynamically. The structure of the widgets is defined in the `Layout.jsx` file.



This README provides a comprehensive guide for anyone who wants to understand, install, and use your project.
