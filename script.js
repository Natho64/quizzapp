
let control = (function(){
   
    
    let submit, questionhtml,score = 0, currentQuestion = 0;
    submit = document.getElementById('submit_btn');

    body = document.querySelector('.main_body');
    
   //questionhtml = '<div id ="question_page">    <h2>Question 1 0f 10</h2>    <form action="#" class="option_list">        <p id="question_1">How many gram makes 1 kilogram?</p> <input type="radio" name="" id="option_1" class="options">1000 <br>        <input type="radio" name="" id="option_1" class="options">2000 <br>        <input type="radio" name="" id="option_1" class="options">3000 <br>        <div class="prev_next">   <button class="prev"><i class="ion-ios-arrow-back"></i>previous</button>  <button class="next">next<i class="ion-ios-arrow-forward"></i></button>    </div>        <button class="submit_ans">submit</button>    </form>        </div>';
   
   const question = [["what is a cat?", "animal", "human", "fire", "A"],[] ];
 

    submit.addEventListener('click', function(){
        let lastName, questionIndexPane, questionPane, firstName, questionpage, optionsPage, optA, optB, optC, optD, submitAns, selected;
        lastName = document.querySelector('.participant_lastname').value;
        firstName = document.querySelector('.participant_firstname').value;
        questionIndexPane = document.getElementById('header_1');
        questionPane = document.getElementById("name_reg");
        questionpage = document.getElementById('question_page');
        optionsPage = document.getElementById('reg_formm');
        

        optA = question[currentQuestion][1];
        optB = question[currentQuestion][2];
        optC = question[currentQuestion][3];
        optD = question[currentQuestion][4];
        
        


         
        //if (lastName !== "" && firstName !== "") {
            //body.innerHTML = questionhtml;
            
            questionIndexPane.innerHTML = `Question ${currentQuestion + 1} of ${question.length}`;
            questionPane.classList.add("question_number");
            questionPane.innerHTML = question[currentQuestion][0] + "<br>";
            optionsPage.classList.remove("reg_form");
            optionsPage.classList.add("options_des");
            optionsPage.innerHTML = '<input type="radio" name="options"   value="A">' + optA + "<br>";
            optionsPage.innerHTML += '<input type="radio" name="options" value="B">' + optB + "<br>";
            optionsPage.innerHTML += '<input type="radio" name="options" value="C">' + optC + "<br>";
            optionsPage.innerHTML += '<input type="radio" name="options" value="D">' + optD + "<br>";

            optionsPage.innerHTML += '<button class="prev"><i class="ion-ios-arrow-back"></i>previous</button>';
            optionsPage.innerHTML += '<button class="next">next<i class="ion-ios-arrow-forward"></i></button>'  + "<br>";

            optionsPage.innerHTML += '<button class="submit_ans" onclick="checkAns()">submit</button>';

            function checkAns(){
                options = document.getElementsByName('options');
                for (let i = 0; i < options.length; i++) {
                    if(options[i].checked) {
                        selected = options[i].value;
                    }        

                }
                if (selected = question[currentQuestion][5]) {
                    score +=1;
                }
            }
            console.log(firstName, lastName);
      //  }            
    })
    
    
//question  loading
    


   

})();