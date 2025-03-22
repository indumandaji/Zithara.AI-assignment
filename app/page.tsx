import Link from 'next/link';

const jobs = [
  { id: "1", title: "Software Engineer", company: "Google", location: "Remote" },
  { id: "2", title: "Frontend Developer", company: "Meta", location: "New York" },
  { id: "3", title: "Backend Developer", company: "Amazon", location: "Seattle" }
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      {jobs.map(job => (
        <Link key={job.id} href={`/job/${job.id}`}>
          <div className="border p-4 mb-2 hover:bg-gray-100 cursor-pointer">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
