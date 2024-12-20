const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersData = await response.json(); 
      console.log(usersData);
      displayUsers(usersData);
    } catch (error) {
      console.error("Kullanıcıları yüklerken bir hata oluştu", error);
    }
  };
  
  const displayUsers = (users) => {
    const container = document.getElementById("user-cards");
    let userCardsHTML = ""; 
  
    users.forEach((user) => {
      userCardsHTML += `
        <div class="card" style="width: 18rem; margin-bottom: 20px;">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <div class="user-details">
              <p class="card-text"><i class="fas fa-user"></i> ${user.username}</p>
              <p class="card-text"><i class="fas fa-location-dot"></i> ${user.address.city}, ${user.address.street}</p>
              <p class="card-text"><i class="fas fa-building"></i> ${user.company.name}</p>
              <p class="card-text"><i class="fas fa-envelope"></i> ${user.email}</p>
              <p class="card-text"><i class="fas fa-phone"></i> ${user.phone}</p>
            </div>
            <a href="details.html?postId=${user.id}" class="btn btn-primary">View Profile</a>
          </div>
        </div>
      `;
    });
  
    container.innerHTML = userCardsHTML; 
  };
  
  window.onload = () => {
    fetchUsers();
  };
  