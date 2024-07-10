const request = require("supertest");
const app = require("../app"); // Assuming your Express app is exported from app.js

describe("Subjects API", () => {
  it("GET /api/subjects - Success", async () => {
    const response = await request(app).get("/api/subjects");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("name");
  });

  it("GET /api/subjects - Returns correct subjects", async () => {
    const response = await request(app).get("/api/subjects");
    const expectedSubjects = ["Science", "Social Studies", "IT", "English"];
    expect(response.body.map((subject) => subject.name)).toEqual(
      expect.arrayContaining(expectedSubjects),
    );
  });
});
