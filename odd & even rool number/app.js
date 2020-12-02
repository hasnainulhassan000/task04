let arr = [];
        let even = [];
        let odd = [];
        function add() {
            let use = document.getElementById("input").value;
            arr.push(use);
            document.getElementById("result").innerHTML = arr;
            document.getElementById("input").value = "";

            }
            function generate() {
                for (i = 0; i <arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        even.push(arr[i]);
                         document.getElementById("ven").innerHTML = even;
                    }
                    else {
                        odd.push(arr[i]);
                        document.getElementById("udd").innerHTML = odd;
                    }

            
           
                }
            }
