
 ```javascript
   document.addEventListener('DOMContentLoaded', () => {
       // 1. PRZEŁĄCZNIK AKORDIONÓW (ACCORDION)
       const accordionItems = document.querySelectorAll('.accordion-item');
       accordionItems.forEach(item => {
           const header = item.querySelector('h3');
           const content = item.querySelector('.accordion-content');

           if (header && content) {
               header.addEventListener('click', () => {
                   // Zamknięcie wszystkich innych elementów
                   document.querySelectorAll('.accordion-content').forEach(c => {
                       if (c !== content && content.style.display !== 'block') {
                           c.style.maxHeight = null;
                           c.style.padding = '20px'; // Przywracamy padding
                       }
                   });

                   // Logika otwierania/zamykania bieżącego elementu
                   if (content.style.display === 'block') {
                       content.style.display = 'none';
                       content.style.maxHeight = null;
                       header.querySelector('.arrow-icon').textContent = '▶';
                   } else {
                       content.style.display = 'block';
                       // Ustawienie maxHeight na wysokość treści jest najlepszym sposobem na płynne rozwinięcie
                       content.style.maxHeight = content.scrollHeight + "px";
                       header.querySelector('.arrow-icon').textContent = '▼';
                   }
               });
           }
       });

       // 2. PRZEŁĄCZNIK SPIS TREŚCI (INTERACTIVELY SCROLLING TOC)
       const tocLinks = document.querySelectorAll('#table-of-contents a');
       tocLinks.forEach(link => {
           link.addEventListener('click', function(e) {
               e.preventDefault();
               const targetId = this.getAttribute('href');
               const targetElement = document.getElementById(targetId);

               if (targetElement) {
                    // Łagodny scroll do sekcji
                   targetElement.scrollIntoView({ behavior: 'smooth' });
               }
           });
       });


       // 3. INTERAKTYWNE GLOSSARY
       const glossaryEntries = document.querySelectorAll('.glossary-entry');
       glossaryEntries.forEach(entry => {
           entry.querySelector('strong')
               .addEventListener('click', (e) => {
                   const term = e.target.textContent;
                   const definition = e.target.nextElementSibling.textContent.trim();
                   alert(`Definicja terminu "${term}":\n\n${definition}`);
               });
       });

       // 4. UDOŚKONAŁY TECHNIKĘ OPISYWANIA KLUCZOWYCH KATEGORII
       const parametricDetails = document.querySelectorAll('#chapter5 details');
       parametricDetails.forEach(detail => {
           // Uruchamiamy domyślnie wszystkie tabele w parametrach, żeby było czyściej
           detail.open = true;
       });
   });
 ```
