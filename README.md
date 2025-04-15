# Secure Anonymous Voting System

A privacy-preserving anonymous authentication system using zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) for secure voting.

## Features

- **Anonymous Authentication**: Users can prove their eligibility to vote without revealing their identity
- **Privacy-Preserving**: Voter identities remain completely anonymous throughout the voting process
- **Secure Verification**: Leverages zk-SNARKs cryptographic proofs for verification
- **Administrative Dashboard**: Monitor system status and voting activity without compromising privacy
- **Modern UI/UX**: Intuitive and responsive interfaces for both voters and administrators

## Technology Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Node.js
- **Database**: PostgreSQL for secure data storage
- **Cryptography**: zk-SNARKs implementation for zero-knowledge proofs
- **Containerization**: Docker for consistent deployment

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/secure-anonymous-voting.git
   cd secure-anonymous-voting
   ```

2. Create your environment file:
   ```
   cp .env.example .env
   ```
   Edit the `.env` file with your preferred settings and secure secrets.

3. Start the application using Docker Compose:
   ```
   docker-compose up -d
   ```

4. Access the application:
   - Voter interface: http://localhost:3000/voter
   - Admin interface: http://localhost:3000/admin

## Development

For local development:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

## Security Considerations

- The system uses zk-SNARKs to enable users to prove they're eligible to vote without revealing their identity
- All sensitive information is encrypted at rest and in transit
- Admin access is secured with robust authentication

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── admin/              # Admin interface
│   ├── voter/              # Voter interface
│   └── page.tsx            # Homepage
├── components/             # React components
├── zk-service/             # ZK-SNARKs implementation
├── public/                 # Static assets
├── .env.example            # Example environment variables
├── docker-compose.yml      # Docker Compose configuration
└── Dockerfile              # Docker configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- zk-SNARKs cryptographic research community
- Next.js and React teams for the frontend framework
- PostgreSQL for secure database management
