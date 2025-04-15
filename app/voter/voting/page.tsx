'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Candidate {
  id: string;
  name: string;
  party: string;
  description: string;
}

export default function VotingPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Simulating fetching candidates from API
    const fetchCandidates = async () => {
      // This would be replaced with an actual API call
      setTimeout(() => {
        setCandidates([
          { 
            id: '1', 
            name: 'Jane Smith', 
            party: 'Progress Party', 
            description: 'Advocating for technological advancement and innovation.'
          },
          { 
            id: '2', 
            name: 'John Doe', 
            party: 'Unity Party', 
            description: 'Working towards a more inclusive and united community.'
          },
          { 
            id: '3', 
            name: 'Alex Johnson', 
            party: 'Future Coalition', 
            description: 'Focused on sustainable development and environmental protection.'
          },
        ]);
      }, 1000);
    };

    fetchCandidates();
  }, []);

  const handleVote = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCandidate) {
      setError('Please select a candidate');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // This would be replaced with an actual API call to submit the vote with ZK proof
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulating successful vote submission
      setVoteSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to submit your vote');
    } finally {
      setLoading(false);
    }
  };

  if (voteSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-10 bg-white rounded-xl shadow-lg text-center">
          <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Vote Submitted!</h2>
          <p className="mt-2 text-gray-600">
            Your vote has been securely recorded. Your identity remains anonymous thanks to zk-SNARKs technology.
          </p>
          <div className="mt-8">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return to Home
            </Link>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>Thank you for participating in the democratic process!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-indigo-600 px-6 py-4">
            <h1 className="text-xl font-semibold text-white">Anonymous Voting Booth</h1>
            <p className="text-indigo-100 text-sm">Cast your vote securely and anonymously</p>
          </div>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleVote}>
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900">Select Your Candidate</h2>
                <p className="mt-1 text-sm text-gray-500">Choose one candidate from the list below</p>
              </div>
              
              {candidates.length === 0 ? (
                <div className="py-12 flex justify-center">
                  <svg className="animate-spin h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <div className="space-y-4">
                  {candidates.map((candidate) => (
                    <div 
                      key={candidate.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
                        selectedCandidate === candidate.id 
                          ? 'border-indigo-500 bg-indigo-50' 
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                      onClick={() => setSelectedCandidate(candidate.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`flex-shrink-0 h-5 w-5 rounded-full border ${
                          selectedCandidate === candidate.id 
                            ? 'border-indigo-600' 
                            : 'border-gray-400'
                        }`}>
                          {selectedCandidate === candidate.id && (
                            <div className="h-3 w-3 m-1 rounded-full bg-indigo-600"></div>
                          )}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-base font-medium text-gray-900">{candidate.name}</h3>
                          <p className="text-sm text-gray-500">{candidate.party}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 pl-8">{candidate.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
              <div className="text-xs text-gray-500">
                <p>Your vote is anonymous and secured with zk-SNARKs</p>
              </div>
              <button
                type="submit"
                disabled={loading || !selectedCandidate}
                className={`${
                  loading || !selectedCandidate 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Submit Vote'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 