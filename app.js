// আপনার Firebase Console থেকে পাওয়া কনফিগারেশনটি নিচে বসান
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firestore থেকে রুমের তালিকা লোড করা
const roomsContainer = document.getElementById('rooms-container');

function loadRooms() {
    db.collection("rooms").get().then((querySnapshot) => {
        roomsContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const room = doc.data();
            roomsContainer.innerHTML += `
                <div class="room-card">
                    <h3>${room.name}</h3>
                    <p class="price">৳ ${room.price} / রাত</p>
                    <p>${room.description}</p>
                    <br>
                    <button class="btn-book">বুকিং করুন</button>
                </div>
            `;
        });
    }).catch((error) => {
        console.error("Error getting rooms: ", error);
        roomsContainer.innerHTML = "<p>রুমের তথ্য লোড করতে সমস্যা হয়েছে।</p>";
    });
}

// পেজ লোড হলে ফাংশনটি চলবে
loadRooms();
