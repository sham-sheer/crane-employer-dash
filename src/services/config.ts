export const BASE_PATH = import.meta.env.VITE_BASE_PATH as string;

// ----------------------------------------------------------------Applicant Paths---------------------------------------------------------------//
export const AUTH_PATH = BASE_PATH + "/login";
export const AUTH_FIREBASE_PATH = AUTH_PATH + "/firebase";

// ----------------------------------------------------------------Applicant Paths---------------------------------------------------------------//
export const USERS_PATH = BASE_PATH + "/users";
export const APPLICANTS_PATH = BASE_PATH + "/applicant";

// ----------------------------------------------------------------Jobs Paths---------------------------------------------------------------//
export const JOBS_PATH = BASE_PATH + "/jobs";
export const JOBS_BATCH_PATH = JOBS_PATH + "/batch";
export const JOBS_CLOSED_PATH = JOBS_PATH + "/closed";
export const JOBS_COMPANY_PATH = JOBS_PATH + "/company/";

// ----------------------------------------------------------------Company Paths---------------------------------------------------------------//
export const COMPANY_PATH = BASE_PATH + "/company";

export const COMPAN_NAME_PATH = COMPANY_PATH + "/name/";

// ----------------------------------------------------------------Users Paths---------------------------------------------------------------//
export const USER_PATH = BASE_PATH + "/users";
export const USER_TOKEN_PATH = USER_PATH + "/token";

// ----------------------------------------------------------------Resume Paths---------------------------------------------------------------//
export const RESUME_PATH = BASE_PATH + "/resume";
export const RESUME_PATCH_PATH = RESUME_PATH + "/id";
export const RESUME_CONTACT_PATH = RESUME_PATH + "/contact";
export const RESUME_SUMMARY_PATH = RESUME_PATH + "/summary";
export const RESUME_EDUCATION_PATH = RESUME_PATH + "/education";
export const RESUME_EXPERIENCE_PATH = RESUME_PATH + "/experience";
export const RESUME_SKILLS_PATH = RESUME_PATH + "/skills";
export const RESUME_LANGUAGES_PATH = RESUME_PATH + "/languages";
export const RESUME_GEOGRAPHY_PATH = RESUME_PATH + "/geography";
export const RESUME_CERT_PATH = RESUME_PATH + "/certificates";
export const RESUME_PHOTO_PATH = RESUME_PATH + "/photo";
export const RESUME_DOC_PATH = RESUME_PATH + "/documents";

// ----------------------------------------------------------------Resume Generate Paths---------------------------------------------------------------//
export const RESUME_GENERATE_PATH = RESUME_PATH + "/generate";
export const RESUME_GENERATE_PDF_DOC_PATH = RESUME_GENERATE_PATH + "/pdf";
export const RESUME_GENERATE_EXP_PATH = RESUME_GENERATE_PATH + "/exp";
export const RESUME_GENERATE_SUMMARY_PATH = RESUME_GENERATE_PATH + "/summary";

// ----------------------------------------------------------------Resume Paths---------------------------------------------------------------//
export const VIDEO_PATH = BASE_PATH + "/videos";

// ----------------------------------------------------------------Storage Paths---------------------------------------------------------------//
export const STORAGE_PATH = BASE_PATH + "/storage";
export const STORAGE_FIREBASE_PATH = STORAGE_PATH + "/firebase";
export const DOWNLOAD_FIREBASE_STORAGE_PATH = STORAGE_PATH + "/firebase";

export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsOTZ6N2R5YTAwMDBnNjQzOHNrM2xmcHMiLCJpYXQiOjE2NjY0NjEyOTAsImV4cCI6MTY2NjQ5NzI5MH0.VZ3mZqLsLhqNJLejZ_z8hX73ZzWjc6rCu3PPjtN3XI4";

// ----------------------------------------------------------------Admin Paths---------------------------------------------------------------//

export const ADMIN_PATH = BASE_PATH + "/admin";
export const ADMIN_PHOTO_UPLOAD_PATH = ADMIN_PATH + "/photo";
export const ADMIN_RESUME_PATH = ADMIN_PATH + "/resume";
export const ADMIN_RESUME_CREATE_PATH = ADMIN_RESUME_PATH + "/create";
export const ADMIN_PARTIAL_RESUME_CREATE_PATH =
  ADMIN_RESUME_PATH + "/create/partial";

export const ADMIN_GENERATE_PDF_PATH = ADMIN_PATH + "/pdf";
