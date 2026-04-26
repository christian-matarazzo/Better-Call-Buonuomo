
const express = require('express')
const cors = require('cors')
const db = require('./db') 
require('dotenv').config() 

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

async function initDB() {
  try {
    const [rows] = await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Tabella contacts pronta');
  } catch (err) {
    console.error('❌ Errore creazione tabella:', err.message);
  }
}

initDB();


app.get('/', (req, res) => {
  res.send('Benvenuto al server Better Call Buonuomo')
})

app.post('/api/contact', async (req, res) => {
  const { Name, LastName, Email } = req.body;

  if (!Name || !LastName || !Email) {
    return res.status(400).json({ 
      success: false, 
      message: "All fields are required: Name, LastName, Email" 
    });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO contacts (name, last_name, email) VALUES (?, ?, ?)',
      [Name, LastName, Email]
    );

    console.log('✅ Contatto salvato nel DB. ID:', result.insertId);
    
    return res.status(200).json({ 
      success: true, 
      message: "Contact received and saved",
      data: { Name, LastName, Email }
    });

  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ 
        success: false, 
        message: "Questa email è già stata registrata" 
      });
    }
    
    console.error('❌ Errore DB:', error.message);
    return res.status(500).json({ 
      success: false, 
      message: "Errore interno del server" 
    });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server attivo su http://localhost:${port}`)
})