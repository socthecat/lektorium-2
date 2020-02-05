console.log('### TASK 3 ###')

function task3 () {
  const price = parseInt(document.getElementById('task3_form1').value)
  const banknote = parseInt(document.getElementById('task3_form2').value)
  const banknoteArr = [1, 2, 5, 10, 20, 50, 100]
  const change = (banknote > price) ? (banknote - price) : location.reload()
  const arr2 = banknoteArr.reverse()

  function changeCalculator (change, count, result) {
    for (let i = count; i < arr2.length; i++) {
      let changeTemp = change
      let resultTemp = result

      while (changeTemp > 0) {
        if (resultTemp !== '') {
          resultTemp += ' + '
        }
        resultTemp += arr2[i]
        changeTemp -= arr2[i]

        if (changeTemp > 0) {
          changeCalculator(changeTemp, i + 1, resultTemp)
        }
      }

      if (changeTemp === 0) {
        console.log(resultTemp)
      }
    }
  }
  changeCalculator(change, 0, '')
}

document.getElementById('submit3').addEventListener('click', task3)
