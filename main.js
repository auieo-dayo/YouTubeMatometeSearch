const youtubeurl = "https://www.youtube.com/results?search_query=";

function convertToArray() {
    const textareaValue = document.getElementById("text").value;
    const linesArray = textareaValue.split(/\r?\n/); // 改行で分割

    for (let i = 0; i < linesArray.length; i++) {
        const searchQuery = encodeURIComponent(linesArray[i].trim()); // 検索キーワードをエンコード
        if (searchQuery) {
            setTimeout(function() {
                window.open(
                    youtubeurl + searchQuery, // ポップアップで表示するURL
                    searchQuery,             // ウィンドウの名前
                    'width=600,height=400'     // ポップアップのサイズ
                );
            }, i * 500); // 500msの間隔でポップアップを開く
        }
    }
}