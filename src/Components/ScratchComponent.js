 export const createMultipleRounds = () => {
    let createRoundArray = combineQuestionArrays() 
    let multipleRoundArray = []
    let counter = 0 
    while (createRoundArray.length >= 10) {
      let roundArray = []
        while (counter < 10) {
          roundArray.push(createRoundArray[counter])
          createRoundArray.shift()
          counter += 1
        }
        multipleRoundArray.push(roundArray)
    }
    return multipleRoundArray
  }