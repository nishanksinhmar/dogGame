const grid1 = document.getElementById('grid1');
const grid2 = document.getElementById('grid2');
const grid3 = document.getElementById('grid3');
const grid4 = document.getElementById('grid4');
const grid5 = document.getElementById('grid5');
const grid6 = document.getElementById('grid6');
const grid7 = document.getElementById('grid7');
const grid8 = document.getElementById('grid8');
const grid9 = document.getElementById('grid9');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

const imgNone = document.getElementById('none')

let gridVal1 = ""
let gridVal2 = ""
let gridVal3 = ""
let gridVal4 = ""
let gridVal5 = ""
let gridVal6 = ""
let gridVal7 = ""
let gridVal8 = ""
let gridVal9 = ""

let winCond = ""

let selectedImg = 2

// img3.style.display = 'none';

const temp2 = document.getElementById('temp2')
temp2.addEventListener('click', function () {

})

const temp1 = document.getElementById('temp1')
temp1.addEventListener('click', function () {
  console.log(`gridVal1: ${gridVal1}`)
  console.log(`gridVal2: ${gridVal2}`)
  console.log(`gridVal3: ${gridVal3}`)
  console.log(`gridVal4: ${gridVal4}`)
  console.log(`gridVal5: ${gridVal5}`)
  console.log(`gridVal6: ${gridVal6}`)
  console.log(`gridVal7: ${gridVal7}`)
  console.log(`gridVal8: ${gridVal8}`)
  console.log(`gridVal9: ${gridVal9}`)
}
)

function check() {
  console.log('check')
  if (gridVal1 == 1 || gridVal2 == 1 || gridVal3==1 || gridVal4==1 || gridVal5==1 || gridVal6==1 || gridVal7==1 || gridVal8== 1 || gridVal9== 1 ) {
    window.location.href=('cat.html')
  }
  for (let i = 1; i <= 6; i++) {
    const img = document.getElementById(`img${i}`);
    img.style.opacity = 1
  }
  const alpha = document.getElementById(`img${selectedImg}`)
  alpha.style.opacity = 0.7


}


function imgCheck(a) {
  const imgUrl = document.getElementById(`img${selectedImg}`).src;
  const newImg = document.createElement('img');
  newImg.src = imgUrl;

  newImg.classList.add('new-img')

  const grid = document.getElementById(`grid${a}`);
  console.log(grid.children.length)
  if (grid.children.length<1) {
    grid.appendChild(newImg);
    console.log(a)
  } else {
    grid.removeChild(grid.firstChild)
  }
  
}


for (let i = 1; i <= 6; i++) {
  const img = document.getElementById(`img${i}`);
  img.addEventListener('click', function () {
    // console.log(`img${i} clicked`);
    selectedImg = i;
    // console.log(`selectedImg:${selectedImg}`)
    check()
  });

}

// for (let i = 1;  i <= 9; i++) {
//   const grid = document.getElementById(`grid${i}`);
//   grid.addEventListener('click', function () {
//     console.log(`grid${i} clicked`)

//     // selectedImg = this;
//     // `grid${i}` = selectedImg
//     check()
//   })

// }

for (let i = 1; i < 10; i++) {
  const gridd = document.getElementById(`grid${i}`)
  gridd.addEventListener('click', function () {
    console.log(`grid${i}`)

    if (i == 1) {
      gridVal1 = selectedImg
    }
    if (i == 2) {
      gridVal2 = selectedImg
    }
    if (i == 3) {
      gridVal3 = selectedImg
    }
    if (i == 4) {
      gridVal4 = selectedImg
    }
    if (i == 5) {
      gridVal5 = selectedImg
    }
    if (i == 6) {
      gridVal6 = selectedImg
    }
    if (i == 7) {
      gridVal7 = selectedImg
    }
    if (i == 8) {
      gridVal8 = selectedImg
    }
    if (i == 9) {
      gridVal9 = selectedImg
    }
    check() // Add this line
    let a = i 
    imgCheck(a)
    
  })
 
}


// const grids = [];
// const gridVal = [];

// for (let i = 1; i < 10; i++) {
//   grids[i] = document.getElementById(`grid${i}`);
//   grids[i].addEventListener('click', function () {
//     console.log(grids[i]);
//     gridVal[i] = selectedImg;
//     console.log(`grid${i}val${gridVal[i]}`);
//     check();

//     if ( gridVal[i] === 1) {
//       console.log("CAT");
//       // window.location.href=('cat.html')
//     }
//   });

//   if (gridVal[i] == 1) {
//     window.location.href=('cat.html')
//   }
// }


// grid1.addEventListener('click', function () {
//   console.log('grid1 clicked')
//   gridVal1 = selectedImg
//   console.log(`grid1val${gridVal1}`)
//   check() // Add this line
// })

// grid2.addEventListener('click', function () {
//   console.log('grid2 clicked')
//   gridVal2 = selectedImg
//   console.log(`grid2val${gridVal2}`)
//   check() // Add this line
// })

// grid3.addEventListener('click', function () {
//   console.log('grid3 clicked')
//   gridVal3 = selectedImg
//   console.log(`grid3val${gridVal3}`)
//   check() // Add this line
// })

// grid4.addEventListener('click', function () {
//   console.log('grid4 clicked')
//   gridVal4 = selectedImg
//   console.log(`grid4val${gridVal4}`)
//   check() // Add this line
// })

// grid5.addEventListener('click', function () {
//   console.log('grid5 clicked')
//   gridVal5 = selectedImg
//   console.log(`grid5val${gridVal5}`)
//   check() // Add this line
// })

// grid6.addEventListener('click', function () {
//   console.log('grid6 clicked')
//   gridVal6 = selectedImg
//   console.log(`grid6val${gridVal6}`)
//   check() // Add this line
// })

// grid7.addEventListener('click', function () {
//   console.log('grid7 clicked')
//   gridVal7 = selectedImg
//   console.log(`grid7val${gridVal7}`)
//   check() // Add this line
// })

// grid8.addEventListener('click', function () {
//   console.log('grid8 clicked')
//   gridVal8 = selectedImg
//   console.log(`grid8val${gridVal8}`)
//   check() // Add this line
// })

// grid9.addEventListener('click', function () {
//   console.log('grid9 clicked')
//   gridVal9 = selectedImg
//   console.log(`grid9val${gridVal9}`)
//   check() // Add this line
// })


console.log("hii")
