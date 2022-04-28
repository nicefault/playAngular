
if ("" == 0) {
    console.log(`"" == 0        <= True`)
}
for (let i = 0; i < 10; i++) {
    if (1 < i < 3) {
        // *어떤* x 값이던 참입니다!
        console.log(`1<i<3        <= True (i=${i})`)
    }
    else{
        console.log(`1<i<3        <= False (i=${i})`)
    }
}


const obj = { width: 10, height: 15 };
// 왜 이게 NaN이죠? 철자가 어렵네요!
const area = obj.width * obj.heigth;
console.log(area)