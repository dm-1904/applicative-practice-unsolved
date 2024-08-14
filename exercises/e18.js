


/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let obj = {}
  let orderedArr = data.asteroids
      .map((el) => el.discoveryYear)

  for (let year of orderedArr) {
    if(obj[year]) obj[year]++
    else (obj[year] = 1)
  }

// I don't know how to sort the right answer out of the object
return obj
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
