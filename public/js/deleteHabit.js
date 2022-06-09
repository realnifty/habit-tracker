document.querySelectorAll('.deleteBtn');


async function deleteFormHandler() {


    const response = await fetch(`/api/habits/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelectorAll('.deleteBtn').forEach(habit => {
    
    habit.addEventListener('click', () => {
        let id = habit.getAttribute('data-habit-id');
        async function deleteFormHandler() {


            const response = await fetch(`/api/habits/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                document.location.replace('/dashboard/');
            } else {
                alert(response.statusText);
            }
        }
        habit.addEventListener('click', deleteFormHandler)
    })

})