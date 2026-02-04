---
sidebar_position: 6
title: Alerts
description: Stay informed with automated notifications
---

# Alerts

Never miss important events with Quarterback's alert system. Get notified about sentiment changes, price movements, new mentions, and more.

## Alert Types

### Sentiment Alert
Triggered when overall sentiment changes significantly.

- **Threshold** - Set the sentiment change that triggers the alert
- **Direction** - Alert on positive, negative, or any change
- **Window** - Time period for measuring change

### Activity Alert
Triggered when new activities are detected.

- **Sources** - Which platforms to monitor
- **Minimum Count** - Alert after N new activities
- **Time Period** - Window for counting activities

### Price Alert
Triggered by stock price movements.

- **Price Threshold** - Specific price level
- **Percentage Change** - Movement percentage
- **Direction** - Above, below, or either

### Search Alert
Triggered when specific keywords are mentioned.

- **Search Terms** - Keywords or phrases to watch
- **Sources** - Where to search
- **Sentiment** - Optional sentiment filter

### Media Alert
Triggered by news coverage.

- **Any Coverage** - Alert on any new article
- **Specific Publishers** - Only certain sources
- **Sentiment** - Negative coverage alerts

### Daily Recap
Scheduled daily summary.

- **Time** - When to send (e.g., 8am)
- **Contents** - Activities, announcements, metrics
- **Skip Empty** - Don't send if nothing happened

### Weekly Recap
Scheduled weekly summary.

- **Day** - Which day to send
- **Time** - What time
- **Contents** - Week's highlights and metrics

## Creating an Alert

1. Navigate to **Alerts** → **Rules**
2. Click **+ New Alert**
3. Select the alert type
4. Configure the trigger conditions
5. Add email recipients
6. Click **Save**

## Managing Alerts

### Alert Rules Page

View all your alert rules:

- **Name** - Alert identifier
- **Type** - What kind of alert
- **Status** - Enabled or disabled
- **Recipients** - Who receives notifications

### Enabling/Disabling

Toggle alerts on/off without deleting:
- Click the toggle switch on any alert
- Disabled alerts won't trigger but keep their configuration

### Editing

Update alert configuration:
1. Click the alert card
2. Modify settings
3. Click **Save**

### Deleting

Remove an alert permanently:
1. Click the menu icon (⋮)
2. Select **Delete**
3. Confirm deletion

## Alert Notifications

### Email Notifications

Alerts are delivered via email with:

- **Subject** - Alert type and company name
- **Summary** - What triggered the alert
- **Details** - Relevant data and context
- **Link** - Jump to the app for more details

### Notification History

View past alerts:
1. Go to **Alerts** → **History**
2. See all triggered alerts
3. Filter by type, date, or status

## Alert Best Practices

### Start Broad, Then Refine

Begin with general alerts and adjust thresholds based on what's useful.

### Don't Over-Alert

Too many notifications leads to alert fatigue. Focus on actionable triggers.

### Use Recaps for Routine Monitoring

Daily/weekly recaps are better than constant activity alerts for general awareness.

### Set Negative Sentiment Alerts

Be immediately notified of significant negative shifts so you can respond quickly.

---

## Example Alert Configurations

### "Heads Up" Alert
```
Type: Sentiment Alert
Threshold: -0.3 change
Window: 24 hours
Purpose: Early warning of sentiment drops
```

### "Major News" Alert
```
Type: Media Alert
Publishers: AFR, Reuters, Bloomberg
Sentiment: Any
Purpose: Know when major outlets cover you
```

### "Hot Topic" Alert
```
Type: Activity Alert
Count: 10+ activities
Window: 4 hours
Purpose: Detect viral discussions
```

---

## Related

- [Activities](/features/activities) - What triggers activity alerts
- [Announcements](/features/announcements) - Market impact context
- [Reports](/features/reports) - Scheduled reporting alternative
