/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Student: Kristhen Vidal Sainz.
******************************************/

// Global variables.
const studentsPerPage = 10;
const students = document.getElementsByClassName('student-item');

// showPage function, with which we show just 10 students per page.
const showPage = (list, pageNum) => {
   let start = (pageNum * studentsPerPage) - studentsPerPage;
   let end = pageNum * studentsPerPage;
   for (let i = 0; i < list.length; i += 1){
      if (i >= start && i < end) {
         list[i].style.display = 'block';
       } else {
         list[i].style.display = 'none';
      }
   }
}

// AppendPageLinks function, with which we create the div, ul, li and a elements necessary for the pagination links to appear on the screen.
const appendPageLinks = (list) => {
  // Calling the showPage function so only the first page with the first 10 students is shown.
   showPage(list, 1);
  
   let pages = Math.ceil( list.length / studentsPerPage );
   const pagDiv = document.createElement('div');
   pagDiv.className = 'pagination';
   const divPage = document.querySelector('div.page');
   divPage.appendChild(pagDiv);

   const ul = document.createElement('ul');
   pagDiv.appendChild(ul);

   // For loop to create and append li and a elements.
   for (let i = 0; i < pages; i += 1){
      
      const li = document.createElement('li');

      const a = document.createElement('a');
      a.textContent = i + 1;
      a.href = '#';
   

      ul.appendChild(li);
      li.appendChild(a);
      
      if (a.textContent === '1'){
         a.className = 'active';
      }
      
      // Event Listener so the buttons change the page shown. 
      // It also adds the class 'active' so the buttons change color when clicked on.
      a.addEventListener('click', (e) => {
            
            // For loop to remove the 'active' class from all the buttons, so we can add it to the one clicked only.
            const aElements = document.querySelectorAll('a');
            for (let i = 0; i < aElements.length; i += 1){
               aElements[i].className = '';
            }

            // Calling the showPage function so it shows the correct page.
            showPage(list, i + 1)

            e.target.className = 'active';
         }
      );
   }

}

// Calling the appendPageLinks function to make everything work.
appendPageLinks(students);



// Remember to delete the comments that came with this file, and replace them with your own code comments.