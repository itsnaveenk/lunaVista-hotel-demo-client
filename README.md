# Luna Vista Hotel Client

This project is a client-side application for the Luna Vista Hotel, built using React and Vite. It provides various functionalities for managing rooms, bookings, and user authentication.

## Table of Contents

1. [Project Structure](#project-structure)
2. Installation
3. Scripts
4. Components
5. Utilities
6. [API Functions](#api-functions)
7. Styling

## Project Structure

```
.eslintrc.cjs
.gitignore
index.html
package.json
public/
README.md
src/
	App.css
	App.jsx
	assets/
		images/
	components/
		admin/
			Admin.jsx
		auth/
			AuthProvider.jsx
			Login.jsx
			Logout.jsx
			Profile.jsx
			Registration.jsx
			RequireAuth.jsx
		booking/
			BookingForm.jsx
			Bookings.jsx
			BookingsTable.jsx
			BookingSuccess.jsx
			BookingSummary.jsx
			Checkout.jsx
			FindBooking.jsx
		common/
			...
		home/
			Home.jsx
		layout/
		room/
		utils/
	index.css
	main.jsx
vite.config.js
```

## Installation

To install the project dependencies, run:

```sh
npm install
```

## Scripts

The following scripts are available in the [`package.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\conne\Desktop\hotel-project\lunaVista-hotel-demo-client\package.json") file:

- [`dev`](command:_github.copilot.openSymbolFromReferences?%5B%22dev%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): Starts the development server using Vite.
- [`build`](command:_github.copilot.openSymbolFromReferences?%5B%22build%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A7%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): Builds the project for production.
- [`lint`](command:_github.copilot.openSymbolFromReferences?%5B%22lint%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): Runs ESLint to check for linting errors.
- [`preview`](command:_github.copilot.openSymbolFromReferences?%5B%22preview%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): Previews the production build.

## Components

### [`App.jsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\conne\Desktop\hotel-project\lunaVista-hotel-demo-client\src\App.jsx")

The main application component that sets up the routing and authentication context.

```jsx
import { AuthProvider } from './components/auth/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/home/Home';
import EditRoom from './components/room/EditRoom';
import ExistingRooms from './components/room/ExistingRooms';
import AddRoom from './components/room/AddRoom';
import Checkout from './components/booking/Checkout';
import RequireAuth from './components/auth/RequireAuth';
import RoomListing from './components/room/RoomListing';
import Admin from './components/admin/Admin';
import BookingSuccess from './components/booking/BookingSuccess';
import Bookings from './components/booking/Bookings';

function App() {
	return (
		<AuthProvider>
			<main>
				<Router>
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/edit-room/:roomId" element={<EditRoom />} />
						<Route path="/existing-rooms" element={<ExistingRooms />} />
						<Route path="/add-room" element={<AddRoom />} />
						<Route path="/book-room/:roomId" element={<RequireAuth><Checkout /></RequireAuth>} />
						<Route path="/browse-all-rooms" element={<RoomListing />} />
						<Route path="/admin" element={<Admin />} />
						<Route path="/booking-success" element={<BookingSuccess />} />
						<Route path="/existing-bookings" element={<Bookings />} />
					</Routes>
				</Router>
			</main>
		</AuthProvider>
	);
}

export default App;
```

### [`AuthProvider.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22AuthProvider.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A3%7D%7D%5D%5D "Go to definition")

Provides authentication context to the application.

### [`RequireAuth.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22RequireAuth.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A37%2C%22character%22%3A9%7D%7D%5D%5D "Go to definition")

A higher-order component that wraps protected routes to ensure the user is authenticated.

### [`NavBar.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22NavBar.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A27%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition")

The navigation bar component.

### [`Home.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22Home.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A29%2C%22character%22%3A32%7D%7D%5D%5D "Go to definition")

The home page component.

### [`EditRoom.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22EditRoom.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A30%2C%22character%22%3A49%7D%7D%5D%5D "Go to definition")

Component for editing room details.

### [`ExistingRooms.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22ExistingRooms.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A31%2C%22character%22%3A46%7D%7D%5D%5D "Go to definition")

Component for listing existing rooms.

### [`AddRoom.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22AddRoom.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A32%2C%22character%22%3A40%7D%7D%5D%5D "Go to definition")

Component for adding a new room.

### [`Checkout.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22Checkout.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A38%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition")

Component for booking a room, wrapped in [`RequireAuth`](command:_github.copilot.openSymbolFromReferences?%5B%22RequireAuth%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A37%2C%22character%22%3A9%7D%7D%5D%5D "Go to definition") to ensure the user is authenticated.

### [`RoomListing.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22RoomListing.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A42%2C%22character%22%3A48%7D%7D%5D%5D "Go to definition")

Component for listing all available rooms.

### [`Admin.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22Admin.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A44%2C%22character%22%3A37%7D%7D%5D%5D "Go to definition")

Admin dashboard component.

### [`BookingSuccess.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22BookingSuccess.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A45%2C%22character%22%3A47%7D%7D%5D%5D "Go to definition")

Component displayed after a successful booking.

### [`Bookings.jsx`](command:_github.copilot.openSymbolFromReferences?%5B%22Bookings.jsx%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.jsx%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A46%2C%22character%22%3A49%7D%7D%5D%5D "Go to definition")

Component for listing all bookings.

## Utilities

### [`ApiFunctions.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2Fcomponents%2Futils%2FApiFunctions.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\conne\Desktop\hotel-project\lunaVista-hotel-demo-client\src\components\utils\ApiFunctions.js")

Contains various API functions for interacting with the backend.

```js
import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:9192"
});

export const getHeader = () => {
	const token = localStorage.getItem("token");
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json"
	};
};

export async function addRoom(photo, roomType, roomPrice) {
	const formData = new FormData();
	formData.append("photo", photo);
	formData.append("roomType", roomType);
	formData.append("roomPrice", roomPrice);

	const response = await api.post("/rooms/add/new-room", formData, {
		headers: getHeader()
	});
	if (response.status === 201) {
		return true;
	} else {
		return false;
	}
}

export async function getRoomTypes() {
	try {
		const response = await api.get("/rooms/room/types");
		return response.data;
	} catch (error) {
		throw new Error("Error fetching room types");
	}
}

export async function getAllRooms() {
	try {
		const result = await api.get("/rooms/all-rooms");
		return result.data;
	} catch (error) {
		throw new Error("Error fetching rooms");
	}
}

// Other API functions...
```

## Styling

### [`App.css`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.css%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\conne\Desktop\hotel-project\lunaVista-hotel-demo-client\src\App.css")

Contains global styles for the application.

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}
@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}
.card {
  padding: 2em;
}
.read-the-docs {
  color: #888;
}
```
### Authentication
The authentication context is provided by the AuthProvider component. It wraps the main application component and provides authentication state and methods to its children.

### Routing
Routing is handled using react-router-dom. The Router component wraps the application, and the Routes component defines the routes. Each route is associated with a specific component that renders when the route is accessed.

### Components
The application is divided into several components, each responsible for a specific functionality. For example, the Home component renders the home page, the Login component handles user login, and the Checkout component handles the booking checkout process.

### Styling
Styling is done using CSS, with the main styles defined in App.css and index.css. Bootstrap is also used for additional styling and layout.

### Utilities
Utility functions and components are placed in the utils directory. These can include helper functions, API calls, and other reusable code.


## Dependencies

The project uses the following dependencies:

- [`axios`](command:_github.copilot.openSymbolFromReferences?%5B%22axios%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A12%2C%22character%22%3A5%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5Ccomponents%5C%5Cutils%5C%5CApiFunctions.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2Fcomponents%2Futils%2FApiFunctions.js%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2Fcomponents%2Futils%2FApiFunctions.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A7%7D%7D%5D%5D "Go to definition"): For making HTTP requests.
- [`bootstrap`](command:_github.copilot.openSymbolFromReferences?%5B%22bootstrap%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): For styling.
- [`date-fns`](command:_github.copilot.openSymbolFromReferences?%5B%22date-fns%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): For date manipulation.
- [`jwt-decode`](command:_github.copilot.openSymbolFromReferences?%5B%22jwt-decode%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A15%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition"): For decoding JSON Web Tokens.
- [`moment`](command:_github.copilot.openSymbolFromReferences?%5B%22moment%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A16%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): For date manipulation.
- [`react`](command:_github.copilot.openSymbolFromReferences?%5B%22react%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A17%2C%22character%22%3A5%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2FREADME.md%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A18%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Csrc%5C%5CApp.css%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.css%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fsrc%2FApp.css%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A16%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition"): The main React library.
- [`react-bootstrap`](command:_github.copilot.openSymbolFromReferences?%5B%22react-bootstrap%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): Bootstrap components for React.
- [`react-date-range`](command:_github.copilot.openSymbolFromReferences?%5B%22react-date-range%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A19%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): Date range picker for React.
- [`react-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22react-dom%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): React DOM bindings.
- [`react-icons`](command:_github.copilot.openSymbolFromReferences?%5B%22react-icons%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A21%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): Icon library for React.
- [`react-router-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22react-router-dom%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): For routing.

## Dev Dependencies

The project uses the following dev dependencies:

- [`vite`](command:_github.copilot.openSymbolFromReferences?%5B%22vite%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A12%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2FREADME.md%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A4%7D%7D%5D%5D "Go to definition"): The build tool.
- [`eslint`](command:_github.copilot.openSymbolFromReferences?%5B%22eslint%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Cconne%5C%5CDesktop%5C%5Chotel-project%5C%5ClunaVista-hotel-demo-client%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A13%7D%7D%5D%5D "Go to definition"): For linting the code.

## .gitignore

The [`.gitignore`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fconne%2FDesktop%2Fhotel-project%2FlunaVista-hotel-demo-client%2F.gitignore%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\conne\Desktop\hotel-project\lunaVista-hotel-demo-client\.gitignore") file specifies which files and directories should be ignored by Git.

```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
node_modules
dist
dist-ssr
*.local
# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```
