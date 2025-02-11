// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAK-L3klvWQARcfU2Vykv4pVxErOAZxsk4",
  authDomain: "sapproject-c53af.firebaseapp.com",
  projectId: "sapproject-c53af",
  storageBucket: "sapproject-c53af.firebasestorage.app",
  messagingSenderId: "606744512422",
  appId: "1:606744512422:web:24fb8200376c58e0a4f167",
  measurementId: "G-P83MM0RZJ6"
};

try {
  if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

const auth = firebase.auth();
const db = firebase.firestore();

// إعدادات Firestore الموصى بها
db.settings({
  ignoreUndefinedProperties: true,
  merge: true
});

// معالج أخطاء مركزي
const handleFirebaseError = (error) => {
  const errors = {
    'auth/email-already-in-use': 'البريد الإلكتروني مستخدم مسبقاً',
    'auth/invalid-email': 'بريد إلكتروني غير صالح',
    'auth/weak-password': 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
    'auth/operation-not-allowed': 'عملية التسجيل غير مسموحة',
    'firestore/write-failed': 'فشل في حفظ البيانات'
  };
  return errors[error.code] || 'حدث خطأ غير متوقع';
};

// تصدير الدوال للاختبار (اختياري)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { firebase, auth, db, handleFirebaseError };
}
