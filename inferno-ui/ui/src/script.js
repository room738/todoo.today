// // if hue is in here, jump to a different hue
// const skipMap = {
//     150: 180,
//     1: 115, 
//     360: 0
// }

// window.setInterval(() => {
//     let hue = getComputedStyle(document.documentElement).getPropertyValue('--main-hue');
//     let newHue = parseInt(hue) + 1;
//     if (newHue in skipMap) {
//         newHue = skipMap[newHue];
//     }
//     document.documentElement.style.setProperty('--main-hue', newHue.toString());
// }, 500);