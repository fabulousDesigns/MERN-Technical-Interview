import React from "react"

const UseCallbackAnduseMemo = () => {
  const [selctedNum, setSelectedNum] = React.useState(100)
  const allPrimes = []
  for (let counter = 2; counter <= selctedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter)
    }
  }
  return (
    <>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // To prevent computers from exploding,
            // we'll max out at 100k
            let num = Math.min(100_000, Number(event.target.value))

            setSelectedNum(num)
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  )
}

// Helper function that calculates whether a given
// number is prime or not.
function isPrime(n){
    const max = Math.ceil(Math.sqrt(n));

    if (n === 2) {
      return true;
    }

    for (let counter = 2; counter <= max; counter++) {
      if (n % counter === 0) {
        return false;
      }
    }

    return true;
  }

export default UseCallbackAnduseMemo
