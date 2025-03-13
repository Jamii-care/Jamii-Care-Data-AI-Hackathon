# AI-Powered Welfare Management System

🚀 **Jamii-care** is an AI-driven platform designed to help welfare groups (Chamas) and savings groups manage their finances transparently, detect fraud, and plan budgets effectively. Built with **Microsoft Fabric**, **Azure AI**, **FastAPI**, and **React.js**, this solution provides real-time updates, predictive insights, and secure financial tracking.

---

## 🎯 Features

### Core Features
- **User Authentication:** Secure login using Azure AD B2C.
- **Group Management:** Create, join, and manage welfare groups.
- **Transaction Tracking:** Track contributions, loans, and expenses.
- **Fraud Detection:** AI-powered anomaly detection to flag suspicious transactions.
- **Predictive Budgeting:** AI-based financial planning to forecast future savings and expenses.
- **Real-Time Updates:** WebSocket integration for live notifications and updates.
- **Data Visualization:** Power BI dashboards for financial insights.

### Extra Features (If Time Allows)
- **AI Chat Assistant:** Answer financial questions and provide recommendations.
- **Investment & Loan Recommendations:** Suggest low-risk investments and loan plans.
- **Offline Mode:** Allow users to track contributions and expenses offline.

---

## 🛠️ Tech Stack

### Frontend
- **React.js:** For building the web app UI.
- **Tailwind CSS:** For modern and responsive design.
- **Recharts:** For data visualization.

### Backend
- **FastAPI:** For building REST APIs and WebSocket integration.
- **Azure AD B2C:** For secure user authentication.
- **Microsoft Fabric:** For data storage, processing, and AI integration.
- **PostgreSQL / Azure Cosmos DB:** For storing user, group, and transaction data.

### AI/ML
- **Azure Machine Learning:** For fraud detection and predictive budgeting.
- **Microsoft Fabric Synapse Analytics:** For real-time data processing.

### Payments
- **M-Pesa API:** For local payments in Kenya.
- **Stripe:** For international payments (optional).

### Hosting & DevOps
- **Azure App Services:** For deploying the web app.
- **GitHub Actions:** For CI/CD automation.

---

## 🚀 Getting Started

### Prerequisites
- **Azure Account:** For accessing Microsoft Fabric, Azure AI, and Azure AD B2C.
- **Node.js:** For running the frontend.
- **Python:** For running the backend.
- **PostgreSQL / Azure Cosmos DB:** For database setup.

### Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Jamii-care/Jamii-Care-Data-AI-Hackathon.git
   cd Jamii-Care-Data-AI-Hackathon
   ```

2. **Set Up the Backend:**
   - Navigate to the `app` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the FastAPI server:
     ```bash
     uvicorn main:app --reload
     ```

3. **Set Up the Frontend:**
   - Navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the React app:
     ```bash
     npm start
     ```

4. **Set Up the Database:**
   - Configure your PostgreSQL or Azure Cosmos DB connection in the backend settings.

5. **Set Up Azure AD B2C:**
   - Follow the [Azure AD B2C documentation](https://learn.microsoft.com/en-us/azure/active-directory-b2c/) to set up authentication.

6. **Set Up Microsoft Fabric:**
   - Follow the [Microsoft Fabric documentation](https://learn.microsoft.com/en-us/fabric/) to set up data storage and AI integration.

---

## 📂 Project Structure

```
backend/
├── app/                        # Backend (FastAPI)
│   ├── __init__.py
│   ├── main.py                 # FastAPI application entry point
│   ├── config.py               # Configuration settings
│   ├── db/
│   │   ├── __init__.py
│   │   └── database.py         # Microsoft Fabric connection setup
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py             # User data models
│   │   └── transaction.py      # Transaction data models
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── user.py             # User Pydantic schemas
│   │   └── transaction.py      # Transaction Pydantic schemas
│   ├── api/
│   │   ├── __init__.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py         # Authentication routes
│   │   │   ├── users.py        # User management routes
│   │   │   └── transactions.py # Transaction routes
│   │   └── dependencies.py     # API dependencies
│   ├── services/
│   │   ├── __init__.py
│   │   ├── auth_service.py     # Azure AD authentication logic
│   │   ├── transaction_service.py # Transaction processing logic
│   │   ├── payment_service.py  # M-Pesa/Stripe integration
│   │   └── ai/
│   │       ├── __init__.py
│   │       ├── fraud_detection.py # Fraud detection with Azure ML
│   │       └── budget_prediction.py # Predictive budgeting with Azure ML
│   └── core/
│       ├── __init__.py
│       ├── security.py         # Security utilities
│       └── exceptions.py       # Custom exceptions
├── frontend/                   # Frontend (React.js)
│   ├── src/
│   │   ├── assets/             # Images, icons, and styles
│   │   ├── components/         # Reusable components (buttons, forms, tables)
│   │   ├── pages/              # Pages (Dashboard, Transactions, Profile)
│   │   ├── hooks/              # Custom hooks (useAuth, useFetch)
│   │   ├── context/            # Context API (User, Transactions)
│   │   ├── services/           # API calls to backend
│   │   ├── App.js              # Main app component
│   │   ├── index.js            # Entry point for React app
│   ├── public/                 # Static files
│   ├── .env                    # Frontend environment variables
│   ├── package.json            # Dependencies
│   ├── tailwind.config.js      # Tailwind CSS config
│   ├── Dockerfile              # Frontend containerization
├── ai-models/                  # AI Models (Fraud detection & predictions)
│   ├── models/
│   │   ├── fraud_detection.pkl  # Trained fraud detection model
│   │   ├── budgeting_model.pkl  # Predictive financial model
│   ├── train.py                # Model training script
│   ├── inference.py            # API for running predictions
├── infra/                      # Infrastructure & Deployment
│   ├── docker-compose.yml      # Container orchestration
│   ├── terraform/              # Infrastructure-as-code (Azure setup)
│   ├── github-actions/         # CI/CD pipelines
├── requirements.txt            # Backend dependencies
├── .env                        # Environment variables (not in git)
├── .env.example                # Example environment variables
└── README.md                   # Project documentation
```

---

## 📌 Usage

1. **User Registration & Login:**
   - Sign up or log in using Azure AD B2C.

2. **Group Creation & Membership:**
   - Admins can create groups and invite members.
   - Members can request to join groups.

3. **Financial Transactions:**
   - Members can contribute via M-Pesa or Stripe.
   - Transactions are tracked in real time.

4. **Fraud Detection & Predictive Budgeting:**
   - AI scans transactions for anomalies and provides fraud alerts.
   - Predictive models suggest future budgets based on historical data.

5. **Real-Time Updates:**
   - Members receive live updates via WebSockets.

6. **Data Visualization:**
   - Admins and treasurers can view financial insights using Power BI dashboards.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Microsoft Fabric** for data processing and AI integration.
- **Azure AI** for fraud detection and predictive budgeting.
- **FastAPI** for building a scalable backend.
- **React.js** for building a modern frontend.

---