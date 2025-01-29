export default function SearchBox() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Message Blackbox..." />
            <div className="search-icons">
                <span>🌐</span>
                <span>📦</span>
                <span>✏️</span>
                <span>📷</span>
                <button className="send-btn">↑</button>
            </div>
        </div>
    );
}
