greatestOfTwoNumbers = (a, b) => 
{
    if (a > b)
      return a;
    else                                 
      return b;
}
console.log(greatestOfTwoNumbers(2, 1));
  
const arr = ['george', 'alice', 'alex', 'john', 'infanta', 'xavior', 'LourdhAntony'];
findScaryWord = (arr) => 
{
    let max = '';
    arr.forEach((word) => 
    {                                  
      if (word.length > max.length) 
      {
        max = word;
      }
    });
    return max;
}
console.log(findScaryWord(arr));
  
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
  
const arr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg = (arr) => 
{
    let totalArray = 0;
    for (i = 0; i < arr.length; i++) 
    {
        if (typeof (arr[i]) == 'string' || typeof (arr[i]) == 'boolean') 
        {
            if (typeof (arr[i]) == 'string') 
            {                                             
                totalArray += arr[i].length;
            }
            else 
            {
                let temp;
                temp = Number(arr[i]);
                totalArray += temp;
            }
        }
        else 
        {
            totalArray += arr[i];
        }
    }
    return totalArray;
}
console.log(avg(arr));
  
  
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

const arr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
avg = (arr) => 
{
    let totalArray = 0;
    for (i = 0; i < arr.length; i++)
    {
        if (typeof (arr[i]) == 'string' || typeof (arr[i]) == 'boolean') 
        {
            if (typeof (arr[i]) == 'string') 
            {                                             
                totalArray += arr[i].length;
            }
            else 
            {
                let temp;
                temp = Number(arr[i]);
                totalArray += temp;
            }
        }
        else 
        {
            totalArray += arr[i];
        }
    }
    return totalArray;
}
console.log(avg(arr) / arr.length);
  
var arr = ['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffe powder', 'sugar', 'salt', 'egg', 'flour'];
var unique = arr.filter((x, i) => arr.indexOf(x) === i);
console.log(unique);          
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
const maximumProduct = (arr) => 
{
    let maxProduct = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = 0; j < arr.length; j++) 
        {
            if ((j - 3) >= 0) 
            {
                let product1 = multiplyFourNumbers(arr[i][j], arr[i][j - 1], arr[i][j - 2], arr[i][j - 3]);
                if (product1 > maxProduct) 
                {
                    maxProduct = product1;
                }
            }
            if ((i - 3) >= 0) 
            {                                                                                   
                let product2 = multiplyFourNumbers(arr[i][j], arr[i - 1][j], arr[i - 2][j], arr[i - 3][j]);
                if (product2 > maxProduct) 
                {
                    maxProduct = product2;
                }
            }
        }
    }
    return maxProduct;
}
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
  