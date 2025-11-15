// Fixed Organizer Account
const ORGANIZER_ACCOUNT = {
  email: 'eventsorganizer@iiitdwd.ac.in',
  password: 'EventEase',
  role: 'Organizer'
};

// Student Management
const STUDENTS_KEY = 'eventease_students';

export const getStudents = () => {
  const students = localStorage.getItem(STUDENTS_KEY);
  return students ? JSON.parse(students) : [];
};

const saveStudents = (students) => {
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(students));
};

export const signupStudent = (email, password) => {
  const students = getStudents();
  
  // Check if email already exists
  if (students.some(student => student.email === email)) {
    return { success: false, message: 'Email already registered.' };
  }
  
  // Add new student
  const newStudent = {
    email,
    password,
    role: 'Student',
    createdAt: new Date().toISOString()
  };
  
  students.push(newStudent);
  saveStudents(students);
  
  return { success: true, message: 'Account created successfully!' };
};

export const authenticateUser = (email, password) => {
  // Check if it's the organizer account
  if (email === ORGANIZER_ACCOUNT.email && password === ORGANIZER_ACCOUNT.password) {
    return { success: true, user: ORGANIZER_ACCOUNT };
  }
  
  // Check student accounts
  const students = getStudents();
  const student = students.find(s => s.email === email && s.password === password);
  
  if (student) {
    return { success: true, user: student };
  }
  
  return { success: false, message: 'Invalid email or password.' };
};

export const login = (email, role) => {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userRole', role);
  localStorage.setItem('userEmail', email);
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userEmail');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const getUserRole = () => {
  return localStorage.getItem('userRole');
};

export const getUserEmail = () => {
  return localStorage.getItem('userEmail');
};

export const validateSession = () => {
  const isLoggedIn = isAuthenticated();
  const userRole = getUserRole();
  const userEmail = getUserEmail();
  
  if (!isLoggedIn) {
    return { valid: true }; // Not logged in is valid (public access)
  }
  
  // Check if role is valid
  if (userRole !== 'Student' && userRole !== 'Organizer') {
    logout();
    return { valid: false, message: 'Invalid session detected. Please login again.' };
  }
  
  // If organizer, verify credentials still match
  if (userRole === 'Organizer' && userEmail !== ORGANIZER_ACCOUNT.email) {
    logout();
    return { valid: false, message: 'Invalid session detected. Please login again.' };
  }
  
  // If student, verify email exists in students list
  if (userRole === 'Student') {
    const students = getStudents();
    const studentExists = students.some(s => s.email === userEmail);
    if (!studentExists) {
      logout();
      return { valid: false, message: 'Invalid session detected. Please login again.' };
    }
  }
  
  return { valid: true };
};
