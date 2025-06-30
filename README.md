
# Resume Editor

## Setup Instructions

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

frontend/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── index.css
    ├── index.js
    ├── App.js
    └── components/
        └── ResumeForm.js
