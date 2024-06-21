export const graphQLSchema = `#graphql 

    type User{
        _id: ID!,
        name: String!,
        age: Int!,
        email: String!,
        password: String!,
        googleId: String!,
        role: String!,
        avatar: String!,
        verified: Boolean!,
        courses: [Course],
        createdAt: String!,
        updatedAt: String!
    }

    type Course {
        _id: ID!
        title: String!
        description: String!
        instructor: User!
        ratingsAverage: Float!
        ratingsQuantity: Int!
        price:Int!
        category: String!
        subCategory: String!
        level: String!
        language: String!
        whatYouWillLearn: [String!]!
        requirements: [String!]!
        isPublished: Boolean!
        isFree:Boolean!
        isApproved: Boolean!
        isRejected: Boolean!
        isFeatured: Boolean!
        isPopular: Boolean!
        isTrending: Boolean!
        isBestSeller: Boolean!
        coverImage: String!
        previewVideo: String!
        students: [String!]!
        createdAt: String!
        updatedAt: String!

    }

    # type Section {
    #     _id: ID!
    # }

    type Resource {
        title: String
        url: String
        _id:ID
    }

    type videoUrl {
        low_quality: String
        medium_quality: String
        high_quality: String
    }
    type Lecture {
        _id: ID!
        title: String!
        description:String!
        position: Int!
        resources: [Resource]
        videoUrl: videoUrl
        duration: Int!
        # section: Section!
        course: Course!
        instructor: User!
        isPublished: Boolean!
        isPreview: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    type Query{
        users:[User]
        courses:[Course]
        course(id:ID!):Course
        # section:[Section]
        lectures:[Lecture]
    }

    type Mutation{
        addUser(name:String!,age:Int!,email:String!,password:String!):String
    }
`;