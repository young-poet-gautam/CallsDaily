document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENT REFERENCES ---
    const nameInput = document.getElementById('name');
    const dateDisplay = document.getElementById('current-date');
    const shiftStartTimeInput = document.getElementById('shift-start-time');
    const shiftStartAmPmSelect = document.getElementById('shift-start-ampm');
    const shiftEndTimeInput = document.getElementById('shift-end-time');
    const shiftEndAmPmSelect = document.getElementById('shift-end-ampm');
    const metricsPasteArea = document.getElementById('metrics-paste-area');
    const parseBtn = document.getElementById('parse-btn');
    const outgoingCallsInput = document.getElementById('outgoing-calls');
    const incomingCallsInput = document.getElementById('incoming-calls');
    const grandTotalDisplay = document.getElementById('grand-total');
    const generateBtn = document.getElementById('generate-btn');
    const reportOutput = document.getElementById('report-output');
    const copyBtn = document.getElementById('copy-btn');

    // Store parsed metrics data here
    let parsedMetrics = {};

    // --- INITIALIZATION ---
    function initialize() {
        // Set current date
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        dateDisplay.textContent = `${day}-${month}-${year}`;

        // Set up event listeners
        document.querySelectorAll('.now-btn').forEach(button => {
            button.addEventListener('click', captureCurrentTime);
        });

        parseBtn.addEventListener('click', parseMetrics);
        outgoingCallsInput.addEventListener('input', calculateGrandTotal);
        incomingCallsInput.addEventListener('input', calculateGrandTotal);
        generateBtn.addEventListener('click', generateReport);
        copyBtn.addEventListener('click', copyReport);
    }

    // --- CORE FUNCTIONS ---
    function captureCurrentTime(event) {
        const targetInputId = event.target.dataset.target;
        const targetInput = document.getElementById(targetInputId);
        if (targetInput) {
            const now = new Date();
            // HH:MM:SS in 24-hour format
            targetInput.value = now.toTimeString().split(' ')[0];
        }
    }

    function parseMetrics() {
        const text = metricsPasteArea.value;
        const metricLabels = [
            'Total Login Time', 'Total Pause Time', 'Total Wait Time',
            'Total Talk Time', 'Total Hold Time', 'Total Dispo Time',
            'Total Dead Time', 'Customer Talk Time'
        ];
        
        parsedMetrics = {}; // Reset previous data

        metricLabels.forEach(label => {
            const regex = new RegExp(label + '(\\d{2}:\\d{2}:\\d{2})');
            const match = text.match(regex);
            if (match && match[1]) {
                parsedMetrics[label] = match[1];
            } else {
                parsedMetrics[label] = '00:00:00'; // Default if not found
            }
        });

        // Visual feedback
        parseBtn.textContent = 'Metrics Parsed Successfully!';
        parseBtn.style.backgroundColor = '#2f855a';
        setTimeout(() => {
            parseBtn.textContent = 'Parse Metrics';
            parseBtn.style.backgroundColor = '#4a5568';
        }, 2000);
    }

    function calculateGrandTotal() {
        const outgoing = parseInt(outgoingCallsInput.value, 10) || 0;
        const incoming = parseInt(incomingCallsInput.value, 10) || 0;
        grandTotalDisplay.textContent = `${outgoing + incoming} calls`;
    }

    function generateReport() {
        // Gather all data from inputs
        const name = nameInput.value;
        const date = dateDisplay.textContent;
        const shiftTime = `${shiftStartTimeInput.value} ${shiftStartAmPmSelect.value} to ${shiftEndTimeInput.value} ${shiftEndAmPmSelect.value}`;
        
        const liveTime = document.getElementById('live-time').value;
        const offlineTime = document.getElementById('offline-time').value;
        const firstCallTime = document.getElementById('first-call-time').value;
        const lastCallTime = document.getElementById('last-call-time').value;
        const lunchStartTime = document.getElementById('lunch-start-time').value;
        const lunchEndTime = document.getElementById('lunch-end-time').value;

        const outgoingCalls = outgoingCallsInput.value;
        const incomingCalls = incomingCallsInput.value;
        const grandTotal = (parseInt(outgoingCalls, 10) || 0) + (parseInt(incomingCalls, 10) || 0);

        // Build the report string using a template literal
        const report = `Name: ${name}
Date: ${date}
Shift time: ${shiftTime}

Live: ${liveTime}
Offline: ${offlineTime}

First call: ${firstCallTime}
Last call: ${lastCallTime}

Lunch Break time: ${lunchStartTime}
Lunch Break End time: ${lunchEndTime}

Total Login Time: ${parsedMetrics['Total Login Time'] || '00:00:00'}
Total Pause Time: ${parsedMetrics['Total Pause Time'] || '00:00:00'}
Total Wait Time: ${parsedMetrics['Total Wait Time'] || '00:00:00'}
Total Talk Time: ${parsedMetrics['Total Talk Time'] || '00:00:00'}
Total Hold Time: ${parsedMetrics['Total Hold Time'] || '00:00:00'}
Total Dispo Time: ${parsedMetrics['Total Dispo Time'] || '00:00:00'}
Total Dead Time: ${parsedMetrics['Total Dead Time'] || '00:00:00'}
Customer Talk Time: ${parsedMetrics['Customer Talk Time'] || '00:00:00'}

Outgoing calls: ${outgoingCalls} calls
Incoming calls: ${incomingCalls} calls
Grand total: ${grandTotal} calls`;

        reportOutput.value = report;
    }

    function copyReport() {
        if (!reportOutput.value) return;
        navigator.clipboard.writeText(reportOutput.value).then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => { copyBtn.textContent = 'Copy Report'; }, 2000);
        }).catch(err => {
            console.error('Failed to copy report: ', err);
            copyBtn.textContent = 'Error Copying';
        });
    }

    // --- START THE APP ---
    initialize();
});