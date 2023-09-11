import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export const fetchSeriesStatesQuery = gql`
  query ($seriesId: String!) {
    series(seriesId: $seriesId) {
      finished
      format
      started
      id
      teams {
        id
        name
        score
        won
      }
      games {
        sequenceNumber
        map {
          name
        }
        started
        finished
        paused
        teams {
          id
          name
          side
          won
          players {
            id
            name
            character {
              id
              name
            }
            kills
            killAssistsGiven
            deaths
            items {
              id
              equipped
              stashed
            }
            objectives {
              type
              completionCount
            }
          }
        }
        dratfActions {
          sequenceNumber
          type
          drafter {
            id
            type
          }
          draftable {
            id
            type
          }
        }
      }
    }
  }
`;
