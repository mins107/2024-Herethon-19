function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault();
        var reviewInput = document.getElementById('reviewInput').value;
        if (reviewInput) {
            var reviewList = document.getElementById('reviewList');
            var newReview = document.createElement('div');
            newReview.className = 'review';
            newReview.innerHTML = `
                <div class="logo-background">
                    <img src="asset/Logo2 1.svg" alt="User Icon" class="user-icon">
                </div>
                <div class="review-content">
                    <div class="review-username">New User</div>
                    <div class="review-text">${reviewInput}</div>
                </div>
            `;
            reviewList.appendChild(newReview);
            document.getElementById('reviewInput').value = '';
        }
    });
});