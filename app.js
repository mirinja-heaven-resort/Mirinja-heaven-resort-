// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Yh7wffWmRMyBTXc2PRlBfE7n8uvgMBQ",
  authDomain: "mirinja-heaven-resort.firebaseapp.com",
  projectId: "mirinja-heaven-resort",
  storageBucket: "mirinja-heaven-resort.firebasestorage.app",
  messagingSenderId: "964547613363",
  appId: "1:964547613363:web:98609abce7629e402596c6"
};

// Initialize Firebase & Firestore
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firestore থেকে রুম লোড করার ফাংশন
const roomsContainer = document.getElementById('rooms-container');

function loadRooms() {
    db.collection("rooms").get().then((querySnapshot) => {
        if (querySnapshot.empty) {
            roomsContainer.innerHTML = "<p style='text-align:center;'>এখনো কোনো রুম যুক্ত করা হয়নি।</p>";
            return;
        }

        roomsContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const room = doc.data();
            roomsContainer.innerHTML += `
                <div class="room-card">
                    <h3>${room.name}</h3>
                    <p class="price">৳ ${room.price} / রাত</p>
                    <p>${room.description}</p>
                    <br>
                    <button class="btn-book" onclick="alert('বুকিং করার জন্য ধন্যবাদ! শীঘ্রই যোগাযোগ করা হবে।')">বুকিং করুন</button>
                </div>
            `;
        });
    }).catch((error) => {
        console.error("Error getting rooms: ", error);
        roomsContainer.innerHTML = "<p style='color:red;'>ডাটা লোড করতে সমস্যা হয়েছে! Firebase Security Rules চেক করুন।</p>";
    });
}

// পেজ লোড হলে রুম দেখাবে
loadRooms();
