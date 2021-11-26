
import { Fragment, useState } from 'react';
import html2canvas from "html2canvas";
import './App.css';

function App() {

  let [text1, setText1] = useState('');
  let [text2, setText2] = useState('');
  let [img, setImg] = useState('default');

  let onChangeText1 = function (evt) { setText1(evt.target.value); }
  let onChangeText2 = function (evt) { setText2(evt.target.value); }
  let onChangeImg = function (evt) { setImg(evt.target.value); }
  let exportImg = function () { 
    html2canvas(document.querySelector('#meme')).then(function(canvas) {
      let element = document.createElement("a");
      element.href = canvas.toDataURL('image/jpeg');
      element.download = "meme.jpg";
      element.click();
    });
  }
 

  return (
    <Fragment>
      <h1>Creador de Memes</h1>
      <div className="App">
        <div className="left">
          <select onChange={onChangeImg}>
            <option value="default">Elegir meme...</option>
            <option value="fire">En Llamas</option>
            <option value="futurama">Futurama</option>
            <option value="history">History Channel</option>
            <option value="matrix">Matrix</option>
            <option value="philosoraptor">Filosoforaptor</option>
            <option value="smart">Smart Guy</option>
          </select>
          <input onChange={onChangeText1} type="text" placeholder="Texto Superior" />
          <input onChange={onChangeText2} type="text" placeholder="Texto Inferior " />
          <button onClick={exportImg}> Exportar </button>
        </div>
        <div class="right">
          <div id="meme" style={{backgroundImage: `url('./img/${img}.jpg')`}}>
            <span>{text1}</span>
            <span>{text2}</span>
          </div>
        </div>      
      </div>
    </Fragment>
  );
}

export default App;
