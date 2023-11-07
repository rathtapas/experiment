// tabclick.js
function handleTabClick() {
    // Get the ID of the clicked element
    const clickedElementId = this.id;

    // Get the current timestamp
    const timestamp = Date.now();
    // const currentStimuli = rec_array[currentTrial];
    // const stimulus = currentStimuli[currentStimulus];
    // save the event details
    // console.log('currentStimuli: ',currentStimuli);
    saveEventDetails(currentTrial, currentStimuli,rec_array[currentTrial]['trial_type'], 'handleTabClick', clickedElementId, timestamp,0, clickedElementId);
    
    if (document.getElementById("three_rectangles").style.display === "block") {  
        // Get the necessary variables from their parent scope
        rec_cont = document.getElementById("rec_cont");
        rec_cont.style.display = "flex";
        // console.log("three_rectangles display ", document.getElementById("three_rectangles").style.display); 
        let rectangleElements = document.querySelectorAll('.rectangles');
        // rectangleElements.forEach(rectangle => {
        //     rectangle.style.display = "flex";
        //     });
        three_rectangles = document.getElementById("three_rectangles");
        // three_rectangles.style.display = "none";
        const rec1 = document.getElementById('rec1');
        const rec2 = document.getElementById('rec2');
        const rect_container = document.getElementById('rect_container');
        
        let three_rec_id = document.getElementById("three_rec");
     
        // Store the value of the ID in a new variable
        let clickedTabID = this.id.split('-');
        clicktab1 = clickedTabID[0];
        clicktab2 = clickedTabID[1];

        // // Find the matching key for clicktab1
        // var rectangle1;
        // for (var key in rec_array[currentTrial]) {
        // if (rec_array[currentTrial].hasOwnProperty(key) && rec_array[currentTrial][key] === clicktab1) {
        //     rectangle1 = key[0];
        //     break;
        // }
        // }

        // // Find the matching key for clicktab2
        // var rectangle2;
        // for (var key in rec_array[currentTrial]) {
        // if (rec_array[currentTrial].hasOwnProperty(key) && rec_array[currentTrial][key] === clicktab2) {
        //     rectangle2 = key[0];
        //     break;
        // }
        // }

        rec1.style.width = rec_array[currentTrial][clicktab1 + '_width'] + 'px';
        rec1.style.height = rec_array[currentTrial][clicktab1 + '_height'] + 'px';

        rec2.style.width = rec_array[currentTrial][clicktab2 + '_width'] + 'px';
        rec2.style.height = rec_array[currentTrial][clicktab2 + '_height'] + 'px';
  
    
        // Get the new elements for displaying the names
        const rec1Text = document.getElementById('rec1_text');
        const rec2Text = document.getElementById('rec2_text');
    
        // Set the text content of the new elements
        rec1Text.textContent = rec_array[currentTrial][clicktab1 + '_name'];
        rec2Text.textContent = rec_array[currentTrial][clicktab2 + '_name'];

        

        // three_rec_id.style.display= "none";
        rectangleElements.forEach(rectangle => {
            rectangle.style.display= "flex";
        });

                // console.log(rec1Wid, rec1Heig, rec2Wid, rec2Heig,'RecElements exist');
                // rectangleElements
        // Select all elements with class name 'tabobj'
        // console.log("three_rectangles display ", document.getElementById("three_rectangles").style.display);
        let tabobjElements = document.querySelectorAll('.tabobj');
   
        three_rectangles.style.display = "none";
        // let tabobjElements = Array.from(document.querySelectorAll('.tabobj'));
        tabobjElements.forEach(element => {
        element.style.backgroundColor = 'yellow';
        });      
          
          
        // Attach event listener to each tabobj element
        tabobjElements.forEach(tabobj => {
            tabobj.addEventListener('click', handleTabClick);
        });
    }
}

