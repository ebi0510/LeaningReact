import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}


export default function Board() {
  // Square関数の定義
  // ecportするのでこのファイル外からもアクセスできる
  // defaultはSquareがこのファイルのメイン関数だと指定している
  return (
    <>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    </>
  );
  // JSXで定義（HTML+JSで書かれたコード）
  // return=JS,<button></button>＝HTML
}
