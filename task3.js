console.log("### TASK 3 ###");

function task3() {
    const price = parseInt(document.getElementById('task3_form1').value);
    const banknote = parseInt(document.getElementById('task3_form2').value);
    const banknote_arr = [1, 2, 5, 10, 20, 50, 100];
    let change = (banknote > price) ? (banknote - price) : location.reload();
    let arr2 = banknote_arr.reverse();
    
    function changeCalculator(change, count, result) {
        for (i = count; i < arr2.length; i++) {
            let change_temp = change;
            let result_temp = result;

            while (change_temp > 0) {
                if (result_temp !== "") {
                    result_temp += " + ";
                }
                result_temp += arr2[i];
                change_temp -= arr2[i];

                if (change_temp > 0) {
                    changeCalculator(change_temp, i + 1, result_temp);
                }
            }

            if (change_temp === 0) {
                console.log(result_temp);
            }
        }
    }
    changeCalculator(change, 0, "");
}

document.getElementById('submit3').addEventListener('click', task3);