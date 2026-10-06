## Description
FRDS (Fast, Responsive, Database System) Library API is a project that is created for the purpose of completing the 1st module of Praktikum Perangkat Bergerak (Mobile Device) of 2026.

## Data structure schema
<img width="812" height="577" alt="frds library api schema (6)" src="https://github.com/user-attachments/assets/598dcf27-5aac-4a0c-bd32-529296f8c353" />

## Example of request and response
### GET /api/loan/ 
Returns all recorded loans

### GET /api/loan/?status=returned 
Returns all loans that has been returned

### GET /api/loan/?status=returned&member_id=your_member_id 
Returns all loans by the specified member that has been returned

## How to deploy on local
1. Clone the project to your local directory
2. Open Terminal on the root directory of the project
3. Type npm run dev on the terminal window
4. Project will run on the specfified port
