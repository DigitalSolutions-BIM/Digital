// firebase-config.js

// تأكد من تحميل مكتبات Firebase الأساسية أولاً في HTML
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyAK-L3klvWQARcfU2Vykv4pVxErOAZxsk4",
  authDomain: "sapproject-c53af.firebaseapp.com",
  projectId: "sapproject-c53af",
  storageBucket: "sapproject-c53af.firebasestorage.app",
  messagingSenderId: "606744512422",
  appId: "1:606744512422:web:24fb8200376c58e0a4f167",
  measurementId: "G-P83MM0RZJ6"
};

// منع التهيئة المكررة
try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
} catch (error) {
  console.error('فشل في تهيئة Firebase:', error);
}

// تعريف الخدمات الأساسية
const auth = firebase.auth();
const db = firebase.firestore();

// (اختياري) إعداد معالج الأخطاء العام
auth.useDeviceLanguage();
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('تم اكتشاف مستخدم مسجل:', user.email);
  }
}, error => {
  console.error('خطأ في حالة المصادقة:', error);
});

// (اختياري) تحسين أداء Firestore
db.settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
  merge: true
});

// تأكد من توافقية المتصفحات القديمة
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { firebase, auth, db };
}
