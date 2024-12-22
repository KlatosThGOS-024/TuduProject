// // const today = new Date();
// // const day = [
// //   "Sunday",
// //   "Monday",
// //   "Tuesday",
// //   "Wednesday",
// //   "Thrusday",
// //   "Friday",
// //   "Saturday",
// // ];
// // console.log(`${today.getDate()}-${day[today.getDay()]}-${today.getFullYear()}`);
// const addData = [
//   {
//     task: "Complete Project Report",
//     subTask: [
//       "Gather data from all departments",
//       "Write introduction and objectives",
//       "Analyze data and draw conclusions",
//       "Design charts and visual aids",
//       "Write conclusion and recommendations",
//     ],
//   },
//   {
//     task: "Plan Marketing Strategy",
//     subTask: [
//       "Conduct market research",
//       "Identify target audience",
//       "Develop promotional campaigns",
//       "Allocate budget for ads",
//       "Set performance metrics",
//     ],
//   },
//   {
//     task: "Organize Annual Meeting",
//     subTask: [
//       "Book a conference room",
//       "Send invitations to attendees",
//       "Prepare presentation materials",
//       "Arrange catering services",
//       "Draft meeting agenda",
//     ],
//   },
//   {
//     task: "Develop New Website Feature",
//     subTask: [
//       "Define feature requirements",
//       "Create wireframes and mockups",
//       "Write frontend and backend code",
//       "Perform QA testing",
//       "Deploy to production",
//     ],
//   },
//   {
//     task: "Employee Training Program",
//     subTask: [
//       "Identify skill gaps",
//       "Select training materials",
//       "Schedule training sessions",
//       "Invite external trainers",
//       "Collect feedback from employees",
//     ],
//   },
// ];
// addData.map((value) => {
//   console.log(value);
// });

const arr = [
  { task: 21, id: 1 },
  { task: 231, id: 1 },
  { task: 24, id: 21 },
];

const uniqueArr = arr.filter(
  (value, index, self) => index === self.findIndex((t) => t.id === value.id)
);

console.log(uniqueArr);
