# EduConnect

EduConnect is a web application inspired by [eClass](https://www.openeclass.org/), designed to facilitate educational content management and interaction. Built using Next.js, React, and PocketBase, EduConnect aims to provide a seamless experience for educational institutions to manage and engage with students and teachers.

> **Warning**  
> The development of EduConnect has **not officially started yet**. As of now, only the landing page is complete, and the rest of the app is still under construction. Please be aware of this before using the application.

## Installation

To get started with EduConnect, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Kotsasmin/educonnect.git
cd educonnect
```

### 2. Frontend Development Setup

1. Install the required dependencies for the frontend:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

This will start the Next.js development server at `http://localhost:3000`.

### 3. Backend Setup (PocketBase)

1. Navigate to the `pocketbase` directory:

```bash
cd pocketbase
```

2. Make the `pocketbase` executable:

```bash
chmod +x pocketbase
```

3. Start the PocketBase server:

```bash
./pocketbase serve
```

This will start the PocketBase backend server at `http://localhost:8090`.

### 4. Building for Production

When you're ready to build the application for production, follow these steps:

1. Build the frontend:

```bash
npm run build
```

2. Start the production server:

```bash
npm run start
```

This will run the app in production mode.

---

## Credits

Frontend Development: [Skell](https://github.com/skellgreco)
Backend Development: [Kotsasmin](https://github.com/Kotsasmin)

## License

This project is provided for personal viewing and learning purposes only. The code may not be reproduced, modified, or used for any commercial purposes. Unauthorized commercial use, including but not limited to resale or redistribution for profit, is strictly prohibited. Only collaborators and the owner of this project have the exclusive right to make any form of profit from it.
