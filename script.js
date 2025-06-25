document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const resultDiv = document.getElementById("result");

  // Predefined array of attendees
  const attendees = [
    { name: "Maryke", surname: "Ma", table: 1 },
    { name: "Rick", surname: "Daverin", table: 1 },
    { name: "Carla", surname: "Bosschieter", table: 1 },
    { name: "Wilma", surname: "Laux", table: 1 },
    { name: "Francois", surname: "Laux", table: 1 },
    { name: "Ankia", surname: "van Wyk", table: 1 },
    { name: "Casper", surname: "van Wyk", table: 1 },
    { name: "Mieke", surname: "van Wyk", table: 1 },
    { name: "Alta", surname: "van Deventer", table: 1 },
    { name: "Henriette", surname: "Visagie", table: 4 },
    { name: "Izak", surname: "Visagie", table: 4 },
    { name: "Andries", surname: "Retief", table: 4 },
    { name: "Marlize", surname: "Louw Beyl", table: 4 },
    { name: "Kobus", surname: "Marais", table: 4 },
    { name: "Lizzel", surname: "Marais", table: 4 },
    { name: "Delmarie", surname: "Marais", table: 4 },
    { name: "Hielde", surname: "Marais", table: 4 },
    { name: "Stephan", surname: "van der Westhuizen", table: 4 },
    { name: "Joggie", surname: "Fotograaf", table: 4 },
    { name: "Deon", surname: "Pa", table: 2 },
    { name: "Adri", surname: "Ma", table: 2 },
    { name: "Deoné", surname: "Fouché", table: 2 },
    { name: "Phillip", surname: "Fouché", table: 2 },
    { name: "Riani", surname: "Steyn", table: 2 },
    { name: "Lizemari", surname: "Brits", table: 2 },
    { name: "Deandré", surname: "Steyn", table: 2 },
    { name: "Hetta", surname: "Ouma", table: 2 },
    { name: "Hester", surname: "Erasmus", table: 2 },
    { name: "Frans", surname: "Erasmus", table: 2 },
    { name: "Jacques", surname: "Marais", table: 5 },
    { name: "Elrica", surname: "Atsma", table: 5 },
    { name: "Reuben", surname: "Naude", table: 5 },
    { name: "Marli", surname: "Erasmus", table: 5 },
    { name: "Hannika", surname: "de Beer", table: 5 },
    { name: "Megan", surname: "St.Clair-Whicker", table: 5 },
    { name: "Deborah", surname: "Strydom", table: 5 },
    { name: "Jackie", surname: "van Wyk", table: 5 },
    { name: "Colene", surname: "Rossouw", table: 5 },
    { name: "Tiaan", surname: "le Roux", table: 5 },
    { name: "Nadia", surname: "de Kock", table: 6 },
    { name: "Henk", surname: "de Kock", table: 6 },
    { name: "Ruan", surname: "Jordaan", table: 6 },
    { name: "Charlene", surname: "Jordaan", table: 6 },
    { name: "Christian", surname: "Louw", table: 6 },
    { name: "Melissa", surname: "Louw", table: 6 },
    { name: "Wico", surname: "Steenkamp", table: 6 },
    { name: "Rochelle", surname: "Scheepers", table: 6 },
    { name: "Henning", surname: "Kriel", table: 6 },
    { name: "Adel", surname: "Kriel", table: 6 },
    { name: "Katelyne", surname: "Jordaan", table: 3 },
    { name: "Karl", surname: "Buitendag", table: 3 },
    { name: "Brandon", surname: "Small", table: 3 },
    { name: "Marlize", surname: "Small", table: 3 },
    { name: "Maritza", surname: "Maré", table: 3 },
    { name: "John", surname: "Maré", table: 3 },
    { name: "Nedine", surname: "Nortje", table: 3 },
    { name: "Johmar", surname: "Stassen", table: 3 },
    { name: "Anke", surname: "Rheeder", table: 3 },
    { name: "Bradley", surname: "Engels", table: 3 },
  ];

  // Search as user types
  searchInput.addEventListener("input", searchAttendee);

  function searchAttendee() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (!searchTerm) {
      resultDiv.innerHTML = "";
      return;
    }

    const foundAttendees = attendees.filter((attendee) => {
      const fullName = `${attendee.name} ${attendee.surname}`.toLowerCase();
      return (
        fullName.includes(searchTerm) ||
        attendee.name.toLowerCase().includes(searchTerm) ||
        attendee.surname.toLowerCase().includes(searchTerm)
      );
    });

    displayResults(foundAttendees);
  }

  function displayResults(foundAttendees) {
    resultDiv.innerHTML = "";

    if (foundAttendees.length === 0) {
      resultDiv.innerHTML =
        '<div class="no-results">No matching attendees found</div>';
      return;
    }

    foundAttendees.forEach((attendee) => {
      const resultItem = document.createElement("div");
      resultItem.className = "attendee-result";
      resultItem.textContent = `${attendee.name} ${attendee.surname} | Tafel ${attendee.table}`;
      resultDiv.appendChild(resultItem);
    });
  }

  // Initial empty state
  searchInput.focus();
});
