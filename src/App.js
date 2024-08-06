function Square({value}) {
  return <button className="square">{value}</button>;
}


export default function Board() {
  // Square関数の定義
  // ecportするのでこのファイル外からもアクセスできる
  // defaultはSquareがこのファイルのメイン関数だと指定している
  return (
    <>
    <div className="board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
    </div>
    <div className="board-row">
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
    </div>
    <div className="board-row">
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
    </>
  );
  // JSXで定義（HTML+JSで書かれたコード）
  // return=JS,<button></button>＝HTML
}
