const mockActions = [
  { id: "act1", title: "Cancel Flight", status: "pending", events: ["Intent matched", "Waiting for airline response"] },
  { id: "act2", title: "Retrieve Invoice", status: "completed", events: ["PDF generated", "Email sent to user"] },
  { id: "act3", title: "Hotel Change Request", status: "manual", events: ["Escalated to human agent"] }
];

const mockThreads = {
  "act1": [
    { from: "customer@example.com", text: "Please cancel my flight to Lisbon." },
    { from: "agent@agentsee.ai", text: "We’re checking with the airline." }
  ],
  "act2": [
    { from: "customer@example.com", text: "Can I get the invoice for booking 237?" },
    { from: "agent@agentsee.ai", text: "Invoice sent to your email." }
  ],
  "act3": [
    { from: "customer@example.com", text: "I want a quieter hotel, please." },
    { from: "agent@agentsee.ai", text: "Looking into quieter options nearby." }
  ]
};