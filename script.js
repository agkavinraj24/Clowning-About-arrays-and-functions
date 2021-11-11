// Challenge 1
greatestOfTwoNumbers = (a, b) => 
{
    if (a > b)
      return a;
    else                                 
      return b;
}
console.log(greatestOfTwoNumbers(2, 1));
  

//Challenge 2
const arr_word = ['george', 'alice', 'alex', 'john', 'infanta', 'xavior', 'LourdhAntony'];
findScaryWord = (arr_word) => 
{
    let max = '';
    arr_word.forEach((word) => 
    {                                  
      if (word.length > max.length) 
      {
        max = word;
      }
    });
    return max;
}
console.log(findScaryWord(arr_word));
  

//Challenge 3
const prices = [200, 100, 300, 400, 500, 700, 800, 900, 1200];
sum = (prices) => 
{
    let total = 0;
    prices.forEach((price) => 
    {                                    
      total += price;
    });
    return total;
}
console.log(sum(prices));
  
//Challenge 4
const arr1 = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg = (arr1) => 
{
    let totalArray = 0;
    for (i = 0; i < arr1.length; i++) 
    {
        if (typeof (arr1[i]) == 'string' || typeof (arr1[i]) == 'boolean') 
        {
            if (typeof (arr1[i]) == 'string') 
            {                                             
                totalArray += arr1[i].length;
            }
            else 
            {
                let temp;
                temp = Number(arr1[i]);
                totalArray += temp;
            }
        }
        else 
        {
            totalArray += arr1[i];
        }
    }
    return totalArray;
}
console.log(avg(arr1));
  
  
var array = [10, 20, 30, 40, 50, 60];
var sum = (array) => 
{
    let x = 0;
    for (i = 0; i < array.length;i++)
    {
      x += array[i];
    }
    return x;
};
console.log(sum(array) / array.length);
  
const items = ["bread","jam","milk","egg","flour","oil","rice","coffe powder","sugar","salt"];
var total_len = 0;
var total = 0;
var averageWordLength = (items) => 
{
    for (i = 0; i < items.length; i++) 
    {
      let k = items[i].length;
      total_len += k;
    }
    total = total_len / items.length;
    return total;
};
console.log(averageWordLength(items));

const arr2 = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg = (arr2) => 
{
    let totalArray = 0;
    for (i = 0; i < arr2.length; i++)
    {
        if (typeof (arr2[i]) == 'string' || typeof (arr2[i]) == 'boolean') 
        {
            if (typeof (arr2[i]) == 'string') 
            {                                             
                totalArray += arr2[i].length;
            }
            else 
            {
                let temp;
                temp = Number(arr2[i]);
                totalArray += temp;
            }
        }
        else 
        {
            totalArray += arr2[i];
        }
    }
    return totalArray;
}
console.log(avg(arr2) / arr2.length);
  

//Challenge 5
var arr3 = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffe powder', 'sugar', 'salt', 'egg', 'flour'];
var unique = arr3.filter((x, i) => arr3.indexOf(x) === i);
console.log(unique); 


//challenge 6
const alpha = ['door', 'window', 'ceiling', 'roof', 'plinth', 'tiles', 'ceiling', 'flooring'];
var isPresent = alpha.filter(words => words == 'roof');
checkval = () => 
{
    if (isPresent.length) 
    {
      return true;
    }                           
    else 
    {
      return false;
    }
}
console.log(checkval());

//Challenge 7
const words = ['machine', 'matter', 'subset', 'troubling', 'starting', 'matter', 'eating', 'matter', 'truth', 'disobedience', 'matter'];
occurence = (words) => 
{
    let len = 0;
    words.forEach((word) => 
    {
      if (word == 'matter') 
      {
        len += 1;                 
      }
    });
    return len;
}
console.log(occurence(words));
  
const multiplyFourNumbers = (a, b, c, d) => 
{
    return a * b * c * d;
}
const maximumProduct = (arr3) => 
{
    let maxProduct = 0;
    for (let i = 0; i < arr3.length; i++) 
    {
        for (let j = 0; j < arr3.length; j++) 
        {
            if ((j - 3) >= 0) 
            {
                let product1 = multiplyFourNumbers(arr3[i][j], arr3[i][j - 1], arr3[i][j - 2], arr3[i][j - 3]);
                if (product1 > maxProduct) 
                {
                    maxProduct = product1;
                }
            }
            if ((i - 3) >= 0) 
            {                                                                                   
                let product2 = multiplyFourNumbers(arr3[i][j], arr3[i - 1][j], arr3[i - 2][j], arr3[i - 3][j]);
                if (product2 > maxProduct) 
                {
                    maxProduct = product2;
                }
            }
        }
    }
    return maxProduct;
}


//Challenge 8
const matrix = [[1, 2, 3, 4, 5],[1, 25, 3, 4, 5],[1, 20, 3, 4, 5],[1, 20, 3, 4, 5],[1, 4, 3, 4, 5]];
console.log(maximumProduct(matrix));
const maximunProductOfDiagonal = (arr) => 
{
    let maxProduct = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = 0; j < arr.length; j++) 
        {
            if ((j - 3) >= 0 && (i - 3) >= 0) 
            {
                let product1 = multiplyFourNumbers(arr[i][j], arr[i - 1][j - 1], arr[i - 2][j - 2], arr[i - 3][j - 3]);
                if (product1 > maxProduct) 
                {
                    maxProduct = product1;                                                                             
                }
            }
            if ((i - 3) >= 0 && (j - 1) <= 0) 
            {
                let product2 = multiplyFourNumbers(arr[i][j], arr[i - 1][j + 1], arr[i - 2][j + 2], arr[i - 3][j + 3]);
                if (product2 > maxProduct) 
                {
                    maxProduct = product2;
                }
            }
        }
    }
    return maxProduct;
}
console.log(maximunProductOfDiagonal(matrix));