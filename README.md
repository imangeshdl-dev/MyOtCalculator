# Overtime Calculator (PWA & Android)

A lightweight, cross-platform Progressive Web App (PWA) and Android application designed to calculate monthly overtime pay accurately based on basic pay, allowances, and working hours.

## 📱 Features

* **100% Offline Access:** Works without any active internet or Wi-Fi connection using Service Worker caching.
* **Cross-Platform:** Runs seamlessly on Android, iOS (Apple), and Windows/Desktop browsers.
* **Standalone PWA:** Installable directly as a native app onto your phone's home screen.
* **Exact Monthly Formula:** Calculates working hours dynamically based on the exact number of days in the selected month.

---

## 🧮 Calculation Formula

```text
Hourly Rate = (Basic + DA + SC + FB) / (Days in Month × 8)
Total Overtime Pay = Hourly Rate × Overtime Hours × 2
