//Do virtuals pass in typeDefs?
const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image:
    link:
}

type Auth {
    token: ?????
    user: User
}

type Query {
    me: User

  }
  type Mutation {
    login(email: email, password: password): Auth????
    addUser(username: username, email: email, password: password): Auth
    saveBook([Author], description, title, bookId, Image, link): User (input type?)
    removeBook(bookId): User

}



`