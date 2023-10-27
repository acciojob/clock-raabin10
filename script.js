
   


        function updateTimer() {
            const timerElement = document.getElementById('timer');
            const now = new Date();
            const options = {  year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const formattedDate = now.toLocaleDateString('en-US', options);
            timerElement.textContent = formattedDate;
        }

        // Call the updateTimer function initially to display the time immediately.
        updateTimer();

        // Update the timer every second
        setInterval(updateTimer, 1000);
