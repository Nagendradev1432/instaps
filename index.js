// let arr1=[4,2,8,6,15,5,9,20]
// res=""
// let mid=arr1.length/2
// arr3=arr1.slice(0,3)
// arr4=arr1.slice(3,arr1.length)
// console.log(arr3)
// console.log(arr4)
// arr3.sort((a,b)=>a-b)
// arr4.sort((a,b)=>b-a)
// console.log(arr3)
// console.log(arr4)
// res=res+arr3.join(" ")+" "
// res=res+arr4.join(" ")
// console.log(res)


// let arr1=[2,2,3,4,4,2]
//  emp=[],sum=0,res=""
// for(i of arr1){
//     if(!emp.includes(i)){
//         emp.push(i)

//     }
// }
// console.log(arr1)
//  console.log(emp)
 
//  for(j of emp){
//      c=0
//      for(k of arr1){
//          if(j==k){
//              c++
//          }
           
//      }
//      if(c>1){
//          console.log(k,c)
//      }
//      else{
//          console.log(j,c)
//      }
     
//  }



//  let arr1=[20,15,26,2,98,6]
// temp=[],out=""
// for(i of arr1){
//     temp.push(i)
// }
// arr1.sort((a,b)=>a-b)
// console.log(arr1)
// console.log(temp)
// for(k of temp){
//     for(j of arr1){
//         if(temp[k]==arr1[j])
//         out=out+(Number)(j)+1)+" "
//     }
    
// }
// console.log(out)

// let str1=prompt("enter a string1 : ").split("")
// let str2=prompt("enter a string2 :").split("")
//  e=0
// c=str1.sort()
// d=str2.sort()

// console.log(c)
// console.log(d)
// for(j of c){
   
//     for(k of d){
//         if(j==k){
//             e++
            
//         }
//     }
// }
// if(e==c.length && e==d.length){
//     console.log("True")
// }
// else{
//     console.log("False")
// }



// let str1=prompt("enter a string :").toLowerCase()
// let str2=""
// for(i of str1){
//     str2=i+str2
// }
//     if(str2==str1){
//         console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }

 


// const arr=["baby","baby"]
// console.log(arr[2])

// let str1="abcd".split("")
// let str2="abcde".split("")
// for(j of str2){
//     if(!str1.includes(j)){
//         console.log(j)
//     }
// }


// let str1 = "abcd".split("");
// let str2 = "abcde".split("");

// // Iterate through each character in str2
// for (let j of str2) {
//     // Check if the character from str2 is not in str1
//     if (!str1.includes(j)) {
//         console.log(j); // Print the character that is in str2 but not in str1
//         break; // Assuming only one extra character in str2
//     }
// }

