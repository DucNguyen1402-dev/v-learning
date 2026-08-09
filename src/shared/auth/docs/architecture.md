## Authentication Module

### Purpose

Provide reusable authentication services shared across the application.

### Responsibilities

- Authenticate users through the backend API.
- Persist authentication data.
- Retrieve the current authenticated user.
- Manage authentication storage.
- Expose reusable authentication hooks.

### Exposed APIs

- `Login.use()`
- `saveCurrentUser()`
- `getCurrentUser()`
- `saveAccessToken()`
- `getAccessToken()`

### Dependencies

- Axios API client
- Browser Storage

### Flow

useLogin()
↓
login()
↓
Authentication API
↓
Save user & token

### Design Principles

- UI concerns belong to the Login module.
- Authentication logic belongs to the Authentication module.
- Storage implementation is hidden from feature modules.
- Feature modules interact with authentication only through public APIs.
