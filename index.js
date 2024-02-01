function increament() {
   let millisecond = Number(document.querySelector(".miliseconds").innerHTML);
   millisecond++;
   document.querySelector(".miliseconds").innerHTML = millisecond;
   let minute = Number(document.querySelector(".minutes").innerHTML);
   let second = Number(document.querySelector(".seconds").innerHTML);
   if (millisecond == 100) {
      second++;
      document.querySelector(".seconds").innerHTML = second;
      document.querySelector(".miliseconds").innerHTML = 0;
   }
   if (second > 60) {
      minute++;
      document.querySelector(".minutes").innerHTML = minute;
      document.querySelector(".seconds").innerHTML = 0;
      // document.querySelector(".minutes").innerHTML = 0;
   }
}

function incrementer() {
   setTimeout(increament(), 10);
}

let incrementInterval;
function start() {
   let loader = document.querySelector(".line-style");
   loader.classList.add("loader-line");
   incrementInterval = setInterval(incrementer, 10);
   // incrementer();
   // let millisecond = 0;
   // document.querySelector(".miliseconds").innerHTML = millisecond;
   //    setInterval(() => {
   //       document.querySelector(".miliseconds").innerHTML = millisecond;
   //       millisecond++;
   //       second = Number(document.querySelector(".seconds").innerHTML);
   //       if (millisecond > 60) {
   //          second++;
   //          document.querySelector(".seconds").innerHTML = second;
   //          let minute = Number(document.querySelector(".minutes").innerHTML);
   //          millisecond = 0;
   //          if (second > 60) {
   //             minute++;
   //             document.querySelector(".minutes").innerHTML = minute;
   //             document.querySelector(".seconds").innerHTML = 0;
   //          }
   //       }
   //    }, -10);
}

function stop() {
   let loader = document.querySelector(".loader-line");
   loader.classList.remove("loader-line");
   clearInterval(incrementInterval);
}

function lap() {
   let div = document.createElement("section");
   let millisecond = document.querySelector(".miliseconds").innerHTML;
   let second = document.querySelector(".seconds").innerHTML;
   let minute = document.querySelector(".minutes").innerHTML;
   let finalString = `${minute} - ${second} - ${millisecond}`;

   div.innerHTML = finalString;
   let leftDiv = document.querySelector(".left-hero");
   leftDiv.appendChild(div);
   // document.body.appendChild(div);
}

function reset() {
   stop();
   document.querySelector(".seconds").innerHTML = 0;
   document.querySelector(".miliseconds").innerHTML = 0;
   document.querySelector(".minutes").innerHTML = 0;
}
