import ReactDOM from 'react-dom/client';

function App() {

    function handleClick() {
        console.log("i was clicked!")
    }

    function handleMouseOver() {
        console.log("I was hovered!")
    }
    return (
        <main className='container'>
            <img 
            src ="public/images/chef-claude.png"
            alt="chef claude image"
            onMouseOver={handleMouseOver}
            />
            <button onClick= {handleClick}>Click me</button>
        </main>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);