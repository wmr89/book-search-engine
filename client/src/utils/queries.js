import { gql } from '@apollo/client';

export const GET_ME = gq;`
query me {
    user {
        _id
        name
    }
}
`