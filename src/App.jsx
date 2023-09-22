import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let text;
  const str1 = 'text1';
	const str2 = 'text1';
  const name = 'user';
	const age  = '30';
  const arr = [1, 2, 3, 4, 5];
  const obj = {name: 'john', surname: 'smit'};
  const attr = 'block';
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
  const items = <><li>text1</li><li>text2</li><li>text3</li></>;
  const isAdult = false;


  // 7-ое задание
	return <div>
		<p className='text'>Virginiya</p>
    <p className='text'>was forever yuang</p>

  {/* 8-ое задание */}
    <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
		</ul>;
    
    {/* 9-ое задание */}
    {/* return( */}
      <ul>
        <li>text1</li>
        <li>text2</li>
        <li>text3</li>
      </ul>
  {/* ); */}

  {/*  10-ое задание */}

	{/*  return ( */}
  <>
  <ul>
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
	</ul>
	<ul>
		<li>text1</li>
		<li>text2</li>
		<li>text3</li>
	</ul>
  </>
  {/*  ); */}

  {/* 11-ое задание */}
   <input/>

  {/* 12-ое задание */}
   <input/><input/><input/>

   {/* 13-ое задание */}
   <div>
		<p>{str1}</p>
		<p>{str2}</p>
	</div>
  {/* 14-ое задание */}
  <div>
		name: {name}
		age:  {age}
	</div>
  {/* 15-ое задание */}
  <ul>
    <li>{arr[0]}</li>
    <li>{arr[1]}</li>
    <li>{arr[2]}</li>
    <li>{arr[3]}</li>
    <li>{arr[4]}</li>
  </ul>
  {/* 16-ое задание */}
  <p>name: {obj.name}</p>
	<p>surname: {obj.surname}</p> 
  
  {/* 17-ое задание */}
  <div id={attr}>
		text
	</div>

  {/* 19-ое задание */}
  <main>
    {li1}{li2}{li3}
  </main>

  {/* 20-ое задание */}
  <ul>
		{items}
	</ul>

  {/* 22-ое задание */}
  <div>
    <input/>
    <br/>
    <input/>
    <br/>
    <input/>
  </div>

  {/* 23-е задание */}
  {/* 1.1 */}
  <>
  <ul>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
    <li>5</li>
  </ul>
  </>
  {/* 1.2 */}
  <>
    <table>
    <tbody>
			<tr>
				<td>1</td>
				<td>1</td>
        <td>1</td>
			</tr>
			<tr>
				<td>2</td>
				<td>2</td>
        <td>2</td>
			</tr>
      <tr>
				<td>3</td>
				<td>3</td>
        <td>3</td>
			</tr>
		</tbody>
    </table>
  </>
  {/* 24-ое задание */}
   {/*(Результат:9)*/}
   {/*(John Smit) */}
   {/*(Результат: 2)*/}

  {/* 26-ое задание другой документ*/} 
  {/* 27-ое задание другой документ*/} 

	</div>;
}


export default App























// function App() {
//   const [count, setCount] = useState(0)

//   const decrement = () => {
//     let c = count;
//     setCount(count - 1)
//   }
//   const increment = () => {
//     let c = count;
//     setCount(count + 1)
//   }
//   return (
//     <>
//       <div className='container'>
//         <p className='text'>{count}</p>
//         <button className='btn1' onClick={decrement}>Назад</button>
//         <button className='btn1' onClick={increment}>Вперёд</button>
//       </div>
      
//     </>
//   )
// }