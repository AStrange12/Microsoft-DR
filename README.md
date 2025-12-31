# Deadline Reminder Bot — Powered by Microsoft Tools

A modern, production-quality responsive submission portal built for the **Microsoft Hackathon 2024**. This project demonstrates a serverless architecture where a React frontend integrates with the **Microsoft Power Platform** to automate organizational workflows.

## 🚀 Project Goal
The **Deadline Reminder Bot** solves the problem of forgotten tasks and missed deadlines by providing a centralized, enterprise-grade submission portal. Instead of relying on a traditional custom backend, this solution leverages the **Microsoft Ecosystem** for storage, logic, and notifications.

## 🏗️ Architecture
The system follows a modern serverless pattern:
1.  **Frontend:** React (Vite) + Tailwind CSS + Lucide Icons.
2.  **API Layer:** Power Automate HTTP Request Trigger (Webhook).
3.  **Data Tier:** Microsoft Lists or Dataverse (Storage).
4.  **Action Layer:** Office 365 Outlook Connector for automated email reminders.

## ✨ Key Features
- **Hero-Focused Home:** Clear value proposition and architecture visualization.
- **Sync Workflow Form:** A clean, Microsoft-styled UI for submitting task details.
- **Task Pipeline:** A read-only dashboard showing the status of current reminders (conceptual link to Excel/Lists).
- **Interactive "How It Works" Page:** Deep dive into the cloud infrastructure and security.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack
- **Frontend:** React 19, TypeScript, Tailwind CSS.
- **Icons:** Lucide React.
- **Deployment:** Optimized for Vercel or Azure Static Web Apps.
- **Microsoft Integration:** 
    - **Power Automate:** Handles the business logic and triggers.
    - **Microsoft Lists:** Acts as the primary database.
    - **Dataverse:** Provides enterprise-scale data management and security.

## 🔧 Local Configuration
To enable the live cloud workflow:
1. Create a **Cloud Flow** in [Power Automate](https://make.powerautomate.com/).
2. Add an **HTTP Request** trigger.
3. Paste the generated **HTTP POST URL** into `pages/CreateReminder.tsx` at the `POWER_AUTOMATE_WEBHOOK_URL` constant.
4. Your form submissions will now trigger your live Microsoft workflow!

---
*Note: This project is a hackathon submission. Backend workflow and data storage are powered by Microsoft Power Automate and Microsoft Lists / Dataverse .*
