for (let i  = 0; i<= 10 ; i ++) {         // for loop
    const element =  i;

    if (element == 5) {
        console.log("5 is best number");
        
    }
    
}

// multiple loop

for (i = 0; i<=10; i++){
    console.log(`for outer loop value ${i}`);

    for (j =0; j<=10; j++){
        console.log(`inner loop value is ${j} and outer loop value is ${i}`);
        console.log(i+'*'+j+'='+ i*j);
    }
}


// break and continue

for(v = 0; v <= 20; v++){
    if (v == 5) {
        console.log("Detected 5");
                                          // <--- brek & continue
    }
    console.log(`value of v is ${v}`);
}


