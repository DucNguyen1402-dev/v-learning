## Login Module

### Purpose

Provides a user interface for user authentication and other related services: registration and password reset.

### Responsibilities

- Render login-related forms: Login, Register, and Password Reset.
- **Login Feature:**
  - Collect user credentials.
  - Validate form inputs.
  - Submit authentication requests.
  - Manage loading and error states.
  - **On Success:** Redirect the authenticated user to the Home page.
  - **On Failure:** Display a toast notification with the error message.
- Provide navigation links to corresponding service pages (Register, Password Reset).

### Dependencies

- React ecosystem (`react`, `react-router`, `react-hook-form`)
- Authentication (`shared/auth`)
- UI (`shared/ui`, `shared/overlays`, `shared/fields`)
- Execution (`shared/execution`)
- Navigation (`shared/navigation`, `shared/routes`, `routes/client`)

### Design Principles

- UI concerns belong to the Login module.
- Authentication concerns belong to the Authentication module.
- Storage details are hidden from feature modules.
- Feature modules interact with the Authentication module only through its public API.

### Flow

User
↓
Login Form
↓
Enter credentials
↓
Form validation
↓
Login mutation
↓
shared/auth
├─ Success
│ ↓
│ Save authentication state
│ ↓
│ Redirect to Home
└─ Error
↓
Show error toast
