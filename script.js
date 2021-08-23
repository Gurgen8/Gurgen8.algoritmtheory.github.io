let allPrimes = [];
      

function sieve(n)
{
      

    let prime = new Array(n+1);
      
    for(let i = 0; i <= n; i++)
        prime[i] = true;
      

    for (let p = 2; p * p <= n; p++)
    {
    
      if (prime[p] == true)
      {
 
          for (let i = p*2; i <= n; i += p)
              prime[i] = false;
      }
    }
  
    for (let p = 2; p <= n; p++)
      if (prime[p])
        allPrimes.push(p);
  }


function factorialDivisors(n)
{
  sieve(n); 


  let result = 1;


  for (let i = 0; i < allPrimes.length; i++)
  {
 
    let p = allPrimes[i];

   
    let exp = 0;
    while (p <= n)
    {
      exp = exp + parseInt(n / p, 10);
      p = p * allPrimes[i];
    }

  
    result = result * (exp + 1);
  }


  return result;
}
 
document.write(factorialDivisors(4));