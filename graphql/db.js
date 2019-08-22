export const student = [
  {
    id: "0",
    name: "김현민",
    age: 17,
    gender: "남",
    elementarySchool: "신하",
    middleSchool: "효양",
    highSchool: ""
  },
  {
    id: "1",
    name: "김유빈",
    age: 15,
    gender: "여",
    elementarySchool: "신하",
    middleSchool: "효양",
    highSchool: ""
  },
  {
    id: "2",
    name: "김서영",
    age: 15,
    gender: "여",
    elementarySchool: "신하",
    middleSchool: "효양",
    highSchool: ""
  },
  {
    id: "3",
    name: "이주원",
    age: 14,
    gender: "남",
    elementarySchool: "신하",
    middleSchool: "효양",
    highSchool: ""
  }
];

export const getById = id => {
  const filteredStudent = student.filter(person => person.id === id);
  return filteredStudent[0];
};
