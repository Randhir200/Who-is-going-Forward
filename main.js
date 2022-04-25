function runProgram(input) {
    input = input.trim().split("\n");
    var [n,k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    
    //10 9 8 7 7 7 5 5
  
    var count = k; //5
    if(arr[k]!=0){
    for(var i=k;i<n;i++){ //3
        if(arr[i]>=arr[k-1]){ //5=>4
            count++; //4
        }else{
            break;
        }
     } 
    }else{
        count = 0;
    }
    
    
    console.log(count);
    
    
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  