# Deadline Master — Azure Deployment Guide

This app is optimized for **Azure Static Web Apps (SWA)**. Since it uses browser-native ES modules (via esm.sh), deployment is incredibly straightforward.

## 🚀 Azure Deployment (5-Minute Walkthrough)

### 1. Push Code to GitHub
Azure Static Web Apps uses GitHub Actions to sync your code. 
- Create a new repository on GitHub.
- Push your local files to that repository.

### 2. Create the Azure Resource
1. Sign in to the [Azure Portal](https://portal.azure.com).
2. Click **Create a Resource** and search for **Static Web App**.
3. Fill in the basics:
   - **Subscription**: Select the one with your $100 credit.
   - **Resource Group**: Create new (e.g., `deadline-bot-rg`).
   - **Name**: `my-deadline-reminder`.
   - **Region**: Choose the one closest to you (e.g., East US).
4. **Deployment Details**:
   - Source: **GitHub**.
   - Authenticate and select your **Repo** and **Branch** (usually `main`).

### 3. Build Configuration (CRITICAL)
Under **Build Details**, use these settings:
- **Build Presets**: `Other`
- **App location**: `/`
- **Api location**: (Leave empty)
- **Output location**: `/` (This is because we have no build step).

### 4. Click 'Review + Create'
Azure will start a GitHub Action. In 2 minutes, your site will be live at a `.azurestaticapps.net` URL!

## 💾 Why this is the "Zero-Cost" Choice
- **Static Hosting**: Azure SWA has a free tier that covers up to 100GB of bandwidth.
- **Local Database**: By using `localStorage`, we avoid $20-50/mo database fees (CosmosDB/SQL), keeping your $100 credit untouched for other experiments.
- **Persistence**: Your tasks are saved directly on your device, making it lightning fast.

---
*Developed by Senior Engineering — Microsoft Cloud Optimized.*