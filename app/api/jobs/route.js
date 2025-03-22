export async function GET() {
    const jobs = [
      { id: 1, title: "Software Engineer", company: "Google", location: "Remote" },
      { id: 2, title: "Frontend Developer", company: "Meta", location: "New York" },
      { id: 3, title: "Backend Developer", company: "Amazon", location: "Seattle" },
    ];
  
    return Response.json(jobs);
  }
  