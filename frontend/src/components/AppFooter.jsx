export default function AppFooter() {
  return (
<footer className="bg-dark text-white">
    <div className="container bg-dark text-white">
        <div className="row justify-space-between">
            <div className="col">
    <ul className="list-unstyled">
        <li>
            1
        </li>
        <li>
            2
        </li>
    </ul>
            </div>
            <div className="col">
                <ul className="list-unstyled">
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
             <div className="col">
                <ul className="list-unstyled">
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
            <div className="row text-center">
                <p>
                    © {new Date().getFullYear()} — Any Right Reserved to Saul Buonuomo
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}