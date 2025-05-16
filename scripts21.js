document.addEventListener('DOMContentLoaded', function() {
    const searchName = document.getElementById('searchName');
    const searchYear = document.getElementById('searchYear');
    const searchField = document.getElementById('searchField');
    const searchIndustry = document.getElementById('searchIndustry');
    const searchLocation = document.getElementById('searchLocation');
    const filterField = document.getElementById('filterField');
    const filterIndustry = document.getElementById('filterIndustry');
    const items = document.querySelectorAll('.alumni-item');
    const searchBtn = document.getElementById('searchBtn');
    const addProfileForm = document.getElementById('addProfileForm');
    const directory = document.getElementById('directory');

    function filterItems() {
        const nameQuery = searchName.value.toLowerCase();
        const yearQuery = searchYear.value.toLowerCase();
        const fieldQuery = searchField.value.toLowerCase();
        const industryQuery = searchIndustry.value.toLowerCase();
        const locationQuery = searchLocation.value.toLowerCase();

        items.forEach(item => {
            const info = item.querySelector('.alumni-info');
            const name = info.querySelector('h3').textContent.toLowerCase();
            const year = info.querySelector('p').textContent.toLowerCase();
            const field = info.querySelector('p').textContent.toLowerCase();
            const industry = info.querySelector('p').textContent.toLowerCase();
            const location = info.querySelector('p').textContent.toLowerCase();

            const matchesName = name.includes(nameQuery);
            const matchesYear = year.includes(yearQuery);
            const matchesField = field.includes(fieldQuery);
            const matchesIndustry = industry.includes(industryQuery);
            const matchesLocation = location.includes(locationQuery);

            if (matchesName && matchesYear && matchesField && matchesIndustry && matchesLocation) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function filterBySelection() {
        const field = filterField.value.toLowerCase();
        const industry = filterIndustry.value.toLowerCase();

        items.forEach(item => {
            const info = item.querySelector('.alumni-info');
            const itemField = info.querySelector('p:nth-of-type(3)').textContent.toLowerCase();
            const itemIndustry = info.querySelector('p:nth-of-type(4)').textContent.toLowerCase();

            const matchesField = field ? itemField.includes(field) : true;
            const matchesIndustry = industry ? itemIndustry.includes(industry) : true;

            if (matchesField && matchesIndustry) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchBtn.addEventListener('click', function() {
        filterItems();
        filterBySelection();
    });

    filterField.addEventListener('change', filterBySelection);
    filterIndustry.addEventListener('change', filterBySelection);

    addProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const year = document.getElementById('year').value;
        const field = document.getElementById('field').value;
        const industry = document.getElementById('industry').value;
        const location = document.getElementById('location').value;
        const photo = document.getElementById('photo').value || 'default-photo.jpg';

        const newProfile = document.createElement('li');
        newProfile.className = 'alumni-item';
        newProfile.innerHTML = `
            <img src="${photo}" alt="Photo of ${name}" class="alumni-photo">
            <div class="alumni-info">
                <h3>${name}</h3>
                <p>Graduation Year: ${year}</p>
                <p>Field of Study: ${field}</p>
                <p>Industry: ${industry}</p>
                <p>Location: ${location}</p>
                <button class="follow-btn">Follow</button>
                <button class="message-btn">Message</button>
            </div>
        `;
        directory.appendChild(newProfile);

        addProfileForm.reset();
    });

    document.querySelectorAll('.follow-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Follow feature is not implemented yet.');
        });
    });

    document.querySelectorAll('.message-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Message feature is not implemented yet.');
        });
    });
});
