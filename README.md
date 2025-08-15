Smart Call Center Report Generator (Specifically for Dialshree)
A simple, fast, and efficient web application designed to help call center professionals generate their daily work reports with minimal effort. This tool automates repetitive tasks like formatting, date entry, and calculations, allowing you to create accurate reports in seconds.

✨ Key Features
Pre-filled & Editable Fields: Your Name and Shift Times are pre-filled by default but are fully editable to fit your needs.

Automatic Date: The current date is automatically populated in the correct DD-MM-YYYY format.

Instant Time Capture: For fields like Live Time, First Call, or Lunch Break, a "Now" button instantly captures the current time in 24-hour HH:MM:SS format, saving you from manual entry.

Smart Metrics Parser: The most powerful feature. Simply copy the single, unformatted line of metrics from your dashboard (e.g., Total Login Time9:04:12Total Pause Time00:43:36...), and the app will automatically parse it and extract all the data.

Auto-Calculation: The app automatically calculates the Grand Total of calls based on your outgoing and incoming call entries.

Flexible Time Formats: Supports 12-hour format for shift timings and 24-hour format for all other timestamps, as is common in call center environments.

Editable Output: The final generated report appears in an editable text area, allowing for any last-minute adjustments before copying.

One-Click Copy: A convenient "Copy Report" button lets you copy the entire formatted report to your clipboard instantly.

🚀 Live Demo
You can view and use the live application deployed on Vercel:

calls-daily.vercel.app

🛠️ Technologies Used
This project is built with a focus on simplicity, speed, and ease of deployment, using only core web technologies:

HTML: For the structure and content of the application.

CSS: For modern, clean, and responsive styling.

JavaScript: For all the application logic, including date/time functions, metrics parsing, and DOM manipulation.

📖 How to Use the App
Verify Your Info: Check that your Name and Shift Timings are correct. Edit if necessary.

Enter Timestamps: Manually type in the times for Live, Offline, First/Last Call, and Lunch, or simply click the "Now" button next to each field at the appropriate moment.

Parse Metrics: Copy the single line of metrics from your work dashboard, paste it into the "Paste Your Metrics Here" text area, and click "Parse Metrics".

Log Call Counts: Enter your Outgoing and Incoming call numbers. The grand total will update automatically.

Generate & Copy: Click the "Generate Report" button. Review the final report in the text box below, make any edits if needed, and then click "Copy Report".

Paste your report wherever it's needed (email, Slack, Teams, etc.).
