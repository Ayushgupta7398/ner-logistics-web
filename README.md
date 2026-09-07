# 🚚 NER Logistics — AI-Based Smart Logistics & Accessibility Intelligence Platform

<p align="center">
  <strong>AI-powered logistics, accessibility intelligence and regional operations platform for the North Eastern Region of India</strong>
</p>

<p align="center">
  SIH26002 • Smart Automation • Web Application
</p>

---

## 📌 Project Overview

**NER Logistics** is an AI-based Smart Logistics & Accessibility Intelligence Platform designed for the **North Eastern Region (NER) of India**.

The platform combines logistics data, geographical information, accessibility intelligence, risk information, traffic conditions, weather context and AI/ML outputs to help users and authorities make better logistics and operational decisions.

The core principle of the platform is:

**Location → Data → Intelligence → Decision → Action**

The system is designed for three major roles:

- 👤 Normal User / Business
- 🏛️ Admin
- 👷 Field Officer

The Web Application provides role-specific dashboards, maps, analytics, monitoring tools, alerts, reports and route intelligence.

---

## 🎯 Problem Statement

### SIH26002

**AI-Based Smart Logistics and Accessibility Intelligence Platform for North Eastern Region (NER)**

**Organization:** Ministry of Development of North Eastern Region (MoDONER)

**Category:** Software

**Track:** Smart Automation

The North Eastern Region has challenging geographical conditions, including difficult terrain, weather-related disruptions, connectivity limitations, road accessibility issues and transportation risks.

Traditional logistics systems may not provide sufficient regional intelligence for:

- Route accessibility
- Traffic conditions
- Risk zones
- Weather-related disruptions
- Infrastructure conditions
- Logistics monitoring
- Emergency situations
- Regional accessibility
- Operational decision-making

NER Logistics aims to provide a centralized intelligence platform that converts regional data into useful logistics and operational decisions.

---

# 🧠 Core Concept

The platform follows this intelligence flow:

    Location
        ↓
    Data Collection
        ↓
    Data Processing
        ↓
    AI / ML Intelligence
        ↓
    Decision Support
        ↓
    Action

The frontend visualizes and interacts with this intelligence.

The frontend does NOT independently calculate:

- Route optimization
- ETA prediction
- Risk prediction
- Accessibility scoring
- AI recommendations
- Alert generation
- Machine learning predictions

These responsibilities belong to the backend and AI/ML teams.

---

# 🏗️ System Architecture

    NER WEB PLATFORM
    │
    ├── 👤 USER / BUSINESS
    │   ├── Dashboard
    │   ├── Route Planner
    │   ├── Route Results
    │   ├── Route Details
    │   ├── Live Trip
    │   ├── Tracking
    │   ├── Traffic
    │   ├── Accessibility
    │   ├── Risk Monitoring
    │   ├── Alerts
    │   ├── Analytics
    │   ├── Reports
    │   └── Settings
    │
    ├── 🏛️ ADMIN
    │   ├── Admin Dashboard
    │   ├── Live Monitoring
    │   ├── Traffic Analytics
    │   ├── Risk Monitoring
    │   ├── Accessibility
    │   ├── Alert Management
    │   └── Reports
    │
    └── 👷 FIELD OFFICER
        ├── Dashboard
        ├── Live Map
        ├── Report Incident
        ├── My Reports
        ├── Report Details
        └── Alerts

    SHARED COMPONENTS
            │
    SHARED API LAYER
            │
    BACKEND
            │
    AI / ML SERVICES
            │
    GIS / MAP SERVICES

---

# 💻 Web Application

The Web Application is built using:

- React
- JavaScript
- Vite
- React Router
- CSS
- Map integration
- Chart integration
- REST API integration

The current implementation uses:

    React + JavaScript + Vite

The project is structured to allow future backend and AI/ML integration without changing the overall frontend architecture.

---

# 📱 Platform Responsibilities

## Web Application

The Web Application is responsible for:

- Dashboard interfaces
- Role-based navigation
- Maps
- Route planning UI
- Route results visualization
- Live monitoring
- Traffic visualization
- Accessibility visualization
- Risk visualization
- Alerts
- Reports
- Analytics
- Forms
- Validation
- Loading states
- Empty states
- Error states
- Offline states
- API consumption
- User interactions

## Backend

The backend is responsible for:

- Database
- Authentication
- Authorization
- Business logic
- API services
- Data processing
- Vehicle data
- Trip data
- Incident management
- Alert management

## AI / ML

The AI/ML system is responsible for:

- Route intelligence
- Risk prediction
- Accessibility intelligence
- ETA prediction
- Traffic intelligence
- Recommendation generation

---

# 👥 User Roles

## 👤 Normal User / Business

Normal users can:

- Plan routes
- View route alternatives
- View route intelligence
- View traffic
- View accessibility
- View risks
- Monitor trips
- View alerts
- View analytics
- Generate reports
- Manage permitted vehicle information

---

# 🏛️ Admin

Admin provides regional operational control.

Admin capabilities include:

- Regional monitoring
- Fleet monitoring
- Trip monitoring
- Risk monitoring
- Accessibility monitoring
- Alert management
- Analytics
- Reports
- Infrastructure management
- Vehicle management
- System monitoring

---

# 👷 Field Officer

Field Officers have a dedicated Web workspace.

Field Officer screens:

- Dashboard
- Live Map
- Report Incident
-  My Reports
- Report Details
- Alerts

Field Officers can:

- Monitor their assigned area
- View district information
- View infrastructure
- View relevant weather information
- View accessibility information
- View relevant alerts
- Report incidents
- Upload incident photos
- Capture geo-tagged locations
- View their own reports
- Track report synchronization status

Field Officers cannot access:

- Vehicle management
- LocationPing management
- Trip management

They also cannot:

- Create alerts
- Resolve alerts
- Publish alerts

---

# 🗺️ Admin Web Screens

The Admin Web Application contains seven major screens.

## A01 — Admin Dashboard

The Admin Dashboard provides an overview of the entire regional logistics system.

Main sections:

- Total Vehicles
- Active Trips
- Critical Alerts
- Risk Zones
- System Health
- Regional Overview Map
- Recent Alerts
- Trip Overview
- Traffic Flow
- Accessibility Score
- Average Speed
- Delay Time

---

## A02 — Live Monitoring

The Live Monitoring screen provides a real-time operational overview.

Main sections:

- Live map
- Vehicle locations
- Total Vehicles
- Moving
- Idle
- Stopped

Current MVP tracking approach:

**REST polling approximately every 10–15 seconds**

WebSockets / Socket.IO are not required unless the backend contract changes.

---

## A03 — Traffic Analytics

Traffic Analytics provides regional traffic intelligence.

Main sections:

- Traffic Flow chart
- Traffic Distribution chart
- Smooth
- Moderate
- Heavy
- Jam

The frontend visualizes backend-provided traffic data.

---

## A04 — Risk Monitoring

Risk Monitoring displays regional risk conditions.

Main sections:

- Risk Map
- High Risk
- Medium Risk
- Low Risk

Risk visualization follows the platform severity rules.

### Risk Colors

- 🟢 Safe / Low / Recommended
- 🟡 Moderate / Warning / Delayed
- 🔴 High / Critical / Landslide / Severe Flood / At Risk
- ⚪ Neutral / Completed / Inactive

Hazards must never be represented using green.

High-severity conditions must use:

**Icon + Text + Color**

Color must never be the only indicator.

---

## A05 — Accessibility

Accessibility provides regional accessibility intelligence.

Main sections:

- Overall Accessibility Score
- Region-wise Scores
- Assam
- Meghalaya
- Manipur
- Mizoram
- Tripura
- Nagaland

Example:

    Overall Accessibility Score
    7.8 / 10
    Good

The frontend displays the score received from backend/AI systems.

---

## A06 — Alert Management

Alert Management provides administrative control over alerts.

Alert filters:

- All
- High
- Medium
- Low

Supported alert types include:

- Blocked Road
- Flood
- Landslide
- Delay
- Traffic
- Weather
- Safety

Alert information may include:

- Severity
- Title
- Message
- Recommended Action
- Created Time
- Resolved Status

Admins can:

- Create alerts
- Resolve alerts

---

## A07 — Reports

Reports provide operational reporting.

Available reports:

- System Report
- Fleet Report
- User Report
- Incident Report

Actions:

- Generate
- View All Reports

---

# 👷 Field Officer Web Screens

## FO01 — Dashboard

The Field Officer Dashboard contains:

- Officer identity
- Assigned area
- District
- Weather
- District connectivity
- Accessibility information
- Area alerts
- Recent reports
- High-risk incidents
- Infrastructure information
- Report Incident quick action

---

## FO02 — Live Map

The Field Officer Live Map can display:

- District boundaries
- Infrastructure
- Infrastructure risk
- Weather context
- Incident locations
- Relevant map layers

It must NOT provide:

- Fleet controls
- Vehicle tracking
- Vehicle management

---

## FO03 — Report Incident

The incident reporting form contains:

- Incident Type
- Severity
- Description
- Photo
- Geo-tagged Location
- Client Timestamp

Severity values:

- Low
- Moderate
- High
- Critical

Incident reports must support offline reporting.

---

## FO04 — My Reports

Field Officers can view only their own reports.

Information includes:

- Incident Type
- Severity
- Description
- Location
- Client Timestamp
- Sync Status

Sync states:

- Pending Sync
- Syncing
- Synced
- Sync Failed

---

## FO05 — Report Details

Report Details include:

- Photo
- Incident Type
- Severity
- Description
- Location
- Client Timestamp
- Server Sync Timestamp
- Sync Status

The page is primarily read-only.

---

## FO06 — Alerts

Field Officers can only read relevant area alerts.

Supported alert types:

- Blocked Road
- Flood
- Landslide
- Delay
- Traffic
- Weather
- Safety

Field Officers cannot create or resolve alerts.

---

# 🛣️ Route Planning

The Route Planning system supports:

- Recommended
- Fastest
- Safest
- Accessibility
- Balanced

Users can also avoid:

- Flood
- Landslide
- Heavy Traffic

Transport modes:

- Road
- Rail
- Air
- Water

The MVP priority is:

**Road**

---

# ⭐ Recommended Route

The recommended route should appear directly inside the route result/card.

Example:

    ★ RECOMMENDED

    Best balance of ETA, safety & accessibility

The recommendation is provided by the backend/AI system.

The frontend only displays it.

---

# 🧠 Route Intelligence

Route results may contain:

- Route ID
- Distance
- Base ETA
- Traffic Level
- Risk Level
- Accessibility Score
- Recommended
- Polyline
- Route Legs
- Explanation
- Top Factors

Example:

    Route A

    Distance: 124 km
    ETA: 3h 20m
    Traffic: Moderate
    Risk: Low
    Accessibility: 8.2 / 10

    ★ Recommended

    Best balance of ETA, safety & accessibility

    Why this route?
    - Lower traffic
    - Better road accessibility
    - Lower infrastructure risk

The frontend must not calculate these values.

---

# 🚛 Vehicle and Trip Separation

Vehicle status and trip progress are different concepts.

## Vehicle Status

Vehicle availability:

- Active
- Idle

## Trip Status

Trip progress:

- On Route
- Delayed
- At Risk
- Delivered

The frontend must not mix vehicle availability with trip progress.

---

# 🔔 Alerts

Supported alert types:

- Blocked Road
- Flood
- Landslide
- Delay
- Traffic
- Weather
- Safety

Severity levels:

- Low
- Moderate
- High
- Critical

High-severity alerts must clearly show:

- Icon
- Text
- Color

---

# 📡 Offline and Synchronization

Offline support is important for Field Officers.

The frontend should support:

- Local incident report caching
- Local location data caching where required
- Client timestamp capture
- Sync queue
- Batch synchronization
- Visible synchronization status

Example:

    Pending Sync
          ↓
       Syncing
          ↓
       Synced

If synchronization fails:

    Sync Failed

The user should be able to understand whether the report has successfully reached the backend.

---

# 🌐 API Integration

Backend integration will be added when backend contracts are available.

Frontend API responsibilities include:

- Sending requests
- Receiving responses
- Handling loading
- Handling errors
- Handling unauthorized requests
- Handling forbidden requests
- Displaying backend data

Frontend must handle:

- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Server Error
- Network Error
- Offline State
- Empty Response
- Partial Data

---

# 🔌 Backend Integration Markers

Whenever a component requires future API integration, the code should contain a clear marker.

Example:

    // TODO: BACKEND/API INTEGRATION
    // Replace these placeholder values with data received from the backend.
    //
    // Demo API example:
    // GET /api/example
    //
    // Expected response:
    // { ... }

For AI-related UI:

    // TODO: AI/ML API INTEGRATION
    // Display route/risk/accessibility intelligence received from backend.
    // Frontend must NOT calculate or modify the AI recommendation.

These comments make future integration easier for the backend team.

---

# 🔐 Permissions

## Profile

| Role | Permission |
|------|------------|
| Admin | CRUD all |
| Field Officer | Own |
| Normal User | Own |

## District

| Role | Permission |
|------|------------|
| Admin | CRUD |
| Field Officer | Read |
| Normal User | Read |

## Infrastructure

| Role | Permission |
|------|------------|
| Admin | CRUD |
| Field Officer | Read |
| Normal User | Read |

## Vehicle

| Role | Permission |
|------|------------|
| Admin | CRUD |
| Field Officer | No Access |
| Normal User | Own Vehicle |

## LocationPing

| Role | Permission |
|------|------------|
| Admin | Read |
| Field Officer | No Access |
| Normal User | Own Vehicle |

## Trip

| Role | Permission |
|------|------------|
| Admin | CRUD |
| Field Officer | No Access |
| Normal User | Own Trips |

## Alert

| Role | Permission |
|------|------------|
| Admin | Create / Resolve |
| Field Officer | Read Area Alerts |
| Normal User | Read |

## IncidentReport

| Role | Permission |
|------|------------|
| Admin | Review |
| Field Officer | Create / Read Own |
| Normal User | No Access |

## WeatherSnapshot

| Role | Permission |
|------|------------|
| Admin | Read |
| Field Officer | Read |
| Normal User | Read |

## RouteCandidate

| Role | Permission |
|------|------------|
| Admin | Read / Analytics |
| Field Officer | N/A |
| Normal User | Primary Consumer |

The frontend must hide unauthorized actions and correctly handle 401 and 403 responses.

---

# 📦 Data Contracts

## Profile

    role:
      admin
      field_officer
      normal_user

    phone

---

## District

    name
    geom
    connectivityStatus
    accessibilityScore
    roadConditionScore
    healthcareAccessScore
    marketAccessScore
    wheelchairAccess

---

## Infrastructure

    name
    type:
      road
      bridge

    geom
    districtId
    status:
      accessible
      blocked
      risky

    condition:
      good
      moderate
      poor
      damaged

    riskScore
    disruptionProbability

    riskLevel:
      low
      moderate
      high
      critical

    topFactors
    lastUpdated

---

## Vehicle

    id
    cargoType
    driverName
    driverPhone

    status:
      active
      idle

---

## LocationPing

    vehicleId
    lat
    lng
    locationName
    speed
    timestamp

---

## Trip

    vehicleId
    origin
    destination
    startTime
    endTime

    status:
      on_route
      delayed
      at_risk
      delivered

    baseEta
    predictedEta
    expectedDelay

---

## Alert

    type:
      blocked_road
      flood
      landslide
      delay
      traffic
      weather
      safety

    infrastructureId
    tripId

    severity:
      low
      moderate
      high
      critical

    title
    message
    recommendedAction
    createdAt
    resolved

---

## IncidentReport

    officerId
    geom
    photo
    description
    incidentType

    severity:
      low
      moderate
      high
      critical

    clientTimestamp
    syncedAt

---

## WeatherSnapshot

    districtId
    rainfallMm

    condition:
      clear
      moderate
      heavy
      extreme

    recordedAt

---

## RouteCandidate

    routeId
    distanceKm
    baseEta
    trafficLevel
    riskLevel
    accessibilityScore
    recommended
    polyline
    legs
    explanation
    topFactors

---

# 🧩 Reusable Components

The frontend should maintain reusable components.

## Common UI

- Button
- Input
- SearchBar
- Card
- Badge
- Modal
- BottomSheet
- LoadingState
- EmptyState
- ErrorState
- OfflineBanner

## Maps

- Map
- Map Layers
- Markers
- Route Visualization
- Risk Zones
- District Boundaries
- Infrastructure Layers

## Charts

- Line Charts
- Bar Charts
- Donut Charts
- Analytics Cards

## Alerts

- Alert Card
- Alert Badge
- Alert List
- Alert Filters

## Incident Components

- IncidentForm
- IncidentTypeSelect
- SeveritySelect
- IncidentPhotoUpload
- GeoLocationPicker
- ReportCard
- SyncStatusBadge

---

# 🔄 Dynamic Screen States

Every dynamic page should consider:

    INITIAL
        ↓
    LOADING
        ↓
    SUCCESS
       ↙   ↘
    DATA   EMPTY

or:

    ERROR
      ↓
    RETRY

Additional states:

- Offline
- Partial Data
- Location Unavailable
- Permission Denied
- Service Unavailable
- Unauthorized
- Forbidden

---

# 📁 Project Structure

The current Web Application structure is:

    ner-logistics-web/
    │
    ├── public/
    │
    ├── src/
    │   │
    │   ├── assets/
    │   │   ├── images/
    │   │   ├── icons/
    │   │   └── maps/
    │   │
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── layout/
    │   │   ├── charts/
    │   │   ├── maps/
    │   │   └── alerts/
    │   │
    │   ├── layouts/
    │   │   ├── AdminLayout.jsx
    │   │   ├── UserLayout.jsx
    │   │   └── FieldOfficerLayout.jsx
    │   │
    │   ├── pages/
    │   │   ├── public/
    │   │   │
    │   │   ├── admin/
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── LiveMonitoring.jsx
    │   │   │   ├── TrafficAnalytics.jsx
    │   │   │   ├── RiskMonitoring.jsx
    │   │   │   ├── Accessibility.jsx
    │   │   │   ├── AlertManagement.jsx
    │   │   │   └── Reports.jsx
    │   │   │
    │   │   ├── user/
    │   │   │
    │   │   └── field-officer/
    │   │
    │   ├── services/
    │   │   ├── api.js
    │   │   ├── authService.js
    │   │   └── routeService.js
    │   │
    │   ├── hooks/
    │   ├── store/
    │   ├── utils/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── .gitignore
    ├── package.json
    ├── vite.config.js
    └── README.md

---

# 🎨 UI / UX Design System

The UI follows a professional logistics intelligence dashboard style.

### Primary Colors

    Dark Navy     #0B1A2B
    Navy         #1E3A5B
    Primary Blue #2563EB
    Success      #16A34A
    Warning      #F59E0B
    Danger       #EF4444
    Background   #F8FAFC

The current Admin implementation also uses light borders and neutral gray text to maintain a clean dashboard appearance.

### Typography

Primary typography:

**Inter-style clean sans-serif typography**

### Design Principles

- Clean
- Professional
- Minimal
- Data-focused
- Map-focused
- Accessible
- Consistent
- Responsive

---

# 🖥️ Admin Dashboard Design

The Admin Dashboard follows this layout:

    ┌──────────────────────────────────────────────────────────┐
    │ Sidebar │ Header / Search / Notifications / Admin       │
    ├─────────┴────────────────────────────────────────────────┤
    │                                                          │
    │ Dashboard                                                │
    │ Regional Operations Overview                             │
    │                                                          │
    │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
    │ │Vehicles│ │ Trips  │ │ Alerts │ │ Risks  │ │ Health │ │
    │ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ │
    │                                                          │
    │ ┌──────────────────────────┐ ┌──────────┐ ┌──────────┐ │
    │ │                          │ │ Recent   │ │ Trip     │ │
    │ │    Regional Overview     │ │ Alerts   │ │ Overview │ │
    │ │          Map             │ │          │ │          │ │
    │ │                          │ │          │ │          │ │
    │ └──────────────────────────┘ └──────────┘ └──────────┘ │
    │                                                          │
    │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
    │ │ Traffic  │ │Accessibil│ │Avg Speed │ │ Delay    │   │
    │ └──────────┘ └──────────┘ └──────────┘ └──────────┘   │
    │                                                          │
    └──────────────────────────────────────────────────────────┘


---

# 🌿 Git & GitHub Workflow

The project uses feature branches.

Current structure:

    main
      │
      ├── feature/admin
      │
      ├── feature/user
      │
      └── feature/field-officer

## Main Branch

The `main` branch should remain stable.

Developers should normally avoid directly pushing feature work to `main`.

## Admin Developer

Admin development happens on:

    feature/admin

## User Developer

User development happens on:

    feature/user

## Field Officer Developer

Field Officer development happens on:

    feature/field-officer

---



# ⚠️ Shared Files

Some files are shared by all developers.

Examples:

- App.jsx
- main.jsx
- index.css
- package.json
- package-lock.json
- vite.config.js
- shared components
- routing configuration

These files should be changed carefully.

If multiple developers edit the same shared file at the same time, Git may produce a merge conflict.

Feature-specific files should therefore remain separated whenever possible.

---

# 👨‍💻 Development Ownership

## Admin Developer

Primary responsibility:

    pages/admin/
    layouts/AdminLayout.jsx
    components/admin/
    Admin-related charts
    Admin-related maps
    Admin-related alerts

## User Developer

Primary responsibility:

    pages/user/
    layouts/UserLayout.jsx
    components/user/

## Field Officer Developer

Primary responsibility:

    pages/field-officer/
    layouts/FieldOfficerLayout.jsx
    components/field-officer/

Shared components should be discussed before major changes.

---

# 🛠️ Development Environment

Current environment:

    Node.js
    npm
    React
    Vite
    React Router
    VS Code
    Git
    GitHub

The application is run locally using the Vite development server.

Typical development command:

    npm run dev

Local development server:

    http://localhost:5173/

---

# 🚀 Installation

Clone the repository:

    git clone <https://github.com/Ayushgupta7398/ner-logistics-web>

Move into the project:

    cd ner-logistics-web

Install dependencies:

    npm install

Start development server:

    npm run dev

---

# 🔮 Future Integration

The frontend architecture is prepared for future integration with:

- Backend REST APIs
- Authentication APIs
- GIS services
- Map providers
- AI/ML route intelligence
- Risk prediction
- Accessibility intelligence
- Traffic data
- Weather data
- Vehicle tracking
- Incident reporting
- Alert services
- Analytics services
- Reporting services

The exact APIs will be implemented after the backend team finalizes the contracts.

---

# 📊 MVP Priorities

The initial MVP focuses on:

1. Admin Dashboard
2. Admin Live Monitoring
3. Admin Traffic Analytics
4. Admin Risk Monitoring
5. Admin Accessibility
6. Admin Alert Management
7. Admin Reports
8. Normal User Web
9. Field Officer Web
10. Route Planning
11. Maps
12. Alerts
13. Incident Reporting
14. Offline Sync
15. Backend API Integration

---

# 🔒 Frontend Boundaries

The frontend must NOT duplicate backend/AI logic.

Frontend should:

- Display data
- Collect user input
- Validate input
- Send API requests
- Display API responses
- Handle UI states
- Visualize intelligence
- Provide user interactions

Frontend should NOT:

- Train ML models
- Calculate route recommendations
- Predict ETA independently
- Calculate risk independently
- Calculate accessibility independently
- Generate backend alerts independently
- Implement database logic
- Duplicate backend business rules

---

# 🎯 Project Goal

The goal of NER Logistics is to transform regional logistics data into actionable intelligence.

The platform aims to help:

- Businesses
- Transporters
- Government departments
- Emergency services
- Logistics managers
- Field officers

make faster and more informed decisions using:

- Location intelligence
- Logistics data
- Traffic intelligence
- Accessibility intelligence
- Risk intelligence
- Weather context
- AI/ML recommendations


---

# 🏁 Final Vision

NER Logistics is not just a logistics dashboard.

It is designed as a regional intelligence platform where:

    LOCATION
       ↓
    DATA
       ↓
    INTELLIGENCE
       ↓
    DECISION
       ↓
    ACTION

The final platform will provide a unified view of logistics operations, regional accessibility, infrastructure risks, traffic, weather, alerts and AI-powered route intelligence.

<p align="center">
  <strong>🚚 NER Logistics — Turning Regional Data into Intelligent Logistics Decisions.</strong>
</p>