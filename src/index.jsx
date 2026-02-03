import ReactDOM from 'react-dom/client';

function App() {

    function handleClick() {
        console.log("i was clicked!")
    }
    return (
        <main className='container'>
            <img 
            src =""
            alt=""
            />
            <button onClick= {handleClick}>Click me</button>
        </main>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);