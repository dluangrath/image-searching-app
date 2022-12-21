function SearchBar({ onSubmit }) {
    const handleCLick = () => {
        onSubmit('cars');
    };

    return <div>
        <input />
        <button onClick={handleCLick}>Click me</button>
    </div>;


}

export default SearchBar;