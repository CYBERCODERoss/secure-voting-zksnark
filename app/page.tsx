import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Secure Anonymous Voting System
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Powered by zk-SNARKs for privacy-preserving anonymous authentication
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
              <div className="h-14 w-14 bg-indigo-500 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Voter Access</h2>
              <p className="text-indigo-200 mb-6">
                Cast your vote with complete privacy. Your identity remains anonymous while ensuring your vote is counted.
              </p>
              <div className="mb-8">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Anonymous authentication
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Privacy-preserving voting
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Cryptographic security
                  </li>
                </ul>
              </div>
              <Link 
                href="/voter" 
                className="block w-full text-center py-3 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 font-medium"
              >
                Enter Voter Portal
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300">
              <div className="h-14 w-14 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Administrator Access</h2>
              <p className="text-indigo-200 mb-6">
                System administrators can monitor the voting process and ensure the integrity of the election.
              </p>
              <div className="mb-8">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    System management
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Secure administrative tools
                  </li>
                </ul>
              </div>
              <Link 
                href="/admin" 
                className="block w-full text-center py-3 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-200 font-medium"
              >
                Enter Admin Portal
              </Link>
            </div>
          </div>

          {/* Technology Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Powered by zk-SNARKs Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="bg-indigo-700 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                <p className="text-indigo-200">Your identity remains completely anonymous while your eligibility is mathematically proven.</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="bg-indigo-700 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cryptographic Security</h3>
                <p className="text-indigo-200">Advanced zero-knowledge proofs ensure security without compromising privacy.</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg">
                <div className="bg-indigo-700 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent Process</h3>
                <p className="text-indigo-200">The entire voting process is transparent and verifiable without revealing voter identities.</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 text-center text-indigo-300 text-sm">
          <p>© {new Date().getFullYear()} Secure Anonymous Voting System. All rights reserved.</p>
          <p className="mt-2">Powered by zk-SNARKs Technology for Privacy-Preserving Authentication</p>
        </footer>
      </div>
    </div>
  );
} 