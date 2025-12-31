# Deadline Master — Premium Enterprise Portal

A professional, high-performance task management solution optimized for the **Microsoft Azure Ecosystem**. This application is designed to provide enterprise-grade reliability with zero operational overhead, making it the perfect choice for maximizing your **$100 Azure Credit**.

## 🏗️ Architecture & Workflow

This application utilizes a **Local-First Cloud-Native** architecture:

1.  **Frontend**: Built with React 19 and Tailwind CSS, delivered via browser-native ES Modules (ESM) to eliminate heavy build steps.
2.  **Storage**: Uses a persistent, high-performance client-side NoSQL engine (`localStorage`). This ensures data is saved instantly without server latency or database costs.
3.  **Deployment**: Optimized for **Azure Static Web Apps (SWA)**, utilizing global CDNs for lightning-fast delivery.
4.  **Cost Efficiency**: $0.00/month operating cost on the Azure SWA Free Tier.

## 🚀 Azure Deployment (5-Minute Guide)

### 1. Preparation
- Create a new repository on **GitHub**.
- Push your local code to the repository:
  ```bash
  git init
  git add .
  git commit -m "Azure Enterprise Deployment"
  git branch -M main
  git remote add origin <your-repo-url>
  git push -u origin main
  ```

### 2. Azure Portal Configuration
1. Sign in to the [Azure Portal](https://portal.azure.com).
2. Search for **"Static Web Apps"** and click **Create**.
3. **Basics**:
   - **Plan Type**: Free (Ideal for personal/startup use).
   - **Region**: Select the one closest to you (e.g., East US).
4. **Deployment Details**:
   - Source: **GitHub**.
   - Authorize Azure and select your specific repository and the `main` branch.

### 3. Build Configuration (CRITICAL STEP)
To ensure the app renders correctly on Azure, use these exact settings in the **Build Details** section:
- **Build Presets**: `Other`
- **App location**: `/`
- **Api location**: (Leave empty)
- **Output location**: `/` 

*Note: Since this app uses browser-native modules, we do not need a build command. Setting Output to `/` tells Azure to serve the source files directly.*

### 4. Review & Launch
Click **Review + Create**. Azure will automatically trigger a GitHub Action. Once the workflow completes (usually < 2 minutes), your premium portal will be live at a custom `.azurestaticapps.net` URL.

## 💎 Features
- **Smart Reminders**: Seamless integration with the Microsoft ecosystem branding.
- **Precision Tracking**: Granular priority levels (Low, Medium, High, Urgent).
- **Persistent Compliance**: Secure local database ensures zero data loss between sessions.
- **Responsive Design**: Mobile-first layout optimized for all professional devices.

---
*Powered by Microsoft Azure — Optimized for Global Reliability.*