import { student, getById } from "./db";

const resolvers = {
  Query: {
    student: () => student,
    person: (_, { id }) => getById(id)
  }
};

export default resolvers;
