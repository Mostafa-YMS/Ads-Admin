# Ads Admin

## Description:

Ads models which are being displayed
on digital advertising screen due to specific timeline and being controlled via React.js Admin-dashboard website

## Function:

The authenticated site admin can:

1. Full Authentication using Firebase && Login using
2. mobile verification
3. List screen ads
4. Update existing screen ads
5. Delete existing screen ads
6. Create new screen ads

## Components:

### 1. Ad:

Takes the Ad data and returns a card div displaying the data.

### 2. CreationForm:

It returns the Ad form, and to make it reusable and reuse it on the update page it takes the states from the page in update page the states are initialized with the Ad data to be updated.

### 3. Header:

It returns the header of the application containing a title and two buttons appear upon authentication, the logout button, and Create Add button.

### 4. Input:

Takes the state, placeholder, label, and type. It returns an input group(input and label).

### 5. PhoneLogin:

Returns phone authentication form in a card div.

## Context:

### AuthContext:

Provide the authenticated user data.

## Pages:

### 1. AdsPage:

Subscribe to redux store and return the Ads in Ad components.

### 2. CreatePgae:

Returns the creation form when submitting dispatch a new addition to the redux store.

### 3. Login:

Returns login with an email form and phone login form on successfully submitting any of them the user gets authenticated and redirected to the ads page.

### 4. SignUp:

Returns signup with an email form and log in with phone form on successfully submitting any of them the user gets authenticated and redirected to the ads page.

### 5. UpdatePage:

Returns creation form prefilled with the ad data to be updated on submitting the new data get dispatched to redux store and update the ad.

## Utils:

### 1. LoggedInRoute:

Custom route to prevent a logged-in user from reaching the login or signup pages.

### 2. ProtectedRoute:

Custom route to prevented unauthenticated users from reaching the ads, creating or updating pages.

## App:

Returns the Header and Routes components.

## firebase.js:

contain the firebase API config and the code responsible for full authentication.

## Testing:

Used Jest and React testing library.

## Installation and running:

After cloning run:

`npm install`

`Add your firebase configurations in firebase.js`

then

`npm start`

and `npm test` for testing.
