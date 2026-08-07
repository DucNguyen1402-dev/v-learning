## Login Module

### Purpose

Provide the user interface for user authentication.

### Responsibilities

- Render the login page.
- Collect user credentials.
- Validate form input.
- Submit the login request.
- Display loading and error states.
- Redirect authenticated users to home after a successful login.

### Dependencies

- `routes/client`
- `react-hook-form`
- `react-router`
- `shared/auth`
- `shared/overlays`
- `shared/error`
- `shared/navigation`
- `shared/ui`
- `shared/fields`

### Flow

User
↓
Login Form
↓
Form Validation
↓
Login.use()
↓
shared/auth -> error -> toast.show(...)
↓
success
↓
forward(home)

### Design Principles

- UI concerns belong to the Login module.
- Authentication logic belongs to the Authentication module.
- Storage implementation is hidden from feature modules.
- Feature modules interact with authentication only through public APIs.
