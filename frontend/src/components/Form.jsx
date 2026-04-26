import { useState } from "react"

export default function Form() {

  const [input, setInput] = useState({
    Name: '',
    LastName: '',
    Email: ''
  })

  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState({ type: "", message: "" })

  const handleInput = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setFeedback({ type: "", message: "" })
    setLoading(true)

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFeedback({ type: "success", message: "Richiesta inviata con successo ✅" })
        setInput({ Name: '', LastName: '', Email: '' }) // reset form
      } else {
        setFeedback({ type: "danger", message: data.message || "Errore durante l'invio" })
      }
    } catch (error) {
      setFeedback({ type: "danger", message: "Impossibile contattare il server" })
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      <p className="h1">Hai bisogno di aiuto? Lascia i tuoi dati, al resto pensiamo noi.</p>
      
      {feedback.message && (
        <div className={`alert alert-${feedback.type} mt-3`} role="alert">
          {feedback.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" id="Name" name="Name" aria-describedby="Name-Field" onChange={handleInput} value={input.Name} />
        </div>
        <div className="mb-3">
          <label className="form-label">Cognome</label>
          <input type="text" className="form-control" id="LastName" name="LastName" aria-describedby="Last-Name-Field" onChange={handleInput} value={input.LastName} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="Email" name="Email" aria-describedby="Email-Field" onChange={handleInput} value={input.Email} />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Invio in corso..." : "Submit"}
        </button>
      </form>
    </>
  )
}