# Backend for Jamii-care

🚀 The backend of **Jamii-care** is built using **FastAPI** and integrates with **Microsoft Fabric**, **Azure AI**, and **Azure AD B2C** to provide secure, scalable, and real-time financial management for welfare groups.

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

---

## 🛠️ Tech Stack

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

---

## 🚀 Getting Started

### Prerequisites
- **Python 3+**: [Download Python](https://www.python.org/downloads/)
- **PostgreSQL** or **Azure Cosmos DB**: For database setup.
- **Azure Account:** For Azure AD B2C and Microsoft Fabric integration.

### Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Jamii-care/Jamii-Care-Data-AI-Hackathon.git
   cd backend
   ```

2. **Set Up a Virtual Environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the `app` folder and add the following:
     ```env
     # Database
     DATABASE_URL=postgresql://user:password@localhost:5432/welfare_db

     # Azure AD B2C
     AZURE_AD_B2C_TENANT_ID=your-tenant-id
     AZURE_AD_B2C_CLIENT_ID=your-client-id
     AZURE_AD_B2C_CLIENT_SECRET=your-client-secret

     # Microsoft Fabric
     MICROSOFT_FABRIC_ENDPOINT=your-fabric-endpoint
     MICROSOFT_FABRIC_KEY=your-fabric-key

     # JWT
     JWT_SECRET_KEY=your-secret-key
     JWT_ALGORITHM=HS256
     JWT_EXPIRE_MINUTES=30
     ```

5. **Run the Backend:**
   ```bash
   uvicorn main:app --reload
   ```

6. **Access the API Docs:**
   - Open your browser and navigate to:
     ```
     http://127.0.0.1:8000/docs
     ```

---

## 📂 Project Structure

```
app/
├── __init__.py
├── main.py                  # FastAPI application entry point
├── config.py                # Configuration settings
├── db/
│   ├── __init__.py
│   └── database.py          # Microsoft Fabric connection setup
├── models/
│   ├── __init__.py
│   ├── user.py              # User data models
│   └── transaction.py       # Transaction data models
├── schemas/
│   ├── __init__.py
│   ├── user.py              # User Pydantic schemas
│   └── transaction.py       # Transaction Pydantic schemas
├── api/
│   ├── __init__.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth.py          # Authentication routes
│   │   ├── users.py         # User management routes
│   │   └── transactions.py  # Transaction routes
│   └── dependencies.py      # API dependencies
├── services/
│   ├── __init__.py
│   ├── auth_service.py      # Azure AD authentication logic
│   ├── transaction_service.py # Transaction processing logic
│   ├── payment_service.py    # M-Pesa/Stripe integration
│   └── ai/
│       ├── __init__.py
│       ├── fraud_detection.py # Fraud detection with Azure ML
│       └── budget_prediction.py # Predictive budgeting with Azure ML
└── core/
    ├── __init__.py
    ├── security.py          # Security utilities
    └── exceptions.py        # Custom exceptions
```

---

## 📌 Usage

### API Endpoints
- **Authentication:**
  - `POST /register`: Register a new user.
  - `POST /login`: Log in and get a JWT token.

- **Users:**
  - `GET /users`: Get a list of all users.
  - `GET /users/{id}`: Get details of a specific user.
  - `PUT /users/{id}`: Update user details.
  - `DELETE /users/{id}`: Delete a user.

- **Transactions:**
  - `POST /transactions`: Create a new transaction.
  - `GET /transactions`: Get a list of all transactions.
  - `GET /transactions/{id}`: Get details of a specific transaction.
  - `PUT /transactions/{id}`: Update a transaction.
  - `DELETE /transactions/{id}`: Delete a transaction.

- **AI Services:**
  - `POST /ai/fraud-detection`: Detect fraud in a transaction.
  - `POST /ai/budget-prediction`: Predict future budgets.

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

---